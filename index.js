// Code your solutions in this file
//const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(namesArray) {
  let cards = []

  for (let i=0; i< namesArray.length; i++) {
  cards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
}
  return cards;
}
writeCards(["Guadalupe", "Ollie", "Aki"]);
writeCards(["John", "Joe", "Bill"]);

function countDown() {
  let countdown = 10;
  while (countdown > -1)
  console.log(countdown--);
}
  countDown(4);
