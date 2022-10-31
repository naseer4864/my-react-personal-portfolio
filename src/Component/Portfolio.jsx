import React from "react";
import first from "./images/first-react.png";
import nasv from "./images/nasvid.gif";
import nasport from "./images/nasport.png";
import jim from "./images/jimone.png";
import fur from "./images/furniture.png";
import travel from "./images/tra.png";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { useEffect } from "react";


const Square={
    visible:{y:0, transition:{duration:2,type:"spring",bounce:1}},
    hidden:{y:50}
}


export const Portfolio=(props)=>{
    const animation=useAnimation()
    const {ref, inView}=useInView({threshold:0.2})
    useEffect(()=>{
        if(inView){
            animation.start("visible")
        };
        if(!inView){
            animation.start("hidden")
        }
        console.log("use effect hook, inView = ", inView)
    },[inView,animation])
    const {
        per,
        check,
        dem,
        not
    }=props
    return(
        <div>
           <section id="portfolio">
            <motion.div className="port-box1"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={Square}>
                <h1>{per}</h1>
                <p>{check}</p>
            </motion.div>
            <motion.div className="port-box2"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={Square}>
                <div className="port-recent1">
                    <div className="recent-box1">
                        <a href="https://naseer4864.github.io/my-first-Reactproject/">
                        <img src={first} alt=""  className="port-pic1"/>
                        <p>{dem}</p>
                        </a>
                    </div>
                    <div className="recent-box2">
                        <a href="https://nasecommerce.netlify.app/">
                            <img src={nasv} alt=""  className="port-pic2"/>
                            <p>{dem}</p>
                        </a>
                    </div>
                    <div className="recent-box3">
                        <a href="https://nasportfolio.netlify.app/">
                            <img src={nasport} alt=""  className="port-pic3"/>
                            <p>{dem}</p>
                        </a>
                    </div>
                </div>
                <motion.div className="port-recent2"
                ref={ref}
                initial="hidden"
                animate={animation}
                variants={Square}>
                    <div className="recent-box4">
                       <a href="/#">
                        <img src={jim} alt="" className="port-pic4"/>
                        <p>{not}</p>
                        </a> 
                    </div>
                    <div className="recent-box5">
                    <a href="/#">
                        <img src={fur} alt="" className="port-pic5"/>
                        <p>{not}</p>
                        </a> 
                    </div>
                    <div className="recent-box6">
                    <a href="/#">
                        <img src={travel} alt="" className="port-pic6"/>
                        <p>{not}</p>
                        </a> 
                    </div>
                </motion.div>
            </motion.div>
            </section> 
        </div>
    )
}