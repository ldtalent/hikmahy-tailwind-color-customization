import Cards from "./components/Cards";
import Report from "./components/Report";

function App() {
  return (
    <div className='App font-rubik bg-very-light-gray min-h-screen px-6 py-20 sm:px-28 lg:px-24 xl:px-28 lg:flex md:items-center '>
      <div className="md:mx-auto lg:flex lg:items-center">
      <Report />
      <Cards />

      </div>
    </div>
  );
}

export default App;
