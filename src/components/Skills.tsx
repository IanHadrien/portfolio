import { LuSquareAsterisk } from "react-icons/lu"
import { FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="my-14">
      <h2 className="font-bold flex items-center justify-center text-2xl pb-6">
        <LuSquareAsterisk size={17} color="#17E07B" />
        <span className="pl-2">SKILLS</span>
      </h2>
      <div>
        <div className="w-48 text-center bg-portifolio-gray2 aspect-square flex flex-col justify-center items-center rounded-ss-xl cursor-pointer border-b-4 border-portifolio-greem transition hover:scale-110">
          <p className="text-2xl mb-6 text-portifolio-greem">React.js</p>
          <FaReact size={50} />
        </div>
      </div>
    </div>
  )
}