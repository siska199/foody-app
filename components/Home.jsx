import React from 'react'

const Home = () => {
  const heroData = [
    {
      name: 'Icecream',
      desc: 'Chocolate & vanilla',
      price: '5.25',
      imageSrc: '/assets/i1.png',
    },
    {
      name: 'Strawberries',
      desc: 'Fresh Strawberries',
      price: '10.25',
      imageSrc: '/assets/f1.png',
    },
    {
      name: 'Chicken Kebab',
      desc: 'Mixed Kebab Plate',
      price: '8.25',
      imageSrc: '/assets/c3.png',
    },
    {
      name: 'Fish Kebab',
      desc: 'Mixed Fish Kebab',
      price: '5.25',
      imageSrc: '/assets/fi1.png',
    },
  ]
  return (
    <section
      id="home"
      className="container my-10 grid grid-cols-2 gap-2 border-2 bg-light-theme"
    >
      {/* Left */}
      <div className="flex flex-col gap-6 border-2 text-[#2e2e2e]">
        <div className="flex w-[10rem] items-center justify-center gap-2 rounded-full bg-orange-100">
          <h5 className="text-base font-semibold text-orange-500">
            Bike Delivery
          </h5>
          <div className="h-8 w-8 overflow-hidden rounded-full bg-white drop-shadow-xl">
            <img src="/assets/delivery.png" alt="" />
          </div>
        </div>

        <h1 className="text-[4.5rem] font-bold tracking-wide ">
          The Fastest Delivery in{' '}
          <span className="text-orange-600">Your City</span>
        </h1>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          doloremque sint ratione voluptatum officia, quos eveniet nihil rerum
          recusandae molestiae delectus harum sit quis sed, reiciendis ab hic
          aspernatur mollitia!
        </p>
        <button className="w-[10rem] rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 transition-all duration-100 ease-in-out hover:shadow-lg">
          Order Now
        </button>
      </div>

      {/* Right */}
      <div className="bg-cardOverlay relative flex h-[45rem] justify-end border-2">
        <div className="absolute top-0 left-0  flex h-full w-full flex-wrap items-center gap-4 ">
          <div className="flex w-[80%] flex-wrap gap-4 ">
            {heroData.map((data, i) => (
              <div
                key={i}
                className="mb-20 flex w-[13rem] flex-col items-center rounded-3xl bg-gray-200 p-5 backdrop-blur-md"
              >
                <img className="-mt-20 w-40" src={data.imageSrc} />
                <h1 className="mt-4 text-xl font-semibold text-gray-500">
                  {data.name}
                </h1>
                <p className="my-3 text-sm font-semibold text-gray-400">
                  {data.desc}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  <span className="text-sm text-red-600">$</span>
                  {data.price}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img src="/assets/heroBg.png" />
      </div>
    </section>
  )
}

export default Home
