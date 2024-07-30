/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toString();
  str2 = str2.toString();
  let Str1 = str1.toLowerCase();
  let Str2 = str2.toLowerCase();
  const arr1 = [];
  for (let i = 0; i < 26; i++) {
    arr1[i] = 0;
  }
  const arr2 = [];
  for (let i = 0; i < 26; i++) {
    arr2[i] = 0;
  }
  for(let i = 0; i<Str1.length; i++){
    let index = Str1.charCodeAt(i) - 97;
    arr1[index]++;
  }
  for(let i = 0; i<Str2.length; i++){
    let index = Str2.charCodeAt(i) - 97;
    arr2[index]++;
  }
  for(let i = 0; i<26; i++){
    if(arr1[i] != arr2[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
