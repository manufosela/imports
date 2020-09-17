export const loadPageInto = (main) => {
  let movieTemplate;
  fetch('./resumenPeliculas.json')
    .then((response) => response.json())
    .then((data) => {
      let content = '<h1>LIBROS</h1>';
      for (const movie of data) {
        movieTemplate = `
          <section>
            <h2>${movie.titulo}</h2>
            <h3>Resumen</h3>
            <p>
              ${movie.resumen}
            </p>
          </section>
        `;
        content += movieTemplate;
      }

      main.innerHTML = content;
    });
};