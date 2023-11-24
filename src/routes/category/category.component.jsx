import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';

function Category() {
    const { categoriesMap } = useContext(CategoriesContext);

    const category = Object.keys(categoriesMap).map((product) => {
        return categoriesMap[product];
    });

    const [products, setProducts] = useState(category);

    useEffect(() => {
        setProducts(category);
    }, [category, categoriesMap])

    return <div className="category-container">
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
};

export default Category;