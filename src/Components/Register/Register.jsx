import "./Register.css";
import { useState } from "react";
export default function Register({ element }) {

  const [formIndex, setFormIndex] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [skills, setSkills] = useState("");
  const [previousParticipation, setPreviousParticipation] = useState();
  const [LinkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");

  async function submitForm() {
    element.className = "registerForm-invisible";
    try {
      const API_URL = import.meta.env.VITE_BACKEND_URI;

      const res = await fetch(
        `${API_URL}/api/add_participant/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            participant_name: firstName + " " + lastName,
            participant_email: email,
            participant_phone: phoneNumber,
            participant_dateOfBirth: dateOfBirth,
            participant_skills: skills,
            participant_haveParticipated: previousParticipation,
            participant_linkedin: LinkedIn,
            participant_github: github,
            participant_portfolio: personalWebsite,
            new_team: team ,
            team_name: teamName,
          }),
        }
      );

      if (res.ok) {
        console.log("Form Submitted");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function nextForm(e) {
    e.preventDefault();
    formIndex + 1 > 3 ? submitForm()  : setFormIndex(formIndex + 1);
  }

  function previousForm(e) {
    e.preventDefault();
    formIndex - 1 < 1 ? setFormIndex(1) : setFormIndex(formIndex - 1);
  }

  return (
    <>
      <div className="registerSection">
        <h1>
          Registration{" "}
          <button
            type="button"
            className="close-button"
            onClick={() => {
              element.className = "registerForm-invisible";
            }}
          >
            X
          </button>
        </h1>

        <div className="progressionBar">
          <div
            className={`progressionBarFill-${
              formIndex > 1 ? "orange" : "white"
            }`}
          ></div>
          <div
            className={`progressionBarFill-${
              formIndex > 2 ? "orange" : "white"
            }`}
          ></div>
          <div
            className={`progressionBarFill-${
              formIndex > 3 ? "orange" : "white"
            }`}
          ></div>
        </div>
        {formIndex === 1 && (
          <div className="formData" id="form-1">
            <h2>Personal Information</h2>
            <form>
              <div className="doubleInput">
                <input
                  type="text"
                  placeholder="First Name *"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="singleInput">
                <input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="doubleInput">
                <input
                  type="text"
                  placeholder="Phone Number *"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Date of birth *"
                  name="dateOfBirth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className="singleButton">
                <button onClick={(e)=>nextForm(e)}>
                  <h2>Next</h2>
                </button>
              </div>
            </form>
          </div>
        )}
        {formIndex === 2 && (
          <div className="formData" id="form-2">
            <h2>Skills & interests</h2>
            <form>
              <div className="questionInput">
                <label htmlFor="skills">
                  <h3>Skills</h3>
                </label>
                <input
                  type="text"
                  placeholder="List up to 4 skills you consider yourself proficient at."
                  name="skills"
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
              <div className="questionInput">
                <label htmlFor="previousParticipation">
                  <h3>Have you participated in hackathons before?</h3>
                </label>
                <div>
                  <div>
                  <input
                      type="radio"
                      name="previousParticipation"
                      value="True"
                      id="previousParticipationYes"
                      onChange={() => setPreviousParticipation(true)}
                      />
                    <label htmlFor="previousParticipationYes">Yes</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="previousParticipation"
                      value="False"
                      id="previousParticipationNo"
                      onChange={() => setPreviousParticipation(false)}
                      />
                    <label htmlFor="previousParticipationNo">No</label>
                  </div>
                </div>

              </div>
              <div className="questionInput Triple">
                <label htmlFor="socialMedia">
                  <h3>LinkedIn / GitHub / Personal Website</h3>
                </label>
                <div>
                  <input
                    type="url"
                    placeholder="LinkedIn"
                    name="LinkedIn"
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />
                  <input
                    type="url"
                    placeholder="Github"
                    name="github"
                    onChange={(e) => setGithub(e.target.value)}
                  />
                  <input
                    type="url"
                    name="personalWebsite"
                    placeholder="Personal Website"
                    onChange={(e) => setPersonalWebsite(e.target.value)}
                  />
                </div>
              </div>
              <div className="buttonDouble">
                <button onClick={(e)=>previousForm(e)}>
                  <h2>Back</h2>
                </button>
                <button onClick={(e)=>nextForm(e)}>
                  <h2>Next</h2>
                </button>
              </div>
            </form>
          </div>
        )}
        {formIndex === 3 && (
          <div className="formData" id="form-3">
            <h2>Team</h2>
            <form>
              <div className="questionInput">
                <label htmlFor="newTeam">
                  <h3>
                    Do you want to join your team or create a spot for your
                    team? 
                  </h3>
                </label>
                <div>
                  <div>
                    <input
                      type="radio"
                      name="team"
                      value="False"
                      onChange={(e) => setTeam(e.target.value)}
                    />
                    <label htmlFor="joinTeam">Join Your Team</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="team"
                      value="True"
                      onChange={(e) => setTeam(e.target.value)}
                    />
                    <label htmlFor="creatTeam">Create a Team</label>
                  </div>
                </div>
              </div>
              <div className="questionInput">
                <label htmlFor="Team Name">
                  <h3>Team Name</h3>
                </label>
                <input
                  type="text"
                  placeholder="Your team name here... "
                  name="teamName"
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div className="buttonDouble">
                <button onClick={(e)=>previousForm(e)}>
                  <h2>Back</h2>
                </button>
                <button onClick={(e)=>nextForm(e)}>
                  <h2>Next</h2>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
