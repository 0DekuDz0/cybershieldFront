
import "./AgendaRow.css";
export default function AgendaRow({place, time , description}){
    return(
        <>
            <div className="agendaRow">
                <div className="agendaPlace">
                    <h2>{place}</h2>
                </div>
                <div className="agendaTime">
                    <h3 className="h3-italic">{time}</h3>
                </div>
                <div className="agendaDescription">
                    <h3 className="sectionTitle">{description}</h3>
                </div>
            </div>
        </>
    )
}