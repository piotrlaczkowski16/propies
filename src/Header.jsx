function Header(props) {
  return (
    <header
      style={{
        backgroundColor: "grey",
        padding: "20px",
      }}
    >
      <h1>{props.title}</h1>

      <nav>
        <a href="#" style={{ color: "white", marginRight: "15px" }}>
          {props.nav1}
        </a>

        <a href="#" style={{ color: "white", marginRight: "15px" }}>
          {props.nav2}
        </a>

        <a href="#" style={{ color: "white", marginRight: "15px" }}>
          {props.nav3}
        </a>

        <a href="#" style={{ color: "white" }}>
          {props.nav4}
        </a>
      </nav>
    </header>
  );
}

export default Header;