import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route  
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/auth/Login';
import Logout from './Components/auth/Logout';
import RequireAuth from './Components/auth/RequireAuth';
import CreateAccount from "./Components/auth/CreateAccount";
import appContext from "./Components/AppContext"
  function App() {
    const [googleLogged, setGoogleLogged] = useState(false);
    const value = { googleLogged, setGoogleLogged };
    return (
      <appContext.Provider value={value}>
      <Router>
        <Routes >
          {/*<Route path="/" element={<RequireAuth><Home /></RequireAuth>}></Route>*/}
          <Route path="/" element={<Home />}></Route>
          {/*<Route path="/login" element={<Login/>}></Route>*/}
          {/*<Route path="/createAccount" element={<CreateAccount/>}></Route>*/}
          {/*<Route path="/logout" element={<Logout/>}></Route>*/}  
        </Routes > 
    </Router>
    </appContext.Provider>
    );
  }

export default App;
