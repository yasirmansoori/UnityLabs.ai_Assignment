import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./Components/Navbar/TopNav";
import Frontend from "./Frontend";
import Footer from "./Components/Footer/Footer";
import PostContent from "./Components/Post/PostContent";
import Archive from "./Components/Archive/Archive";
import ErrorPage from "./pages/ErrorPage";
import "./App.css";
import { createContext, useState } from "react";
export const DarkModeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <DarkModeContext.Provider value={{ theme, handleTheme }}>
      <div className="app" id={theme}>
        <TopNav onChange={handleTheme} checked={theme === "dark"} />
        <Router>
          <Routes>
            <Route path="/" element={<Frontend />} />
            <Route path="/post/:postId" element={<PostContent />} />
            <Route path="/archive/:month" element={<Archive />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
