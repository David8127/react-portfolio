import { FcDocument } from "react-icons/fc";
import MovingText from 'react-moving-text';
import Pdf from '../assets/Resume.pdf';

const Resume = () => {
  return (
    <div style={{ paddingBlock: "55px" }}>
      <h1 className="text-2xl pt-15">Download my resume below ⏬ </h1>
      <MovingText
        type="flipFromLeftToCenter"
        duration="1600ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
        <a href={Pdf} target="_blank">
          <FcDocument size={420} style={{ display: "inline-flex" }} />
        </a>
      </MovingText>
      <p> <span className="text-lg font-semibold">Proficiencies:</span> CSS, HTML, JavaScript, Express.js, Node.js, Mongoose, MySQL, jQuery, </p>
    </div>
  )
}

export default Resume;
