import "./Projectstwo.css";
import Projecttile from "./Projecttile";
import rimg from "../kiwi.svg"
import codeone from "../code1.png"
import codetwo from "../code2.png"
import codethree from "../code3.png"


import { useState } from "react";


const Projectstwo = () =>{
    const [value, setValue] = useState(1);

    
    const CodingData = [ {
        title: "Kaksha.ai",
        subtitle: "Front End Developer Intern",
        description:
          "During my tenure as a Frontend Development Intern at Kaksha.ai, I implemented advanced React skills, contributing to a live project. This involved seamless integration of React libraries, such as ReactMUI, CodeMirror, ReactPdf, and ReactYoutube. Additionally, I actively collaborated on Python API integration, gaining practical experience in Docker for efficient project deployment and scaling. Becoming proficient in Git operations was instrumental in enabling effective collaboration within the development team. Notably, I demonstrated adaptability in a high-pressure, real-world environment, further solidifying my skills as a dynamic and capable frontend developer.",
        img: codeone, // Remove the curly braces around rimg
        link: "www.google.com",
        batch: "Coding",
        skills: ["Docker", "Material UI", "Git Proficiency", "Python API Integration"],
      },
    {
        title: "Saanjh Matrimonial Services" ,
        subtitle:"Personal Project",
        description: `Managed both frontend and backend tasks; I employed EJS for templating, ensuring a seamless user interface. To enhance
        security, I successfully integrated token-based authentication and
        created APIs to facilitate efficient communication between
        components. Proficient in SQL database management, I ensured the
        development of a secure and user-friendly matrimonial platform,
        showcasing my comprehensive skills in both frontend design and
        backend functionality.` ,
        img: codetwo,
        link:"www.google.com" ,
        batch: "Coding" ,
        skills: ["EJS", "Tokenization", "Authentication", "Unique IDs"]
    },
    {
        title: "Capture Films" ,
        subtitle: "College Project",
        description:`As part of a college project, I constructed a captivating Landing
        Page featuring beautiful animations and apt designs. Leveraging
        React, I not only implemented the design but also delved into key
        concepts such as Hooks, Component Distribution, Props, and States.
        This experience honed my skills in designing stylish and efficient
        web pages, showcasing my proficiency in utilizing advanced React
        concepts for an engaging user interface.`,
        img: codethree ,
        link:"www.google.com" ,
        batch: "Coding"  ,
        skills: ["React Basics", "Advanced CSS", "React Hooks"]
    }]
    const MusicData =[
        {
            title: "Silsilay",
            subtitle: "Acoustic Song",
            description: `I successfully produced a song for an indie artist, crafting not
            only the musical composition but also creating a visually
            compelling music video. The culmination of these efforts resulted
            in a YouTube upload that garnered more than 1000 views, reflecting
            the project's resonance with the audience. Additionally, the song
            received recognition on a broader scale, as it was featured on
            Rolling Stone India's Instagram page, further validating the
            quality and appeal of the work.`,
            img: rimg ,
            link:"www.google.com" ,
            batch: "Music" ,
            skills: ["React Basics", "Advanced CSS", "React Hooks"]
        },
        {
            title: "God in a Metro Album" ,
            subtitle: "Original Soundtrack",
            description: `I undertook the creation of soundtracks for five episodes, a
            challenging endeavor that allowed me to showcase my versatility
            and creativity in composing music. To enhance my skills, I
            dedicated time to learning orchestral music from scratch, delving
            into the intricacies of this complex genre. Utilizing free
            libraries, I crafted orchestral pieces that not only met the
            project's requirements but also garnered appreciation from a
            diverse audience. This achievement highlighted my ability to
            leverage limited resources to produce high-quality, well-received
            orchestral music compositions.`,
            img: rimg ,
            link:"www.google.com",
            batch:"Music",
            skills: ["React Basics", "Advanced CSS", "React Hooks"]
        }
    ]
    const FilmData = [ {
        title:"Nemesis" ,
        subtitle: "Screenwriter",
        description: `Wrote a short film called ‘Nemesis’ and gave valuable inputs
        during the production of the short film. Won the awards for Best
        Writer/Script at Port Blair International Film Festival-Nov’22,
        Havelock International Festival’22 and Diamond Bell International
        Film Festival’22 while the film won multiple awards at various
        national and international film festivals.`,
        img: rimg,
        link:"www.google.com" ,
        batch: "Film",
        skills: ["React Basics", "Advanced CSS", "React Hooks"]
    },
    {
        title: "Capture Films",
        subtitle: "Director and Producer",
        description: ` A Youtube Page that I run with my friend from college. Together we
        comical and satirical videos often shooting and editing them
        ourselves. We often collaborate with our friends to bring out
        unique takes and perspectives on things we observe around us.`,
        img: rimg,
        link:"www.google.com" ,
        batch: "Film" ,
        skills: ["React Basics", "Advanced CSS", "React Hooks"]
    },
    {
        title: "Almost Woke by Barsaati Films",
        subtitle: "Asst. Screenwriter and Script Supervisor",
        description: `Worked as a part of the writing and the production team at an
        indie production house out of Delhi called Barsaati Films and
        played my part in kickstarting a web series titled ‘Almost Woke’.
        Also channeled my efforts during the shoot of the Pilot by being
        the Script Supervisor on the sets.`,
        img: rimg,
        link: "www.google.com" ,
        batch: "Film",
        skills: ["React Basics", "Advanced CSS", "React Hooks"]
    }]
  
    return <div className="twomain">
        
            <div className="tabbar">
                <div onClick={() => {setValue(1)}} className={value === 1 ? "tabheaddiv activetab" : "tabheaddiv"}><h4 className= "tabhead">Coding</h4></div>
                <div onClick={() => {setValue(2)}} className={value === 2 ? "tabheaddiv activetab" : "tabheaddiv"}><h4 className="tabhead">Filmmaking</h4></div>
                <div onClick={() => {setValue(3)}} className={value === 3 ? "tabheaddiv activetab" : "tabheaddiv"}><h4 className="tabhead">Music</h4></div>


            </div>
            <div className="tabcontent">
                <div className={value === 1 ? "seccontent seccontenttrue" : "seccontent"}>
                {CodingData.map((project,index)=>{
            return <Projecttile data={project} key={index} />
        })}
                </div>
                <div  className={value === 2 ? "seccontent seccontenttrue" : "seccontent"}>
                {FilmData.map((project,index)=>{
            return <Projecttile data={project} key={index} />
        })}
                </div>
                <div  className={value === 3 ? "seccontent seccontenttrue" : "seccontent"}>
                {MusicData.map((project,index)=>{
            return <Projecttile data={project} key={index} />
        })}
                </div>
            </div>


    </div>
}
export default Projectstwo;