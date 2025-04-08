import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { topRightGradient, gridRadial } from "@/assets";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-gradient-dark-blue py-20">
      <img
        src={topRightGradient}
        className="absolute blur-3xl top-0 right-0 w-3xl"
        alt=""
      />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
        <img
          src={gridRadial}
          className="absolute -top-80 -left-56 w-6xl opacity-25"
          alt=""
        />

        <img
          src={gridRadial}
          className="absolute -bottom-96 -right-72 w-7xl opacity-25 z-1"
          alt=""
        />
        <div className="relative z-5">
          <Badge
            variant="secondary"
            className="mb-6 bg-sky-700/60 p-3 text-sm rounded-full border-white border-2 text-white hover:bg-sky-700/80"
          >
            Welcome to KeySystem
          </Badge>

          <h1 className="text-4xl mb-4 md:text-6xl lg:text-7xl font-bold text-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.3)] ">
            IT Consulting for <br className="md:hidden" />
            <span className="block">Forward-thinking</span>
            <span className="block">Businesses</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg text-gray-200 md:text-xl">
            Driving Digital Transformation, One Solution at a Time
          </p>

          <div className="flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-gradient-blue p-6 border-secondary shadow-sm shadow-primary text-white hover:bg-blue-600/30"
            >
              <Link to="/sign" />
              Get Started
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full border-gradient-blue p-6 shadow-sm shadow-primary text-white hover:border-gradient-blue/80"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
