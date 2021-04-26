import React, {useState, useEffect} from "react"

const Item = () => {
  // Run function on mount

  useEffect(() => {
   
  }, []);

  //code to fetch the data from the API

  const [item, setItem] = useState({});

  

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
};

export default Item;
