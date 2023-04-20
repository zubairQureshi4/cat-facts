import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import './App.css'
import { useState } from "react";
 const CatFact = () => {
    const [no1 , setNo1] = useState('0');
    const [no2 , setNo2] = useState('0');
    const [no3 , setNo3] = useState('0');
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading...</h1>;
  }
  const random = () =>{
    setNo1(Math.floor(Math.random() * 256));
    setNo2(Math.floor(Math.random() * 256));
    setNo3(Math.floor(Math.random() * 256));
  }

  return (
    <h1 style={{background: `rgb(${no1}, ${no2}, ${no3}, 0.5)`}} className="CAT">
      This is a Cat Fact 
      <hr></hr>
      <p>{catData?.fact}</p>
      <hr></hr>
      <button onClick={()=>{refetch(); random()}}> Update Fact </button>
    </h1>
  );
};

export default CatFact