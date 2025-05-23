import React from 'react'

const About = () => {
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Video Editor from Surat, In addition to my technical skills,
          I stay updated on the latest trends and techniques in video editing.
          This allows me to incorporate fresh ideas that not only meet but exceed client expectations. I’m not just an editor;
          I’m a storyteller at heart, driven by the desire to create content that leaves a lasting impact.
        </p>

        <p>
          Collaboration is at the heart of my process. I believe that the best projects come from open communication and understanding client visions.
          Whether working with brands or individual creators, I prioritize their goals and bring their ideas to life through meticulous editing.

          I also understand the importance of deadlines in this fast-paced environment.
          My organizational skills enable me to manage multiple projects simultaneously without compromising quality.
          I take pride in my ability to adapt quickly and deliver results that exceed expectations.

        </p>
      </section>




      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-design.svg
                " alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Video Editing </h4>

              <p className="service-item-text">
                The most modern and high-quality Video made at a professional level.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">freelancing</h4>

              <p className="service-item-text">
              The most modern and Freelancing Video made at a professional Work.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional level.
              </p>
            </div>

          </li>

        </ul>

      </section>



      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Editing Edition </h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>

              <figure className="testimonials-avatar-box">
                <img src="/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar />
              </figure>

              <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

        </ul>

      </section>




      <div className="modal-container" data-modal-container>

        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">

          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img src="/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
            </figure>

            <img src="/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">

            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

            <time dateTime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>

        </section>

      </div>




      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item ws-2">
            <a href="#">
              <img src="../../public/images/ZIBRISH LOGO.PNG" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="../../public/images/LONG-D LOGO.png"></img>
            </a>
          </li>

          <li className="clients-item pt-2">
            <a href="#">
              <img src="../../public/images/curigen.png"></img>
            </a>
          </li>

          <li className="clients-item  pt-5">
            <a href="#">
              <img src="../../public/images/Merena Logo.png"></img>
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="../../public/images/Logo Png.png "></img>
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>

        </ul>

      </section>

    </article>
  )
}

export default About