function play() {
  const rock = document.getElementsByClassName("label rock");
  const paper = document.getElementsByClassName("label paper");
  const scissors = document.getElementsByClassName("label scissors");

  if (rock && paper && scissors) {
    const tools = { ROCK: rock[0], PAPER: paper[0], SCISSORS: scissors[0] };
    const randomIndex = Math.floor(Math.random() * 3);
    const choice = Object.keys(tools)[randomIndex];
    try {
      tools[choice].click();
      console.log("CHOSE: " + choice);
    } catch (err) {
      // due to case where CircleK video is playing, buttons are loaded but not clickable
      console.log(err);
    }
  }
  // keep clicking and handle when click errors out
  setTimeout(play, 3000);
}

setTimeout(play, 3000);
