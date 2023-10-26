import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./routes/routes";
 
function App() {
  console.log(window.location.pathname)
  return (
     <>
     {window.location.pathname === "/" && <div className="bg_home"></div> }
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
