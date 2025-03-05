import "./MentorCard.css";
export default function MentorCard({mentorImage, mentorName, mentorDescription}) {

    return(
        <>
            <div className="mentorCard">
                <div className="mentorImage">
                    <img src={mentorImage} alt="Mentor Image"/>
                </div>
                <div className="mentorInfo">
                    <p>{`<${mentorDescription}>`}</p>
                    <h2>{mentorName}</h2>
                </div>
            </div>
        </>
    )
}