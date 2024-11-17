/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/
import './Feature.css'

export default function Feature() {
  return (
    <section className="section feature" id="feature" aria-label="feature">
    <div className="container">

      <figure className="feature-banner">
        <img src="/images/feature-banner.png" width="582" height="585" loading="lazy" alt="feature banner"
          className="w-100" />
      </figure>

      <div className="feature-content">

        <p className="section-subtitle has-before">Why Choose us</p>

        <h2 className="h2 section-title">
          Specialist in aviding clients of financial <span className="has-before">challenges</span>
        </h2>

        <ul className="feature-list">

          <li>
            <div className="feature-card">

              <div className="card-icon" style={{color: "hsl(174, 77%, 50%)"}}>
                <ion-icon name="rocket-sharp" aria-hidden="true"></ion-icon>
              </div>

              <div>
                <h3 className="h3 card-title">Fast working process</h3>

                <p className="card-text">
                  At Pixology we specialize in designing, building, shipping and scaling beautifu.
                </p>
              </div>

            </div>
          </li>

          <li>
            <div className="feature-card">

              <div className="card-icon" style={{color:" hsl(241, 77%, 63%)"}}>
                <ion-icon name="people-sharp" aria-hidden="true"></ion-icon>
              </div>

              <div>
                <h3 className="h3 card-title">Didicated team</h3>

                <p className="card-text">
                  At Pixology we specialize in designing, building, shipping and scaling beautifu.
                </p>
              </div>

            </div>
          </li>

          <li>
            <div className="feature-card">

              <div className="card-icon" style={{color: "hsl(343, 98%, 60%)"}}>
                <ion-icon name="headset-sharp" aria-hidden="true"></ion-icon>
              </div>

              <div>
                <h3 className="h3 card-title">24/7 hours support</h3>

                <p className="card-text">
                  At Pixology we specialize in designing, building, shipping and scaling beautifu.
                </p>
              </div>

            </div>
          </li>

        </ul>

      </div>

    </div>
  </section>

  )
}
