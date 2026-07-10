function Sidebar(props){
    return(
    <aside
    style={{
        padding: "10px",
        margin: "10px",
        
    }}>
        <h2>{props.title}</h2>
        <ul style={{
            textAlign: "left"
        }}>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
        </ul>
    </aside>
    );
}

export default Sidebar;