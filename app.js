const search = document.querySelector("input"),
  images = document.querySelectorAll(".picture");

search.addEventListener("keyup", (vl) => {
  let val = search.value,
    value = val.toLowerCase();
  if (vl.key == "Enter") {
    images.forEach((image) => {
      if (value === image.id) {
        return (image.style.display = "block");
      }
      image.style.display = "none";
    });
  }
});

search.addEventListener("keyup", () => {
  if (search.value === "") {
    images.forEach((image) => {
      image.style.display = "block";
    });
  }
});
