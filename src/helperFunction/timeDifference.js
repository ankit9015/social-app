function timeDifference({ oldTime, newTime }) {
  const DAY_TO_MILLISECONDS = 2400 * 3600 * 1000;
  const HOUR_TO_MILLISECONDS = 3600 * 1000;
  const MINUTE_TO_MILLISECONDS = 60 * 1000;
  const timeDiff = newTime - oldTime;
  if (timeDiff < MINUTE_TO_MILLISECONDS) {
    return Math.ceil(timeDiff / 1000) + "s";
  }
  if (timeDiff < HOUR_TO_MILLISECONDS) {
    return Math.ceil(timeDiff / MINUTE_TO_MILLISECONDS) + "m";
  }
  if (timeDiff < DAY_TO_MILLISECONDS) {
    return Math.ceil(timeDiff / HOUR_TO_MILLISECONDS) + "h";
  } else {
    return new Date(oldTime).toLocaleDateString();
  }
}

export default timeDifference;
