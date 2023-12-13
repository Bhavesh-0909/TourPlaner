import { useState } from "react";

function Cards({id, image, info, name, price, removeTour}){

    
    const [readmore, setReadmore] = useState(false);
    const description = readmore? info : `${info.substring(0,200)}....`;

    function ReadmoreFun(){
        setReadmore(!readmore);
    }

    

    return (

        <div className="w-[30%] p-2 flex flex-col shadow-[0px_0px_5px_black] rounded-lg gap-2 items-center">
            <img src={image} className="rounded-lg object-cover aspect-square"/>
            <h4 className="text-blue-500 font-bold">$ {price}</h4>
            <h3 className="font-bold text-lg">{name}</h3>
            <p>{description}<span onClick={ReadmoreFun}>{readmore? 'Show Less' : 'Read more'}</span></p>
            <button onClick={()=> removeTour(id)}>Not Interested</button>
        </div>
    );
}

export default Cards;