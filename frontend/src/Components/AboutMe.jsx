import React from 'react';
import about_me from '../assets/about_me.svg';

function AboutMe() {
    return (
        <div  id="about" className="container mx-auto px-4 py-8"  >
            <div className="lg:flex md:grid ">
                <img
                    className="md:w-[500px] md:h-[500px] md:pr-8 md:mt-6 w-[343px] h-[343px]  flex justify-center items-center m-auto"
                    src={about_me}
                    alt="About Me Illustration"
                />

                <div className="grid justify-center items-center gap-10 m-auto  text-wrap md:text-wrap">

                    <div className=''>
                        <h2 className="text-5xl font-light text-center md:text-left md:mb-4 md:pl-6 md:pr-6 mt-5  ">
                            About <span className="text-black font-bold ">Me</span>
                        </h2>
                    </div>
                    <p className="text-gray-700 text-justify  md:pl-6 md:pr-6">
                        I'm a passionate, self-proclaimed designer who specializes in full-stack development
                        (React.js & Node.js). I am very enthusiastic about bringing the technical and visual
                        aspects of digital products to life. User experience, pixel-perfect design, and writing
                        clear, readable, highly performant code matter to me.
                    </p>
                    <p className="text-gray-700 text-justify md:pl-6 md:pr-6  ">
                        I began my journey as a web developer in 2015, and since then, I've continued to grow
                        and evolve as a developer, taking on new challenges and learning the latest technologies
                        along the way. Now, in my early thirties, seven years after starting my web development
                        journey, I'm building cutting-edge web applications using modern technologies such as
                        Next.js, TypeScript, Nest.js, Tailwind CSS, Supabase, and much more.
                    </p>
                    <p className="text-gray-700 text-justify md:pl-6 md:pr-6 ">
                        When I'm not in full-on developer mode, you can find me hovering around on Twitter or
                        Indie Hacker, witnessing the journey of early startups or enjoying some free time. You
                        can follow me on Twitter, where I share tech-related bites and build in public, or you
                        can check out my work on GitHub.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
