function countAll(str) {
    let letterCount = 0;
    let digitCount = 0;
  
    for (let char of str) {
      if (/[a-zA-Z]/.test(char)) {
        letterCount++;
      } else if (/[0-9]/.test(char)) {
        digitCount++;
      }
    }
  
    return {
      "HARFLAR": letterCount,
      "RAQAMLAR": digitCount
    };
  }
  console.log(countAll("Hello World")); 
  console.log(countAll("H3ll0 Wor1d"));
  console.log(countAll("149990")); 
  

