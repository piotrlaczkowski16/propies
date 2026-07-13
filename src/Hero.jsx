function Hero(props){
    return(
    <div 
    style={{
        padding: "20px",
        background: "darkorange",
    }}>
        <h1>{props.headline}</h1>
        <h3>{props.description}</h3>
        <img src="profilowe.jpg" alt="profilowe" width="200px"/>
    </div>
    );
}
export default Hero;