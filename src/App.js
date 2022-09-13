import "antd/dist/antd.less";
import Login from "./page/login/login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
