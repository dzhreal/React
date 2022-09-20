import "antd/dist/antd.less";
import Login from "./containers/login/login";
import Admin from "./containers/admin/admin";
import { Routes, Route,useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate()
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
