import profileAbout from '../assets/profile-about.png'

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <p className="section-label">02 ABOUT</p>
      <img className="about-image" src={profileAbout} alt="Portrait of Maria Birath" loading="lazy" />
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
