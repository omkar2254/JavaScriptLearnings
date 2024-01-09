//Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order). 

function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    console.log(cleanStr1);
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
    console.log(cleanStr2);
  
    const sortedStr1 = cleanStr1.split('').sort().join('');
    console.log(sortedStr1);

    const sortedStr2 = cleanStr2.split('').sort().join('');
    console.log(sortedStr2);

    return sortedStr1 === sortedStr2;
  }
  

  const string1 = "listen";
  const string2 = "silent";
  
  console.log(`Are "${string1}" and "${string2}" anagrams? ${areAnagrams(string1, string2)}`);
  
  