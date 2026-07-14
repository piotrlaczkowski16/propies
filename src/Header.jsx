function Header(props) {
  return (
    <div>
    <header
      style={{ backgroundColor: "grey", padding: "10px", display: "flex", justifyContent: "space-between" }}>
        <>
        <h2 style={{float: "left"}}>{props.title}</h2>
        </>
        <div>
        <ul style={{justifyContent: "space-between"}}>
          <a href="home#">   home</a>
          <a href="about us#">  about us</a>
        <a href="more#">  more</a>
          <a href="exit#">  exit</a>
        </ul>
        </div>

    </header>
    </div>
  );
}

export default Header;