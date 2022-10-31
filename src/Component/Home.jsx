import React from "react";
import ani from "./images/nas.gif"
import { HashLink as Links } from "react-router-hash-link";
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useEffect } from "react";

const Square={
    visible:{y:0, transition:{duration:2,type:"spring", bounce:2}},
    hidden:{y:50}
}

export const Home=(props)=>{
    const animation=useAnimation()
    const {ref, inView}=useInView({threshold:0.2})
    useEffect(()=>{
        if(inView){
            animation.start("visible")
        }
        if(!inView){
            animation.start("hidden")
        }
        console.log("use effect hook , inView = ", inView)
    },[inView,animation])
    const {
        info,
        web,
        port
    }=props
    return(
        <div>
           <section id="home">
            <div className="home-info">
                <motion.h1 className="home-name"
                ref={ref}
                initial="hidden"
                animate={animation}
                variants={Square}>{info}</motion.h1>
                <motion.p className="home-pro"
                ref={ref}
                initial="hidden"
                animate={animation}
                variants={Square}>{web}</motion.p>
                <Links to="#portfolio" className="home-port" smooth>{port}<i className="fa-solid fa-angle-down"></i></Links>
            </div>
            <motion.img src={ani} alt="" className="home-pic"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={Square}/>
            </section> 
        </div>
    )
}