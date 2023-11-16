// Q1:- Write a function to reverse a string;
/*  let text = "happy interview";
// output = weivretni yppah
 
 let word = text.split(" ");
 let output = "";
 let reversed = "";
 for (let i = word.length - 1; i >= 0; i--) {
   output = word[i];
   for (let j = output.length - 1; j >= 0; j--) {
     reversed += output[j];
   }
   if (i > 0) {
 
     reversed += " ";
   }
 }
 console.log(reversed); */

 let text = "happy interview";
 let words = text.split(" ");
 let reversedWord = "";
 let result = "";
 
 (function reverseStr(arrStr) {
   for (let i = arrStr.length - 1; i >= 0; i--) {
     reversedWord = arrStr[i];
     for (let j = reversedWord.length - 1; j >= 0; j--) {
       result += reversedWord[j];
     }
     if(i > 0){
       result += " ";
     }
   }
   console.log(result);
   return result;
 })(words);
 