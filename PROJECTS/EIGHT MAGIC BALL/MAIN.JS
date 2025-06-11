console.log("Starting the Magic Eight Ball program...");

let userName = "Luffy";
if (userName.length === 0) {
  console.log("Hello!");
} else {
  console.log(`Hello ${userName}!`);
}

userName ? console.log(`Welcome ${userName}!`) : console.log("Hello!");

let userQuestion = "are you ready to magic eight ball";
console.log(`${userName} ${userQuestion}`);

let sk = userName + " " + userQuestion;
console.log(sk);

let randomNumber = Math.floor(Math.random() * 8);
console.log(`Generated random number: ${randomNumber}`);

let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log("Unexpected random number!");
}

console.log(`Eight Ball says: ${eightBall}`);
console.log("Program execution completed.");
