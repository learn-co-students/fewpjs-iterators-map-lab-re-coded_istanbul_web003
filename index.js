const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const capitalizedWords = tutorials.map((tutorial) => {
    return tutorial
      .split(" ") // spread the string into multiple words
      .map((word) => {
        // map over the multiple words
        return (
          word // for each word
            .charAt(0) // take the first letter
            .toUpperCase() + // capitalize it
          word.substr(1)
        ); // append the rest of the word to the capitalized letter
      });
  });
  const capitalizedSentences = capitalizedWords.map((ele) => ele.join(" "));
  return capitalizedSentences;
};
