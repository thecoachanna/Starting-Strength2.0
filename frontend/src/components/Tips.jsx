import React from 'react'
import Grips from '../assets/Grips.jpeg'
import Cable from '../assets/Cable.jpeg'

const Tips = () => {
  return (

    <div>
      <section className="text-[#2B2B46]">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-5xl text-2xl font-medium text-center title-font text-[#2B2B46] mb-4">
              Training Tips
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[#2B2B46]">
              A starter guide for strength training and the gym.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md text-[#2B2B46] py-4 px-6">
                  Gym Etiquette
                </summary>

                <span className="px-4 py-2">
                  <ul>
                    <li>
                      - Wipe off your equipment after use (benches, handles, etc)
                    </li>
                    <br></br>
                    <li>
                      - Put your equipment back in the correct spot (dumbbells in numerical order, weight plates with same lbs together)
                    </li>
                    <br></br>
                    <li>
                      - Keep your workout space tidy (don't leave your bag or equipment in a place where it could be tripped over)
                    </li>
                    <br></br>
                    <li>
                      - Wear fresh clothing and follow basic hygiene
                    </li>
                  </ul>
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md text-[#2B2B46] py-4 px-6">
                  On Gymtimidation
                </summary>

                <span className="px-4 py-2">
                <ul>
                    <li>
                      - You have just as much right to equipment and machines as anyone else. No matter how 'fit' or experienced they are.
                    </li>
                    <br></br>
                    <li>
                      - You deserve to take up space.
                    </li>
                    <br></br>
                    <li>
                      - No one is really looking at you or worried about what you're doing... unless you're doing acrobatics on the cable machine. Don't be that person.
                    </li>
                    <br></br>
                    <li>
                      - The gym staff is there to help you and most love doing it. It is their literal job to answer your questions and show you how to use equipment if you're unsure. Take advantage of that!
                    </li>
                  </ul>
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md text-[#2B2B46] py-4 px-6">
                  Unspoken Rules
                </summary>

                <span className="px-4 py-2">
                <ul>
                    <li>
                      - First come, first served. But be mindful if the gym is busy and there is a wait for the piece of equipment you're using. You can offer to let someone work in with you or just decrease the amount of time you were orignally planning on using it for.
                    </li>
                    <br></br>
                    <li>
                      - Be aware of personal space and give extra to people who are in the middle of an exercise to keep everyone safe.
                    </li>
                    <br></br>
                    <li>
                      - As much as possible, try to use the machine or piece of equipment for what it was intended for. Most important when it's busy. For example: don't curl in the squat rack.
                    </li>
                    <br></br>
                    <li>
                      - If you're unsure a piece of equipment is being used by someone. Just ask.
                    </li>
                    <br></br>
                    <li>
                      - There are technically two "stations" inside of the cable machine. Feel free to use one if someone is on the other side.
                      <img src={Cable} alt="cable machine" />
                    </li>
                    <br></br>
                    <li>
                      - In general, just operate like a respectful and curteous human.
                    </li>
                  </ul>
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md text-[#2B2B46] py-4 px-6">
                  The 4 Basic Movement Patterns
                </summary>

                <span>
                  Hip Hinge: movement initiates from the hips {'>'} knees (ex: deadlifts)
                  <br></br>
                  <br></br>
                  Squat: movement initiates from the knees {'>'} hips (ex: barbell squat)
                  <br></br>
                  <br></br>
                  Push: 2 types -{'>'} vertical (ex: overhead press) or horizontal (ex: bench press)
                  <br></br>
                  <br></br>
                  Pull: 2 types -{'>'} vertical (ex: pull-up) or horizontal (ex: bent-over row)
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md text-[#2B2B46] py-4 px-6">
                  What is Tempo?
                </summary>

                <span>
                  Tempo is the rhythm at which you perform the phases of an exercise. Each exercise has 4 phases. Imagine a bicep curl: there is a starting phase where your arm is hanging at your side, a upward phase where you curl the weight to your body, a phase at the top before you begin lowering it, then the downward phase back to your side.
                  <br></br>
                  <br></br>
                  For starting out in strength training, completing reps with a Tempo of 2222 - meaning 2 secs on each phase of the movement - will help you have better control of the exercise and more time under tension. Ie: strength gains.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md text-[#2B2B46] py-4 px-6">
                  The 3 Different Types of Grips
                </summary>

                <span>
                  Pronated: palms down
                  <br></br>
                  <br></br>
                  Supinated: palms up
                  <br></br>
                  <br></br>
                  Neutral: palms facing each other - thumbs up
                  <br></br>
                  <br></br>
                  <img src={Grips} alt="grip positions" />
                </span>
                
              </details>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tips