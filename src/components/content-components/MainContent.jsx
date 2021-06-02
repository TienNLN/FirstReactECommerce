import { Component } from "react";
import IPhone from "../../item-components/IPhone";
import Samsung from "../../item-components/Samsung";
import "./MainContent.css";


class MainContent extends Component {
    render() {

        return (
            <div className="container">
                <h2>
                    {IPhone.name}
                    <span className="badge badge-danger ml-2">
                        New
                    </span>
                </h2>
                <IPhone />

                <hr />

                <h2>
                    {Samsung.name}
                    <span className="badge badge-danger ml-2">
                        New
                    </span>
                </h2>
                <Samsung />
            </div>
        );
    }
}

export default MainContent;