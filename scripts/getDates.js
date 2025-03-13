const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = `${currentYear}`;

//Get the last modified date of the document
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").innerText = "Last Modified:" + lastModifiedDate;