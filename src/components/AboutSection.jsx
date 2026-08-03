import { Briefcase, Code, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack MERN Developer
            </h3>

            <p className="text-muted-foreground">
              I specialize in building modern, scalable web applications using
              the MERN stack. My focus is on developing clean, maintainable
              code and creating reliable backend systems with REST APIs,
              authentication, and database management.
            </p>

            <p className="text-muted-foreground">
              Along with full-stack development, I'm expanding my expertise in
              AI-powered applications by integrating Large Language Models
              (LLMs) into web projects. I enjoy learning new technologies and
              building practical solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Uzair_Imam_CV .pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and scalable web applications using
                    React, Next.js, Node.js, Express, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Backend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Developing secure REST APIs, authentication systems, and
                    efficient database architectures for modern web
                    applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">AI Integration</h4>
                  <p className="text-muted-foreground">
                    Integrating LLMs and AI APIs into web applications to build
                    intelligent features and enhance user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};