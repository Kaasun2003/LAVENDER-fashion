function Categories() {

  const categories = [
    {
      name: "Dresses",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Tops",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Denim",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Office Wear",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="categories" className="categories-section">

      <div className="container">

        <div className="section-title">
          <p>EXPLORE</p>
          <h2>Shop By Category</h2>
        </div>

        <div className="row">

          {categories.map((category, index) => (

            <div className="col-lg-3 col-md-6 mb-4" key={index}>

              <div className="category-card">

                <img
                  src={category.image}
                  alt={category.name}
                />

                <div className="category-overlay">
                  <h3>{category.name}</h3>
                  <button>SHOP NOW →</button>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;