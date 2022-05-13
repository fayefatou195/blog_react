import {useState, useEffect } from "react";

const usefetch =(url) => {

    const [data, setData] = useState(null);
    const [isLoadind, setIsLoading] =useState(true);
    const [error, setError] =useState(null);
 
    useEffect( ()=> {
        const aboutCont = new AbortController();
    setTimeout( () => {
    fetch(url, {signal:aboutCont.signal})
    .then( (response) => {
      console.log (response.ok);
      if(!response.ok){
        throw Error('Desole une erreur est survenu...');

      }      
      return response.json();
    })

    .then( (data) => {
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err =>{
        if(err.name === "AbortError"){
        console.log('fetch a ete stopper');
        }
        else{

            setError(err.message);
            setIsLoading(false);
         }
     
    })
 },2000) 
  return () => aboutCont.abort();

}, [url]);

  return (data, isLoadind, error);
   
}
export default  usefetch;