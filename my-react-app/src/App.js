
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FirstPage from './elements/FirstPage';
import SignIn from './elements/SignIn';
import SecondPage from './elements/SecondPage';
import EditPage from './elements/EditPage';
import CreateItem from './elements/CreateItem';
import ItemDetails from './elements/ItemDetails'
function App() {
 return(
  <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<FirstPage />} />
          <Route path='/SecondPage' element={<SecondPage />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/CreateItem' element={<CreateItem />} />
          <Route path='/ItemDetails/:id' element={<ItemDetails />}/>
          <Route path='/EditPage/:id' element={<EditPage />}/>
        </Routes>
      </div>
    </Router>
 );
}

export default App;