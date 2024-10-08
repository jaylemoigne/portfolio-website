import JaysCV from "/files/JayLM CV.pdf";

const DownloadButtons = () => {
  return (
    <div>
      <div className="btn-section flex flex-row flex-wrap gap-2 w-full">
        <a
          href={JaysCV}
          download="JayLM CV | Front-End Developer"
          rel="noreferrer noopener"
        >
          <button className="w-24 sm:w-28 md:w-32 h-12 md:h-14 text-sm md:text-base lg:text-md rounded font-semibold bg-[#697D67] hover:bg-[#cecdcd] hover:text-[#697D67] mb-2 transition ease 0.3s">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadButtons;
