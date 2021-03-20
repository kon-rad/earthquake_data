const isValidDate = (dateString) => {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  return dateString.match(regEx) != null;
};

const isValidLatitude = (input) => {
  const num = Number(input);
  return !isNaN(num) && input >= -90 && input <= 90;
};

const isValidLongitude = (input) => {
  const num = Number(input);
  return !isNaN(num) && input >= -180 && input <= 180;
};

const isPositiveNumber = (input) => {
  const num = Number(input);
  return !isNaN(num) && num >= 0;
};

export {
  isValidDate,
  isValidLatitude,
  isValidLongitude,
  isPositiveNumber,
};
