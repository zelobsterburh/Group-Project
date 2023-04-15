
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FirstPage from './elements/FirstPage';
import SignIn from './elements/SignIn';
import SecondPage from './elements/SecondPage';

function App() {
 return(
  <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<FirstPage />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SecondPage' element={<SecondPage />}/>
        </Routes>
      </div>
    </Router>
 );
}

export default App;