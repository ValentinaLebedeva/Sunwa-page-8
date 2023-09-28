/* chosing active tab depends on topic of the article */

const article = document.querySelector(".article-page");
const tabColumn = document.querySelector(".tab-column");
const tabButtons = document.querySelectorAll(".tab-link");

tabButtons.forEach(function (item) {
    item.classList.remove("tab-link-active");

    if (article.dataset.tab === item.dataset.tab) {
        item.classList.add("tab-link-active")
    }
})