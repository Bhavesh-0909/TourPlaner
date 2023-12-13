import data from "../data";
import Cards from "./Cards";

function Tours({tours, removeTour}){
    
    return (
        <div>
            {
                tours.map((tour)=>{
                    return <Cards {...tour} removeTour={removeTour}></Cards>;
                })
            }
        </div>
    );

}

export default Tours;