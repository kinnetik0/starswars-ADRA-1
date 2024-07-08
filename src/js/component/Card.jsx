import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsBagHeartFill } from "react-icons/bs";
const Card = ({
    imageSrc,
    title,
    gender,
    haircolor,
    eyecolor,
    buttonLink,
    buttonText,
}) => {
    return (
        <div>
            <h3 className="ms-2">People</h3>

            <div className="d-flex justify-content-start">
                <div className="card ms-2">
                    <img
                        src={imageSrc}
                        className="card-img-top"
                        alt={title}
                        style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text mb-0">{gender}</p>
                        <p className="card-text mb-0">{haircolor}</p>
                        <p className="card-text">{eyecolor}</p>
                        <div>
                            <Link to={buttonLink} className="btn btn-dark">
                                {buttonText}
                            </Link>
                            <button
                                type="button"
                                className="btn btn-warning ms-4"
                            >
                                <BsBagHeartFill />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card ms-2">
                    <img
                        src={imageSrc}
                        className="card-img-top"
                        alt={title}
                        style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text mb-0">{gender}</p>
                        <p className="card-text mb-0">{haircolor}</p>
                        <p className="card-text">{eyecolor}</p>
                        <div>
                            <Link to={buttonLink} className="btn btn-dark">
                                {buttonText}
                            </Link>
                            <button
                                type="button"
                                className="btn btn-warning ms-4"
                            >
                                <BsBagHeartFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;
