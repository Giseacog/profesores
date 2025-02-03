


## Practica: Cards profes

## Propósito

Aprender a implementar y manejar el binding en Angular (one-way y two-way data binding) para actualizar y mostrar dinámicamente contenido en una aplicación, aplicando conceptos clave como componentes, propiedades y eventos.

## Requisitos Previos

- Conocimientos básicos de HTML, CSS y TypeScript.
- Familiaridad con Angular CLI.
- Node.js y Angular CLI instalados.


## Estructura del Proyecto

### Estructura de archivos y carpetas

```
public/
src/
  app/
    binding/
      binding.component.css
      binding.component.html
      binding.component.ts
    app.component.css
    app.component.html
    app.component.ts
    app.config.ts
    app.routes.ts
  index.html
  main.ts
  syles.css
```

### Descripción de cada componente

- **binding**: Muestra una lista de los profesores y cursos activos, obtenidos de los datos de los profesores.

## Actividades o Tareas 

### Pasos para implementar la funcionalidad:

1. **Crear el componente `binding`**:
   - Navega al directorio `src/app`.
   - Ejecuta el siguiente comando para generar el componente `binding`:
     ```bash
     ng generate component binding
     ```
   - Este comando creará el directorio `src/app/binding` con los archivos:
     - `binding.component.ts`
     - `binding.component.html`
     - `binding.component.css`
     - `binding.component.spec.ts`

2. **Configurar el componente `binding`**:
   - Define una estructura adecuada para los datos de los profesores en `binding.component.ts`.
   - Configura la lógica para manejar los datos de los profesores.

3. **Diseñar la vista del componente `binding`**:
   - Edita el archivo `binding.component.html` para mostrar los profesores y sus cursos.

4. **Agregar estilos al componente `binding`**:
   - Edita el archivo `binding.component.css` para definir estilos que estructuraran la vista.

5. **Actualizar el componente principal (`app.component.html`)**:
   - Navega al archivo `src/app/app.component.html`.
   - Agrega el selector del componente `binding` (<app-binding></app-binding>) en el archivo principal para integrarlo en la interfaz.

## Puntos Clave

- Mostrar propiedades en el DOM utilizando `{{interpolación}}`.

## Recursos Adicionales
- [Documentación Oficial de Angular](https://angular.dev/overview)

## Ejecucion 

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.5.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Creación de código

Ejecuta `ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los archivos generados se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias mediante [Karma](https://karma-runner.github.io).

## Ejecución de pruebas end-to-end

Ejecuta `ng e2e` para realizar las pruebas end-to-end usando una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas end-to-end.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, utiliza el comando `ng help` o consulta la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

