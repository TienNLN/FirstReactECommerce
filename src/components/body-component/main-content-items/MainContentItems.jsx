import { Component } from "react";

import "./MainContentItems.css";

class MainContentItems extends Component {
    render() {
        const listItems = [
            {
                imgPath: "/img/iPhone8.png",
                name: "IPhone 8",
                description: "This is description of Iphone 8",
                price: "10.000.000"
            },
            {
                imgPath: "/img/iPhoneXS.jpg",
                name: "IPhone XS",
                description: "This is description of Iphone XS",
                price: "15.000.000"
            },
            {
                imgPath: "/img/iPhone12ProMax.jpg",
                name: "IPhone 12 Pro Max",
                description: "This is description of Iphone 12 Pro Max",
                price: "25.000.000"
            },
            {
                imgPath: "/img/iPhone11ProMax.jpg",
                name: "IPhone 11 Pro Max",
                description: "This is description of Iphone 11 Pro Max",
                price: "25.000.000"
            },
            {
                imgPath: "/img/iPhone8.png",
                name: "IPhone 8",
                description: "This is description of Iphone 8",
                price: "10.000.000"
            },
            {
                imgPath: "/img/iPhoneXS.jpg",
                name: "IPhone XS",
                description: "This is description of Iphone XS",
                price: "15.000.000"
            },
            {
                imgPath: "/img/iPhone12ProMax.jpg",
                name: "IPhone 12 Pro Max",
                description: "This is description of Iphone 12 Pro Max",
                price: "25.000.000"
            },
            {
                imgPath: "/img/iPhone11ProMax.jpg",
                name: "IPhone 11 Pro Max",
                description: "This is description of Iphone 11 Pro Max",
                price: "25.000.000"
            },
        ]

        const showListItems = listItems.map(element => {
            console.log(element.name);
            return (
                <div className="col-3 col-item">
                    <div className="card card-item">
                        <img className="card-img-top" src={process.env.PUBLIC_URL + element.imgPath} alt={element.name} />
                        <div className="card-body">
                            <h4 className="card-title">
                                {element.name}
                            </h4>
                            <p className="card-text">
                                {element.description}
                            </p>
                            <p className="card-text">
                                {element.price}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <h2>iPhone<span class="badge badge-secondary">New</span></h2>

                <div className="row row-item border border-secondary pt-3 pb-3">
                    {showListItems}
                </div>
            </div>
        );
    }
}

export default MainContentItems;


