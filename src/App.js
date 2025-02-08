import logo from "./logo.svg";
import "./App.css";
import { Route, Routes ,Link} from "react-router-dom";
import { Hello } from "./Hello";
import { Home } from "./Home";
import PostsList from "./PostsList"
import PostDetails from "./PostDetails";
import { postsContext } from "./context/postsContext";
import NotFound from "./NotFound";



function App() {
  let postsData = [
    {
        id : 1,
        title:"Hello World",
        body :"this is for the first post"
    } ,
    {
        id : 2,
        title:"Hello World second",
        body :"this is for the second post"
    } ,
    {
        id : 3,
        title:"Hello World third ",
        body :"this is for the third post"
    } 
]
  return (
    <postsContext.Provider value={postsData}> 
    <div className="App">
      <div>
        {" "}
        <Link to = "/Posts">  <button style={{fontSize :"30px"}}>Posts </button></Link>
        
        <Link to ="/home"> <button style={{fontSize :"30px"}}>Home </button></Link>
       <Link to= "/hello">  <button style={{fontSize :"30px"}}>Hello</button></Link>
      
     
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* Routes  */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Posts" element={<PostsList />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/PostDetails/:postId" element={<PostDetails />} />
        <Route path="/postDetails/:postId" element={<PostDetails />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </postsContext.Provider>
  );
}

export default App;
