import React from "react";
import about from "./images/about-pic.gif"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useEffect } from "react";


const Square={
    visible:{y:0, transition:{duration:2,type:"spring",bounce:1}},
    hidden:{y:100}
}

export const About=(props)=>{
    const animation=useAnimation()
    const {ref, inView}=useInView();
    useEffect(()=>{
        if(inView){
            animation.start("visible")
        }
        if(!inView){
            animation.start("hidden")
        }
        console.log("use effect hook, inView = ", inView)
    },[inView,animation])
    const {
        ab,
        info
    }=props
    return(
        <div>
            <section id="about">
                <motion.div className="about-info"
                ref={ref}
                animate={animation}
                initial="hidden"
                variants={Square}>
                    <h1 className="about-me">{ab}</h1>
                    <p className="me-info">{info}</p>
                </motion.div>
                <motion.img src={about} alt="" className="about-pic"
                animate={animation}
                initial="hidden"
                variants={Square}
                 ref={ref}
                />
            </section>
        </div>
    )
}