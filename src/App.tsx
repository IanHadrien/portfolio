import AboutMe from "./components/AboutMe";
import Button from "./components/Button";
import Skills from "./components/Skills";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <div className="bg-portifolio-black text-portifolio-white py-4 px-20">
      <TopBar />

      <main className="mt-16 grid md:gap-4 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <div>
            <p className="text-portifolio-grey font-bold">Hey, I am</p>
            <h2 className="text-7xl font-bold flex">
              Ian Hadrien 
              <p className="waving-hand">&#128075;</p>
            </h2>
            <div className="my-4 h-1 w-24 bg-portifolio-greem"></div>
            <p className="text-gray-300 text-xl">
              Desenvolvedor Front-End com experiência em desenvolvimento de software para web, 
              utilizando tecnologias como JavaScript, TypeScript, React, VueJs, Node.js.
            </p>
            <div className="my-6">
              <Button 
                title="Contact me" 
                bg="bg-portifolio-greem mr-6" 
                textColor="text-portifolio-black" 
              />
              <Button 
                title="check portfolio" 
                bg="bg-portifolio-white" 
                textColor="text-portifolio-black" 
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-end">
          <img 
            className="rounded-md w-450"
            src="https://avatars.githubusercontent.com/u/69321781?v=4" 
            alt="User" 
          />
        </div>
      </main>

      <AboutMe />

      <Skills />
    </div>
  )
}