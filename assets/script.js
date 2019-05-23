const currentYear = document.querySelector('.current-year');
console.log(currentYear);
const getCurrentYear = new Date();
currentYear.innerHTML = getCurrentYear.getFullYear();
