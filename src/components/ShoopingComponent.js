import { useState, useEffect } from "react";

export default function ShoppingComponent(){

    // fetching data from 'http://fakestoreapi.com'

    const [categories, setCategories] = useState([]);
    const [Products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]); 
    const [itemsCount, setItemsCount] =  useState([0]);

    function GetCartItemsCount(){
        setItemsCount(cartItems.length);
    }
    
    function LoadCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            data.unshift('All');
            setCategories(data);
        })
    }

    function LoadProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[cartItems.length])

    function handleCatrgoryChange(e){
        if(e.target.value == 'All'){
            LoadProducts(`https://fakestoreapi.com/products`);
        }else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
        

    }

    function handleAddToCart(e){
        alert("Item Added to cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(response=> response.json())
        .then(data=>{

            cartItems.push(data);
            GetCartItemsCount();
        })

    }

    return(
        <>
            <div className="container-fluid">
                <header className="bg-danger text-white text-center m-2 p-2">
                    <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
                </header>
                <section className="row">
                    <nav className="col-2">
                        <div>
                            <label htmlFor="">Select a category</label>
                            <div>
                                <select onChange={handleCatrgoryChange} className="form-select">
                                    {
                                        categories.map(category=>
                                           <option key={category}>{category}</option> )
                                    }
                                </select>
                            </div>
                        </div>
                    </nav>
                    <main className="col-7 d-flex flex-wrap overflow-auto" style={{height : '550px'}}>
                        {
                            Products.map(product=>
                            <div key={product.id} className="card m-6 p-3 w-25">
                                <img src={product.image} alt="" className="card-img-top" height='150' />
                                <div className="card-header" style={{height : '200px'}}>
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
                                        <div className="card-footer">
                                            <button id={product.id} onClick={handleAddToCart} className="btn btn-danger text-white w-100" > <span className="bi bi-cart4"></span>Add to cart</button>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                                )
                        }
                    </main>
                    <aside className="col-3">
                        <button className="btn btn-danger w-100"><span className="bi bi-cart3">[{itemsCount}]Item Added to cart</span></button>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Preview</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(items=>
                                        <tr key={items.id}>
                                            <td>{items.title}</td>
                                            <td>{items.price}</td>
                                            <td>
                                                <img src={items.image} width="50" height="50" />
                                            </td>
                                            <td><button className="btn btn-danger">
                                                <span className="bi bi-trash"></span></button></td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </aside>
                </section>
            </div>
        </>
    )
}