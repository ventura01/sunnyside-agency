import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";
import Image from "next/image";

type Props = {};
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
});
const Testimonials = (props: Props) => {
  return (
    <section id="testimonials">
      <h2
        className={`${fraunces.className} text-center text-lg font-extrabold tracking-widest uppercase text-darkGrayishBlue`}
      >
        Client testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center pt-14 px-8 md:py-20 md:px-14">
          <Image
            src="/desktop/image-emily.jpg"
            alt="test-img"
            width={65}
            height={65}
            className="object-cover object-center rounded-full mb-12"
          />
          <p
            className={`${barlow.className} text-sm text-veryDarkGrayishBlue text-center mb-12`}
          >
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4
            className={`${fraunces.className} text-veryDarkDesaturatedBlue font-extrabold text-sm text-center mb-2`}
          >
            Emily R.
          </h4>
          <span
            className={`${barlow.className} text-xs font-light text-grayishBlue`}
          >
            Marketing Director
          </span>
        </div>
        <div className="flex flex-col items-center pt-14 px-8 md:py-20 md:px-14">
          <Image
            src="/desktop/image-jennie.jpg"
            alt="test-img"
            width={65}
            height={65}
            className="object-cover object-center rounded-full mb-12"
          />
          <p
            className={`${barlow.className} text-sm text-veryDarkGrayishBlue text-center mb-12`}
          >
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4
            className={`${fraunces.className} text-veryDarkDesaturatedBlue font-extrabold text-sm text-center mb-2`}
          >
            Jennie F.
          </h4>
          <span
            className={`${barlow.className} text-xs font-light text-grayishBlue`}
          >
            Chief Operating Officer
          </span>
        </div>
        <div className="flex flex-col items-center pt-14 px-8 md:py-20 md:px-14 md:mb-0 mb-20">
          <Image
            src="/desktop/image-thomas.jpg"
            alt="test-img"
            width={65}
            height={65}
            className="object-cover object-center rounded-full mb-12"
          />
          <p
            className={`${barlow.className} text-sm text-veryDarkGrayishBlue text-center mb-12`}
          >
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4
            className={`${fraunces.className} text-veryDarkDesaturatedBlue font-extrabold text-sm text-center mb-2`}
          >
            Thomas S.
          </h4>
          <span
            className={`${barlow.className} text-xs font-light text-grayishBlue`}
          >
            Business Owner
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <Image
          src="/desktop/image-gallery-milkbottles.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className=" hidden md:block object-cover object-center w-full"
        />
        <Image
          src="/mobile/image-gallery-milkbottles.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className="md:hidden block object-cover object-center w-full"
        />
        <Image
          src="/desktop/image-gallery-orange.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className=" hidden md:block object-cover object-center w-full"
        />
        <Image
          src="/mobile/image-gallery-orange.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className="md:hidden block object-cover object-center w-full"
        />
        <Image
          src="/desktop/image-gallery-cone.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className=" hidden md:block object-cover object-center w-full"
        />
        <Image
          src="/mobile/image-gallery-sugar-cubes.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className="md:hidden block object-cover object-center w-full"
        />
        <Image
          src="/desktop/image-gallery-sugarcubes.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className=" hidden md:block object-cover object-center w-full"
        />
        <Image
          src="/mobile/image-gallery-cone.jpg"
          alt="img-gallery"
          width={120}
          height={120}
          className="md:hidden block object-cover object-center w-full"
        />
      </div>
    </section>
  );
};

export default Testimonials;
