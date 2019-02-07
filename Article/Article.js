// - Select all classes named ".article" and assign that value to the articles variable.  
// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => {this.expandArticle()});
  }
 
    // create a reference to the ".expandButton" class. 
    expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
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


