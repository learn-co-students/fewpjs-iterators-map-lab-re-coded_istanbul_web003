const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased =(arr)=>{
  return tutorials.map(
    (title)=>{
      const arrWords= title.split(' ');
      const newArrWords = arrWords.map(word=>{
         word = word.charAt(0).toUpperCase()+word.substr(1);
        // console.log(word.charAt(0).toUpperCase());
        // console.log(word);
        return word;
      });
      console.log(newArrWords);
      const newTitle= newArrWords.join(" ");
      // console.log(newTitle);
      return newTitle;
    }
  );
} 

titleCased();