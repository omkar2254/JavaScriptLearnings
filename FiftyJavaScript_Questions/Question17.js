//Write a function that reverses the order of words in a sentence without using the built-in reverse() method. 

function reverseWords(sentence) {
    const words = sentence.split(' ');
    console.log(words);

    const reversedWords = [];
  
    for (let i = words.length - 1; i >= 0; i--) {
      reversedWords.push(words[i]);
    }
    console.log(reverseWords);
  
    return reversedWords.join(' ');
  }
  
  
  const originalSentence = "Hello world! This is a test.";
  const reversedSentence = reverseWords(originalSentence);
  
  console.log("Original Sentence:", originalSentence);
  console.log("Reversed Sentence:", reversedSentence);
  