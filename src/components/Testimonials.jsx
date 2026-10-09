function Testimonials() {

  const testimonials = [
    {
      name: "Sanduni",
      text: "Beautiful clothing and very good quality. Delivery was fast."
    },
    {
      name: "Nethmi",
      text: "I really loved the dress. The material is comfortable and stylish."
    },
    {
      name: "Tharushi",
      text: "Great online shopping experience. I will definitely order again."
    }
  ];

  return (
    <section className="testimonial-section">

      <div className="container">

        <div className="section-title">

          <p>OUR CUSTOMERS</p>

          <h2>What They Say</h2>

        </div>

        <div className="row">

          {testimonials.map((item, index) => (

            <div
              className="col-md-4 mb-4"
              key={index}
            >

              <div className="testimonial-card">

                <div className="stars">
                  ★★★★★
                </div>

                <p>
                  "{item.text}"
                </p>

                <h6>
                  {item.name}
                </h6>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;