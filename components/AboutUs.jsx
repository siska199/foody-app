import React from 'react'
import { useSelector } from 'react-redux'
import TittleSection from './TitleSection'

const AboutUs = () => {
  const theme = useSelector((state) => state.theme.value)
  return (
    <section
      id="about-us"
      className="flex flex-col items-center pt-[3rem] md:pt-[7rem]"
    >
      <TittleSection title={'About Us'} />
      <div className="my-[5rem] flex flex-wrap items-center justify-center gap-8">
        <div>
          <img src="/assets/i6.png" className="w-[15rem]" />
          
        </div>
        <div className="md:w-[50%]">
          <p
            className={`text-justify tracking-wide ${theme.textMainColor} ${
              theme.theme == 'dark' && 'font-[300]'
            }`}
          >
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
