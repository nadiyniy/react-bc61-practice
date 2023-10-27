import React, { useEffect, useState } from "react";
import { fetchProducts } from "./servises/apiJs";
import { ProductItem } from "./components/ProductItem";
import { async } from "q";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    const getData = async () => {
      // this.setState({ loading: true });
      setLoading(true);
      try {
        const { products } = await fetchProducts({ skip });
        // setState({ products })
        setProducts((prev) => [...prev, ...products]);
        console.log(products);
      } catch (err) {
        // console.log(err)
        setError(err.message);
      } finally {
        // setState({ loading: false })
        setLoading(false);
      }
    };
    getData();
  }, [skip]);

  // async componentDidMount() {
  // 	this.setState({ loading: true })
  // 	try {
  // 		const { products } = await fetchProducts()
  // 		this.setState({ products })
  // 		console.log(products)
  // 	} catch (err) {
  // 		console.log(err)
  // 	} finally {
  // 		this.setState({ loading: false })
  // 	}
  // }

  // async componentDidUpdate(prevProps, prevState) {
  // 	if (this.state.skip !== prevState.skip) {
  // 		this.setState({ loading: true })

  // 		try {
  // 			const { products } = await fetchProducts({ skip: this.state.skip })
  // 			this.setState(prev => ({ products: [...prev.products, ...products] }))
  // 		} catch (error) {
  // 			console.log(error)
  // 		} finally {
  // 			this.setState({ loading: false })
  // 		}
  // 	}
  // }

  const handleLoadMore = () => {
    // setState(prev => ({ skip: prev.skip + 4 }))
    setSkip((prev) => prev + 4);
  };

  return (
    <div>
      <h1>Product list</h1>
      <ul>
        {products.map((item) => (
          <ProductItem product={item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleLoadMore}>load more</button>
    </div>
  );
};
export default App;
