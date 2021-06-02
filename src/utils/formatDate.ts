const formatDate = (dateRaw: Date | string) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateRaw);

  return `${
    monthNames[date.getMonth()]
  } ${date.getDay()}, ${date.getFullYear()}`;
};

export default formatDate;