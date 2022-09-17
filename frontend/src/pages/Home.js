import React from "react";
import Background from "../assets/Background.png";

const Home = () => {
  return (
    <div>
      <section class="relative bg-white">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src={Background}
          alt="Couple on a bed with a dog"
        />

        <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl text-[#2B2B46] font-extrabold sm:text-5xl">
              Welcome to
              <strong class="font-extrabold text-[#1CB3B5] sm:block">
                Starting Strength.
              </strong>
            </h1>

            <p class="max-w-lg mt-4  text-[#2B2B46] sm:leading-relaxed sm:text-xl">
              A 6-week workout program and training guide designed for true beginners.
            </p>

            <div class="flex flex-wrap mt-8 text-center gap-4">
              <a
                class="block w-full px-12 py-3 text-md font-medium text-white rounded shadow bg-[#1CB3B5] sm:w-auto active:bg-[#2B2B46] hover:bg-[#2B2B46] focus:outline-none focus:ring"
                href="/login"
              >
                Let's lift!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
