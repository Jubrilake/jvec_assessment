import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { visionIcon, magnifyGlass, topRightGradient } from "@/assets";

export default function WhatWeRepresent() {
  return (
    <div className="bg-gradient-dark text-white py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What we Represent</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our relentless pursuit of excellence is the driving force behind our
            success
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-center text-gray-300">
            Excellence isn't a goal, it's our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward. Watch the video to
            see how we are innovating to keep businesses on top of their games.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="relative rounded-lg p-[1px] overflow-hidden"
            style={{
              background: `linear-gradient(to right top, rgba(201, 201, 201, 0) 20%,rgba(1, 180, 222, 1) 40%,rgba(1, 180, 222, 1) 60%, rgba(214, 214, 214, 0) 100%)`,
            }}
          >
            <Card className="bg-gradient-dark border-none text-white relative overflow-hidden rounded-lg h-full">
              <img
                src={topRightGradient}
                className="absolute z-2 top-0 right-0 w-lg"
                alt=""
              />
              <CardContent className="p-8 z-3 flex flex-col space-y-2">
                <img
                  src={visionIcon}
                  alt="Target with arrow"
                  className="object-contain mx-auto w-[450px]"
                />

                <CardTitle className="text-3xl font-bold mb-4">
                  Our Vision
                </CardTitle>
                <p className="text-gray-300 pr-8">
                  To be the trusted partner for businesses seeking to leverage
                  technology to improve decision-making, unlock new
                  opportunities, and achieve transformative growth
                </p>
              </CardContent>
            </Card>
          </div>
          <div
            className="relative rounded-lg p-[1px] overflow-hidden"
            style={{
              background: `linear-gradient(to right top, rgba(201, 201, 201, 0) 20%,rgba(1, 180, 222, 1) 40%,rgba(1, 180, 222, 1) 60%, rgba(214, 214, 214, 0) 100%)`,
            }}
          >
            <Card className="bg-gradient-dark border-none text-white relative overflow-hidden rounded-lg h-full">
              <img
                src={topRightGradient}
                className="absolute z-2 top-0 right-0 w-lg"
                alt=""
              />
              <CardContent className="p-3 z-3 flex flex-col space-y-2">
                <img
                  src={magnifyGlass}
                  alt="Target with arrow"
                  className="object-contain mx-auto w-[360px]"
                />

                <CardTitle className="text-3xl font-bold mb-4">
                  Our Mission
                </CardTitle>
                <p className="text-gray-300 pr-8">
                  We bridge the gap between technology and business, delivering
                  customized ICT solutions that drive efficiency, growth, and
                  competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
