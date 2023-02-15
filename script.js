// Animate Accordion & Toggling
const accItems = document.querySelectorAll(".accordion__item");
const paragraphs = document.querySelectorAll(".accordion__item--text");

// Set height of para in data attr
paragraphs.forEach((para) => para.setAttribute("data-acc-height", para.clientHeight));

// Event Execution
accItems.forEach((item) =>
  item.addEventListener("click", () => {
    accItems.forEach((item) => item.classList.remove("show"));
    item.classList.add("show");

    const content = item.querySelector(".accordion__item--content");
    let height = 0;
    if (item.classList.contains("show")) {
      height = content.children[0].clientHeight;
      content.style.height = height + "px";
      paragraphs.forEach((para) => {
        if (!para.parentElement.parentElement.classList.contains("show")) {
          para.parentElement.style.height = 0;
        }
      });
    }
  })
);
