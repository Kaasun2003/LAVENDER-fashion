function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="row align-items-center">

          {/* About Text */}
          <div className="col-lg-6">

            <p className="about-small">
              ABOUT AURA
            </p>

            <h1>
              Fashion Made
              <br />
              For You
            </h1>

            <p>
              Welcome to AURA, your online destination for
              modern and affordable clothing. We bring together
              comfortable designs, quality materials and modern
              fashion trends.
            </p>

            <p>
              Our goal is to make online fashion shopping
              simple, enjoyable and accessible to everyone.
            </p>

          </div>

          {/* About Image */}
          <div className="col-lg-6">

            <img
              className="about-image"
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80"
              alt="AURA Fashion"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPage;