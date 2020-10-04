import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class metalerosService {

    private metal:any[]=[
        {
          nombre: "Bruce Dickinson",
          bio: "Bruce Dickinson, es un cantante, productor musical, esgrimista, empresario, escritor, historiador y piloto de aviación británico. Es famoso por ser el vocalista, frontman y co-compositor de la banda de heavy metal Iron Maiden",
          img: "../../../assets/img/bruce.jpg",
          aparicion: "1958-07-08",
          talla:"1,67"
        },
        {
          nombre: "Layne Staley",
          bio: "Layne Thomas Staley fue un músico estadounidense, vocalista y letrista de Alice in Chains, una de las cuatro bandas más importantes del movimiento rock alternativo y grunge en Seattle. La banda se hizo famosa por su distintivo estilo vocal.",
          img: "../../../assets/img/layne.jpg",
          aparicion: "1967-22-08",
          talla:"1,84"
        },
        {
          nombre: "Varg Vikernes",
          bio: "Varg Vikernes, es un músico multiinstrumentista, compositor, cantante y uno de los pioneros de la escena musical del black metal noruego. Cumplió 16 años en prisión a causa del asesinato de \"Euronymous\".",
          img: "../../../assets/img/varc.jpg",
          aparicion: "1973-11-02",
          talla: "1,80"
        },
        {
          nombre: "Dave Mustaine",
          bio: "David «Dave» Scott Mustaine es un músico estadounidense, conocido por ser el fundador, guitarrista, vocalista y principal compositor de la banda de thrash metal Megadeth, así como por ser anteriormente guitarrista de la banda Metallica.",
          img: "../../../assets/img/dave.jpg",
          aparicion: "1961-13-09",
          talla:"1,83"
        },
        {
          nombre: "Ozzy Osbourne",
          bio: "John Michael Osbourne, más conocido como Ozzy Osbourne, es un músico y compositor británico, reconocido por haber sido el cantante de la banda de heavy metal Black Sabbath y por su carrera como solista.",
          img: "../../../assets/img/ozzy.jpg",
          aparicion: "1948-12-03",
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
          nombre: "James Hetfield",
          bio: "James Alan Hetfield es un músico estadounidense conocido por ser el vocalista, guitarrista rítmico y principal compositor de la banda de thrash metal Metallica, además de ser cofundador de la misma junto con Lars Ulrich.",
          img: "../../../assets/img/james.jpg",
          aparicion: "1963-08-03",
          talla: "1,85"
        },
        {
          nombre: "Peter Steele",
          bio: "Peter Steele fue el bajista y compositor de la banda de metal gótico Type O Negative. Antes de unirse a Type O Negative había creado el grupo de metal Fallout y el de thrash metal Carnivore.",
          img: "../../../assets/img/peter.jpg",
          aparicion: "1962-01-04",
          talla: "1,98"
        },
        {
          nombre: "Phil Anselmo",
          bio: "Philip Hansen Anselmo, más conocido como Phil Anselmo, es un músico estadounidense, reconocido por haber sido vocalista de la banda de groove metal Pantera.",
          img: "../../../assets/img/phil.jpg",
          aparicion: "1968-06-30",
          talla: "1,82"
        },
            {
          nombre: "Jeff Buckley",
          bio: "Jeffrey Scott \"Jeff Buckley\" fue un músico y cantautor estadounidense de rock alternativo, reconocido por la revista Rolling Stone como una de las mejores voces en su lista de cantantes de música popular anglosajona.",
          img: "../../../assets/img/jeff.jpg",
          aparicion: "1966-11-17",
          talla: "1,71"
        },
        {
          nombre: "Ronnie James Dio",
          bio: "Ronnie James Dio fue un músico estadounidense de hard rock y heavy metal, más conocido por su trabajo en bandas como Rainbow, Black Sabbath, Dio y Heaven & Hell. Considerado una de las voces más emblemáticas e influyentes de la historia del heavy metal.",
          img: "../../../assets/img/ronnie.jpg",
          aparicion: "1942-07-10",
          talla: "1,63"
        },
        {
          nombre: "Jerry Cantrell",
          bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
          img: "../../../assets/img/terry.jpg",
          aparicion: "1966-03-18",
          talla: "1,87"    
        },
        {
            nombre: "Amy Lee",
            bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
            img: "../../../assets/img/amy.jpg",
            aparicion: "1966-03-18",
            talla: "1,87"    
        },
        {
            nombre: "Ann Wilson",
            bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
            img: "../../../assets/img/ann.jpg",
            aparicion: "1966-03-18",
            talla: "1,87"    
        },
        {
            nombre: "Rob Halford",
            bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
            img: "../../../assets/img/rob.jpg",
            aparicion: "1966-03-18",
            talla: "1,87"    
        },
        {
            nombre: "Corey Taylor",
            bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
            img: "../../../assets/img/corey.jpg",
            aparicion: "1966-03-18",
            talla: "1,87"    
        },
        {
            nombre: "Jim Morrison",
            bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
            img: "../../../assets/img/chino.jpg",
            aparicion: "1966-03-18",
            talla: "1,87"    
        },
        {
            nombre: "Joan Jett",
            bio: "Jerry Fulton Cantrell Jr. es un músico estadounidense, popular por ser el guitarrista y vocalista de la agrupación Alice in Chains además de ser el compositor de la mayoría de las canciones de su discografía.",
            img: "../../../assets/img/jet.jpg",
            aparicion: "1966-03-18",
            talla: "1,87"    
        }
      ];
      public getMetaleros(){
          return this.metal;
      }
    constructor(){
        
    }
}