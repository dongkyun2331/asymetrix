import "./BodyApp.css";

export default function BodyApp() {
  return (
    <div>
      <section className="section">
        <div className="mint">
          <h3 className="h3">
            DRAW &#35;5
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
        </div>
        <div className="lavender"></div>
      </section>
    </div>
  );
}
