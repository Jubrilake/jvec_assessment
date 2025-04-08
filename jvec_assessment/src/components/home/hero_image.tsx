import { curveStroke, heroImage } from "@/assets";

const HeroImage = () => {
  return (
    <div className=" relative md:block bg-gradient-darker-blue hidden">
      <img src={curveStroke} alt="" />
      <img
        src={heroImage}
        alt=""
        className="absolute w-[60%] -top-12 left-[20%] "
      />
    </div>
  );
};

export default HeroImage;
