import {Route, Switch, Redirect } from "react-router-dom"
import Login from "./Pages/Login/Login";
import Home from './Pages/Home/Home'
import { useSelector } from 'react-redux'

function App() {

  const isLoggedIn = useSelector(state=>state.login.isLoggedIn)

  return (
    <div>
      <Switch>
        <Route path='/' exact >
          <Redirect to='/login' />
        </Route>
        {isLoggedIn && <Route path='/login' >
          <Redirect to='/home' />
        </Route>}
        {!isLoggedIn && 
        <Route path='/home' >
          <Redirect to='/login' />
        </Route>}
        <Route path='/home' >
          <Home />
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;