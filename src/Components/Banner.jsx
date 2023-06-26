import { useEffect, useState } from "react";
import BannerHome from "../assets/BannerHome.jpg";

function Banner() {
  const [quoteBanner, setquoteBanner] = useState(
    "Stay motivated and never give up!"
  );

  const quotes = [
    <span key="quote1" className="text-red-700">Sweat it out!</span>,
    <span key="quote2">
      No pain, <span className="text-red-700">no gain</span>.
    </span>,
    <span key="quote3">
      Be <span className="text-red-700">stronger</span> than your excuses.
    </span>,
    <span key="quote4">
      Push <span className="text-red-700">yourself</span>!
    </span>,
    <span key="quote5">Make <span className="text-red-700">it happen.</span></span>,
    <span key="quote6">Keep <span className="text-red-700">going</span>.</span>,
    <span key="quote7">
      Believe in <span className="text-red-700">yourself</span>.
    </span>,
    <span key="quote9"><span className="text-red-700">Fitness</span> is a lifestyle.</span>,
    <span key="quote10">
      Train like a <span className="text-red-700">beast</span>.
    </span>,
    <span key="quote11">
      Dream big, <span className="text-red-700">work hard</span>.
    </span>,
    <span key="quote12">The body <span className="text-red-700">achieves </span>what the mind believes.</span>,
    <span key="quote13">One more<span className="text-red-700"> rep!</span></span>,
    <span key="quote14">
      Success starts with <span className="text-red-700">self-discipline</span>.
    </span>,
    <span key="quote15">Wake up.<span className="text-red-700"> Work out</span>. Kick ass. <span className="text-red-700">Repeat</span>.</span>,
  ];

  function DisplayQuotes() {
    const index = Math.floor(Math.random() * quotes.length);
    setquoteBanner(quotes[index]);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      DisplayQuotes();
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div>
      <section className="h-full relative">
        <img src={BannerHome} alt="" />
        <div className="absolute top-14 left-0 right-0 bottom-0 flex flex-col items-center bg-transparent">
          <h1 className="mt-9 text-6xl">{quoteBanner}</h1>
        </div>
      </section>
    </div>
  );
}

export default Banner;
