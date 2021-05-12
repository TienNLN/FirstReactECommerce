import { Component } from "react";

const categoryList = [
    "Mobile",
    "Laptop",
    "Headphone",
    "Earphone"
]

class AdvanceSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { dropdownItemNameText: categoryList[0] }
    }

    render() {
        const categoryListToHTML = categoryList.map(element => {
            return <a className="btn btn-light dropdown-item" role="button" onClick={() => {
                this.setState({dropdownItemNameText : element});
                console.log(this.dropdownItemNameText)
            }}>
                {element}
            </a>
        });

        return (
            <div>
                <nav className="navbar navbar-success bg-light">
                    <div>
                        <div className="form-group">
                            <label for="textCategory">
                                <h3>
                                    Category
                              </h3>
                            </label>
                            <div className="row">
                                <div className="dropdown show col-8">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.dropdownItemNameText}
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        {categoryListToHTML}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default AdvanceSearch;