import Header from "./Header"
import Hero from "./Hero"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

function App() {
  return (
    <div style={{
      
    }}>
      <Header
        title="Daily News"
        nav1="home"
        nav2="sports"
        nav3="technology"
        nav4="contact"
      />

      <Hero
        headline="breaking news"
        description="a new AI technology is changing the future. no its not but we gonna tel u that it is"
      />

      <Sidebar
        title="News"
        item1="footbal word cap"
        item2="stock market dies"
        item3="in the night it will be dark"
      />

      <Footer
        text=" 2026 daily news no rights reserved"
      />
    </div>
  );
}

export default App;