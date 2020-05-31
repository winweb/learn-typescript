const replaceVowels = str => [...str].map(e => ['a', 'e', 'i', 'o', 'u'].indexOf(e.match(/[A-z]/)? e.toLowerCase(): e) + 1 || e).join('');

console.log(replaceVowels('hello'));
console.log(replaceVowels('How are you today?'));
