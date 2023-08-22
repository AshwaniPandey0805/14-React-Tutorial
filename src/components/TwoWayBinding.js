import { useState } from "react";

export default function TwoWayBinding(){

    const [products, setProduct] = useState({Name : '', Price : 0, City : '', Stock : false});
    const [newProduct, setNewProducts] = useState({Name : '', Price : 0, City : '', Stock : false});

    function HandleName(e){
        setProduct({
            Name : e.target.value,
            Price : products.Price,
            City : products.City,
            Stock : products.Stock
        })

    }
    function HandlePrice(e){
        setProduct({
            Name : products.Name,
            Price : e.target.value,
            City : products.City,
            Stock : products.Stock
        })


    }
    function HandleCity(e){
        setProduct({
            Name : products.Name,
            Price : products.Price,
            City : e.target.value,
            Stock : products.Stock
        })


    }
    function HandleStock(e){
        setProduct({
            Name : products.Name,
            Price : products.Price,
            City : products.City,
            Stock : e.target.checked
        })
    }

    function HandleRegisterClick(){
        setNewProducts(products);
    }


    return(
        <div className="container-fluid m-2 p-2">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" className="form-control" onChange={HandleName}/></dd>
                        <dt>Price</dt>
                        <dd><input type="text"  className="form-control" onChange={HandlePrice}/></dd>
                        <dt>City</dt>
                        <dd>
                            <select className="form-select" onChange={HandleCity}>
                                <option >Delhi</option>
                                <option >Uttar Pradesh</option>
                                
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input  className="form-check-input" type="checkbox" onChange={HandleStock}/> Available
                        </dd>
                        <button className="btn btn-primary w-100" onClick={HandleRegisterClick}>Register</button>
                    </dl>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(newProduct.Stock == true)?"Available" : "Out of Stock"}</dd>
                    </dl>
                </div>
            </div>

        </div>
    )
}