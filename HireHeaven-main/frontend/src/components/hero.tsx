import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Search, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-5 py-10 md:py-14 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* left section */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
              <TrendingUp size={16} className="text-blue-600" />

              <span className="text-sm font-medium">
                #1 Job Platform in India
              </span>
            </div>

            {/* main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Find Your Dream Job at{" "}
              <span className="inline-block">
                Hire
                <span className="text-red-500">Heaven</span>
              </span>
            </h1>

            {/* description */}
            <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-xl">
              Connect with top employers and discover opportunities that match
              your skills. Whether you're a job seeker or recruiter, we've got
              you covered with powerful tools and seamless experience.
            </p>

            {/* stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-2">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-blue-600">10k+</p>
                <p className="text-sm opacity-70">Active Jobs</p>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-blue-600">5k+</p>
                <p className="text-sm opacity-70">Companies</p>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-blue-600">50k+</p>
                <p className="text-sm opacity-70">Job Seekers</p>
              </div>
            </div>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href={"/jobs"}>
                <Button
                  size={"lg"}
                  className="text-sm px-6 h-11 gap-2 group transition-all"
                >
                  <Search size={18} />
                  Browse Jobs
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>

              <Link href={"/about"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="text-sm px-6 h-11 gap-2"
                >
                  <Briefcase size={18} />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* trust indicator */}
            <div className="flex items-center gap-2 text-sm opacity-60 pt-4 flex-wrap justify-center lg:justify-start">
              <span>✔ Free to use</span>
              <span>•</span>
              <span>✔ Verified employers</span>
              <span>•</span>
              <span>✔ Secure platform</span>
            </div>
          </div>

          {/* image section */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-400/20 blur-2xl rounded-3xl group-hover:bg-blue-400/30 transition-all"></div>

              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/hero.jpg"
                  alt=""
                  className="w-full h-95 lg:h-105 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
