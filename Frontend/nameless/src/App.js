import Forgot from "./Pages/Forget";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Notes from "./Pages/Notes";
import ListNotes from "./Pages/List";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
   
    <div className="App">
      {/* <Navbar /> */}
      
      <Routes>
        <Route index path="/kvvkkc" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/me/" element={<ListNotes />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  

  );
}

export default App;
