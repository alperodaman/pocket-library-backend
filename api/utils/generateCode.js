const genereateCode = () => {
  let code = Math.floor(Math.random() * Math.floor(8999)) + 1000;
  code = code.toString();
  return code;
};

export { genereateCode };
