import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background:
                 'white', justifyContent: 
                 'center', alignItems: 
                 'center', display: 
                 "flex", borderRadius: "50%" }}
            onClick={onClick}
        >

        </div>
    )
}

export default NextArrow