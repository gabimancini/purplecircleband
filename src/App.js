import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./routes/routes";
 
function App() {
  return (
     <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
