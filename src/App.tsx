import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import profileHero from './assets/profile-hero-800.webp'
import profileHeroSmall from './assets/profile-hero-400.webp'
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
          <img
            className="home-image"
            src={profileHero}
            srcSet={`${profileHeroSmall} 400w, ${profileHero} 800w`}
            sizes="(max-width: 700px) calc((100vw - 32px) * 0.7), (max-width: 1200px) calc((100vw - 64px) * 0.35), 398px"
            width="800"
            height="1421"
            alt="Maria Birath in a black hoodie"
            fetchPriority="high"
          />
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
