import Luxury from "./components/Luxury";
import Sedan from "./components/Sedan";
import Suvs from "./components/Suvs";

export default function App() {
  return (
    <main className="nin-h-svh bg-offwhitebg py-20 px-6 antialised lg:flex justify-center items-center" >
      <div className="lg:flex max-w-[920px]">
        <Sedan/>
        <Suvs/>
        <Luxury/>
      </div>
    </main>
  )
}
