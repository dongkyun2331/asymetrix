import "./BodyApp.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BodyApp() {
  const [number, setNumber] = useState(0);
  const [rewards, setRewards] = useState([0, 0, 0]);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const targetNumber = 4.450077;
    const duration = 2000;
    const increment = ((targetNumber - number) / duration) * 10;

    const timer = setInterval(() => {
      setNumber((prevNumber) => {
        const newNumber = prevNumber + increment;
        if (newNumber >= targetNumber) {
          clearInterval(timer);
          return targetNumber;
        }
        return newNumber;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const targetRewards = [2.22, 1.33, 0.89];
    const duration = 2000;
    const increment = targetRewards.map(
      (target, index) => ((target - rewards[index]) / duration) * 10
    );
    const timers = [];

    for (let i = 0; i < targetRewards.length; i++) {
      const timer = setInterval(() => {
        setRewards((prevRewards) => {
          const newRewards = [...prevRewards];
          newRewards[i] += increment[i];

          if (newRewards[i] >= targetRewards[i]) {
            clearInterval(timer);
            newRewards[i] = targetRewards[i];
          }

          return newRewards;
        });
      }, 10);

      timers.push(timer);
    }

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, []);

  useEffect(() => {
    const targetTime = moment("2023-06-02 15:41");

    const interval = setInterval(() => {
      const currentTime = moment();
      const diff = targetTime.diff(currentTime);
      const duration = moment.duration(diff);
      const remaining = Math.max(duration.asMilliseconds(), 0);

      setRemainingTime(remaining);

      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const duration = moment.duration(time);
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();

    let formattedTime = "";

    if (days > 0) {
      formattedTime += `${days}d `;
    }
    if (hours > 0) {
      formattedTime += `${hours}h `;
    }

    if (minutes > 0) {
      formattedTime += `${minutes}min `;
    }

    return formattedTime;
  };

  const settings = {
    dots: true,
    infinite: false,
    prevArrow: <></>,
    nextArrow: <></>,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bodyapp">
      <section className="section">
        <div className="mint">
          <h3 className="h3">
            <span className="font">DRAW #5</span>
            <a href="" className="previous_draws">
              <svg className="previous_draws-svg">
                <path
                  d="M3.5 4H6V5H3.5V4ZM3.5 6H6V7H3.5V6ZM3.5 8H6V9H3.5V8ZM10 4H12.5V5H10V4ZM10 6H12.5V7H10V6ZM10 8H12.5V9H10V8Z"
                  fill="#222"
                ></path>
                <path
                  d="M14 2H2C1.73488 2.0003 1.4807 2.10576 1.29323 2.29323C1.10576 2.4807 1.0003 2.73488 1 3V13C1.0003 13.2651 1.10576 13.5193 1.29323 13.7068C1.4807 13.8942 1.73488 13.9997 2 14H14C14.2651 13.9997 14.5193 13.8942 14.7068 13.7068C14.8942 13.5193 14.9997 13.2651 15 13V3C14.9997 2.73488 14.8942 2.4807 14.7068 2.29323C14.5193 2.10576 14.2651 2.0003 14 2ZM2 3H7.5V13H2V3ZM8.5 13V3H14V13H8.5Z"
                  fill="#222"
                ></path>
              </svg>
              PREVIOUS DRAWS
            </a>
          </h3>
          <div className="mint-content">
            <div className="total">
              <h4>TOTAL</h4>
              <span>{number.toFixed(6)}</span>
              <p>stETH</p>
            </div>
            <div className="rewards">
              <h4>REWARDS</h4>
              <div className="rewards-content">
                <div className="rewards-content-div">
                  <span>{rewards[0].toFixed(2)}</span>
                  <p>stETH</p>
                </div>
                <div className="rewards-content-div">
                  <span>{rewards[1].toFixed(2)}</span>
                  <p>stETH</p>
                </div>
                <div className="rewards-content-div">
                  <span>{rewards[2].toFixed(2)}</span>
                  <p>stETH</p>
                </div>
              </div>
            </div>
            <div className="ends_in">
              <section>
                <h4>ENDS IN</h4>
                <span>
                  {remainingTime !== null ? (
                    <p> {formatTime(remainingTime)}</p>
                  ) : (
                    <p></p>
                  )}
                </span>
              </section>
            </div>
            <div className="initial_distribution">
              <h4>INITIAL DISTRIBUTION</h4>
              <p>0.000000 ASX</p>
              <span className="font">31.53% APR</span>
              <div className="claim_tokens">
                <button>
                  <div>
                    <svg className="previous_draws-svg">
                      <path
                        d="M3.5 4H6V5H3.5V4ZM3.5 6H6V7H3.5V6ZM3.5 8H6V9H3.5V8ZM10 4H12.5V5H10V4ZM10 6H12.5V7H10V6ZM10 8H12.5V9H10V8Z"
                        fill="#222"
                      ></path>
                      <path
                        d="M14 2H2C1.73488 2.0003 1.4807 2.10576 1.29323 2.29323C1.10576 2.4807 1.0003 2.73488 1 3V13C1.0003 13.2651 1.10576 13.5193 1.29323 13.7068C1.4807 13.8942 1.73488 13.9997 2 14H14C14.2651 13.9997 14.5193 13.8942 14.7068 13.7068C14.8942 13.5193 14.9997 13.2651 15 13V3C14.9997 2.73488 14.8942 2.4807 14.7068 2.29323C14.5193 2.10576 14.2651 2.0003 14 2ZM2 3H7.5V13H2V3ZM8.5 13V3H14V13H8.5Z"
                        fill="#222"
                      ></path>
                    </svg>
                    CLAIM TOKENS
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="mint-content768">
            <Slider {...settings} dotsClass="test-css">
              <div>
                <div className="total">
                  <h4>TOTAL</h4>
                  <span>{number.toFixed(6)}</span>
                  <p>stETH</p>
                </div>
              </div>
              <div>
                <div className="rewards">
                  <h4>REWARDS</h4>
                  <div className="rewards-content">
                    <div className="rewards-content-div">
                      <span>{rewards[0].toFixed(2)}</span>
                      <p>stETH</p>
                    </div>
                    <div className="rewards-content-div">
                      <span>{rewards[1].toFixed(2)}</span>
                      <p>stETH</p>
                    </div>
                    <div className="rewards-content-div">
                      <span>{rewards[2].toFixed(2)}</span>
                      <p>stETH</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ends_in">
                  <section>
                    <h4>ENDS IN</h4>
                    <span>
                      {remainingTime !== null ? (
                        <p> {formatTime(remainingTime)}</p>
                      ) : (
                        <p></p>
                      )}
                    </span>
                  </section>
                </div>
              </div>
              <div>
                <div className="initial_distribution">
                  <h4>INITIAL DISTRIBUTION</h4>
                  <p>0.000000 ASX</p>
                  <span className="font">31.53% APR</span>
                  <div className="claim_tokens">
                    <button>
                      <div>
                        <svg className="previous_draws-svg">
                          <path
                            d="M3.5 4H6V5H3.5V4ZM3.5 6H6V7H3.5V6ZM3.5 8H6V9H3.5V8ZM10 4H12.5V5H10V4ZM10 6H12.5V7H10V6ZM10 8H12.5V9H10V8Z"
                            fill="#222"
                          ></path>
                          <path
                            d="M14 2H2C1.73488 2.0003 1.4807 2.10576 1.29323 2.29323C1.10576 2.4807 1.0003 2.73488 1 3V13C1.0003 13.2651 1.10576 13.5193 1.29323 13.7068C1.4807 13.8942 1.73488 13.9997 2 14H14C14.2651 13.9997 14.5193 13.8942 14.7068 13.7068C14.8942 13.5193 14.9997 13.2651 15 13V3C14.9997 2.73488 14.8942 2.4807 14.7068 2.29323C14.5193 2.10576 14.2651 2.0003 14 2ZM2 3H7.5V13H2V3ZM8.5 13V3H14V13H8.5Z"
                            fill="#222"
                          ></path>
                        </svg>
                        CLAIM TOKENS
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="lavender"></div>
      </section>
    </div>
  );
}
