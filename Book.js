export class Book {

}

class Book {
  constructor(title, author, description, pages, currentPage, read){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  readBook(page) {
    if (page <  1 || page > this.pages) {
      return 0;
    } 
    else if (page >= 1 && page < this.pages){
      this.currentPage = page;
      return 1; 
    }
    else if (page = this.pages){
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }

 }



 let firstBook = new Book('The old man', 'Sam Agu', 'fiction', 12, 1, true);
 let secondBook = new Book('The old woman', 'Peter ogu', 'non-fiction', 65, 16, true);
 let thirdBook = new Book('The River', 'Samuel Agu', 'poem', 12, 5, true);
 let fourthBook = new Book('The Fish', 'Jerry Agu', 'novel', 52, 8, true);
 
 const books = [firstBook, secondBook, thirdBook, fourthBook];

 this.currentPage = 6;

export {books};
