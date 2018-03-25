var colorField1 = document.querySelector(".color1");
var colorField2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradientBody");
var orientation = document.getElementById("orientation");

//console.log(document.getElementById("orientation").value);

function changeBackground() {
	body.style.background = "linear-gradient(to " 
		+ orientation.value 
		+ ", " 
		+ colorField1.value 
		+ ", " 
		+ colorField2.value 
		+ ")";

console.log(body.style.background);

	h3.textContent = body.style.background + ";";
}
colorField1.addEventListener("input", changeBackground);
colorField2.addEventListener("input", changeBackground);
orientation.addEventListener("input", changeBackground);