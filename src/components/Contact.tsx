const Contact = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <p className="section-label">04 CONTACT</p>
      <div className="contact-content">
        <h2 id="contact-title">HAVE AN IDEA?<br />LET’S TALK.</h2>
        <ul className="contact-links">
          <li>
            <a href="mailto:maria.birath@gmail.com">
              <span aria-hidden="true">↗ </span>MARIA.BIRATH@GMAIL.COM
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maria-birath-a43aa4398/">
              <span aria-hidden="true">↗ </span>LINKEDIN
            </a>
          </li>
          <li>
            <a href="https://github.com/mariabhai">
              <span aria-hidden="true">↗ </span>GITHUB / MARIABHAI
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
