import profileAbout from '../assets/profile-about-800.webp'
import profileAboutSmall from '../assets/profile-about-400.webp'

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <p className="section-label">02 ABOUT</p>
      <img
        className="about-image"
        src={profileAbout}
        srcSet={`${profileAboutSmall} 400w, ${profileAbout} 800w`}
        sizes="(max-width: 900px) 150px, 200px"
        width="800"
        height="546"
        alt="Portrait of Maria Birath"
        loading="lazy"
        decoding="async"
      />
      <div className="about-content">
        <h2 id="about-title">I LIKE SIMPLE THINGS WITH A UNIQUE TOUCH.</h2>
        <p className="about-description">
          Frontend developer student at Medieinstitutet with a focus on UX/UI
          and intuitive digital experiences. I’m driven by creating digital
          experiences that feel intentional, functional and a little different.
        </p>
        <p className="about-skills">
          HTML / CSS / JAVASCRIPT / TYPESCRIPT / REACT / API / GIT / UX / UI
        </p>
      </div>
    </section>
  )
}

export default About
