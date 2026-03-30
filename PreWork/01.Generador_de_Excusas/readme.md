# El generador de Excusas (JavaScript)
Disneylandia para procrastinadores y perezosos.

Este proyecto es ideal para evitar alguien molestoso. No toma más de 20 líneas de código y puede salvarte por el resto de tu vida.

## Objetivo
Este proyecto está diseñado como una primera experiencia práctica con JavaScript, enfocada en aprender haciendo. A través de la creación de un generador de excusas que se ejecuta por consola, los estudiantes trabajarán con una cantidad reducida de código, lo que permite concentrarse en los fundamentos del lenguaje sin distracciones innecesarias.

Durante el desarrollo del proyecto se reforzarán conceptos clave como el uso de arrays, la selección aleatoria de datos y la construcción de strings. Por su simplicidad y carácter lúdico, este ejercicio funciona como un excelente punto de partida para quienes comienzan su camino como desarrolladores.

Además, el proyecto introduce el uso de Copilot como herramienta de apoyo al desarrollo. El objetivo no es solo obtener un programa funcional, sino aprender a guiar a la IA mediante instrucciones claras y progresivas, entendiendo y validando cada parte del código generado antes de avanzar al siguiente paso.

## Reglas del proyecto
Trabajar paso a paso, siguiendo el orden indicado.
No pedir todo el código en un solo prompt.
Leer y comprender el código antes de continuar al siguiente paso.
Ejecutar el proyecto usando Node.js.
Imprimir el resultado final en consola con console.log.

### Instrucciones paso a paso (Prompts para Copilot)
- Paso 1 – **Crear el archivo**
    - Pedir a Copilot que cree un archivo JavaScript llamado `excuse-generator.js`, preparado para ejecutarse con Node.js.
- Paso 2 – **Array de “quién”**
    - Pedir a Copilot que cree un array llamado who con al menos 4 sujetos posibles que puedan iniciar una excusa.
- Paso 3 – **Array de “acción”**
    - Pedir a Copilot que cree un array llamado action con acciones en pasado que puedan formar parte de una excusa.
- Paso 4 – **Array de “qué”**
    - Pedir a Copilot que cree un array llamado what con objetos o situaciones relacionadas con la excusa.
- Paso 5 – **Array de “cuándo”**
    - Pedir a Copilot que cree un array llamado when con referencias de tiempo (por ejemplo: hoy, ayer, esta mañana, etc.).
- Paso 6 – **Selección aleatoria**
    - Pedir a Copilot que genere una línea de código para obtener un valor aleatorio del array who.
    - Pedir a Copilot que genere una línea de código para obtener un valor aleatorio del array action.
    - Pedir a Copilot que genere una línea de código para obtener un valor aleatorio del array what.
    - Pedir a Copilot que genere una línea de código para obtener un valor aleatorio del array when.
    - Utilizar Math.random() y Math.floor() para la selección aleatoria.
- Paso 7 – **Construir la excusa**
    - Pedir a Copilot que concatene los valores aleatorios obtenidos en una sola frase.
    - Guardar la frase resultante en una variable llamada excuse.
- Paso 8 – **Imprimir en consola**
    - Pedir a Copilot que imprima el valor de la variable excuse usando console.log.
- Ejecución del programa
    - Ejecutar el proyecto desde la terminal con el siguiente comando:
```bash
node excuse-generator.js
```