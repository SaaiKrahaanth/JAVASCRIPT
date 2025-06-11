let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration=false;
let runnerAge=30;
if ((runnerAge>18)&&(earlyRegistration)){
  raceNumber+=1000;
  comsole.log("You will race at 9:30 am.");
}
else if((runnerAge>18)&&(!earlyRegistration)){
  console.log("you will race at 11:00 am.");
}
else{
  console.log("you will race at 12:00 am.");
}
