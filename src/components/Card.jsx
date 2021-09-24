import React from "react";
import "./Card.scss";

const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={`card ${className}`} {...props}>
            {children}
        </div>
    );
};

export const CardHeader = ({ children }) => {
    return <div className="card-header">{children}</div>;
};

export const CardBody = ({ children, className = "" }) => {
    return <div className={`card-body ${className}`}>{children}</div>;
};

export default Card;
