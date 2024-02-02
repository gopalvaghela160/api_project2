import { Routes, Route } from "react-router-dom"
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Pages/Post';
import Menubar from "./Component/Menubar";
import Comments from "./Pages/Comments";
import Ablums from "./Pages/Albums";
import Photos from "./Pages/Photos";
import Todos from "./Pages/Todos";
import User from "./Pages/User";
function App() {
  return (
    <div className="App">
      <Menubar>
      </Menubar>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/Albums" element={<Ablums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/user" element={<User />} />
        </Routes>
    </div>
  );
}

export default App;
