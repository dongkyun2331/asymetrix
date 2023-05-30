import "./BodyApp.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BodyApp() {
  const [number, setNumber] = useState(0);
  const [rewards, setRewards] = useState([0, 0, 0]);
  const [locked, setLocked] = useState(0);
  const [statistic, setStatistic] = useState([0, 0, 0]);
  const [remainingTime, setRemainingTime] = useState(null);
  const [inputValue, setInputValue] = useState("");

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
    const targetLocked = 7093.358985;
    const duration = 2000;
    const increment = ((targetLocked - locked) / duration) * 10;

    const timer = setInterval(() => {
      setLocked((prevLocked) => {
        const newLocked = prevLocked + increment;
        if (newLocked >= targetLocked) {
          clearInterval(timer);
          return targetLocked;
        }
        return newLocked;
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
    const targetStatistic = [219, 32.607927, 24];
    const duration = 2000;
    const increment = targetStatistic.map(
      (target, index) => ((target - statistic[index]) / duration) * 10
    );
    const timers = [];

    for (let i = 0; i < targetStatistic.length; i++) {
      const timer = setInterval(() => {
        setStatistic((prevStatistic) => {
          const newStatistic = [...prevStatistic];
          newStatistic[i] += increment[i];

          if (newStatistic[i] >= targetStatistic[i]) {
            clearInterval(timer);
            newStatistic[i] = targetStatistic[i];
          }

          return newStatistic;
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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const labelStyle = {
    position: "absolute",
    top: "22px",
    left: inputValue.length > 0 ? `${40 + inputValue.length * 12}px` : "40px",
    fontWeight: "400",
    fontSize: "16px",
  };

  const handleConvertClick = () => {
    const convertModal = document.querySelector(".convert-modal");
    const convertDimm = document.querySelector(".convert-dimm");

    convertModal.classList.toggle("modal-on");
    convertDimm.classList.toggle("modal-on");
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
                  <a href="" className="previous_draws768">
                    <svg className="previous_draws768-svg">
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
                  <a href="" className="previous_draws768">
                    <svg className="previous_draws768-svg">
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
                  <a href="" className="previous_draws768">
                    <svg className="previous_draws768-svg">
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
        <div className="lavender">
          <h3>MY BALANCE</h3>
          <div className="in_protocol">
            <h4>IN PROTOCOL</h4>
            <span>0.000000</span>
            <p>stETH</p>
          </div>
          <hr className="hr" />
          <div className="draw_winning_odds">
            <h4>DRAW WINNING ODDS</h4>
            <p>1</p>
          </div>
          <div className="balance">
            <input
              min="0"
              max="0"
              type="number"
              placeholder="0"
              value={inputValue}
              onChange={handleInputChange}
            />
            <span style={labelStyle}>stETH</span>
            <article className="max">
              BALANCE stETH
              <button>
                <span className="max_number">0.000</span>
                <span className="max_text">MAX</span>
              </button>
            </article>
            <article className="convert">
              BALANCE ETH
              <button onClick={handleConvertClick}>
                <span className="max_number">0.000</span>
                <span className="max_text">CONVERT</span>
              </button>
            </article>
          </div>
          <div className="balance-btns">
            <button className="deposit">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M12.3 6.7L8.5 2.9V15H7.5V2.9L3.7 6.7L3 6L8 1L13 6L12.3 6.7Z"
                  fill="#fff"
                ></path>
              </svg>
              DEPOSIT
            </button>
            <button className="withdraw">
              <svg width={16} height={16}>
                <path
                  d="M13.2929 9.79295L11 12.0859V6C11 4.93913 10.5786 3.92172 9.82843 3.17157C9.07828 2.42143 8.06087 2 7 2C5.93913 2 4.92172 2.42143 4.17157 3.17157C3.42143 3.92172 3 4.93913 3 6V14H4V6C4 5.20435 4.31607 4.44129 4.87868 3.87868C5.44129 3.31607 6.20435 3 7 3C7.79565 3 8.55871 3.31607 9.12132 3.87868C9.68393 4.44129 10 5.20435 10 6V12.0859L7.70705 9.79295L7 10.5L10.5 14L14 10.5L13.2929 9.79295Z"
                  fill="#222"
                ></path>
              </svg>
              WITHDRAW
            </button>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="statistic">
          <h3>STATISTIC</h3>
          <div className="white-divs">
            <div className="white-div">
              <div className="white-title">
                <h4>TOTAL LOCKED AT PROTOCOL</h4>
                <div className="white-text">
                  <span>{locked.toFixed(6)}</span>
                  "stETH"
                </div>
              </div>
              <div className="chart"></div>
            </div>
            <div className="white-div">
              <h4>TOP REWARDS WITH LOW ODDS</h4>
              <div className="three-div">
                <div>
                  <div className="i">I</div>
                  <p className="address">0x9C6f...ace1</p>
                  <p className="steth">
                    <a href="">0.791163 stETH</a>
                  </p>
                  <p className="with">WITH 1 IN 404 ODDS</p>
                </div>
                <div>
                  <div className="i">II</div>
                  <p className="address">0xb26B...cC33</p>
                  <p className="steth">
                    <a href="">0.326767 stETH</a>
                  </p>
                  <p className="with">WITH 1 IN 165 ODDS</p>
                </div>
                <div>
                  <div className="i">III</div>
                  <p className="address">0x232E...01c2</p>
                  <p className="steth">
                    <a href="">1.318605 stETH</a>
                  </p>
                  <p className="with">WITH 1 IN 97.93 ODDS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="icons">
            <div className="mb56">
              <svg width={36} height={36} viewBox="0 0 32 32">
                <path
                  d="M31.75 31.75H29.5V26.125C29.4983 24.6337 28.9051 23.2039 27.8506 22.1494C26.7961 21.0949 25.3663 20.5017 23.875 20.5V18.25C25.9629 18.2523 27.9646 19.0828 29.4409 20.5591C30.9172 22.0354 31.7477 24.0371 31.75 26.125V31.75ZM22.75 31.75H20.5V26.125C20.4982 24.6337 19.905 23.204 18.8505 22.1495C17.796 21.095 16.3663 20.5018 14.875 20.5H8.125C6.6337 20.5018 5.20398 21.095 4.14946 22.1495C3.09495 23.204 2.50176 24.6337 2.5 26.125V31.75H0.25V26.125C0.252441 24.0372 1.08291 22.0355 2.55923 20.5592C4.03555 19.0829 6.03717 18.2524 8.125 18.25H14.875C16.9628 18.2524 18.9645 19.0829 20.4408 20.5592C21.9171 22.0355 22.7476 24.0372 22.75 26.125V31.75ZM20.5 0.25V2.5C21.9918 2.5 23.4226 3.09263 24.4775 4.14752C25.5324 5.20242 26.125 6.63316 26.125 8.125C26.125 9.61684 25.5324 11.0476 24.4775 12.1025C23.4226 13.1574 21.9918 13.75 20.5 13.75V16C22.5886 16 24.5916 15.1703 26.0685 13.6935C27.5453 12.2166 28.375 10.2136 28.375 8.125C28.375 6.03642 27.5453 4.03338 26.0685 2.55653C24.5916 1.07969 22.5886 0.25 20.5 0.25ZM11.5 2.5C12.6125 2.5 13.7001 2.8299 14.6251 3.44798C15.5501 4.06607 16.2711 4.94457 16.6968 5.97241C17.1226 7.00024 17.234 8.13124 17.0169 9.22238C16.7999 10.3135 16.2641 11.3158 15.4775 12.1025C14.6908 12.8891 13.6885 13.4249 12.5974 13.6419C11.5062 13.859 10.3752 13.7476 9.34741 13.3218C8.31957 12.8961 7.44107 12.1751 6.82298 11.2501C6.2049 10.3251 5.875 9.23752 5.875 8.125C5.875 6.63316 6.46763 5.20242 7.52252 4.14752C8.57742 3.09263 10.0082 2.5 11.5 2.5ZM11.5 0.25C9.94247 0.25 8.41992 0.711861 7.12488 1.57718C5.82985 2.44249 4.82049 3.6724 4.22445 5.11137C3.62841 6.55034 3.47246 8.13374 3.77632 9.66134C4.08017 11.1889 4.8302 12.5921 5.93153 13.6935C7.03287 14.7948 8.43606 15.5448 9.96366 15.8487C11.4913 16.1525 13.0747 15.9966 14.5136 15.4006C15.9526 14.8045 17.1825 13.7952 18.0478 12.5001C18.9131 11.2051 19.375 9.68253 19.375 8.125C19.375 6.03642 18.5453 4.03338 17.0685 2.55653C15.5916 1.07969 13.5886 0.25 11.5 0.25Z"
                  fill="#222"
                ></path>
              </svg>
              <p className="text-sm">UNIQUE USERS</p>
              <div className="text-xl">
                <span>{statistic[0].toFixed(0)}</span>
              </div>
            </div>
            <div className="mb56">
              <svg width={36} height={36} viewBox="0 0 36 36">
                <path
                  d="M2.25 24.75H33.75V27H2.25V24.75ZM2.25 29.25H33.75V31.5H2.25V29.25ZM27 11.25C26.555 11.25 26.12 11.382 25.75 11.6292C25.38 11.8764 25.0916 12.2278 24.9213 12.639C24.751 13.0501 24.7064 13.5025 24.7932 13.939C24.88 14.3754 25.0943 14.7763 25.409 15.091C25.7237 15.4057 26.1246 15.62 26.561 15.7068C26.9975 15.7936 27.4499 15.749 27.861 15.5787C28.2722 15.4084 28.6236 15.12 28.8708 14.75C29.118 14.38 29.25 13.945 29.25 13.5C29.25 12.9033 29.0129 12.331 28.591 11.909C28.169 11.4871 27.5967 11.25 27 11.25ZM18 18C17.11 18 16.24 17.7361 15.4999 17.2416C14.7599 16.7471 14.1831 16.0443 13.8425 15.2221C13.5019 14.3998 13.4128 13.495 13.5865 12.6221C13.7601 11.7492 14.1887 10.9474 14.818 10.318C15.4474 9.68869 16.2492 9.2601 17.1221 9.08647C17.995 8.91283 18.8998 9.00195 19.7221 9.34254C20.5443 9.68314 21.2471 10.2599 21.7416 10.9999C22.2361 11.74 22.5 12.61 22.5 13.5C22.4987 14.6931 22.0241 15.8369 21.1805 16.6805C20.3369 17.5241 19.1931 17.9987 18 18ZM18 11.25C17.555 11.25 17.12 11.382 16.75 11.6292C16.38 11.8764 16.0916 12.2278 15.9213 12.639C15.751 13.0501 15.7064 13.5025 15.7932 13.939C15.88 14.3754 16.0943 14.7763 16.409 15.091C16.7237 15.4057 17.1246 15.62 17.561 15.7068C17.9975 15.7936 18.4499 15.749 18.861 15.5787C19.2722 15.4084 19.6236 15.12 19.8708 14.75C20.118 14.38 20.25 13.945 20.25 13.5C20.2494 12.9034 20.0122 12.3315 19.5903 11.9097C19.1685 11.4878 18.5966 11.2506 18 11.25ZM9 11.25C8.55499 11.25 8.11998 11.382 7.74997 11.6292C7.37996 11.8764 7.09157 12.2278 6.92127 12.639C6.75097 13.0501 6.70642 13.5025 6.79323 13.939C6.88005 14.3754 7.09434 14.7763 7.40901 15.091C7.72368 15.4057 8.12459 15.62 8.56105 15.7068C8.9975 15.7936 9.4499 15.749 9.86104 15.5787C10.2722 15.4084 10.6236 15.12 10.8708 14.75C11.118 14.38 11.25 13.945 11.25 13.5C11.25 12.9033 11.0129 12.331 10.591 11.909C10.169 11.4871 9.59674 11.25 9 11.25Z"
                  fill="#222"
                ></path>
                <path
                  d="M31.5 22.5H4.5C3.90373 22.4985 3.33231 22.2609 2.91068 21.8393C2.48905 21.4177 2.25151 20.8463 2.25 20.25V6.75C2.25151 6.15373 2.48905 5.58231 2.91068 5.16068C3.33231 4.73905 3.90373 4.50151 4.5 4.5H31.5C32.0963 4.50151 32.6677 4.73905 33.0893 5.16068C33.5109 5.58231 33.7485 6.15373 33.75 6.75V20.25C33.7492 20.8465 33.5119 21.4183 33.0901 21.8401C32.6683 22.2619 32.0965 22.4992 31.5 22.5ZM31.5 6.75H4.5V20.25H31.5V6.75Z"
                  fill="#222"
                ></path>
              </svg>
              <p className="text-sm">AVERAGE DEPOSIT</p>
              <div className="text-xl">
                <span>{statistic[1].toFixed(6)}</span>
              </div>
              <p className="text10px">stETH</p>
            </div>
            <div>
              <svg width={36} height={36} viewBox="0 0 36 36">
                <path
                  d="M16.875 12.375H19.125V22.5H16.875V12.375ZM14.625 2.25H21.375V4.5H14.625V2.25Z"
                  fill="#222"
                ></path>
                <path
                  d="M31.4991 10.1253L29.9016 8.539L27.3704 11.0703C25.2984 8.67741 22.3841 7.17486 19.2331 6.8748C16.0821 6.57473 12.9366 7.50021 10.4502 9.45896C7.96374 11.4177 6.32757 14.2591 5.8816 17.3928C5.43563 20.5265 6.21415 23.7116 8.05541 26.2862C9.89666 28.8608 12.6591 30.6271 15.7687 31.218C18.8783 31.8089 22.0961 31.179 24.7534 29.4592C27.4107 27.7394 29.3032 25.062 30.0378 21.9831C30.7724 18.9043 30.2925 15.6607 28.6979 12.9265L31.4991 10.1253ZM17.9991 29.2503C15.9966 29.2503 14.039 28.6564 12.374 27.5439C10.7089 26.4313 9.4112 24.85 8.64486 22.9999C7.87852 21.1498 7.67801 19.114 8.06869 17.15C8.45936 15.1859 9.42368 13.3818 10.8397 11.9658C12.2557 10.5498 14.0598 9.58547 16.0238 9.1948C17.9879 8.80412 20.0237 9.00463 21.8738 9.77097C23.7239 10.5373 25.3052 11.8351 26.4178 13.5001C27.5303 15.1651 28.1241 17.1227 28.1241 19.1252C28.1241 21.8106 27.0574 24.3859 25.1586 26.2847C23.2598 28.1835 20.6845 29.2503 17.9991 29.2503Z"
                  fill="#222"
                ></path>
              </svg>
              <p className="text-sm">AVERAGE TIME IN APP</p>
              <div className="text-xl">
                <span>{statistic[2].toFixed(0)}</span>
                "days"
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="convert-modal">
        <h2>CONVERT ETH TO stETH</h2>
        <span>
          Asymetrix uses staked ETH (stETH) for deposits. You can easily convert
          your ETH to stETH (1:1 ratio) and make a deposit.
        </span>
        <div className="relative mb-2">
          <input type="number" min={0} max={1} placeholder="0" />
          <span>ETH</span>
        </div>
      </div>
      <div className="convert-dimm" onClick={handleConvertClick}></div>
    </div>
  );
}
