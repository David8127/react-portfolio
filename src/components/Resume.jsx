import { FcDocument } from "react-icons/fc";
import Pdf from '../assets/Resume.pdf';

const Resume = () => {
  return (
    <div style={{ paddingBlock: "55px" }}>
      <h1 className="text-2xl pt-12">Download my resume below ⏬ </h1>
        <a href={Pdf} target="_blank">
          <FcDocument size={420} style={{ display: "inline-flex" }} />
        </a>
      <p> <span className="text-lg font-semibold">Proficiencies:</span> CSS, HTML, JavaScript, Express.js, Node.js, Mongoose, MySQL, jQuery, </p>
    </div>
  )
}

export default Resume;
