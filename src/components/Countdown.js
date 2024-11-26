import { useState, useEffect } from "react";
import Image from "next/image";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Dec 4, 2024 23:59:59").getTime();

    // Update the countdown every 1 second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the countdown when the target time is reached
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        // Update the state with the calculated time
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Countdown Section */}
      <section>
        <div className="countdown-container">
          <h2>Countdown to Audition</h2>
          <div className="countdown-timer">
            <div className="time-section">
              <span className="time">{timeLeft.days}</span>
              <hr width="15px" />
              <p>Days</p>
            </div>
            <span className="colon">:</span>
            <div className="time-section">
              <span className="time">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </span>
              <hr width="15px" />
              <p>Hours</p>
            </div>
            <span className="colon">:</span>
            <div className="time-section">
              <span className="time">
                {timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </span>
              <hr width="15px" />
              <p>Minutes</p>
            </div>
            <span className="colon">:</span>
            <div className="time-section">
              <span className="time">
                {timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </span>
              <hr width="15px" />
              <p>Seconds</p>
            </div>
          </div>
          <img
            id="logoBottom"
            src="/shape-top-grey-80.png"
            alt="Logo Bottom"
            className="logoBottom"
            width={100}
            height={100}
          />
        </div>
      </section>
    </>
  );
};

export default Countdown;
