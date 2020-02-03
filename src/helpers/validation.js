export const phoneRegExp = /(1 )?\d{3} \d{3}-\d{4}/;

export const underscoreRegExp = /[\W_]+/g;

export const capitalizeFLetter = text => {
  const string = text;
  return string[0].toUpperCase() + string.slice(1);
};
