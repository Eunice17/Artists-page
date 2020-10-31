import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class metalerosService {

    private metal:any[]=[
      {
        nombre: "Chuck Schuldiner",
        bio: "Charles Michael Schuldiner fue un músico estadounidense conocido por ser el cantante, guitarrista y compositor de la banda Death. Es considerado una de las personalidades más influyentes en la historia del death metal, y del heavy metal en general, así como también uno de los más grandes guitarristas de la historia del propio género. Schuldiner murió a causa de las complicaciones que le ocasionó un glioma de tronco encefálico, el 13 de diciembre de 2001.",
        img: "../../../assets/img/chuck.jpg",
        aparicion: "1967-05-13",
        talla: "1,78"
      },
      {
        nombre: "Till Lindemann",
        bio: "Till Lindemann es un cantante, actor, poeta y escritor alemán, conocido por ser vocalista y líder de la banda de metal industrial Rammstein. Es hijo del escritor alemán Werner Lindemann.",
        img: "../../../assets/img/till.jpg",
        aparicion: "1963-01-04",
        talla: "1,84"
      },
      {
        nombre: "Amy Lee",
        bio: "Amy Lynn Hartzler, más conocida como Amy Lee, es una cantante, pianista de formación clásica, diseñadora y compositora estadounidense. Es la cofundadora y vocalista de la banda estadounidense de metal alternativo Evanescence.",
        img: "../../../assets/img/amy.jpg",
        aparicion: "1981-12-13",
        talla: "1,61"    
       },
       {
        nombre: "Ronnie James Dio",
        bio: "Ronnie James Dio fue un músico estadounidense de hard rock y heavy metal, más conocido por su trabajo en bandas como Rainbow, Black Sabbath, Dio y Heaven & Hell. Considerado una de las voces más emblemáticas e influyentes de la historia del heavy metal.",
        img: "../../../assets/img/ronnie.jpg",
        aparicion: "1942-07-10",
        talla: "1,63"
      },
       {
        nombre: "Bruce Dickinson",
        bio: "Bruce Dickinson, es un cantante, productor musical, esgrimista, empresario, escritor, historiador y piloto de aviación británico. Es famoso por ser el vocalista, frontman y co-compositor de la banda de heavy metal Iron Maiden",
        img: "../../../assets/img/bruce.jpg",
        aparicion: "1958-07-08",
        talla:"1,67"
      },
        {
          nombre: "Jerry Cantrell",
          bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
          img: "../../../assets/img/terry.jpg",
          aparicion: "1966-03-18",
          talla: "1,87"    
        },
        {
          nombre: "Peter Steele",
          bio: "Peter Steele fue el bajista y compositor de la banda de metal gótico Type O Negative. Antes de unirse a Type O Negative había creado el grupo de metal Fallout y el de thrash metal Carnivore.",
          img: "../../../assets/img/peter.jpg",
          aparicion: "1962-01-04",
          talla: "1,98"
        },
        {
          nombre: "James Hetfield",
          bio: "James Alan Hetfield es un músico estadounidense conocido por ser el vocalista, guitarrista rítmico y principal compositor de la banda de thrash metal Metallica, además de ser cofundador de la misma junto con Lars Ulrich.",
          img: "../../../assets/img/james.jpg",
          aparicion: "1963-08-03",
          talla: "1,85"
        },
        {
          nombre: "Ann Wilson",
          bio: "Ann Wilson es una cantante y compositora de rock estadounidense del grupo Heart. Tuvo una formación musical clásica, su padre un oficial de la marina estadounidense, era un gran aficionado a la ópera y a la buena música popular.",
          img: "../../../assets/img/ann.jpg",
          aparicion: "1950-06-19",
          talla: "1,70"    
      },
      {
        nombre: "Dave Mustaine",
        bio: "David «Dave» Scott Mustaine es un músico estadounidense, conocido por ser el fundador, guitarrista, vocalista y principal compositor de la banda de thrash metal Megadeth, así como por ser anteriormente guitarrista de la banda Metallica.",
        img: "../../../assets/img/dave.jpg",
        aparicion: "1961-13-09",
        talla:"1,83"
      },
      {
        nombre: "Jim Morrison",
        bio: "James Douglas Morrison fue un cantautor y poeta estadounidense, célebre por ser el vocalista de la mítica banda de rock The Doors. Debido a sus canciones, personalidad y actuaciones, es considerado por críticos y admiradores como uno de los cantantes más representativos e influyentes de la historia del rock.",
        img: "../../../assets/img/chino.jpg",
        aparicion: "1943-12-08",
        talla: "1,80"    
    },
      {
        nombre: "Ozzy Osbourne",
        bio: "John Michael Osbourne, más conocido como Ozzy Osbourne, es un músico y compositor británico, reconocido por haber sido el cantante de la banda de heavy metal Black Sabbath y por su carrera como solista.",
        img: "../../../assets/img/ozzy.jpg",
        aparicion: "1948-12-03",
        talla: "1,78"
      },
      {
        nombre: "Jeff Buckley",
        bio: "Jeffrey Scott \"Jeff Buckley\" fue un músico y cantautor estadounidense de rock alternativo, reconocido por la revista Rolling Stone como una de las mejores voces en su lista de cantantes de música popular anglosajona.",
        img: "../../../assets/img/jeff.jpg",
        aparicion: "1966-11-17",
        talla: "1,71"
      },
      {
        nombre: "Varg Vikernes",
        bio: "Varg Vikernes, es un músico multiinstrumentista, compositor, cantante y uno de los pioneros de la escena musical del black metal noruego. Cumplió 16 años en prisión a causa del asesinato de \"Euronymous\".",
        img: "../../../assets/img/varc.jpg",
        aparicion: "1973-11-02",
        talla: "1,80"
      },
        {
          nombre: "James LaBrie",
          bio: "Kevin James LaBrie es un tenor canadiense, cantante de la banda de metal progresivo Dream Theater. Nació el 5 de mayo de 1963 en Penetanguishene, una ciudad de Ontario, Canadá. Sus padres dicen que cuando tenía tres años andaba siempre cantando la canción que sonara en la radio en el momento disfrutando de un suso de crema.",
          img: "../../../assets/img/JamesLabrie.jpg",
          aparicion: "1965-05-05",
          talla: "1,83"    
        },
        {
          nombre: "Phil Anselmo",
          bio: "Philip Hansen Anselmo, más conocido como Phil Anselmo, es un músico estadounidense, reconocido por haber sido vocalista de la banda de groove metal Pantera.",
          img: "../../../assets/img/phil.jpg",
          aparicion: "1968-06-30",
          talla: "1,82"
        },
        {
          nombre: "Layne Staley",
          bio: "Layne Thomas Staley fue un músico estadounidense, vocalista y letrista de Alice in Chains, una de las cuatro bandas más importantes del movimiento rock alternativo y grunge en Seattle. La banda se hizo famosa por su distintivo estilo vocal.",
          img: "../../../assets/img/layne.jpg",
          aparicion: "1967-22-08",
          talla:"1,84"
        },
        {
          nombre: "Glenn Danzig",
          bio: "Es un músico estadounidense. Es cantante, compositor y escritor. Danzig es el fundador de las bandas The Misfits, Samhain y Danzig. Es considerado como uno de los creadores del género horror punk.",
          img: "../../../assets/img/danzig.jpg",
          aparicion: "1955-23-06",
          talla: "1,63"    
      },
        {
            nombre: "Rob Halford",
            bio: "Robert John Arthur Halford es un músico británico de heavy metal especialmente conocido por ser el vocalista principal de la banda británica de heavy metal Judas Priest. Considerado por los seguidores del género como uno de los mejores y más influyentes cantantes de la historia del metal.",
            img: "../../../assets/img/rob.jpg",
            aparicion: "1951-08-25",
            talla: "1,80"    
        },
        {
          nombre: "Michael Kiske",
          bio: "Michael Kiske es un cantante alemán conocido por ser el vocalista principal de la banda alemana de power metal Helloween, desde 1986 hasta 1993, y desde su retorno en 2017. Kiske es poseedor de una grandiosa y poderosa voz, de un rango vocal de cerca de cuatro octavas. Es reconocido mundialmente como la voz del metal melódico y una de las figuras más importantes del género. Es considerado como una de las mejores voces de todo el heavy metal en general.",
          img: "../../../assets/img/kiske.jpg",
          aparicion: "1968-01-24",
          talla: "1,89"    
      },
        {
            nombre: "Joan Jett",
            bio: "Joan Jett es una cantante, compositora, guitarrista, productora y ocasionalmente actriz estadounidense. Es conocida por haber sido la vocalista de The Runaways y de The Blackhearts y por sus éxitos «I Love Rock 'N Roll», que fue número uno en las listas de Billboard desde el 20 de marzo hasta el 8 de mayo de 1982.",
            img: "../../../assets/img/jet.jpg",
            aparicion: "1958-09-22",
            talla: "1,66"    
        }
      ];
      public getMetaleros(){
          return this.metal;
      }
    constructor(){
        
    }
}