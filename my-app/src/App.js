import React , {useEffect, useState} from "react"
import {convertArrayToObject, initArray24, madeArrayObjectToArray, maxArray} from './until/until'
import { data } from "./service/datajson";

function App() {

  const [arrForMax , setArrForMax] = useState([1, 10, 11]);
  const [max, setMax] = useState(0);
  const [data24 , setData24] = useState();
  const [data18, setData18] = useState([])
  useEffect(()=>{
    let max =  maxArray(arrForMax);
    setMax(max);
  },[])
  
  useEffect(()=>{
    let array24 = initArray24(data , 24);
    let arrayStruct24 =  convertArrayToObject(array24)
    console.log("🚀 ~ file: App.js ~ line 19 ~ useEffect ~ arrayStruct24", arrayStruct24)
    setData24(arrayStruct24);
    let arr18 = initArray24(array24 , 18) ;
    let arrayStruct18 =  convertArrayToObject(arr18)
    console.log("🚀 ~ file: App.js ~ line 23 ~ useEffect ~ arrayStruct18", arrayStruct18)
    setData18(arrayStruct18);
    let arr16 = madeArrayObjectToArray(arr18 , 3);
    console.log("🚀 ~ file: App.js ~ line 26 ~ useEffect ~ arr16", arr16)
  },[])

  return (
    <>
      <ul>
        <li>
          số lớn nhất là : {max}
        </li>
      </ul>
    </>
  );
}

export default App;
