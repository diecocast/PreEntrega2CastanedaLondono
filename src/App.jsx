import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCategoryContainer from './components/ItemCategoryContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>

          <Route exact path='/' element = {<ItemListContainer/>}/>
          <Route exact path='/item/:id' element = {<ItemDetailContainer/>}/>
          <Route exact path='/category/:id' element = {<ItemCategoryContainer/>}/>
          
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
 