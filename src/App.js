import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import {Home} from "./Component/Home"
import {About} from "./Component/About"
import {Portfolio} from "./Component/Portfolio"
import {Stacks} from "./Component/Stacks"
import {Contact} from "./Component/Contact"
import { HomeData } from "./Component/HomeData";
import { NavData } from "./Component/NavData";
import { AboutData } from "./Component/AboutData";
import {PortData} from "./Component/PortData"
import { StackData } from "./Component/StackData";
import { Animated } from "./Component/Animated";
import { ContactData } from "./Component/ContactData";




function App() {
  const ContactElement=ContactData.map(condata =>{
    return(
      <Contact {...condata} key={condata.id}/>
    )
  })
  const StackElement=StackData.map(staData =>{
    return(
      <Stacks {...staData} key={staData.id}/>
    )
  })
  const PortElement=PortData.map(poData =>{
    return(
      <Portfolio {...poData} key={poData.id}/>
    )
  })
  const AboutElement=AboutData.map(AbData =>{
    return(
      <About {...AbData} key={AbData.id}/>
    )
  })
  const NavElement=NavData.map(NaData =>{
    return(
      <Navbar {...NaData} key={NaData.id}/>
    )
  })
 const HomeElement=HomeData.map(HoData => {
    return(
      <Home {...HoData} key={HoData.id}/>
    )
  })
  return (
    <div>
    <BrowserRouter>
    <Animated/> 
      {NavElement}
      {HomeElement}
      {AboutElement}
      {PortElement}
      {StackElement}
      {ContactElement}
    </BrowserRouter>
    </div>
  );
}

export default App;
