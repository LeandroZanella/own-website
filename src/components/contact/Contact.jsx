import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="bg-gray-950 w-full px-7" id="contact">
      <div className="lg mx-auto py-16 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-center mb-8 sm:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">Entre em contato</h2>
          <p className="text-white leading-loose">
            Tem alguma pergunta ou gostaria de trabalhar comigo em um projeto? Entre em contato!
          </p>
        </div>

        <div className="flex sm:mt-0 justify-center space-x-4">
          <a href="mailto:leandrozanella012@gmail.com" target="blank" className="text-white hover:text-gray-600">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#fff" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5547996932582" target="blank" className="text-white hover:text-gray-600">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#fff" />
          </a>
          <a href="https://github.com/LeandroZanella" target="blank" className="text-white hover:text-gray-600">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#fff" />
          </a>
        </div>
      </div>
    </div>
  );
}