function Features() {

  const features = [
    {
      icon: "🚚",
      title: "Islandwide Delivery",
      text: "We deliver your orders anywhere in Sri Lanka."
    },
    {
      icon: "🔄",
      title: "Easy Returns",
      text: "Simple and convenient return process."
    },
    {
      icon: "💳",
      title: "Secure Payment",
      text: "Safe and secure payment options."
    },
    {
      icon: "📞",
      title: "Customer Support",
      text: "Our team is ready to help you."
    }
  ];

  return (
    <section className="features-section">

      <div className="container">

        <div className="row">

          {features.map((feature, index) => (

            <div
              className="col-lg-3 col-md-6"
              key={index}
            >

              <div className="feature-box">

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h5>{feature.title}</h5>

                <p>{feature.text}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;