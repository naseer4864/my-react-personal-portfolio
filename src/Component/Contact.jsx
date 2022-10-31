import React from "react";
import whats from "./images/whatsapp.png";
import face from "./images/facebook.png";
import insta from "./images/instagram.png";
import twitt from "./images/twitter.png";
import {useForm} from "react-hook-form";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { useEffect } from "react";



const Square={
    visible:{y:0, transition:{duration:2,type:"spring",bounce:1}},
    hidden:{y:100}
}

export const Contact=(props)=>{
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
    const {register, formState:{errors}}=useForm()
    const {
        con,
        get,
        sub
    }=props
    return(
        <div>
           <section id="contact">
            <motion.div className="con-social"
            ref={ref}
            initial="hidden"
            animate={animation}
            variants={Square}>
                <con className="get">
                    <h1>{con}</h1>
                    <p>{get}</p>
                </con>
                <div className="social">
                    <a href=" https://wa.me/2347036676508">
                       <img src={whats} alt=""  className="whats"/> 
                    </a>
                    <a href="https://www.facebook.com/nassopeyemi">
                        <img src={face} alt="" className="face"/>
                    </a>
                    <a href="https://www.instagram.com/naseeradeniyi/">
                        <img src={insta} alt=""  className="insta"/>
                    </a>
                    <a href="https://twitter.com/naseeroladayo/">
                        <img src={twitt} alt="" className="twitt"/>
                    </a>
                </div>
            </motion.div>
           <motion.form id="my-form"  action="https://getform.io/f/494a595a-3cc7-4578-b1d8-55ad9e96a99f"  method="POST"
           ref={ref}
           initial="hidden"
           animate={animation}
           variants={Square}>
            <div className="input">
                <input type="text" name="name" placeholder="ENTER YOUR FULL NAME"
                {...register("name",{required:true})}/>
                <div className="error">
                    {errors.name?.type === "required" && "Full name is required"}
                </div>
            </div>
            <div className="input">
                <input type="email" name="email" placeholder="ENTER YOUR EMAIL" 
                {...register("email", {required:true, pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>
                <div className="error">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" && "Enter valid email"}
                </div>
            </div>
            <div className="input">
                <input type="number" name="number" placeholder="ENTER YOUR MOBILE NUMBER" 
                {...register("number", {
                    minLength:6,
                    maxLength:12,
                })}/>
                 <div className="error">
                 {errors.number?.type === "minLength" && "Entered number is less than 6 digits"}
                {errors.number?.type === "maxLength" && "Entered number is more thna 12 digits"}
                 </div>
            </div>
            <div>
                <textarea type="text" name="message" cols="65" rows="20" placeholder="MESSAGE"
                {...register("message",{required:true})}></textarea>
                <div className="error">
                {errors.message?.type === "required" && "Enter your messages"}
                </div>
            </div>
            <button type="submit" className="btn">{sub}</button>
           </motion.form>
           </section> 
        </div>
    )
}