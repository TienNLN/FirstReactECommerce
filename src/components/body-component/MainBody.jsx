import { Component } from "react";
import MainContentItems from "./main-content-items/MainContentItems";

class MainBody extends Component {
    render () {
        return (
            <div>
                <div className="row mt-3">
                        <div className="col-8 m-0">
                            <MainContentItems />
                        </div>
                    </div>
            </div>
        );
    }
}

export default MainBody;