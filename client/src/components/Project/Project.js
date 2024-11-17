/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/
import './Project.css'
export default function Project() {
  return (
    <section class="section project" id="project" aria-label="project">
    <div class="container">

      <p class="section-subtitle has-before text-center">Projects</p>

      <h2 class="h2 section-title text-center">
        Pixology complete <span class="has-before">project</span>
      </h2>

      <ul class="filter-list">

        <li>
          <button class="filter-btn active" data-filter-btn>Website</button>
        </li>

        <li>
          <button class="filter-btn" data-filter-btn>Landing Page</button>
        </li>

        <li>
          <button class="filter-btn" data-filter-btn>iOS App</button>
        </li>

        <li>
          <button class="filter-btn" data-filter-btn>Landing Page</button>
        </li>

        <li>
          <button class="filter-btn" data-filter-btn>Branding Design</button>
        </li>

      </ul>

      <ul class="grid-list">

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={{width: 835, height: 429}}>
              <img src="/images/project-1.jpg" width="835" height="429" loading="lazy" alt="Book art design"
                class="img-cover"/>
            </figure>

            <div class="card-content">
              <h3 class="h3">
                <a href="#" class="card-title">Book art design</a>
              </h3>

              <a href="#" class="card-tag">Branding</a>
            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={{width: 416, height: 429}}>
              <img src="/images/project-2.jpg" width="416" height="429" loading="lazy" alt="Graphic Design"
                class="img-cover"/>
            </figure>

            <div class="card-content">
              <h3 class="h3">
                <a href="#" class="card-title">Graphic Design</a>
              </h3>

              <a href="#" class="card-tag">Design</a>
            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={{width: 416, height: 429}}>
              <img src="/images/project-3.jpg" width="416" height="429" loading="lazy" alt="3d Digital Art"
                class="img-cover"/>
            </figure>

            <div class="card-content">
              <h3 class="h3">
                <a href="#" class="card-title">3d Digital Art</a>
              </h3>

              <a href="#" class="card-tag">Design</a>
            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={{width: 416, height: 429}} >
              <img src="/images/project-4.jpg" width="416" height="429" loading="lazy" alt="Web Design"
                class="img-cover"/>
            </figure>

            <div class="card-content">
              <h3 class="h3">
                <a href="#" class="card-title">Web Design</a>
              </h3>

              <a href="#" class="card-tag">Design</a>
            </div>

          </div>
        </li>

        <li>
          <div class="project-card">

            <figure class="card-banner img-holder" style={{width: 416, height: 429}} >
              <img src="/images/project-5.jpg" width="416" height="429" loading="lazy"
                alt="Mobile App Design" class="img-cover"/>
            </figure>

            <div class="card-content">
              <h3 class="h3">
                <a href="#" class="card-title">Mobile App Design</a>
              </h3>

              <a href="#" class="card-tag">Design</a>
            </div>

          </div>
        </li>

      </ul>

    </div>
  </section>


  )
}
