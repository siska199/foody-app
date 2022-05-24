import React from 'react'
import TittleSection from './TitleSection'

const AboutUs = () => {
  return (
    <section id="about-us" className="flex pt-[3rem] md:pt-[7rem] flex-col items-center">
      <TittleSection title={"About Us"} />
      <div className="my-[5rem] flex flex-wrap items-center justify-center gap-8">
        <img src="/assets/logo.png" className="w-[15rem]" />
        <div className="md:w-[50%]">
          <p className='text-justify	tracking-wide'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium ad laudantium ea reprehenderit omnis eius sunt
            asperiores, illum id quisquam maxime. At minus maxime nisi alias!
            Quae perferendis, rem accusamus sunt eligendi ad laboriosam ut
            impedit vitae, modi eius cumque ullam. Facilis id, earum animi
            adipisci fuga culpa explicabo. Ipsam!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
