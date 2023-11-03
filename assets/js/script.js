document.addEventListener("DOMContentLoaded", function () {
  const blueScore = document.getElementById("blue-score");
  blueScore.addEventListener("click", function () {
    const num = parseInt(blueScore.textContent);
    blueScore.innerHTML = num + 1;
  });

  blueScore.addEventListener("touchstart", function () {
    const num = parseInt(blueScore.textContent);
    blueScore.innerHTML = num + 1;
  });

  const redScore = document.getElementById("red-score");
  redScore.addEventListener("click", function () {
    const num = parseInt(redScore.textContent);
    redScore.innerHTML = num + 1;
  });

  redScore.addEventListener("touchstart", function () {
    const num = parseInt(redScore.textContent);
    redScore.innerHTML = num + 1;
  });
});
