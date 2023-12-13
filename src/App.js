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
    <div>
      <h1>
        Plan With Us
      </h1>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
