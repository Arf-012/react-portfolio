import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left side: Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="w-48 h-68 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-primary mx-auto">
            <img
              src="/IMG-header.jpg" // replace with your image path
              alt="Farhan Aditya"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side: Text introduction */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Farhan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Aditya
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            I am a front-end developer from Indonesia who takes pride in
            crafting responsive, user-focused websites. With a foundation in
            clean design and modern UI principles, I strive to deliver elegant
            and intuitive digital experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              See My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
