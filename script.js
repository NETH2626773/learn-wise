const localBooks = [
  { bookName: "Biology Past Papers", price: 1200 },
  { bookName: "Combined Maths Guide", price: 1500 },
  { bookName: "Physics MCQ Book", price: 1300 },
  { bookName: "Chemistry Revision", price: 1400 }
];

const edexcelBooks = [
  { bookName: "Edexcel Physics Unit 1", price: 1800 },
  { bookName: "Edexcel Chemistry Unit 2", price: 1750 }
];

function renderBooks(books, containerId) {
  const container = document.getElementById(containerId);
  books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <h4>${book.bookName}</h4>
      <p>Rs. ${book.price}</p>
      <button onclick='addToCart(${JSON.stringify(book)})'>Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(book) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Book added to cart!");
}

renderBooks(localBooks, "local-books");
renderBooks(edexcelBooks, "edexcel-books");
