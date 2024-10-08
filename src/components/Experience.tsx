const Experience = () => {
  interface Role {
    title: string;
    company: string;
    timeframe: string;
    roleDescription: string;
    skillsUsed: string;
  }

  interface OtherRole {
    title: string;
    company: string;
    timeframe: string;
    roleDescription: string;
    skillsUsed: string;
  }

  const role: Role[] = [
    {
      title: "Volunteer Web Developer",
      company: "MJs Cafe",
      timeframe: "Aug 2023 - Oct 2023",
      roleDescription:
        "In this role I developed a static website for a small cafe based in Niton, Isle of Wight. I developed my professional communication, time management and gathering requirements for a real business in hands on experience. The website was designed in Figma, which allowed me to refine the design process for a better outcome.",
      skillsUsed: "HTML | CSS | JS",
    },
    {
      title: "CiB Developer / Designer",
      company: "Bournemouth University / JP Morgan",
      timeframe: "April 2024 - May 2024",
      roleDescription:
        "In this role, I was a developer and designer for a professional project in Bournemouth University. This was for an event called CiB (Computing in Business), in this role I designed a UI interface for an Incident Response System, considering accessibility, various roles and system requirements. I worked as a team using SCRUM methodology, producing a system concept for a mock investment bank. Additionally I created system documentation like DFDs, business ERDs etc and interviewed stakeholders to identify the requirements.",
      skillsUsed: "Figma | CSS | OracleSQL",
    },
  ];

  const otherRole: OtherRole[] = [
    {
      title: "CodeJam",
      company: "Bournemouth University",
      timeframe: "72 Hours, Sep 27 - Sep 30 2023",
      roleDescription:
        "In this CodeJam, the brief assigned was to develop a proof of concept app for the local area (Bournemouth), to better handle littering. My app idea was to have it work with a map functionality, with bins marked on the maps, showing you the closest bin, which provides an alternative to just leaving rubbish behind. These bins would be unique in the sense that you might scan a QR Code, and upon placing trash in the bin you'd receive points. With these points displayed on a leaderboard amongst friends, and regionally, it makes for a more competitive environment, encouraging people to recycle and avoid littering. For this concept, we achieved fourth place, with around 12 groups.",
      skillsUsed: "Figma | Teamwork | Creativity | Time Management ",
    },
    {
      title: "Hackathon",
      company: "Bournemouth University",
      timeframe: "96 Hours, Sep 24 - Sep 27 2024",
      roleDescription:
        "In this hackathon, we collaborated with another university called Xi'an Jiaotong-Liverpool University. Our task was to design a proof of concept app about the concept 'Translation', both culturally and as a language. The aim was to find a way to effectively communicate, understand and share different perspectives and experiences. Our idea was to create a volunteer based app, volunteers would sign up, and support those visiting those countries with translation, culture etc. In my role I developed the UI in Figma, made connections to create a live demo, developed animations etc. Any further project details can be found in the Projects section. This project was then presented to judges, and scored against other projects within Bournemouth Uni, with the next phase being scored against projects in the rival university - Xi'an Jiaotong-Liverpool Uni.  ",
      skillsUsed:
        "Figma | Teamwork | Creativity | Time Management | CSS | JavaScript",
    },
  ];

  return (
    <div
      id="experience"
      className="experience-wrapper section-styling bg-neutral-400 h-auto "
    >
      <div className="custom-heading header text-neutral-700 mb-8">
        <h3>Experience</h3>
      </div>

      <div className="exp-container flex flex-wrap justify-center text-white gap-8 ml-8 mr-8 mb-12">
        {role.map((role, index) => (
          <div
            key={index}
            className="exp-item text-neutral-300 bg-neutral-600 rounded p-8 flex flex-col flex-none w-full sm:w-full sm:flex-none md:flex-none lg:flex-1 xl:flex-1 "
          >
            <h3 className="font-bold text-2xl mb-4">{role.title}</h3>
            <hr className="mt-2 mb-4" />

            <p className="font-semibold text-xl mb-2">{role.company}</p>
            <p className="text-lg italic mb-2">{role.timeframe}</p>
            <p className="pb-6 pt-4 text-ellipsis">{role.roleDescription}</p>
            <div className="job-skills-container bg-neutral-500 rounded-lg p-2 font-semibold place-self-start">
              {role.skillsUsed}
            </div>
          </div>
        ))}
      </div>

      <div className="custom-heading header text-neutral-700 mb-8">
        <h3>Other Experience</h3>
      </div>

      <div className="other-container flex flex-wrap justify-center text-white gap-8 ml-8 mr-8 mb-12">
        {otherRole.map((otherRole, index) => (
          <div
            key={index}
            className="other-item text-neutral-300 bg-neutral-500 rounded p-8 flex flex-col flex-none w-full sm:w-full "
          >
            <h3 className="font-bold text-2xl mb-4">{otherRole.title}</h3>
            <hr className="mt-2 mb-4" />

            <p className="font-semibold text-xl mb-2">{otherRole.company}</p>
            <p className="text-lg italic mb-2">{otherRole.timeframe}</p>
            <p className="pb-6 pt-4 text-ellipsis">
              {otherRole.roleDescription}
            </p>
            <div className="job-skills-container bg-neutral-600 rounded-lg p-2 font-semibold place-self-start">
              {otherRole.skillsUsed}
            </div>
          </div>
        ))}
      </div>

      <div className="exp-svg-container">
        <div className="exp-svg-background"></div>
      </div>
    </div>
  );
};

export default Experience;
