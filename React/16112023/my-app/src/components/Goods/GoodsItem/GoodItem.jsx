import React from 'react';

const GoodsItem = ({id, name, price}) => {
    return (
        <div>
             <div>{id}. {name} {price}</div>
             {/* <div>{price}</div> */}
        </div>
       

    );
};

export default GoodsItem;