function palindrome(str) {
    let newStr = str.toLowerCase().split("").filter(char => char.match(/[a-z]|[1-9]/i)).join("")
    let checkStr = newStr.split("").reverse().join("")
    if(checkStr !== newStr) {
      return false
    }
    return true;
  }
  
  palindrome("not a palindrome");