import Sidebar from "./components/sidebar/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Test from "./pages/Test";
import TopBar from "./components/topBar/TopBar";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main flex-grow-1">
          <TopBar/>
          <div className="content p-4">
            <Routes>
              <Route>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/t" element={<Test />} />
                <Route path="/u" element={<Test />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
