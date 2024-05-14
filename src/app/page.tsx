import BurgerCounter from "./burger";
import BürgerGeldCounter from "./bürgergeld";
import LidlReturn from "./lidl";
import BeerCounter from "./beer";
export default function Home() {
  
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center font-mono text-sm space-y-8">
        <div className="text-3xl"> Bis zu unserem Trip...</div>
        <BurgerCounter />
        <BürgerGeldCounter />
        <LidlReturn />
        <BeerCounter />
      </div>
    </main>
  );
}
