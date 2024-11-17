
import './hero.css'

export default function Hero() {
  return (
    <section className="section hero" id="home" aria-label="hero">
        <div className="container">
        <div className="hero-content">
             <h1 className="h1 hero-title">
                Building Digital 
                <span className="has-before">Product</span>, Brand and Experience
             </h1>

             <p className="hero-text">
                At Pixology we specialize in designing, building, shipping and scaling beautiful, usable products with
                blazing-fast
                efficiency
             </p>

             <div className="wrapper">
                <a href="#" className="btn btn-primary has-before has-after">How It Works</a>
                <button className="hero-btn" aria-label="pixology promo">
                <ion-icon name="play-outline" aria-hidden="true"></ion-icon>

                <span className="span">Behind the scenes</span>
                </button>
             </div>

             <ul className="social-list">

             <li>
                <a href="#" className="social-link" style={{color: 'hsl(241, 77%, 63%)'}} >
                <ion-icon name="logo-facebook"></ion-icon>
             <span className="span">Facebook</span>
             </a>
             </li>

             <li>
             <a href="#" className="social-link" style={{color: 'hsl(0, 100%, 50%)'}} >
             <ion-icon name="logo-youtube"></ion-icon>

             <span className="span">Youtube</span>
             </a>
             </li>

             <li>
             <a href="#" className="social-link" style={{color: 'hsl(203, 89%, 53%)'}} >
             <ion-icon name="logo-twitter"></ion-icon>

             <span className="span">Twitter</span>
             </a>
             </li>

        </ul>

        </div>
        <figure className="hero-banner">
            <img src="/images/heroImage.png"  alt="hero banner" className="w-100 heroImage"/>
        </figure>

        </div>
        </section>

  )
}
