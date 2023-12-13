import data from "../data";
import Cards from "./Cards";

function Tours({tours, removeTour}){
    
    return (
        <div className="flex flex-wrap w-[100%] justify-center gap-4">
            {
                tours.map((tour)=>{
                    return <Cards {...tour} removeTour={removeTour}></Cards>;
                })
            }
        </div>
    );

}

export default Tours;