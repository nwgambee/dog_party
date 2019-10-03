document.getElementById("submit").addEventListener("click", changeDogName);
function changeDogName() {
  var newDogName = document.getElementById("name").value;
  document.getElementById("change_this_name").innerHTML = newDogName;
  event.preventDefault();
};

document.getElementById("left_button").addEventListener("click", hideLeftContent);
function hideLeftContent() {
  var x = document.getElementById("left_para");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

document.getElementById("middle_button").addEventListener("click", hideMiddleContent);
function hideMiddleContent() {
  var x = document.getElementById("middle_para");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

document.getElementById("right_button").addEventListener("click", hideRightContent);
function hideRightContent() {
  var x = document.getElementById("right_para");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
