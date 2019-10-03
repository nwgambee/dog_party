




document.getElementById("submit").addEventListener("click", changeDogName);

function changeDogName() {
var newDogName = document.getElementById("name").value;
document.getElementById("change_this_name").innerHTML = newDogName;
};
