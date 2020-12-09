
// MILESTONE 1
// La prima cosa fondamentale è sapere quali libri abbiamo in
// libreria. Quindi mostriamoli sulla pagina.
// [IMPORTANTE] In questa fase, non focalizziamoci sul layout
// (quello possiamo farlo in un secondo momento). Limitiamoci a stamparli
 // in una ul o in dei paragrafi con degli hr come separatori.
//
// MILESTONE 2
// Abbiamo la lista di libri, perfetto!
// Proviamo ad aggiungere manualmente un nuovo libro nella
// libreria.
//
// MILESTONE 3
// I libri cominciano ad essere un bel po'. Abbiamo bisogno
 // di poter effettuare una ricerca!
// Creiamo un input in cui poter inserire il nome di un autore.
 // Al click su un pulsante "Cerca", andiamo a filtrare i libri
 // da visualizzare.
//
// BONUS
// Un'altra cosa importante è poter aggiungere nuovi libri
// quando li compriamo!
// Creiamo un form in cui si possa inserire titolo, autore e anno
// di pubblicazione. Al click su un pulsante "Aggiungi", aggiungeremo
// il libro alla lista. Sono tutti e tre dati importanti per un libro,
// quindi assicuriamoci di NON aggiungere libri se l'utente non ha
// inserito tutte le tre proprietà.

$(document).ready(
  function() {
    const books = [
       {
        title: "Il vecchio e il mare",
        author: "Ernest Hemingway",
        year: 1951
       },
       {
        title: "La forma dell'acqua",
        author: "Andrea Camilleri",
        year: 1994
       },
       {
        title: "Elogio della follia",
        author: "Henri Laborit",
        year: 1976
       },
       {
        title: "La camera azzurra",
        author: "George Simenon",
        year: 1964
       }
    ];

    let newBook2 = {
      title: "Harry Potter e la pietra filosofale",
      author: " J. K. Rowling",
      year: 1997
    }
    books.push(newBook2);
    appendItems(books);



    // add new book from form
    let newBook = {
      title: "",
      author:  "",
      year: 0
    };
    let button = $('#add');
    button.click(
      function() {
        if ($('#title').val() == ''|| $('#author').val() == '' || $('#year').val() == '') {
          alert('compila tutti i campi ')
        }
        else {
          newBook.title = $('#title').val();
          console.log(newBook.title);

          newBook.author = $('#author').val();
          console.log(newBook.author);

          newBook.year = $('#year').val();
          console.log(newBook.year);

          books.push(newBook);
          console.log(books);

          appendItems(books);
          refreshInput($('#title'));
          refreshInput($('#author'));
          refreshInput($('#year'));
        }
      }
    );

    // search author
    $('#search_author').click(
      function() {
        let currentAuthor = $('#search').val();

        books.forEach((element) => {
          if (element.author == currentAuthor) {
            $('.html ul li').remove();
            $('#books_list').append(
              `
              <li><strong>${element.title}</strong> ${element.author} ${element.year}</li>
              `
            );
          }
        });
        refreshInput($('#search'));
      }
    );
  }
);

//-----------FUNCTION--------------------------------------------------

function appendItems(array) {
  $('.html ul li').remove();
  array.forEach((element) => {
    $('#books_list').append(
      `
      <li>
        <ul style='list-style: none; margin-bottom: 10px'>
          <li><strong>${element.title}</strong></li>
          <li>${element.author}</li>
          <li>${element.year}</li>
        </ul>
      `
    )
  });
}

function refreshInput(inputId) {
  inputId.val('');
}
