// import logo from './logo.svg';
// import './App.css';
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';
import DropDown from './component/DropDown/DropDown';
import CountryContent from './component/CountryContent';
import { useState } from 'react';

function App() {

  const[search , setSearch] = useState('')

  return (
    <div className="App">
      <Header/>
    <div className="seac mt-4" style={{display:"flex" ,justifyContent:"space-around"}}>
        <div className="seacrchbar">
        <SearchBar setSearch={setSearch}/>
        </div>
        <div className="derop">
          <DropDown/>
        </div>
    </div>

    <CountryContent search={search}/>
    </div>
  );
}

export default App;
