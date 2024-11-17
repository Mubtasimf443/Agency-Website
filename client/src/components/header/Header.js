/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/
import './header.css'

export default function Header() {
  return (
    
  <header className="header" data-header>
  <div className="container">

    <a href="#" className="logo">
      <img src='/images/HeaderIcon.png' />
      Halal Softwares
    </a>

    <nav className="navbar" data-navbar>

      <div className="wrapper">
        <a href="#" className="logo">Pixology</a>

        <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <ul className="navbar-list">

        <li className="navbar-item">
          <a href="#home" className="navbar-link" data-nav-link>Home</a>
        </li>

        <li className="navbar-item">
          <a href="#service" className="navbar-link" data-nav-link>Services</a>
        </li>

        <li className="navbar-item">
          <a href="#feature" className="navbar-link" data-nav-link>Features</a>
        </li>

        <li className="navbar-item">
          <a href="#project" className="navbar-link" data-nav-link>Portfolio</a>
        </li>

        <li className="navbar-item">
          <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
        </li>

      </ul>

    </nav>

    <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
      <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
    </button>

    <a href="#" className="btn btn-primary has-before has-after">Let’s Talk 👋</a>

    <div className="overlay" data-nav-toggler data-overlay></div>

  </div>
</header>

  )
}
