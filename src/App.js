import Cards from "./components/Cards";
import Report from "./components/Report";

function App() {
  return (
    <div className='App font-rubik bg-very-light-gray min-h-screen px-6 py-20 sm:px-28 lg:px-24 lg:flex md:items-center '>
      <Report />
      <Cards />
    </div>
  );
}

export default App;
