import { Component } from "react";
import MainBody from "./components/body-component/MainBody";
import Footer from "./components/footer-components/Footer";
import Header from "./components/header-components/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainBody />
                <Footer/>
            </div>
        );
    }
}

export default App;
