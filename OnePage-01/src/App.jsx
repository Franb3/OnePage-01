import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <AboutUs />
        <Gallery />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default App;
