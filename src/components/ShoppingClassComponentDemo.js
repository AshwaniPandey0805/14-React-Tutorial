import React from "react";
import { CardComponent } from "./CardComponent";

export default class ShoppingClassComponentDemo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            categories : [],
            products : []

        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    GetCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                categories : data
            })
        })
    }
    GetProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                products : data
            })
        })
    }

    componentDidMount(){
        this.GetCategories();
        this.GetProducts('https://fakestoreapi.com/products');

    }

    handleCategoryChange(e){
        this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }

    render(){
        return(
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center">
                    <h2><span className="bi bi-cart"></span> Shopping Cart</h2>
                </header>
                <section className="row">
                    <nav className="col-2">
                        <h3>Select Categorie</h3>
                        <select className="form-select" onChange={this.handleCategoryChange}>
                            {
                                this.state.categories.map(category=>
                                    <option key={category}>{category}</option>
                                    )
                            }
                            
                        </select>
                    </nav>
                    <main className="col-10">
                        <div className="d-flex flex-wrap w">
                            {
                                this.state.products.map(product=>
                                    <CardComponent key={product.id} product={product} />
                                    )
                                
                            }
                        </div>
                    </main>
                </section>
            </div>
        )
    }
}