function toggleAnswer(item) {
    const answer = item.nextElementSibling;
    const icon = item.querySelector(".icon");
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      icon.src = "assets/images/icon-minus.svg";
    } else {
      answer.style.display = "none";
      icon.src = "assets/images/icon-plus.svg";
    }
}