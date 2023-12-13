import { useState } from "react";

function Cards({id, image, info, name, price, removeTour}){

    
    const [readmore, setReadmore] = useState(false);
    const description = readmore? info : `${info.substring(0,200)}....`;

    function ReadmoreFun(){
        setReadmore(!readmore);
    }

    

    return (

        <div className="w-[30%] min-w-[300px] h-fit p-2 flex flex-col shadow-[0px_0px_5px_black] rounded-lg gap-2 ">
            <img src={image} className="rounded-lg object-cover aspect-square"/>
            <h4 className="text-blue-500 font-bold">$ {price}</h4>
            <h3 className="font-bold text-lg">{name}</h3>
            <p>{description}<span onClick={ReadmoreFun} className="text-blue-500 cursor-pointer">{readmore? 'Show Less' : 'Read more'}</span></p>
            <button onClick={()=> removeTour(id)} className="bg-red-300 w-full border-red-500 rounded-lg py-2 hover:bg-red-700 text-white font-bold">Not Interested</button>
        </div>
    );
}

export default Cards;