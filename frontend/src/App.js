import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import Chats from './Pages/Chat';
import { Button, ButtonGroup } from '@chakra-ui/react'
function App() {
  return (

<>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/chats" element={<Chats/>}/>


</Routes>
  </>
  );
}

export default App;
