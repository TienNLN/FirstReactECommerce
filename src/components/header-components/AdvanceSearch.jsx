import { Component } from "react";

class AdvanceSearch extends Component {

    render() {
        let showing = this.props.showingStateProps;

        if (showing === "show") {
            return (
                <div>
                    <nav class="navbar navbar-success bg-light">
                        <a class="navbar-brand" href="#">Default</a>
                    </nav>
                </div>
            );
        }
    }
}

export default AdvanceSearch;