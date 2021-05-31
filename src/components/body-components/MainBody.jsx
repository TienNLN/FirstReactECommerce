import { Component } from "react";
import AdsContent from "../../ads-components/AdsContent";
import MainContent from "../content-components/MainContent";
import "./MainBody.css";

class MainBody extends Component {
    render() {
        return (
            <div className="container main-content">
                <div className="row main-row">
                    <div className="col-2">
                        <AdsContent />
                    </div>
                    
                    <div className="col-8">
                        <MainContent />
                    </div>

                    <div className="col-2">
                        <AdsContent />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBody;