import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import profileHero from './assets/profile-hero.png'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="home" aria-labelledby="home-title">
          <div className="home-content">
            <p className="section-label">01 HOME</p>
            <h1 id="home-title">FRONTEND<br />DEVELOPER.</h1>
            <p className="home-description">
              UX / UI · REACT · TYPESCRIPT · BORLÄNGE, SWEDEN
            </p>
          </div>
          <img className="home-image" src={profileHero} alt="Maria Birath in a black hoodie" />
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
