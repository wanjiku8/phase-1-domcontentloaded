// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded");
  
    const paragraph = document.getElementById("text");
  
    paragraph.textContent = "This is really cool!";
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  