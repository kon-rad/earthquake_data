function getFormattedDate(utc) {
  const date = new Date(utc);
  const formattedDate =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds();

  return formattedDate;
}

export { getFormattedDate };
