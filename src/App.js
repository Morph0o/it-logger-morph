import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from "./components/layout/searchbar"
import Logs from "./components/logs/Logs"

function App() {
  useEffect(()=>{
    M.AutoInit()
  })
  return (
    <Fragment>
     <SearchBar/>
     <div className="container">
       <Logs/>
     </div>
    </Fragment>
  );
}

export default App;
