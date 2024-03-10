import { FaRegUser, FaPhoneAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import Button from "./Button";

export default function TopBar() {
  return (
    <section className="flex items-center justify-between p-4">
      <div className="md:block hidden">
        <p>&#128075; Portifolio</p>
      </div>
      <div className="flex items-center text-portifolio-grey flex-wrap">
        <div className="flex items-center mr-14 text-sm cursor-pointer hover:text-portifolio-white transition">
          <span className="mr-2">
            <FaRegUser size={17} />
          </span>
          Sobre mim
        </div>
        <div className="flex items-center mr-14 text-sm cursor-pointer hover:text-portifolio-white transition">
          <span className="mr-2">
            <FaPhoneAlt size={17} />
          </span>
          Contato
        </div>
        <div className="flex items-center mr-6 text-sm cursor-pointer hover:text-portifolio-white transition">
          <span className="mr-2">
            <GrProjects size={17} />
          </span>
          Projetos
        </div>
        <div className="md:border-l border-portifolio-grey pl-4">
          <Button title="Entrar em contato" bg="bg-portifolio-white" textColor="text-portifolio-black" />
        </div>
      </div>
    </section>
  )
}