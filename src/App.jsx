import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";

function App() {
  return (
    <>
      {/* ✅ Canvas for 3D Scene */}
      <section className="can-sec fixed h-screen w-full">
        <Canvas>
          <Experience />
        </Canvas>
      </section>

      {/* ✅ Section 1 */}
      <section className="section-one w-full">
        <div className="flex p-4 items-end h-screen">
          <h1 className="text-white text-[50px] leading-[55px] uppercase font-bold">
            Rizznart Disrupts
            <br />
            Designs, And <br />
            Dominates.
          </h1>
        </div>
      </section>

      {/* ✅ ScrollTrigger Animation Section */}
      <section className="sec-two h-screen py-12 flex items-center justify-center bg-fixed bg-center relative">
        <div className="container mx-auto max-w-screen-xl">
          <div className="space-y-6 px-4 md:px-14 2xl:px-0">
            <div className="gl w-full py-2">
              <h2 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase leading-[55px] md:leading-[3.49vw]">
                Flip The
                <br />
                Switch go
              </h2>
            </div>
            <div className="gr w-full py-2">
              <h2 className="text-white text-[45px] md:text-[4.271vw] font-[600] uppercase leading-[55px] md:leading-[3.49vw] text-right">
                Full Mad
                <br />
                Scientist
                <br /> Mode
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
