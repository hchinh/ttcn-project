import AdminFeature from 'features/Admin';
import LoginPage from 'features/Auth/pages/LoginPage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Product from './features/Product/product.jsx';
import ProductDetail from './features/ProductDetail/ProductDetail';
import Cart from "./components/Cart/Cart"
import Login from "./features/Login/Login"
import UserLoginPage from "./features/Auth/pages/UserLoginPage"
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/login1" component={UserLoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminFeature} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/productDetails/:id" exact component={ProductDetail} />
        <Route path="/:somestring" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
