# imports

## [imports estáticos](https://github.com/manufosela/imports/tree/master/import-estatico)
Esta es la manera habitual de importar módulos.
Solo acepta una cadena literal como especificador de módulo e introduce enlaces en el ámbito local a través de un proceso de "enlace" previo al tiempo de ejecución.
La sintaxis de importación estática solo se puede utilizar en el nivel superior del archivo.

## [imports dinámicos](https://github.com/manufosela/imports/tree/master/import-dinamico)
Los imports dinámicos introducen una nueva forma de importación similar a una función que se adapta a esos casos de uso.
**import(moduleSpecifier)** devuelve una promesa para el objeto de espacio de nombres del módulo solicitado, que se crea después de obtener, instanciar y evaluar todas las dependencias del módulo, así como el módulo en sí.

## [imports dinámicos y lazy-loading](https://github.com/manufosela/imports/tree/master/import-dinamico-and-lazyloading)
Las capacidades de lazy-loading (carga en diferido) habilitadas por la importación dinámica pueden ser bastante poderosas cuando se aplican correctamente. 

Por ejemplo, también puede usarse para cargar los comentarios de un post, conforme vaya haciendo scroll hacia abajo, sin traerse todos los comentarios ni tener que paginar.

## Conclusiones
Tanto la importación estática como la importación dinámica () son útiles. 
Cada uno tiene sus casos de uso, muy distintos. 
Los import estáticos para cargar las dependencias que se renderizan inicialmente, especialmente para el contenido de la mitad superior de la página. 
En otros casos, se puede cargar dependencias a demanda con importación dinámica conforme vaya haciendo scroll, por ejemplo.