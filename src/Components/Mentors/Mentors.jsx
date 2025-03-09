import MentorCard from "./MentordCard/MentorCard";
import "./Mentors.css";

export default function Mentors() {
    
    const mentors = [{"mentorImage": "/Adam.svg", "mentorName": "Adam Belkadi", "mentorDescription": "Backend Dev"},
        {"mentorImage": "/Deku.svg", "mentorName": "Yanis Boudjelida", "mentorDescription": "Fullstack Dev"},
        {"mentorImage": "/medj.svg", "mentorName": "Mohamed Mouloudj", "mentorDescription": "UI/UX Designer"},
    ];
    
    return (
       <>
            <div className="mentorsSection" id="mentors">
                <div className="mentorsTitleSection">
                    <h3 className="sectionTitle">{`<Hackathon_mentors>`}</h3>
                    <h1 className="mentorsTitle">Our Hackathon <br></br>Mentors</h1>
                </div>
                <div className="mentors">
                    {mentors.map((mentors,index)=>{
                        return <MentorCard key={index} mentorImage={mentors.mentorImage} mentorName={mentors.mentorName} mentorDescription={mentors.mentorDescription}/>
                    })}
                </div>
            </div>
       </>
    )
}