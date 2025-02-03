import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-binding",
  standalone: true,
  imports: [],
  templateUrl: "./binding.component.html",
  styleUrl: "./binding.component.css",
})

export class BindingComponent {
  // definicion de fecha para footer
  footerDate: number = new Date().getFullYear();
  // definicion de cards
  prof1: any = {
    name: "José Pérez",
    position: "Online Teacher",
    course: "Python",
    image: "/Jose-Perez.jpg",
    descripcion:
      "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.",
    curse_image: "/Python-Symbol_0.png",
  };
  prof2: any = {
    name: "Andrea Rodríguez",
    position: "Fullstack Developer",
    course: "Angular",
    image: "/Andrea-Rodriguez.jpg",
    descripcion:
      "Angular es un Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página. Google se encarga del mantenimiento y constantes actualizaciones de mejoras para este framework.",
    curse_image: "/Angular_gradient.png",
  };
  prof3: any = {
    name: "Pedro Hernández",
    position: "Desarrollador Backend",
    course: "Bases de Datos",
    image: "/Pedro-Hernandez.jpg",
    descripcion:
      "El backend es la parte invisible pero esencial de un sitio, encargada de manejar la lógica y el procesamiento de datos necesarios para que todo funcione de manera correcta y segura.El backend se ocupa de tareas como almacenar y recuperar datos de una base de datos, procesar formularios, autenticar usuarios y gestionar la seguridad del sitio. Es responsable de toda la “magia” que sucede detrás de la interfaz visible.",
    curse_image: "database-icon",
  };
  prof4: any = {
    name: "Nancy Cuellar",
    position: "UX Designer",
    course: "Diseño UX",
    image: "/Nancy-Cuellar.jpg",
    descripcion:
      "El diseño de Experiencia de Usuario (UX) es el proceso de crear productos, sistemas o servicios que proporcionen experiencias significativas y relevantes a los usuarios. Involucra todo el proceso de adquisición e integración del producto, lo que incluye aspectos de marca, diseño, usabilidad y funcionalidad. Una gran parte del diseño UX es hacer que el producto final resulte funcional para proporcionar una experiencia positiva, eficiente y satisfactoria para el usuario.",
    curse_image: "diseno-ux",
  };
}
