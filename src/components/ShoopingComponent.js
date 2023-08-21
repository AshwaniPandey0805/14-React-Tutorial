import { useState, useEffect } from "react";

export default function ShoppingComponent(){

    // fetching data from 'http://fakestoreapi.com'

    const [categories, setCategories] = useState([]);
    const [Products, setProducts] = useState([]);
    
    function LoadCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            data.unshift('All');
            setCategories(data);
        })
    }

    function LoadProducts(){
        fetch('https://fakestoreapi.com/products')
        .then(response=> response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])

    return(
        <>
            <div className="container-fluid">
                <header className="bg-danger text-white text-center p-2">
                    <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
                </header>
                <section className="row">
                    <nav className="col-3">
                        <div>
                            <label htmlFor="">Select a category</label>
                            <div>
                                <select className="form-select">
                                    {
                                        categories.map(category=>
                                           <option key={category}>{category}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                    </nav>
                    <main className="col-9 d-flex flex-wrap overflow-auto" style={{height : '550px'}}>
                        {
                            Products.map(product=>
                            <div key={product.id} className="card m-2 p-2 w-25">
                                <img src={product.image} alt="" className="card-img-top" height='150' />
                                <div className="card-header">
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success">
                                                {product.rating.rate}
                                                <span>[{product.rating.count}]</span>
                                            </span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                                )
                        }
                    </main>
                </section>
            </div>
        </>
    )
}