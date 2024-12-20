function rot13(str) {
  return str
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        // Shift letters by 13 places
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      }
      return char; // Non-alphabetic characters remain unchanged
    })
    .join("");
}

// Test cases
console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("SERR CVMMN!"));    // FREE PIZZA!
console.log(rot13("SERR YBIR?"));     // FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
