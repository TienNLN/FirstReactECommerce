import { Component } from "react";
import "./IPhone.css";

class Samsung extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listSamsungItem = [
            {
                img: process.env.PUBLIC_URL + "product-img/" + "samsung3.jpg",
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
                img: process.env.PUBLIC_URL + "product-img/" + "samsung2.jpg",
                name: "IPhone 8",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "samsung2.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "samsung2.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
            {
                img: process.env.PUBLIC_URL + "product-img/" + "samsung3.jpg",
                name: "IPhone 12 Pro Max",
                price: 35000000,
                color: "blue", 
            },
        ];

        let showAllSamsung =
            listSamsungItem.map((item, index) => {
                return(
                    <div className="col-xs-3 col-md-3 col-lg-3 col-xl-3 col-items" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={item.img} alt=""/>
                            <div className="card-body test">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.color}</p>

                                <div className="row row-button">
                                    <div className="col-6">
                                        <a name="" id="" className="btn btn-primary" href="#" role="button">Add to Cart</a>
                                    </div>

                                    <div className="col-6">
                                        <a name="" id="" className="btn btn-primary" href="#" role="button">View more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })

            return (
                <div className="row rows-items border border-light">
                    { showAllSamsung }
                </div>
            );
    }
}

export default Samsung;