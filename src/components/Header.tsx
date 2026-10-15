import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          closeMenu()
          // Return keyboard focus before hiding the navigation.
          event.currentTarget.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
        }
      }}
    >
      <a className="header-name" href="#home" onClick={closeMenu}>
        MARIA BIRATH
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
      </button>

      <nav
        id="main-navigation"
        className={isMenuOpen ? 'header-nav open' : 'header-nav'}
        aria-label="Main navigation"
      >
        <a href="#home" onClick={closeMenu}>01 HOME</a>
        <a href="#about" onClick={closeMenu}>02 ABOUT</a>
        <a href="#projects" onClick={closeMenu}>03 WORK</a>
        <a href="#contact" onClick={closeMenu}>04 CONTACT</a>
      </nav>
    </header>
  )
}

export default Header
