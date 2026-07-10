function Fruits(props){
    return(
        <ul>
            {props.items.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}

export default Fruitlist; 