

// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Panel {
//   constructor(panel) {
//     this.panelButtons = panel.querySelector(".panel-buttons");
//     this.panelBtnOpen = panel.querySelector(".panel-btn-open");
//     this.panelBtnClose = panel.querySelector(".panel-btn-close");
//     this.panelContent = panel.querySelector(".panel-content");

//     this.panelButtons.addEventListener("click", () => this.togglePanel());
//   }

class Articles {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.articleButtons = article.querySelector(".article-buttons");
    this.articleBtnOpen = article.querySelector(".article-btn-open");
    this.articleBtnClose = article.querySelector(".article-btn-close");
    this.articleContent = article.querySelector(".article-content");

    this.articleButtons.addEventListener("click", () => this.expandArticle());





    
//   // Methods
//   togglePanel = () => {
//     this.panelBtnOpen.classList.toggle("hide-btn");
//     this.panelBtnClose.classList.toggle("hide-btn");
//     this.panelContent.classList.toggle("toggle-on");
//   };
// }
    // create a reference to the ".expandButton" class. 
    this.expandButton = () => {
    this.articleBtnOpen.classList.expand("hide-btn");
    this.articleBtnClose.classList.expand("hide-btn");
    this.articleContent.classList.expand("expand-on");
  };
}



// // Step 3: use .querySelectorAll() on the .panel class to iterate over the DOM

// const panels = document.querySelectorAll(".panel");

// // Arrow function approach
// panels.forEach(panel => new Panel(panel));


// Step 3: use .querySelectorAll() on the .panel class to iterate over the DOM
const articles = document.querySelectorAll(".article");

// Arrow function approach
articles.forEach(article => new Article(article));


// articles.forEach(article => {
//   return new Article(article)
// })


   



/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
//iterate over the articles NodeList and create a new instance of Article by passing in 
//each article as a parameter to the constructor.

*/

// let articles;