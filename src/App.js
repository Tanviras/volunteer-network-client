import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import SelectedActivities from './components/SelectedActivities/SelectedActivities';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
import AddEvent from './components/AddEvent/AddEvent';
import 'bootstrap/dist/css/bootstrap.min.css';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>

      <Route path="/home">
      <Home></Home>
      </Route>

      <Route exact path="/login">
       <Login></Login>
      </Route>
        
       <PrivateRoute path="/registration/:id">
       <Registration></Registration>
       </PrivateRoute>

       <Route path="/selectedActivities">
       <SelectedActivities></SelectedActivities>
       </Route>

       <Route path='/admin'>
       <Admin></Admin>
       </Route>

       <Route path='/addEvent'>
       <AddEvent></AddEvent>
       </Route>
       

       <Route path="*">
       <NotFound></NotFound>
       </Route>
       
      </Switch>
    
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
