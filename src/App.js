import AdminFeature from 'features/Admin';
import LoginPage from 'features/Auth/pages/LoginPage';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Redirect from="/" to="/login" exact />

        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminFeature} />
      </Switch>
    </div>
  );
}

export default App;
