import AdminFeature from 'features/Admin';
import LoginPage from 'features/Auth/pages/LoginPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect from="/" to="/login" exact />

        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminFeature} />
      </Switch>
    </div>
  );
}

export default App;
