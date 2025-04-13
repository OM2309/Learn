import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async (currentPage) => {
    const skip = (currentPage - 1) * 10;
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`
      );
      const data = await response.json();
      setProducts((prev) => [...prev, ...data.products]);
      setHasMore(data.products.length > 0);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 100 && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid red",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Products
      </h1>

      <ul
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <strong style={{ display: "block", marginBottom: "8px" }}>
              {product.title}
            </strong>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>

      {loading && (
        <p style={{ marginTop: "20px", color: "blue" }}>
          Loading more products...
        </p>
      )}
      {!hasMore && (
        <p style={{ marginTop: "20px", color: "gray" }}>
          No more products to load.
        </p>
      )}
      {error && (
        <p style={{ marginTop: "20px", color: "red" }}>Error: {error}</p>
      )}
    </div>
  );
};

export default App;
