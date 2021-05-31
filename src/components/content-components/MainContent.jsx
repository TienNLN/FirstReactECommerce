import { Component } from "react";
import "./MainContent.css";

class MainContent extends Component {
    render() {

        let listIPhoneItem = [
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneXSMax.jpg",
                name: "IPhone XS Max",
                price: 15000000,
                color: "gold", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone XS R",
                price: 10000000,
                color: "black", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphone8.jpg",
                name: "IPhone 8",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
        ];

        let listSamsungItem = [
            {
                img: process.env.PUBLIC_URL + "product-img/" + "samsung1.png",
                name: "IPhone XS Max",
                price: 15000000,
                color: "gold", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "samsung2.jpg",
                name: "IPhone XS R",
                price: 10000000,
                color: "black", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "samsung3.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphone8.jpg",
                name: "IPhone 8",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "iphoneX.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
        ];

        let showAllIPhone =
            listIPhoneItem.map(item => {
                return(
                    <div className="col-4 col-items">
                        <div className="card">
                            <img className="card-img-top" src={item.img} alt=""/>
                            <div className="card-body test">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.color}</p>

                                <div className="row row-button">
                                    <div className="col-6">
                                        <a name="" id="" class="btn btn-primary" href="#" role="button">Add to Cart</a>
                                    </div>

                                    <div className="col-6">
                                        <a name="" id="" class="btn btn-primary" href="#" role="button">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        

        let showAllSamsung =
            listSamsungItem.map(item => {
                return(
                    <div className="col-4 col-items">
                        <div className="card">
                            <img className="card-img-top" src={item.img} alt=""/>
                            <div className="card-body test">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.color}</p>

                                <div className="row row-button">
                                    <div className="col-6">
                                        <a name="" id="" class="btn btn-primary" href="#" role="button">Add to Cart</a>
                                    </div>

                                    <div className="col-6">
                                        <a name="" id="" class="btn btn-primary" href="#" role="button">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })

        return (
            <div className="container">
                <h2>
                    IPhone
                    <span class="badge badge-danger ml-2">
                        New
                    </span>
                </h2>
                <div className="row rows-items border border-light">
                    {showAllIPhone}
                </div>

                <hr />

                <h2>
                    Samsung
                    <span class="badge badge-danger ml-2">
                        New
                    </span>
                </h2>
                <div className="row rows-items border border-light">
                    {showAllSamsung}
                </div>
            </div>
        );
    }
}

export default MainContent;