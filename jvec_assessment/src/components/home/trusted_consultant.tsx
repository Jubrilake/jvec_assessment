import { bgPattern } from "@/assets";
const TrustedConsulted = () => {
  return (
    <section className="w-full mx-auto pt-16 pb-3 bg-gradient-dark  text-white relative overflow-hidden">
      <img
        src={bgPattern}
        className="absolute opacity-50 top-0 left-0 w-full h-full"
        alt="pattern"
      />
      <div className="bg-gradient-blue-radial z-1 absolute blur-3xl bottom-0 opacity-60 left-0 right-0 w-full h-[70%]"></div>

      <div className="max-w-5xl relative z-3 mx-auto text-center py-8">
        <h1 className="text-5xl font-bold mb-2">
          Why we are your Trusted Consultant
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Empowering Businesses with Cutting-edge Technology
        </p>

        <p className="text-2xl  bg-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.3)] bg-clip-text text-transparent mb-12 leading-relaxed px-10">
          Excellence isn't a goal, it's our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </p>

        <p className="text-gray-300 mb-6 text-xl flex items-center justify-center gap-2">
          Watch the video to see how we are innovating to keep businesses on top
          of their games.
        </p>

        <div className="rounded-xl overflow-hidden ">
          <img
            src="/consultant.png"
            alt="Business team collaborating in a modern office"
            className=" h-auto w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedConsulted;
