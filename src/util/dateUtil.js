// format dates for readability
export const formatDate = (date) => {
  const d = new Date(date);
  let myDate = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return myDate;
};

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
