const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:


function formatedBookNames () {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}
//Map já retorna um novo array, então bastou organizar da maneira que quero que a função me retorne para cada um dos
//elementos (book) em template strings
//Mais fácil do que esperava. Tente simplificar sempre que possível
console.log(formatedBookNames());



const nameAndAge = () => {
  return books.map(book =>{
    return {age: book.releaseYear - book.author.birthYear, 
            author: book.author.name,
          }
  }).sort((a,b) => a.age - b.age)
};



const fantasyOrSienceFiction = () => {
  return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficcção Cientifica',
  );
};

//console.log(fantasyOrSienceFiction());



//Livros antifos ordenados
const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  return books
  .filter((book) => {
    return currentYear - book.releaseYear > 60;
  })
  .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

console.log('Old Books Ordened: ', oldBooksOrdered());