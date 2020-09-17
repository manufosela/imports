export const loadPageInto = (main) => {
  let videoGameTemplate;
  fetch('./resumenVideoGames.json')
    .then((response) => response.json())
    .then((data) => {
      let content = '<h1>LIBROS</h1>';
      for (const videoGame of data) {
        videoGameTemplate = `
          <section>
            <h2>${videoGame.titulo}</h2>
            <h3>Resumen</h3>
            <p>
              ${videoGame.resumen}
            </p>
          </section>
        `;
        content += videoGameTemplate;
      }

      main.innerHTML = content;
    });
};