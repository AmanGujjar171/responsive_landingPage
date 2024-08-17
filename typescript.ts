let menu: NodeListOf<Element> = document.querySelectorAll(".menu");
let pages: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".navbarPagesHeading"
);

menu.forEach((menuElement: Element) => {
  menuElement.addEventListener("click", () => {
    pages.forEach((page: HTMLElement) => {
      if (page.style.display === "none" || page.style.display === "") {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });
  });
});
