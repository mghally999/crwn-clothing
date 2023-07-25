import Route from './routes/route/route.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

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

      <Route path="/sign-in">
        <SignIn />
      </Route>
    </div>
  );

};

export default App;