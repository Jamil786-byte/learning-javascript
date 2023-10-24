const text = "My name is jamil";

let words = text.split(" "); //["My name is jamil"]
let output = "";
for (let i = 0; i < words.length; i++) {
  let reverseStr = words[i];
  for (let j = reverseStr.length - 1; j >= 0; j--) {
    output += reverseStr[j];
  }
  
  if (i < words.length - 1) {
    output += " "; // Add a space between words
  }
}

console.log(output); // yM eman si limaj
