const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		header.style.background = "#000";
		header.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		header.style.background = "blanchedalmond";
		header.style.color = "#000";
		modeButton.textContent = "🌑";
	}
});