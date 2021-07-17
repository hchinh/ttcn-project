import AdminFeature from 'features/Admin';
import LoginPage from 'features/Auth/pages/LoginPage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Product from './features/Product/product.jsx';
import ProductDetail from './features/ProductDetail/ProductDetail';
import Test from './Test'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminFeature} />
        <Route path="/" exact component={Product} />
        <Route path="/productDetails" exact component={ProductDetail} />
        <Route path="/:somestring" component={ErrorPage} />
      </Switch>
      {/* <Test/> */}
    </div>
  );
}

export default App;
