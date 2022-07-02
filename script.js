
let myLibrary = []

function Book(title, author, pages, answer){
    this.title = title,
    this.author = author,
    this.pages = pages

    if(answer == 'Yes'){
        this.answer = 'read'
    }else{
        this.answer = 'not read yet'
    }
}

Book.prototype.info = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.answer}`
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, )
let gameOfThrones = new Book("Game of thrones", "George R.R Martin", 372)
let lordOftheFlies = new Book("Lord of the Flies", "William Golding", 250, "Yes")
let harryPotter = new Book("Harry Potter", "J.K Rowlng", 542, )


addBookToLibrary(theHobbit)
addBookToLibrary(gameOfThrones)
addBookToLibrary(lordOftheFlies)
addBookToLibrary(harryPotter)

console.log(myLibrary)
let container = document.createElement('div')
for(let i = 0; i < myLibrary.length; i++){
    
    let card = document.createElement('div')
    let content = document.createElement('p')
    card.classList.add("card-style")
    container.classList.add('container')

    content.innerText = `Title: ${myLibrary[i].title} 
    \n Author: ${myLibrary[i].author}
    \n Pages: ${myLibrary[i].pages}
    \n ${myLibrary[i].answer}`

    card.appendChild(content)
    container.appendChild(card)
}

document.body.appendChild(container)

let newBook = document.querySelector(".new-book")
let modal = document.getElementById("myModal")
let span = document.getElementsByClassName("close")[0];

newBook.addEventListener('click', ()=>{
    modal.style.display = "block";
})

span.onclick = function() {
    modal.style.display = "none";
  }