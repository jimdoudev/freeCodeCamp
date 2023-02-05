function rot13(str) {
    str = str.split("").map(char => {
      if(char.toUpperCase().match(/[A-Z]/i)) {
        let newChar = char.charCodeAt() - 13;
        if(newChar < 65) {
          newChar = 91 - (65 - newChar);
        }
        return String.fromCharCode(newChar);
      }
      return char 
    })
    return str.join("");
  }
  
  rot13("SERR PBQR PNZC");