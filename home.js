document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("home")) || {
    title: "Welcome to My Portfolio",
    subtitle: "Crafting web solutions with passion and precision",
    heroImage: "https://s3-alpha-sig.figma.com/img/643c/7d87/4a7d291fc3ac8b11502026b6f004117f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cfC4k5gAh5NsmHtq5-I7DR4XVlD16hwFRkY~8YGxxECscCl9oDuhCC1nBi6qQMcuv2dxBW7~ZNjgEZwj4aU0CiYCSaQjt-am4F-bBBtUsfVljJcewVPuCVpiSeQfJAATIz5qBU8y6oeYUfPqX-7NK9O4WNcJSNSwHvZllTGNyNvYKiFeza7dcWI0oBEpekA5IAt~bf76DrHOJf0Fhk8XlLl9Ee4-dRIME1gSpE1cv83fvhHMWXkR8O7nW6LNONA1hQCpvX0GA3se1ph1drelLXKzXuj50OJTAkwbF2fNUG97qW~sBiJNFZRPq~pJSEoFXO~GKitOrQscMjjCXmA4zQ__",
    description: "Explore my journey, dive into my projects, and feel free to reach out. This space is where creativity meets technology.",
  };
  
  const title = document.querySelector(".userName");
  const description = document.querySelector(".aboutUser");
  const userImg = document.querySelector(".userImg");
  const editBtn = document.querySelector(".edit");
  const deleteBtn = document.querySelector(".delete");

  function loadHomeData() {
    if (data.title) {
      title.textContent = data.title;
      description.textContent = data.description;
      userImg.src = data.heroImage;
    }
  }

  editBtn.addEventListener("click", () => {
    const newTitle = prompt("Enter new title:", data.title || "Welcome to My Portfolio");
    const newDescription = prompt("Enter new description:", data.description || "Explore my journey...");

    if (newTitle && newDescription) {
      data.title = newTitle;
      data.description = newDescription;

      localStorage.setItem("home", JSON.stringify(data));
      loadHomeData();
    }
  });

  deleteBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this content?")) {
      localStorage.removeItem("home");
      title.textContent = "";
      description.textContent = "";
      userImg.src = "";
    }
  });

  loadHomeData();
});