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
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-3">
        <h2 className="text-black font-bold text-2xl">Not Interested</h2>
        <button onClick={()=> setTours(data)} className="px-10 py-2 bg-gray-300 rounded-lg">Refresh</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 mx-auto p-10">
      <h1 className="text-4xl text-red-700 border-8 px-10 py-5 border-dashed rounded-lg w-fit mx-auto font-bold border-blue-500">
        Plan With Us
      </h1>
      <Tours tours={tours} removeTour={removeTour} ></Tours>
    </div>
  );
};

export default App;
