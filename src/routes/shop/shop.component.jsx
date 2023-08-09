import Route from "../route/route.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import './shop.styles.scss';

function Shop() {
    return <div>
        <Route path="/shop">
            <CategoriesPreview />
        </Route>
    </div>
};

export default Shop;