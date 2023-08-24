
export function CardComponent(props){

    return(
        <div className="card p-1 m-3" style={{width:'200px'}}>
            <img src={props.product.image} alt=""  className="card-img-top" style={{height: '160px'}}/>
            <div className="card-header" style={{height: '200px'}}>
                <p>{props.product.title}</p>
            </div>

        </div>
    )
}