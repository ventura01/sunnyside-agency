import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import ActionBtn from "./ActionBtn";

type Props = {};
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const Services = (props: Props) => {
  return (
    <main>
      <section id="services" className="grid grid-cols-1 md:grid-cols-2 mb-20">
        <div className="py-20 px-14 row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:py-36 md:px-44">
          <h2 className={`${fraunces.className} text-2xl font-bold mb-5`}>
            Transform your brand
          </h2>
          <p
            className={`${barlow.className} font-light text-veryDarkGrayishBlue text-sm mb-5`}
          >
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <ActionBtn name="Learn more" />
          {/* <button className={`${fraunces.className} uppercase font-bold`}>
            <span className="peer">Learn more</span>
            <span className="peer-hover:bg-yellow rounded-full scale-x-0 peer-hover:scale-x-110 transition-all w-full block h-2"></span>
          </button> */}
        </div>
        <div>
          <Image
            src="/desktop/image-transform.jpg"
            alt="egg-img"
            width={600}
            height={600}
            className="object-cover object-center w-full"
          />
        </div>
        <div>
          <Image
            src="/desktop/image-stand-out.jpg"
            alt="egg-img"
            width={600}
            height={600}
            className="object-cover object-center w-full"
          />
        </div>
        <div className="py-20 px-14 md:py-36 md:px-44">
          <h2 className={`${fraunces.className} text-2xl font-bold mb-5`}>
            Stand out to the right audience
          </h2>
          <p
            className={`${barlow.className} font-light text-veryDarkGrayishBlue text-sm mb-5`}
          >
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <ActionBtn name="Learn more" />
        </div>
        <div className="relative">
          <Image
            src="/desktop/image-graphic-design.jpg"
            alt="egg-img"
            width={600}
            height={600}
            className="object-cover hidden md:block object-center w-full"
          />
          <Image
            src="/mobile/image-graphic-design.jpg"
            alt="egg-img"
            width={600}
            height={600}
            className="object-cover md:hidden block object-center w-full"
          />
          <div className="py-20 px-5 md:py-36 md:px-44 absolute top-60 md:top-48">
            <h2
              className={`${fraunces.className} text-center text-darkDesaturatedCyan text-xl md:text-2xl font-bold mb-2 md:mb-5`}
            >
              Graphic design
            </h2>
            <p
              className={`${barlow.className} text-center font-light text-darkDesaturatedCyan text-sm mb-5`}
            >
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/desktop/image-photography.jpg"
            alt="egg-img"
            width={600}
            height={600}
            className="object-cover object-center hidden md:block w-full"
          />
          <Image
            src="/mobile/image-photography.jpg"
            alt="orange-img"
            width={600}
            height={600}
            className="object-cover object-center md:hidden block w-full"
          />
          <div className="py-20 px-5 md:py-36 md:px-44 absolute z-10 top-60 md:top-48">
            <h2
              className={`${fraunces.className} text-center text-darkBlue text-xl md:text-2xl font-bold mb-2 md:mb-5`}
            >
              Photography
            </h2>
            <p
              className={`${barlow.className} text-center font-light text-darkBlue text-sm mb-5`}
            >
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
