import { useEffect } from "react";

var bgImages = [
  "images/randomSVGs/bg1.svg",
  "images/randomSVGs/bg2.svg",
  "images/randomSVGs/bg3.svg",
  "images/randomSVGs/bg4.svg",
  "images/randomSVGs/bg5.svg",
  "images/randomSVGs/bg6.svg",
];

const Blobs = () => {
  useEffect(() => {
    const captions = document.querySelectorAll<HTMLDivElement>(".cptn-item");

    captions.forEach((caption) => {
      const randomNum = Math.floor(Math.random() * bgImages.length);
      caption.style.backgroundImage = `url(${bgImages[randomNum]})`;
    });
  }, []);

  return (
    <div className="mb-24">
      <div className="caption-container h-auto flex justify-center lg:justify-between flex-wrap ml-12 mr-12 text-gray-300">
        <div className="cptn-item">
          <div className="upper">6</div>
          <div className="lower">Coding Languages</div>
        </div>
        <div className="cptn-item">
          <div className="upper">1</div>
          <div className="lower">Web/App Framework</div>
        </div>
        <div className="cptn-item">
          <div className="upper">3+</div>
          <div className="lower">Years of Experience</div>
        </div>
      </div>
    </div>
  );
};

export default Blobs;
