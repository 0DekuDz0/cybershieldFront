import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="eventTitle typewriter">
          <h3 className="sectionTitle ">{`<Alger, Mar 10-12 2025>`}</h3>
          <h1 className="hackathonName " >
            Cyber<span>Shield</span> Hackathon
          </h1>
        </div>

      </div>
      <div className="eventInfo">
            <h3 className="sectionTitle ">{`<Defend_Hack_Innovate!>`}</h3>
            <h1 >
            The Event of <br />The Year
          </h1>
          <div>
            <p className="subP">
            Cybersecurity is more than just  protecting data it’s a constant battle   between attackers and defenders,  where only the most skilled and  adaptable can stay ahead. In a world where digital threats evolve every day, the real challenge is not just finding vulnerabilities but thinking like a hacker to outsmart them.
            </p>
            <p className="subP">
            A true cybersecurity expert thrives on solving complex problems, pushing limits, and staying one step ahead of the game. If you’re passionate about security, love a good challenge, and  want to test your skills against the best, this is your chance. Are you ready to take on the challenge and prove you have what it takes?
            </p>
          </div>

        </div>

    </>
  );
}
