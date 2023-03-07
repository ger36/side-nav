const about = document.querySelector(".about");

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    const articles = document.querySelectorAll(".content");
    const btns = document.querySelectorAll(".menu-btn");
    if (id) {
        //toggling the active status from the buttons
        btns.forEach(function(btn) {
        });
        //hiding the content from other sections
        articles.forEach(function(article) {
            article.classList.remove("active");
        });
        //making the id active
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});   

const closes = document.querySelectorAll(`.close-btn`)

closes.forEach(close => {
    close.addEventListener(`click`, function() {
        close.parentElement.parentElement.classList.remove(`active`);
    });
});
/*contents.forEach(element => {
	element.addEventListerner(`click`, function () {
		navbar.forEach (nav=>nav.classList.remove(`active`))
        console.log(element)
    });
}); */


/*contents.forEach(function (content) {
    const contents = document.querySelectorAll(".content");
    const btn = document.querySelectorAll(".close-btn");
    btn.addEventListener("click", function() {
        btn.patentElement.classList.remove("active")
    });
});*/

/*contents.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
}); */
