import "./MentorCard.css";
import { motion } from "framer-motion";
export default function MentorCard({mentorImage, mentorName, mentorDescription}) {

    return(
        <>
<motion.div 
    className="mentorCard"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
>
    <div className="mentorImage">
        <img src={mentorImage} alt="Mentor Image"/>
    </div>
    <div className="mentorInfo">
        <p>{mentorDescription}</p>
        <h2>{mentorName}</h2>
    </div>
</motion.div>
        </>
    )
}