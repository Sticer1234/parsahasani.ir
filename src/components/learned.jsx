import { FaNode, FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import IcGsap from "../assets/Ic-gsap.jsx";
import { FaWordpress } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiLua } from "react-icons/si";
import { SiFivem } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function Learned() {
    return (
        <>
            <div className="grid grid-cols-8 gap-3 sm:gap-5 md:gap-6 lg:gap-8 px-12 md:px-32  lg:px-48 mt-8">
                <FaReact className="w-full h-full fill-zinc-100" title="React"/>
                <FaJs className="w-full h-full fill-zinc-100" title="JavaScript"/>
                <RiTailwindCssFill className="w-full h-full fill-zinc-100" title="TailwindCSS"/>
                <FaBootstrap className="w-full h-full fill-zinc-100" title="Bootstrap"/>
                {/* <IcGsap className="w-full h-full fill-zinc-100"/> */}
                <FaWordpress className="w-full h-full fill-zinc-100" title="Wordpress"/>
                <FaNodeJs className="w-full h-full fill-zinc-100" title="NodeJS"/>
                <SiExpress className="w-full h-full fill-zinc-100" title="ExpressJS"/>
                <FaGitAlt className="w-full h-full fill-zinc-100" title="Git"/>
                <SiMysql className="w-full h-full fill-zinc-100" title="MySql Database"/>
                <SiLua className="w-full h-full fill-zinc-100" title="Lua"/>
                <SiFivem className="w-full h-full fill-zinc-100" title="FiveM Scripts"/>
                <SiAdobephotoshop className="w-full h-full fill-zinc-100 p-1" title="Photoshop"/>
                <SiAdobeillustrator className="w-full h-full fill-zinc-100 p-1" title="Illustrator"/>
                <SiAdobepremierepro className="w-full h-full fill-zinc-100 p-1" title="PremierPro"/>
                <FaPython className="w-full h-full fill-zinc-100" title="Python"/>
            </div>
        </>
    );
}

export default Learned;