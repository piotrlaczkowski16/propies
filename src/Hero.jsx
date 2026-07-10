function Hero(props){
    return(
    <div 
    style={{
        padding: "20px",
        background: "darkblue",
    }}>
        <h1>{props.headline}</h1>
        <h3>{props.description}</h3>
    </div>
    );
}
export default Hero;