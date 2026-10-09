function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          <div className="col-lg-4">

            <h3>LAVENDER FASHION</h3>

            <p>
              Modern fashion for modern lifestyles.
              Discover your style with us.
            </p>

          </div>

          <div className="col-lg-2">

            <h5>SHOP</h5>

            <a href="#products">New Arrivals</a>
            <a href="#categories">Dresses</a>
            <a href="#categories">Tops</a>
            <a href="#categories">Denim</a>

          </div>

          <div className="col-lg-3">

            <h5>INFORMATION</h5>

            <a href="/about">About Us</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>

          </div>

          <div className="col-lg-3">

            <h5>CONTACT</h5>

            <p>📍 Colombo, Sri Lanka</p>
            <p>📞 +94 77 123 4567</p>
            <p>✉️ info@lavenderfashion.lk</p>

          </div>

        </div>

        <hr />

        <div className="copyright">
          © 2026 Lavender Fashion. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;