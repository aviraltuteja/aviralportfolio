import { useState } from "react";
import "./Projecttile.css"
import { motion } from "framer-motion";
const Projecttile = (props)=>{
   const [mouseHover, setmouseHover] = useState(false)
    const overlayvariants ={
        initial : {y: '10rem', opacity:0},
        animate : {y: '0rem', opacity:1}
    }
   return <motion.div onMouseEnter={() =>{
    setmouseHover(true)
   }} onMouseLeave={() =>{
    setmouseHover(false)

   }} className="maintile comtile">
        <motion.div  animate={mouseHover ? "animate" : "initial" } variants={overlayvariants} className="overlay comtile">
            <p className="tiledesc">
                {props.data.description}
            </p>
        </motion.div>
        <img src={props.data.img} className="tileimg" alt="Random"/>
        <div className="tiletext">
        <h3 className="titlehead">{props.data.subtitle}</h3>
        <h3 className="subtitlehead">{props.data.title}</h3>
        <h4 className="skillshead">Skills Acquired</h4>
        {
            props.data.skills.map((skill,index)=>{
              return  <p key={index} className="pskills">{skill}</p>
            })
        }
    </div>
    </motion.div>
}
export default Projecttile;