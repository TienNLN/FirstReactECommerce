import { Component } from "react";

class AdvanceSearch extends Component {

    render() {
        console.log(this.props.showingState);

        return (
            <div>
                <nav class="navbar navbar-success bg-light">
                    <a class="navbar-brand" href="#">Default</a>
                </nav>
            </div>
        );
    }
}

export default AdvanceSearch;