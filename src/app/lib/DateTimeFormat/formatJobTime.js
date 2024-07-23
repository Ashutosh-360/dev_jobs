export default function formatJobTime(date) {
  let currentDate = new Date();
  let jobDate = new Date(date);
  let difference = Math.floor(currentDate - jobDate) / 1000;
  if (difference > 60 * 60 * 24 * 30) {
    return Math.floor(difference / (60 * 60 * 24 * 30)) + " months ago";
  } else if (difference > 60 * 60 * 24) {
    return Math.floor(difference / (60 * 60 * 24)) + " days ago";
  } else if (difference > 60 * 60) {
    return Math.floor(difference / (60 * 60)) + " hours ago";
  } else if (difference > 60) {
    return Math.floor(difference / 60) + " minutes ago";
  } else {
    return Math.floor(difference / 60) + " seconds ago";
  }
}
