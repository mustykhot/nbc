import { useState } from "react";
import { formatTime } from "../../utils/utils";
const Clock = () => {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  let countDownDate = new Date("Nov 23, 2022 15:37:25").getTime();
  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setSecond(`${seconds > 0 ? seconds : "00"}`);
    setMinute(`${minutes > 0 ? minutes : "00"}`);
    setHour(`${hours > 0 ? hours : "00"}`);
    setDay(`${days > 0 ? days : "00"}`);
    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  return (
    <div className="pd_clock">
      {/* <div className="time_box">
        <div className="single_time">
          <p className="time">{formatTime(day)}</p>
          <p className="description">DAY(S)</p>
        </div>{" "}
        <div className="colon">:</div>
        <div className="single_time">
          <p className="time">{formatTime(hour)}</p>
          <p className="description">HOUR(S)</p>
        </div>{" "}
        <div className="colon">:</div>
        <div className="single_time">
          <p className="time">{formatTime(minute)}</p>
          <p className="description">MINUTE(S)</p>
        </div>{" "}
        <div className="colon">:</div>
        <div className="single_time">
          <p className="time">{formatTime(second)}</p>
          <p className="description">SECOND(S)</p>
        </div>
      </div> */}
      <p className="live"> Black Friday is now live</p>
    </div>
  );
};

export default Clock;
