import axios from "axios"
import React, { useState, useEffect } from "react";
// import MethodsCard from "../Components/MethodsCard";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import {ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import {ReactComponent as X2} from "../Files/svgs/xSquare.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";

const IntegralCalc = () => {
  const [data, setData] = useState({argument_1: "type1", argument_2: "", argument_3: "x", argument_4: "", argument_5: ""})
  const [answer, setAnswer] = useState("")
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }

  console.log(data)

  // const handleInput = (event) => {
  //   console.log(event.target)
  //   setData(values => ({...values, [event.target.name] : event.target.value}))

  // }
  // const handleFunction = (event) => {
  //   // setData({equation: event.target.value});
  //   // console.log("something")
  // };
  // const handleFirst = (event) => {
  //   setData({first: event.target.value})
  // };
  // const handleSecond = (event) => {
  //   setData({second: event.target.value})
    
  // };

  // const handleClick = () =>{
  //   console.log(data)
  //   // axios.post("https://api-mathemagics.herokuapp.com/definite-integral/", data).then((res)=>{setAnswer(res)})
  // };

  const handleReset = (event) => {
    event.preventDefault()
    setData({argument_1:"type1", argument_2: "", argument_3:"x", argument_4: "", argument_5: ""})
    setAnswer("")
  }

  let style_for_main_div = ""
  let style_for_content_div = ""
  let url = ""
  let variable = ""

  if (data.argument_1 === "type1") {
    style_for_content_div = " w-1/2 ml-60 mt-12 mr-20 flex flex-col text-white"
    style_for_main_div = "ml-52 mt-12 border-2 w-[60%] h-full rounded-3xl text-white p-10 bg-dark bg-opacity-30"
    url = "indefinite-integral/"
    variable = "w-full h-[50px] p-4 border-2 mt-7 -ml-[85px] text-black border-primary rounded-xl mb-10 text-xl"
  }else {
    style_for_content_div = " w-1/2 ml-60 mt-12 mr-20 flex flex-col text-white"
    style_for_main_div = "ml-52 mt-12 border-2 w-[50%] h-full rounded-3xl text-white p-10  bg-dark bg-opacity-30"
    url = "definite-integral/"
    variable = "w-[25%] h-[50px] p-4 border-2 mt-7 -ml-[85px] text-black border-primary rounded-xl mb-10 text-xl"
  }
  // useEffect(() => {
    
  // }, [data, setData])
  
  
  console.log(answer)
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (event) => {
    axios.post("http://127.0.0.1:8000/universal_integral/", data).then((res)=>{setAnswer(res.data)})
    console.log(data)
    console.log(answer)
    event.preventDefault()
    
  }
  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex">
        <form onSubmit={handleSubmit}>
        <div className= {style_for_main_div}>
          <h2 className="text-center text-3xl font-primary text-primary">
             {data.argument_1 === "type1" ? "Indefinite Integral Calculator" : "Definite Integral Calculator"}
          </h2>
          <p className="text-center text-text mb-10">
            Find areas and volumes by adding the slices to find the whole.{" "}
          </p>
          <div className="">
              <label htmlFor="list" className="ml-2 text-bright text-xl">
                Integral type
              </label>
              <select id = "list" name="argument_1" defaultValue="type1" value={data.argument_1} onChange = {handleInput} className="w-full h-[50px] p-2 border-2 text-black text-lg border-primary rounded-xl mb-10">
                <option value = "type1">Indefinite Integral</option>
                <option value = "type2">Definite Integral</option>
              </select>

              <label htmlFor="function" className="ml-2 text-bright text-xl">
                Enter a function f(x)
              </label>
            <div className="flex rounded-xl text-black mb-10 " id="searchbox">
              <input
              required
                className="w-full h-[50px] p-4 border-2  border-primary rounded-l-xl text-lg"
                type="text"
                id="function"
                name="argument_2"
                value={data.argument_2}
                onChange={handleInput}
                
                />{" "}
              <button className="px-4 border-2 border-primary rounded-r-xl ">
                <Fx />
              </button>
            </div>
            <div className="flex flex-row gap-5 w-full">

              <label htmlFor="variable" className=" text-bright text-lg">
                Variable
              </label>
              <input
                required
                type="text"
                id="variable"
                value={data.argument_3}
                name="argument_3"
                onChange={handleInput}
                className= {variable}
                />

              {data.argument_1 === "type1" ? "" : 
              <div className="flex flex-row">
                <label htmlFor="third" className=" ml-6 text-center flex flex-row text-bright w-auto h-auto text-lg">
                  Lower
                </label>
                <input 
                required 
                type="text" 
                value={data.argument_4} 
                name="argument_4" 
                onChange={handleInput} 
                className="w-[100%] h-[50px] p-4 border-2 mt-7 -ml-16  text-black border-primary rounded-xl mb-10 text-xl" 
                defaultValue="oo"/>

                <label htmlFor="third" className="ml-2 pl-8 pr-auto text-bright text-lg">
                  Upper
                </label>
                <input 
                required 
                type="text" 
                value={data.argument_5} 
                name="argument_5" 
                onChange={handleInput} 
                className="w-[100%] h-[50px] p-4 mt-7 -ml-16 border-2 text-black border-primary rounded-xl mb-10 text-xl" 
                defaultValue="oo"/>

              </div>} 
            </div>
          </div>
          <div className=" flex justify-evenly">
            <button className="bg-primary text-white px-6 py-2 text-center text-lg rounded-md" type="submit" >
              Magic!
            </button>
            <button className="bg-white text-black px-6 py-2 text-center text-lg rounded-md" onClick={handleReset}>
              Reset!
            </button>
          </div>
        </div>
        </form>
        <div className={style_for_content_div}>
          <p className="mt-24 ml-10 font-normal text-2xl flex">Based on Integral Rule's:<Newton className="ml-10 -mt-5"/></p>
          <div className="flex mt-10 pl-10 pt-10 h-full w-full flex-row font-normal text-2xl tracking-wide">
          <p>The answer for {!data.argument_2 ? "f(x)": ("f(x) = " + data.argument_2)} is: </p><div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 bg-white text-black">{answer !=="" ? answer:"_____________" }</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegralCalc;