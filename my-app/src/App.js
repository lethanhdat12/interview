import React , {useEffect, useState} from "react"
import {convertArrayToObject, initArray24, madeArrayObjectToArray, maxArray} from './until/until'
import { data } from "./service/datajson";
import Home from "./component/home";
import  "./style.css"
import Popup from "./component/popupSuccess/Popup";
function App() {
const a = [1,10,11];
// =>11110
const b = [2,23,4];
// => 4232
  const [arrForMax , setArrForMax] = useState([2,23,4]);
  const [max, setMax] = useState(0);
  const [data24 , setData24] = useState();
  const [data18, setData18] = useState([]);
  const [isOpen , setIsOpen] = useState(false);
  useEffect(()=>{
    let max =  maxArray(arrForMax);
    console.log("🚀 ~ file: App.js ~ line 16 ~ useEffect ~ max", max)
    setMax(max);
  },[])
  
  useEffect(()=>{
    let array24 = initArray24(data , 24);
    let arrayStruct24 =  convertArrayToObject(array24)
    console.log("🚀 ~ file: App.js ~ line 23 ~ useEffect ~ arrayStruct24", arrayStruct24)
    setData24(arrayStruct24);
    let arr18 = initArray24(array24 , 18) ;
    let arrayStruct18 =  convertArrayToObject(arr18)
    console.log("🚀 ~ file: App.js ~ line 27 ~ useEffect ~ arrayStruct18", arrayStruct18)
    setData18(arrayStruct18);
    let arr16 = madeArrayObjectToArray(arr18 , 3);
    console.log("🚀 ~ file: App.js ~ line 30 ~ useEffect ~ arr16", arr16)
  },[])

  const handleSuccess = ()=>{
      setIsOpen( !isOpen )
  }

  return (
    <div>
      <Home data24={data24} handleSuccess={handleSuccess}/>
      <Popup isOpen={isOpen} handleSuccess={handleSuccess}/>
    </div>
  );
}

export default App;
