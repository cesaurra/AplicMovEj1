/*Se debe inicializar desde un archivo llamado js la lógica necesaria para generar la instancia de vue y montarla sobre una clase asociada a un contenedor dentro del html. 
Ejemplo:  <div class =”contenedor”>*/

const app = new Vue({
    el: '.contenedor',

    
    data: {

        juegos: [
            {
                nombre: "Super Mario Bros",
                anio: 1986,
                portada: "img/super_mario.jpg",
                alt: "Super Mario Bros Primer juego",
                calificacion: 8,
                consola: [
                    "PC", "NES", "Switch"
                ]
            },
            {
                nombre: "Mortal Kombat",
                anio: 1993,
                portada: "img/mk2.jpg",
                alt: "Mortal Kombat 2",
                calificacion: 9,
                consola: [
                    "PC", "PS1", "PS2"
                ]
            },
            {
                nombre: "Street Fighter",
                anio: 1987,
                portada: "img/sf2.jpg",
                alt: "Street Figther",
                calificacion: 7,
                consola: [
                    "Super NES", "GameBoy", "PS2"
                ]

            },
            {
                nombre: "Bubble Bobble",
                anio: 1985,
                portada: "img/BB.jpg",
                alt: "bubble bobble",
                calificacion: 4,
                consola: [
                    "Arcade", "Nintendo"
                ]

            },
        ]

    }



})