function ProductList() {

  const products = [
    {
      name: "Floral Summer Dress",
      price: 3490,
      oldPrice: 4290,
      image:
        "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Classic White Blouse",
      price: 2590,
      oldPrice: 3190,
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Women's Denim",
      price: 3990,
      oldPrice: 4990,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Casual Summer Top",
      price: 2290,
      oldPrice: 2890,
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Elegant Party Dress",
      price: 4590,
      oldPrice: 5590,
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Casual Shirt",
      price: 2990,
      oldPrice: 3590,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="products" className="products-section">

      <div className="container">

        <div className="section-title">

          <p>OUR COLLECTION</p>

          <h2>New Arrivals</h2>

          <span>
            Discover our latest fashion collection
          </span>

        </div>

        <div className="row">

          {products.map((product, index) => (

            <div
              className="col-lg-4 col-md-6 mb-5"
              key={index}
            >

              <div className="product-card">

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="sale-badge">
                    SALE
                  </span>

                  <button className="wishlist">
                    ♡
                  </button>

                </div>

                <div className="product-info">

                  <h5>{product.name}</h5>

                  <div className="price">

                    <span className="old-price">
                      Rs. {product.oldPrice.toLocaleString()}
                    </span>

                    <strong>
                      Rs. {product.price.toLocaleString()}
                    </strong>

                  </div>

                  <button className="add-cart">
                    ADD TO CART
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductList;