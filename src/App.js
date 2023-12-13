import React, { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }


  if(tours.length === 0){
    return (
      <div>
        <h2>Not Interested</h2>
        <button onClick={()=> setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 mx-auto p-10">
      <h1 className="text-3xl text-red-700 border-8 px-10 py-5 border-dashed rounded-lg w-fit mx-auto">
        Plan With Us
      </h1>
      <Tours tours={tours} removeTour={removeTour} ></Tours>
    </div>
  );
};

export default App;
