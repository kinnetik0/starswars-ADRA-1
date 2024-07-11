import React from "react";

export default function wrapCard(BodyComponent) {
    const CardWrapper = (props) => {
        const saveClick = () => {
            console.log("Saved props:" + JSON.stringify(props));
        };

        return (
            
            <div className="card  h-100 flex-shrink-0 text-start mx-1">
                
                <BodyComponent {...props} />
            </div>
            
        );
    };
    return CardWrapper;
}
