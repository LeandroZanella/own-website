import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function BottomNavigation() {
  return (
    <nav className="max-w-screen w-full flex z-50 bg-gray-800 justify-between p-2 fixed bottom-0">
      <Link
        activeClass="active"
        to="start"
        spy={true}
        smooth={true}
        duration={1000}
        className="flex flex-col items-center justify-center text-gray-400 hover:text-white"
      >
        <FontAwesomeIcon icon={faHome} size="lg" />
        <span className="text-xs font-medium">Início</span>
      </Link>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
        className="flex flex-col items-center justify-center text-gray-400 hover:text-white"
      >
        <FontAwesomeIcon icon={faHome} size="lg" />
        <span className="text-xs font-medium">Sobre</span>
      </Link>

      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        duration={1000}
        className="flex flex-col items-center justify-center text-gray-400 hover:text-white"
      >
        <FontAwesomeIcon icon={faHome} size="lg" />
        <span className="text-xs font-medium">Experiências</span>
      </Link>

      <Link
        activeClass="active"
        to="content"
        spy={true}
        smooth={true}
        duration={1000}
        className="flex flex-col items-center justify-center text-gray-400 hover:text-white"
      >
        <FontAwesomeIcon icon={faHome} size="lg" />
        <span className="text-xs font-medium">Competências</span>
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
        className="flex flex-col items-center justify-center text-gray-400 hover:text-white"
      >
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <span className="text-xs font-medium">Contato</span>
      </Link>
    </nav>
  );
}