/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/
import './Services.css'

export default function Services() {
  return (
    
    <section className="section service" id="service" aria-label="service">
    <div className="container">

      <p className="section-subtitle has-before text-center">Our Services</p>

      <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
          service</span></h2>

      <ul className="grid-list">

        <li>
          <div className="service-card" style={{color:' 174, 77%, 50%'}}>

            <div className="card-icon">
              <img src="/images/service-icon-1.png" width="30" height="30" loading="lazy"
                alt="service icon"/>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Product Management</a>
            </h3>

          </div>
        </li>

        <li>
          <div className="service-card" style={{color: 'hsl(267, 76%, 57%)'}}>

            <div className="card-icon">
              <img src="/images/service-icon-2.png" width="30" height="30" loading="lazy"
                alt="service icon"/>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Web & Mobile Development</a>
            </h3>

          </div>
        </li>

        <li>
          <div className="service-card" style={{color: "hsl(17, 100%, 68%)"}}>

            <div className="card-icon">
              <img src="/images/service-icon-3.png" width="30" height="30" loading="lazy"
                alt="service icon"/>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Fast Customer Support</a>
            </h3>

          </div>
        </li>

        <li>
          <div className="service-card" style={{color:' hsl(343, 98%, 60%)'}}>

            <div className="card-icon">
              <img src="/images/service-icon-4.png" width="30" height="30" loading="lazy"
                alt="service icon"/>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Human Resources</a>
            </h3>

          </div>
        </li>

        <li>
          <div className="service-card" style={{color: "210, 100%, 53%"}}>

            <div className="card-icon">
              <img src="/images/service-icon-5.png" width="30" height="30" loading="lazy"
                alt="service icon"/>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Design and Vreatives</a>
            </h3>

          </div>
        </li>

        <li>
          <div className="service-card" style={{color: "157, 89%, 44%"}} >

            <div className="card-icon">
              <img src="/images/service-icon-6.png" width="30" height="30" loading="lazy"
                alt="service icon"/>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Meketing and Communication</a>
            </h3>

          </div>
        </li>

        {/* <li>
          <div className="service-card" style={{color: "52, 98%, 50%"}} >

            <div className="card-icon">
              <img src="/images/service-icon-7.png" width="30" height="30" loading="lazy"
                alt="service icon"/>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">Business Development</a>
            </h3>

          </div>
        </li> */}

        {/* <li>
          <a href="#" className="link-card" style={{color: "203, 97%, 75%"}}>
            <span className="span">04 More Service</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </li> */}

      </ul>

    </div>
  </section>


  )
}
