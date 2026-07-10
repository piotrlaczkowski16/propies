import Layout from "./Layout";
function App() {
  return (
    <div>
      <Layout
      title="welcome" 
      description="this is a home page"/>

      <Layout 
      title="about us" 
      description="learn about our company"/>

      <Layout 
      title="contact" 
      description="get in touch with us"/>
    </div>

  );
}

export default App;