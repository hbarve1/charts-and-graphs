/** @format */

function convertUrlToTitle(str) {
  return str
    .split("-")
    .map((s) => (s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");
}

export default convertUrlToTitle;
