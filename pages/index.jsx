import { useEffect, useState } from 'react';
import ProductCard from '../components/product-card';
import Search from '../components/search';
import { useFetchProducts } from '../hooks/use-fetch-products';
import { useCartStore } from '../store/cart';

export default function Home() {
  const { products, error } = useFetchProducts();
  const [term, setTerm] = useState('');
  const [localProducts, setLocalProducts] = useState([]);
  const addToCart = useCartStore((store) => store.actions.add);

  const renderProductListOrMessage = () => {
    if (localProducts.length === 0 && !error) {
      return <h4 data-testid="no-products">No products</h4>;
    }

    return localProducts.map((product) => (
      <ProductCard product={product} key={product.id} addToCart={addToCart} />
    ));
  };

  const renderErrorMessage = () => {
    if (!error) {
      return null;
    }

    return <h4 data-testid="server-error">Server is down</h4>;
  };

  const renderProductQuantity = () => {
    return localProducts.length === 1
      ? '1 Product'
      : `${localProducts.length} Products`;
  };

  useEffect(() => {
    if (term === '') {
      setLocalProducts(products);
    } else {
      setLocalProducts(
        products.filter(
          (product) =>
            product.title.toLowerCase().indexOf(term.toLocaleLowerCase()) > -1,
        ),
      );
    }
  }, [products, term]);

  return (
    <main data-testid="product-list" className="my-8">
      <Search doSearch={(newTerm) => setTerm(newTerm)} />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span className="mt-3 text-sm text-gray-500">
          {renderProductQuantity()}
        </span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {renderErrorMessage()}
          {renderProductListOrMessage()}
        </div>
      </div>
    </main>
  );
}
