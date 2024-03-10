import { HiOutlineMail } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import { LuSquareAsterisk } from "react-icons/lu"

export default function AboutMe() {
  return (
    <div className="my-40">
      <h2 className="font-bold flex items-center justify-center text-2xl pb-6">
        <LuSquareAsterisk size={17} color="#17E07B" />
        <span className="pl-2">SOBRE</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className="px-6">
          <p className="flex items-center justify-center border-2 border-portifolio-greem p-1 rounded-full h-44 w-44">
            <img 
              className="rounded-full h-40 w-40"
              src="https://avatars.githubusercontent.com/u/69321781?v=4" 
              alt="User" 
            />
          </p>
          <div>
            <p className="text-gray-300 text-xl text-center py-1 mt-4">Ian Hadrien</p>
            <div className="flex items-center justify-between text-portifolio-greem">
              <span><HiOutlineMail size={30} /></span>
              <span><FaGithub size={30} /></span>
              <span><CiLinkedin size={30} /></span>
            </div>
          </div>
        </div>
        <div className="px-6">
          <p className="font-bold pb-4">Conheça um pouco sobre mim</p>
          <p className="pb-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            similique. Assumenda corporis cum non optioi <br />
            molestiae! Quasi qui consequatur autem, excepturi
          </p>
          <p className=" text-gray-300">
            Lorem ipsum dolor sit amet consectetur <br />
            similique. Assumenda corporis cum non <br />
            molestiae! Quasi qui consequatur 
          </p>
        </div>
      </div>
    </div>
  )
}