
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavBar from './components/Header/index.jsx'
import Product from './features/Product/product.jsx'
import ProductDetail from './features/ProductDetail/ProductDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
        <Route path="/" exact component={Product}/>
        <Route path="/productDetails" exact component={ProductDetail}/>
        <Route path="/:somestring" component={ErrorPage}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
