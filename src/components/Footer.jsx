import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="sticky bottom-0 footer footer-center py-1.5 text-base-content rounded bg-teal-700">
            <div className="grid grid-flow-col gap-5">
                <a className="text-lg">Github</a>
                <a className="text-lg">LinkedIn</a>
                <a className="text-lg">Facebook</a>
            </div>
            <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/David8127" target="_blank">
                    <svg width="50" height="50" viewBox="0 0 24 24" className="fill-current"><FaGithub /></svg>
                </a>
                <a >
                    <svg width="50" height="50" viewBox="0 0 24 24" className="fill-current"><FaLinkedin /></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100000325672504&mibextid=LQQJ4d" target="_blank">
                    <svg width="50" height="50" viewBox="0 0 24 24" className="fill-current"><FaFacebookSquare /></svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer;