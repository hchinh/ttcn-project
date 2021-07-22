import AdminFeature from 'features/Admin';
import LoginPage from 'features/Auth/pages/LoginPage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './features/Login/Login';
import Product from './features/Product/product.jsx';
import ProductDetail from './features/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/login1" component={Login} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminFeature} />
        <Route path="/" exact component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/productDetails/:id" exact component={ProductDetail} />
        <Route path="/:somestring" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
