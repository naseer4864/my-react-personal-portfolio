import React from "react";
import htmlog from "./images/html.png";
import csslog from "./images/css.png";
import jslog from "./images/js.png";
import reactlog from "./images/react.png";
import gitlog from "./images/github.png";
import taillog from "./images/tailwind.png";
import nodelog from "./images/nodes.png";
import exprelog from "./images/express.png";
import mongolog from "./images/mongo.png";
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import { useEffect } from "react";



const Square={
    visible:{y:0, transition:{duration:2,type:"spring",bounce:1}},
    hidden:{y:100}
}



export const Stacks=(props)=>{

    const animation=useAnimation()
    const {ref, inView}=useInView({threshold:0.2});
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
        stack,
        tech,
        ht,
        cs,
        js,
        react,
        git,
        tail,
        node,
        expr,
        mon
    }=props
    return(
        <div>
            <section id="stacks">
               <motion.div className="stack-info" 
               ref={ref}
               animate={animation}
               initial="hidden"
               variants={Square}>
                <h1>{stack}</h1>
                <p>{tech}</p>
               </motion.div>
               <motion.div className="stack-tech" 
               ref={ref}
               animate={animation}
               initial="hidden"
               variants={Square}>
                <div className="stack-tech1">
                    <div className="html">
                        <img src={htmlog} alt="" className="html-pic"/>
                        <p>{ht}</p>
                    </div>
                    <div className="css">
                        <img src={csslog} alt="" className="css-pic"/>
                        <p>{cs}</p>
                    </div>
                    <div className="javas">
                        <img src={jslog} alt=""  className="javas-pic"/>
                        <p>{js}</p>
                    </div>
                </div>
                <div className="stack-tech2">
                    <div className="react">
                        <img src={reactlog} alt="" className="react-pic"/>
                        <p>{react}</p>
                    </div>
                    <div className="github">
                        <img src={gitlog} alt="" className="git-pic"/>
                        <p>{git}</p>
                    </div>
                    <div className="tailwind">
                        <img src={taillog} alt="" className="tail-pic"/>
                        <p>{tail}</p>
                    </div>
                </div>
                <div className="stack-tech3">
                    <div className="node">
                        <img src={nodelog} alt=""  className="nodes-pic"/>
                        <p>{node}</p>
                    </div>
                    <div className="express">
                        <img src={exprelog} alt="" className="express-pic"/>
                        <p>{expr}</p>
                    </div>
                    <div className="mongo">
                        <img src={mongolog} alt="" className="mongo-pic"/>
                        <p>{mon}</p>
                    </div>
                </div>
               </motion.div>
            </section>
        </div>
    )
}