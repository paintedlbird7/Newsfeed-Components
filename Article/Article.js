// - Select all classes named ".article" and assign that value to the articles variable.  
// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement
    this.expandButton = this.domElement.querySelector(".expandButton");
    this.expandButton.innerText = "expand";


    this.expandButton.addEventListener("click", () => {this.expandArticle()});
  }
 
    // create a reference to the ".expandButton" class. 
    expandArticle() {
      this.domElement.classList.toggle("article-open");
       
    }
  }



// // Step 3: use .querySelectorAll() on the .panel class to iterate over the DOM
// - With your selection in place, now chain .forEach() on to the articles variable to 
//iterate over the articles NodeList and create a new instance of Article by passing in 
//each article as a parameter to the constructor.

// Step 3: use .querySelectorAll() on the .panel class to iterate over the DOM
let articles = document.querySelectorAll(".article");

// Arrow function approach
articles.forEach(article => {new Article(article)});


