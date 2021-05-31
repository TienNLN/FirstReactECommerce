import { Component } from "react";

import MainBody from "./components/body-components/MainBody";
import Header from "./components/header-components/Header";
import "./App.css";
import Footer from "./components/footer-components/Footer";

class App extends Component {
    render() {
        return (
            <div className="main-content">
                <Header/>
                <MainBody />
                <Footer />
            </div>
        );
    }
}

export default App;
