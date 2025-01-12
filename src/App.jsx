/**
 * @copyright 2024 Imad Manni
 * @license Apache2.0
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
  <>
  <Header/>
  <main> <Hero/> <About/> <Skill/> <Contact/> </main>
  <Footer/>
  </>
)
}
export default App;