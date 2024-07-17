import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

export default function CounterUp() {
  const [counterOn, setCounterOn] = useState(false)

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-300 mb-10 text-slate-600 p-[50px]">
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className='flex flex-col md:flex-row justify-between'>
          <h1 className='text-2xl text-center font-semibold md:w-1/2'>
            More than <br />
            {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}+ Customers
          </h1>
          <h1 className='text-2xl text-center font-semibold md:w-1/2'>
            You have spent {seconds} seconds on the world's best real estate website.
          </h1>
        </div>
      </ScrollTrigger>
    </div>
  )
}
