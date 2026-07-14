function Product({ product }) {
    return (
    
        <div style={{display:"flex", justifyContent:"space-around", backgroundColor: "lightblue"}}>
            {product.map((product,index) => (
                <div key={index} style={{border:"solid 2px white", backgroundColor: "skyblue"}}>
                <img src={product.obraz} alt="obraz" height="190px" />
                <h2>Name: {product.name}</h2>
                <p>Price: {product.price}$</p>
                 <br />
                <button>Buy now</button>
                </div>
            ))}
        </div>

    );
}
export default Product;