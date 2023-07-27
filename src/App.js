import Route from './routes/route/route.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return 'SHOP';
};

function App() {
  return (
    <div>
      <Navigation />

      <Route path="/">
        <Home />
      </Route>

      <Route path="/shop">
        <Shop />
      </Route>

      <Route path="/auth">
        <Authentication />
      </Route>
    </div>
  );

};

export default App;