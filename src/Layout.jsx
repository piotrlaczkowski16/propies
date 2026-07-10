function Layout(props) {
    return(
        <div style={{
                border: "2px solid grey",
                borderRadius: "8px",
                padding: "20px",
                margin: "20px"
            }}>

            <h2> {props.title}</h2>
            <h3> {props.description}</h3>
        </div>
    )
}

export default Layout;