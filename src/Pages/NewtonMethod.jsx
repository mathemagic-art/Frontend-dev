import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
// import MethodsCard from "../Components/MethodsCard";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import {ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import {ReactComponent as X2} from "../Files/svgs/xSquare.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";

const NewtonMethod = () => {
  const [data, setData] = useState({argument_1:"", argument_2:"x", argument_3:""})
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
  //   // console.log("samat")
  // };

  // const handleSecond = (event) => {
  //   setData({second: event.target.value})
    
  // };

  // const handleClick = () =>{
  //   console.log(data)
  //   // axios.post("http://127.0.0.1:8000/newton/", data).then((res)=>{setAnswer(res)})
  // };

  const handleReset = (event) => {
    event.preventDefault()
    setData({argument_1:"", argument_2:"x", argument_3:""})
    setAnswer("")
  }

  // useEffect(() => {
    
  // }, [data, setData])
  
  
  console.log(answer)
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (event) => {
    axios.post("newtons-method/", data).then((res)=>{setAnswer(res.data)})
    console.log(data)
    console.log(answer)
    event.preventDefault()
    
  }
  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex tablet:flex-col">
        <form onSubmit={handleSubmit}>
        <div className="ml-52 mt-12 border-2 w-1/2 h-full rounded-3xl text-white p-10 bg-dark bg-opacity-30">
          <h2 className="text-center text-3xl font-primary text-primary">
            Newton's Method Calculator
          </h2>
          <p className="text-center text-text mb-10">
            Finds the roots of the equation f(x)=0{" "}
          </p>
          <div>
            <label htmlFor="function" className="ml-2 text-bright">
              Enter a function f(x)
            </label>
            <div className="flex rounded-xl text-black mb-10" id="searchbox">
              <input
              required
                className="w-full p-4 border-2  border-primary rounded-l-xl text-xl"
                type="text"
                // id="function"
                name="argument_1"
                value={data.argument_1}
                onChange={handleInput}
                
                />{" "}
              <button className="px-4 border-2 border-primary rounded-r-xl ">
                <Fx />
              </button>
            </div>
            <label htmlFor="respect" className="ml-2 text-bright">
              With Respect to
            </label>
            <select name="argument_2" id="respect" value={data.argument_2} onChange={handleInput} className="w-full p-4 border-2  text-black border-primary rounded-xl mb-10 text-xl">
                <option   value = "x" className="text-2xl">x</option>
                <option  value = "y">y</option>
                <option  value = "z">z</option>
            </select>
            <label htmlFor="iterations" className="ml-2 text-bright">
              Number of Iterations
            </label>
            <input
            required
              type="text"
              id="iterations"
              name="argument_3"
              value={data.argument_3}
              onChange={handleInput}
              className="w-full p-4 border-2 text-black  border-primary rounded-xl mb-10 text-xl"
            />
            
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
        <div className=" w-1/2 mt-12 mr-20 flex flex-col text-white tablet:w-full tablet:pl-16 tablet:pb-16" >
          <p className="mt-24 ml-10 font-normal text-2xl flex">According to Newton's Method:<Newton className="ml-10 -mt-5"/></p>
          <div className="flex mt-10 pl-10 pt-10 h-full w-full flex-row font-normal text-2xl tracking-wide">
            <p>The root of</p> <X2 className="mx-5 -mt-3"/><p>equals to </p><div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 bg-white text-black">{data.argument_2}(0)={answer !=="" ? answer:"_____________" }</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewtonMethod;