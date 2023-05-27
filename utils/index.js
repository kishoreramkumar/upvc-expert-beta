export const animateValue = (update, start = 0, end, duration = 5000) => {
  var range = end - start;
  var minTimer = 50;
  var stepTime = Math.abs(Math.floor(duration / range));
  stepTime = Math.max(stepTime, minTimer);
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;
  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    update(value);

    if (value == end) {
      clearInterval(timer);
    }
  }
  timer = setInterval(run, stepTime);
  run();
};

export const convertMobileNo = (no) => {
  if (no) {
    let mobileNo = no.toString().split("");
    if (no.toString().length === 12) {
      mobileNo = no.toString().split("").splice(2, 10);
    }
    return `+91 ${mobileNo.splice(0, 3).join("")}-${mobileNo
      .splice(0, 3)
      .join("")}-${mobileNo.splice(0, 4).join("")}`;
  }
  return "";
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const checkIsProduction = () => {
  //return true if env is production
  if (process.env.NODE_ENV === "development") {
    return false;
  } else {
    return true;
  }
};

export const getBaseUrl = () => {
  if (checkIsProduction()) {
    return "https://sqft.expert";
  } else {
    return "http://localhost:3000";
  }
};
