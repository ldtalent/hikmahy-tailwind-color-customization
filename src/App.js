import luxury from './assets/icon-luxury.svg';
import sedans from './assets/icon-sedans.svg';
import suvs from './assets/icon-suvs.svg';

function App() {
  return (
    <div className='App font-lexend-deca bg-light-gray text-transparent-white min-h-screen flex items-center justify-center px-6 py-16'>
      <div className='card-wrapper py-3 w-full h-full md:mt-1'>
        <div className='card w-full h-full rounded-lg overflow-hidden my-3 md:mt-12 md:flex max-w-4xl mx-auto'>
          <div className='bg-bright-orange px-12 py-12'>
            <div className='img-wrapper'>
              <img src={sedans} alt='sedans-icon' />
            </div>
            <div className='text-wrapper'>
              <h2 className='uppercase font-bold text-4xl font-big-shoulders mt-10 md:mt-6'>sedans</h2>
              <p className='mt-7 text-sm leading-6 md:leading-7 mb-2 md:mb-7 md:mt-4'>
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
              <button className='bg-light-gray text-bright-orange px-5 rounded-full h-12 text-base hover:border-2 hover:border-white hover:bg-transparent hover:text-white transition-colors mt-12'>
                Learn More
              </button>
            </div>
          </div>
          <div className='bg-dark-cyan px-12 py-12'>
            <div className='img-wrapper'>
              <img src={suvs} alt='suvs-icon' />
            </div>
            <div className='text-wrapper'>
              <h2 className='uppercase font-bold text-4xl font-big-shoulders mt-10 md:mt-6'>suvs</h2>
              <p className='mt-7 text-sm leading-6 md:leading-7 mb-2 md:mb-7 md:mt-4'>
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
              <button className='bg-light-gray text-dark-cyan px-5 rounded-full h-12 text-base hover:border-2 hover:border-white hover:bg-transparent hover:text-white transition-colors mt-12'>
                Learn More
              </button>
            </div>
          </div>
          <div className='bg-very-dark-cyan px-12 py-12'>
            <div className='img-wrapper'>
              <img src={luxury} alt='luxury-icon' />
            </div>
            <div className='text-wrapper'>
              <h2 className='uppercase font-bold text-4xl font-big-shoulders mt-10 md:mt-6'>luxury</h2>
              <p className='mt-7 text-sm leading-6 md:leading-7 mb-2 md:mb-7 md:mt-4'>
                Luxury Cruise in the best car brands without the bloated prices.
                Enjoy the enhanced comfort of a luxury rental and arrive in
                style.
              </p>
              <button className='bg-light-gray text-very-dark-cyan px-5 rounded-full h-12 text-base hover:border-2 hover:border-white hover:bg-transparent hover:text-white transition-colors mt-12'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
