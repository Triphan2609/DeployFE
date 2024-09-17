import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;
