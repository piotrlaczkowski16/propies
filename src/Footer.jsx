function Footer(props){
    return(
        <footer
        style={{
        padding: "1px",
        background: "black",
        textAlign: "center"
    }}>
        <h6>{props.text}</h6>
        </footer>
    );
}

export default Footer;