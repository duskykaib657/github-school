const generateRandomTsCode = () => {
  const maxLength = 100;
  let code = '';
  for (let i = 0; i < maxLength; i++) {
    const char = String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
    if (char === 'l') continue;
    code += char;
  }
  return code;
}
