const part1 = ["Hallo", "guten Morgen", "hi", "moin"];
const part2 = [
  "heute ist ein schöner Tag",
  "es ist Regen angesagt",
  "heute ist ein guter Tag für Pizza",
];
const part3 = ["bis bald", "mach's gut", "ciao"];

const indexPart1 = Math.floor(Math.random() * part1.length);
const indexPart2 = Math.floor(Math.random() * part2.length);
const indexPart3 = Math.floor(Math.random() * part3.length);

console.log(
  `Hier ist deine Nachricht: ${part1[indexPart1]}, ${part2[indexPart2]}, ${part3[indexPart3]}.`
);
