/** @format */

const boxItem = document.querySelectorAll(".main_box li");
const box = document.querySelectorAll(".box");
let getSlide = boxItem.length - 1;
let slideCalc = 30 / getSlide + "%"; // Each box will take 10% of the parent width (ul width) at inactive except the active box
box.forEach(e => {
	e.addEventListener("click", function () {
		box.forEach(box => {
			box.style.width = slideCalc;
			box.classList.remove("active");
		});
		e.classList.add("active");
	});
});
/// 개선해야 함 