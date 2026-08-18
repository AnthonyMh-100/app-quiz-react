# Frontend Quiz

Aplicacion web de quizzes por categorias para practicar habilidades y medir progreso.

## Funcionalidad principal

- Pantalla inicial con tarjetas de quizzes por categoria (por ejemplo: Historia, Comunicacion, Pensamiento Critico, etc.).
- Flujo de quiz por paginas/preguntas con navegacion `Siguiente` y `Anterior`.
- Validacion por pregunta: no permite avanzar ni terminar sin seleccionar una opcion.
- Calculo de resultado al finalizar (porcentaje de aciertos).
- Modal de cierre con puntaje final.
- Persistencia del progreso y resultados en `localStorage`.
- Visualizacion de estadisticas por categoria en la pantalla principal (correctas/incorrectas o estado nuevo).

## Tecnologias usadas

- `React 19`: construccion de la interfaz y logica de componentes.
- `React Router 7`: manejo de rutas y navegacion entre vistas.
- `styled-components`: estilos encapsulados y UI responsive.
- `Vite 7`: entorno de desarrollo y build.
- `ESLint 9`: reglas de calidad de codigo.

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la version de produccion.
- `npm run preview`: previsualiza el build de produccion.
- `npm run lint`: ejecuta analisis estatico con ESLint.

## Estructura general

- `src/quiz/components`: vistas principales de cada quiz y componentes de apoyo.
- `src/quiz-ui`: componentes reutilizables de interfaz del quiz.
- `src/quiz/context`: manejo de estado global con Context API.
- `src/quiz/hooks`: hooks personalizados para estado del formulario y quiz multipagina.
- `src/quiz/utils`: constantes, utilidades y helpers de calculo/persistencia.
