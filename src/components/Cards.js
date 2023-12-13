import { useState } from "react";

function Cards({id, image, info, name, price, removeTour}){

    
    const [readmore, setReadmore] = useState(false);
    const description = readmore? info : `${info.substring(0,200)}....`;

    function ReadmoreFun(){
        setReadmore(!readmore);
    }

    

    return (

        <div>
            <img src={image}/>
            <h4>$ {price}</h4>
            <h3>{name}</h3>
            <p>{description}<span onClick={ReadmoreFun}>{readmore? 'Show Less' : 'Read more'}</span></p>
            <button onClick={()=> removeTour(id)}>Not Interested</button>
        </div>
    );
}

export default Cards;