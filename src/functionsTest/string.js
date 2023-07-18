const string = (str) => {
  if (str.length > 1 && str.length < 10) {
    return str.length;
  }
  return 'invalid';
};
module.exports = string;
