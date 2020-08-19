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

const titleCased = () => {
 
  let sentences = tutorials.map( x => {
    let words = x.split(' ');
    let caseTitle = words.map (
      y => y[0].toUpperCase() + y.substr(1));
   
     let join =   caseTitle.join(' ')
   
     return join
   
     
     });
     return sentences
    

}

