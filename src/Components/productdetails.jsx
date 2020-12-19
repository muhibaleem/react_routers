import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';


function Productdetails() {

    const navigate = useNavigate();

    const shoes = {
        "shoes-company 1": {
            name: "A Shoes",
            image: "https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg"
        },
        "shoes-company 2": {
            name: "B Shoes",
            image: "https://4.imimg.com/data4/YB/EF/ANDROID-38630640/product-500x500.jpeg"
        },
        "shoes-company 3": {
            name: "C Shoes",
            image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    };

    return (
        <div >


            <ul>
                {Object.entries(shoes).map(([productID, { name, image }]) =>
                (
                    <li key={productID}>

                        <Link to={productID}>
                            <h2>{name}</h2>
                            <img className="Picture" src={image} alt={name} />
                        </Link>
                    </li>
                )

                )}
            </ul>



    

        </div>
    );
}

export default Productdetails;
