import { Component } from "react";
import AdvanceSearch from "./AdvanceSearch";

let showingState = "hide";

function changeShowingState() {
    if (showingState === "hide") {
        showingState = "show"
    } else {
        showingState = "hide"
    }

    console.log(showingState)
    return showingState
}

function expandAdvanceSearch() {
    return (
        <AdvanceSearch
            showingStateProps={changeShowingState}
        />
    );
}

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <h3>My Market</h3>
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>

                            <button className="btn btn-outline-light my-2 my-sm-0 m-2" type="submit"
                                onClick={expandAdvanceSearch}>Advance</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;