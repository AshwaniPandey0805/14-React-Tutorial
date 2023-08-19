
export default function DataBindingComponent(){
 
    var menu = [
        {Category : 'Electronics' , Products : ['TV', 'Mobile']},
        {Category : 'Footware', Products : ['nike', 'Campus']}
    ];


    return(
        <div className="container">
            <h2>Category</h2>
            <ol>
                {
                    menu.map(items=>
                        <li key={items.Category}>{items.Category}
                            <ul>
                                {
                                    items.Products.map(product=>
                                        <li key={product}>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                        )
                }
            </ol>
            

        </div>
    )
}