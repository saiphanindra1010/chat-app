import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import Chats from './Pages/Chat';
import Signup from './Pages/signup';
function App() {
  return (

<div className='App'>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/chats" element={<Chats/>}/>
<Route path="/signup" element={<Signup/>}/>
</Routes>
{/* <h1 className="text-10xl font-bold underline">
      Hello world!
    </h1> */}
  </div>
  );
}

export default App;
