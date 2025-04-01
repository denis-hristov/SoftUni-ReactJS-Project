import { useSearchParams } from 'react-router-dom';
import products from './InfoAllProducts';
import { Link } from 'react-router-dom';

export default function ProductSection({addToCart}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterType = searchParams.get('type') || 'all';
    const sortType = searchParams.get('sort') || 'default';


    const filteredItems = products.filter(product => 
        filterType === 'all' || product.type === filterType
    );

    const sortedItems = [...filteredItems].sort((a, b) => {
        const priceA = parseInt(a.price.replace('$', ''));
        const priceB = parseInt(b.price.replace('$', ''));

        if (sortType === 'name') return a.name.localeCompare(b.name);
        if (sortType === 'price-asc') return priceA - priceB;
        if (sortType === 'price-desc') return priceB - priceA;
        return 0;
    });

    const handleFilterChange = (event) => {
        setSearchParams({ type: event.target.value, sort: sortType });
    };

    const handleSortChange = (event) => {
        setSearchParams({ type: filterType, sort: event.target.value });
    };

    return (
        <section className="product-section">
            <select onChange={handleFilterChange} value={filterType}>
                <option value="all">All Types</option>
                <option value="candy">Candy</option>
                <option value="strawberries">Strawberries</option>
                <option value="chocolates">Chocolates</option>
                <option value="eclairs">Eclairs</option>
            </select>

            <select onChange={handleSortChange} value={sortType}>
                <option value="default">Default</option>
                <option value="name">Sort by Name</option>
                <option value="price-asc">Sort by Low Price</option>
                <option value="price-desc">Sort by High Price</option>
            </select>

            <div className="map">
                {sortedItems.map((product) => (
                    <div key={product.id} className="product">
                        <div className="box">
                            <Link to={`/product/${product.id}`}>
                                <div className="img-box">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="detail-box">
                                    <h6>{product.name}</h6>
                                    <h6>Price <span>{product.price}</span></h6>
                                </div>
                            </Link>
                            <button className='buyButton' onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
