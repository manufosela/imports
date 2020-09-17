export const loadPageInto = (main) => {
  let bookTemplate;
  fetch('./resumenLibros.json')
    .then((response) => response.json())
    .then((data) => {
      let content = '<h1>LIBROS</h1>';
      for (const book of data) {
        bookTemplate = `
          <section>
            <h2>${book.titulo}</h2>
            <h3>Resumen</h3>
            <p>
              ${book.resumen}
            </p>
          </section>
        `;
        content += bookTemplate;
      }

      main.innerHTML = content;
    });
};