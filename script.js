const hovercolor = document.querySelectorAll(".wrapper > div");

hovercolor.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.background = "red";
  });
  item.addEventListener("mouseout", () => {
    item.style.background = "blue";
  });
});
console.log(hovercolor);
