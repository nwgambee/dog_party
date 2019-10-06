// change dog name functionality:

document.getElementById("submit").addEventListener("click", function() {
  document.getElementById("change_this_name").innerHTML = document.getElementById("name").value;
  event.preventDefault();
});

// hide-columns functionality:

document.getElementById('left_button').addEventListener("click", hideLeftContent);
function hideLeftContent() {
  var hideLeft = document.getElementById("left_para");
  if (hideLeft.style.display === "none") {
    hideLeft.style.display = "block";
  } else {
    hideLeft.style.display = "none";
  }
};

document.getElementById("middle_button").addEventListener("click", hideMiddleContent);
function hideMiddleContent() {
  var hideMiddle = document.getElementById("middle_para");
  if (hideMiddle.style.display === "none") {
    hideMiddle.style.display = "block";
  } else {
    hideMiddle.style.display = "none";
  }
};

document.getElementById("right_button").addEventListener("click", hideRightContent);
function hideRightContent() {
  var hideRight = document.getElementById("right_para");
  if (hideRight.style.display === "none") {
    hideRight.style.display = "block";
  } else {
    hideRight.style.display = "none";
  }
};
