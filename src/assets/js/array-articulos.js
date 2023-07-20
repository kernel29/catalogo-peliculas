/*
{
     nombre: '',
     imgMini: '/assets/img-mini/.jpg',
     imgGrande: '/assets/img-grande/.jpg',
     sinopsis: '',
     genero: [],
     tipo: pelicula
},

{
     nombre: '',
     imgMini: '/assets/img-mini/.jpg',
     imgGrande: '/assets/img-grande/.jpg',
     sinopsis: '',
     genero: [],
     tipo: pelicula
},

{
     nombre: '',
     imgMini: '/assets/img-mini/.jpg',
     imgGrande: '/assets/img-grande/.jpg',
     sinopsis: '',
     genero: [],
     tipo: pelicula
},
*/

const pelicula = 'pelicula',
      serie    = 'serie';

const generos = {
      accion:      'accion',
      terror:      'terror',
      romance:     'romance',
      drama:       'drama',
      belico:      'belico',
      suspenso:    'suspenso',
      comedia:     'comedia',
      superheroes: 'superheroes',
      animacion:   'animacion',
      infantil:    'infantil',
      familiar:    'familiar',
      religioso:   'religioso',
      anime:       'anime',
      ciencia:     'ciencia ficcion'
}

const {accion, terror, romance, drama, belico, suspenso, comedia, superheroes, animacion, infantil, familiar, religioso, anime, ciencia} = generos;



export const articulos = [

     {
          nombre: 'Shooting Stars',
          imgMini: '/assets/img-mini/shooting stars.jpg',
          imgGrande: '/assets/img-grande/shooting stars.jpg',
          sinopsis: 'Este drama deportivo se centra en los inicios de la carrera de LeBron James, cuando jugaba junto a sus amigos de la escuela secundaria y empezaba a convertirse en una estrella del básquetbol buscado por los equipos de la NBA.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'The Flash',
          imgMini: '/assets/img-mini/Flash.jpg',
          imgGrande: '/assets/img-grande/Flash.jpg',
          sinopsis: 'Veremos como Barry Allen  usa sus superpoderes para viajar en el tiempo y salvar la vida de su madre Nora asesinada por un individuo, y a la vez salvar de la cárcel a su padre como único acusado, todo ello a pesar de que Bruce Wayne le advierte que no lo haga por las graves consecuencias que podría ocasionar.',
          genero: [accion, superheroes],
          tipo: pelicula
     },
     
     {
          nombre: 'Krakens y Sirenas',
          imgMini: '/assets/img-mini/Krakens y sirenas.jpg',
          imgGrande: '/assets/img-grande/Krakens y sirenas.jpg',
          sinopsis: 'Una tímida adolescente se entera de que procede de una legendaria familia real de legendarios krakens marinos y de que su destino se encuentra en las profundidades de las aguas, que es más grande de lo que jamás podría haber imaginado.',
          genero: [animacion, infantil],
          tipo: pelicula
     },
     
     {
          nombre: 'Bird Box Barcelona A Ciegas 2 ',
          imgMini: '/assets/img-mini/bird box 2.jpg',
          imgGrande: '/assets/img-grande/bird box 2.jpg',
          sinopsis: 'Después de que una entidad de origen misterioso aniquile a la población mundial y provoque que quienes la observen se quiten la vida, Sebastián y su hija comienzan su propia gran aventura de supervivencia en Barcelona.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Demonio Negro',
          imgMini: '/assets/img-mini/el demonio negro.jpg',
          imgGrande: '/assets/img-grande/el demonio negro.jpg',
          sinopsis: 'Mientras Paul Sturges se va de vacaciones a Bahía Azul con su familia, desde las profundidades del mar se eleva un enorme megalodón conocido como El Demonio Negro.',
          genero: [suspenso],
          tipo: pelicula
     },
     
     {
          nombre: 'La Leyenda de los Chaneques',
          imgMini: '/assets/img-mini/la leyenda de los chaneques.jpg',
          imgGrande: '/assets/img-grande/la leyenda de los chaneques.jpg',
          sinopsis: 'Cinco años después de renunciar a sus poderes, Nando acompaña a Leo San Juan en su camino a Veracruz, cuando una antigua maldición local golpea. Esta vez Leo no tiene poderes, ni amigos, ni tiempo, y aparentemente ninguna oportunidad.',
          genero: [animacion, infantil],
          tipo: pelicula
     },
     
     {
          nombre: 'Rugrats Volumen 1',
          imgMini: '/assets/img-mini/rugrats vol 1.jpg',
          imgGrande: '/assets/img-grande/rugrats vol 1.jpg',
          sinopsis: 'Reboot de la mítica serie de animación de los 90 que sigue de nuevo las divertidas aventuras de la pequeña pandilla de bebés formada por Tommy, Chuckie, Angelica, Phil, Lil y Susie.',
          genero: [animacion, infantil],
          tipo: serie
     },

     {
          nombre: 'Un Lugar Por El Que Luchar',
          imgMini: '/assets/img-mini/Un lugar por el que luchar.jpg',
          imgGrande: '/assets/img-grande/Un lugar por el que luchar.jpg',
          sinopsis: 'Sigue a Myriam, una activista ecológica que lucha contra la construcción de una presa en un bosque, y a Greg, un oficial de policía que trabaja de incógnito para recopilar información sobre este movimiento de manifestantes.',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'Transformers El despertar de las bestias',
          imgMini: '/assets/img-mini/Transformers El despertar de las bestias.jpg',
          imgGrande: '/assets/img-grande/Transformers El despertar de las bestias.jpg',
          sinopsis: 'Un par de arqueólogos se ven envueltos en un antiguo conflicto a través de una aventura por todo el mundo que se relaciona con tres facciones de Transformers: los Maximals, los Predacons y los Terrorcons.',
          genero: [accion, ciencia],
          tipo: pelicula
     },
     
     {
          nombre: 'Mi papa es un peligro',
          imgMini: '/assets/img-mini/Mi papa es un peligro.jpg',
          imgGrande: '/assets/img-grande/Mi papa es un peligro.jpg',
          sinopsis: 'Cuando Sebastián le dice a su padre Salvo, un inmigrante italiano conservador, que va a casarse con su novia americana, Salvo insiste en pasar un fin de semana con los padres de ella.',
          genero: [comedia],
          tipo: pelicula
     },
     
     {
          nombre: 'Asteroid City',
          imgMini: '/assets/img-mini/Asteroid City.jpg',
          imgGrande: '/assets/img-grande/Asteroid City.jpg',
          sinopsis: 'Una convención de jóvenes astrónomos se ve alterada por unos acontecimientos que van a cambiar el mundo de todos los presentes.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Black Mirror Temporada 1 y 2',
          imgMini: '/assets/img-mini/black mirror 1 y 2.jpg',
          imgGrande: '/assets/img-grande/black mirror 1 y 2.jpg',
          sinopsis: 'Serie antológica con relatos de ciencia ficción sobre una sociedad que se beneficia de la tecnología hasta llevarla a las más extrañas consecuencias.',
          genero: [suspenso, ciencia],
          tipo: serie
     },

     {
          nombre: 'Guardianes de la Galaxia vol 3',
          imgMini: '/assets/img-mini/Guardianes de la galaxia vol 3 ver2.jpg',
          imgGrande: '/assets/img-grande/Guardianes de la galaxia vol 3 ver2.jpg',
          sinopsis: 'Todavía conmocionado por la pérdida de Gamora, Peter Quill reúne a su equipo para defender el universo y a uno de los suyos, una misión que podría significar el fin de los Guardianes si no tienen éxito.',
          genero: [accion, superheroes],
          tipo: pelicula
     },
     
     {
          nombre: 'Unos Suegros de Armas Tomar',
          imgMini: '/assets/img-mini/Unos suegros de armas tomar.jpg',
          imgGrande: '/assets/img-grande/Unos suegros de armas tomar.jpg',
          sinopsis: 'Sigue a un gerente de banco a punto de casarse con el amor de su vida. Cuando su banco es asaltado por unos infames bandidos fantasmas durante la semana de su boda, cree que sus futuros suegros son los infames forajidos.',
          genero: [comedia, accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Los Iniciados',
          imgMini: '/assets/img-mini/Los Iniciados.jpg',
          imgGrande: '/assets/img-grande/Los Iniciados.jpg',
          sinopsis: 'La investigación del reportero Frank Molina sobre un asesinato, destapará una conspiración inesperada que afectará a toda una ciudad.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Frio en los Huesos',
          imgMini: '/assets/img-mini/El frio en los huesos.jpg',
          imgGrande: '/assets/img-grande/El frio en los huesos.jpg',
          sinopsis: 'Ambientada durante una tormenta muy violenta, dos hermanos criminales que huyen buscan refugio en una desolada granja. Al capturar a la familia residente, descubren que la casa guarda sus propios y oscuros secretos.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Sisu',
          imgMini: '/assets/img-mini/sisu.jpg',
          imgGrande: '/assets/img-grande/sisu.jpg',
          sinopsis: 'En el desierto de Laponia, un soldado retirado descubre oro. Ahora intenta traer su botín a la ciudad y debe enfrentarse a un grupo de soldados nazis que harán todo lo posible para truncar sus planes.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Caballeros del Zodiaco la pelicula',
          imgMini: '/assets/img-mini/Caballeros del Zodiaco la pelicula.jpg',
          imgGrande: '/assets/img-grande/Caballeros del Zodiaco la pelicula.jpg',
          sinopsis: 'Cuando una diosa de la guerra reencarna en el cuerpo de una joven, un huérfano sin hogar llamado Seiya descubre que está destinado a protegerla y salvar al mundo.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Number Number',
          imgMini: '/assets/img-mini/number number.jpg',
          imgGrande: '/assets/img-grande/number number.jpg',
          sinopsis: 'Cuando un policía encubierto recibe el encargo de investigar un histórico robo de oro en Johannesburgo, se ve obligado a elegir entre su conciencia y la ley.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Eliminar',
          imgMini: '/assets/img-mini/eliminar.jpg',
          imgGrande: '/assets/img-grande/eliminar.jpg',
          sinopsis: 'Una pareja de amantes planea una nueva vida juntos cuando descubre un teléfono que puede hacer desaparecer de la faz de la Tierra a otras personas.',
          genero: [suspenso],
          tipo: serie
     },
     
     {
          nombre: 'A travez del mar',
          imgMini: '/assets/img-mini/A travez del mar.jpg',
          imgGrande: '/assets/img-grande/A travez del mar.jpg',
          sinopsis: 'Sigue a Raquel y Ares mientras enfrentan desafíos en el próximo capítulo de su relación y sus vidas individuales. Secuela de a través de mi ventana.',
          genero: [romance, drama],
          tipo: pelicula
     },
     
     {
          nombre: 'El Pacto',
          imgMini: '/assets/img-mini/El Pacto.jpg',
          imgGrande: '/assets/img-grande/El Pacto.jpg',
          sinopsis: 'Sigue al sargento John Kinley, uno de los únicos sobrevivientes en su último periodo de servicio en Afganistán, y como decide regresar a zona de guerra para recuperar a su amigo Ahmed y su familia.',
          genero: [accion, belico],
          tipo: pelicula
     },
     
     {
          nombre: 'El gran George Foreman',
          imgMini: '/assets/img-mini/El gran George Foreman.jpg',
          imgGrande: '/assets/img-grande/El gran George Foreman.jpg',
          sinopsis: 'Superando una infancia marcada por la pobreza para convertirse en uno de los jóvenes boxeadores más prometedores del mundo.',
          genero: [drama],
          tipo: pelicula
     },
     
     {
          nombre: 'Gran Tsunami',
          imgMini: '/assets/img-mini/Gran Tsunami.jpg',
          imgGrande: '/assets/img-grande/Gran Tsunami.jpg',
          sinopsis: 'Un tsunami irrumpe repentinamente, atrapando a Jiang Peng y a su hija Jiang Xiao Hu, en el barrio chino de un país del sudeste asiático. Ambos, junto con otros habitantes, se preparan para luchar contra la calamidad que se avecina. Sin embargo, después de superar el desastre natural, deberán enfrentar otra batalla de vida o muerte: un cocodrilo monstruoso y gigante.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La Inspeccion',
          imgMini: '/assets/img-mini/La Inspeccion.jpg',
          imgGrande: '/assets/img-grande/La Inspeccion.jpg',
          sinopsis: 'Un joven negro gay, rechazado por su madre y con pocas opciones para su futuro, decide unirse a la Marina, haciendo lo que sea necesario para triunfar en un sistema que lo dejaría de lado.',
          genero: [drama],
          tipo: pelicula
     },
     
     {
          nombre: 'Black Clover La espada del rey mago',
          imgMini: '/assets/img-mini/Black Clover La espada del rey mago.jpg',
          imgGrande: '/assets/img-grande/Black Clover La espada del rey mago.jpg',
          sinopsis: 'Es la primera película de la franquicia Black Clover y contará una historia totalmente nueva. Asta conocerá al antiguo Rey Mago y a un montón de personajes nuevos y que regresan.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mision rescate 2',
          imgMini: '/assets/img-mini/Mision rescate 2.jpg',
          imgGrande: '/assets/img-grande/Mision rescate 2.jpg',
          sinopsis: 'Rake regresa como mercenario de operaciones encubiertas al que se encomienda otra misión suicida: rescatar a la maltrecha familia de un despiadado gángster de la prisión donde se encuentra recluida.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'La Piscina Infinita',
          imgMini: '/assets/img-mini/La Piscina Infinita.jpg',
          imgGrande: '/assets/img-grande/La Piscina Infinita.jpg',
          sinopsis: 'James y Em Foster disfrutan de unas vacaciones de playa en la isla de La Tolqa, cuando un accidente revela la perversa subcultura del turismo hedonista, la violencia y el horror surrealista que habitan en el lugar.',
          genero: [terror, suspenso],
          tipo: pelicula
     },
     
     {
          nombre: 'El Maestro de las Sombras',
          imgMini: '/assets/img-mini/el maestro de las sombras.jpg',
          imgGrande: '/assets/img-grande/el maestro de las sombras.jpg',
          sinopsis: 'Después de ser asesinado por un grupo de criminales, un hombre renace con superpoderes similares a los de los animales y tiene como misión corregir los errores de su ciudad.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Amor al primer mensaje',
          imgMini: '/assets/img-mini/Amor al primer mensaje.jpg',
          imgGrande: '/assets/img-grande/Amor al primer mensaje.jpg',
          sinopsis: 'Una joven intenta aliviar el dolor de la muerte de su prometido enviandole textos románticos a su antiguo número de celular, y forma una conexión con el hombre al que ha sido reasignado su número.',
          genero: [romance, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 10',
          imgMini: '/assets/img-mini/Rapido y Furioso 10.jpg',
          imgGrande: '/assets/img-grande/Rapido y Furioso 10.jpg',
          sinopsis: 'Para su desenlace, Dom Toretto vuelve a la carga con más carreras, velocidad y acción desenfrenada. Esta vez, él y su familia son el objetivo de Dante (Interpretado por Jason Momoa), que ha jurado vengarse y destruir a Toretto y a los suyos.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'La Sirenita',
          imgMini: '/assets/img-mini/La Sirenita.jpg',
          imgGrande: '/assets/img-grande/La Sirenita.jpg',
          sinopsis: 'Una joven sirena hace un trato con una bruja marina para cambiar su hermosa voz por piernas humanas para poder descubrir el mundo sobre el agua e impresionar a un príncipe.',
          genero: [infantil, romance, familiar],
          tipo: pelicula
     },
     
     {
          nombre: 'Culpa mia',
          imgMini: '/assets/img-mini/Culpa mia.jpg',
          imgGrande: '/assets/img-grande/Culpa mia.jpg',
          sinopsis: 'Noah tiene que dejar atrás su pueblo, su novio, sus amigos y mudarse a la mansión del nuevo esposo rico de su madre. Allí conoce a Nick, su nuevo hermanastro y el choque de sus fuertes personalidades se hace evidente desde el primer momento.',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'Flamin hot',
          imgMini: '/assets/img-mini/Flamin hot.jpg',
          imgGrande: '/assets/img-grande/Flamin hot.jpg',
          sinopsis: 'Richard Montañez, el conserje de Frito Lay que canalizó su herencia y educación mexicoamericanas para convertir Flamin Hot Cheetos en un snack que trastornó la industria alimentaria y se convirtió en un fenómeno mundial.',
          genero: [drama],
          tipo: pelicula
     },
     
     {
          nombre: 'Detectives en guerra',
          imgMini: '/assets/img-mini/Detectives en guerra.jpg',
          imgGrande: '/assets/img-grande/Detectives en guerra.jpg',
          sinopsis: 'Cuando Hong Kong se ve sacudido por múltiples asesinatos espantosos, la policía forma un grupo de trabajo para investigar. Jun, una vez un brillante detective que sufrió un colapso mental, comienza su propia investigación. Eventualmente, la policía descubre que las víctimas del asesinato son todos los sospechosos de casos sin resolver.',
          genero: [accion, suspenso],
          tipo: pelicula
     },
     
     {
          nombre: 'La herencia de la mafia',
          imgMini: '/assets/img-mini/La herencia de la mafia.jpg',
          imgGrande: '/assets/img-grande/La herencia de la mafia.jpg',
          sinopsis: 'Una madre estadounidense hereda el imperio mafioso de su abuelo en Italia. Guiada por los "consigliere" de la mafia, ella consigue superar las expectativas de todos como nueva jefa de la familia.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Medellin',
          imgMini: '/assets/img-mini/Medellin.jpg',
          imgGrande: '/assets/img-grande/Medellin.jpg',
          sinopsis: 'Para salvar a su hermano pequeño de un peligroso cartel de Medellín, Reda tiene un plan loco: reunir un equipo y llevar a cabo una redada en Colombia. Pero esta locura de plan se le va de las manos y acaban con problemas con los narcos',
          genero: [comedia, accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Maravilloso Desastre',
          imgMini: '/assets/img-mini/Maravilloso Desastre.jpg',
          imgGrande: '/assets/img-grande/Maravilloso Desastre.jpg',
          sinopsis: 'Abby, una universitaria novata, intenta distanciarse de su oscuro pasado mientras resiste la atracción que siente por Travis, un chico malo.',
          genero: [romance, drama],
          tipo: pelicula
     },
     
     {
          nombre: 'Mixed by Erry',
          imgMini: '/assets/img-mini/Mixed by Erry.jpg',
          imgGrande: '/assets/img-grande/Mixed by Erry.jpg',
          sinopsis: 'El auge y la caída del imperio pirata de mixtapes de tres hermanos de Nápoles y sus casetes con la marca registrada "Mixed by Erry" que llevaron la música pop a la juventud italiana de la década de 1980.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Hasta el final',
          imgMini: '/assets/img-mini/Hasta el final.jpg',
          imgGrande: '/assets/img-grande/Hasta el final.jpg',
          sinopsis: 'Una antigua campeona de boxeo se embarca en el combate de su vida cuando va en busca de su hermana desaparecida.',
          genero: [suspenso],
          tipo: pelicula
     },
     
     {
          nombre: 'Una vida maravillosa',
          imgMini: '/assets/img-mini/Una vida maravillosa.jpg',
          imgGrande: '/assets/img-grande/Una vida maravillosa.jpg',
          sinopsis: 'Elliott, un joven pescador con una voz extraordinaria, consigue una oportunidad única cuando Suzanne, directora musical, lo descubre en una fiesta.',
          genero: [drama],
          tipo: pelicula
     },
     
     {
          nombre: 'Sangre y Oro',
          imgMini: '/assets/img-mini/Sangre y Oro.jpg',
          imgGrande: '/assets/img-grande/Sangre y Oro.jpg',
          sinopsis: 'Al final de la Segunda Guerra Mundial, un desertor alemán y una joven se ven envueltos en una batalla brutal contra un grupo de soldados nazis que buscan oro escondido.',
          genero: [accion, belico],
          tipo: pelicula
     },

     {
          nombre: 'Tin y Tina',
          imgMini: '/assets/img-mini/Tin y Tina.jpg',
          imgGrande: '/assets/img-grande/Tin y Tina.jpg',
          sinopsis: 'Tras un trágico aborto, Lola y su marido deciden adoptar a Tin y Tina, unos angelicales hermanos con una educación ultracatólica que les induce a interpretar la Biblia de forma literal, sin distinguir lo que está bien de lo que está mal.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'John Wick 4',
          imgMini: '/assets/img-mini/John Wick 4.jpg',
          imgGrande: '/assets/img-grande/John Wick 4.jpg',
          sinopsis: 'John Wick descubre un camino para derrotar a La Mesa, pero, antes de que pueda ganar su libertad, Wick debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Citadel',
          imgMini: '/assets/img-mini/citadel.jpg',
          imgGrande: '/assets/img-grande/citadel.jpg',
          sinopsis: 'La agencia mundial de espionaje Citadel ha caído y la memoria de sus agentes ha sido borrada. Ahora, el poderoso sindicato Manticore se alza en el vacío. ¿Podrán los agentes de Citadel recordar su pasado y reunir fuerzas para contraatacar?',
          genero: [accion],
          tipo: serie
     },
     
     {
          nombre: 'Fubar',
          imgMini: '/assets/img-mini/fubar.jpg',
          imgGrande: '/assets/img-grande/fubar.jpg',
          sinopsis: 'Cuando un hombre y su hija descubren que los dos trabajan para la CIA en secreto, una misión encubierta de alta tensión se convierte en una peliaguda reunión familiar.',
          genero: [accion],
          tipo: serie
     },

     {
          nombre: 'Pearl',
          imgMini: '/assets/img-mini/Pearl.jpg',
          imgGrande: '/assets/img-grande/Pearl.jpg',
          sinopsis: 'Pearl está ambientada en 1918 durante la Primera Guerra Mundial, explorando la historia de fondo del personaje y cómo llegó a ser la villana que es en X (equis).',
          genero: [terror],
          tipo: pelicula
     },
     
     {
          nombre: 'Dia de la madre.jpg',
          imgMini: '/assets/img-mini/Dia de la madre.jpg',
          imgGrande: '/assets/img-grande/Dia de la madre.jpg',
          sinopsis: 'Una exagente especial desempolva sus habilidades letales para salvar al hijo que nunca conoció, sin importar quién se cruce en su camino.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Crater',
          imgMini: '/assets/img-mini/crater.jpg',
          imgGrande: '/assets/img-grande/crater.jpg',
          sinopsis: 'Tras el fallecimiento de su padre, un niño que vive en una colonia minera lunar emprende un viaje con sus cuatro mejores amigos para explorar un planeta de fábula antes de ser trasladado permanentemente a otro planeta.',
          genero: [drama, familiar],
          tipo: pelicula
     },

     {
          nombre: 'La Piscina',
          imgMini: '/assets/img-mini/La Piscina.jpg',
          imgGrande: '/assets/img-grande/La Piscina.jpg',
          sinopsis: 'Una pareja queda atrapada en una piscina de 6 metros de profundidad con un depredador mortal.',
          genero: [suspenso],
          tipo: pelicula
     },
     
     {
          nombre: 'Los blancos no saben saltar',
          imgMini: '/assets/img-mini/Los blancos no saben saltar.jpg',
          imgGrande: '/assets/img-grande/Los blancos no saben saltar.jpg',
          sinopsis: 'Jeremy, un exjugador de baloncesto que vio truncada su carrera por las lesiones, se alía a una expromesa  en un último intento por vivir sus sueños.',
          genero: [drama, comedia],
          tipo: pelicula
     },
     
     {
          nombre: 'La Princesa Encantada',
          imgMini: '/assets/img-mini/La princesa encantada.jpg',
          imgGrande: '/assets/img-grande/La princesa encantada.jpg',
          sinopsis: 'Mientras Uberta se prepara para entregar el cetro real a Odette y Derek, otra reina planea arruinar la coronación.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Super Mario Bros',
          imgMini: '/assets/img-mini/Super Mario.jpg',
          imgGrande: '/assets/img-grande/Super Mario.jpg',
          sinopsis: 'Con la ayuda del champiñón local Toad y unas cuantas nociones de combate de la guerrera líder del Reino Champiñón, la princesa Peach, Mario descubre todo el poder que alberga en su interior.',
          genero: [animacion, infantil],
          tipo: pelicula
     },
     
     {
          nombre: 'La Madre',
          imgMini: '/assets/img-mini/La Madre.jpg',
          imgGrande: '/assets/img-grande/La Madre.jpg',
          sinopsis: 'Mientras huye de unos peligrosos atacantes, una asesina sale de su escondite para proteger a su hija, a la que abandonó hace un tiempo atrás.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Posesion Infernal 2 Despertar',
          imgMini: '/assets/img-mini/Posesion Infernal 2 Despertar.jpg',
          imgGrande: '/assets/img-grande/Posesion Infernal 2 Despertar.jpg',
          sinopsis: 'Beth visita a su hermana mayor, Ella, que está criando a 3 niños en un pequeño apartamento en Los Ángeles. Su reunión es muy corta cuando encuentran un libro demoníaco, The Necronomicon Ex-Mortis.',
          genero: [terror],
          tipo: pelicula
     },
     
     {
          nombre: 'Air',
          imgMini: '/assets/img-mini/Air.jpg',
          imgGrande: '/assets/img-grande/Air.jpg',
          sinopsis: 'Sigue la historia del vendedor de calzado Sonny Vaccaro, y cómo él llevó a Nike en su búsqueda del mejor atleta en la historia del baloncesto: Michael Jordan.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Sombras de un crimen',
          imgMini: '/assets/img-mini/Sombras de un crimen.jpg',
          imgGrande: '/assets/img-grande/Sombras de un crimen.jpg',
          sinopsis: 'A fines de la década de 1930, un detective inquietante y con mala suerte, es contratado para encontrar al ex amante de una heredera glamorosa.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Black Knight',
          imgMini: '/assets/img-mini/black night.jpg',
          imgGrande: '/assets/img-grande/black night.jpg',
          sinopsis: 'En un futuro distópico, en un mundo asolado por la contaminación, la supervivencia de la humanidad depende de un grupo de repartidores de élite.',
          genero: [accion],
          tipo: serie
     },
     
     {
          nombre: 'Uno para morir',
          imgMini: '/assets/img-mini/Uno para morir.jpg',
          imgGrande: '/assets/img-grande/Uno para morir.jpg',
          sinopsis: 'La historia sigue a siete extraños que se despiertan en una mansión a la mitad de la nada para descubrir que son parte de un retorcido juego. Ellos tienen 60 minutos para elegir a una persona para morir; de otro modo, todos ellos serán asesinados.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: '13 El Pabellon de la muerte',
          imgMini: '/assets/img-mini/13 El Pabellon de la muerte.jpg',
          imgGrande: '/assets/img-grande/13 El Pabellon de la muerte.jpg',
          sinopsis: 'Injustamente condenado por extorsión e intento de asesinato, Mick, es enviado al bloque 13 de la muerte en la Penitenciaría de Pleasant Hill.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Correo de Varsovia',
          imgMini: '/assets/img-mini/El correo de Varsovia.jpg',
          imgGrande: '/assets/img-grande/El correo de Varsovia.jpg',
          sinopsis: 'Basada en la historia real del héroe de guerra polaco Jan Nowak-Jeziorañski, que se convirtió en «El mensajero de Varsovia». Perseguido por varios servicios secretos del Eje del Mal, Jan sale de Polonia con destino a Londres con el objetivo de llevar una información que podría cambiar el futuro de Polonia.',
          genero: [accion, drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'El Club de los Asesinos',
          imgMini: '/assets/img-mini/el club de los asesinos.jpg',
          imgGrande: '/assets/img-grande/el club de los asesinos.jpg',
          sinopsis: 'Un asesino recibe un contrato para matar a siete personas en todo el mundo solo para descubrir que los objetivos también son asesinos que han sido contratados para matarlo.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Gigi y Nate',
          imgMini: '/assets/img-mini/Gigi y Nate.jpg',
          imgGrande: '/assets/img-grande/Gigi y Nate.jpg',
          sinopsis: 'Un joven con un futuro brillante sufre un accidente casi fatal y recrea su nueva vida con la ayuda de un extraño amigo animal.',
          genero: [drama, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Calabozos y Dragones',
          imgMini: '/assets/img-mini/calabozos y dragones.jpg',
          imgGrande: '/assets/img-grande/calabozos y dragones.jpg',
          sinopsis: 'Un encantador ladrón y un grupo de aventureros poco comunes, emprenden una búsqueda épica para recuperar una reliquia perdida, pero las cosas se complican peligrosamente cuando se encuentran con las personas equivocadas.',
          genero: [accion, comedia],
          tipo: pelicula
     },
     
     {
          nombre: 'El Exorcista del Papa',
          imgMini: '/assets/img-mini/el exorcista del papa.jpg',
          imgGrande: '/assets/img-grande/el exorcista del papa.jpg',
          sinopsis: 'Basado en los archivos reales del padre Gabriele Amorth, el principal exorcista del Papa, quien mientras investiga la posesión de un joven, descubre que durante siglos en el Vaticano han intentado a toda costa mantener oculta la verdad.',
          genero: [terror],
          tipo: pelicula
     },
     
     {
          nombre: 'Renfield',
          imgMini: '/assets/img-mini/Renfield.jpg',
          imgGrande: '/assets/img-grande/Renfield.jpg',
          sinopsis: 'Renfield, el secuaz de Drácula y recluso del manicomio durante décadas, anhela una vida lejos del Conde, sus diversas demandas y todo el derramamiento de sangre que conlleva.',
          genero: [comedia, terror],
          tipo: pelicula
     },

     {
          nombre: 'Alias',
          imgMini: '/assets/img-mini/Alias.jpg',
          imgGrande: '/assets/img-grande/Alias.jpg',
          sinopsis: 'Un agente de operaciones especiales se enfrenta a un dilema moral cuando se infiltra en una organización criminal y se hace amigo del hijo del jefe.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Adiccion Perfecta',
          imgMini: '/assets/img-mini/adiccion perfecta poster.jpg',
          imgGrande: '/assets/img-grande/adiccion perfecta poster.jpg',
          sinopsis: 'Una entrenadora de boxeo descubre que su novio, vigente campeón, la ha estado engañando con su propia hermana. Se propone vengarse entrenando al único hombre capaz de destronarlo: su archienemigo Kayden.',
          genero: [drama, romance],
          tipo: pelicula
     },
     
     {
          nombre: 'Romance en Verona',
          imgMini: '/assets/img-mini/romance en verona poster.jpg',
          imgGrande: '/assets/img-grande/romance en verona poster.jpg',
          sinopsis: 'El viaje de ensueño de Julie a Verona parece torcerse cuando descubre que la villa que ha alquilado ya está ocupada por un (fastidiosamente) atractivo desconocido.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'El Diario de Noel',
          imgMini: '/assets/img-mini/el diario de Noel.jpg',
          imgGrande: '/assets/img-grande/el diario de Noel.jpg',
          sinopsis: 'Mientras ordena la casa de su niñez en Navidad, un escritor conoce a una mujer que busca a su madre biológica. ¿Los ayudará un viejo diario a reconciliarse con el pasado?',
          genero: [comedia, romance],
          tipo: pelicula
     },
     
     {
          nombre: 'Peter Pan y Wendy',
          imgMini: '/assets/img-mini/Peter Pan y Wendy.jpg',
          imgGrande: '/assets/img-grande/Peter Pan y Wendy.jpg',
          sinopsis: 'Sigue las aventuras de un niño que no quiere crecer, y como recluta a tres hermanos en Londres y juntos se embarcan en una aventura mágica en la isla encantada de Nunca Jamás.',
          genero: [infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Poker Face Juego Perfecto',
          imgMini: '/assets/img-mini/Poker Face Juego Perfecto.jpg',
          imgGrande: '/assets/img-grande/Poker Face Juego Perfecto.jpg',
          sinopsis: 'Un multimillonario de la tecnología organiza una partida de póquer de alto riesgo entre amigos, pero la noche da un giro cuando se revelan secretos guardados desde hace mucho tiempo, se desarrolla un elaborado complot de venganza.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Quizas para siempre',
          imgMini: '/assets/img-mini/Quizas para siempre.jpg',
          imgGrande: '/assets/img-grande/Quizas para siempre.jpg',
          sinopsis: 'Michelle y Allen son pareja. Deciden invitar a sus padres a reunirse por fin para hablar de casarse. Resulta que los padres ya se conocen bien, lo que da lugar a opiniones divergentes sobre el matrimonio.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'Hambre',
          imgMini: '/assets/img-mini/Hambre.jpg',
          imgGrande: '/assets/img-grande/Hambre.jpg',
          sinopsis: 'Una mujer que dirige el restaurante de fideos de su familia recibe una invitación para unirse a la industria de la alta cocina bajo la tutela de un infame chef.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Hermanos',
          imgMini: '/assets/img-mini/hermanos.jpg',
          imgGrande: '/assets/img-grande/hermanos.jpg',
          sinopsis: 'Un joven debe reconfortar a la esposa e hijos de su hermano, quien ha desaparecido hace un tiempo en Afganistán.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Tierra sin ley',
          imgMini: '/assets/img-mini/Tierra sin ley.jpg',
          imgGrande: '/assets/img-grande/Tierra sin ley.jpg',
          sinopsis: 'Cuando una profesora universitaria en duelo se enfrenta a dos cazadores a los que sorprende invadiendo su propiedad, se ve arrastrada a una creciente batalla de voluntades con consecuencias catastróficas.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Scream 6',
          imgMini: '/assets/img-mini/scream 6.jpg',
          imgGrande: '/assets/img-grande/scream 6.jpg',
          sinopsis: 'En esta nueva entrega de la franquicia, los cuatro supervivientes de la última masacre de Woodsboro dejan atrás su ciudad natal para comenzar un nuevo capítulo en Nueva York.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Comunion con el diablo',
          imgMini: '/assets/img-mini/Comunion con el diablo.jpg',
          imgGrande: '/assets/img-grande/Comunion con el diablo.jpg',
          sinopsis: 'Sara, que intenta adaptarse, en un pueblo en Tarragona, decide ir a una discoteca con su extrovertida amiga Rebe, pero durante el trayecto a casa, se encuentran una muñeca vestida de comunión, y poco después su pesadilla iniciaría.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Aquella vez que me converti en slime La pelicula',
          imgMini: '/assets/img-mini/Aquella vez que me converti en slime La pelicula.jpg',
          imgGrande: '/assets/img-grande/Aquella vez que me converti en slime La pelicula.jpg',
          sinopsis: 'En un país llamado Raja, al oeste de Tempest, llegan Rimuru y sus compañeros, donde se ven envueltos en una conspiración que gira alrededor de una mujer y un misterioso poder.',
          genero: [animacion, infantil, anime],
          tipo: pelicula
     },

     {
          nombre: 'Triada',
          imgMini: '/assets/img-mini/triada.jpg',
          imgGrande: '/assets/img-grande/triada.jpg',
          sinopsis: 'Becca, es una experta forense que, al investigar un asesinato, se da cuenta de que el cuerpo de la víctima es exactamente igual al suyo.',
          genero: [drama, suspenso],
          tipo: serie
     },

     {
          nombre: 'Mandalorian Temporada 1',
          imgMini: '/assets/img-mini/mandalorian1.jpg',
          imgGrande: '/assets/img-grande/mandalorian1.jpg',
          sinopsis: 'Cinco años después de los eventos de El Retorno del Jedi y la caída del imperio galáctico, The Mandalorian sigue a Din Djarin, un cazarrecompensas mandaloriano solitario en los confines de la galaxia. Es contratado por las fuerzas imperiales remanentes para recuperar al niño Grogu, pero en su lugar huye para protegerlo. ',
          genero: [accion, ciencia],
          tipo: serie
     },
     
     {
          nombre: 'Mandalorian Temporada 2',
          imgMini: '/assets/img-mini/mandaloriano2.jpg',
          imgGrande: '/assets/img-grande/mandaloriano2.jpg',
          sinopsis: 'El Mandaloriano acepta devolver la armadura a cambio de la seguridad de Grogu, justo cuando llega Moff Gideon y despliega soldados de asalto.',
          genero: [accion, ciencia],
          tipo: serie
     },

     {
          nombre: 'Mandalorian Temporada 3',
          imgMini: '/assets/img-mini/Mandalorian 3.jpg',
          imgGrande: '/assets/img-grande/Mandalorian 3.jpg',
          sinopsis: 'Los viajes del mandaloriano por la Galaxia de Star Wars continúan. Din Djarin, un viejo cazarrecompensas solitario, se ha reunido con Grogu. Mientras tanto, la Nueva República lucha por alejar a la Galaxia de su oscura historia.',
          genero: [accion, ciencia],
          tipo: serie
     },

     {
          nombre: 'El libro de Boba Fett',
          imgMini: '/assets/img-mini/el libro de boba.jpg',
          imgGrande: '/assets/img-grande/el libro de boba.jpg',
          sinopsis: 'Boba Fett deja de ser un simple cazarrecompensas para reinventarse en Tatooine junto a Fennec Shand.',
          genero: [accion, ciencia],
          tipo: serie
     },

     {
          nombre: 'La Gloria',
          imgMini: '/assets/img-mini/la gloria.jpg',
          imgGrande: '/assets/img-grande/la gloria.jpg',
          sinopsis: 'Muchos años después de ser brutalmente agredida en el instituto, una mujer pone en marcha un elaborado plan de venganza para que los responsables paguen por sus crímenes.',
          genero: [drama, suspenso],
          tipo: serie
     },

     {
          nombre: 'Palpito Temporada 2',
          imgMini: '/assets/img-mini/palpito 2 cover.jpg',
          imgGrande: '/assets/img-grande/palpito 2 cover.jpg',
          sinopsis: 'Luego de fingir su muerte y huir del país, Camila es víctima de un engaño y regresa al caos que había dejado atrás…, ahora acrecentado a niveles inconcebibles.',
          genero: [drama, suspenso],
          tipo: serie
     },

     {
          nombre: 'Justice League Super Heroes y Cazadores',
          imgMini: '/assets/img-mini/Justice League super heroes y cazadores.jpg',
          imgGrande: '/assets/img-grande/Justice League super heroes y cazadores.jpg',
          sinopsis: 'Superman, Batman, Mujer Maravilla, Flash, Cyborg, Linterna Verde y Vixen son transportados al extraño mundo de Remnant y se encuentran convertidos en adolescentes. Mientras tanto, los héroes de Remnant, Ruby, Weiss, Blake y Yang, deben combinar fuerzas con la Liga de la Justicia para descubrir por qué su planeta ha sido alterado misteriosamente antes de que un Grimm con superpoderes destruya todo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Ghosteado',
          imgMini: '/assets/img-mini/Ghosteado.jpg',
          imgGrande: '/assets/img-grande/Ghosteado.jpg',
          sinopsis: 'Cole, un tipo campechano, se enamora perdidamente de la emigmática Sadie, quien, para su enorme sorpresa, resulta ser una agente secreta. Antes de que pueda surgir una segunda cita, los dos deben embarcarse en una aventura internacional para salvar el mundo.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'El fotografo de Minamata',
          imgMini: '/assets/img-mini/El fotografo de Minamata.jpg',
          imgGrande: '/assets/img-grande/El fotografo de Minamata.jpg',
          sinopsis: 'El fotógrafo de guerra W Eugene Smith viaja a Japón para documentar el envenenamiento por mercurio de comunidades costeras enteras.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Cazador de tormentas',
          imgMini: '/assets/img-mini/Cazador de tormentas.jpg',
          imgGrande: '/assets/img-grande/Cazador de tormentas.jpg',
          sinopsis: 'Un adolescente huye para seguir los pasos de su padre, el legendario cazador de tormentas Bill Brody.',
          genero: [drama, accion],
          tipo: pelicula
     },

     {
          nombre: 'Ant man y la avispa Quantunmania',
          imgMini: '/assets/img-mini/Ant man y la avispa Quantunmania.jpg',
          imgGrande: '/assets/img-grande/Ant man y la avispa Quantunmania.jpg',
          sinopsis: 'Scott Lang y Hope Van Dyne, junto con Hank Pym y Janet Van Dyne, exploran el Reino Cuántico, donde interactúan con extrañas criaturas y se embarcan en una aventura que va más allá de los límites de lo que creían posible.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Power Rangers ayer hoy y siempre',
          imgMini: '/assets/img-mini/Power rangers ayer hoy y siempre.jpg',
          imgGrande: '/assets/img-grande/Power rangers ayer hoy y siempre.jpg',
          sinopsis: 'Cuando la tragedia golpea a los Power Rangers, una joven heroína se une a ellos para enfrentarse a su archienemiga más antigua.',
          genero: [infantil, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'The last kingdom 7 reyes deben morir',
          imgMini: '/assets/img-mini/The last kingdom 7 reyes deben morir.jpg',
          imgGrande: '/assets/img-grande/The last kingdom 7 reyes deben morir.jpg',
          sinopsis: 'Tras la muerte del rey Eduardo, Uhtred de Bebbanburg y sus compañeros recorren un territorio fracturado con la esperanza de unificar Inglaterra de una vez por todas.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Palpito Temporada 1',
          imgMini: '/assets/img-mini/palpito1.jpg',
          imgGrande: '/assets/img-grande/palpito1.jpg',
          sinopsis: 'La mujer de Simón es asesinada para extraerle el corazón y trasplantárselo a Camila, la mujer de un hombre rico. En su búsqueda de venganza, se sumerge en el peligroso mundo del tráfico de órganos.',
          genero: [drama, suspenso],
          tipo: serie
     },

     {
          nombre: 'Agente Nocturno',
          imgMini: '/assets/img-mini/agente nocturno.jpg',
          imgGrande: '/assets/img-grande/agente nocturno.jpg',
          sinopsis: 'Un agente del FBI encargado de una línea de emergencia atiende una llamada. No sabe que acabará en mitad de un complot relacionado con un topo en la Casa Blanca.',
          genero: [accion, suspenso],
          tipo: serie
     },

     {
          nombre: 'Los tres deseos de Cenicienta',
          imgMini: '/assets/img-mini/Los tres deseos de cenicienta.jpg',
          imgGrande: '/assets/img-grande/Los tres deseos de cenicienta.jpg',
          sinopsis: 'Una historia de Cenicienta: en bosques cubiertos de nieve, la heroína lucha contra su malvada madrastra por su sueño de conocer al apuesto príncipe.',
          genero: [familiar, romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'Chupa',
          imgMini: '/assets/img-mini/Chupa.jpg',
          imgGrande: '/assets/img-grande/Chupa.jpg',
          sinopsis: 'Un niño solitario va a ver a su familia a México. En el cobertizo de su abuelo, se encuentra a una criatura mítica y se hacen amigos. Así empieza la aventura de su vida.',
          genero: [accion, familiar, drama],
          tipo: pelicula
     },

     {
          nombre: 'Boksoon debe morir',
          imgMini: '/assets/img-mini/Boksoon debe morir.jpg',
          imgGrande: '/assets/img-grande/Boksoon debe morir.jpg',
          sinopsis: 'En el trabajo es una famosa asesina. En casa es una madre soltera. Para ella, matar está chupado, lo difícil es criar a su hija adolescente.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El atracador perfecto',
          imgMini: '/assets/img-mini/El atracador perfecto.jpg',
          imgGrande: '/assets/img-grande/El atracador perfecto.jpg',
          sinopsis: 'Después de escapar de una prisión de Michigan, un encantador criminal de carrera asume una nueva identidad en Canadá y roba un récord de 59 bancos y joyerías mientras es perseguido por un grupo de trabajo policial.',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Los monstruos del hombre',
          imgMini: '/assets/img-mini/Los monstruos del hombre.jpg',
          imgGrande: '/assets/img-grande/Los monstruos del hombre.jpg',
          sinopsis: 'Una compañía de robótica lleva a cabo una misión ilegal con 4 prototipos en un centro de manufactura de drogas para demostrar que merecen ganarse un lucrativo contrato militar en manos de un agente de la CIA corrupto.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Erase una vez un genio',
          imgMini: '/assets/img-mini/Erase una vez un genio.jpg',
          imgGrande: '/assets/img-grande/Erase una vez un genio.jpg',
          sinopsis: 'La Dra. en literatura Alithea Binnie parece estar feliz con su vida aunque se enfrenta al mundo con cierto escepticismo. De repente, se encuentra con un genio que ofrece concederle tres deseos a cambio de su libertad.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Comidalia',
          imgMini: '/assets/img-mini/Comidalia.jpg',
          imgGrande: '/assets/img-grande/Comidalia.jpg',
          sinopsis: 'Un defensor del arte culinario tradicional que se verá obligado a luchar contra las fuerzas malignas que tratan de eliminar el sabor de la comida, dando así comienzo a una alocada persecusión interestelar.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Pacto de graduacion',
          imgMini: '/assets/img-mini/Pacto de graduacion.jpg',
          imgGrande: '/assets/img-grande/Pacto de graduacion.jpg',
          sinopsis: 'Una feminista que no cree en la idea de enamorarse, especialmente en el amor heteronormativo, luego se descubre enamorada y con una química innegable.',
          genero: [comedia, familiar, romance],
          tipo: pelicula
     },

     {
          nombre: 'Tetris ',
          imgMini: '/assets/img-mini/Tetris .jpg',
          imgGrande: '/assets/img-grande/Tetris .jpg',
          sinopsis: 'Un friki de la informática estadounidense y ruso forman una amistad poco probable mientras intentan evadir a la KGB y sacar de contrabando el videojuego más famoso del mundo fuera de la Unión Soviética.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Shazam 2 La Furia de los Dioses',
          imgMini: '/assets/img-mini/Shazam 2.jpg',
          imgGrande: '/assets/img-grande/Shazam 2.jpg',
          sinopsis: 'Billy Batson y sus hermanos adoptivos, tienen que enfrentarse a las tres hijas de Atlas: Hespera, Kalypso y Anthea, que llegan a la Tierra en busca de la magia que les robaron hace mucho tiempo.',
          genero: [accion, comedia, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Agente Fortune el gran engaño',
          imgMini: '/assets/img-mini/Agente Fortune el gran engaño.jpg',
          imgGrande: '/assets/img-grande/Agente Fortune el gran engaño.jpg',
          sinopsis: 'El agente especial Orson Fortune y su equipo de agentes reclutan a una famosa estrella de cine de Hollywood para ayudarlos en una nueva misión encubierta.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: '65 Al borde de la extincion',
          imgMini: '/assets/img-mini/65 Al borde de la extincion.jpg',
          imgGrande: '/assets/img-grande/65 Al borde de la extincion.jpg',
          sinopsis: 'Después de un catastrófico accidente en un planeta desconocido, el piloto Mills descubre rápidamente que realmente está varado en la Tierra… hace 65 millones de años.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'La Ballena',
          imgMini: '/assets/img-mini/La Ballena.jpg',
          imgGrande: '/assets/img-grande/La Ballena.jpg',
          sinopsis: 'Un solitario profesor de inglés que vive con obesidad severa intenta reconectarse con su distanciada hija adolescente para tener una última oportunidad de redención.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El Asombroso Mauricio',
          imgMini: '/assets/img-mini/El Asombroso Mauricio.jpg',
          imgGrande: '/assets/img-grande/El Asombroso Mauricio.jpg',
          sinopsis: 'Un tonto gato callejero tiene la estafa perfecta para hacer dinero. Encuentra a un niño de aspecto tonto que toca una flauta y tiene su propia horda de ratas, que son extrañamente alfabetizadas.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Los Malditos',
          imgMini: '/assets/img-mini/Los Malditos.jpg',
          imgGrande: '/assets/img-grande/Los Malditos.jpg',
          sinopsis: 'Un hombre llega a una aldea remota para investigar el ataque de un animal salvaje, pero descubre una fuerza mucho más grande y siniestra que tiene a sus habitantes sometidos.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Creed La leyenda de Rocky',
          imgMini: '/assets/img-mini/creed 1.jpg',
          imgGrande: '/assets/img-grande/creed 1.jpg',
          sinopsis: 'El excampeón mundial de los pesos pesados Rocky Balboa es entrenador y mentor de Adonis Johnson, el hijo de su difunto amigo y exrival Apollo Creed.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Creed II La leyenda de Rocky',
          imgMini: '/assets/img-mini/creed 2 small.jpg',
          imgGrande: '/assets/img-grande/creed 2 small.jpg',
          sinopsis: 'Bajo la tutela de Rocky Balboa, el contendiente de los pesos pesados Adonis Creed se enfrenta a Viktor Drago, hijo de Ivan Drago.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Creed 3',
          imgMini: '/assets/img-mini/Creed 3.jpg',
          imgGrande: '/assets/img-grande/Creed 3.jpg',
          sinopsis: 'Tras dominar el mundo del boxeo, Adonis ha prosperado en su carrera y en su vida familiar. Cuando un amigo de la infancia y antiguo prodigio del boxeo resurge, el enfrentamiento entre ellos será más que una pelea.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Misterio a la vista',
          imgMini: '/assets/img-mini/Misterio a la vista.jpg',
          imgGrande: '/assets/img-grande/Misterio a la vista.jpg',
          sinopsis: 'Nick y Audrey Spitz, ahora con su propia agencia de detectives, investigan un caso que marcará su carrera: el secuestro de su amigo multimillonario durante su boda.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Atracadores Segunda Temporada',
          imgMini: '/assets/img-mini/Atracadores 2.jpg',
          imgGrande: '/assets/img-grande/Atracadores 2.jpg',
          sinopsis: 'La llegada de un nuevo enemigo frustra los planes de Mehdi, Liana y Tony de marcharse de Bélgica y los obliga a aliarse con viejos rivales.',
          genero: [accion],
          tipo: serie
     },

     {
          nombre: 'Las momias y el anillo perdido',
          imgMini: '/assets/img-mini/Las momias y el anillo perdido.jpg',
          imgGrande: '/assets/img-grande/Las momias y el anillo perdido.jpg',
          sinopsis: 'Sigue a tres momias que terminan en el Londres actual y se embarcan en un viaje en busca de un antiguo anillo perteneciente a la familia real, robado por el ambicioso arqueólogo Lord Carnaby.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Jeepers Creepers Renacido',
          imgMini: '/assets/img-mini/Jeepers Creepers.jpg',
          imgGrande: '/assets/img-grande/Jeepers Creepers.jpg',
          sinopsis: 'Obligada a viajar con su novio, Laine, comienza a experimentar premoniciones asociadas al mito urbano de The Creeper. Laine cree que se ha invocado algo sobrenatural, y que ella está en el centro de todo.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Los Campeones',
          imgMini: '/assets/img-mini/Los Campeones.jpg',
          imgGrande: '/assets/img-grande/Los Campeones.jpg',
          sinopsis: 'Un antiguo entrenador de baloncesto de ligas menores recibe la orden judicial de dirigir un equipo de jugadores con discapacidad intelectual. Pronto se da cuenta de que este equipo puede llegar más lejos de lo que nunca imaginaron.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Mientras haya esperanza',
          imgMini: '/assets/img-mini/Mientras haya esperanza.jpg',
          imgGrande: '/assets/img-grande/Mientras haya esperanza.jpg',
          sinopsis: 'Después de que un piloto muere inesperadamente mientras volaba el avión, un pasajero se ve obligado a aterrizar el avión de manera segura para salvar a toda su familia.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'One Peace Film Red',
          imgMini: '/assets/img-mini/One Peace Film Red.jpg',
          imgGrande: '/assets/img-grande/One Peace Film Red.jpg',
          sinopsis: 'Por primera vez, Uta, la cantante más querida del mundo, se revelará al mundo en un concierto en vivo. La voz que todo el mundo ha estado esperando está a punto de resonar.',
          genero: [animacion, infantil, anime],
          tipo: pelicula
     },

     {
          nombre: 'Rock Dog 1',
          imgMini: '/assets/img-mini/rock dog 1.jpg',
          imgGrande: '/assets/img-grande/rock dog 1.jpg',
          sinopsis: 'Un perro tibetano que vive en una aldea china decide cambiar su vida en busqueda de su verdadero destino: el rock and roll.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Rock Dog 2',
          imgMini: '/assets/img-mini/rock dog 2.jpg',
          imgGrande: '/assets/img-grande/rock dog 2.jpg',
          sinopsis: 'Bodi y su banda dejan Snow Mountain para irse de gira con la sensación del pop Lil’ Foxy y deberán aprender el precio de la fama.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Rock Dog 3',
          imgMini: '/assets/img-mini/rock dog 3.jpg',
          imgGrande: '/assets/img-grande/rock dog 3.jpg',
          sinopsis: 'Cuando los jóvenes artistas de un concurso de música admiten que nunca han oído hablar de Angus Scattergood, Bodi se ve obligado a unirse al espectáculo para restaurar el buen nombre de Rock Legend.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Si tuviera 70',
          imgMini: '/assets/img-mini/Si tuviera 70.jpg',
          imgGrande: '/assets/img-grande/Si tuviera 70.jpg',
          sinopsis: 'Una escritora de 30 años pasa un fin de semana salvaje en Palm Springs y se despierta para descubrir que se ha transformado mágicamente en su yo de 70 años.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Quiebre',
          imgMini: '/assets/img-mini/Quiebre.jpg',
          imgGrande: '/assets/img-grande/Quiebre.jpg',
          sinopsis: 'Un veterano de guerra de la Marina enfrenta desafíos mentales y emocionales cuando intenta reintegrarse a la vida civil.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Avatar 2 El camino del agua',
          imgMini: '/assets/img-mini/Avatar 2.jpg',
          imgGrande: '/assets/img-grande/Avatar 2.jpg',
          sinopsis: 'Jake Sully vive con su nueva familia en el planeta de Pandora. Cuando una amenaza conocida regresa, Jake debe trabajar con Neytiri y el ejército de la raza na\'vi para proteger su planeta.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'El Vuelo de los Ladrones',
          imgMini: '/assets/img-mini/El vuelo de los ladrones.jpg',
          imgGrande: '/assets/img-grande/El vuelo de los ladrones.jpg',
          sinopsis: 'Una azafata y su novio deben robar un cargamento de diamantes para saldar una vieja deuda. Pero su plan se complica cuando secuestran el avión en el que viajan.',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Venganza a Toda Costa',
          imgMini: '/assets/img-mini/Venganza a toda costa.jpg',
          imgGrande: '/assets/img-grande/Venganza a toda costa.jpg',
          sinopsis: 'Después de que su abuelo es víctima de una elaborada estafa, Rudi decide hacer justicia él mismo poniendo su vida patas arriba.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Atracadores Primera Temporada',
          imgMini: '/assets/img-mini/atracadores 1.jpg',
          imgGrande: '/assets/img-grande/atracadores 1.jpg',
          sinopsis: 'Para proteger a su familia de un poderoso narcotraficante, el hábil Mehdi y su grupo de expertos ladrones se ven arrastrados a una violenta guerra territorial.',
          genero: [accion],
          tipo: serie
     },

     {
          nombre: 'Nombre codigo Banshee',
          imgMini: '/assets/img-mini/Nombre codigo Banshee.jpg',
          imgGrande: '/assets/img-grande/Nombre codigo Banshee.jpg',
          sinopsis: 'Banshee, una asesina independiente, es emboscada por el mercenario que mató a su padre y que ahora busca cobrar una recompensa por Caleb, su antiguo mentor.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Estrangulador de Boston',
          imgMini: '/assets/img-mini/el estrangulador de boston.jpg',
          imgGrande: '/assets/img-grande/el estrangulador de boston.jpg',
          sinopsis: 'Loretta McLaughlin la primera reportera que relacionó los asesinatos del estrangulador de Boston y dio a conocer la historia sobre el asesino en serie más famoso de la ciudad.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Furies',
          imgMini: '/assets/img-mini/Furies.jpg',
          imgGrande: '/assets/img-grande/Furies.jpg',
          sinopsis: 'Una misteriosa mujer entrena a un trío de chicas para vengarse de una banda criminal que abusa de las mujeres. Las tres guerreras lo arriesgan todo para desafiar a este imperio corrupto.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Engaño',
          imgMini: '/assets/img-mini/El Engaño.jpg',
          imgGrande: '/assets/img-grande/El Engaño.jpg',
          sinopsis: 'Chris es un hombre divorciado adinerado que se enamora de Sky, una mujer misteriosa. Esta situación dejará a Chris, su exmujer y su hijo finalmente atrapados en una lucha desesperada por sobrevivir.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Batman La perdicion que llego a ciudad Gotica',
          imgMini: '/assets/img-mini/Batman La perdicion que llego a ciudad Gotica.jpg',
          imgGrande: '/assets/img-grande/Batman La perdicion que llego a ciudad Gotica.jpg',
          sinopsis: 'Historia basada en la década de 1920, donde vemos al explorador Bruce Wayne liberando un antiguo y poderoso mal. Esta fuerza sobrenatural pone a prueba la mente racional de Batman, ya que si no encuentra la manera de detenerla, Gotham corre un gran peligro.',
          genero: [animacion, infantil, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'La Exorcista',
          imgMini: '/assets/img-mini/La Exorcista.jpg',
          imgGrande: '/assets/img-grande/La Exorcista.jpg',
          sinopsis: 'Ofelia, una joven monja recién llegada al pueblo de San Ramón, se ve obligada a realizar un exorcismo a una mujer embarazada. La posesión parece haber terminado, hasta que Ofelia descubre que la presencia maligna está tratando de regresar al cuerpo de la víctima.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Elefanta del mago',
          imgMini: '/assets/img-mini/La Elefanta del mago.jpg',
          imgGrande: '/assets/img-grande/La Elefanta del mago.jpg',
          sinopsis: 'Un valiente niño acepta los tres retos imposibles que le exige un rey a cambio de conseguir una elefanta mágica... y la oportunidad de cumplir su destino.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Noviembre Paris atacado',
          imgMini: '/assets/img-mini/Noviembre.jpg',
          imgGrande: '/assets/img-grande/Noviembre.jpg',
          sinopsis: 'Cinco días en el corazón de los servicios antiterroristas franceses durante la caza de sospechosos tras los atentados del 13 de noviembre de 2015 en París.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'Control El poder de la mente',
          imgMini: '/assets/img-mini/Control El poder de la mente.jpg',
          imgGrande: '/assets/img-grande/Control El poder de la mente.jpg',
          sinopsis: 'Una mujer es encarcelada por una misteriosa organización que pretende poner a prueba sus habilidades psíquicas latentes.',
          genero: [suspenso, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Terrifier 2',
          imgMini: '/assets/img-mini/Terrifier 2.jpg',
          imgGrande: '/assets/img-grande/Terrifier 2.jpg',
          sinopsis: 'Art the Clown regresa al condado de Miles luego de ser resucitado, ahora se propone cazar a una adolescente y a su hermano menor durante Halloween.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Oso intoxicado',
          imgMini: '/assets/img-mini/Oso intoxicado.jpg',
          imgGrande: '/assets/img-grande/Oso intoxicado.jpg',
          sinopsis: 'Cuenta la historia de un narcotraficante cuyo avión se estrella con un cargamento de cocaína que es encontrada por un oso negro, quien se la come.',
          genero: [comedia, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Luther Cae la noche',
          imgMini: '/assets/img-mini/Luther Cae la noche.jpg',
          imgGrande: '/assets/img-grande/Luther Cae la noche.jpg',
          sinopsis: 'Atormentado por un caso no resuelto, el brillante pero deshonrado detective de la Policía londinense John Luther escapa de prisión para cazar a un despiadado asesino en serie.',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Puedes hacerlo Chang',
          imgMini: '/assets/img-mini/Puedes hacerlo Chang.jpg',
          imgGrande: '/assets/img-grande/Puedes hacerlo Chang.jpg',
          sinopsis: 'Chang, que mide 1,72, se propone aprender a encestar una clavada, no solo para impresionar a Kristy, la chica que le gusta, sino también para ganarse el respeto de sus compañeros.',
          genero: [drama, familiar],
          tipo: pelicula
     },

     {
          nombre: 'El niño y el tigre',
          imgMini: '/assets/img-mini/El niño y el tigre.jpg',
          imgGrande: '/assets/img-grande/El niño y el tigre.jpg',
          sinopsis: 'Un niño salva a un tigre de Bengala de los cazadores en los valles del Himalaya. Después, se dirige con él a Bután, a un monasterio budista de monjes exiliados tras la invasión china, quienes protegen a los tigres en su monasterio.',
          genero: [drama, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Desconectada',
          imgMini: '/assets/img-mini/desconectada.jpg',
          imgGrande: '/assets/img-grande/desconectada.jpg',
          sinopsis: 'Después de que su madre desaparece, una joven intenta encontrarla desde su casa, utilizando las herramientas disponibles en línea.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Los tigres de papel',
          imgMini: '/assets/img-mini/los tigres de papel.jpg',
          imgGrande: '/assets/img-grande/los tigres de papel.jpg',
          sinopsis: 'Tres artistas marciales se han convertido en hombres de mediana edad. Pero después del asesinato de su maestro, deben hacer sus deberes de padre y vencer viejos rencores para vengarlo.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Babylon',
          imgMini: '/assets/img-mini/Babylon.jpg',
          imgGrande: '/assets/img-grande/Babylon.jpg',
          sinopsis: 'Una historia de ambición y excesos desmesurados que recorre la ascensión y caída de múltiples personajes durante una época de desenfrenada decadencia y depravación en los albores de Hollywood.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'La Mujer del diablo: Temporada 1',
          imgMini: '/assets/img-mini/la mujer del diablo.jpg',
          imgGrande: '/assets/img-grande/la mujer del diablo.jpg',
          sinopsis: 'Una humilde maestra que sueña con ganarse una beca para irse de su pueblo, ve sus planes interrumpidos por Cristo Beltrán, el gran benefactor de Villa Clara quien en realidad es un delincuente de alto rango.',
          genero: [drama, romance],
          tipo: serie
     },

     {
          nombre: 'La Mujer del diablo Temporada 2',
          imgMini: '/assets/img-mini/la mujer del diablo 2.jpg',
          imgGrande: '/assets/img-grande/la mujer del diablo 2.jpg',
          sinopsis: 'Cristo está obsesionado y enamorado de Natalia. Él le entrega todo su amor y lo material también',
          genero: [drama, romance],
          tipo: serie
     },

     {
          nombre: 'La Mujer del diablo Temporada 3',
          imgMini: '/assets/img-mini/la mujer del diablo 3.jpg',
          imgGrande: '/assets/img-grande/la mujer del diablo 3.jpg',
          sinopsis: 'Veremos a Natalia con una mayor sed de venganza en su intento final por liberarse de las ataduras de su realidad y con el deseo de un mejor destino.',
          genero: [drama, romance],
          tipo: serie
     },

     {
          nombre: 'La Princesa Guerrera',
          imgMini: '/assets/img-mini/La Princesa Guerrera.jpg',
          imgGrande: '/assets/img-grande/La Princesa Guerrera.jpg',
          sinopsis: 'Largometraje basado en la historia real de la legendaria princesa Khutulun de Mongolia.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Las Vidas importan',
          imgMini: '/assets/img-mini/Las Vidas importan.jpg',
          imgGrande: '/assets/img-grande/Las Vidas importan.jpg',
          sinopsis: 'Las vidas de dos policías de Nueva York colisionan en un tejido de historias sobre raza, estatus, pérdida y traición.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Barbie y la gran aventura como niñera',
          imgMini: '/assets/img-mini/Barbie y la gran aventura como niñera.jpg',
          imgGrande: '/assets/img-grande/Barbie y la gran aventura como niñera.jpg',
          sinopsis: 'Cuando su negocio de canguros sufre un revés, Skipper acepta un trabajo en el parque acuático… donde sus dotes para cuidar niños pronto le resultan muy útiles.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Jack en la casa maldita 2 El Despertar',
          imgMini: '/assets/img-mini/Jack en la casa maldita 2 El Despertar.jpg',
          imgGrande: '/assets/img-grande/Jack en la casa maldita 2 El Despertar.jpg',
          sinopsis: 'Cuando una mujer moribunda abre la caja de un juguete antiguo, hace un trato con el demonio que contiene, quien promete curar su enfermedad a cambio de reclamar seis víctimas inocentes.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Historias que no te atreves a contar',
          imgMini: '/assets/img-mini/Historias que no te atreves a contar.jpg',
          imgGrande: '/assets/img-grande/Historias que no te atreves a contar.jpg',
          sinopsis: 'La historia se enfoca en un reportero que recopila historias de unos "supuestos" departamentos encantados en un edificio y del encargado que se encuentra desaparecido.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Un vecino gruñon',
          imgMini: '/assets/img-mini/Un vecino gruñon.jpg',
          imgGrande: '/assets/img-grande/Un vecino gruñon.jpg',
          sinopsis: 'Otto es un gruñón que ha renunciado a la vida tras la pérdida de su esposa y quiere acabar con todo. Cuando una familia joven se muda cerca, conoce a su pareja en la ingeniosa Marisol, lo que lleva a una amistad que cambiará su mundo.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Diabolik',
          imgMini: '/assets/img-mini/Diabolik.jpg',
          imgGrande: '/assets/img-grande/Diabolik.jpg',
          sinopsis: 'En Clerville se espera la llegada de Lady Kant, quien trae consigo un diamante rosa. La joya llama la atención de Diabolik, quien está encantado también con la dama. Pero el inspector Ginko encontró una forma de atrapar al criminal.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Magic Mike 1',
          imgMini: '/assets/img-mini/magic mike 1.jpg',
          imgGrande: '/assets/img-grande/magic mike 1.jpg',
          sinopsis: 'Un stripper masculino le enseña a un joven intérprete cómo divertirse, ligar con mujeres y ganar dinero fácilmente.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Magic Mike 2',
          imgMini: '/assets/img-mini/magic mike 2.jpg',
          imgGrande: '/assets/img-grande/magic mike 2.jpg',
          sinopsis: 'Mike y los Reyes de Tampa ofrecen el espectáculo de sus vidas en Myrtle Beach.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Magic Mike 3 El ultimo baile',
          imgMini: '/assets/img-mini/Magic Mike el ultimo baile.jpg',
          imgGrande: '/assets/img-grande/Magic Mike el ultimo baile.jpg',
          sinopsis: 'Mike Lane ahora trabaja como cantinero en Florida. Allí conoce a una mujer rica que descubre su pasado como stripper. Lo empuja a volver a bailar y lo convence de crear un espectáculo en Londres.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Hart Duro de Entrenar',
          imgMini: '/assets/img-mini/Hart Duro de Entrenar.jpg',
          imgGrande: '/assets/img-grande/Hart Duro de Entrenar.jpg',
          sinopsis: 'Kevin Hart interpreta una versión ficticia de sí mismo en una misión para obtener el papel de su vida en una película de acción.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Ciudad Paraiso',
          imgMini: '/assets/img-mini/Ciudad Paraiso.jpg',
          imgGrande: '/assets/img-grande/Ciudad Paraiso.jpg',
          sinopsis: 'Ryan Swan debe abrirse camino a través del mundo del crimen hawaiano para vengarse del capo que asesinó a su padre.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Tenemos un fantasma',
          imgMini: '/assets/img-mini/Tenemos un fantasma.jpg',
          imgGrande: '/assets/img-grande/Tenemos un fantasma.jpg',
          sinopsis: 'Tras encontrar un fantasma con un pasado turbio en su nueva casa, una familia se convierte en una sensación viral y en el objetivo de una extraña agencia del Gobierno.',
          genero: [comedia, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Alerta Extrema',
          imgMini: '/assets/img-mini/Alerta Extrema.jpg',
          imgGrande: '/assets/img-grande/Alerta Extrema.jpg',
          sinopsis: 'Un piloto se ve atrapado en una zona de guerra tras verse obligado a aterrizar su avión comercial durante una terrible tormenta.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Sistema',
          imgMini: '/assets/img-mini/El Sistema.jpg',
          imgGrande: '/assets/img-grande/El Sistema.jpg',
          sinopsis: 'Cuando un joven soldado, recién regresa de la guerra, queda atrapado en una redada de drogas y las autoridades lo reclutan para que se infiltre en una prisión notoriamente peligrosa para descubrir qué está pasando.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Llaman a la Puerta',
          imgMini: '/assets/img-mini/Llaman a la Puerta.jpg',
          imgGrande: '/assets/img-grande/Llaman a la Puerta.jpg',
          sinopsis: 'Mientras vacacionan, una niña y sus padres son tomados como rehenes por extraños armados quienes exigen que la familia tome una decision para evitar el apocalipsis.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Quiero Bailar con Alguien',
          imgMini: '/assets/img-mini/Quiero Bailar con Alguien.jpg',
          imgGrande: '/assets/img-grande/Quiero Bailar con Alguien.jpg',
          sinopsis: 'La celebración alegre, emocional y desgarradora de la vida y la música de Whitney Houston, la mejor vocalista pop femenina de R&B de todos los tiempos. Seguimiento de su viaje desde la oscuridad hasta el estrellato musical.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Remember',
          imgMini: '/assets/img-mini/Re-Member.jpg',
          imgGrande: '/assets/img-grande/Re-Member.jpg',
          sinopsis: 'Seis estudiantes de instituto atrapados en un bucle temporal mortal deben encontrar los restos de una víctima desconocida para romper la maldición y vivir un nuevo día.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Identidad Desbloqueada',
          imgMini: '/assets/img-mini/Identidad Desbloqueada.jpg',
          imgGrande: '/assets/img-grande/Identidad Desbloqueada.jpg',
          sinopsis: 'Rastrea los incidentes que ocurren cuando una empleada común de la compañía comienza a verse amenazada por toda su vida después de perder su teléfono inteligente que contiene toda su información personal.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Plan A',
          imgMini: '/assets/img-mini/Plan A.jpg',
          imgGrande: '/assets/img-grande/Plan A.jpg',
          sinopsis: 'En 1945, un grupo de sobrevivientes judíos del Holocausto planeó envenenar el sistema de agua en Alemania. La película narra la peligrosa y atrevida operación encubierta que se llamó Plan A.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Sharper Un plan perfecto',
          imgMini: '/assets/img-mini/Sharper Un plan perfecto.jpg',
          imgGrande: '/assets/img-grande/Sharper Un plan perfecto.jpg',
          sinopsis: 'Nadie es lo que parece en este thriller ambientado en Nueva York donde impera la manipulación implacable y los peligrosos juegos de poder.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Ten Cuidado a Quien Llamas',
          imgMini: '/assets/img-mini/Ten cuidado a quien llamas.jpg',
          imgGrande: '/assets/img-grande/Ten cuidado a quien llamas.jpg',
          sinopsis: 'Seis amigos contratan a una médium para hacer una sesión de espiritismo a través de Zoom durante el cierre, pero obtienen mucho más de lo que esperaban ya que las cosas se estropean rápidamente.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'The Last of Us',
          imgMini: '/assets/img-mini/The last of us.jpg',
          imgGrande: '/assets/img-grande/The last of us.jpg',
          sinopsis: 'Joel y Ellie, una pareja conectada a través de la dureza del mundo en el que viven, se ven obligados a soportar circunstancias brutales y asesinos despiadados en un viaje por la América posterior a una pandemia.',
          genero: [accion, drama],
          tipo: serie
     },

     {
          nombre: 'Tu Casa o La Mia',
          imgMini: '/assets/img-mini/Tu casa o la mia.jpg',
          imgGrande: '/assets/img-grande/Tu casa o la mia.jpg',
          sinopsis: 'Los mejores amigos (y polos opuestos) Debbie y Peter intercambian casa por una semana, y lo que descubren sobre sus vidas podría abrirles las puertas al amor.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'Arde Notre Dame',
          imgMini: '/assets/img-mini/Arde Notre Dame.jpg',
          imgGrande: '/assets/img-grande/Arde Notre Dame.jpg',
          sinopsis: 'La película recrea el incendio que sufrió la Catedral de Notre-Dame, uno de los monumentos más visitados del mundo y símbolo del catolicismo.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Fantasy Football',
          imgMini: '/assets/img-mini/Fantasy Football.jpg',
          imgGrande: '/assets/img-grande/Fantasy Football.jpg',
          sinopsis: 'Una niña de 15 años controla la destreza de su padre, que es jugador de fútbol profesional, a través de su videojuego.',
          genero: [comedia, familiar],
          tipo: pelicula
     },

     {
          nombre: 'El Superviviente',
          imgMini: '/assets/img-mini/El Superviviente.jpg',
          imgGrande: '/assets/img-grande/El Superviviente.jpg',
          sinopsis: 'Un año y medio después de la caída de la civilización debido a un brote viral, un ex agente del FBI se ve obligado a proteger a una joven inmune a la enfermedad de un peligroso líder de pandillas.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Lazarus',
          imgMini: '/assets/img-mini/Lazarus.jpg',
          imgGrande: '/assets/img-grande/Lazarus.jpg',
          sinopsis: 'Un hombre muere por un breve periodo de tiempo. Al recuperar la conciencia, descubre que ha sido dotado con poderes que le permiten luchar contra la organización responsable se sumir a la ciudad en la oscuridad.',
          genero: [accion, ciencia, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Detective Knight 1',
          imgMini: '/assets/img-mini/detective knight 1.jpg',
          imgGrande: '/assets/img-grande/detective knight 1.jpg',
          sinopsis: 'James Knight, un detective veterano de las exigentes calles de Los Ángeles, debe perseguir a unos criminales que huyen hacia Nueva York, donde su oscuro pasado choca con su caso actual.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Detective Knight 2',
          imgMini: '/assets/img-mini/detective knight 2.jpg',
          imgGrande: '/assets/img-grande/detective knight 2.jpg',
          sinopsis: 'El detective James Knight se encuentra en medio de una fuga de la prisión dirigida por Christmas Bomber, un fanático brutal cuyos discípulos de Santa están aterrorizando a la ciudad.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Detective Knight 3',
          imgMini: '/assets/img-mini/detective knight 3.jpg',
          imgGrande: '/assets/img-grande/detective knight 3.jpg',
          sinopsis: 'La asignación de James Knight al turno del Día de la Independencia se convierte en una carrera para evitar que una ambulancia desequilibrada ponga en peligro las festividades de la ciudad.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Lobo Vikingo',
          imgMini: '/assets/img-mini/Lobo Vikingo.jpg',
          imgGrande: '/assets/img-grande/Lobo Vikingo.jpg',
          sinopsis: 'Recién llegada al pueblo, una joven presencia un brutal asesinato en una fiesta y, a partir de ese momento, comienza a tener extrañas visiones y peculiares deseos.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Perseguidas',
          imgMini: '/assets/img-mini/Perseguidas.jpg',
          imgGrande: '/assets/img-grande/Perseguidas.jpg',
          sinopsis: 'Una camionera se ha visto obligada a pasar una carga ilícita para salvar a su hermano de una pandilla en la prisión. Con agentes del FBI siguiéndole la pista, Sally se ve desafiada cuando el paquete final resulta ser una adolescente.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Legion de Superheroes',
          imgMini: '/assets/img-mini/Legion de Superheroes.jpg',
          imgGrande: '/assets/img-grande/Legion de Superheroes.jpg',
          sinopsis: 'Supergirl asiste a la Academia de la Legión y descubre un complot tortuoso que involucra al grupo misterioso, el Círculo Oscuro.',
          genero: [animacion, superheroes, infantil],
          tipo: pelicula
     },

     {
          nombre: 'La forja de un campeon',
          imgMini: '/assets/img-mini/La forja de un campeon.jpg',
          imgGrande: '/assets/img-grande/La forja de un campeon.jpg',
          sinopsis: 'Un joven y talentoso boxeador, siguiendo los pasos de su abuelo, luchó hasta convertirse en el campeón más joven de la historia de Inglaterra. Esta es la historia real, jamás contada del nacimiento del boxeo.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El Mercenario',
          imgMini: '/assets/img-mini/el mercenario.jpg',
          imgGrande: '/assets/img-grande/el mercenario.jpg',
          sinopsis: 'Cuando una misión sale mal, un mercenario es dado por muerto y renace con una nueva perspectiva de la vida. Pero sus días pacíficos duran poco cuando los mercenarios con los que solía trabajar se cruzan en su camino nuevamente.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Los Buscamundos',
          imgMini: '/assets/img-mini/Los buscamundos.jpg',
          imgGrande: '/assets/img-grande/Los buscamundos.jpg',
          sinopsis: 'Un tití amante de los libros, se embarca en una aventura salvaje para viajar alrededor del planeta en ochenta días, después de aceptar el desafío de una rana codiciosa.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Espiritu Libre',
          imgMini: '/assets/img-mini/Espiritu libre.jpg',
          imgGrande: '/assets/img-grande/Espiritu libre.jpg',
          sinopsis: 'Una tenaz chica australiana enfrenta sus miedos y persigue su sueño de convertirse en la persona más joven en navegar sola alrededor del mundo.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Venus',
          imgMini: '/assets/img-mini/Venus.jpg',
          imgGrande: '/assets/img-grande/Venus.jpg',
          sinopsis: 'Una bailarina de discoteca roba un alijo de pastillas y es perseguida por mafiosos, refugiándose en un complejo de apartamentos maldito en las afueras de Madrid.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Nix La Entidad',
          imgMini: '/assets/img-mini/nix la entidad.jpg',
          imgGrande: '/assets/img-grande/nix la entidad.jpg',
          sinopsis: 'Una extraña entidad amenaza con destruir a los miembros de una familia en su viaje a través de una oscuridad y locura, posiblemente autocreada.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Pantera Negra 2 Wakanda Forever',
          imgMini: '/assets/img-mini/Pantera Negra 2 Wakanda Forever.jpg',
          imgGrande: '/assets/img-grande/Pantera Negra 2 Wakanda Forever.jpg',
          sinopsis: 'Tras la muerte del rey T’Challa, la reina Ramonda y sus subditos, luchan por proteger su nación de las potencias mundiales que aprovechan la debilidad de Wakanda sin Black Panther.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Bodas de plomo',
          imgMini: '/assets/img-mini/Bodas de plomo.jpg',
          imgGrande: '/assets/img-grande/Bodas de plomo.jpg',
          sinopsis: 'Darcy y Tom reúnen a sus familias para lo que será la boda del siglo, pero la vida de todos los asistentes estará en peligro cuando en medio de la celebración los toman como rehenes.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Ustedes',
          imgMini: '/assets/img-mini/Ustedes.jpg',
          imgGrande: '/assets/img-grande/Ustedes.jpg',
          sinopsis: 'Dos mileniales que viven en Los Ángeles y tienen distintas procedencias se enamoran y deben enfrentar la prueba más difícil de todas: conocer a sus respectivos padres.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'La Casa de Cera',
          imgMini: '/assets/img-mini/la casa de cera small.jpg',
          imgGrande: '/assets/img-grande/la casa de cera small.jpg',
          sinopsis: 'Un grupo de adolescentes se queda aislado en las proximidades de un extraño museo de cera y debe luchar para sobrevivir y no convertirse en la próxima exhibición.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Valiente',
          imgMini: '/assets/img-mini/Valiente poster.jpg',
          imgGrande: '/assets/img-grande/Valiente poster.jpg',
          sinopsis: 'Con la determinación de forjar su propio camino en la vida, la princesa Mérida desafía una tradición que trae caos a su reino. Mérida dependerá de su valentía y sus habilidades como arquera para deshacer una maldición bestial.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Reino Secreto',
          imgMini: '/assets/img-mini/el reino secreto.jpg',
          imgGrande: '/assets/img-grande/el reino secreto.jpg',
          sinopsis: 'Una adolescente se encuentra transportada a las profundidades de un bosque donde tiene lugar una batalla entre las fuerzas del bien y las fuerzas del mal. Se une a un grupo de personajes curiosos para salvar su mundo y el nuestro.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Justiciero',
          imgMini: '/assets/img-mini/el justiciero.jpg',
          imgGrande: '/assets/img-grande/el justiciero.jpg',
          sinopsis: 'Un hombre cree que ha dejado su misterioso pasado atrás y que puede llevar una nueva vida en paz. Pero cuando conoce a una joven bajo el control de gánsteres rusos ultra-violentos, no puede quedarse de brazos cruzados - tiene que ayudarla.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'El Justiciero 2',
          imgMini: '/assets/img-mini/el justiciero 2.jpg',
          imgGrande: '/assets/img-grande/el justiciero 2.jpg',
          sinopsis: 'Robert McCall imparte una justicia inquebrantable a los explotados y oprimidos, pero eso podría cambiar cuando se trata de un ser amado.',
          genero: [accion],
          tipo: pelicula
     },
     
     {
          nombre: 'Rocky 1',
          imgMini: '/assets/img-mini/rocky 1 poster.jpg',
          imgGrande: '/assets/img-grande/rocky 1 poster.jpg',
          sinopsis: 'Un boxeador poco conocido tiene la gran oportunidad de enfrentarse al campeón de los pesos pesados en un combate en el que espera estar a la altura y hacerse un nombre.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El Show de Truman',
          imgMini: '/assets/img-mini/el show de Truman.jpg',
          imgGrande: '/assets/img-grande/el show de Truman.jpg',
          sinopsis: 'Truman Burbank es un hombre normal. Lo que no sabe es que desde antes de nacer es el protagonista del mayor reality show mundial.',
          genero: [drama],
          tipo: pelicula
     },
     
     {
          nombre: 'Palmer',
          imgMini: '/assets/img-mini/PALMER.jpg',
          imgGrande: '/assets/img-grande/PALMER.jpg',
          sinopsis: 'Tras 12 años en prisión, el exjugador de fútbol Palmer vuelve a casa para rehacer su vida. Mientras se adapta a su nueva realidad, entabla amistad con un niño abandonado, pero su pasado le persigue y amenaza con destruir su nueva familia.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'La Purga: La noche de las bestias',
          imgMini: '/assets/img-mini/La Purga 1.jpg',
          imgGrande: '/assets/img-grande/La Purga 1.jpg',
          sinopsis: 'Una familia adinerada es retenida como rehén por albergar al objetivo de un sindicato asesino durante la Purga, un período de 12 horas en el que cualquier delito es legal.',
          genero: [terror, suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Anarchy: La noche de las bestias',
          imgMini: '/assets/img-mini/La Purga 2.jpg',
          imgGrande: '/assets/img-grande/La Purga 2.jpg',
          sinopsis: 'Tres grupos de personas varadas en las calles en la Noche de Purga tratan de sobrevivir al caos.',
          genero: [terror, suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Election: La noche de las bestias',
          imgMini: '/assets/img-mini/La Purga 3.jpg',
          imgGrande: '/assets/img-grande/La Purga 3.jpg',
          sinopsis: 'El exsargento de policía Barnes se convierte en jefe de seguridad de la senadora Charlie Roan, una candidata a la presidencia amenazada de muerte en la noche de la purga debido a su voto para eliminarla.',
          genero: [terror, suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'La primera purga: La noche de las bestias',
          imgMini: '/assets/img-mini/La Purga 4.jpg',
          imgGrande: '/assets/img-grande/La Purga 4.jpg',
          sinopsis: 'El tercer partido político de Estados Unidos, los Nuevos Padres Fundadores de América, llega al poder y realiza un experimento: no hay leyes durante 12 horas en Staten Island. Nadie tiene que quedarse en la isla, pero se dan $ 5,000 a cualquiera que lo haga.',
          genero: [terror, suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'La Purga: Por siempre',
          imgMini: '/assets/img-mini/purga por siempre small.jpg',
          imgGrande: '/assets/img-grande/purga por siempre small.jpg',
          sinopsis: 'Todas las reglas se rompen cuando una secta de merodeadores decide que la purga anual no se detendrá al amanecer y, por el contrario, nunca debe terminar.',
          genero: [terror, suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Polar',
          imgMini: '/assets/img-mini/polar.jpg',
          imgGrande: '/assets/img-grande/polar.jpg',
          sinopsis: 'El mejor asesino del mundo, Duncan Vizla, se está acostumbrando a la jubilación cuando su previo jefe decide que es riesgo para la compañía. Contra su voluntad, tiene que luchar contra un ejército de jóvenes asesinos.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Elysium',
          imgMini: '/assets/img-mini/elysium.jpg',
          imgGrande: '/assets/img-grande/elysium.jpg',
          sinopsis: 'En el año 2154, los muy ricos viven en una estación espacial artificial, mientras que el resto de la población reside en una Tierra en ruinas. Un hombre asume una misión que podría traer igualdad a los mundos polarizados.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Pasajeros',
          imgMini: '/assets/img-mini/Pasajeros.jpg',
          imgGrande: '/assets/img-grande/Pasajeros.jpg',
          sinopsis: 'Una avería en una cápsula de hibernación de una nave espacial que viaja a un lejano planeta colonia despierta a un pasajero 90 años antes de lo previsto.',
          genero: [romance, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'La Pasion de Cristo',
          imgMini: '/assets/img-mini/la pasion de cristo.jpg',
          imgGrande: '/assets/img-grande/la pasion de cristo.jpg',
          sinopsis: 'La Pasión de Cristo recrea las últimas doce horas de la vida de Jesús de Nazaret, desde el momento en el que acude al Monte de los Olivos hasta el momento de su muerte en la cruz.',
          genero: [drama, religioso],
          tipo: pelicula
     },

     {
          nombre: 'El Unico Sobreviviente',
          imgMini: '/assets/img-mini/el unico sobreviviente.jpg',
          imgGrande: '/assets/img-grande/el unico sobreviviente.jpg',
          sinopsis: 'A un equipo de élite de las fuerzas especiales del ejército norteamericano le encargan una peligrosa misión, la operación Red Wing. Su objetivo es capturar o matar a un líder terrorista talibán, Admad Shad, que se esconde en una zona boscosa de Afganistán.',
          genero: [accion, belico],
          tipo: pelicula
     },

     {
          nombre: 'Transformers 1',
          imgMini: '/assets/img-mini/transformers 1.jpg',
          imgGrande: '/assets/img-grande/transformers 1.jpg',
          sinopsis: 'Una antigua lucha entre dos razas cibertronianas, los heroicos autobots y los malvados decepticons, llega a la Tierra, con una pista sobre el poder definitivo que tiene un adolescente.',
          genero: [accion, ciencia],
          tipo: pelicula
     },
     
     {
          nombre: 'Transformers 2 La venganza de los caidos',
          imgMini: '/assets/img-mini/transformers 2.jpg',
          imgGrande: '/assets/img-grande/transformers 2.jpg',
          sinopsis: 'Sam Witwicky deja atrás a los autobots para llevar una vida normal. Pero cuando su mente se llena de símbolos crípticos, los decepticons lo atacan y es arrastrado de nuevo a la guerra de los transformers.',
          genero: [accion, ciencia],
          tipo: pelicula
     },
     
     {
          nombre: 'Transformers 3 El lado oscuro de la luna',
          imgMini: '/assets/img-mini/transformers 3.jpg',
          imgGrande: '/assets/img-grande/transformers 3.jpg',
          sinopsis: 'Los autobots se enteran de la existencia de una nave espacial cybertroniana oculta en la Luna, y compiten con los decepticons para alcanzarla y conocer sus secretos.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Transformers 4 La era de la extincion',
          imgMini: '/assets/img-mini/transformers 4.jpg',
          imgGrande: '/assets/img-grande/transformers 4.jpg',
          sinopsis: 'Cuando la humanidad se alía con un cazarrecompensas para perseguir a Optimus Prime, los autobots acuden a un mecánico y su familia en busca de ayuda.',
          genero: [accion, ciencia],
          tipo: pelicula
     },
     
     {
          nombre: 'Transformers 5 El ultimo caballero',
          imgMini: '/assets/img-mini/transformers 5.jpg',
          imgGrande: '/assets/img-grande/transformers 5.jpg',
          sinopsis: 'Autobots y decepticons están en guerra, mientras los humanos se mantienen al margen. Optimus Prime se ha ido. La clave para salvar el futuro está enterrada en los secretos del pasado, en la historia oculta de los transformers en la Tierra.',
          genero: [accion, ciencia],
          tipo: pelicula
     },
     
     {
          nombre: 'Transformers 6 Bummblebee',
          imgMini: '/assets/img-mini/transformers 6.jpg',
          imgGrande: '/assets/img-grande/transformers 6.jpg',
          sinopsis: 'A la fuga en 1987, Bumblebee encuentra refugio en un depósito de chatarra en una pequeña ciudad costera de California. Charlie, al borde de cumplir 18 años y buscando su lugar en el mundo, descubre a Bumblebee herido.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'El Francotirador',
          imgMini: '/assets/img-mini/el francotirador.jpg',
          imgGrande: '/assets/img-grande/el francotirador.jpg',
          sinopsis: 'El francotirador de Navy SEAL, Chris Kyle, salva innumerables vidas en el campo de batalla y se convierte en una leyenda. Sin embargo, de vuelta a casa tras cuatro misiones, Chris descubre que es la guerra lo que no puede dejar atrás.',
          genero: [accion, belico],
          tipo: pelicula
     },

     {
          nombre: 'Cenicienta',
          imgMini: '/assets/img-mini/cenicienta.jpg',
          imgGrande: '/assets/img-grande/cenicienta.jpg',
          sinopsis: 'Cuando su padre fallece inesperadamente, la joven Ella se encuentra a merced de su cruel madrastra y sus maquiavélicas hermanastras. Jamás dispuesta a perder la esperanza, su suerte empieza a cambiar después de encontrarse con un atractivo desconocido.',
          genero: [romance, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Boda Sangrienta',
          imgMini: '/assets/img-mini/boda sangrienta.jpg',
          imgGrande: '/assets/img-grande/boda sangrienta.jpg',
          sinopsis: 'La noche de bodas de una novia da un giro siniestro cuando sus nuevos suegros la obligan a formar parte de un juego aterrador.',
          genero: [accion, terror],
          tipo: pelicula
     },

     {
          nombre: 'Max Payne',
          imgMini: '/assets/img-mini/max payne.jpg',
          imgGrande: '/assets/img-grande/max payne.jpg',
          sinopsis: 'Para resolver una serie de asesinatos en la ciudad de Nueva York, se unen un detective de la policía y un asesino, que serán perseguidos por la policía, la mafia y una corporación despiadada.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Robot 7723',
          imgMini: '/assets/img-mini/robot 7723.jpg',
          imgGrande: '/assets/img-grande/robot 7723.jpg',
          sinopsis: 'Una amistad con un robot de alto secreto convierte la vida de una chica solitaria en una emocionante aventura al enfrentarse a matones, robots malvados y un loco intrigante.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Descenso 1',
          imgMini: '/assets/img-mini/el descenso 1.jpg',
          imgGrande: '/assets/img-grande/el descenso 1.jpg',
          sinopsis: 'Una expedición de espeleología sale terriblemente mal, ya que los exploradores quedan atrapados y finalmente son perseguidos por una extraña raza de depredadores.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'El Descenso 2',
          imgMini: '/assets/img-mini/el descenso 2.jpg',
          imgGrande: '/assets/img-grande/el descenso 2.jpg',
          sinopsis: 'Negándose a creer su historia sobre los monstruos que habitan en las cuevas, la única sobreviviente de una exploración que salió terriblemente mal se ve obligada a seguir a las autoridades de regreso a las cuevas donde algo aguarda.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Teen Wolf',
          imgMini: '/assets/img-mini/Teen Wolf.jpg',
          imgGrande: '/assets/img-grande/Teen Wolf.jpg',
          sinopsis: 'Un mal terrible ha salido a la luz. Solo un hombre lobo como Scott McCall puede reunir nuevos aliados para luchar contra lo que podría ser el enemigo más letal y poderoso al que se haya enfrentado.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Hay algo mal con los niños',
          imgMini: '/assets/img-mini/hay algo mal con los niños.jpg',
          imgGrande: '/assets/img-grande/hay algo mal con los niños.jpg',
          sinopsis: 'Una familia hace un viaje de fin de semana con amigos de toda la vida y sus dos hijos pequeños, pero sospechan algo sobrenatural cuando los niños se comportan de manera extraña después de desaparecer en el bosque durante la noche.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Megan',
          imgMini: '/assets/img-mini/Megan.jpg',
          imgGrande: '/assets/img-grande/Megan.jpg',
          sinopsis: 'Gemma, diseñadora de una muñeca de inteligencia artificial extraordinaria, se convierte en la tutora legal de una niña. Abrumada por la responsabilidad, cede su educación y protección a la muñeca, sin saber que las consecuencias serán terribles.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Mar de Sangre',
          imgMini: '/assets/img-mini/Mar de Sangre.jpg',
          imgGrande: '/assets/img-grande/Mar de Sangre.jpg',
          sinopsis: 'Un grupo de amigos que disfrutan de un fin de semana roban un par de motos de agua para dirigirse al mar pero terminan en una horrible colisión frontal. Ellos luchan por encontrar el camino de regreso a casa llevando a un amigo gravemente herido mientras los depredadores de las aguas los acechan.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Narvik',
          imgMini: '/assets/img-mini/Narvik.jpg',
          imgGrande: '/assets/img-grande/Narvik.jpg',
          sinopsis: 'Abril de 1940. Los ojos del mundo están puestos en Narvik, una pequeña ciudad del norte de Noruega, fuente del mineral de hierro necesario para la maquinaria de guerra de Hitler.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Perro Perdido',
          imgMini: '/assets/img-mini/perro perdido.jpg',
          imgGrande: '/assets/img-grande/perro perdido.jpg',
          sinopsis: 'Cuando su querido perro desaparece, un joven se embarca en una increíble búsqueda con sus padres para encontrarlo y darle un medicamento que le salve la vida.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Jung_E',
          imgMini: '/assets/img-mini/Jung_E.jpg',
          imgGrande: '/assets/img-grande/Jung_E.jpg',
          sinopsis: 'En una Tierra inhabitable del siglo XXII, el desenlace de una guerra civil depende de la clonación del cerebro de un soldado de élite para crear un robot mercenario.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Historia de Honor',
          imgMini: '/assets/img-mini/Historia de Honor.jpg',
          imgGrande: '/assets/img-grande/Historia de Honor.jpg',
          sinopsis: 'Un par de pilotos de caza de la Marina estadounidense arriesgan sus vidas durante la guerra de Corea y se convierten en algunos de los compañeros de ala más célebres de la Marina.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Sick',
          imgMini: '/assets/img-mini/Sick.jpg',
          imgGrande: '/assets/img-grande/Sick.jpg',
          sinopsis: 'Durante la pandemia, Parker y su mejor amigo deciden realizar la cuarentena en la casa familiar del lago donde estarán aislados del mundo… o al menos eso es lo que piensan.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'El asesino perfecto',
          imgMini: '/assets/img-mini/El asesino perfecto.jpg',
          imgGrande: '/assets/img-grande/El asesino perfecto.jpg',
          sinopsis: 'Un mafioso tiene que sacrificarlo todo e ir en contra de su propia organización cuando descubre que su jefe está involucrado en el tráfico de mujeres. Ahora, hace todo lo posible para salvar a una joven y encontrar su redención.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Liberanos del mal',
          imgMini: '/assets/img-mini/Liberanos del mal.jpg',
          imgGrande: '/assets/img-grande/Liberanos del mal.jpg',
          sinopsis: 'Veremos como un asesino va a Tailandia para resolver un caso de secuestro vinculado a él, y se ve perseguido por un hombre a cuyo hermano mató.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Terrifier 1',
          imgMini: '/assets/img-mini/Terrifier.jpg',
          imgGrande: '/assets/img-grande/Terrifier.jpg',
          sinopsis: 'El payaso psicópata Art aterroriza a dos chicas durante la noche de Halloween, matando a todos aquellos que se interponen en su camino.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Habla con Jane',
          imgMini: '/assets/img-mini/Habla con Jane.jpg',
          imgGrande: '/assets/img-grande/Habla con Jane.jpg',
          sinopsis: 'Un ama de casa está encantada con la noticia de su embarazo, hasta que descubre que representa una amenaza para su propia vida. No tiene dónde acudir hasta que conoce a un grupo clandestino de mujeres que lo arriesgan todo.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El inspector sun',
          imgMini: '/assets/img-mini/El inspector sun.jpg',
          imgGrande: '/assets/img-grande/El inspector sun.jpg',
          sinopsis: 'Ambientado en el mundo de los insectos, donde las arañas son la policía, un detective aborda un hidroavión a San Francisco después de finalmente capturar a su archienemigo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Upgrade Maquina asesina',
          imgMini: '/assets/img-mini/Upgrade Maquina asesina.jpg',
          imgGrande: '/assets/img-grande/Upgrade Maquina asesina.jpg',
          sinopsis: 'Un hombre minusválido se somete a una operación experimental que le dotará de una agilidad y fuerza sobrehumanas porque tiene una obsesión: vengarse de los criminales que asesinaron a su esposa.',
          genero: [accion, ciencia, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El gato con botas 2 El ultimo deseo',
          imgMini: '/assets/img-mini/El gato con botas 2 El ultimo deseo.jpg',
          imgGrande: '/assets/img-grande/El gato con botas 2 El ultimo deseo.jpg',
          sinopsis: 'El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: Ha agotado ocho de sus nueve vidas. El Gato con Botas se embarca en un viaje épico para encontrar al mítico Último Deseo y recuperar sus nueve vidas.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Menu',
          imgMini: '/assets/img-mini/El Menu.jpg',
          imgGrande: '/assets/img-grande/El Menu.jpg',
          sinopsis: 'Una pareja viaja para tener una experiencia culinaria única en el mundo, cuando el ingrediente secreto del platillo preparado por el chef tendrá un resultado sorprendente para la pareja.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Los crimenes de la academia',
          imgMini: '/assets/img-mini/Los crimenes de la academia.jpg',
          imgGrande: '/assets/img-grande/Los crimenes de la academia.jpg',
          sinopsis: 'Un detective experimentado investiga una serie de asesinatos en la Academia Militar En West Point, en 1830. En su investigación, lo ayuda un joven cadete inteligente y entusiasta que el mundo conocerá como Edgar Allan Poe.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Matilda el musical',
          imgMini: '/assets/img-mini/Matilda el musical.jpg',
          imgGrande: '/assets/img-grande/Matilda el musical.jpg',
          sinopsis: 'Matilda es una niña extraordinaria que, armada con una mente aguda y una vívida imaginación, se atreve a tomar partido para cambiar su historia con resultados milagrosos.',
          genero: [infantil],
          tipo: pelicula
     },

     {
          nombre: 'Hasta los huesos',
          imgMini: '/assets/img-mini/Hasta los huesos small.jpg',
          imgGrande: '/assets/img-grande/Hasta los huesos small.jpg',
          sinopsis: 'Cuenta la historia del primer amor entre Maren, una joven que está aprendiendo a sobrevivir al margen de la sociedad, y Lee, un vagabundo con ideas muy intensas que vive marginado. Cuando se conocen, se unen en un viaje de mil millas que les lleva por carreteras, pasajes ocultos y caminos alternos.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Ruido de fondo',
          imgMini: '/assets/img-mini/Ruido de fondo small.jpg',
          imgGrande: '/assets/img-grande/Ruido de fondo small.jpg',
          sinopsis: 'Dramatiza los intentos de una familia estadounidense contemporánea de lidiar con los conflictos de la vida mientras se enfrenta a los misterios universales del amor, la muerte y la posibilidad de la felicidad en un mundo incierto.',
          genero: [comedia, drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Los Fabelman',
          imgMini: '/assets/img-mini/Los Fabelman small.jpg',
          imgGrande: '/assets/img-grande/Los Fabelman small.jpg',
          sinopsis: 'Al crecer en la era de Arizona posterior a la Segunda Guerra Mundial, un joven llamado Sammy Fabelman descubre un secreto familiar devastador y explora cómo el poder de las películas puede ayudarlo a ver la verdad.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Tokyo Ghoul',
          imgMini: '/assets/img-mini/Tokyo Ghoul.jpg',
          imgGrande: '/assets/img-grande/Tokyo Ghoul.jpg',
          sinopsis: 'Un estudiante universitario de Tokio es atacado por un ghoul, un humano superpoderoso que se alimenta de carne humana. Sobrevive, pero ahora es en parte ghoul y se convierte en un fugitivo.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Micky salva la navidad',
          imgMini: '/assets/img-mini/Micky salva la navidad.jpg',
          imgGrande: '/assets/img-grande/Micky salva la navidad.jpg',
          sinopsis: 'Mickey, Minnie y sus amigos intentan celebrar la Navidad perfecta en su cabaña nevada; cuando Pluto hace que Santa pierda todos los regalos en su trineo, los amigos viajan al Polo Norte en una búsqueda para salvar la Navidad.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Yo estuve aqui',
          imgMini: '/assets/img-mini/Yo estuve aqui.jpg',
          imgGrande: '/assets/img-grande/Yo estuve aqui.jpg',
          sinopsis: 'Sigue a un joven grafitero que descubre un impactante secreto que lo pondría a él y a sus allegados en peligro.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Soy leyenda',
          imgMini: '/assets/img-mini/Soy leyenda.jpg',
          imgGrande: '/assets/img-grande/Soy leyenda.jpg',
          sinopsis: 'Años después de que una plaga mate a la mayor parte de la humanidad y transforme al resto en monstruos, el único superviviente de la ciudad de Nueva York lucha valientemente por encontrar una cura.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Enemigo Publico',
          imgMini: '/assets/img-mini/Enemigo publico.jpg',
          imgGrande: '/assets/img-grande/Enemigo publico.jpg',
          sinopsis: 'Un abogado se convierte en el blanco de un político corrupto y de sus matones de la NSA cuando recibe accidentalmente pruebas clave de un delito por motivos políticos.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La bestia',
          imgMini: '/assets/img-mini/la bestia small.jpg',
          imgGrande: '/assets/img-grande/la bestia small.jpg',
          sinopsis: 'Un padre y sus dos hijas adolescentes se ven perseguidos por un enorme león rebelde que intenta demostrar que Savanna tiene un solo depredador.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La caida del castillo',
          imgMini: '/assets/img-mini/la caida del castillo small.jpg',
          imgGrande: '/assets/img-grande/la caida del castillo small.jpg',
          sinopsis: 'Pandillas rivales buscan millones de dólares escondidos dentro de un condominio de lujo que está programado para ser demolido, pero primero tienen que lidiar con el conserje quien encontró el botín primero.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La calma que viene despues',
          imgMini: '/assets/img-mini/la calma que viene despues small.jpg',
          imgGrande: '/assets/img-grande/la calma que viene despues small.jpg',
          sinopsis: 'Una mujer logra sobrevivir dentro de los restos de un edificio luego de que un tsunami destruyera su ciudad. Su soledad termina cuando repentinamente un niña entra en su vida.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La Chica mas afortunada del mundo',
          imgMini: '/assets/img-mini/La Chica mas afortunada del mundo small.jpg',
          imgGrande: '/assets/img-grande/La Chica mas afortunada del mundo small.jpg',
          sinopsis: 'Ani Fanelli es una chica de 28 años que parece tener todo lo que una joven desearía, incluyendo la vida perfecta. Sin embargo, no es oro todo lo que reluce, ya que la perfección que muestra Ani esconde un oscuro trauma de su pasado.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La chica salvaje',
          imgMini: '/assets/img-mini/la chica salvaje small.jpg',
          imgGrande: '/assets/img-grande/la chica salvaje small.jpg',
          sinopsis: 'Una mujer que se crió sola en los pantanos del sur, se vuelve la sospechosa principal en la muerte de un hombre con el que mantuvo una relación años atrás.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La ciudad de las fieras',
          imgMini: '/assets/img-mini/la ciudad de las fieras small.jpg',
          imgGrande: '/assets/img-grande/la ciudad de las fieras small.jpg',
          sinopsis: 'Un joven huérfano utiliza el hip-hop para hacer frente a la violencia que le rodea. Sin embargo, quizá se vea obligado a abandonarlo luego de mudarse a la casa de su abuelo, al que nunca conoció.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'La Escuela del bien y del mal',
          imgMini: '/assets/img-mini/La Escuela del bien y del mal small.jpg',
          imgGrande: '/assets/img-grande/La Escuela del bien y del mal small.jpg',
          sinopsis: 'Sophie y Agatha son entrenadas para ser héroes de cuento de hadas y villanos en la Escuela del Bien y del Mal y a pesar de las apariencias, muy pronto estas dos amigas averiguarán que sus destinos han sido invertidos.',
          genero: [accion, comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'La Espada de los 47 Ronin',
          imgMini: '/assets/img-mini/La Espada de los 47 Ronin small.jpg',
          imgGrande: '/assets/img-grande/La Espada de los 47 Ronin small.jpg',
          sinopsis: 'Antiguos guerreros japoneses Ronin ambientados 300 años después de Ronin 47, en un mundo moderno donde los clanes Samurai existen en completo secreto.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La gran aventura de Blue',
          imgMini: '/assets/img-mini/La gran aventura de Blue small.jpg',
          imgGrande: '/assets/img-grande/La gran aventura de Blue small.jpg',
          sinopsis: 'Josh y Blue van en patinete a la ciudad de Nueva York para hacer una audición para el musical de Broadway de Rainbow Puppy, pero se pierden cuando Josh accidentalmente deja su Handy Dandy Notebook en casa.',
          genero: [infantil],
          tipo: pelicula
     },

     {
          nombre: 'La guerra del futuro',
          imgMini: '/assets/img-mini/La guerra del futuro small.jpg',
          imgGrande: '/assets/img-grande/La guerra del futuro small.jpg',
          sinopsis: 'uando un meteorito que transporta una nociva planta se estrella en la Tierra, un escuadrón suicida solo tiene unas horas para salvar su ciudad de la destrucción total.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'La huerfana el origen',
          imgMini: '/assets/img-mini/la huerfana el origen small.jpg',
          imgGrande: '/assets/img-grande/la huerfana el origen small.jpg',
          sinopsis: 'Desquiciada Leena dirige una huida de un asilo estonio y viaja a América robando la identidad de la hija de una familia. Sin embargo, la vida como Esther la pone en contra de una madre que hará cualquier cosa para proteger a su familia.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Leyenda Regresa',
          imgMini: '/assets/img-mini/La Leyenda Regresa small.jpg',
          imgGrande: '/assets/img-grande/La Leyenda Regresa small.jpg',
          sinopsis: 'Un granjero entrado en edad y su hijo ayudan a un forajido en problemas. El infierno se desata.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'La luz del diablo',
          imgMini: '/assets/img-mini/La luz del diablo small.jpg',
          imgGrande: '/assets/img-grande/La luz del diablo small.jpg',
          sinopsis: 'Una joven monja, la hermana Ann, se prepara para un exorcismo y se enfrenta a una fuerza demoniaca que está misteriosamente relacionada con su pasado.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La maldicion de Bridge Hollow',
          imgMini: '/assets/img-mini/La maldicion de Bridge Hollow small.jpg',
          imgGrande: '/assets/img-grande/La maldicion de Bridge Hollow small.jpg',
          sinopsis: 'Un padre y su hija deberán trabajar en equipo para salvar a la ciudad, de los adornos de Halloween que han empezado a tomar vida y a generar caos gracias a un espíritu ancestral.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'La maldicion El despertar de los muertos',
          imgMini: '/assets/img-mini/La maldicion El despertar de los muertos small.jpg',
          imgGrande: '/assets/img-grande/La maldicion El despertar de los muertos small.jpg',
          sinopsis: 'Un misterioso caso de asesinato en serie tiene lugar por jaechaui (cadáveres que han resucitado y son capaces de hablar). Estos cuerpos son manipulados por alguien.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: '50 Sombras de Grey parte 1',
          imgMini: '/assets/img-mini/50 sombras de grey.jpg',
          imgGrande: '/assets/img-grande/50 sombras de grey.jpg',
          sinopsis: 'La vida de la estudiante de literatura Anastasia Steele cambia para siempre cuando conoce al guapo y atormentado multimillonario Christian Grey.',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: '50 Sombras Mas Oscuras parte 2',
          imgMini: '/assets/img-mini/50 sombras 2 small.jpg',
          imgGrande: '/assets/img-grande/50 sombras 2 small.jpg',
          sinopsis: 'Christian lucha contra sus demonios internos mientras Anastasia se enfrenta a la envidia y el odio que siente hacia las mujeres que la precedieron.',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: '50 Sombras Liberadas parte 3',
          imgMini: '/assets/img-mini/50 sombras 3 small.jpg',
          imgGrande: '/assets/img-grande/50 sombras 3 small.jpg',
          sinopsis: 'Anastasia y Christian se casan, pero Jack Hyde sigue amenazando su relación.',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'Piratas del Caribe 1',
          imgMini: '/assets/img-mini/piratas del caribe 1.jpg',
          imgGrande: '/assets/img-grande/piratas del caribe 1.jpg',
          sinopsis: 'El herrero Will Turner se une al excéntrico pirata Jack Sparrow para salvar a su amor, la hija del gobernador, de los antiguos aliados piratas de Jack, que ahora son muertos vivientes.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Piratas del Caribe 2',
          imgMini: '/assets/img-mini/piratas del caribe 2 small.jpg',
          imgGrande: '/assets/img-grande/piratas del caribe 2 small.jpg',
          sinopsis: 'Jack Sparrow se apresura a recuperar el corazón de Davy Jones para evitar esclavizar su alma al servicio de Jones, mientras otros amigos y enemigos buscan también el corazón para sus propios fines.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Piratas del Caribe 3',
          imgMini: '/assets/img-mini/piratas del caribe 3.jpg',
          imgGrande: '/assets/img-grande/piratas del caribe 3.jpg',
          sinopsis: 'El capitán Barbossa, Will Turner y Elizabeth Swann deberán navegar por los confines del mapa, sortear la traición, encontrar a Jack Sparrow y establecer sus últimas alianzas para una última batalla decisiva.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Piratas del Caribe 4',
          imgMini: '/assets/img-mini/piratasdel caribe 4.jpg',
          imgGrande: '/assets/img-grande/piratasdel caribe 4.jpg',
          sinopsis: 'Jack Sparrow y Barbossa se embarcan en una búsqueda para encontrar la escurridiza fuente de la juventud, solo para descubrir que Barbanegra y su hija también están tras ella.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Piratas del Caribe 5',
          imgMini: '/assets/img-mini/piratas del caribe 5.jpg',
          imgGrande: '/assets/img-grande/piratas del caribe 5.jpg',
          sinopsis: 'Jack Sparrow busca el legendario tridente de Poseidón, mientras es perseguido por un grupo de piratas fantasma liderados por el temible capitán Salazar.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La Maquina Infernal',
          imgMini: '/assets/img-mini/LA MAQUINA INFERNAL small.jpg',
          imgGrande: '/assets/img-grande/LA MAQUINA INFERNAL small.jpg',
          sinopsis: 'Un autor solitario y controvertido sale de su escondite cuando comienza a recibir un sinfín de cartas de un fan obsesivo. Lo que sigue es un laberinto peligroso mientras busca a la persona detrás de los mensajes crípticos.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La Medium',
          imgMini: '/assets/img-mini/la medium small.jpg',
          imgGrande: '/assets/img-grande/la medium small.jpg',
          sinopsis: 'Una historia espantosa sobre la herencia de un chamán en la región de Isan en Tailandia y lo que podría estar poseyendo a un miembro de la familia, podría no ser la Diosa que pretende ser.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Mujer Rey',
          imgMini: '/assets/img-mini/La Mujer Rey small.jpg',
          imgGrande: '/assets/img-grande/La Mujer Rey small.jpg',
          sinopsis: 'Sigue el viaje de la general Nanisca, mientras ella entrena a la próxima generación de reclutas y las prepara para la batalla contra un enemigo decidido a destruir su modo de vida y libertad.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'La oscuridad',
          imgMini: '/assets/img-mini/la oscuridad small.jpg',
          imgGrande: '/assets/img-grande/la oscuridad small.jpg',
          sinopsis: '1973. Una joven enfermera trabaja en el turno de noche en un hospital en ruinas mientras los mineros en huelga cortan el suministro eléctrico en Gran Bretaña. Pero dentro de las paredes acecha una presencia aterradora.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Guerra de honor',
          imgMini: '/assets/img-mini/guerra de honor small.jpg',
          imgGrande: '/assets/img-grande/guerra de honor small.jpg',
          sinopsis: 'Un oficial de policía egipcio llamado general Yousef al-Masri vive en el barrio de Karamouz en Alejandría. La película se remonta al reinado del rey Faruk antes de la revolución de 1952 en la ocupación inglesa de Egipto.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Guerra oculta',
          imgMini: '/assets/img-mini/guerra oculta small.jpg',
          imgGrande: '/assets/img-grande/guerra oculta small.jpg',
          sinopsis: 'Un grupo de oficiales con base en un laberinto ultrasecreto debe luchar por sus vidas contra Hatchet, un brillante e infame preso altamente peligroso. Cuando escapa, se convierte en una amenaza de consecuencias nefastas y de largo alcance.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Halloween La Noche Final',
          imgMini: '/assets/img-mini/Halloween La Noche Final small.jpg',
          imgGrande: '/assets/img-grande/Halloween La Noche Final small.jpg',
          sinopsis: 'Cuatro años después de su último encuentro, Laurie Strode ha decidido seguir con su vida, pero una serie de eventos terroríficos la obligan a enfrentarse por última vez a Michael Myers, la personificación del mal.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Hasta la muerte',
          imgMini: '/assets/img-mini/hasta la muerte small.jpg',
          imgGrande: '/assets/img-grande/hasta la muerte small.jpg',
          sinopsis: 'Una mujer es abandonada esposada a su marido muerto como parte de un plan de venganza enfermo. Incapaz de liberarse, tiene que sobrevivir cuando llegan dos asesinos para acabar con ella.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Hellraiser',
          imgMini: '/assets/img-mini/Hellraiser small.jpg',
          imgGrande: '/assets/img-grande/Hellraiser small.jpg',
          sinopsis: 'Una versión del clásico de terror de Clive Barker de 1987 en la que una joven que lucha contra la adicción se hace con una antigua caja de rompecabezas, sin saber que su propósito es invocar a los cenobitas.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Herencia maldita',
          imgMini: '/assets/img-mini/herencia maldita small.jpg',
          imgGrande: '/assets/img-grande/herencia maldita small.jpg',
          sinopsis: 'Maya y su mejor amiga Dini tratan de sobrevivir en la ciudad sin tener una familia. Un día, Maya descubre que es posible que haya heredado una gran fortuna de sus pudientes antepasados, por lo que decide regresar a su pueblo natal junto a su única amiga. Sin embargo, un peligro aterrador les espera allí a ambas.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Hombre lobo por la noche',
          imgMini: '/assets/img-mini/hombre lobo por la noche small.jpg',
          imgGrande: '/assets/img-grande/hombre lobo por la noche small.jpg',
          sinopsis: 'Un superhéroe licántropo lucha contra el mal utilizando las habilidades que le otorga una maldición provocada por su linaje.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Huevitos congelados',
          imgMini: '/assets/img-mini/Huevitos congelados small.jpg',
          imgGrande: '/assets/img-grande/Huevitos congelados small.jpg',
          sinopsis: 'En esta nueva aventura Toto y su familia tendrán que viajar al Polo Sur para cumplir la promesa que le hace a su madre antes de morir; para lograrlo, tendrán que vencer algunos obstáculos que les enseñaran lo importante que es el trabajo en equipo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Inhumano',
          imgMini: '/assets/img-mini/inhumano small.jpg',
          imgGrande: '/assets/img-grande/inhumano small.jpg',
          sinopsis: 'Un grupo de estudiantes de secundaria cuyo autobús escolar choca en una excursión. Las relaciones se ponen a prueba una vez que se dan cuenta de que están siendo acosados ​​por un atacante que quiere expulsarlos y llevarlos a una lucha.',
          genero: [suspenso, terror, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Invitacion al Infierno',
          imgMini: '/assets/img-mini/Invitacion al Infierno small.jpg',
          imgGrande: '/assets/img-grande/Invitacion al Infierno small.jpg',
          sinopsis: 'Tras la muerte de su madre y quedarse sin parientes conocidos, Evie se hace un test de ADN y descubre a un primo lejano que nunca supo que tuvo. Al ser invitada por su recién encontrada nueva familia a una fastuosa boda en la campiña inglesa, se verá pronto seducida por el sexy aristócrata anfitrión, pero acabará envuelta en una pesadilla de supervivencia al destapar los retorcidos secretos en la historia de su familia.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Jack en la caja maldita',
          imgMini: '/assets/img-mini/jack en la caja maldita small.jpg',
          imgGrande: '/assets/img-grande/jack en la caja maldita small.jpg',
          sinopsis: 'Los nuevos propietarios de una antigua caja con un muñeco descubren que el siniestro payaso que la habita tiene vida propia.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Jefe en pañales Especial de navidad',
          imgMini: '/assets/img-mini/Jefe en pañales Especial de navidad small.jpg',
          imgGrande: '/assets/img-grande/Jefe en pañales Especial de navidad small.jpg',
          sinopsis: 'La Nochebuena da un giro cuando Boss Baby accidentalmente cambia de lugar con uno de los elfos de Santa y queda varado en el Polo Norte.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Exodo la ultima marea',
          imgMini: '/assets/img-mini/exodo la ultima marea small.jpg',
          imgGrande: '/assets/img-grande/exodo la ultima marea small.jpg',
          sinopsis: 'Ambientada en un futuro lejano, una astronauta naufragando en la Tierra, debe decidir el destino de la población restante del páramo.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'F1 El Furioso',
          imgMini: '/assets/img-mini/F1 El Furioso small.jpg',
          imgGrande: '/assets/img-grande/F1 El Furioso small.jpg',
          sinopsis: 'Ni siquiera una bala puede detener a un verdadero héroe.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Fantasmas de guerra',
          imgMini: '/assets/img-mini/fantasmas de guerra small.jpg',
          imgGrande: '/assets/img-grande/fantasmas de guerra small.jpg',
          sinopsis: 'Cinco soldados estadounidenses asignados a un Chateau francés al fin de la segunda guerra mundial se arriesgan a descender hacia la locura cuando encuentran a un enemigo sobrenatural más aterrador que nada que hayan visto en el frente.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Final del camino',
          imgMini: '/assets/img-mini/FINAL DEL CAMINO small.jpg',
          imgGrande: '/assets/img-grande/FINAL DEL CAMINO small.jpg',
          sinopsis: 'Durante un desgarrador viaje, una madre viuda lucha para proteger a su familia cuando un asesinato y una bolsa de dinero que ha desaparecido ponen sus vidas en peligro.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Francotirador mision secreta',
          imgMini: '/assets/img-mini/francotirador mision secreta small.jpg',
          imgGrande: '/assets/img-grande/francotirador mision secreta small.jpg',
          sinopsis: 'Cuando un agente federal corrupto está involucrado en una red de tráfico sexual de personas, el francotirador y novato de la CIA Brandon Beckett se vuelve rebelde y se une a sus antiguos aliados, el agente de seguridad nacional Zero y la asesina Lady Death para descubrir al agente corrupto y acabar con la organización criminal.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Frente al tornado',
          imgMini: '/assets/img-mini/frente al tornado small.jpg',
          imgGrande: '/assets/img-grande/frente al tornado small.jpg',
          sinopsis: 'Cuatro familias en una ciudad de Heartland se ponen a prueba en un solo día cuando golpea un tornado, obligando a cruzar caminos y redefiniendo el significado de supervivencia.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'Ciudad sin ley',
          imgMini: '/assets/img-mini/Ciudad sin ley small.jpg',
          imgGrande: '/assets/img-grande/Ciudad sin ley small.jpg',
          sinopsis: 'Ma Suk-Do es un detective en el área de Chinatown de Seúl. Él trata de mantener la paz, mientras que dos pandillas chino-coreanas luchan por el poder. Primera parte de la película Fuerza bruta.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Fuerza Bruta',
          imgMini: '/assets/img-mini/Fuerza Bruta small.jpg',
          imgGrande: '/assets/img-grande/Fuerza Bruta small.jpg',
          sinopsis: 'Un agente de policía viaja a Vietnam para escoltar la extradición de un sospechoso, pero descubre la existencia de un asesino que lleva años atacando a los turistas. Secuela de Ciudad Sin Ley.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Entre Navajas y Secretos',
          imgMini: '/assets/img-mini/navajas small.jpg',
          imgGrande: '/assets/img-grande/navajas small.jpg',
          sinopsis: 'Un detective investiga la muerte del patriarca de una familia excéntrica y conflictiva.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Glass Onion Un misterio de Knives Out',
          imgMini: '/assets/img-mini/Glass Onion Un misterio de Knives Out small.jpg',
          imgGrande: '/assets/img-grande/Glass Onion Un misterio de Knives Out small.jpg',
          sinopsis: 'Cuando el multimillonario Miles Bron invita a sus amigos a su isla privada, pronto queda claro que no todo es perfecto en el paraíso. Y cuando alguien aparece muerto, ¿quién mejor que Benoit Blanc para desentrañar todas las capas del misterio? Secuela de Entre navajas y secretos.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Guardianes de la Galaxia Especial de las fiestas',
          imgMini: '/assets/img-mini/GUARDIANES DE LA GALAXIA_ESPECIAL DE LAS FIESTAS small.jpg',
          imgGrande: '/assets/img-grande/GUARDIANES DE LA GALAXIA_ESPECIAL DE LAS FIESTAS small.jpg',
          sinopsis: 'Especial navideño de los Guardianes de la Galaxia.',
          genero: [superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Guardianes',
          imgMini: '/assets/img-mini/guardianes small.jpg',
          imgGrande: '/assets/img-grande/guardianes small.jpg',
          sinopsis: 'Un guardaespaldas de una empresa de seguridad, debe proteger a una cientifica para evitar que su investigacion caiga en manos de un turbio hombre de negocios.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El ascenso de las tortugas ninja',
          imgMini: '/assets/img-mini/el ascenso de las tortugas ninja small.jpg',
          imgGrande: '/assets/img-grande/el ascenso de las tortugas ninja small.jpg',
          sinopsis: 'Cuatro hermanos tortugas mutantes se embarcan en aventuras que los llevan a descubrir místicos poderes ninja.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El buen vecino',
          imgMini: '/assets/img-mini/el buen vecino small.jpg',
          imgGrande: '/assets/img-grande/el buen vecino small.jpg',
          sinopsis: 'La incipiente amistad entre dos vecinos muy diferentes da un giro trágico cuando David atropella a una joven y le provoca la muerte.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Creyente',
          imgMini: '/assets/img-mini/el creyente small.jpg',
          imgGrande: '/assets/img-grande/el creyente small.jpg',
          sinopsis: 'Un policía intenta arrestar a uno de los narcotraficantes más peligrosos de Asia. En su misión le ayudará un miembro de la banda del criminal, quien desea vengarse de su jefe.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El cuartel supersecreto',
          imgMini: '/assets/img-mini/el cuartel supersecreto small.jpg',
          imgGrande: '/assets/img-grande/el cuartel supersecreto small.jpg',
          sinopsis: 'El joven Charlie Kincaid descubre la sede secreta del superhéroe más poderoso del mundo escondida debajo de su casa. Tras compartirlo con sus amigos, comienzan a pensar que el distanciado padre de Charlie podría tener una doble vida secreta.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'El dragon invencible',
          imgMini: '/assets/img-mini/El dragon invencible small.jpg',
          imgGrande: '/assets/img-grande/El dragon invencible small.jpg',
          sinopsis: 'Un policía de Hong Kong es apartado del servicio tras fallar en una misión para atrapar a un asesino en serie de policías. Tiempo después, el asesino reaparece en Macao e intenta de nuevo seguir su pista.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El jardinero',
          imgMini: '/assets/img-mini/el jardinero small.jpg',
          imgGrande: '/assets/img-grande/el jardinero small.jpg',
          sinopsis: 'Un inmigrante que vive una vida tranquila como jardinero en una casa solariega en Inglaterra, debe confiar en sus antiguas habilidades para poder salvar de los invasores a la familia para la que trabaja.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El lobo y el leon',
          imgMini: '/assets/img-mini/El lobo y el leon small.jpg',
          imgGrande: '/assets/img-grande/El lobo y el leon small.jpg',
          sinopsis: 'Un cachorro de lobo y un cachorro de león perdidos son rescatados por una niña en el corazón de la naturaleza canadiense. Su amistad cambiará sus vidas para siempre.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El Matador mision rescate',
          imgMini: '/assets/img-mini/El Matador mision rescate small.jpg',
          imgGrande: '/assets/img-grande/El Matador mision rescate small.jpg',
          sinopsis: 'Un asesino a sueldo vive retirado del crimen cuando su mujer le encarga hacer de niñera de la hija adolescente de su vecina mientras se van de vacaciones juntas. Pronto empezarán los problemas.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Meme Maldito',
          imgMini: '/assets/img-mini/El Meme Maldito small.jpg',
          imgGrande: '/assets/img-grande/El Meme Maldito small.jpg',
          sinopsis: 'Una adolescente de los suburbios y su hermano pequeño deben detener un aterrador meme de Internet que cobra vida a causa de la histeria de sus padres.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'El pais de los sueños',
          imgMini: '/assets/img-mini/El pais de los sueños small.jpg',
          imgGrande: '/assets/img-grande/El pais de los sueños small.jpg',
          sinopsis: 'Con un excéntrico compañero, una joven huérfana se aventura al País de los Sueños para encontrar una perla mágica y cumplir su mayor deseo.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'El Perro Samurai',
          imgMini: '/assets/img-mini/El Perro Samurai small.jpg',
          imgGrande: '/assets/img-grande/El Perro Samurai small.jpg',
          sinopsis: 'Un samurái espera cumplir sus sueños, pero pasa por una serie de pruebas para derrotar a sus enemigos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El profesor persa',
          imgMini: '/assets/img-mini/el profesor persa small.jpg',
          imgGrande: '/assets/img-grande/el profesor persa small.jpg',
          sinopsis: 'Francia, 1942. Gilles es arrestado por soldados de las SS y enviado a un campo de concentración en Alemania. Allí consigue evitar la ejecución al jurar que no es judío, sino persa. Gracias a esta artimaña, Gilles consigue mantenerse con vida, pero tendrá que enseñar un idioma que no conoce a uno de los oficiales del campo.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'El secuestro de Daniel Rye',
          imgMini: '/assets/img-mini/EL SECUESTRO DE DANIEL RYE small.jpg',
          imgGrande: '/assets/img-grande/EL SECUESTRO DE DANIEL RYE small.jpg',
          sinopsis: 'La historia del fotógrafo danés Daniel Rye, capturado por ISIS en Siria en 2013 y retenido durante 398 días.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El Telefono del señor Harrigan',
          imgMini: '/assets/img-mini/El Telefono del señor Harrigan small.jpg',
          imgGrande: '/assets/img-grande/El Telefono del señor Harrigan small.jpg',
          sinopsis: 'Cuando el Sr. Harrigan muere, el adolescente que se hizo amigo de él, guarda su teléfono en el bolsillo antes del entierro y cuando el joven solitario le deja un mensaje a su amigo muerto, se sorprende al recibir respuesta.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Ultimo Heroe',
          imgMini: '/assets/img-mini/El Ultimo Heroe small.jpg',
          imgGrande: '/assets/img-grande/El Ultimo Heroe small.jpg',
          sinopsis: 'Hace 15 años, Andrei, bajo la guía de su padre, el coronel Rodina, se formó en una escuela especial secreta, donde se formaban agentes del Servicio de Inteligencia Exterior desde la adolescencia.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Emancipacion',
          imgMini: '/assets/img-mini/Emancipacion small.jpg',
          imgGrande: '/assets/img-grande/Emancipacion small.jpg',
          sinopsis: 'Cuando Peter, un hombre esclavizado, arriesga su vida por escapar y regresar con su familia, se embarca en una peligrosa travesía de amor y resiliencia.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Emergencia en el aire',
          imgMini: '/assets/img-mini/Emergencia en el aire small.jpg',
          imgGrande: '/assets/img-grande/Emergencia en el aire small.jpg',
          sinopsis: 'Un investigador farmacéutico amenaza con matar a los pasajeros del avión en el que viaja, lo que da paso al caos, desesperación y miedo, no solo dentro del avión, también en el planeta.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Escalera al infierno',
          imgMini: '/assets/img-mini/Escalera al infierno small.jpg',
          imgGrande: '/assets/img-grande/Escalera al infierno small.jpg',
          sinopsis: 'La hija de Keira Woods desaparece misteriosamente en el sótano de su nueva casa. Descubre que hay una entidad antigua y poderosa que controla su hogar. Tendrá que enfrentarla o arriesgarse a perder el alma de su familia por siempre.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Dahmer',
          imgMini: '/assets/img-mini/Dahmer small.jpg',
          imgGrande: '/assets/img-grande/Dahmer small.jpg',
          sinopsis: 'La historia del Monstruo de Milwaukee contada desde la perspectiva de las víctimas y la incompetencia de la policía que permitió que el nativo de Wisconsin se embarcara en una matanza de varios años.',
          genero: [suspenso],
          tipo: serie
     },

     {
          nombre: 'She Hulk',
          imgMini: '/assets/img-mini/She Hulk small.jpg',
          imgGrande: '/assets/img-grande/She Hulk small.jpg',
          sinopsis: 'Jennifer Walters navega por la complicada vida de una abogada soltera de 30 y tantos años que también resulta ser un Hulk verde con superpoderes de 6 pies y 7 pulgadas.',
          genero: [superheroes, accion],
          tipo: serie
     },

     {
          nombre: 'Convoy 48',
          imgMini: '/assets/img-mini/convoy 48 small.jpg',
          imgGrande: '/assets/img-grande/convoy 48 small.jpg',
          sinopsis: 'Durante la defensa de Leningrado, varias mujeres tienen la tarea de entregar carga y equipo militar a través de los ferrocarriles, arriesgándose a las interferencias nazis en todo momento.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Corazones malheridos',
          imgMini: '/assets/img-mini/corazones malheridos small.jpg',
          imgGrande: '/assets/img-grande/corazones malheridos small.jpg',
          sinopsis: 'Una aspirante a música y un marine a punto de irse a Irak deciden casarse por conveniencia. Pero una tragedia pronto convierte su relación falsa en algo muy real.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Cuenta regresiva',
          imgMini: '/assets/img-mini/cuenta regresiva small.jpg',
          imgGrande: '/assets/img-grande/cuenta regresiva small.jpg',
          sinopsis: 'Un ex-hacker se ve obligado a entrar en instituciones bancarias de alto nivel, otro hombre debe intentar penetrar en el edificio con trampas explosivas para sacar al joven de la silla caliente.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Dakota',
          imgMini: '/assets/img-mini/dakota small.jpg',
          imgGrande: '/assets/img-grande/dakota small.jpg',
          sinopsis: 'Centrada en Kate, una viuda que perdió a su esposo en la guerra de Afganistán y lucha por mantener su granja en un pequeño pueblo con su hija mientras también dirige el departamento local de bomberos.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Desastre Inminente',
          imgMini: '/assets/img-mini/Desastre Inminente small.jpg',
          imgGrande: '/assets/img-grande/Desastre Inminente small.jpg',
          sinopsis: 'Una experta en desactivación de bombas queda atrapada en su automóvil con dos niños y una mina antitanque colocada debajo del vehículo. Ella y su novio solo tendrán una oportunidad para desactivar la bomba y 30 minutos para hacerlo.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Doble venganza',
          imgMini: '/assets/img-mini/Doble venganza small.jpg',
          imgGrande: '/assets/img-grande/Doble venganza small.jpg',
          sinopsis: 'Mike Markovich, un joven corredor de bolsa de una firma de Wall Street controlada por la mafia, es traicionado y encarcelado durante seis años. Cuando es liberado, comienza su mortal búsqueda de venganza.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Dragon Ball Super Hero',
          imgMini: '/assets/img-mini/Dragon Ball Super Hero small.jpg',
          imgGrande: '/assets/img-grande/Dragon Ball Super Hero small.jpg',
          sinopsis: 'El Ejército de la Cinta Roja del pasado de Goku ha regresado con dos nuevos androides para desafiarlo a él y a sus amigos.',
          genero: [anime, 'animada', infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Angel de la Muerte',
          imgMini: '/assets/img-mini/El Angel de la Muerte small.jpg',
          imgGrande: '/assets/img-grande/El Angel de la Muerte small.jpg',
          sinopsis: 'Una enfermera sospecha que su colega es responsable de una serie de misteriosas muertes y arriesga su propia vida en busca de la verdad.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Apagon',
          imgMini: '/assets/img-mini/El Apagon small.jpg',
          imgGrande: '/assets/img-grande/El Apagon small.jpg',
          sinopsis: 'Cuando un dispositivo nuclear causa un pulso electromagnético que mata a más de 200 millones de personas, una adolescente debe ayudar a su familia a sobrevivir en un mundo nuevo y oscuro.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Borrego ',
          imgMini: '/assets/img-mini/borrego small.jpg',
          imgGrande: '/assets/img-grande/borrego small.jpg',
          sinopsis: 'Una botánica se muda a un pueblito del desierto para estudiar una especie de planta invasora. Ahora debe luchar por sobrevivir al ser secuestrada por un traficante de drogas inexperto, cuyo avión ultraligero se estrelló en el desierto.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Brigada Heroica',
          imgMini: '/assets/img-mini/Brigada Heroica small.jpg',
          imgGrande: '/assets/img-grande/Brigada Heroica small.jpg',
          sinopsis: 'La historia de los trabajadores ferroviarios que lucharon para defender sus hogares durante la Segunda Guerra sino-japonesa.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Buena Suerte Leo Grande',
          imgMini: '/assets/img-mini/Buena Suerte Leo Grande small.jpg',
          imgGrande: '/assets/img-grande/Buena Suerte Leo Grande small.jpg',
          sinopsis: 'Sigue a Nancy Stokes, una viuda de 55 años que anhela algo de aventura, conexión humana y algo de sexo, buen sexo.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Buenas noches mami',
          imgMini: '/assets/img-mini/buenas noches mami small.jpg',
          imgGrande: '/assets/img-grande/buenas noches mami small.jpg',
          sinopsis: 'Los hermanos gemelos llegan a la casa de su madre y comienzan a sospechar que algo no anda bien.',
          genero: [drama, terror],
          tipo: pelicula
     },

     {
          nombre: 'Buscando a Steve Mcqueen',
          imgMini: '/assets/img-mini/Buscando a Steve Mcqueen small.jpg',
          imgGrande: '/assets/img-grande/Buscando a Steve Mcqueen small.jpg',
          sinopsis: 'En 1972, una banda de ladrones de Youngstown, Ohio, intenta robar 30 millones de dólares en contribuciones ilegales y dinero de chantaje del fondo secreto del presidente Richard Nixon.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Cara a Cara',
          imgMini: '/assets/img-mini/Cara a Cara small.jpg',
          imgGrande: '/assets/img-grande/Cara a Cara small.jpg',
          sinopsis: 'Un policía honesto, admirado por resolver tantos casos, vuelve a ser puesto a prueba, cuando es perseguido por el pasado y la operación bajo su mando es amenazada por un misterioso grupo de criminales.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Cars: Aventuras en el camino',
          imgMini: '/assets/img-mini/CARS AVENTURAS EN EL CAMINO small.jpg',
          imgGrande: '/assets/img-grande/CARS AVENTURAS EN EL CAMINO small.jpg',
          sinopsis: 'Es una serie de animación spin-off de Cars. La trama sigue a Rayo McQueen y a su mejor amigo Mate en una nueva aventura que les lleva desde Radiador Springs hasta el este del país. Un viaje que tiene como propósito encontrar a la hermana de Mate.',
          genero: [animacion, infantil],
          tipo: serie
     },

     {
          nombre: 'Caza mortal',
          imgMini: '/assets/img-mini/caza mortal small.jpg',
          imgGrande: '/assets/img-grande/caza mortal small.jpg',
          sinopsis: 'Un peligroso asesino a sueldo tiene la tarea de cazar a un adolescente que presenció el asesinato de su hermano mayor a manos de una despiadada figura del crimen sureño.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Cazando a Ava Bravo',
          imgMini: '/assets/img-mini/cazando a ava bravo small.jpg',
          imgGrande: '/assets/img-grande/cazando a ava bravo small.jpg',
          sinopsis: 'El deportista multimillonario Buddy King se relaja cazando cautivos humanos en su remota propiedad en las montañas. Pero su última víctima, Ava Bravo, no es un blanco fácil.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Contraataque',
          imgMini: '/assets/img-mini/contraataque small.jpg',
          imgGrande: '/assets/img-grande/contraataque small.jpg',
          sinopsis: 'Gao Zhifeng, un hombre que se dedica a la informática, para hacer realidad el sueño heroico que abriga desde cuando era niño, participó en un juego de verdad virtual. Durante el rescate del doctor Wei Ming y la recuperación de ¨Aeolus¨ que había caído en manos de los enemigos, se convirtió en un hombre hecho y derecho. Pero al ver la cara de la compañera que unió a la batalla, se quedó atontado, porque resultó que esa mujer era su difunta esposa',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Atrapados en el cubo',
          imgMini: '/assets/img-mini/Atrapados en el cubo small.jpg',
          imgGrande: '/assets/img-grande/Atrapados en el cubo small.jpg',
          sinopsis: 'Sin recordar cómo llegaron allí, varios desconocidos se despiertan en una prisión de celdas cúbicas, algunas de ellas con trampas. Los prisioneros deben utilizar sus habilidades combinadas si quieren escapar.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Bala perdida 1',
          imgMini: '/assets/img-mini/Bala perdida 1 small.jpg',
          imgGrande: '/assets/img-grande/Bala perdida 1 small.jpg',
          sinopsis: 'Un delincuente de poca monta que trabaja de mecánico para un departamento de policía corrupto tiene que probar su inocencia cuando su mentor es asesinado.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Bala perdida 2',
          imgMini: '/assets/img-mini/Bala Perdida 2 small.jpg',
          imgGrande: '/assets/img-grande/Bala Perdida 2 small.jpg',
          sinopsis: 'Después de lavar su nombre, el brillante mecánico Lino solo tiene un objetivo en mente: vengarse de los dos policías corruptos que mataron a su hermano y a su mentor.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Barbaro',
          imgMini: '/assets/img-mini/Barbaro small.jpg',
          imgGrande: '/assets/img-grande/Barbaro small.jpg',
          sinopsis: 'Tess alquila una casa donde pasar la noche durante una visita a Detroit. Cuando llega, descubre que ya hay un hombre habitando la vivienda, pero decide quedarse, de todas formas. Pronto descubrirá que el desconocido no es lo único a lo que temer.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Batman y Superman La Batalla de los super hijos',
          imgMini: '/assets/img-mini/Batman y Superman La Batalla de los super hijos small.jpg',
          imgGrande: '/assets/img-grande/Batman y Superman La Batalla de los super hijos small.jpg',
          sinopsis: 'Comienza cuando Jonathan Kent, de once años, descubre que tiene superpoderes, empujando al semi kryptoniano al complicado mundo de los superhéroes y los supervillanos, que ahora están siendo atacados por una fuerza alienígena malvada conocida como Starro.',
          genero: [animacion, superheroes, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Black Adam',
          imgMini: '/assets/img-mini/Black Adam small.jpg',
          imgGrande: '/assets/img-grande/Black Adam small.jpg',
          sinopsis: 'Black Adam es liberado de su tumba casi 5.000 años después de haber sido encarcelado y recibir sus poderes de los antiguos dioses, ahora está listo para desatar su forma única de justicia en el mundo.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Black Friday',
          imgMini: '/assets/img-mini/Black Friday small.jpg',
          imgGrande: '/assets/img-grande/Black Friday small.jpg',
          sinopsis: 'Un grupo de empleados de una tienda de juguetes debe protegerse unos a otros de un montón de compradores infectados por parásitos.',
          genero: [comedia, terror],
          tipo: pelicula
     },

     {
          nombre: 'Boonie Bears: volver al pasado',
          imgMini: '/assets/img-mini/Boney Bear small.jpg',
          imgGrande: '/assets/img-grande/Boney Bear small.jpg',
          sinopsis: 'Briar, Bramble y su amiga Vick emprenden un viaje inesperado a la era primitiva. En su búsqueda del camino de regreso al siglo XXI, se encuentran con todo tipo de peligros y animales exóticos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Amnesico',
          imgMini: '/assets/img-mini/Amnesico small.jpg',
          imgGrande: '/assets/img-grande/Amnesico small.jpg',
          sinopsis: 'Cain se despierta en un hospital habiendo perdido su memoria, pero muy pronto su vida corre peligro y debe buscar la verdad de lo sucedido entre amenazas y ataques de miembros de varias facciones de carteles en guerra.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Amsterdan',
          imgMini: '/assets/img-mini/Amsterdan small.jpg',
          imgGrande: '/assets/img-grande/Amsterdan small.jpg',
          sinopsis: 'Ambientada en los años 30, sigue a tres amigos que son testigos de un asesinato, se convierten en sospechosos y descubren uno de los complots más escandalosos de la historia de Estados Unidos.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'ATENEA small',
          imgMini: '/assets/img-mini/ATENEA small.jpg',
          imgGrande: '/assets/img-grande/ATENEA small.jpg',
          sinopsis: 'La trágica muerte de un niño desata una guerra brutal en la barriada de Atenea, con los hermanos mayores de la víctima en el ojo del huracán.',
          genero: [accion, drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Atrapado en el mismo infierno',
          imgMini: '/assets/img-mini/ATRAPADO EN EL MISMO INFIERNO small.jpg',
          imgGrande: '/assets/img-grande/ATRAPADO EN EL MISMO INFIERNO small.jpg',
          sinopsis: 'Un hombre de familia se encuentra atrapado en el sótano de una remota cabaña de Oregon donde despiadados cazadores furtivos han escondido sus ganancias.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Cerdita',
          imgMini: '/assets/img-mini/cerdita small.jpg',
          imgGrande: '/assets/img-grande/cerdita small.jpg',
          sinopsis: 'Una adolescente con sobrepeso es acosada por un grupo de chicas geniales junto a la piscina mientras está de vacaciones en su pueblo. El largo camino a casa cambiará el resto de su vida.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Carter',
          imgMini: '/assets/img-mini/carter small.jpg',
          imgGrande: '/assets/img-grande/carter small.jpg',
          sinopsis: 'Luego de una cena con un importante cliente, una madre soltera lucha por defenderse de un monstruoso atacante sediento de sangre.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Corre Cariño Corre',
          imgMini: '/assets/img-mini/Corre Cariño Corre small.jpg',
          imgGrande: '/assets/img-grande/Corre Cariño Corre small.jpg',
          sinopsis: 'Luego de una cena con un importante cliente, una madre soltera lucha por defenderse de un monstruoso atacante sediento de sangre.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Depredador 2018',
          imgMini: '/assets/img-mini/depredador 2018 small.jpg',
          imgGrande: '/assets/img-grande/depredador 2018 small.jpg',
          sinopsis: 'Cuando un niño desencadena accidentalmente el regreso a la Tierra de los cazadores más letales del universo, solo un grupo de exsoldados y una científica descontenta pueden evitar el fin de la raza humana.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Depredador la presa',
          imgMini: '/assets/img-mini/depredador la presa small.jpg',
          imgGrande: '/assets/img-grande/depredador la presa small.jpg',
          sinopsis: 'El origen del Depredador en el mundo de la Nación Comanche hace 300 años. Naru, una hábil guerrera, lucha por proteger a su tribu contra uno de los primeros depredadores altamente evolucionados en aterrizar en la Tierra.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'El gran sismo',
          imgMini: '/assets/img-mini/el gran sismo small.jpg',
          imgGrande: '/assets/img-grande/el gran sismo small.jpg',
          sinopsis: 'Un padre y un hijo intentan salvar a un pequeño pueblo y su nuevo túnel de los desastres naturales.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El hombre gris',
          imgMini: '/assets/img-mini/el hombre gris small.jpg',
          imgGrande: '/assets/img-grande/el hombre gris small.jpg',
          sinopsis: 'Court Gentry, un agente veterano de la CIA, es traicionado por su propia agencia, lo que lo obliga a convertirse en un fugitivo. Lloyd Hansen, un ex colega suyo en la agencia, es enviado a cazarlo.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El telefono negro',
          imgMini: '/assets/img-mini/el telefono negro small.jpg',
          imgGrande: '/assets/img-grande/el telefono negro small.jpg',
          sinopsis: 'Después de ser secuestrado por un asesino de niños y encerrado en un sótano a prueba de sonido, un chico de trece años comienza a recibir llamadas desde un teléfono desconectado de las víctimas anteriores del asesino.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Tubo',
          imgMini: '/assets/img-mini/El Tubo small.jpg',
          imgGrande: '/assets/img-grande/El Tubo small.jpg',
          sinopsis: 'Una mujer se ve atrapada en una extraña serie de tubos llenos de trampas mortales.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Elvis',
          imgMini: '/assets/img-mini/elvis small.jpg',
          imgGrande: '/assets/img-grande/elvis small.jpg',
          sinopsis: 'Un vistazo a la vida de la legendaria estrella del rock and roll, Elvis Presley.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Gemelo Siniestro',
          imgMini: '/assets/img-mini/Gemelo Siniestro small.jpg',
          imgGrande: '/assets/img-grande/Gemelo Siniestro small.jpg',
          sinopsis: 'Una madre que necesita confrontar la insoportable verdad sobre su hijo gemelo sobreviviente.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La chica en el sotano',
          imgMini: '/assets/img-mini/la chica en el sotano small.jpg',
          imgGrande: '/assets/img-grande/la chica en el sotano small.jpg',
          sinopsis: 'Sarah es una adolescente que ansía cumplir los 18 años para alejarse de su controlador padre, Don. Pero antes de que pueda siquiera apagar las velas, Don la encierra en el sótano.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Lightyear',
          imgMini: '/assets/img-mini/lightyear small.jpg',
          imgGrande: '/assets/img-grande/Lightyear small.jpg',
          sinopsis: 'La historia de Buzz Lightyear y sus aventuras hasta el infinito y más allá.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Luck',
          imgMini: '/assets/img-mini/luck small.jpg',
          imgGrande: '/assets/img-grande/luck small.jpg',
          sinopsis: 'Se descubre la batalla de milenios entre las organizaciones de la suerte buena y la suerte mal que en secreto afecta a las vidas diarias de todo el mundo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Medieval',
          imgMini: '/assets/img-mini/Medieval small.jpg',
          imgGrande: '/assets/img-grande/Medieval small.jpg',
          sinopsis: 'La historia del icono checo del siglo catorce y señor de la guerra Jan Zizka que derrotó a los ejércitos de la Orden Teutónica y el Sacro Imperio Romano.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Mira como corren',
          imgMini: '/assets/img-mini/Mira como corren small.jpg',
          imgGrande: '/assets/img-grande/Mira como corren small.jpg',
          sinopsis: 'En el West End del Londres de los años 50, los planes para una versión cinematográfica de una obra de teatro de gran éxito se interrumpen bruscamente tras el asesinato de un miembro fundamental del equipo.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Muerte muerte muerte',
          imgMini: '/assets/img-mini/Muerte muerte muerte small.jpg',
          imgGrande: '/assets/img-grande/Muerte muerte muerte small.jpg',
          sinopsis: 'Cuando un grupo de ricos de veinte y tantos años planea una fiesta en una mansión familiar remota, la celebración se vuelve mortal, con traiciones, amigos falsos y donde la diversión salió muy, muy mal.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Padre Stu',
          imgMini: '/assets/img-mini/padre stu small.jpg',
          imgGrande: '/assets/img-grande/padre stu small.jpg',
          sinopsis: 'Sigue la vida del padre Stuart Long, un boxeador convertido en sacerdote que inspiró a innumerables personas durante su viaje desde la autodestrucción hasta la redención.',
          genero: [drama, 'religiosa'],
          tipo: pelicula
     },

     {
          nombre: 'Pasaje al Paraiso',
          imgMini: '/assets/img-mini/Pasaje al Paraiso small.jpg',
          imgGrande: '/assets/img-grande/Pasaje al Paraiso small.jpg',
          sinopsis: 'Una pareja divorciada se une y viaja a Bali para evitar que su hija cometa el mismo error que creen cometieron hace 25 años.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'Sobredosis',
          imgMini: '/assets/img-mini/Sobredosis small.jpg',
          imgGrande: '/assets/img-grande/Sobredosis small.jpg',
          sinopsis: 'Sara, jefa de la brigada de narcóticos de la policía de Toulouse, debe colaborar con Richard, jefe de la policía criminal local, para detener una lancha rápida entre España y Francia y encontrar al asesino relacionado con el caso.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Todo en todas parte',
          imgMini: '/assets/img-mini/todo en todas parte small.jpg',
          imgGrande: '/assets/img-grande/todo en todas parte small.jpg',
          sinopsis: 'Una anciana inmigrante china se ve envuelta en una loca aventura, donde ella sola puede salvar el mundo explorando otros universos que se conectan con sus vidas pasadas.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Vista por Ultima Vez',
          imgMini: '/assets/img-mini/Vista por Ultima Vez small.jpg',
          imgGrande: '/assets/img-grande/Vista por Ultima Vez small.jpg',
          sinopsis: 'Un hombre investiga el submundo criminal de la ciudad mientras elude a las autoridades en una carrera contrarreloj para encontrar a su ex mujer, que ha desaparecido misteriosamente en una gasolinera.',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Wendell y Wild',
          imgMini: '/assets/img-mini/Wendell y Wild small.jpg',
          imgGrande: '/assets/img-grande/Wendell y Wild small.jpg',
          sinopsis: 'Los hermanos demonio Wendell y Wild planean escapar del infierno, y para poder hacerlo deberán enfrentarse a su mayor archienemigo, una monja demoniaca seguida por un par de adolescentes góticos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'X Equis',
          imgMini: '/assets/img-mini/x small.jpg',
          imgGrande: '/assets/img-grande/x small.jpg',
          sinopsis: 'En 1979, un grupo de jóvenes cineastas se dispuso a hacer una película para adultos en la zona rural de Texas, pero cuando sus anfitriones solitarios y ancianos los atrapan en el acto, el elenco se encuentra luchando por sus vidas.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La Casa de papel temporada 5',
          imgMini: '/assets/img-mini/casadepapel 1 small.jpg',
          imgGrande: '/assets/img-grande/casadepapel 1 small.jpg',
          sinopsis: 'El Profesor ha sido capturado por Sierra y, por primera vez, no cuenta con un plan para escapar. Cuando parece que nada puede ir a peor, llegará un nuevo enemigo mucho más poderoso que cualquiera de los anteriores: el ejército.',
          genero: [accion, suspenso],
          tipo: serie
     },

     {
          nombre: 'El juego del calamar',
          imgMini: '/assets/img-mini/el juego del calamar small.jpg',
          imgGrande: '/assets/img-grande/el juego del calamar small.jpg',
          sinopsis: 'Cientos de jugadores con problemas de dinero aceptan una invitación rarísima para competir en juegos infantiles. Dentro les esperan un tentador premio y desafíos letales.',
          genero: [suspenso],
          tipo: serie
     },

     {
          nombre: 'Merlina',
          imgMini: '/assets/img-mini/Merlina small.jpg',
          imgGrande: '/assets/img-grande/Merlina small.jpg',
          sinopsis: 'Inteligente, sarcástica y un poco muerta por dentro, Merlina Addams investiga una ola de asesinatos mientras hace nuevos amigos (y enemigos) en la Academia Nunca Más.',
          genero: [suspenso],
          tipo: serie
     },

     {
          nombre: 'La casa del Dragon',
          imgMini: '/assets/img-mini/la casa del dragon small.jpg',
          imgGrande: '/assets/img-grande/la casa del dragon small.jpg',
          sinopsis: 'Historia ambientada 172 años antes de Daenerys Targaryen, y en el noveno año del reinado de Viserys Targaryen, un rey cuya línea de sucesión está en peligro.',
          genero: [drama, accion],
          tipo: serie
     },

     {
          nombre: 'Los anillos del poder',
          imgMini: '/assets/img-mini/los anillos del poder small.jpg',
          imgGrande: '/assets/img-grande/los anillos del poder small.jpg',
          sinopsis: 'Los héroes se enfrentan al temido resurgimiento del mal en la Tierra Media y forjan legados que perdurarán mucho tiempo después de su desaparición.',
          genero: [drama, accion],
          tipo: serie
     },

     {
          nombre: 'Chucky primera temporada',
          imgMini: '/assets/img-mini/chucky temporada 1 small.jpg',
          imgGrande: '/assets/img-grande/chucky temporada 1 small.jpg',
          sinopsis: 'Un idílico pueblo estadounidense se ve sumido en el caos cuando un muñeco Chucky aparece en un mercadillo de un barrio residencial. Al poco, empiezan a producirse una serie de terroríficos asesinatos que destapan los oscuros secretos de los vecinos.',
          genero: [suspenso, terror],
          tipo: serie
     },

     {
          nombre: 'Chucky segunda temporada',
          imgMini: '/assets/img-mini/chucky temporada 2 small.jpg',
          imgGrande: '/assets/img-grande/chucky temporada 2 small.jpg',
          sinopsis: 'La llegada de enemigos y aliados del pasado de Chucky amenaza con exponer la verdad detrás de los asesinatos, así como los orígenes no contados del muñeco demonio como un niño aparentemente común que de alguna manera se convirtió en este notorio monstruo.',
          genero: [suspenso, terror],
          tipo: serie
     },

     {
          nombre: 'A ciegas See for me',
          imgMini: '/assets/img-mini/A ciegas See for me small.jpg',
          imgGrande: '/assets/img-grande/A ciegas See for me small.jpg',
          sinopsis: 'Cuando la ex esquiadora ciega Sophie se queda en una mansión apartada, tres ladrones entran para robar la caja fuerte. La única defensa de Sophie contra los invasores es la veterana del ejército Kelly, quien la ayuda a sobrevivir.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Ajin Semi Humano',
          imgMini: '/assets/img-mini/Ajin Semi Humano small.jpg',
          imgGrande: '/assets/img-grande/Ajin Semi Humano small.jpg',
          sinopsis: 'Un estudiante de secundaria descubre que es un Ajin, un ser semihumano. Termina siendo un fugitivo huyendo debido a sus poderes.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Alarido',
          imgMini: '/assets/img-mini/Alarido small.jpg',
          imgGrande: '/assets/img-grande/Alarido small.jpg',
          sinopsis: 'Cuando una joven madre es atrincherada dentro de una despensa por su violento ex novio, debe usar el ingenio para proteger a sus dos hijos pequeños del peligro creciente mientras encuentra un escape',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Algo de Tiffany',
          imgMini: '/assets/img-mini/Algo de Tiffany small.jpg',
          imgGrande: '/assets/img-grande/Algo de Tiffany small.jpg',
          sinopsis: 'veremos como la vida sentimental de una joven de Nueva York se complica, cuando recibe equivocadamente de su novio un anillo de compromiso comprado en Tiffany por otra persona y destinado a otra mujer.',
          genero: [romance, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Amenaza explosiva',
          imgMini: '/assets/img-mini/Amenaza explosiva small.jpg',
          imgGrande: '/assets/img-grande/Amenaza explosiva small.jpg',
          sinopsis: 'Una familia común y corriente se enfrenta a circunstancias impredecibles provocadas por una misteriosa llamada telefónica que los pone en una situación aterradora.',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Me llamo venganza',
          imgMini: '/assets/img-mini/Me llamo venganza.jpg',
          imgGrande: '/assets/img-grande/Me llamo venganza.jpg',
          sinopsis: 'Cuando unos viejos enemigos matan a su familia, un antiguo sicario de la mafia huye a Milán con su intrépida hija para esconderse mientras planean su venganza.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La Pasajera',
          imgMini: '/assets/img-mini/la pasajera small.jpg',
          imgGrande: '/assets/img-grande/la pasajera small.jpg',
          sinopsis: 'Los ocupantes de una camioneta que transporta a una excursionista para socorrerla luego que por accidente la atropellaron, descubren que no deberían sentarse junto a ella durante el viaje.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Patrulla Cat',
          imgMini: '/assets/img-mini/la patrulla cat small.jpg',
          imgGrande: '/assets/img-grande/la patrulla cat small.jpg',
          sinopsis: 'Cuando el alcalde Humdinger transforma a su gato robot en una amenaza comedora de metales del tamaño de un tigre, los Paw Patrol pide ayuda a la Cuadrilla Cat para detener a la criatura.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'La Princesa',
          imgMini: '/assets/img-mini/la princesa small.jpg',
          imgGrande: '/assets/img-grande/la princesa small.jpg',
          sinopsis: 'Cuando una princesa de voluntad fuerte se niega a casarse con un sociópata, es secuestrada y encerrada en una torre del castillo de su padre. Con su vengativo pretendiente decidido a tomar el trono, la princesa debe salvar el reino.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La Señora Harris',
          imgMini: '/assets/img-mini/la señora harris small.jpg',
          imgGrande: '/assets/img-grande/la señora harris small.jpg',
          sinopsis: 'Una dama de limpieza viuda en la década de 1950 en Londres se enamora locamente de un vestido de alta costura de Dior y decide que debe tener uno propio.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'La Tormenta Infinita',
          imgMini: '/assets/img-mini/la tormenta infinita small.jpg',
          imgGrande: '/assets/img-grande/la tormenta infinita small.jpg',
          sinopsis: 'Cuando una escaladora queda atrapada en una tormenta de nieve, encuentra un extraño corriendo el mismo peligro y ahora debe luchar por ambos para ir montaña abajo antes del anochecer.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'La Viuda Negra Penoza',
          imgMini: '/assets/img-mini/la viuda negra penoza small.jpg',
          imgGrande: '/assets/img-grande/la viuda negra penoza small.jpg',
          sinopsis: 'Carmen, una antigua reina de la droga, se esconde en Canadá, donde lleva una vida en el anonimato. Al fingir su propia muerte, espera que sus hijos puedan llevar una vida completamente normal en Ámsterdam. Todo parece ir bien hasta que uno de sus mejores amigos es atacado, lo que la obliga a ir en su rescate.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'Las Leyendas El Origen',
          imgMini: '/assets/img-mini/las leyendas el origen small.jpg',
          imgGrande: '/assets/img-grande/las leyendas el origen small.jpg',
          sinopsis: 'Finado y Moribunda, dos calaveritas de azúcar, viven en el alegre y colorido Pueblo Calaca, donde hacen y deshacen a sus anchas sin ningún tipo de consecuencias. Todo cambia cuando un bebé humano cruza el Espejo Eterno y absorbe la energía del portal que separa los Reinos de los Vivos y los Muertos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Liga De Supermascotas',
          imgMini: '/assets/img-mini/liga de supermascotas small.jpg',
          imgGrande: '/assets/img-grande/liga de supermascotas small.jpg',
          sinopsis: 'Krypto y Superman son mejores amigos inseparables, comparten los mismos superpoderes y luchan contra el crimen en Metropolis. Sin embargo, Krypto debe dominar sus propios poderes para una misión de rescate cuando Superman es secuestrado.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Lilo Lilo Cocodrilo',
          imgMini: '/assets/img-mini/Lilo lilo cocodrilo small.jpg',
          imgGrande: '/assets/img-grande/Lilo lilo cocodrilo small.jpg',
          sinopsis: 'La familia Primm se muda a Nueva York y su hijo descubre a Lilo, un cocodrilo cantante, a quien le gusta darse baños, el caviar y la buena música.',
          genero: [infantil],
          tipo: pelicula
     },

     {
          nombre: 'Linterna Verde',
          imgMini: '/assets/img-mini/linterna verde small.jpg',
          imgGrande: '/assets/img-grande/linterna verde small.jpg',
          sinopsis: 'El francotirador de la Marina recién dado de baja, John Stewart, se encuentra en una encrucijada en su vida, una que solo se complica al recibir un anillo extraterrestre que le otorga los poderes de la Linterna Verde de la Tierra.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Los 4 Grandes',
          imgMini: '/assets/img-mini/Los 4 grandes small.jpg',
          imgGrande: '/assets/img-grande/Los 4 grandes small.jpg',
          sinopsis: 'Cuenta la historia de un asesino de élite que es blanco de gánsteres asesinos después de perdonar la vida de una niña durante una masacre.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Los 800',
          imgMini: '/assets/img-mini/Los 800 small.jpg',
          imgGrande: '/assets/img-grande/Los 800 small.jpg',
          sinopsis: 'En 1937, 800 soldados chinos luchan en desde un almacén sitiado en un campo de batalla en pleno Shanghái, completamente rodeados por el ejército japonés.',
          genero: [drama, accion],
          tipo: pelicula
     },

     {
          nombre: 'Los Ancianos',
          imgMini: '/assets/img-mini/Los Ancianos small.jpg',
          imgGrande: '/assets/img-grande/Los Ancianos small.jpg',
          sinopsis: 'Una mujer vuelve a su pueblo natal con sus dos hijos para asistir a la boda de su hermana, pero la celebración se ve interrumpida por unos ancianos sedientos de sangre.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Los Monsters',
          imgMini: '/assets/img-mini/los monsters small.jpg',
          imgGrande: '/assets/img-grande/los monsters small.jpg',
          sinopsis: 'Prepárate para la historia de amor más extraña jamás contada. Reboot de The Munsters, que sigue las desventuras de una familia de monstruos que se muda desde Transilvania hasta un suburbio de los Estados Unidos.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'LOU',
          imgMini: '/assets/img-mini/LOU small.jpg',
          imgGrande: '/assets/img-grande/LOU small.jpg',
          sinopsis: 'Se desata una tormenta. Una joven es secuestrada. Su madre se une a la misteriosa mujer de al lado para perseguir al secuestrador, un viaje que pone a prueba sus límites y expone impactantes secretos de su pasado.',
          genero: [drama, accion],
          tipo: pelicula
     },

     {
          nombre: 'Lucha Por La Libertad',
          imgMini: '/assets/img-mini/Lucha por la libertad small.jpg',
          imgGrande: '/assets/img-grande/Lucha por la libertad small.jpg',
          sinopsis: 'En el estado títere de Manchukuo en la década de 1930, cuatro agentes especiales del Partido Comunista, después de regresar a China, emprenden una misión secreta. El equipo es traicionado y se encuentra rodeado de amenazas de todos lados.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Lunaticos',
          imgMini: '/assets/img-mini/lunaticos small.jpg',
          imgGrande: '/assets/img-grande/lunaticos small.jpg',
          sinopsis: 'Basado en uno de los libros infantiles más populares de Alemania, Lunaticos cuenta la historia del pequeño Pete que se embarca en un viaje encantador junto con el escarabajo, el Sr. Zoomzeman y Sandman para rescatar a su hermana pequeña del malvado Moon Man.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Maleficio',
          imgMini: '/assets/img-mini/maleficio small.jpg',
          imgGrande: '/assets/img-grande/maleficio small.jpg',
          sinopsis: 'Hace seis años, Li Ronan fue maldecido después de romper un tabú religioso. Ahora, debe proteger a su hija de las consecuencias de sus acciones.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Malnazidos',
          imgMini: '/assets/img-mini/Malnazidos small.jpg',
          imgGrande: '/assets/img-grande/Malnazidos small.jpg',
          sinopsis: 'El capitán de la Quinta Brigada, Jan Lozano, ha caído prisionero de un pelotón enemigo junto con un conductor mientras estaban en una misión. Ellos deben ser fuertes y enfrentar lo que viene para lograr escapar.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Mexzombies',
          imgMini: '/assets/img-mini/MexZombies small.jpg',
          imgGrande: '/assets/img-grande/MexZombies small.jpg',
          sinopsis: 'Dos adolescentes un poco inadaptados socialmente, uno cinéfilo de películas clásicas de antaño y el otro un aspirante a ser experto en parkour, deben enfrentarse a un inesperado reto: prevenir un apocalipsis zombi.',
          genero: [comedia, terror],
          tipo: pelicula
     },

     {
          nombre: 'Mi Dulce Monstruo',
          imgMini: '/assets/img-mini/Mi Dulce Monstruo small.jpg',
          imgGrande: '/assets/img-grande/Mi Dulce Monstruo small.jpg',
          sinopsis: 'La princesa Bárbara está secretamente enamorada del príncipe Eduardo. Cuando el empleado de correos Weasel le exige al rey que lo case con Bárbara, ella huye. El dulce monstruo Boogey hace todo para ayudar a Bárbara a salvar el reino.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mia Y La Leyenda De Centopia',
          imgMini: '/assets/img-mini/Mia y la leyenda de Centopia small.jpg',
          imgGrande: '/assets/img-grande/Mia y la leyenda de Centopia small.jpg',
          sinopsis: 'Mia descubre que su piedra mágica es parte de una antigua profecía y se embarca en un emocionante viaje a las islas más lejanas de Centopia para enfrentar un gran mal y dar forma a su propio destino.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Monster High La Pelicula',
          imgMini: '/assets/img-mini/Monster High La Pelicula small.jpg',
          imgGrande: '/assets/img-grande/Monster High La Pelicula small.jpg',
          sinopsis: 'Sigue a una mitad humana y mitad hombre lobo, mientras finalmente encuentra un lugar donde encaja, pero, cuando un plan tortuoso para destruir Monster High amenaza con revelar su identidad, debe aprender a abrazar su verdadero corazón de monstruo y salvar el día.',
          genero: [infantil],
          tipo: pelicula
     },

     {
          nombre: 'Monstruo Del Mar',
          imgMini: '/assets/img-mini/monstruo del mar small.jpg',
          imgGrande: '/assets/img-grande/monstruo del mar small.jpg',
          sinopsis: 'Cuando una joven viaja de polizón en el barco de un legendario cazador de monstruos marinos, emprende un viaje épico hacia aguas desconocidas y hace historia.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Nacido Campeon',
          imgMini: '/assets/img-mini/nacido campeon small.jpg',
          imgGrande: '/assets/img-grande/nacido campeon small.jpg',
          sinopsis: 'Mickey Kelley, uno de los primeros cinturones negros estadounidenses en jiu-jitsu brasileño, se aleja de todo lo que ama y entra en un torneo de MMA no autorizado.',
          genero: [drama, accion],
          tipo: pelicula
     },

     {
          nombre: 'Navidad De Golpe',
          imgMini: '/assets/img-mini/Navidad de golpe small.jpg',
          imgGrande: '/assets/img-grande/Navidad de golpe small.jpg',
          sinopsis: 'Tras perder la memoria en un accidente de esquí, una heredera mimada acaba al cuidado de un viudo sin suerte y su hija durante las Navidades.',
          genero: [comedia, romance, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'Nemesis Samaritan',
          imgMini: '/assets/img-mini/nemesis samaritan small.jpg',
          imgGrande: '/assets/img-grande/nemesis samaritan small.jpg',
          sinopsis: 'Un joven se entera de que un superhéroe, del cual se cría desaparecido tras una épica batalla hace veinte años, aún puede existir.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Noche Sin Paz',
          imgMini: '/assets/img-mini/Noche sin paz small.jpg',
          imgGrande: '/assets/img-grande/Noche sin paz small.jpg',
          sinopsis: 'Cuando un grupo de mercenarios ataca la propiedad de una familia adinerada, Santa Claus debe intervenir para salvar el día y la Navidad.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Nop',
          imgMini: '/assets/img-mini/nop small.jpg',
          imgGrande: '/assets/img-grande/nop small.jpg',
          sinopsis: 'Los residentes de un barranco solitario en el interior de California son testigos de un descubrimiento extraño y escalofriante.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Operacion Cerveza',
          imgMini: '/assets/img-mini/Operacion Cerveza small.jpg',
          imgGrande: '/assets/img-grande/Operacion Cerveza small.jpg',
          sinopsis: 'La historia de un hombre que dejó Nueva York en 1967 para llevar cerveza a sus amigos de la infancia en el ejército mientras luchaban en Vietnam.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Padre No Hay Mas Que Uno 3',
          imgMini: '/assets/img-mini/padre no hay mas que uno 3 small.jpg',
          imgGrande: '/assets/img-grande/padre no hay mas que uno 3 small.jpg',
          sinopsis: 'Los niños rompen una figura de belén de la colección de su padre. Sara rompe con su novio. El suegro de Javier será acogido tras la separación de ella y Rocío, ella queda relegada a ejercer de pastora.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Panico A La Deriva',
          imgMini: '/assets/img-mini/Panico a la Deriva small.jpg',
          imgGrande: '/assets/img-grande/Panico a la Deriva small.jpg',
          sinopsis: 'Varados en el mar después de una tormenta tropical masiva, una mujer y su esposo herido luchan por sobrevivir mientras los grandes tiburones blancos vuelan en círculos debajo.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Parasitos 2019',
          imgMini: '/assets/img-mini/PARASITOS 2019 small.jpg',
          imgGrande: '/assets/img-grande/PARASITOS 2019 small.jpg',
          sinopsis: 'La familia Ki-taek, todos desempleados, se ve envuelta en un incidente con la rica y glamurosa familia Parks.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Peligro Cercano',
          imgMini: '/assets/img-mini/peligro cercano small.jpg',
          imgGrande: '/assets/img-grande/peligro cercano small.jpg',
          sinopsis: 'En agosto de 1966, en una plantación de caucho vietnamita llamada Long Tan, 108 soldados jóvenes y en su mayoría sin experiencia que vienen de australia y nueva zelanda luchan por sus vidas contra 2500 soldados norvietnamita y Viet Cong soldados.',
          genero: [drama, accion, belico],
          tipo: pelicula
     },

     {
          nombre: 'Persecucion Salvaje',
          imgMini: '/assets/img-mini/persecucion salvaje small.jpg',
          imgGrande: '/assets/img-grande/persecucion salvaje small.jpg',
          sinopsis: 'Thunder, es un veterano que solía ser guardaespaldas privado en el extranjero, se enteró de que su hijo Leo fue atraído por bandas extranjeras para utilizarlo como moneda de cambio en un juego de caza de personas vivas.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Pilotos De Guerra',
          imgMini: '/assets/img-mini/Pilotos de guerra small.jpg',
          imgGrande: '/assets/img-grande/Pilotos de guerra small.jpg',
          sinopsis: 'El teniente coronel Soshnikov, el capitán Muravyov y el mayor Zakharov. Tres edades, tres personajes diferentes, tres destinos diferentes, que están destinados a encontrarse en la base militar de Khmeimim.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Pinocho De Guillermo Del Toro',
          imgMini: '/assets/img-mini/Pinocho de Guillermo del Toro small.jpg',
          imgGrande: '/assets/img-grande/Pinocho de Guillermo del Toro small.jpg',
          sinopsis: 'Una versión más oscura del clásico cuento infantil de una marioneta de madera que se transforma en un niño vivo de verdad.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Pinocho',
          imgMini: '/assets/img-mini/Pinocho small.jpg',
          imgGrande: '/assets/img-grande/Pinocho small.jpg',
          sinopsis: 'Una marioneta cobra vida gracias a un hada, quien le asigna llevar una vida virtuosa para convertirse en un niño de verdad.',
          genero: [comedia, drama, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Plan De Estudios',
          imgMini: '/assets/img-mini/Plan de estudios small.jpg',
          imgGrande: '/assets/img-grande/Plan de estudios small.jpg',
          sinopsis: 'Un expolicía empieza a trabajar en el instituto en el que su difunto mejor amigo daba clase para enfrentarse a la banda a la que culpa de su muerte.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'R.I.P.D.1 Policias Del Mas Alla',
          imgMini: '/assets/img-mini/R.I.P.D.1 Policias del mas alla small.jpg',
          imgGrande: '/assets/img-grande/R.I.P.D.1 Policias del mas alla small.jpg',
          sinopsis: 'Un policía recientemente asesinado se une a un equipo de policías no muertos que trabajan para el R.I.P.D. y trata de encontrar al hombre que lo asesinó.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'R.I.P.D.2 La Revelion De Los Condenados',
          imgMini: '/assets/img-mini/R.I.P.D.2 La revelion de los condenados small.jpg',
          imgGrande: '/assets/img-grande/R.I.P.D.2 La revelion de los condenados small.jpg',
          sinopsis: 'El sheriff Roy Pulsipher no está muy emocionado de encontrarse muerto después de un tiroteo con una notoria pandilla de forajidos, pero tiene una segunda oportunidad de regresar a la tierra después de ser reclutado por el R.I.P.D.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Rabia',
          imgMini: '/assets/img-mini/rabia small.jpg',
          imgGrande: '/assets/img-grande/rabia small.jpg',
          sinopsis: 'Rose trabaja en el mundo de la moda y espera convertirse en diseñadora. Un accidente de coche desfigura su cara. Se somete a un tratamiento con células madre que resulta tener efectos secundarios.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Ready Player One',
          imgMini: '/assets/img-mini/ready player one small.jpg',
          imgGrande: '/assets/img-grande/ready player one small.jpg',
          sinopsis: 'Cuando el creador de una realidad virtual llamada OASIS muere, lanza un reto póstumo a todos sus usuarios para que busquen un huevo de pascua, que dará al que lo encuentre su fortuna y el control de su mundo.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Regalo Maldito',
          imgMini: '/assets/img-mini/regalo maldito small.jpg',
          imgGrande: '/assets/img-grande/regalo maldito small.jpg',
          sinopsis: 'Eva era bailarina pero por culpa de un accidente quedó parapléjica. Por su cumpleaños, Sophie le regala un extraño calendario de Adviento. Viene con unas simples reglas, que será mejor que no sean incumplidas.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Resistencia',
          imgMini: '/assets/img-mini/resistencia small.jpg',
          imgGrande: '/assets/img-grande/resistencia small.jpg',
          sinopsis: 'Marcel Marceau, el mimo más conocido y admirado de Francia, fue un héroe secreto que salvó las vidas de muchos niños judíos durante la Segunda Guerra Mundial. Tras adoptar el apellido Marceau con el fin de ocultar sus orígenes judíos, Marcel se uniría a la Resistencia francesa en donde consiguió salvar a numerosos niños judíos de los campos de concentración.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Revancha Ya',
          imgMini: '/assets/img-mini/revancha ya small.jpg',
          imgGrande: '/assets/img-grande/revancha ya small.jpg',
          sinopsis: 'La reina destronada de un colegio privado de élite hace un pacto secreto con una nueva alumna para vengarse cada una de los enemigos de la otra.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Robo De Identidad',
          imgMini: '/assets/img-mini/robo de identidad small.jpg',
          imgGrande: '/assets/img-grande/robo de identidad small.jpg',
          sinopsis: 'Un asesino a sueldo de clase mundial, termina intercambiando identidades con un actor extra con mala suerte durante un accidente.',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Scooby Doo Dulce O Travesura',
          imgMini: '/assets/img-mini/Scooby Doo Dulce o Travesura small.jpg',
          imgGrande: '/assets/img-grande/Scooby Doo Dulce o Travesura small.jpg',
          sinopsis: 'Mystery Inc. cree que finalmente puede disfrutar de un descanso. Pero Scooby y la pandilla entran en acción cuando los fantasmas doppelgänger amenazan en Halloween.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Scrooge Un Cuento De Navidad',
          imgMini: '/assets/img-mini/Scrooge Un cuento de navidad small.jpg',
          imgGrande: '/assets/img-grande/Scrooge Un cuento de navidad small.jpg',
          sinopsis: 'En la víspera de Navidad, el egoísta y avaro Ebenezer Scrooge tiene una única y fría noche para afrontar su pasado y cambiar el futuro antes de que sea tarde.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Seminario Del Mal',
          imgMini: '/assets/img-mini/Seminario del mal small.jpg',
          imgGrande: '/assets/img-grande/Seminario del mal small.jpg',
          sinopsis: 'Un actor en apuros pasa un fin de semana con una demonóloga para prepararse para una audición, esta lo obliga a enfrentarse a su pasado inquietante y realizar rituales oscuros',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Seul Efervescente',
          imgMini: '/assets/img-mini/Seul Efervescente small.jpg',
          imgGrande: '/assets/img-grande/Seul Efervescente small.jpg',
          sinopsis: 'Unos pilotos en busca de velocidad y dinero se ven envueltos en la investigación de un fondo fraudulento de una figura importante durante las Olimpiadas de Seúl de 1988.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Sin Culpa',
          imgMini: '/assets/img-mini/sin culpa small.jpg',
          imgGrande: '/assets/img-grande/sin culpa small.jpg',
          sinopsis: 'Theo Abrams es un bombero retirado de la Ciudad del Cabo, que sufre síndrome de estrés postraumático a causa de una misión de rescate fallida. Una mañana, se despierta junto al cadáver de su mujer: todo parece indicar que él es el asesino.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Sin Novedad En El Frente',
          imgMini: '/assets/img-mini/Sin Novedad en el Frente small.jpg',
          imgGrande: '/assets/img-grande/Sin Novedad en el Frente small.jpg',
          sinopsis: 'Las aterradoras experiencias y la angustia de un joven soldado alemán en el frente occidental durante la Primera Guerra Mundial.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Sociedad De Honor',
          imgMini: '/assets/img-mini/sociedad de honor small.jpg',
          imgGrande: '/assets/img-grande/sociedad de honor small.jpg',
          sinopsis: 'El único objetivo de Honor es entrar en Harvard. Dispuesta a hacer lo que sea necesario, diseña un plan para acabar con sus tres principales rivales, pero se ve obligada a cambiar su estrategia cuando se enamora de su principal competidor.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'Sonrie',
          imgMini: '/assets/img-mini/Sonrie small.jpg',
          imgGrande: '/assets/img-grande/Sonrie small.jpg',
          sinopsis: 'Después de presenciar un incidente extraño que involucra a un paciente, la Dra. Rose Cotter comienza a experimentar sucesos aterradores. Rose debe enfrentarse a su inquietante pasado para poder sobrevivir y escapar de su nueva realidad.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Spirited',
          imgMini: '/assets/img-mini/Spirited small.jpg',
          imgGrande: '/assets/img-grande/Spirited small.jpg',
          sinopsis: 'Una versión musical de la historia de Charles Dickens de un misántropo avaro que se embarca en un viaje mágico.',
          genero: [comedia, 'musical', 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'Super Quien',
          imgMini: '/assets/img-mini/Super quien small.jpg',
          imgGrande: '/assets/img-grande/Super quien small.jpg',
          sinopsis: 'Un actor en apuros que parece condenado a llevar la vida de un perdedor, finalmente obtiene un papel principal como un superhéroe llamado Badman. Siente que todo es posible, pero el destino ataca de nuevo.',
          genero: [comedia, accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Supercool',
          imgMini: '/assets/img-mini/SUPERCOOL small.jpg',
          imgGrande: '/assets/img-grande/SUPERCOOL small.jpg',
          sinopsis: 'El vínculo innegable de Neil y Gilbert, amigos de toda la vida, se pone a prueba hasta el límite cuando Neil pide un deseo mágico que se hace realidad y cambia todo.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Sword Art Online La Pelicula Progressive',
          imgMini: '/assets/img-mini/Sword Art Online la pelicula Progressive small.jpg',
          imgGrande: '/assets/img-grande/Sword Art Online la pelicula Progressive small.jpg',
          sinopsis: 'Ha pasado un mes desde que empezó el juego mortal de Akihiko Kayaba, y el número de cadáveres no cesa de aumentar: 2000 jugadores han muerto ya. Kirito y Asuna se unen para superar los retos y sobrevivir.',
          genero: [animacion, infantil, anime],
          tipo: pelicula
     },

     {
          nombre: 'Tayo',
          imgMini: '/assets/img-mini/tayo SMALL.jpg',
          imgGrande: '/assets/img-grande/tayo SMALL.jpg',
          sinopsis: 'Tayo es un pequeño autobús que, acompañado de sus amigos Rogi, Lani y Gani, recorre diariamente la ciudad de Seúl y vive intensas y divertidas aventuras en sus travesías por la capital surcoreana.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Terror Bajo Tierra',
          imgMini: '/assets/img-mini/Terror bajo tierra small.jpg',
          imgGrande: '/assets/img-grande/Terror bajo tierra small.jpg',
          sinopsis: 'En la cordillera de los Apalaches, nueve mineros tratan de sobrevivir después de quedar atrapados a 3000 metros bajo tierra a causa de una explosión.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Thor Amor Y Trueno',
          imgMini: '/assets/img-mini/thor amor y trueno small.jpg',
          imgGrande: '/assets/img-grande/thor amor y trueno small.jpg',
          sinopsis: 'Thor reclama la ayuda de Valquiria, Korg y su exnovia Jane Foster para luchar contra Gorr el Dios Carnicero, que pretende extinguir a los dioses.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Tiempo Para Mi',
          imgMini: '/assets/img-mini/Tiempo para mi small.jpg',
          imgGrande: '/assets/img-grande/Tiempo para mi small.jpg',
          sinopsis: 'Sigue a un padre que encuentra tiempo para sí mismo por primera vez en años mientras su esposa e hijos están fuera. Se vuelve a conectar con un amigo para pasar un fin de semana salvaje.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Top Gun Maverick',
          imgMini: '/assets/img-mini/top gun maverick small.jpg',
          imgGrande: '/assets/img-grande/top gun maverick small.jpg',
          sinopsis: 'Después de más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete Mitchell está donde pertenece, forzando los límites como valiente piloto de pruebas y esquivando el avance de rango que lo dejaría en tierra.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Trece Vidas',
          imgMini: '/assets/img-mini/trece vidas small.jpg',
          imgGrande: '/assets/img-grande/trece vidas small.jpg',
          sinopsis: 'Se organiza una misión de rescate en Tailandia, donde un grupo de jóvenes y su entrenador de fútbol están atrapados en un sistema de cuevas subterráneas que se están inundando.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'Tren Bala',
          imgMini: '/assets/img-mini/Tren Bala small.jpg',
          imgGrande: '/assets/img-grande/Tren Bala small.jpg',
          sinopsis: 'Cinco asesinos a sueldo se encuentran a bordo de un tren bala que viaja de Tokio a Morioka con unas pocas paradas intermedias. La pregunta es quién saldrá vivo del tren y qué les espera en la estación final.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Trol',
          imgMini: '/assets/img-mini/Trol small.jpg',
          imgGrande: '/assets/img-grande/Trol small.jpg',
          sinopsis: 'En lo profundo de la montaña Dovre, algo gigantesco despierta después de mil años en cautiverio. La criatura destruye todo a su paso y rápidamente se acerca a Oslo.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Turno De Dia',
          imgMini: '/assets/img-mini/turno de dia small.jpg',
          imgGrande: '/assets/img-grande/turno de dia small.jpg',
          sinopsis: 'Un padre que trabaja duro y que solo quiere darle una buena vida a su ingeniosa hija de 8 años. Su trabajo de limpieza de piscinas en el Valle de San Fernando es una fachada para su verdadera fuente de ingresos: cazar y matar vampiros.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Un Camino Magico',
          imgMini: '/assets/img-mini/un camino magico small.jpg',
          imgGrande: '/assets/img-grande/un camino magico small.jpg',
          sinopsis: 'Polina, una niña de 11 años, se embarca en un viaje mágico para encontrar la verdad sobre su pasado y su familia.',
          genero: [drama, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Un Mundo Extraño',
          imgMini: '/assets/img-mini/Un mundo extraño small.jpg',
          imgGrande: '/assets/img-grande/Un mundo extraño small.jpg',
          sinopsis: 'Los legendarios Clades son una familia de exploradores cuyas diferencias amenazaron con derrocar su misión más reciente y crucial.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Una Noche En El Museo',
          imgMini: '/assets/img-mini/Una noche en el museo small.jpg',
          imgGrande: '/assets/img-grande/Una noche en el museo small.jpg',
          sinopsis: 'Llega una muy interesante adaptación animada de la popular saga de películas ‘Noche en el museo’. Exclusiva de Disney+.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Una Peli De Futbol',
          imgMini: '/assets/img-mini/Una peli de futbol small.jpg',
          imgGrande: '/assets/img-grande/Una peli de futbol small.jpg',
          sinopsis: 'Cuatro jóvenes fanáticos del fútbol hacen piña para ayudar a sus ídolos a recuperar sus habilidades cuando un malvado científico les arrebata su talento.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Vendetta',
          imgMini: '/assets/img-mini/vendetta small.jpg',
          imgGrande: '/assets/img-grande/vendetta small.jpg',
          sinopsis: 'Cuando su hija es asesinada y la justicia parece poco probable, William Duncan toma la ley en sus propias manos y se embarca en una búsqueda de represalias.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Venganza',
          imgMini: '/assets/img-mini/venganza 2022 small.jpg',
          imgGrande: '/assets/img-grande/venganza 2022 small.jpg',
          sinopsis: 'Un escritor de la ciudad de Nueva York intenta resolver el asesinato de una chica con la que se enganchó y viaja al sur para investigar las circunstancias de su muerte y descubrir qué le sucedió.',
          genero: [suspenso, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Venganza Y Redencion',
          imgMini: '/assets/img-mini/venganza y redencion small.jpg',
          imgGrande: '/assets/img-grande/venganza y redencion small.jpg',
          sinopsis: 'Un exmarine debe luchar contra su conciencia y su código de honor cuando se ve obligado a hacer cosas para la mafia.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Vertigo',
          imgMini: '/assets/img-mini/vertigo small.jpg',
          imgGrande: '/assets/img-grande/vertigo small.jpg',
          sinopsis: 'Dos amigas cuyas vidas giran en torno a la superación de sus propios límites y miedos, se proponen escalar una torre de telecomunicaciones en desuso de más de 600 metros de altura.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Willow',
          imgMini: '/assets/img-mini/Willow 1988 smal.jpg',
          imgGrande: '/assets/img-grande/Willow 1988 smal.jpg',
          sinopsis: 'Un joven granjero es elegido para emprender un peligroso viaje con el fin de proteger a un bebé especial de una reina malvada.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: '1917',
          imgMini: '/assets/img-mini/1917 small.jpg',
          imgGrande: '/assets/img-grande/1917 small.jpg',
          sinopsis: 'Dos jóvenes soldados ingleses tienen una misión imposible durante la Primera Guerra Mundial: entregar un mensaje tras las líneas enemigas para evitar que sus compañeros caigan en una trampa.',
          genero: [accion, belico, drama],
          tipo: pelicula
     },

     {
          nombre: '1942',
          imgMini: '/assets/img-mini/1942 small.jpg',
          imgGrande: '/assets/img-grande/1942 small.jpg',
          sinopsis: 'Entre el invierno de 1942 y 1943, en la ciudad de Rzhev, sucedieron una serie de batallas no tan conocidas en la historia mundial, pero que fueron terriblemente sangrientas. Esas batallas recibieron el nombre de: Picadora de carne Rzhev.',
          genero: [accion, belico, drama],
          tipo: pelicula
     },

     {
          nombre: '2012',
          imgMini: '/assets/img-mini/2012 small.jpg',
          imgGrande: '/assets/img-grande/2012 small.jpg',
          sinopsis: 'Un escritor frustrado lucha por mantener a su familia con vida cuando una serie de catástrofes mundiales amenaza con aniquilar a la humanidad.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: '2067',
          imgMini: '/assets/img-mini/2067 small.jpg',
          imgGrande: '/assets/img-grande/2067 small.jpg',
          sinopsis: 'En el futuro cercano, el cambio climático ha provocado la necesidad de emplear oxígeno artificial para poder respirar. Con su mujer enferma y pocas esperanzas de sobrevivir, Ethan se ve obligado a viajar al futuro para buscar una cura para su misteriosa enfermedad. Sin saber en quién confiar, debe navegar por un futuro repleto de peligros y sin la certeza de poder regresar a casa.',
          genero: [suspenso, ciencia],
          tipo: pelicula
     },

     {
          nombre: '3 Metros sobre el cielo',
          imgMini: '/assets/img-mini/3 metros small.jpg',
          imgGrande: '/assets/img-grande/3 metros small.jpg',
          sinopsis: 'Una mujer privilegiada y un hombre temerario se enamoran a pesar de la diferencia de clase entre ambos.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Tengo ganas de ti',
          imgMini: '/assets/img-mini/3 metros 2 small.jpg',
          imgGrande: '/assets/img-grande/3 metros 2 small.jpg',
          sinopsis: 'La secuela de Tres metros sobre el cielo comienza con la vuelta de H a su pueblo, donde vuelven los problemas del pasado y surge un nuevo amor.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: '365 Dias',
          imgMini: '/assets/img-mini/365 dias small.jpg',
          imgGrande: '/assets/img-grande/365 dias small.jpg',
          sinopsis: 'Massimo es un miembro de la mafia siciliana y Laura una directora de ventas que no esperaba ser secuestrada en su viaje a Sicilia y dada 365 días para enamorarse de él.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: '365 Dias Aquel Dia',
          imgMini: '/assets/img-mini/365 dias aquel dia small.jpg',
          imgGrande: '/assets/img-grande/365 dias aquel dia small.jpg',
          sinopsis: 'Laura y Massimo vuelven más fuertes que nunca, pero las ataduras familiares de Massimo y un misterioso hombre que quiere conquistar a Laura complican su relación.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: '365 Dias Mas',
          imgMini: '/assets/img-mini/365 dias mas small.jpg',
          imgGrande: '/assets/img-grande/365 dias mas small.jpg',
          sinopsis: 'La relación entre Laura y Massimo está en la cuerda floja mientras intentan superar problemas de desconfianza. Entretanto, Nacho se esfuerza por separarlos.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'A Ciegas',
          imgMini: '/assets/img-mini/a ciegas small.jpg',
          imgGrande: '/assets/img-grande/a ciegas small.jpg',
          sinopsis: 'Cinco años después de que una siniestra presencia llevara a la mayoría de la humanidad a suicidarse, una madre y sus dos hijos hacen una última apuesta por llegar a un lugar seguro.',
          genero: [suspenso, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'A Todo Tren',
          imgMini: '/assets/img-mini/a todo tren small.jpg',
          imgGrande: '/assets/img-grande/a todo tren small.jpg',
          sinopsis: 'Ricardo es nominado por todos los padres para llevar a sus hijos a un campamento en Asturias. En una parada de tren, Ricardo y el abuelo Felipe se bajan para fumarse un cigarro, y pierden el tren, con los niños dentro, a su salida.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Abominable',
          imgMini: '/assets/img-mini/abominable small.jpg',
          imgGrande: '/assets/img-grande/abominable small.jpg',
          sinopsis: 'Tres adolescentes buscan ayudar a un joven yeti a reunirse con su familia en el Himalaya. Para ello, deben evitar que un hombre inescrupuloso lo capture y lo lleve a un zoológico.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Actividad Paranormal 7',
          imgMini: '/assets/img-mini/actividad paranormal 7 small.jpg',
          imgGrande: '/assets/img-grande/actividad paranormal 7 small.jpg',
          sinopsis: 'Margot, una joven abandonada por su madre desde pequeña, viaja a una apartada comunidad Amish con un equipo de filmación en busca de parientes y respuestas.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'After 1 Aqui empieza todo',
          imgMini: '/assets/img-mini/after 1 small.jpg',
          imgGrande: '/assets/img-grande/after 1 small.jpg',
          sinopsis: 'Una joven se enamora de un chico con un oscuro secreto y ambos se embarcan en una relación difícil. Basado en la novela de Anna Todd.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'After 2 En mil pedazos',
          imgMini: '/assets/img-mini/after 2 small.jpg',
          imgGrande: '/assets/img-grande/after 2 small.jpg',
          sinopsis: 'La relación de Tessa y Hardin atraviesa un momento complicado. Mientras él se hunde en el alcohol, ella se siente atraída por un hombre al que ha conocido.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'After 3 Almas perdidas',
          imgMini: '/assets/img-mini/after 3 small.jpg',
          imgGrande: '/assets/img-grande/after 3 small.jpg',
          sinopsis: 'Cuando Tessa toma una decisión trascendental, revelaciones familiares y su pasado amenazan con cambiar sus planes.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'After 4 Amor Infinito',
          imgMini: '/assets/img-mini/After 4 Amor Infinito small.jpg',
          imgGrande: '/assets/img-grande/After 4 Amor Infinito small.jpg',
          sinopsis: 'A medida que surge una verdad sobre las familias de una pareja, los dos amantes descubren que no son diferentes. Tessa ya no es la chica dulce y buena que era cuando conoció a Hardin, como tampoco él es el chico cruel del que se enamoró.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Agencia Secreta De Control Magico',
          imgMini: '/assets/img-mini/agencia secreta de control magico small.jpg',
          imgGrande: '/assets/img-grande/agencia secreta de control magico small.jpg',
          sinopsis: 'Gretel del famoso cuento para niños ahora son agentes secretos que deben usar la magia, el ingenio y el trabajo en equipo para encontrar a un rey desaparecido.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Agentes 355',
          imgMini: '/assets/img-mini/agentes 355 small.jpg',
          imgGrande: '/assets/img-grande/agentes 355 small.jpg',
          sinopsis: 'Un grupo de mujeres conforman una de las unidades de espías más prestigiosas del mundo. Las agentes deberán enfrentarse a una temible amenaza.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Aguas Profundas',
          imgMini: '/assets/img-mini/aguas profundas small.jpg',
          imgGrande: '/assets/img-grande/aguas profundas small.jpg',
          sinopsis: 'Un marido acomodado que permite que su esposa tenga aventuras para evitar el divorcio se convierte en el principal sospechoso de la desaparición de sus amantes.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Ainbo',
          imgMini: '/assets/img-mini/ainbo small.jpg',
          imgGrande: '/assets/img-grande/ainbo small.jpg',
          sinopsis: 'Sigue el viaje épico de una joven heroína y sus guías espirituales, Dillo, un armadillo lindo y divertido y Vaca, un tapir de gran tamaño, quienes se embarcan en una búsqueda para salvar su hogar en la espectacular selva amazónica.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Aladin',
          imgMini: '/assets/img-mini/aladin small.jpg',
          imgGrande: '/assets/img-grande/aladin small.jpg',
          sinopsis: 'Un joven callejero de buen corazón y un gran visir hambriento de poder luchan por una lámpara mágica que tiene el poder de hacer realidad los deseos más profundos.',
          genero: [comedia, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Alerta Roja',
          imgMini: '/assets/img-mini/alerta roja small.jpg',
          imgGrande: '/assets/img-grande/alerta roja small.jpg',
          sinopsis: 'Un agente de la Interpol, la Organización Internacional de Policía Criminal, tiene como misión encontrar y capturar al ladrón de piezas de arte más buscado del mundo.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Alita',
          imgMini: '/assets/img-mini/alita small.jpg',
          imgGrande: '/assets/img-grande/alita small.jpg',
          sinopsis: 'Una historia llena de acción sobre el viaje de autodescubrimiento de una joven que quiere descubrir la verdad sobre quién es y luchar para cambiar el mundo.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Ambulance',
          imgMini: '/assets/img-mini/ambulance small.jpg',
          imgGrande: '/assets/img-grande/ambulance small.jpg',
          sinopsis: 'Unos hermanos ladrones intentan dejar a atrás a la policía de Los Ángeles después de secuestrar una ambulancia para escapar del robo de un banco.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Amenaza En Lo Profundo',
          imgMini: '/assets/img-mini/amenaza en lo profundo small.jpg',
          imgGrande: '/assets/img-grande/amenaza en lo profundo small.jpg',
          sinopsis: 'Un grupo de investigadores submarinos intenta alcanzar un lugar seguro después de que un terremoto destruya su laboratorio subterráneo.',
          genero: [accion, suspenso, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'American Sicario',
          imgMini: '/assets/img-mini/american sicario small.jpg',
          imgGrande: '/assets/img-grande/american sicario small.jpg',
          sinopsis: 'El gángster estadounidense Erik Vasquez está planeando convertirse en el mejor perro del inframundo mexicano, solo para encontrarse haciendo enemigos tanto entre los poderosos cárteles como entre sus propios aliados.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Amigos De Vacaciones',
          imgMini: '/assets/img-mini/amigos de vacaciones small.jpg',
          imgGrande: '/assets/img-grande/amigos de vacaciones small.jpg',
          sinopsis: 'Una pareja se encuentra con otra pareja mientras está de vacaciones en México, pero su amistad da un giro incómodo cuando vuelven a casa.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Amor Sin Barreras',
          imgMini: '/assets/img-mini/amor sin barreras small.jpg',
          imgGrande: '/assets/img-grande/amor sin barreras small.jpg',
          sinopsis: 'Una adaptación del musical de 1957 que explora el amor prohibido y la rivalidad entre las pandillas callejeras de adolescentes de diferentes orígenes étnicos, los Jets y los Sharks.',
          genero: ['musical', drama],
          tipo: pelicula
     },

     {
          nombre: 'Amor Y Monstruos',
          imgMini: '/assets/img-mini/AMOR Y MONSTRUOS small.jpg',
          imgGrande: '/assets/img-grande/AMOR Y MONSTRUOS small.jpg',
          sinopsis: 'Siete años después de haber sobrevivido al apocalipsis de los monstruos, el desdichado Joel abandona su acogedor búnker subterráneo para reunirse con su novia.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Animales fantásticos y dónde encontrarlos',
          imgMini: '/assets/img-mini/animales fantasticos 1.jpg',
          imgGrande: '/assets/img-grande/animales fantasticos 1.jpg',
          sinopsis: 'En 1926, el mago experto en zoología Newt Scamander hace una breve parada en Nueva York mientras viaja catalogando y capturando criaturas mágicas por el mundo. Jacob, un humano corriente, provoca por error que las criaturas escapen y se oculten por la ciudad. Scamander tendrá que atraparlas de nuevo, antes de que causen problemas.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Animales fantásticos: Los crímenes de Grindelwald',
          imgMini: '/assets/img-mini/animales fantasticos 2 small.jpg',
          imgGrande: '/assets/img-grande/animales fantasticos 2 small.jpg',
          sinopsis: 'Grindewald ha logrado escapar y pretende encabezar una revuelta de los magos purasangre para dominar el mundo. Dumbledore, acompañado por su antiguo estudiante Scamander, tratará de evitar que quien fuera su gran amigo cumpla su siniestro propósito.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Animales fantásticos: Los secretos de Dumbledore',
          imgMini: '/assets/img-mini/animales fantasticos 3 small.jpg',
          imgGrande: '/assets/img-grande/animales fantasticos 3 small.jpg',
          sinopsis: 'Ante una severa amenaza, el magizoólogo Newt Scamander lidera a un valiente grupo de magos y brujas que busca detener al malvado Gellert Grindelwald.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Annabelle 1',
          imgMini: '/assets/img-mini/annabelle 1 small.jpg',
          imgGrande: '/assets/img-grande/annabelle 1 small.jpg',
          sinopsis: 'John Form encuentra el regalo perfecto para Mia, su esposa embarazada: una preciosa muñeca antigua llamada Annabelle. Una noche, una secta satánica les ataca brutalmente y provocan que un ente maligno se apodere de Annabelle.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Annabelle 2: la creación',
          imgMini: '/assets/img-mini/annabell 2 small.jpg',
          imgGrande: '/assets/img-grande/annabell 2 small.jpg',
          sinopsis: 'Varios años después del trágico fallecimiento de su hija, un juguetero que crea muñecas y su mujer alojan en su casa a una enfermera y un grupo de chicas; pero la muñeca Annabelle, poseída por un espíritu, comienza a atacarlas.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Annabelle 3: vuelve a casa',
          imgMini: '/assets/img-mini/annabelle 3 small.jpg',
          imgGrande: '/assets/img-grande/annabelle 3 small.jpg',
          sinopsis: 'Ed y Lorraine Warren encierran a Annabelle, una muñeca poseída, y la dejan en una vitrina bendecida como medida de seguridad. Sin embargo, una noche terrorífica, Annabelle despierta al resto de espíritus malignos confinados en la misma habitación.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Ant Man 1',
          imgMini: '/assets/img-mini/ant man 1 small.jpg',
          imgGrande: '/assets/img-grande/ant man 1 small.jpg',
          sinopsis: 'El ladrón de guante blanco Scott Lang, equipado con un súper traje con la asombrosa capacidad de reducir el tamaño pero aumentar la fuerza de quien lo lleva, debe aceptar a su héroe interior y ayudar a su mentor, el Dr. Hank Pym, a planear y llevar a cabo un atraco que salvará al mundo.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Ant Man y la Avispa: Quantumanía',
          imgMini: '/assets/img-mini/ant man and the wasp small.jpg',
          imgGrande: '/assets/img-grande/ant man and the wasp small.jpg',
          sinopsis: 'Scott Lang y Hope Van Dyne, junto con Hank Pym y Janet Van Dyne, exploran el Reino Cuántico, donde interactúan con extrañas criaturas y se embarcan en una aventura que va más allá de los límites de lo que creían posible.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Aquaman',
          imgMini: '/assets/img-mini/aquaman small.jpg',
          imgGrande: '/assets/img-grande/aquaman small.jpg',
          sinopsis: 'Arthur Curry descubre que es el heredero del reino submarino de Atlantis, y debe dar un paso al frente para guiar a su gente y convertirse en un héroe para el mundo.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Aquellos Que Desean Mi Muerte',
          imgMini: '/assets/img-mini/aquellos que desean mi muerte small.jpg',
          imgGrande: '/assets/img-grande/aquellos que desean mi muerte small.jpg',
          sinopsis: 'Un joven testigo del asesinato de su padre es perseguido por dos asesinos gemelos en las tierras de Montana junto con una experta en supervivencia con la misión de protegerlo y un bosque en llamas que amenaza con consumirlos a todos.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Arañas',
          imgMini: '/assets/img-mini/Arañas small.jpg',
          imgGrande: '/assets/img-grande/Arañas small.jpg',
          sinopsis: 'En un misterioso laboratorio ubicado en el desierto, las arañas experimentales utilizadas para la investigación genética mutan en monstruos araña gigantes y el laboratorio se reduce a la guarida de una araña gigante.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Asalto A La Casa D La Moneda',
          imgMini: '/assets/img-mini/asalto a la casa d la moneda small.jpg',
          imgGrande: '/assets/img-grande/asalto a la casa d la moneda small.jpg',
          sinopsis: 'Un ingeniero y un marchante de arte traman un atraco al Banco de España para robar un tesoro legendario que será depositado en sus arcas durante solo 10 días.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Asesino Sin Memoria',
          imgMini: '/assets/img-mini/asesino sin memoria small.jpg',
          imgGrande: '/assets/img-grande/asesino sin memoria small.jpg',
          sinopsis: 'Un asesino a sueldo descubre que se ha convertido en un objetivo después de que se niega a completar un trabajo para una peligrosa organización criminal.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Atraction',
          imgMini: '/assets/img-mini/atraction small.jpg',
          imgGrande: '/assets/img-grande/atraction small.jpg',
          sinopsis: 'Una nave alienígena se estrella en una ciudad rusa, muchos de los que la vieron y los ocupantes comienzan a cuestionarse su propia existencia, mientras que hay quienes exigen que los alienígenas abandonen la Tierra.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Atraction 2: El fin de los tiempos',
          imgMini: '/assets/img-mini/atraccion 2 small .jpg',
          imgGrande: '/assets/img-grande/atraccion 2 small .jpg',
          sinopsis: 'Con la caída de la nave alienígena, la vida de Julia cambió. Ahora, tres años después, la humanidad está a punto de vivir un nuevo encuentro.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Atrapados',
          imgMini: '/assets/img-mini/atrapados small.jpg',
          imgGrande: '/assets/img-grande/atrapados small.jpg',
          sinopsis: 'En un esfuerzo por salvar su matrimonio, Emma y Henry se instalan en un sitio remoto y exclusivo. Sin embargo, tras sospechar de un intruso, deciden huir y terminan atrapados y amenazados por una misteriosa voz dentro del lugar.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Avatar Pelicula',
          imgMini: '/assets/img-mini/avatar pelicula small.jpg',
          imgGrande: '/assets/img-grande/avatar pelicula small.jpg',
          sinopsis: 'Un marine parapléjico enviado a la luna Pandora en una misión única se debate entre seguir sus órdenes y proteger el mundo que siente como su hogar.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Avengers 1',
          imgMini: '/assets/img-mini/los vengadores 1.jpg',
          imgGrande: '/assets/img-grande/los vengadores 1.jpg',
          sinopsis: 'Los héroes más poderosos de la Tierra deben unirse y aprender a luchar en equipo si quieren evitar que Loki y su ejército alienígena esclavicen a la humanidad.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Avengers 3',
          imgMini: '/assets/img-mini/avengers 3 small.jpg',
          imgGrande: '/assets/img-grande/avengers 3 small.jpg',
          sinopsis: 'Los Vengadores y sus aliados estarán dispuestos a sacrificarlo todo para derrotar al poderoso Thanos antes de que su devastación y ruina ponga fin al universo.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Avengers 4 Endgame',
          imgMini: '/assets/img-mini/avenger 4 endgame small.jpg',
          imgGrande: '/assets/img-grande/avenger 4 endgame small.jpg',
          sinopsis: 'Después de que Thanos haya aniquilado a la mitad del universo, los Vengadores supervivientes deben hacer todo lo posible por deshacer tal atrocidad.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Aves De Presa',
          imgMini: '/assets/img-mini/aves de presa small.jpg',
          imgGrande: '/assets/img-grande/aves de presa small.jpg',
          sinopsis: 'Tras separarse del Joker, Harley Quinn se une a las superheroínas Canario Negro, Cazadora y Renée Montoya para salvar a una joven de un malvado señor del crimen.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Black Widow',
          imgMini: '/assets/img-mini/black widow small.jpg',
          imgGrande: '/assets/img-grande/black widow small.jpg',
          sinopsis: 'Natasha Romanoff se enfrenta a las partes más oscuras de su vida cuando surge una peligrosa conspiración vinculada con su pasado.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Bloodshot',
          imgMini: '/assets/img-mini/bloodshot small.jpg',
          imgGrande: '/assets/img-grande/bloodshot small.jpg',
          sinopsis: 'Angelo Mortalli, un asesino a sueldo, muere a manos de su propia gente. Su cuerpo cae en manos del FBI, que le inyecta un suero para devolverle la vida.',
          genero: [accion, superheroes, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Bob Espomja Un Hero Al Rescate',
          imgMini: '/assets/img-mini/bob espomja un hero al rescate small.jpg',
          imgGrande: '/assets/img-grande/bob espomja un hero al rescate small.jpg',
          sinopsis: 'Bob Esponja y Patrick viajan a la ciudad perdida de Atlantic City para resolver el misterioso secuestro de Gary el caracol.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Brujas',
          imgMini: '/assets/img-mini/brujas small.jpg',
          imgGrande: '/assets/img-grande/brujas small.jpg',
          sinopsis: 'Basada en el imaginativo clásico de Roald Dahl del mismo nombre, cuenta el cuento aterrador de un niño de siete años que se enfrenta a brujas reales.',
          genero: [comedia, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Cabalgando A La Gloria',
          imgMini: '/assets/img-mini/cabalgando a la gloria small.jpg',
          imgGrande: '/assets/img-grande/cabalgando a la gloria small.jpg',
          sinopsis: 'El cantinero galés Jan Vokes cría un supuesto caballo de carreras. Sin experiencia, Jan convence a sus vecinos de que aporten sus escasas ganancias para criar a Dream, con la esperanza de que pueda competir con las élites de las carreras.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Cadaver',
          imgMini: '/assets/img-mini/cadaver small.jpg',
          imgGrande: '/assets/img-grande/cadaver small.jpg',
          sinopsis: 'Mientras Megan trabaja en el turno de noche de la morgue, recibe un cadáver desfigurado. Sola y encerrada en los pasillos del sótano, Megan comienza a experimentar espeluznantes visiones, lo que le hace sospechar que el cuerpo que ha recibido está poseído por una despiadada fuerza demoníaca.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Candyman',
          imgMini: '/assets/img-mini/candiman small.jpg',
          imgGrande: '/assets/img-grande/candiman small.jpg',
          sinopsis: 'Desde tiempos inmemoriales, los proyectos residenciales del barrio de Cabrini Green en Chicago se han visto amenazados por la historia de un supuesto asesino en serie con un gancho por mano al que se invoca fácilmente repitiendo su nombre cinco veces frente a un espejo.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Cangrejo Negro',
          imgMini: '/assets/img-mini/cangrejo negro small.jpg',
          imgGrande: '/assets/img-grande/cangrejo negro small.jpg',
          sinopsis: 'Para poner fin a una guerra apocalíptica y salvar a su hija, una soldado emprende una misión desesperada: transportar un cargamento ultrasecreto por un mar helado.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Caos El Inicio',
          imgMini: '/assets/img-mini/caos el inicio small.jpg',
          imgGrande: '/assets/img-grande/caos el inicio small.jpg',
          sinopsis: 'Dos improbables compañeros se embarcan en una peligrosa aventura a través de un planeta inexplorado mientras intentan escapar de una realidad peligrosa en la que todos los pensamientos son vistos y oídos por todo el mundo.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Capitan Nova',
          imgMini: '/assets/img-mini/capitan nova small.jpg',
          imgGrande: '/assets/img-grande/capitan nova small.jpg',
          sinopsis: 'Una piloto de combate viaja en el tiempo para salvar al mundo futuro de un desastre ambiental, pero un efecto secundario la vuelve joven y nadie la toma en serio.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Casate Conmigo',
          imgMini: '/assets/img-mini/casate conmigo small.jpg',
          imgGrande: '/assets/img-grande/casate conmigo small.jpg',
          sinopsis: 'Kat Valdez, una superestrella pop es abandonada por Bastian, una estrella de rock, momentos antes de su boda en un concierto en el Madison Square Garden, por lo que ella por revancha se casa con un fanático que escoge entre el público.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'Cenicienta 2021',
          imgMini: '/assets/img-mini/cenicienta 2021 small.jpg',
          imgGrande: '/assets/img-grande/cenicienta 2021 small.jpg',
          sinopsis: 'Un musical cinematográfico moderno con una visión audaz del clásico cuento de hadas. Nuestra ambiciosa heroína tiene grandes sueños y, con la ayuda de su fabulosa madrina, persevera para hacerlos realidad.',
          genero: [comedia, romance, 'musical'],
          tipo: pelicula
     },

     {
          nombre: 'Centauro',
          imgMini: '/assets/img-mini/centauro small.jpg',
          imgGrande: '/assets/img-grande/centauro small.jpg',
          sinopsis: 'Rafa está enganchado a los sentimientos puros y ardientes que obtiene de las carreras de velocidad, pero cuando la madre de su hijo se mezcla con traficantes de drogas, él quema goma para salvarla.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Centinela ',
          imgMini: '/assets/img-mini/centinela small .jpg',
          imgGrande: '/assets/img-grande/centinela small .jpg',
          sinopsis: 'Tras una misión de combate traumática, una soldado francesa es enviada de vuelta a casa, donde usa sus letales habilidades para dar caza al hombre que agredió a su hermana.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Cielo Rojo Sangre',
          imgMini: '/assets/img-mini/cielo rojo sangre small.jpg.jpg',
          imgGrande: '/assets/img-grande/cielo rojo sangre small.jpg.jpg',
          sinopsis: 'Una mujer con una misteriosa enfermedad se ve obligada a pasar a la acción cuando un grupo de terroristas intenta secuestrar un vuelo transatlántico nocturno. Para proteger a su hijo, tendrá que revelar un oscuro secreto.',
          genero: [accion, terror],
          tipo: pelicula
     },

     {
          nombre: 'Cigueñas',
          imgMini: '/assets/img-mini/Ciguenas small.jpg',
          imgGrande: '/assets/img-grande/Ciguenas small.jpg',
          sinopsis: 'Las cigüeñas han pasado de la entrega de bebés a los paquetes. Pero cuando aparece un pedido de un bebé, la mejor cigüeña de parto debe luchar para corregir el error entregando al bebé.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Clifford',
          imgMini: '/assets/img-mini/clifford small.jpg',
          imgGrande: '/assets/img-grande/clifford small.jpg',
          sinopsis: 'El amor de una niña por un cachorrito llamado Clifford hace que el perro crezca a un tamaño enorme.',
          genero: [comedia, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Coco',
          imgMini: '/assets/img-mini/coco small.jpg',
          imgGrande: '/assets/img-grande/coco small.jpg',
          sinopsis: 'El aspirante a músico Miguel le planta cara a la prohibición generacional de su familia a la música, y se adentra en la Tierra de los Muertos para encontrar a su tátara-tátara-abuelo, un legendario cantante.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Coctel Explosivo',
          imgMini: '/assets/img-mini/coctel explosivo small.jpg',
          imgGrande: '/assets/img-grande/coctel explosivo small.jpg',
          sinopsis: 'Tres generaciones de mujeres deberán aprender a confiar las unas en las otras, enfrentarse a La Firma y a su ejército de secuaces, y hacer frente a todos aquellos que se interpongan en su camino.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Coda',
          imgMini: '/assets/img-mini/coda small.jpg',
          imgGrande: '/assets/img-grande/coda small.jpg',
          sinopsis: 'Como hija de adultos sordos, Ruby es la única persona oyente en su familia. Cuando el negocio pesquero de la familia se ve amenazado, Ruby se encuentra dividida entre perseguir su amor por la música y su miedo a abandonar a sus padres.',
          genero: [comedia, romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'Como Me Converti En Super Heroe',
          imgMini: '/assets/img-mini/como me converti en super heroe small.jpg',
          imgGrande: '/assets/img-grande/como me converti en super heroe small.jpg',
          sinopsis: 'Mientras que los superhéroes se han adaptado a la sociedad parisina, una nueva droga otorga superpoderes a los simples mortales.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Contractor',
          imgMini: '/assets/img-mini/contractor small.jpg',
          imgGrande: '/assets/img-grande/contractor small.jpg',
          sinopsis: 'Un sargento de las Fuerzas Especiales de EE. UU. dado de baja, James Harper, lo arriesga todo por su familia cuando se une a una organización contratista privada.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Copshop',
          imgMini: '/assets/img-mini/copshop small.jpg',
          imgGrande: '/assets/img-grande/copshop small.jpg',
          sinopsis: 'Huyendo de un asesino mortal, un estafador astuto se esconde dentro de una comisaría de policía de un pequeño pueblo, pero cuando el sicario aparece en la comisaría, un policía novato desprevenido se encuentra en la mira.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Coraline',
          imgMini: '/assets/img-mini/coraline small.jpg',
          imgGrande: '/assets/img-grande/coraline small.jpg',
          sinopsis: 'Una aventurera niña de 11 años encuentra otro mundo que es una versión extrañamente idealizada de su frustrante hogar, pero que tiene siniestros secretos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Corazon De Fuego',
          imgMini: '/assets/img-mini/corazon de fuego small.jpg',
          imgGrande: '/assets/img-grande/corazon de fuego small.jpg',
          sinopsis: 'Desesperada por ayudar a su padre en una misión heroica y salvar su ciudad, Georgia se disfraza de un chico llamado "Joe" y se une a un pequeño grupo de bomberos que intenta detener a un pirómano.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Corre Escondete Lucha',
          imgMini: '/assets/img-mini/corre escondete lucha small.jpg',
          imgGrande: '/assets/img-grande/corre escondete lucha small.jpg',
          sinopsis: 'Zoe Hull, de 17 años, usa su ingenio, habilidades de supervivencia y compasión para luchar por su vida, y la de sus compañeros de clase, contra un grupo de tiradores escolares en vivo.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Corre Y Dispara',
          imgMini: '/assets/img-mini/corre y dispara small.jpg',
          imgGrande: '/assets/img-grande/corre y dispara small.jpg',
          sinopsis: 'Después de dejar una vida de crimen y violencia, Ray es un buen tipo reformado que disfruta de una tranquila vida familiar en los suburbios.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Corre',
          imgMini: '/assets/img-mini/corre small.jpg',
          imgGrande: '/assets/img-grande/corre small.jpg',
          sinopsis: 'Una adolescente que recibe educación desde casa comienza a sospechar que su madre le oculta un oscuro secreto.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Crucero De La Jungla',
          imgMini: '/assets/img-mini/crucero de la jungla small.jpg',
          imgGrande: '/assets/img-grande/crucero de la jungla small.jpg',
          sinopsis: 'Basada en la atracción del parque temático Disneyland, en la que una pequeña embarcación fluvial lleva a un grupo de viajeros a través de una selva llena de animales y reptiles peligrosos, pero con un elemento sobrenatural.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Cruela',
          imgMini: '/assets/img-mini/Cruela small.jpg',
          imgGrande: '/assets/img-grande/Cruela small.jpg',
          sinopsis: 'Antes de convertirse en Cruella de Vil, Estella sueña con ser diseñadora de moda, ya que está dotada de talento, innovación y ambición a partes iguales. Pero la vida parece querer asegurarse de que sus sueños nunca se hagan realidad.',
          genero: [drama, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Cuando El Diablo Llama',
          imgMini: '/assets/img-mini/CUANDO el diablo llama small.jpg',
          imgGrande: '/assets/img-grande/CUANDO el diablo llama small.jpg',
          sinopsis: 'Un hombre se muda a una nueva casa con su hijo y su novia. Cuando está fuera de la ciudad, comienzan a llegar sonidos extraños desde la otra parte deshabitada de la casa.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Cuestion De Sangre',
          imgMini: '/assets/img-mini/cuestion de sangre small.jpg',
          imgGrande: '/assets/img-grande/cuestion de sangre small.jpg',
          sinopsis: 'Un padre viaja de Oklahoma a Francia para ayudar a su hija que está en prisión por un asesinato que ella afirma no haber cometido.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Dead Silence',
          imgMini: '/assets/img-mini/dead silence small.jpg',
          imgGrande: '/assets/img-grande/dead silence small.jpg',
          sinopsis: 'Un joven viudo regresa a su ciudad natal en busca de respuestas al asesinato de su esposa, que puede estar relacionado con el fantasma de un ventrílocuo asesinado.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Deadpool',
          imgMini: '/assets/img-mini/Deadpool small.jpg',
          imgGrande: '/assets/img-grande/Deadpool small.jpg',
          sinopsis: 'Un mercenario de lengua rápida y sentido del humor mórbido es sometido a una operación clandestina que le deja con poderes de curación acelerada y en búsqueda de venganza.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Deadpool 2',
          imgMini: '/assets/img-mini/deadpool 2 small.jpg',
          imgGrande: '/assets/img-grande/deadpool 2 small.jpg',
          sinopsis: 'El mercenario mutante malhablado Wade Wilson (también conocido como Deadpool), reúne a un equipo de compañeros mutantes para proteger a un joven con habilidades sobrenaturales del brutal cíborg Cable, que viaja en el tiempo.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Descuida Yo Te Cuido',
          imgMini: '/assets/img-mini/DESCUIDA YO TE CUIDO small.jpg',
          imgGrande: '/assets/img-grande/DESCUIDA YO TE CUIDO small.jpg',
          sinopsis: 'Una mujer corrupta que se funde los ahorros de los ancianos a los que cuida encuentra a su némesis en una mujer a la que intenta engañar, pero que resulta ser más de lo que aparenta.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Desesperada',
          imgMini: '/assets/img-mini/desesperada small.jpg',
          imgGrande: '/assets/img-grande/desesperada small.jpg',
          sinopsis: 'La rutinaria vida de Amy Carr da un giro inesperado, cuando una mañana, mientras se encuentra haciendo ejercicio a kilométros lejos de su casa, recibe una llamada que le informa que hay un tirador en la escuela de su hijo adolescente.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Detective Pikachu',
          imgMini: '/assets/img-mini/Detective pikachu small.jpg',
          imgGrande: '/assets/img-grande/Detective pikachu small.jpg',
          sinopsis: 'Un joven une fuerzas con el detective Pikachu para desentrañar el misterio detrás de la desaparición de su padre. El dúo dinámico descubre una trama tortuosa que representa una amenaza para el universo Pokémon.',
          genero: [comedia, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Detonados',
          imgMini: '/assets/img-mini/detonados small.jpg',
          imgGrande: '/assets/img-grande/detonados small.jpg',
          sinopsis: 'Nueve amigos, todos ellos con algún secreto oscuro, se van de acampada al bosque. Después de una noche loca de fiesta, se despiertan con bombas suicidas pegadas al pecho, cada una de ellas con un temporizador distinto.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: '007 Sin Tiempo Para Morir',
          imgMini: '/assets/img-mini/007 sin tiempo para morir small.jpg',
          imgGrande: '/assets/img-grande/007 sin tiempo para morir small.jpg',
          sinopsis: 'Bond ha dejado el servicio. Su recién encontrada paz es interrumpida por una visita de su amigo de la CIA Felix Leiter. Bond y Leiter le siguen la pista a un misterioso villano en posesión de peligrosas nuevas tecnologías.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: '7 Prisioneros',
          imgMini: '/assets/img-mini/7 prisioneros small.jpg',
          imgGrande: '/assets/img-grande/7 prisioneros small.jpg',
          sinopsis: 'Para brindar una vida mejor a su familia en el campo, Mateus, de 18 años, acepta un trabajo en un vertedero de São Paulo con su nuevo jefe, Luca, pero queda atrapado en el peligroso mundo de la trata de personas.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'A Traves De Mi Ventana',
          imgMini: '/assets/img-mini/a traves de mi ventana small.jpg',
          imgGrande: '/assets/img-grande/a traves de mi ventana small.jpg',
          sinopsis: 'Raquel lleva media vida loca por Ares, su atractivo vecino. Lo observa en secreto pero nunca ha hablado con él. ¿Podrá conseguir que Ares se enamore de ella?',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Al Lado De Un Asesino',
          imgMini: '/assets/img-mini/al lado de un asesino small.jpg',
          imgGrande: '/assets/img-grande/al lado de un asesino small.jpg',
          sinopsis: 'Una familia perfecta es destrozada cuando un asesino en serie actúa en su círculo. Dylan McDermott protagoniza este retrato Estadounidense de la maldad',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Alquiler De Padrino',
          imgMini: '/assets/img-mini/alquiler de padrino small.jpg',
          imgGrande: '/assets/img-grande/alquiler de padrino small.jpg',
          sinopsis: 'A dos semanas para su boda, un tipo tímido se ve envuelto en una estafa por parte de una empresa que brinda servicio de padrinos de boda.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'American Pie Reglas De Chicas',
          imgMini: '/assets/img-mini/american pie reglas de chicas small.jpg',
          imgGrande: '/assets/img-grande/american pie reglas de chicas small.jpg',
          sinopsis: 'Es el último año en la secundaria East Great Falls, y Annie, Kayla, Michelle y Stephanie deciden finalmente aprovechar su poder femenino para obtener lo que quieren en su último año de escuela.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Asesino De Demonios La Pelicula',
          imgMini: '/assets/img-mini/asesino de demonios la pelicula small.jpg',
          imgGrande: '/assets/img-grande/asesino de demonios la pelicula small.jpg',
          sinopsis: 'Con la ayuda de Inosuke Hashibira, un chico criado por osos, y de Zenitsu Agatsuma, que revela su poder en sus sueños, Tanjiro Kamado se embarca en un tren especial con la misión de derrotar a un demonio.',
          genero: [animacion, anime],
          tipo: pelicula
     },

     {
          nombre: 'Atrapada En Las Profundidades',
          imgMini: '/assets/img-mini/atrapada en las profundidades small.jpg',
          imgGrande: '/assets/img-grande/atrapada en las profundidades small.jpg',
          sinopsis: 'Unas vacaciones invernales de buceo en Noruega se convierten en una desesperada carrera contrarreloj para dos hermanas cuando una de ellas acaba atrapada en el fondo del océano.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Ava',
          imgMini: '/assets/img-mini/ava small.jpg',
          imgGrande: '/assets/img-grande/ava small.jpg',
          sinopsis: 'Ava es una asesina letal que trabaja para una organización de operaciones encubiertas, viajando por el mundo y especializándose en golpes de alto nivel. Cuando un trabajo sale mal, se ve obligada a luchar por su propia supervivencia.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Bad Boys 3',
          imgMini: '/assets/img-mini/bad boys 3 small.jpg',
          imgGrande: '/assets/img-grande/bad boys 3 small.jpg',
          sinopsis: 'Los detectives de Miami Mike Lowrey y Marcus Burnett deben enfrentarse a una pareja de narcotraficantes, madre e hijo, que causan estragos en su ciudad.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Barrenderos Espaciales ',
          imgMini: '/assets/img-mini/barrenderos espaciales small .jpg',
          imgGrande: '/assets/img-grande/barrenderos espaciales small .jpg',
          sinopsis: 'En 2092, la tripulación de una nave basurero espacial llama Victory descubre un robot humanoide llamado Dorothy, un arma de destrucción masiva, y se ven envueltos en un negocio de alto riesgo.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Batman vs Superman',
          imgMini: '/assets/img-mini/batman vs superman small.jpg',
          imgGrande: '/assets/img-grande/batman vs superman small.jpg',
          sinopsis: 'Ante el temor de que las acciones de Superman queden fuera de supervisión, Batman se enfrenta al Hombre de Acero, mientras el mundo se pregunta qué tipo de héroe realmente necesita.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Battle Freestyle',
          imgMini: '/assets/img-mini/BATTLE freestyle small.jpg',
          imgGrande: '/assets/img-grande/BATTLE freestyle small.jpg',
          sinopsis: 'El equipo de baile de Amalie avanza a la final mundial en Francia. Dividida entre el amor de Mikael, el anhelo por su madre ausente y su pasión por la danza, Amalie debe elegir. ¿Quién es ella para convertirse?',
          genero: [drama, romance, 'baile'],
          tipo: pelicula
     },

     {
          nombre: 'Becky',
          imgMini: '/assets/img-mini/BECKY small.jpg',
          imgGrande: '/assets/img-grande/BECKY small.jpg',
          sinopsis: 'Un fin de semana en la casa del lago se convierte en la pesadilla de una adolescente y su padre cuando un grupo de presidiarios irrumpe en sus vidas.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Belfast',
          imgMini: '/assets/img-mini/belfast small.jpg',
          imgGrande: '/assets/img-grande/belfast small.jpg',
          sinopsis: 'ambientado en la tumultuosa Irlanda del Norte de finales de los años 60. Sigue al pequeño Buddy mientras crece en un ambiente de lucha obrera, cambios culturales, odio interreligioso y violencia sectaria.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Capitana Marvel',
          imgMini: '/assets/img-mini/capitana_marvel small.jpg',
          imgGrande: '/assets/img-grande/capitana_marvel small.jpg',
          sinopsis: 'Carol Danvers se convierte de uno de los héroes más poderosos del universo cuando la Tierra se ve atrapada en medio de una guerra entre dos razas alienígenas.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Cars 3',
          imgMini: '/assets/img-mini/cars 3 small.jpg',
          imgGrande: '/assets/img-grande/cars 3 small.jpg',
          sinopsis: 'Rayo McQueen se propone demostrar a una nueva generación de corredores que sigue siendo el mejor coche de carreras del mundo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Cazador Contra Cazador',
          imgMini: '/assets/img-mini/cazador cazador small.jpg',
          imgGrande: '/assets/img-grande/cazador cazador small.jpg',
          sinopsis: 'Joseph y su familia de cazadores viven en los bosques más remotos, pero su tranquilidad es amenazada por un lobo salvaje. Joseph deja a la familia atrás para darle caza.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Cazadores De Monstruos',
          imgMini: '/assets/img-mini/cazadores de monstruos small.jpg',
          imgGrande: '/assets/img-grande/cazadores de monstruos small.jpg',
          sinopsis: 'Cuando la capitana Artemis y sus leales soldados son transportados a un nuevo mundo, se enzarzan en una desesperada batalla por la supervivencia contra enormes monstruos con poderes increíbles.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Cazafantasmas El Legado',
          imgMini: '/assets/img-mini/cazafantasmas el legado small.jpg',
          imgGrande: '/assets/img-grande/cazafantasmas el legado small.jpg',
          sinopsis: 'Cuando una madre soltera y sus dos hijos llegan a un pequeño pueblo, comienzan a descubrir su conexión con los Cazafantasmas originales y el legado secreto que su abuelo dejó.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Cementerio De Animales',
          imgMini: '/assets/img-mini/cementerio de animales small.jpg',
          imgGrande: '/assets/img-grande/cementerio de animales small.jpg',
          sinopsis: 'El Dr. Louis Creed descubre un cementerio extraño en un bosque cercano a su nueva casa. Cuando el gato de la familia muere atropellado, Louis lo entierra en ese inquietante cementerio y, lo que ocurre después, le aterra tanto como le fascina.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Cherry Smal',
          imgMini: '/assets/img-mini/cherry smal small.jpg',
          imgGrande: '/assets/img-grande/cherry smal small.jpg',
          sinopsis: 'Un médico militar que sufre estrés postraumático se engancha a las drogas hasta adquirir tal deuda que tiene que atracar bancos para pagar.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Chicos Buenos',
          imgMini: '/assets/img-mini/CHICOS BUENOS SMALL.jpg',
          imgGrande: '/assets/img-grande/CHICOS BUENOS SMALL.jpg',
          sinopsis: 'Tres chicos de sexto se embarcan en un viaje épico, cargando accidentalmente un montón de droga robada, perseguidos por chicas adolescentes, e intentando llegar a casa a tiempo para la fiesta más anticipada.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Chip y Dale',
          imgMini: '/assets/img-mini/chip and dale small.jpg',
          imgGrande: '/assets/img-grande/chip and dale small.jpg',
          sinopsis: 'Treinta años después de que terminara su popular programa de TV, las ardillas Chip y Chop viven vidas muy diferentes. Cuando un miembro del reparto de la serie original desaparece misteriosamente, la pareja debe reunirse para salvarle.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Chucky',
          imgMini: '/assets/img-mini/chucky small.jpg',
          imgGrande: '/assets/img-grande/chucky small.jpg',
          sinopsis: 'Una madre da a su hijo un muñeco por su cumpleaños sin saber de su siniestra naturaleza.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Combate',
          imgMini: '/assets/img-mini/combate small.jpg',
          imgGrande: '/assets/img-grande/combate small.jpg',
          sinopsis: 'Un hijo aspira a seguir los pasos de su padre en el mundo del MMA, pero en su camino tendrá que romper el ciclo abusivo que su padre continúa.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Crisis',
          imgMini: '/assets/img-mini/crisis small.jpg',
          imgGrande: '/assets/img-grande/crisis small.jpg',
          sinopsis: 'Tres historias entrecruzadas sobre el mundo de los opiáceos: un traficante planea una operación internacional; un arquitecto intenta recuperarse de su adicción; un catedrático investiga la relación entre el gobierno y una farmacéutica.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Cronicas De Navidad 1',
          imgMini: '/assets/img-mini/cronicas de navidad 1 small.jpg',
          imgGrande: '/assets/img-grande/cronicas de navidad 1 small.jpg',
          sinopsis: 'La historia de los hermanos Kate y Teddy Pierce, cuyo plan de Nochebuena para grabar con una cámara a Santa Claus se convierte en un viaje inesperado con el que la mayoría de los niños solo pueden soñar.',
          genero: [comedia, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'Cronicas De Navidad 2',
          imgMini: '/assets/img-mini/cronicas de navidad 2 small.jpg',
          imgGrande: '/assets/img-grande/cronicas de navidad 2 small.jpg',
          sinopsis: 'Descontenta por la nueva perspectiva de vida en familia, la adolescente Kate huye de casa y termina en el Polo Norte, donde un elfo revoltoso planea cancelar la Navidad.',
          genero: [comedia, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'Dios En El Camino',
          imgMini: '/assets/img-mini/dios en el camino small.jpg',
          imgGrande: '/assets/img-grande/dios en el camino small.jpg',
          sinopsis: 'La película nos muestra la historia de una madre joven que pierde a su marido en Afganistán y se esfuerza por criar a su pequeña hija en su ausencia.',
          genero: [drama, religioso],
          tipo: pelicula
     },

     {
          nombre: 'Doctor Strange 1',
          imgMini: '/assets/img-mini/Doctor Strange 1 small.jpg',
          imgGrande: '/assets/img-grande/Doctor Strange 1 small.jpg',
          sinopsis: 'Durante un viaje de curación física y espiritual, un brillante neurocirujano se adentra en el mundo de las artes místicas.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Doctor Strange 2',
          imgMini: '/assets/img-mini/doctor strange 2 small.jpg',
          imgGrande: '/assets/img-grande/doctor strange 2 small.jpg',
          sinopsis: 'Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Dog Un Viaje Salvaje',
          imgMini: '/assets/img-mini/dog un viaje salvaje small.jpg',
          imgGrande: '/assets/img-grande/dog un viaje salvaje small.jpg',
          sinopsis: 'Dos ex miembros de los Rangers del ejército se emparejan involuntariamente en el viaje de su vida. Briggs y Lulu, una belga del Malinois, corren a lo largo de la costa del Pacífico para llegar a tiempo al funeral de un compañero soldado.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Dolittle',
          imgMini: '/assets/img-mini/dolittle small.jpg',
          imgGrande: '/assets/img-grande/dolittle small.jpg',
          sinopsis: 'El afamado y excéntrico Dr. Dolittle es un médico veterinario de la Inglaterra victoriana. Aislado en su mansión, Dolittle vive junto a sus animales exóticos, que son su única compañía. Pero cuando la joven reina Victoria cae gravemente enferma, este peculiar doctor tendrá que viajar hasta una mítica isla en busca de una cura.',
          genero: [comedia, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Dora y La Ciudad Perdida',
          imgMini: '/assets/img-mini/dora small.jpg',
          imgGrande: '/assets/img-grande/dora small.jpg',
          sinopsis: 'Exploradora hasta el final, Dora se pone al frente de un equipo formado por Botas, Diego, un misterioso habitante de la jungla y un desorganizado grupo de adolescentes en una aventura en la que deberán salvar a sus padres y resolver el misterio oculto tras una ciudad perdida de oro.',
          genero: [comedia, familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Dragon Ball Super Broly',
          imgMini: '/assets/img-mini/dragon ball super broly small.jpg',
          imgGrande: '/assets/img-grande/dragon ball super broly small.jpg',
          sinopsis: 'En el planeta Tierra se disfruta en paz la celebración de el Torneo del Poder. Sin embargo, Goku es consciente de que existen enemigos aún por descubrir en el Universo, por lo que sigue entrenando sin descanso para llegar a niveles de poder nunca antes conocidas en un superguerrero.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Dumbo',
          imgMini: '/assets/img-mini/dumbo small.jpg',
          imgGrande: '/assets/img-grande/dumbo small.jpg',
          sinopsis: 'Un joven elefante, cuyas orejas de gran tamaño le permiten volar, ayuda a salvar a un circo en apuros. Pero cuando el circo empieza a planear una nueva empresa, Dumbo y sus amigos descubren oscuros secretos bajo el brillante barniz.',
          genero: [comedia, familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Duna',
          imgMini: '/assets/img-mini/duna small.jpg',
          imgGrande: '/assets/img-grande/duna small.jpg',
          sinopsis: 'Adaptación de la novela de ciencia ficción de Frank Herbert sobre el hijo de una familia noble que trata de vengarse de la muerte de su padre y al mismo tiempo salvar un planeta que se le ha encomendado proteger.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Duro De Cuidar 1',
          imgMini: '/assets/img-mini/Duro De Cuidar 1 small.jpg',
          imgGrande: '/assets/img-grande/Duro De Cuidar 1 small.jpg',
          sinopsis: 'El mejor guardaespaldas del mundo tiene un nuevo cliente, un asesino a sueldo que debe testificar ante la Corte Penal Internacional. Deben dejar de lado sus diferencias y trabajar juntos para llegar al juicio a tiempo.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Duro De Cuidar 2',
          imgMini: '/assets/img-mini/Duro De Cuidar 2 small.jpg',
          imgGrande: '/assets/img-grande/Duro De Cuidar 2 small.jpg',
          sinopsis: 'Michael Bryce intenta llevar una vida pacífica, pero no puede evitar unirse a Darius y su esposa Sonia en una misión a lo largo de la costa de Amalfi.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'El Año De Mi Graduacion',
          imgMini: '/assets/img-mini/el año de mi graduacion small.jpg',
          imgGrande: '/assets/img-grande/el año de mi graduacion small.jpg',
          sinopsis: 'Un truco de porristas que salió mal la llevó a un coma de 20 años. Ahora tiene 37 años, se acaba de despertar y está lista para vivir su sueño de la escuela secundaria: convertirse en la reina del baile de graduación.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'El Arma Del Engaño',
          imgMini: '/assets/img-mini/el arma del engaño small.jpg',
          imgGrande: '/assets/img-grande/el arma del engaño small.jpg',
          sinopsis: 'Durante la Segunda Guerra Mundial, dos oficiales de inteligencia utilizan un cadáver y papeles falsos para burlar a las tropas alemanas.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'El Caballero Verde',
          imgMini: '/assets/img-mini/el caballero verde small.jpg',
          imgGrande: '/assets/img-grande/el caballero verde small.jpg',
          sinopsis: 'La historia cuenta que Sir Gawain, uno de los caballeros de la Mesa Redonda del Rey Arturo, acepta el reto de un Caballero Verde, quien reta a cualquier caballero a blandir su espada contra él. A cambio, el caballero que acepte el reto, le será devuelto el mismo golpe un año y un día después.',
          genero: [drama, 'fantasia'],
          tipo: pelicula
     },

     {
          nombre: 'El Callejon De Las Almas Perdidas',
          imgMini: '/assets/img-mini/el callejon de las almas perdidas small.jpg',
          imgGrande: '/assets/img-grande/el callejon de las almas perdidas small.jpg',
          sinopsis: 'Un ambicioso feriante, con talento para manipular a la gente con unas pocas palabras bien elegidas, se enreda con una psiquiatra que es aún más peligrosa que él.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Canto Del Cisne',
          imgMini: '/assets/img-mini/el canto del cisne small.jpg',
          imgGrande: '/assets/img-grande/el canto del cisne small.jpg',
          sinopsis: 'A Cameron Turner se le diagnostica una enfermedad terminal. Hay una solución experimental, pero debe afrontar la alteración de su destino en una exploración del amor, la pérdida y el sacrificio.',
          genero: [drama, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'El Closet',
          imgMini: '/assets/img-mini/el closet small.jpg',
          imgGrande: '/assets/img-grande/el closet small.jpg',
          sinopsis: 'Después de que la hija de Sang-Won, Yi-Na, desaparezca sin dejar rastro de su nueva casa, un hombre misterioso contacta con la familia para sugerirle que la busque en el armario.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Dragon De La Tetera',
          imgMini: '/assets/img-mini/el dragon de la tetera small.jpg',
          imgGrande: '/assets/img-grande/el dragon de la tetera small.jpg',
          sinopsis: 'Explora la historia de Din, un universitario de familia humilde, con muchos sueños pero pocos medios, y Long, un dragón cínico pero todopoderoso capaz de conceder deseos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Ejercito De Los Ladrones',
          imgMini: '/assets/img-mini/el ejercito de los ladrones small.jpg',
          imgGrande: '/assets/img-grande/el ejercito de los ladrones small.jpg',
          sinopsis: 'Una misteriosa mujer recluta a un empleado de banco y experto en cajas fuertes para que ayude a su equipo a robar tres legendarias cajas fuertes de Europa.',
          genero: [accion, 'zombies'],
          tipo: pelicula
     },

     {
          nombre: 'El Ejercito De Los Muertos',
          imgMini: '/assets/img-mini/el ejercito de los muertos SMALL.jpg',
          imgGrande: '/assets/img-grande/el ejercito de los muertos SMALL.jpg',
          sinopsis: 'Tras un brote zombi en Las Vegas, un grupo de mercenarios se arriesga a adentrarse en la zona de cuarentena para dar el golpe de sus vidas.',
          genero: [accion, 'zombies'],
          tipo: pelicula
     },

     {
          nombre: 'El Estafador De Tinder',
          imgMini: '/assets/img-mini/el estafador de tinder small.jpg',
          imgGrande: '/assets/img-grande/el estafador de tinder small.jpg',
          sinopsis: 'Un estafador atrae a mujeres usando la popular aplicación de citas y las engaña con millones de dólares.',
          genero: ['documental'],
          tipo: pelicula
     },

     {
          nombre: 'El Exorcismo De Dios',
          imgMini: '/assets/img-mini/el exorcismo de dios small.jpg',
          imgGrande: '/assets/img-grande/el exorcismo de dios small.jpg',
          sinopsis: 'Un sacerdote estadounidense que trabaja en México es poseído durante un exorcismo y termina cometiendo un acto terrible.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'El Gato Con Botas',
          imgMini: '/assets/img-mini/el gato con botas small.jpg',
          imgGrande: '/assets/img-grande/el gato con botas small.jpg',
          sinopsis: 'Un gato forajido, su amigo de la infancia y una seductora gatita ladrona, parten en busca de los huevos de oro de una legendaria gansa para limpiar su nombre, restaurar su honor perdido y recuperar la confianza de su madre y del pueblo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Grinch',
          imgMini: '/assets/img-mini/El Grinch small.jpg',
          imgGrande: '/assets/img-grande/El Grinch small.jpg',
          sinopsis: 'Cada fin de año la gente perturba su pacífica soledad con celebraciones cada vez más desmesuradas, luminosas y ruidosas. Cuando los lugareños de Villa Quién anuncian que ese fin de año van a preparar una Navidad el triple de grande, el Grinch se da cuenta de que solo hay un modo de recuperar algo de paz y silencio: robar la Navidad.',
          genero: [animacion, infantil, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'El Guardaespalda',
          imgMini: '/assets/img-mini/el guardaespalda small.jpg',
          imgGrande: '/assets/img-grande/el guardaespalda small.jpg',
          sinopsis: 'Un exagente del servicio secreto acepta el trabajo de guardaespaldas de una cantante de R&B, cuyo estilo de vida es muy diferente al de un presidente.',
          genero: [accion, drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'El Hombre De Toronto',
          imgMini: '/assets/img-mini/el hombre de toronto small.jpg',
          imgGrande: '/assets/img-grande/el hombre de toronto small.jpg',
          sinopsis: 'Un caso de identidad equivocada obliga a un empresario inepto a colaborar con el asesino conocido como el «Hombre de Toronto» para sobrevivir.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'El Hombre Del Norte',
          imgMini: '/assets/img-mini/el hombre del norte small.jpg',
          imgGrande: '/assets/img-grande/el hombre del norte small.jpg',
          sinopsis: 'Ambientada En Islandia, en pleno siglo X, un príncipe nórdico busca vengar a toda costa la muerte de su padre.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'El Hombre Invisible',
          imgMini: '/assets/img-mini/el hombre invisible small.jpg',
          imgGrande: '/assets/img-grande/el hombre invisible small.jpg',
          sinopsis: 'El ex de Cecilia, que la maltrataba, se suicida dejándole su fortuna. O eso le cuentan. Pronto Cecilia sabe que la acecha alguien a quien no puede ver.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Hoyo',
          imgMini: '/assets/img-mini/el hoyo small.jpg',
          imgGrande: '/assets/img-grande/el hoyo small.jpg',
          sinopsis: 'En un mundo distópico, hombres y mujeres son almacenados en una prisión vertical en la que ven descender la comida del día, o lo que queda de ella, dejando a los niveles inferiores hambrientos y radicalizados.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Jinete Del Dragon',
          imgMini: '/assets/img-mini/el jinete del dragon small.jpg',
          imgGrande: '/assets/img-grande/el jinete del dragon small.jpg',
          sinopsis: 'El jinete del dragón es una película familiar sobre un trío de antihéroes conformado por un dragón, un ladrón y un duende que tienen una épica aventura para encontrar el Rim of Heaven, el cielo de los dragones. Para ello, tendrán que cruzar Escocia en su camino al Himalaya.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Juego Mas Peligroso',
          imgMini: '/assets/img-mini/el juego mas peligroso small.jpg',
          imgGrande: '/assets/img-grande/el juego mas peligroso small.jpg',
          sinopsis: 'Empujado por la desesperación de asegurar un futuro para su mujer embarazada antes de que una enfermedad terminal se lo impida para siempre, Dodge Maynard acepta una oferta para participar en un juego mortal donde pronto descubre que no es el cazador, sino la presa.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Libro De La Selva',
          imgMini: '/assets/img-mini/el libro de la selva small.jpg',
          imgGrande: '/assets/img-grande/el libro de la selva small.jpg',
          sinopsis: 'Tras ser amenazado por el tigre Shere Khan, Mowgli, un niño criado entre lobos, emprende un viaje de autodescubrimiento con la ayuda de la pantera Bagheera y un oso de espíritu libre llamado Baloo.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'El Niño 1',
          imgMini: '/assets/img-mini/el niño 1 small.jpg',
          imgGrande: '/assets/img-grande/el niño 1 small.jpg',
          sinopsis: 'Una niñera se sorprende cuando presentarse ante su nueva familia el niño al que va a cuidar resulta ser un muñeco con una estricta lista de necesidades. Las ignorará a su propio riesgo.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Niño 2',
          imgMini: '/assets/img-mini/el niño 2 small.jpg',
          imgGrande: '/assets/img-grande/el niño 2 small.jpg',
          sinopsis: 'Una familia se muda a la mansión Heelshire y su hijo entabla amistad con un muñeco llamado Brahms.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Origen',
          imgMini: '/assets/img-mini/El origen small.jpg',
          imgGrande: '/assets/img-grande/El origen small.jpg',
          sinopsis: 'A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea de implantar una idea en la mente de un jefe de una gran empresa.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'El Paramo',
          imgMini: '/assets/img-mini/el paramo small.jpg',
          imgGrande: '/assets/img-grande/el paramo small.jpg',
          sinopsis: 'La vida tranquila de una familia aislada del resto de la sociedad es perturbada por una criatura aterradora que pone a prueba los lazos que los unen.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Peso Del Talento ',
          imgMini: '/assets/img-mini/el peso del talento small .jpg',
          imgGrande: '/assets/img-grande/el peso del talento small .jpg',
          sinopsis: 'Un actor sin dinero acepta presentarse en la fiesta de cumpleaños de un fanático multimillonario, un capo de la droga que recién secuestró a la hija de un candidato a la presidencia. La CIA lo recluta para obtener información.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'El Poder Del Perro',
          imgMini: '/assets/img-mini/el poder del perro small.jpg',
          imgGrande: '/assets/img-grande/el poder del perro small.jpg',
          sinopsis: 'El carismático ranchero Phil Burbank inspira temor y asombro en quienes lo rodean. Cuando su hermano trae a casa una nueva esposa y su hijo, Phil los atormenta hasta que se ve expuesto a la posibilidad del amor.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El Portero',
          imgMini: '/assets/img-mini/el portero small.jpg',
          imgGrande: '/assets/img-grande/el portero small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Precio Del Mañana',
          imgMini: '/assets/img-mini/el precio del mañana small.jpg',
          imgGrande: '/assets/img-grande/el precio del mañana small.jpg',
          sinopsis: 'En un futuro en el que la gente deja de envejecer a los 25 años, pero está diseñada para vivir solo un año más, tener los medios para comprar su salida de la situación es una oportunidad para la juventud inmortal.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'El Protector',
          imgMini: '/assets/img-mini/el protector lian neeson small.jpg',
          imgGrande: '/assets/img-grande/el protector lian neeson small.jpg',
          sinopsis: 'Jim, un antiguo marine reconvertido en ranchero en la frontera de Arizona, trata de proteger a un niño al que persiguen los violentos integrantes de un cartel de narcotraficantes mexicanos.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Sastre De La Mafia',
          imgMini: '/assets/img-mini/el sastre de la mafia small.jpg',
          imgGrande: '/assets/img-grande/el sastre de la mafia small.jpg',
          sinopsis: 'Un sastre experimentado debe burlar a un peligroso grupo de mafiosos para sobrevivir a una noche fatídica.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'El Secuestro',
          imgMini: '/assets/img-mini/el secuestro small.jpg',
          imgGrande: '/assets/img-grande/el secuestro small.jpg',
          sinopsis: 'Zara y Brian tienen una vida perfecta hasta que un misterioso extraño del pasado de ella secuestra a su hija.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Silbon',
          imgMini: '/assets/img-mini/el silbon small.jpg',
          imgGrande: '/assets/img-grande/el silbon small.jpg',
          sinopsis: 'Ángel fue marcado al nacer por una maldición. La muerte de su madre, en medio de rituales de brujería, lo llevaron a convertirse en un espectro justiciero que comete actos sangrientos.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'El Stand De Los Besos 1',
          imgMini: '/assets/img-mini/el stand de los besos 1 small.jpg',
          imgGrande: '/assets/img-grande/el stand de los besos 1 small.jpg',
          sinopsis: 'Una estudiante de instituto se ve forzada a hacer frente a su amor secreto en el stand de los besos.',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'El Stand De Los Besos 2',
          imgMini: '/assets/img-mini/el stand de los besos 2 small.jpg',
          imgGrande: '/assets/img-grande/el stand de los besos 2 small.jpg',
          sinopsis: 'Elle Evans acaba de disfrutar del verano más romántico de su vida en compañía de su novio, Noah Flynn, un ex chico malo reformado. Pero, con el comienzo del curso, Noah se va a Harvard y Elle regresa al instituto para su último año.',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'El Stand De Los Besos 3',
          imgMini: '/assets/img-mini/el stand de los besos 3 small.jpg',
          imgGrande: '/assets/img-grande/el stand de los besos 3 small.jpg',
          sinopsis: 'Es el verano previo a la universidad, y Elle tiene un secreto: ha sido aceptada tanto en Harvard, adonde irá su adorable novio Noah, como en Berkeley, destino de su mejor amigo Lee. ¿Qué camino elegirá Elle?',
          genero: [romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'El Telefono',
          imgMini: '/assets/img-mini/el telefono small.jpg',
          imgGrande: '/assets/img-grande/el telefono small.jpg',
          sinopsis: 'Dos personas viven en tiempos diferentes. Seo-Yeon vive en el presente y Young-Sook vive en el pasado. Una llamada telefónica conecta a los dos y sus vidas cambian irrevocablemente.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'El Tiempo Del Armagedon',
          imgMini: '/assets/img-mini/El tiempo del armagedon small.jpg',
          imgGrande: '/assets/img-grande/El tiempo del armagedon small.jpg',
          sinopsis: 'Una historia sobre la mayoría de edad en Queens en la década de 1980.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'El Ultimo Duelo',
          imgMini: '/assets/img-mini/el ultimo duelo small.jpg',
          imgGrande: '/assets/img-grande/el ultimo duelo small.jpg',
          sinopsis: 'El rey Carlos VI declara que el caballero Jean de Carrouges debe zanjar la disputa con su escudero retándole a un duelo.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'El Ultimo Mercenario',
          imgMini: '/assets/img-mini/el ultimo mercenario small.jpg',
          imgGrande: '/assets/img-grande/el ultimo mercenario small.jpg',
          sinopsis: 'Un exagente del servicio secreto que debe regresar a Francia cuando su hijo es acusado por el Gobierno de tráfico de armas y trata de personas. Y todo se debe al error de un burócrata excesivamente suspicaz y a una operación de la mafia.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'El Valet',
          imgMini: '/assets/img-mini/el valet small.jpg',
          imgGrande: '/assets/img-grande/el valet small.jpg',
          sinopsis: 'Una estrella de cine contrata a un aparcacoches en un restaurante de Beverly Hills para que se haga pasar por su amante y cubra su relación con un hombre casado.',
          genero: [comedia, romance],
          tipo: pelicula
     },

     {
          nombre: 'El Vinculo',
          imgMini: '/assets/img-mini/el vinculo small.jpg',
          imgGrande: '/assets/img-grande/el vinculo small.jpg',
          sinopsis: 'Mientras visita a la madre de su prometido en el sur de Italia, una mujer debe luchar contra la misteriosa y malévola maldición que intenta reclamar a su hija.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Emoji',
          imgMini: '/assets/img-mini/emoji small.jpg',
          imgGrande: '/assets/img-grande/emoji small.jpg',
          sinopsis: 'Gene, un emoji con múltiples expresiones, emprende un viaje para convertirse en un emoji normal.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'En Guerra Con Mi Abuelo',
          imgMini: '/assets/img-mini/en guerra con mi abuelo small.jpg',
          imgGrande: '/assets/img-grande/en guerra con mi abuelo small.jpg',
          sinopsis: 'Peter decide declarar la guerra a su abuelo, con el que se ve obligado a compartir habitación, para recuperarla para él solo.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Encanto',
          imgMini: '/assets/img-mini/encanto small.jpg',
          imgGrande: '/assets/img-grande/encanto small.jpg',
          sinopsis: 'En Colombia, una joven lidia con la frustración de ser la única miembro de la familia que no tiene poderes mágicos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Encuentro',
          imgMini: '/assets/img-mini/encuentro small.jpg',
          imgGrande: '/assets/img-grande/encuentro small.jpg',
          sinopsis: 'Dos hermanos se embarcan en un viaje con su padre, que intenta protegerlos de una amenaza alienígena.',
          genero: [drama, ciencia, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Enola Holmes',
          imgMini: '/assets/img-mini/enola holmes SMALL.jpg',
          imgGrande: '/assets/img-grande/enola holmes SMALL.jpg',
          sinopsis: 'Inglaterra, 1884. La mañana de su 16º cumpleaños, Enola Holmes se despierta y descubre que su madre ha desaparecido. Le ha dejado unos regalos de lo más curiosos, pero ninguna pista sobre el paradero ni la causa de su marcha.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Enola Holmes 2',
          imgMini: '/assets/img-mini/Enola Holmes 2 small.jpg',
          imgGrande: '/assets/img-grande/Enola Holmes 2 small.jpg',
          sinopsis: 'Enola acepta su primer caso oficial. Para resolver el misterio de una chica desaparecida va a necesitar la ayuda de sus amigos... y de su hermano Sherlock.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Enrredados',
          imgMini: '/assets/img-mini/enrredados small.jpg',
          imgGrande: '/assets/img-grande/enrredados small.jpg',
          sinopsis: 'La Rapunzel de pelo largo y mágico ha pasado toda su vida en una torre, pero ahora que un ladrón fugitivo se ha topado con ella, está a punto de descubrir el mundo por primera vez, y quién es realmente.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Entre La Vida Y La Muerte',
          imgMini: '/assets/img-mini/entre la vida y la muerte small.jpg',
          imgGrande: '/assets/img-grande/entre la vida y la muerte small.jpg',
          sinopsis: 'Tras sobrevivir a un trágico accidente de coche en el que su novio perdió la vida, Tessa cree que él está intentando comunicarse desde el más allá.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Escape De Pretoria',
          imgMini: '/assets/img-mini/escape de pretoria small.jpg',
          imgGrande: '/assets/img-grande/escape de pretoria small.jpg',
          sinopsis: 'Dos jóvenes blancos que luchan contra el apartheid en Johannesburgo, son detenidos y encarcelados en la prisión de la isla Robben, debido a su problemático e incómodo activismo.',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Escuadron 6 ',
          imgMini: '/assets/img-mini/escuadron 6  small.jpg',
          imgGrande: '/assets/img-grande/escuadron 6  small.jpg',
          sinopsis: 'Seis multimillonarios fingen sus propias muertes y forman un escuadrón de vigilantes de élite con el fin de acabar con criminales notorios.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Escuadron Suicida 1',
          imgMini: '/assets/img-mini/escuadron suicida 1 small.jpg',
          imgGrande: '/assets/img-grande/escuadron suicida 1 small.jpg',
          sinopsis: 'Una agencia gubernamental secreta recluta a algunos de los más peligrosos supervillanos encarcelados para formar un grupo de trabajo defensivo. Su primera misión: salvar al mundo del apocalipsis.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Escuadron Suicida 2',
          imgMini: '/assets/img-mini/escuadron suicida 2 small.jpg',
          imgGrande: '/assets/img-grande/escuadron suicida 2 small.jpg',
          sinopsis: 'Harley Quinn, Bloodsport, Peacemaker y sus compañeros de la prisión de Belle Reve se unen al grupo de trabajo supersecreto y supersiniestro X en la lejana isla de Corto Maltese, que está llena de enemigos.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Escuela Para Fracasados',
          imgMini: '/assets/img-mini/escuela para fracasados small.jpg',
          imgGrande: '/assets/img-grande/escuela para fracasados small.jpg',
          sinopsis: 'Un grupo de alborotadores se ven obligados a asistir a clases nocturnas con la esperanza de obtener el grado de secundaria como adultos.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Espias Con Disfras',
          imgMini: '/assets/img-mini/espias con disfras small.jpg',
          imgGrande: '/assets/img-grande/espias con disfras small.jpg',
          sinopsis: 'Cuando el mejor espía del mundo se convierte en una paloma, debe confiar en su oficial técnico nerd para salvar al mundo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Espiritus Oscuros',
          imgMini: '/assets/img-mini/espiritus oscuros small.jpg',
          imgGrande: '/assets/img-grande/espiritus oscuros small.jpg',
          sinopsis: 'Una profesora y su hermano, el sheriff, se ven envueltos con un estudiante que guarda un secreto peligroso, con temibles consecuencias.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Estafadoras de Wall Street',
          imgMini: '/assets/img-mini/estafadoras small.jpg',
          imgGrande: '/assets/img-grande/estafadoras small.jpg',
          sinopsis: 'Basada en un artículo en New York Magazine, sigue a un grupo de exestripers que forma equipo para dar la vuelta a la tortilla en sus relaciones con clientes de Wall Street.',
          genero: [drama, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Estamos Vivos',
          imgMini: '/assets/img-mini/ESTAMOS VIVOS small.jpg',
          imgGrande: '/assets/img-grande/ESTAMOS VIVOS small.jpg',
          sinopsis: 'Una ciudad es infectada por un virus misterioso, haciendo que todo se salga de control y siendo puesta en cuarentena, dejando a dos sobrevivientes completamente aislados y luchando por vivir en una situación crítica.',
          genero: [terror, 'zombies'],
          tipo: pelicula
     },

     {
          nombre: 'Este Cuerpo Me Sienta De Muerte',
          imgMini: '/assets/img-mini/este cuerpo me sienta de muerte small.jpg',
          imgGrande: '/assets/img-grande/este cuerpo me sienta de muerte small.jpg',
          sinopsis: 'Después de intercambiar cuerpos con un asesino en serie trastornado, una joven en la escuela secundaria descubre que tiene menos de 24 horas antes de que el cambio se vuelva permanente.',
          genero: [comedia, terror],
          tipo: pelicula
     },

     {
          nombre: 'Eternals',
          imgMini: '/assets/img-mini/eternals small.jpg',
          imgGrande: '/assets/img-grande/eternals small.jpg',
          sinopsis: 'La saga de los eternos, una raza de seres inmortales que vivieron en la Tierra y moldearon su historia y sus civilizaciones.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Fauces De La Noche',
          imgMini: '/assets/img-mini/fauces de la noche small.jpg',
          imgGrande: '/assets/img-grande/fauces de la noche small.jpg',
          sinopsis: 'Un joven chófer recoge a dos mujeres misteriosas que van a pasar una noche de fiesta por diversos rincones de Los Ángeles. Pero, cuando descubre la verdadera naturaleza de sus pasajeras, no le queda más opción que luchar para seguir con vida.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Ferdinand',
          imgMini: '/assets/img-mini/ferdinand small.jpg',
          imgGrande: '/assets/img-grande/ferdinand small.jpg',
          sinopsis: 'Ferdinand, un toro con un corazón gigante, es tomado por error por una bestia peligrosa. Es capturado y separado de su hogar. Empeñado en regresar con su familia, reúne a un equipo de inadaptados para embarcarse en una aventura.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Finch',
          imgMini: '/assets/img-mini/finch small.jpg',
          imgGrande: '/assets/img-grande/finch small.jpg',
          sinopsis: 'En una Tierra postapocalíptica, un robot, construido para proteger la vida del querido perro de su creador, aprende sobre la vida, el amor, la amistad y lo que significa ser humano.',
          genero: ['drama ', ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Focas Al Ataque',
          imgMini: '/assets/img-mini/focas al ataque small.jpg',
          imgGrande: '/assets/img-grande/focas al ataque small.jpg',
          sinopsis: 'Después de que su mejor amigo muere en un ataque de tiburón, Quinn, una foca adorable y tenaz, reúne un Equipo Seal para luchar contra una banda de tiburones que se apodera del vecindario.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Ford Vs Ferrari',
          imgMini: '/assets/img-mini/ford vs ferrari small.jpg',
          imgGrande: '/assets/img-grande/ford vs ferrari small.jpg',
          sinopsis: 'La verdadera historia de la batalla entre Ford y Ferrari para ganar Le Mans en 1966.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Free Guy',
          imgMini: '/assets/img-mini/free guy small.jpg',
          imgGrande: '/assets/img-grande/free guy small.jpg',
          sinopsis: 'Un empleado de banco descubre que en realidad es un personaje dentro de un videojuego.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Fresh',
          imgMini: '/assets/img-mini/FRESH small.jpg',
          imgGrande: '/assets/img-grande/FRESH small.jpg',
          sinopsis: 'Los horrores de las citas modernas vistos a través de la desafiante batalla de una joven para sobrevivir a los inusuales apetitos de su nuevo novio.',
          genero: [terror, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Frozen 1',
          imgMini: '/assets/img-mini/frozen 1 small.jpg',
          imgGrande: '/assets/img-grande/frozen 1 small.jpg',
          sinopsis: 'Cuando la recién coronada reina Elsa usa accidentalmente su poder de convertir las cosas en hielo, su hermana Anna une fuerzas con un hombre de la montaña, su juguetón reno y un muñeco de nieve, para cambiar las condiciones climáticas.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Frozen 2',
          imgMini: '/assets/img-mini/frozen 2 small.jpg',
          imgGrande: '/assets/img-grande/frozen 2 small.jpg',
          sinopsis: 'Anna, Elsa, Kristoff, Olaf y Sven dejan Arendelle para viajar a un antiguo bosque otoñal de una tierra encantada. Se proponen encontrar el origen de los poderes de Elsa para salvar su reino.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Fuera De Control',
          imgMini: '/assets/img-mini/fuera de control small.jpg',
          imgGrande: '/assets/img-grande/fuera de control small.jpg',
          sinopsis: 'Un thriller psicológico que lleva al límite de forma aterradora algo que todos hemos experimentado: la cólera al volante.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Fuerza De La Naturaleza',
          imgMini: '/assets/img-mini/fuerza de la naturaleza small.jpg',
          imgGrande: '/assets/img-grande/fuerza de la naturaleza small.jpg',
          sinopsis: 'Una banda de ladrones planea un atraco durante un huracán y se encuentra con problemas cuando un policía intenta obligar a todos los habitantes del edificio a evacuar.',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Fuerza Trueno',
          imgMini: '/assets/img-mini/fuerza trueno small.jpg',
          imgGrande: '/assets/img-grande/fuerza trueno small.jpg',
          sinopsis: 'En un mundo en el que los supervillanos son comunes, dos amigas que no se ven desde la infancia se reencuentran y crean un tratamiento para obtener poderes y proteger su ciudad.',
          genero: [comedia, accion],
          tipo: pelicula
     },

     {
          nombre: 'Fullmetal Alchemist 1',
          imgMini: '/assets/img-mini/fullmetal alchemist 1 small.jpg',
          imgGrande: '/assets/img-grande/fullmetal alchemist 1 small.jpg',
          sinopsis: 'Dos hermanos alquimistas buscan la Piedra Filosofal después de que su primer intento de revivir a su madre saliera terriblemente mal.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Fullmetal Alchemist 2',
          imgMini: '/assets/img-mini/fullmetal alchemist 2 small.jpg',
          imgGrande: '/assets/img-grande/fullmetal alchemist 2 small.jpg',
          sinopsis: 'Cuando una figura misteriosa comienza a apuntar a los alquimistas estatales por sus pecados contra Dios, el alquimista Edward Elric y su hermano Alphonse se encuentran en su punto más vulnerable.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Fullmetal Alchemist 3 La Alquimia Final',
          imgMini: '/assets/img-mini/FULLMETAL ALCHEMIST 3 LA ALQUIMIA FINAL small.jpg',
          imgGrande: '/assets/img-grande/FULLMETAL ALCHEMIST 3 LA ALQUIMIA FINAL small.jpg',
          sinopsis: 'El largo y sinuoso viaje de los hermanos Elric llega a su fin en este final épico, donde deben enfrentarse a una amenaza nacional sobrenatural.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Furia',
          imgMini: '/assets/img-mini/furia small.jpg',
          imgGrande: '/assets/img-grande/furia small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Garra',
          imgMini: '/assets/img-mini/Garra small.jpg',
          imgGrande: '/assets/img-grande/Garra small.jpg',
          sinopsis: 'Un cazatalentos de baloncesto fracasado descubre a un fenomenal jugador de baloncesto callejero mientras está en España y ve la oportunidad de volver a la NBA.',
          genero: [drama, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Geotormenta',
          imgMini: '/assets/img-mini/Geotormenta small.jpg',
          imgGrande: '/assets/img-grande/Geotormenta small.jpg',
          sinopsis: 'Cuando la red de satélites diseñada para controlar el clima comienza a atacar la Tierra, empieza una carrera contrarreloj para que su creador descubra la verdadera amenaza antes de que una "geostorm" mundial acabe con todo y con todos.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Godzilla 1',
          imgMini: '/assets/img-mini/godzilla 1 small.jpg',
          imgGrande: '/assets/img-grande/godzilla 1 small.jpg',
          sinopsis: 'El mundo se ve acosado por la aparición de criaturas monstruosas, pero una de ellas puede ser la única que salve a la humanidad.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Godzilla 2 ',
          imgMini: '/assets/img-mini/godzilla 2 small.jpg',
          imgGrande: '/assets/img-grande/godzilla 2 small.jpg',
          sinopsis: 'La agencia crypto-zoológica Monarch se enfrenta a una batería de monstruos de increíble tamaño, incluido el poderoso Godzilla, que se enfrenta con Mothra, Rodan, y su última némesis: el rey Ghidorah de tres cabezas.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Godzilla Vs Kong',
          imgMini: '/assets/img-mini/Godzilla vs Kong small.jpg',
          imgGrande: '/assets/img-grande/Godzilla vs Kong small.jpg',
          sinopsis: 'El gigantesco Kong se encuentra con el imparable Godzilla. El mundo mira para ver cuál se convierte en el rey de todos los monstruos.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Golpe De Suerte',
          imgMini: '/assets/img-mini/golpe de suerte small.jpg',
          imgGrande: '/assets/img-grande/golpe de suerte small.jpg',
          sinopsis: 'El propietario de un restaurante que lucha por cuidar a su madre enferma, encuentra una bolsa de dinero en efectivo en un armario de sauna, lo cual puede ocasionarle problemas.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Grandes Espias',
          imgMini: '/assets/img-mini/grandes espias small.jpg',
          imgGrande: '/assets/img-grande/grandes espias small.jpg',
          sinopsis: 'Un agente de la CIA tiene la misión de espiar de incógnito a una familia, y acaba encontrándose a merced de una brillante niña de 9 años.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Grandes Heroes',
          imgMini: '/assets/img-mini/grandes heroes small.jpg',
          imgGrande: '/assets/img-grande/grandes heroes small.jpg',
          sinopsis: 'Un vínculo especial se desarrolla entre el robot inflable de gran tamaño Baymax y el prodigio Hiro Hamada, que se unen a un grupo de amigos para formar una banda de héroes de alta tecnología.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Greendland El Ultimo Refugio',
          imgMini: '/assets/img-mini/greendland el ultimo refugio small.jpg',
          imgGrande: '/assets/img-grande/greendland el ultimo refugio small.jpg',
          sinopsis: 'Una familia intenta sobrevivir tras un desastre natural de proporciones inimaginables.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Guardianes De La Galaxia Vol 1',
          imgMini: '/assets/img-mini/guardianes de la galaxia vol 1 small.jpg',
          imgGrande: '/assets/img-grande/guardianes de la galaxia vol 1 small.jpg',
          sinopsis: 'Un grupo de criminales intergalácticos debe unirse para detener a un guerrero fanático con planes para eliminar el universo.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Guardianes De La Galaxia Vol 2',
          imgMini: '/assets/img-mini/Guardianes de la Galaxia vol 2 small.jpg',
          imgGrande: '/assets/img-grande/Guardianes de la Galaxia vol 2 small.jpg',
          sinopsis: 'Los Guardianes deben luchar para mantener su recién encontrada familia unida cuando desentrañan el misterio del verdadero parentesco de Peter Quill.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Guerra Mundial Z',
          imgMini: '/assets/img-mini/guerra mundial z small.jpg',
          imgGrande: '/assets/img-grande/guerra mundial z small.jpg',
          sinopsis: 'Gerry Lane, antiguo empleado de las Naciones Unidas, recorre el mundo en una carrera contrarreloj para detener una pandemia zombi que está derribando ejércitos y gobiernos y amenaza con destruir a la humanidad.',
          genero: [accion, 'zombies'],
          tipo: pelicula
     },

     {
          nombre: 'Halloween Kills',
          imgMini: '/assets/img-mini/halloween kills small.jpg',
          imgGrande: '/assets/img-grande/halloween kills small.jpg',
          sinopsis: 'La saga de Michael Myers y Laurie Strode continua en este excitante capítulo de la franquicia Halloween.',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y la piedra filosofal',
          imgMini: '/assets/img-mini/harry 1 small.jpg',
          imgGrande: '/assets/img-grande/harry 1 small.jpg',
          sinopsis: 'Un niño huérfano se inscribe en una escuela de magia y hechicería, donde aprende la verdad sobre sí mismo, su familia y el terrible mal que acecha al mundo mágico.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y la cámara secreta',
          imgMini: '/assets/img-mini/harry 2 small.jpg',
          imgGrande: '/assets/img-grande/harry 2 small.jpg',
          sinopsis: 'Una antigua profecía parece hacerse realidad cuando una misteriosa presencia comienza a acechar los pasillos de la escuela de magia dejando a sus víctimas paralizadas.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y el prisionero de Azkaban',
          imgMini: '/assets/img-mini/harry 3 small.jpg',
          imgGrande: '/assets/img-grande/harry 3 small.jpg',
          sinopsis: 'Harry Potter, Ron y Hermione regresan al Colegio Hogwarts de Magia y Hechicería para cursar su tercer año de estudios, donde se adentran en el misterio que rodea a un preso fugado que supone una peligrosa amenaza para el joven mago.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y el cáliz de fuego',
          imgMini: '/assets/img-mini/harry 4 small.jpg',
          imgGrande: '/assets/img-grande/harry 4 small.jpg',
          sinopsis: 'Harry Potter se encuentra compitiendo en un peligroso torneo entre escuelas de magia rivales, pero está distraído por pesadillas recurrentes.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y la Orden del Fénix',
          imgMini: '/assets/img-mini/harry 5 small.jpg',
          imgGrande: '/assets/img-grande/harry 5 small.jpg',
          sinopsis: 'Harry y Dumbledore intentan alertar a la comunidad mágica del retorno de Voldemort, para burla general, y se convierten en el foco de una campaña de descrédito a manos de las autoridades mágicas, mientras una burócrata autoritaria toma las riendas de Hogwarts.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y el misterio del príncipe',
          imgMini: '/assets/img-mini/harry 6 small.jpg',
          imgGrande: '/assets/img-grande/harry 6 small.jpg',
          sinopsis: 'Cuando Harry Potter empieza su sexto año en Hogwarts, descubre un viejo libro marcado como propiedad del príncipe mestizo y comienza a aprender más sobre el oscuro pasado de Lord Voldemort.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y las Reliquias de la Muerte: Parte 1',
          imgMini: '/assets/img-mini/harry 7 small.jpg',
          imgGrande: '/assets/img-grande/harry 7 small.jpg',
          sinopsis: 'Harry se embarca en una carrera contrarreloj para destruir los horrocruxes y descubre la existencia de los tres objetos más poderosos del mundo mágico: las Reliquias de la Muerte.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Harry Potter y las Reliquias de la Muerte: Parte 2',
          imgMini: '/assets/img-mini/harry 8 small.jpg',
          imgGrande: '/assets/img-grande/harry 8 small.jpg',
          sinopsis: 'Harry, Ron y Hermione buscan los restantes horrocruxes de Voldemort en su esfuerzo por destruir al Señor Oscuro, mientras la batalla final continúa en Hogwarts.',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Hay Alguien En Tu Casa',
          imgMini: '/assets/img-mini/hay alguien en tu casa.small.jpg',
          imgGrande: '/assets/img-grande/hay alguien en tu casa.small.jpg',
          sinopsis: 'Makani se va de Hawái para vivir con su abuela en un tranquilo pueblo de Nebraska y terminar el instituto. Pero el comienzo de la cuenta atrás para la graduación marca el momento en que un asesino empieza a perseguir a los alumnos.',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Hermosa Venganza',
          imgMini: '/assets/img-mini/hermosa venganza small.jpg',
          imgGrande: '/assets/img-grande/hermosa venganza small.jpg',
          sinopsis: 'Perseguida por un acontecimiento traumático en su pasado, Cassie comienza a vengar lo ocurrido de manera muy particular, haciéndoselo pagar a aquellos hombres que se crucen en su camino, con la intención de enmendar los errores del pasado.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Heroes De Guerra',
          imgMini: '/assets/img-mini/heroes de guerra small.jpg',
          imgGrande: '/assets/img-grande/heroes de guerra small.jpg',
          sinopsis: 'Tras el bombardeo de la OTAN sobre Yugoslavia en 1999, el ejército yugoslavo se retira de la región de Kosovo, dejando al pueblo serbio a merced de los terroristas albaneses. Un grupo de soldados debe tomar el aeropuerto de Slatina.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Hotel Transilvania 3',
          imgMini: '/assets/img-mini/hotel transilvania 3 small.jpg',
          imgGrande: '/assets/img-grande/hotel transilvania 3 small.jpg',
          sinopsis: 'El conde Drácula y sus acompañantes participan en un crucero para monstruos amantes del mar, sin saber que su barco está siendo requisado por la familia Van Helsing, que odia a los monstruos.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Hotel Transilvania 4',
          imgMini: '/assets/img-mini/hotel transilvania 4 small.jpg',
          imgGrande: '/assets/img-grande/hotel transilvania 4 small.jpg',
          sinopsis: 'El nuevo y misterioso invento de Van Helsing transforma a Drac y sus amigos en humanos, y a Johnny en un monstruo. Con sus nuevos cuerpos, Drac y la manada deben encontrar la manera de revertirlo antes de que se vuelva permanente.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Hoy Si',
          imgMini: '/assets/img-mini/HOY SI small.jpg',
          imgGrande: '/assets/img-grande/HOY SI small.jpg',
          sinopsis: 'Allison y Carlos tienen la sensación de estar diciéndoles siempre que no a sus hijos y a sus compañeros de trabajo, así que deciden regalarles a sus tres hijos un «Día del Sí»: durante 24 horas, los niños pondrán las reglas.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Ida Red',
          imgMini: '/assets/img-mini/ida red small.jpg',
          imgGrande: '/assets/img-grande/ida red small.jpg',
          sinopsis: 'Es posible que Ida Walker no sobreviva a su enfermedad terminal mientras esté encarcelada por robo a mano armada. Recurre a su hijo, Wyatt, en busca de un último trabajo y la oportunidad de recuperar su libertad.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Igor Grom contra el Doctor Peste',
          imgMini: '/assets/img-mini/igor grom small.jpg',
          imgGrande: '/assets/img-grande/igor grom small.jpg',
          sinopsis: 'Cuando los asesinatos de un vigilante enmascarado provocan el caos en una ciudad, un detective rebelde y su compañero novato son los únicos que pueden detenerlo.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Impacto',
          imgMini: '/assets/img-mini/impacto small.jpg',
          imgGrande: '/assets/img-grande/impacto small.jpg',
          sinopsis: 'Cuando su primer amor es asesinado, una chica emprende una misión de venganza para encontrar al asesino mientras la policía la persigue como su principal sospechoso.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Imperdonable',
          imgMini: '/assets/img-mini/imperdonable small.jpg',
          imgGrande: '/assets/img-grande/imperdonable small.jpg',
          sinopsis: 'Una mujer sale de la cárcel tras cumplir una condena por un delito violento y regresa a una sociedad que se niega a perdonarle su pasado.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Incompatibles 2',
          imgMini: '/assets/img-mini/incompatibles 2 small.jpg',
          imgGrande: '/assets/img-grande/incompatibles 2 small.jpg',
          sinopsis: 'Diez años después de su último encuentro, dos policías muy distintos deben investigar juntos un asesinato en una ciudad francesa y destapar una conspiración.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Infinito',
          imgMini: '/assets/img-mini/infinito small.jpg',
          imgGrande: '/assets/img-grande/infinito small.jpg',
          sinopsis: 'Un hombre descubre que sus alucinaciones son en realidad visiones de vidas pasadas. De esta forma, conoce a un grupo de personas que son como él, seres casi inmortales conocidos como «El Infinito» que se han ido reencarnando a lo largo de los siglos.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Instinto Peligroso',
          imgMini: '/assets/img-mini/instinto peligroso small.jpg',
          imgGrande: '/assets/img-grande/instinto peligroso small.jpg',
          sinopsis: 'Un sociópata reformado viaja a una isla remota para investigar el misterio detrás de la desaparición de su hermano, pero pronto termina enfrentándose con más de lo que esperaba.',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Instintos Maternos',
          imgMini: '/assets/img-mini/instintos maternos small.jpg',
          imgGrande: '/assets/img-grande/instintos maternos small.jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Interceptor',
          imgMini: '/assets/img-mini/interceptor small.jpg',
          imgGrande: '/assets/img-grande/interceptor small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Intrusion',
          imgMini: '/assets/img-mini/intrusion small.jpg',
          imgGrande: '/assets/img-grande/intrusion small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Ip Man 4',
          imgMini: '/assets/img-mini/ip man 4 small.jpg',
          imgGrande: '/assets/img-grande/ip man 4 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Ip Man Kung Fu Master',
          imgMini: '/assets/img-mini/ip man kung fu master small.jpg',
          imgGrande: '/assets/img-grande/ip man kung fu master small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Ip Man Maestro Z',
          imgMini: '/assets/img-mini/ip man maestro z small.jpg',
          imgGrande: '/assets/img-grande/ip man maestro z small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'It 1',
          imgMini: '/assets/img-mini/it 1 small.jpg',
          imgGrande: '/assets/img-grande/it 1 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'It 2',
          imgMini: '/assets/img-mini/it 2 small.jpg',
          imgGrande: '/assets/img-grande/it 2 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Jackass 4.5',
          imgMini: '/assets/img-mini/jackass 4 small.jpg',
          imgGrande: '/assets/img-grande/jackass 4 small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Jackass 4',
          imgMini: '/assets/img-mini/jackass 4.5 small.jpg',
          imgGrande: '/assets/img-grande/jackass 4.5 small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Jefe En Pañales 1',
          imgMini: '/assets/img-mini/jefe en pañales 1 small.jpg',
          imgGrande: '/assets/img-grande/jefe en pañales 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Jefe En Pañales 2',
          imgMini: '/assets/img-mini/jefe en pañales 2 small.jpg',
          imgGrande: '/assets/img-grande/jefe en pañales 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Jexi',
          imgMini: '/assets/img-mini/Jexi small.jpg',
          imgGrande: '/assets/img-grande/Jexi small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Jinete Sin Cabeza',
          imgMini: '/assets/img-mini/jinete sin cabeza small.jpg',
          imgGrande: '/assets/img-grande/jinete sin cabeza small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Jinetes De La Justicia',
          imgMini: '/assets/img-mini/jinetes de la justicia small.jpg',
          imgGrande: '/assets/img-grande/jinetes de la justicia small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'John Wick 1',
          imgMini: '/assets/img-mini/john wick 1 small.jpg',
          imgGrande: '/assets/img-grande/john wick 1 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'John Wick 2',
          imgMini: '/assets/img-mini/john wick 2 small.jpg',
          imgGrande: '/assets/img-grande/john wick 2 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'John Wick 3',
          imgMini: '/assets/img-mini/john wick 3 small.jpg',
          imgGrande: '/assets/img-grande/john wick 3 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Jojo Rabbit',
          imgMini: '/assets/img-mini/jojo rabbit small.jpg',
          imgGrande: '/assets/img-grande/jojo rabbit small.jpg',
          sinopsis: '',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Joker2',
          imgMini: '/assets/img-mini/joker2 small.jpg',
          imgGrande: '/assets/img-grande/joker2 small.jpg',
          sinopsis: '',
          genero: [superheroes, drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Jovenes Brujas 1996',
          imgMini: '/assets/img-mini/jovenes brujas 1996.jpg',
          imgGrande: '/assets/img-grande/jovenes brujas 1996.jpg',
          sinopsis: 'Una recién llegada a una escuela católica entabla relación con un trío de adolescentes marginadas que practican brujería y evocan hechizos y maldiciones contra quienes las enfadan.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'Jovenes Brujas',
          imgMini: '/assets/img-mini/jovenes brujas small.jpg',
          imgGrande: '/assets/img-grande/jovenes brujas small.jpg',
          sinopsis: 'Cuatro adolescentes aficionadas a la brujería forman un aquelarre y descubren que son mucho más poderosas de lo que jamás hubieran soñado ser. No obstante, la magia tiene un lado oscuro que se cierne sobre ellas.',
          genero: [suspenso, drama],
          tipo: pelicula
     },

     {
          nombre: 'Judas Y El Mesias Negro ',
          imgMini: '/assets/img-mini/judas y el mesias negro small .jpg',
          imgGrande: '/assets/img-grande/judas y el mesias negro small .jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Juega Conmigo ',
          imgMini: '/assets/img-mini/juega conmigo small .jpg',
          imgGrande: '/assets/img-grande/juega conmigo small .jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Juego De Ladrones ',
          imgMini: '/assets/img-mini/juego de ladrones  small.jpg',
          imgGrande: '/assets/img-grande/juego de ladrones  small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Juego Fatal',
          imgMini: '/assets/img-mini/juego fatal small.jpg',
          imgGrande: '/assets/img-grande/juego fatal small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Jugando Con Fuego',
          imgMini: '/assets/img-mini/jugando con fuego small.jpg',
          imgGrande: '/assets/img-grande/jugando con fuego small.jpg',
          sinopsis: '',
          genero: [comedia, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Jugar En Casa',
          imgMini: '/assets/img-mini/JUGAR EN CASA small.jpg',
          imgGrande: '/assets/img-grande/JUGAR EN CASA small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Jumanji 1',
          imgMini: '/assets/img-mini/jumanji 1 small.jpg',
          imgGrande: '/assets/img-grande/jumanji 1 small.jpg',
          sinopsis: '',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Jumanji 2',
          imgMini: '/assets/img-mini/jumanji 2 small.jpg',
          imgGrande: '/assets/img-grande/jumanji 2 small.jpg',
          sinopsis: '',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Jungla',
          imgMini: '/assets/img-mini/Jungla small.jpg',
          imgGrande: '/assets/img-grande/Jungla small.jpg',
          sinopsis: '',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Jurassic World 1',
          imgMini: '/assets/img-mini/jurassic world 1 small.jpg',
          imgGrande: '/assets/img-grande/jurassic world 1 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Jurassic World 2 El Reino Caido',
          imgMini: '/assets/img-mini/jurassic world 2 el reino caido small.jpg',
          imgGrande: '/assets/img-grande/jurassic world 2 el reino caido small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Jurassic World 3 Dominion',
          imgMini: '/assets/img-mini/jurassic world 3 dominion small.jpg',
          imgGrande: '/assets/img-grande/jurassic world 3 dominion small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Justicia Implacable',
          imgMini: '/assets/img-mini/justicia implacable small.jpg',
          imgGrande: '/assets/img-grande/justicia implacable small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Kate',
          imgMini: '/assets/img-mini/kate small.jpg',
          imgGrande: '/assets/img-grande/kate small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Kimi',
          imgMini: '/assets/img-mini/kimi small.jpg',
          imgGrande: '/assets/img-grande/kimi small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'King Richard',
          imgMini: '/assets/img-mini/king richard small.jpg',
          imgGrande: '/assets/img-grande/king richard small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Kingdom Pelicula ',
          imgMini: '/assets/img-mini/kingdom pelicula  small.jpg',
          imgGrande: '/assets/img-grande/kingdom pelicula  small.jpg',
          sinopsis: '',
          genero: [accion, 'zombies'],
          tipo: pelicula
     },

     {
          nombre: 'Kingsman 1',
          imgMini: '/assets/img-mini/kingsman 1 small.jpg',
          imgGrande: '/assets/img-grande/kingsman 1 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Kingsman 2',
          imgMini: '/assets/img-mini/kingsman 2 small.jpg',
          imgGrande: '/assets/img-grande/kingsman 2 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Kingsman 3',
          imgMini: '/assets/img-mini/kingsman 3 small.jpg',
          imgGrande: '/assets/img-grande/kingsman 3 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Klaus',
          imgMini: '/assets/img-mini/klaus small.jpg',
          imgGrande: '/assets/img-grande/klaus small.jpg',
          sinopsis: '',
          genero: [animacion, infantil, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'Kong',
          imgMini: '/assets/img-mini/kong small.jpg',
          imgGrande: '/assets/img-grande/kong small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La Aldea De Los Aullidos',
          imgMini: '/assets/img-mini/la aldea de los aullidos small.jpg',
          imgGrande: '/assets/img-grande/la aldea de los aullidos small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Batalla Olvidada',
          imgMini: '/assets/img-mini/la batalla olvidada small.jpg',
          imgGrande: '/assets/img-grande/la batalla olvidada small.jpg',
          sinopsis: '',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'La Cabaña',
          imgMini: '/assets/img-mini/la cabaña small.jpg',
          imgGrande: '/assets/img-grande/la cabaña small.jpg',
          sinopsis: '',
          genero: [drama, religioso],
          tipo: pelicula
     },

     {
          nombre: 'La Cabeza De La Araña',
          imgMini: '/assets/img-mini/la cabeza de la araña small.jpg',
          imgGrande: '/assets/img-grande/la cabeza de la araña small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La Caida De Grace',
          imgMini: '/assets/img-mini/la caida de grace small.jpg',
          imgGrande: '/assets/img-grande/la caida de grace small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La Casa De Las Flores La Pelicula',
          imgMini: '/assets/img-mini/la casa de las flores la pelicula small.jpg',
          imgGrande: '/assets/img-grande/la casa de las flores la pelicula small.jpg',
          sinopsis: '',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'La Casa De Las Profundidades',
          imgMini: '/assets/img-mini/la casa de las profundidades small.jpg',
          imgGrande: '/assets/img-grande/la casa de las profundidades small.jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'La Casa Gucci',
          imgMini: '/assets/img-mini/la casa gucci small.jpg',
          imgGrande: '/assets/img-grande/la casa gucci small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'La Casa Oscura',
          imgMini: '/assets/img-mini/la casa oscura small.jpg',
          imgGrande: '/assets/img-grande/la casa oscura small.jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'La Ciudad Perdida',
          imgMini: '/assets/img-mini/la ciudad perdida small.jpg',
          imgGrande: '/assets/img-grande/la ciudad perdida small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'La Cumbre Escarlata',
          imgMini: '/assets/img-mini/la cumbre escarlata small.jpg',
          imgGrande: '/assets/img-grande/la cumbre escarlata small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'La Era 5',
          imgMini: '/assets/img-mini/la era 5 small.jpg',
          imgGrande: '/assets/img-grande/la era 5 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'La Era De Hielo 6',
          imgMini: '/assets/img-mini/la era de hielo 6 small.jpg',
          imgGrande: '/assets/img-grande/la era de hielo 6 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'La Esperanza De Un Jugador',
          imgMini: '/assets/img-mini/la esperanza de un jugador small.jpg',
          imgGrande: '/assets/img-grande/la esperanza de un jugador small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'La Estacion',
          imgMini: '/assets/img-mini/la estacion small.jpg',
          imgGrande: '/assets/img-grande/la estacion small.jpg',
          sinopsis: '',
          genero: [accion, belico],
          tipo: pelicula
     },

     {
          nombre: 'La Familia Mitchell Vs Las Maquinas',
          imgMini: '/assets/img-mini/la familia mitchell vs las maquinas SMALL.jpg',
          imgGrande: '/assets/img-grande/la familia mitchell vs las maquinas SMALL.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'La Gallina Turuleca',
          imgMini: '/assets/img-mini/la gallina turuleca small.jpg',
          imgGrande: '/assets/img-grande/la gallina turuleca small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'La Guerra Del Mañana',
          imgMini: '/assets/img-mini/la guerra del mañana small.jpg',
          imgGrande: '/assets/img-grande/la guerra del mañana small.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'La Hija Del Rey',
          imgMini: '/assets/img-mini/la hija del rey small.jpg',
          imgGrande: '/assets/img-grande/la hija del rey small.jpg',
          sinopsis: '',
          genero: [accion, familiar],
          tipo: pelicula
     },

     {
          nombre: 'La Intervencion',
          imgMini: '/assets/img-mini/la intervencion small.jpg',
          imgGrande: '/assets/img-grande/la intervencion small.jpg',
          sinopsis: '',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'La Llamada Del Diablo',
          imgMini: '/assets/img-mini/la llamada del diablo small.jpg',
          imgGrande: '/assets/img-grande/la llamada del diablo small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Llorona',
          imgMini: '/assets/img-mini/la llorona small.jpg',
          imgGrande: '/assets/img-grande/la llorona small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Maldicion',
          imgMini: '/assets/img-mini/la maldicion small.jpg',
          imgGrande: '/assets/img-grande/la maldicion small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Masacre De Texas',
          imgMini: '/assets/img-mini/la masacre de texas small.jpg',
          imgGrande: '/assets/img-grande/la masacre de texas small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Monja',
          imgMini: '/assets/img-mini/la monja small.jpg',
          imgGrande: '/assets/img-grande/la monja small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'La Otra Missy',
          imgMini: '/assets/img-mini/la otra missy small.jpg',
          imgGrande: '/assets/img-grande/la otra missy small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'La Protegida',
          imgMini: '/assets/img-mini/la protegida small.jpg',
          imgGrande: '/assets/img-grande/la protegida small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'La Ultima Gran Estafa',
          imgMini: '/assets/img-mini/la ultima gran estafa small.jpg',
          imgGrande: '/assets/img-grande/la ultima gran estafa small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'La Vieja Guardia',
          imgMini: '/assets/img-mini/la vieja guardia small.jpg',
          imgGrande: '/assets/img-grande/la vieja guardia small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Latin Lover',
          imgMini: '/assets/img-mini/latin lover small.jpg',
          imgGrande: '/assets/img-grande/latin lover small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Legado De Mentiras',
          imgMini: '/assets/img-mini/legado de mentiras small.jpg',
          imgGrande: '/assets/img-grande/legado de mentiras small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Liga De La Justicia Zack Snider Cut',
          imgMini: '/assets/img-mini/liga de la justicia  Zack snider cut small.jpg',
          imgGrande: '/assets/img-grande/liga de la justicia  Zack snider cut small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Liga De Los Dioses',
          imgMini: '/assets/img-mini/liga de los dioses small.jpg',
          imgGrande: '/assets/img-grande/liga de los dioses small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Llamas De Venganza',
          imgMini: '/assets/img-mini/llamas de venganza small.jpg',
          imgGrande: '/assets/img-grande/llamas de venganza small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Los 7 Pecados Capitales La Pelicula',
          imgMini: '/assets/img-mini/los 7 pecados capitales la pelicula small.jpg',
          imgGrande: '/assets/img-grande/los 7 pecados capitales la pelicula small.jpg',
          sinopsis: '',
          genero: [animacion, anime],
          tipo: pelicula
     },

     {
          nombre: 'Los Fantasmas De Scrooge',
          imgMini: '/assets/img-mini/los fantasmas de scrooge small.jpg',
          imgGrande: '/assets/img-grande/los fantasmas de scrooge small.jpg',
          sinopsis: '',
          genero: [animacion, infantil, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'Los Ilusionistas 1',
          imgMini: '/assets/img-mini/los ilusionistas 1 small.jpg',
          imgGrande: '/assets/img-grande/los ilusionistas 1 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Los Ilusionistas 2 ',
          imgMini: '/assets/img-mini/los ilusionistas 2 small.jpg',
          imgGrande: '/assets/img-grande/los ilusionistas 2 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Los Locos Adams 1',
          imgMini: '/assets/img-mini/los locos adams 1 small.jpg',
          imgGrande: '/assets/img-grande/los locos adams 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Los Locos Adams 2',
          imgMini: '/assets/img-mini/los locos adams 2 small.jpg',
          imgGrande: '/assets/img-grande/los locos adams 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Los Nuevos Mutantes',
          imgMini: '/assets/img-mini/los nuevos mutantes small.jpg',
          imgGrande: '/assets/img-grande/los nuevos mutantes small.jpg',
          sinopsis: '',
          genero: [accion, superheroes, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Los Propietarios',
          imgMini: '/assets/img-mini/los propietarios} small.jpg',
          imgGrande: '/assets/img-grande/los propietarios} small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Luca ',
          imgMini: '/assets/img-mini/luca small .jpg',
          imgGrande: '/assets/img-grande/luca small .jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Luz Negra',
          imgMini: '/assets/img-mini/luz negra small.jpg',
          imgGrande: '/assets/img-grande/luz negra small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Ma',
          imgMini: '/assets/img-mini/ma small.jpg',
          imgGrande: '/assets/img-grande/ma small.jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Madre Android',
          imgMini: '/assets/img-mini/madre android small.jpg',
          imgGrande: '/assets/img-grande/madre android small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Malefica 1',
          imgMini: '/assets/img-mini/malefica 1 small.jpg',
          imgGrande: '/assets/img-grande/malefica 1 small.jpg',
          sinopsis: '',
          genero: [infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Malefica 2',
          imgMini: '/assets/img-mini/malefica 2 small.jpg',
          imgGrande: '/assets/img-grande/malefica 2 small.jpg',
          sinopsis: '',
          genero: [infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Maligno',
          imgMini: '/assets/img-mini/maligno small.jpg',
          imgGrande: '/assets/img-grande/maligno small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Mama',
          imgMini: '/assets/img-mini/mama small.jpg',
          imgGrande: '/assets/img-grande/mama small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Mas Alla De La Luna',
          imgMini: '/assets/img-mini/mas alla de la luna small.jpg',
          imgGrande: '/assets/img-grande/mas alla de la luna small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mas Dura Sera La Caida',
          imgMini: '/assets/img-mini/mas dura sera la caida small.jpg',
          imgGrande: '/assets/img-grande/mas dura sera la caida small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Mascotas 1',
          imgMini: '/assets/img-mini/mascotas 1 small.jpg',
          imgGrande: '/assets/img-grande/mascotas 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mascotas 2',
          imgMini: '/assets/img-mini/mascotas 2 small.jpg',
          imgGrande: '/assets/img-grande/mascotas 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Matrix 4',
          imgMini: '/assets/img-mini/matrix 4 small.jpg',
          imgGrande: '/assets/img-grande/matrix 4 small.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Megalodon',
          imgMini: '/assets/img-mini/megalodon small.jpg',
          imgGrande: '/assets/img-grande/megalodon small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Mi Pobre Y Dulce Angelito',
          imgMini: '/assets/img-mini/mi pobre y dulce angelito small.jpg',
          imgGrande: '/assets/img-grande/mi pobre y dulce angelito small.jpg',
          sinopsis: '',
          genero: [infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Mi Villano Favorito 1',
          imgMini: '/assets/img-mini/Mi Villano Favorito 1 small.jpg',
          imgGrande: '/assets/img-grande/Mi Villano Favorito 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mi Villano Favorito 2',
          imgMini: '/assets/img-mini/Mi Villano Favorito 2 small.jpg',
          imgGrande: '/assets/img-grande/Mi Villano Favorito 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mi Villano Favorito 3',
          imgMini: '/assets/img-mini/Mi Villano Favorito 3 small.jpg',
          imgGrande: '/assets/img-grande/Mi Villano Favorito 3 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mike Y Dave Los Buasca Novia',
          imgMini: '/assets/img-mini/mike y dave los buasca novia small.jpg',
          imgGrande: '/assets/img-grande/mike y dave los buasca novia small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Milagro En La Celda 7',
          imgMini: '/assets/img-mini/milagro en la celda 7 small.jpg',
          imgGrande: '/assets/img-grande/milagro en la celda 7 small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Milla 22',
          imgMini: '/assets/img-mini/milla 22 small.jpg',
          imgGrande: '/assets/img-grande/milla 22 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Minions 1',
          imgMini: '/assets/img-mini/minions 1 small.jpg',
          imgGrande: '/assets/img-grande/minions 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Minions 2',
          imgMini: '/assets/img-mini/Minions 2 small.jpg',
          imgGrande: '/assets/img-grande/Minions 2 small.jpg',
          sinopsis: 'La historia no contada del sueño de un niño de doce años de convertirse en el mayor supervillano del mundo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Minions Y Sus Amigos 1',
          imgMini: '/assets/img-mini/Minions y sus Amigos 1 small.jpg',
          imgGrande: '/assets/img-grande/Minions y sus Amigos 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Mision Rescate',
          imgMini: '/assets/img-mini/mision rescate small.jpg',
          imgGrande: '/assets/img-grande/mision rescate small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Mision Submarino',
          imgMini: '/assets/img-mini/mision submarino small.jpg',
          imgGrande: '/assets/img-grande/mision submarino small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Misterio',
          imgMini: '/assets/img-mini/misterio  small.jpg',
          imgGrande: '/assets/img-grande/misterio  small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Moana',
          imgMini: '/assets/img-mini/moana small.jpg',
          imgGrande: '/assets/img-grande/moana small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Monstermania',
          imgMini: '/assets/img-mini/monstermania small.jpg',
          imgGrande: '/assets/img-grande/monstermania small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Moonfall',
          imgMini: '/assets/img-mini/moonfall small.jpg',
          imgGrande: '/assets/img-grande/moonfall small.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Morbius',
          imgMini: '/assets/img-mini/morbius small.jpg',
          imgGrande: '/assets/img-grande/morbius small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Mortal Kombat Animada',
          imgMini: '/assets/img-mini/mortal kombat animada small.jpg',
          imgGrande: '/assets/img-grande/mortal kombat animada small.jpg',
          sinopsis: '',
          genero: [animacion, accion],
          tipo: pelicula
     },

     {
          nombre: 'Mortal Kombat',
          imgMini: '/assets/img-mini/MORTAL KOMBAT small.jpg',
          imgGrande: '/assets/img-grande/MORTAL KOMBAT small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Muerte En El Nilo',
          imgMini: '/assets/img-mini/muerte en el nilo small.jpg',
          imgGrande: '/assets/img-grande/muerte en el nilo small.jpg',
          sinopsis: '',
          genero: [drama, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Mujer Maravilla 1',
          imgMini: '/assets/img-mini/mujer maravilla 1 small.jpg',
          imgGrande: '/assets/img-grande/mujer maravilla 1 small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Mujer Maravilla 2',
          imgMini: '/assets/img-mini/mujer maravilla 2 small.jpg',
          imgGrande: '/assets/img-grande/mujer maravilla 2 small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Mulan Pelicula',
          imgMini: '/assets/img-mini/mulan pelicula small.jpg',
          imgGrande: '/assets/img-grande/mulan pelicula small.jpg',
          sinopsis: '',
          genero: [accion, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Nadie Sale Con Vida',
          imgMini: '/assets/img-mini/nadie sale con vida small.jpg',
          imgGrande: '/assets/img-grande/nadie sale con vida small.jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Nadie',
          imgMini: '/assets/img-mini/nadie small.jpg',
          imgGrande: '/assets/img-grande/nadie small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Navidad En 8 Bits',
          imgMini: '/assets/img-mini/navidad en 8 bits small.jpg',
          imgGrande: '/assets/img-grande/navidad en 8 bits small.jpg',
          sinopsis: '',
          genero: [comedia, familiar, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'No Le Digas A Nadie',
          imgMini: '/assets/img-mini/no le digas a nadie small.jpg',
          imgGrande: '/assets/img-grande/no le digas a nadie small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'No Mires Arriba',
          imgMini: '/assets/img-mini/no mires arriba small.jpg',
          imgGrande: '/assets/img-grande/no mires arriba small.jpg',
          sinopsis: '',
          genero: [comedia, drama, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'No Respires 1',
          imgMini: '/assets/img-mini/no respires 1 small.jpg',
          imgGrande: '/assets/img-grande/no respires 1 small.jpg',
          sinopsis: '',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'No Respires 2',
          imgMini: '/assets/img-mini/No Respires 2 small.jpg',
          imgGrande: '/assets/img-grande/No Respires 2 small.jpg',
          sinopsis: '',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Noticias Del Gran Mundo',
          imgMini: '/assets/img-mini/noticias del gran mundo small.jpg',
          imgGrande: '/assets/img-grande/noticias del gran mundo small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Nueva York Sin Salida',
          imgMini: '/assets/img-mini/nueva york sin salida small.jpg',
          imgGrande: '/assets/img-grande/nueva york sin salida small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Ocupacion 1',
          imgMini: '/assets/img-mini/ocupacion 1 small.jpg',
          imgGrande: '/assets/img-grande/ocupacion 1 small.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Ocupacion 2 Railfall',
          imgMini: '/assets/img-mini/ocupacion 2 railfall SMALL.jpg',
          imgGrande: '/assets/img-grande/ocupacion 2 railfall SMALL.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'One Shot',
          imgMini: '/assets/img-mini/one shot poster.jpg',
          imgGrande: '/assets/img-grande/one shot poster.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Oro',
          imgMini: '/assets/img-mini/oro small.jpg',
          imgGrande: '/assets/img-grande/oro small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Padre No Hay Mas Que Uno 1',
          imgMini: '/assets/img-mini/padre no hay mas que uno 1 small.jpg',
          imgGrande: '/assets/img-grande/padre no hay mas que uno 1 small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Padre No Hay Mas Que Uno 2',
          imgMini: '/assets/img-mini/padre no hay mas que uno 2 small.jpg',
          imgGrande: '/assets/img-grande/padre no hay mas que uno 2 small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Pantera Negra',
          imgMini: '/assets/img-mini/pantera negra small.jpg',
          imgGrande: '/assets/img-grande/pantera negra small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Papitas Mani Toston 1',
          imgMini: '/assets/img-mini/papitas mani toston 1 small.jpg',
          imgGrande: '/assets/img-grande/papitas mani toston 1 small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Papitas Mani Toston 2',
          imgMini: '/assets/img-mini/papitas mani toston 2 small.jpg',
          imgGrande: '/assets/img-grande/papitas mani toston 2 small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Pasado Violento',
          imgMini: '/assets/img-mini/pasado violento small.jpg',
          imgGrande: '/assets/img-grande/pasado violento small.jpg',
          sinopsis: '',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Pasajero 666',
          imgMini: '/assets/img-mini/pasajero 666 small.jpg',
          imgGrande: '/assets/img-grande/pasajero 666 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Pasajero Oculto',
          imgMini: '/assets/img-mini/pasajero oculto small.jpg',
          imgGrande: '/assets/img-grande/pasajero oculto small.jpg',
          sinopsis: '',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Paternidad',
          imgMini: '/assets/img-mini/paternidad small.jpg',
          imgGrande: '/assets/img-grande/paternidad small.jpg',
          sinopsis: '',
          genero: [comedia, drama],
          tipo: pelicula
     },

     {
          nombre: 'Paw Patrol La Pelicula',
          imgMini: '/assets/img-mini/paw patrol la pelicula small.jpg',
          imgGrande: '/assets/img-grande/paw patrol la pelicula small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Peninsula',
          imgMini: '/assets/img-mini/peninsula small.jpg',
          imgGrande: '/assets/img-grande/peninsula small.jpg',
          sinopsis: '',
          genero: [accion, 'zombies'],
          tipo: pelicula
     },

     {
          nombre: 'Pequeño Pony La Pelicula',
          imgMini: '/assets/img-mini/pequeño pony la pelicula small.jpg',
          imgGrande: '/assets/img-grande/pequeño pony la pelicula small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Pequeños Detalles',
          imgMini: '/assets/img-mini/pequeños detalles small.jpg',
          imgGrande: '/assets/img-grande/pequeños detalles small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Perdida',
          imgMini: '/assets/img-mini/perdida small.jpg',
          imgGrande: '/assets/img-grande/perdida small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Peter Rabbit 1',
          imgMini: '/assets/img-mini/peter rabbit 1 small.jpg',
          imgGrande: '/assets/img-grande/peter rabbit 1 small.jpg',
          sinopsis: '',
          genero: [comedia, infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Peter Rabbit 2',
          imgMini: '/assets/img-mini/peter rabbit 2 small.jpg',
          imgGrande: '/assets/img-grande/peter rabbit 2 small.jpg',
          sinopsis: '',
          genero: [comedia, infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Pie Pequeño',
          imgMini: '/assets/img-mini/pie pequeño small.jpg',
          imgGrande: '/assets/img-grande/pie pequeño small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Pinocho 2019',
          imgMini: '/assets/img-mini/Pinocho 2019 small.jpg',
          imgGrande: '/assets/img-grande/Pinocho 2019 small.jpg',
          sinopsis: '',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Pinocho Animada',
          imgMini: '/assets/img-mini/pinocho animada small.jpg',
          imgGrande: '/assets/img-grande/pinocho animada small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Pokemon Las Cronicas De Arceus',
          imgMini: '/assets/img-mini/Pokemon Las Cronicas de Arceus small.jpg',
          imgGrande: '/assets/img-grande/Pokemon Las Cronicas de Arceus small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Pollonejo',
          imgMini: '/assets/img-mini/pollonejo small.jpg',
          imgGrande: '/assets/img-grande/pollonejo small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Posesion Infernal',
          imgMini: '/assets/img-mini/posesion infernal small.jpg',
          imgGrande: '/assets/img-grande/posesion infernal small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Princesa Cero Fresa',
          imgMini: '/assets/img-mini/princesa cero fresa small.jpg',
          imgGrande: '/assets/img-grande/princesa cero fresa small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Prisioneros De Ghostland',
          imgMini: '/assets/img-mini/prisioneros de ghostland small.jpg',
          imgGrande: '/assets/img-grande/prisioneros de ghostland small.jpg',
          sinopsis: '',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Proyecto Adam',
          imgMini: '/assets/img-mini/proyecto adam small.jpg',
          imgGrande: '/assets/img-grande/proyecto adam small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Proyecto Exorcismo ',
          imgMini: '/assets/img-mini/Proyecto Exorcismo  small.jpg',
          imgGrande: '/assets/img-grande/Proyecto Exorcismo  small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Proyecto Geminis',
          imgMini: '/assets/img-mini/proyecto geminis small.jpg',
          imgGrande: '/assets/img-grande/proyecto geminis small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Proyevto Power',
          imgMini: '/assets/img-mini/proyevto power small.jpg',
          imgGrande: '/assets/img-grande/proyevto power small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Step Up 1',
          imgMini: '/assets/img-mini/step up 1.jpg',
          imgGrande: '/assets/img-grande/step up 1.jpg',
          sinopsis: 'Tyler Gage tiene la oportunidad de obtener una beca de danza y actuar con Nora, una bailarina a la alza.',
          genero: [drama, romance, 'baile'],
          tipo: pelicula
     },

     {
          nombre: 'Que Le Paso Al Lunes',
          imgMini: '/assets/img-mini/que le paso al lunes small.jpg',
          imgGrande: '/assets/img-grande/que le paso al lunes small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Quien Quiere Ser Millonario',
          imgMini: '/assets/img-mini/quien quiere ser millonario small.jpg',
          imgGrande: '/assets/img-grande/quien quiere ser millonario small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Ralph 1',
          imgMini: '/assets/img-mini/ralph 1 small.jpg',
          imgGrande: '/assets/img-grande/ralph 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Ralph 2',
          imgMini: '/assets/img-mini/ralph 2 small.jpg',
          imgGrande: '/assets/img-grande/ralph 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Rambo 5',
          imgMini: '/assets/img-mini/rambo 5 small.jpg',
          imgGrande: '/assets/img-grande/rambo 5 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rampage',
          imgMini: '/assets/img-mini/rampage small.jpg',
          imgGrande: '/assets/img-grande/rampage small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 1',
          imgMini: '/assets/img-mini/rapido 1.jpg',
          imgGrande: '/assets/img-grande/rapido 1.jpg',
          sinopsis: 'El oficial de policía de Los Ángeles Brian debe decidir dónde está realmente su lealtad cuando se enamora del mundo de las carreras callejeras que ha sido enviado a destruir.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 2',
          imgMini: '/assets/img-mini/rapido 2.jpg',
          imgGrande: '/assets/img-grande/rapido 2.jpg',
          sinopsis: 'El expolicía Brian es llamado para atrapar a un peligroso criminal y recluta la ayuda de un antiguo amigo de la infancia y corredor callejero que tiene la oportunidad de redimirse.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 3 Tokyo Drift',
          imgMini: '/assets/img-mini/rapido 3.jpg',
          imgGrande: '/assets/img-grande/rapido 3.jpg',
          sinopsis: 'Un adolescente se convierte en un gran competidor en el mundo de las carreras a la deriva después de mudarse con su padre en Tokio para evitar una sentencia de cárcel en Estados Unidos.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 4',
          imgMini: '/assets/img-mini/rapido 4.jpg',
          imgGrande: '/assets/img-grande/rapido 4.jpg',
          sinopsis: 'Brian, quien nuevamente trabaja para el FBI en Los Ángeles, se une a Dominic Toretto para detener a un traficante de heroína infiltrándose en su operación.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 5',
          imgMini: '/assets/img-mini/rapido 5.jpg',
          imgGrande: '/assets/img-grande/rapido 5.jpg',
          sinopsis: 'Dominic Toretto y su equipo de corredores callejeros planean un atraco masivo para comprar su libertad mientras están en la mira de un poderoso narcotraficante brasileño y un peligroso agente federal.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 6',
          imgMini: '/assets/img-mini/rapido 6.jpg',
          imgGrande: '/assets/img-grande/rapido 6.jpg',
          sinopsis: 'Hobbs hace que Dominic y Brian vuelvan a reunir a su tripulación para acabar con un equipo de mercenarios. Dominic se desvía inesperadamente para enfrentarse a su presunta novia fallecida, Letty.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 7',
          imgMini: '/assets/img-mini/rapido 7.jpg',
          imgGrande: '/assets/img-grande/rapido 7.jpg',
          sinopsis: 'Deckard Shaw busca vengarse de Dominic Toretto y su familia por su hermano en coma.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapido y Furioso 8',
          imgMini: '/assets/img-mini/rapido 8.jpg',
          imgGrande: '/assets/img-grande/rapido 8.jpg',
          sinopsis: 'Una misteriosa mujer seduce a Dom para que se adentre en el mundo del terrorismo y traicione a sus allegados. El equipo se enfrenta a situaciones que les pondrán a prueba como nunca antes.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapidos y Ruriosos Hobbs & Shaw',
          imgMini: '/assets/img-mini/rapidos y ruriosos  hobbs & shaw small.jpg',
          imgGrande: '/assets/img-grande/rapidos y ruriosos  hobbs & shaw small.jpg',
          sinopsis: 'Hombre de ley Luke Hobbs y proscrito Deckard Shaw entablan una improbable amistad cuando un villano mejorado con cibergenética amenaza el futuro de la humanidad.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rapidos y Furiosos 9',
          imgMini: '/assets/img-mini/rapidos y furiosos 9 small.jpg',
          imgGrande: '/assets/img-grande/rapidos y furiosos 9 small.jpg',
          sinopsis: 'Dom y su equipo se enfrentan a un terrorista internacional que resulta ser el hermano de Dom y Mia, con el que no tienen relación.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rascacielos',
          imgMini: '/assets/img-mini/rascacielos small.jpg',
          imgGrande: '/assets/img-grande/rascacielos small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Ratatouille',
          imgMini: '/assets/img-mini/Ratatouille small.jpg',
          imgGrande: '/assets/img-grande/Ratatouille small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Raya',
          imgMini: '/assets/img-mini/raya small.jpg',
          imgGrande: '/assets/img-grande/raya small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Rayo Mural',
          imgMini: '/assets/img-mini/rayo mural small.jpg',
          imgGrande: '/assets/img-grande/rayo mural small.jpg',
          sinopsis: '',
          genero: [accion, superheroes, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Red',
          imgMini: '/assets/img-mini/red small.jpg',
          imgGrande: '/assets/img-grande/red small.jpg',
          sinopsis: 'Mei Lee, una niña de 13 años un poco rara pero segura de sí misma, se debate entre ser la hija obediente que su madre quiere que sea y el caos propio de la adolescencia. Y por si los cambios en su vida y en su cuerpo no fueran suficientes, cada vez que se emociona demasiado, se convierte en un panda rojo gigante.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Reflejos Siniestros',
          imgMini: '/assets/img-mini/reflejos siniestros small.jpg',
          imgGrande: '/assets/img-grande/reflejos siniestros small.jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Reminiscencia',
          imgMini: '/assets/img-mini/reminiscencia small.jpg',
          imgGrande: '/assets/img-grande/reminiscencia small.jpg',
          sinopsis: '',
          genero: [suspenso, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Resident Evil',
          imgMini: '/assets/img-mini/resident evil small.jpg',
          imgGrande: '/assets/img-grande/resident evil small.jpg',
          sinopsis: '',
          genero: [accion, terror],
          tipo: pelicula
     },

     {
          nombre: 'Reto De Valientes',
          imgMini: '/assets/img-mini/reto de valientes small.jpg',
          imgGrande: '/assets/img-grande/reto de valientes small.jpg',
          sinopsis: '',
          genero: [drama, religioso],
          tipo: pelicula
     },

     {
          nombre: 'Rey Leon Pelicula ',
          imgMini: '/assets/img-mini/rey leon pelicula small .jpg',
          imgGrande: '/assets/img-grande/rey leon pelicula small .jpg',
          sinopsis: '',
          genero: [familiar, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Riesgo Bajo Cero',
          imgMini: '/assets/img-mini/riesgo bajo cero small.jpg',
          imgGrande: '/assets/img-grande/riesgo bajo cero small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Rogue',
          imgMini: '/assets/img-mini/Rogue small.jpg',
          imgGrande: '/assets/img-grande/Rogue small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Ron Da Error',
          imgMini: '/assets/img-mini/ron da error small.jpg',
          imgGrande: '/assets/img-grande/ron da error small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Ruega Por Nosotros',
          imgMini: '/assets/img-mini/ruega por nosotros small.jpg',
          imgGrande: '/assets/img-grande/ruega por nosotros small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Samurai X 4',
          imgMini: '/assets/img-mini/samurai x 4 small.jpg',
          imgGrande: '/assets/img-grande/samurai x 4 small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Samurai X El Origen',
          imgMini: '/assets/img-mini/samurai x el origen small.jpg',
          imgGrande: '/assets/img-grande/samurai x el origen small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Sas Alerta Roja',
          imgMini: '/assets/img-mini/SAS alerta roja SMALL.jpg',
          imgGrande: '/assets/img-grande/SAS alerta roja SMALL.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Scooby Halloween',
          imgMini: '/assets/img-mini/scooby halloween small.jpg',
          imgGrande: '/assets/img-grande/scooby halloween small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Scooby',
          imgMini: '/assets/img-mini/scooby small.jpg',
          imgGrande: '/assets/img-grande/scooby small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Scream 5',
          imgMini: '/assets/img-mini/SCREAM 5 small.jpg',
          imgGrande: '/assets/img-grande/SCREAM 5 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Shang Chi',
          imgMini: '/assets/img-mini/shang chi small.jpg',
          imgGrande: '/assets/img-grande/shang chi small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Shazam',
          imgMini: '/assets/img-mini/shazam small.jpg',
          imgGrande: '/assets/img-grande/shazam small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'El Asedio de Silverton',
          imgMini: '/assets/img-mini/SILVERTON small.jpg',
          imgGrande: '/assets/img-grande/SILVERTON small.jpg',
          sinopsis: '',
          genero: [accion, drama],
          tipo: pelicula
     },

     {
          nombre: 'Sin Remordimientos',
          imgMini: '/assets/img-mini/sin remordimientos small.jpg',
          imgGrande: '/assets/img-grande/sin remordimientos small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Sin Salida 1',
          imgMini: '/assets/img-mini/SIN salida 1 small.jpg',
          imgGrande: '/assets/img-grande/SIN salida 1 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Sin Salida 2',
          imgMini: '/assets/img-mini/sin salida 2 small.jpg',
          imgGrande: '/assets/img-grande/sin salida 2 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Sin Salida',
          imgMini: '/assets/img-mini/sin salida small.jpg',
          imgGrande: '/assets/img-grande/sin salida small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Sin_Escape ',
          imgMini: '/assets/img-mini/sin_escape small.jpg',
          imgGrande: '/assets/img-grande/sin_escape small.jpg',
          sinopsis: '',
          genero: [suspenso, accion],
          tipo: pelicula
     },

     {
          nombre: 'Sing 1 Canta ',
          imgMini: '/assets/img-mini/sing 1 canta small.jpg',
          imgGrande: '/assets/img-grande/sing 1 canta small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Sing 2 Canta',
          imgMini: '/assets/img-mini/sing 2 canta small.jpg',
          imgGrande: '/assets/img-grande/sing 2 canta small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Siniestro 1',
          imgMini: '/assets/img-mini/SINIESTRO 1 small.jpg',
          imgGrande: '/assets/img-grande/SINIESTRO 1 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Siniestro 2',
          imgMini: '/assets/img-mini/siniestro 2 small.jpg',
          imgGrande: '/assets/img-grande/siniestro 2 small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Snake Eyes',
          imgMini: '/assets/img-mini/snake eyes small.jpg',
          imgGrande: '/assets/img-grande/snake eyes small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Sniper El Fin De Los Asesinos',
          imgMini: '/assets/img-mini/sniper el fin de los asesinos small.jpg',
          imgGrande: '/assets/img-grande/sniper el fin de los asesinos small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Sonic 1',
          imgMini: '/assets/img-mini/sonic 1 small.jpg',
          imgGrande: '/assets/img-grande/sonic 1 small.jpg',
          sinopsis: '',
          genero: [comedia, infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Sonic 2',
          imgMini: '/assets/img-mini/sonic 2 small.jpg',
          imgGrande: '/assets/img-grande/sonic 2 small.jpg',
          sinopsis: '',
          genero: [comedia, infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Soul',
          imgMini: '/assets/img-mini/soul small.jpg',
          imgGrande: '/assets/img-grande/soul small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Space Jam 2',
          imgMini: '/assets/img-mini/space jam 2 small.jpg',
          imgGrande: '/assets/img-grande/space jam 2 small.jpg',
          sinopsis: '',
          genero: [comedia, infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Spencer',
          imgMini: '/assets/img-mini/spencer small.jpg',
          imgGrande: '/assets/img-grande/spencer small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Spenser',
          imgMini: '/assets/img-mini/spenser small.jpg',
          imgGrande: '/assets/img-grande/spenser small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'El Sorprendente Hombre Araña 1',
          imgMini: '/assets/img-mini/El Sorprendente Hombre Araña 1 small.jpg',
          imgGrande: '/assets/img-grande/El Sorprendente Hombre Araña 1 small.jpg',
          sinopsis: 'Después de que Peter Parker sea mordido por una araña genéticamente alterada, adquiere poderes arácnidos y se aventura a salvar la ciudad de las maquinaciones de un misterioso enemigo reptiliano, el Lagarto.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'El Sorprendente Hombre Araña 2',
          imgMini: '/assets/img-mini/El Sorprendente Hombre Araña 2 small.jpg',
          imgGrande: '/assets/img-grande/El Sorprendente Hombre Araña 2 small.jpg',
          sinopsis: 'Cuando Nueva York es asediada por Oscorp, depende de Spider-Man salvar la ciudad que juró proteger, así como a sus seres queridos.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Spiderman Lejos De Casa',
          imgMini: '/assets/img-mini/spiderman lejos de casa small.jpg',
          imgGrande: '/assets/img-grande/spiderman lejos de casa small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Spiderman Regreso A Casa',
          imgMini: '/assets/img-mini/spiderman regreso a casa small.jpg',
          imgGrande: '/assets/img-grande/spiderman regreso a casa small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Spiderman Sin Camino A Casa',
          imgMini: '/assets/img-mini/spiderman sin camino a casa small.jpg',
          imgGrande: '/assets/img-grande/spiderman sin camino a casa small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Spiderman Un Nuevo Universo',
          imgMini: '/assets/img-mini/spiderman un nuevo universo small.jpg',
          imgGrande: '/assets/img-grande/spiderman un nuevo universo small.jpg',
          sinopsis: '',
          genero: [accion, superheroes, animacion],
          tipo: pelicula
     },

     {
          nombre: 'Spiral',
          imgMini: '/assets/img-mini/spiral small.jpg',
          imgGrande: '/assets/img-grande/spiral small.jpg',
          sinopsis: '',
          genero: [terror],
          tipo: pelicula
     },

     {
          nombre: 'Spirit 2',
          imgMini: '/assets/img-mini/spirit 2 small.jpg',
          imgGrande: '/assets/img-grande/spirit 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Star Wars 9',
          imgMini: '/assets/img-mini/star wars 9 small.jpg',
          imgGrande: '/assets/img-grande/star wars 9 small.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Stuber',
          imgMini: '/assets/img-mini/stuber small.jpg',
          imgGrande: '/assets/img-grande/stuber small.jpg',
          sinopsis: '',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Super Me',
          imgMini: '/assets/img-mini/super me small.jpg',
          imgGrande: '/assets/img-grande/super me small.jpg',
          sinopsis: '',
          genero: [accion, suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Superacion',
          imgMini: '/assets/img-mini/superacion small.jpg',
          imgGrande: '/assets/img-grande/superacion small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Superman El Hombre De Acero',
          imgMini: '/assets/img-mini/superman el hombre de acero small.jpg',
          imgGrande: '/assets/img-grande/superman el hombre de acero small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Sweet Girl',
          imgMini: '/assets/img-mini/sweet girl small.jpg',
          imgGrande: '/assets/img-grande/sweet girl small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Sword Art Online Movie',
          imgMini: '/assets/img-mini/sword art online movie small.jpg',
          imgGrande: '/assets/img-grande/sword art online movie small.jpg',
          sinopsis: '',
          genero: [animacion, anime],
          tipo: pelicula
     },

     {
          nombre: 'Tadeo Jones 1 ',
          imgMini: '/assets/img-mini/Tadeo jones 1 small.jpg',
          imgGrande: '/assets/img-grande/Tadeo jones 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tadeo Jones 2',
          imgMini: '/assets/img-mini/tadeo jones 2 small.jpg',
          imgGrande: '/assets/img-grande/tadeo jones 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tadeo Jones 3',
          imgMini: '/assets/img-mini/tadeo jones 3 small.jpg',
          imgGrande: '/assets/img-grande/tadeo jones 3 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Historias Cruzadas',
          imgMini: '/assets/img-mini/historias cruzadas.jpg',
          imgGrande: '/assets/img-grande/historias cruzadas.jpg',
          sinopsis: 'Un aspirante a autor durante el movimiento por los derechos civiles en los 60 decide escribir un libro desde la perspectiva de las asistentas domésticas afro-americanas sobre las familias blancas para las que trabajan.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Talentos Ocultos',
          imgMini: '/assets/img-mini/talentos ocultos small.jpg',
          imgGrande: '/assets/img-grande/talentos ocultos small.jpg',
          sinopsis: '',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Tarzan 1',
          imgMini: '/assets/img-mini/tarzan 1 small.jpg',
          imgGrande: '/assets/img-grande/tarzan 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tarzan 2',
          imgMini: '/assets/img-mini/tarzan 2 small.jpg',
          imgGrande: '/assets/img-grande/tarzan 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tarzan La Leyenda',
          imgMini: '/assets/img-mini/tarzan la leyenda small.jpg',
          imgGrande: '/assets/img-grande/tarzan la leyenda small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Te Atrapé',
          imgMini: '/assets/img-mini/Te Atrapé small.jpg',
          imgGrande: '/assets/img-grande/Te Atrapé small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Tenet',
          imgMini: '/assets/img-mini/tenet small.jpg',
          imgGrande: '/assets/img-grande/tenet small.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Terminator Destino Oscuro',
          imgMini: '/assets/img-mini/terminator destino oscuro small.jpg',
          imgGrande: '/assets/img-grande/terminator destino oscuro small.jpg',
          sinopsis: '',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'The Batman',
          imgMini: '/assets/img-mini/the batman small.jpg',
          imgGrande: '/assets/img-grande/the batman small.jpg',
          sinopsis: '',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Tiburon Blanco',
          imgMini: '/assets/img-mini/tiburon blanco small.jpg',
          imgGrande: '/assets/img-grande/tiburon blanco small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Tinkerbell 1',
          imgMini: '/assets/img-mini/tinkerbell 1 small.jpg',
          imgGrande: '/assets/img-grande/tinkerbell 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tinkerbell 2',
          imgMini: '/assets/img-mini/tinkerbell 2.jpg',
          imgGrande: '/assets/img-grande/tinkerbell 2.jpg',
          sinopsis: 'En la Hondonada de las Hadas se preparan para la llegada del otoño. Pero Campanita pone todo en peligro y decide cruzar el mar para intentar poner a salvo a toda la Hondonada, acompañada de sus amigos Terence y Chispa, una luciérnaga.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tinkerbell 3',
          imgMini: '/assets/img-mini/tinkerbell 3 small.jpg',
          imgGrande: '/assets/img-grande/tinkerbell 3 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tinkerbell 4',
          imgMini: '/assets/img-mini/tinkerbell 4 small.jpg',
          imgGrande: '/assets/img-grande/tinkerbell 4 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tinkerbell 5',
          imgMini: '/assets/img-mini/tinkerbell 5 small.jpg',
          imgGrande: '/assets/img-grande/tinkerbell 5 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tinkerbell 6 La Bestia De Nunca Jamás',
          imgMini: '/assets/img-mini/TinkerBell 6 la Bestia de Nunca Jamás small.jpg',
          imgGrande: '/assets/img-grande/TinkerBell 6 la Bestia de Nunca Jamás small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tio Drew',
          imgMini: '/assets/img-mini/tio drew small.jpg',
          imgGrande: '/assets/img-grande/tio drew small.jpg',
          sinopsis: '',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Tipos Malos',
          imgMini: '/assets/img-mini/tipos malos small.jpg',
          imgGrande: '/assets/img-grande/tipos malos small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Titanic',
          imgMini: '/assets/img-mini/titanic small.jpg',
          imgGrande: '/assets/img-grande/titanic small.jpg',
          sinopsis: '',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Toda Una Vida En Un Año',
          imgMini: '/assets/img-mini/toda una vida en un año small.jpg',
          imgGrande: '/assets/img-grande/toda una vida en un año small.jpg',
          sinopsis: '',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Tom y Jerry ',
          imgMini: '/assets/img-mini/TOM Y JERRY  small .jpg',
          imgGrande: '/assets/img-grande/TOM Y JERRY  small .jpg',
          sinopsis: '',
          genero: [comedia, infantil, familiar],
          tipo: pelicula
     },

     {
          nombre: 'Top Gun',
          imgMini: '/assets/img-mini/top gun small.jpg',
          imgGrande: '/assets/img-grande/top gun small.jpg',
          sinopsis: '',
          genero: [accion, romance, drama],
          tipo: pelicula
     },

     {
          nombre: 'Toy Story 4',
          imgMini: '/assets/img-mini/Toy-Story-4 small.jpg',
          imgGrande: '/assets/img-grande/Toy-Story-4 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Triple Frontera',
          imgMini: '/assets/img-mini/triple frontera small.jpg',
          imgGrande: '/assets/img-grande/triple frontera small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Trolls 1',
          imgMini: '/assets/img-mini/trolls 1 small.jpg',
          imgGrande: '/assets/img-grande/trolls 1 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Trolls 2',
          imgMini: '/assets/img-mini/trolls 2 small.jpg',
          imgGrande: '/assets/img-grande/trolls 2 small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Tunel',
          imgMini: '/assets/img-mini/tunel small.jpg',
          imgGrande: '/assets/img-grande/tunel small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Ultima Noche En Soho',
          imgMini: '/assets/img-mini/ultima noche en soho small.jpg',
          imgGrande: '/assets/img-grande/ultima noche en soho small.jpg',
          sinopsis: '',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Umma',
          imgMini: '/assets/img-mini/umma small.jpg',
          imgGrande: '/assets/img-grande/umma small.jpg',
          sinopsis: '',
          genero: [suspenso, terror],
          tipo: pelicula
     },

     {
          nombre: 'Un Amor Inquebrantable',
          imgMini: '/assets/img-mini/un amor inquebrantable small.jpg',
          imgGrande: '/assets/img-grande/un amor inquebrantable small.jpg',
          sinopsis: '',
          genero: [drama, religioso],
          tipo: pelicula
     },

     {
          nombre: 'Un Dia Mas Para Morir',
          imgMini: '/assets/img-mini/un dia mas para morir small.jpg',
          imgGrande: '/assets/img-grande/un dia mas para morir small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Un Espia Y Medio',
          imgMini: '/assets/img-mini/un espia y medio small.jpg',
          imgGrande: '/assets/img-grande/un espia y medio small.jpg',
          sinopsis: 'Después de reencontrarse con un incómodo amigo del instituto a través de Facebook, un apacible contable se ve arrastrado al mundo del espionaje internacional.',
          genero: [accion, comedia],
          tipo: pelicula
     },

     {
          nombre: 'Un Gran Dinosaurio',
          imgMini: '/assets/img-mini/un gran dinosaurio small.jpg',
          imgGrande: '/assets/img-grande/un gran dinosaurio small.jpg',
          sinopsis: 'En un mundo donde los dinosaurios y las personas cohabitan, un Apatosaurus llamado Arlo entabla amistad con un humano.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Un Hombre Lobo Entre Nosotros',
          imgMini: '/assets/img-mini/un hombre lobo entre nosotros small.jpg',
          imgGrande: '/assets/img-grande/un hombre lobo entre nosotros small.jpg',
          sinopsis: 'Una adaptación del videojuego en el cual los hombres lobo atacan una pequeña ciudad.',
          genero: [comedia, terror],
          tipo: pelicula
     },

     {
          nombre: 'Un Lugar En Silencio 1',
          imgMini: '/assets/img-mini/un lugar en silencio 1 small.jpg',
          imgGrande: '/assets/img-grande/un lugar en silencio 1 small.jpg',
          sinopsis: 'En un mundo postapocalíptico, una familia se ve obligada a vivir en silencio mientras se esconde de monstruos con un oído ultrasensible.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Un Lugar En Silencio 2',
          imgMini: '/assets/img-mini/un lugar en silencio 2 small.jpg',
          imgGrande: '/assets/img-grande/un lugar en silencio 2 small.jpg',
          sinopsis: 'Tras los sucesos ocurridos en casa, la familia Abbott se enfrenta ahora a los terrores del mundo exterior. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Un Milagro Inesperado',
          imgMini: '/assets/img-mini/un milagro inesperado small.jpg',
          imgGrande: '/assets/img-grande/un milagro inesperado small.jpg',
          sinopsis: 'Una familia acoge a una Urraca herida que marca una gran diferencia en sus vidas.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Un Principe En Nueva York 2',
          imgMini: '/assets/img-mini/un principe en nueva york 2 small.jpg',
          imgGrande: '/assets/img-grande/un principe en nueva york 2 small.jpg',
          sinopsis: 'El monarca africano Akeem se entera de que tiene un hijo en los Estados Unidos, por lo que debe regresar a América para conocer a este inesperado heredero y entablar una relación con él.',
          genero: [comedia],
          tipo: pelicula
     },

     {
          nombre: 'Un Rescate De Huevitos',
          imgMini: '/assets/img-mini/un rescate de huevitos small.jpg',
          imgGrande: '/assets/img-grande/un rescate de huevitos small.jpg',
          sinopsis: '',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Una Magica Navidad',
          imgMini: '/assets/img-mini/una magica navidad small.jpg',
          imgGrande: '/assets/img-grande/una magica navidad small.jpg',
          sinopsis: '',
          genero: [familiar, 'navidad'],
          tipo: pelicula
     },

     {
          nombre: 'Una Sombra En Mi Ojo',
          imgMini: '/assets/img-mini/una sombra en mi ojo small.jpg',
          imgGrande: '/assets/img-grande/una sombra en mi ojo small.jpg',
          sinopsis: 'El 21 de marzo de 1945, la Royal Air Force británica se embarcó en una misión para destruir la sede de la Gestapo en Copenhague. Accidentalmente, bombardeó una escuela y más de 120 personas murieron, 86 de las cuales eran niños.',
          genero: [drama, belico],
          tipo: pelicula
     },

     {
          nombre: 'Uncharted',
          imgMini: '/assets/img-mini/uncharted small.jpg',
          imgGrande: '/assets/img-grande/uncharted small.jpg',
          sinopsis: 'Una precuela de la saga de videojuegos Uncharted, donde descubrimos cómo Drake llego a conocer y hacerse amigo de Sully.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Unidos',
          imgMini: '/assets/img-mini/unidos small.jpg',
          imgGrande: '/assets/img-grande/unidos small.jpg',
          sinopsis: 'En un mundo de fantasía suburbano, dos hermanos elfos adolescentes se embarcan en una búsqueda para descubrir si todavía hay magia en el mundo.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Vanguardia',
          imgMini: '/assets/img-mini/vanguardia small.jpg',
          imgGrande: '/assets/img-grande/vanguardia small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Venganza A Golpes',
          imgMini: '/assets/img-mini/venganza a golpes small.jpg',
          imgGrande: '/assets/img-grande/venganza a golpes small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Venganza Implacable',
          imgMini: '/assets/img-mini/venganza implacable small.jpg',
          imgGrande: '/assets/img-grande/venganza implacable small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Venganza',
          imgMini: '/assets/img-mini/venganza small.jpg',
          imgGrande: '/assets/img-grande/venganza small.jpg',
          sinopsis: '',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Venom 1',
          imgMini: '/assets/img-mini/venom 1 small.jpg',
          imgGrande: '/assets/img-grande/venom 1 small.jpg',
          sinopsis: 'Cuando Eddie Brock adquiere las capacidades de un simbionte, tendrá que liberar a su alter ego Venom para salvar su vida.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Venom 2',
          imgMini: '/assets/img-mini/venom 2 small.jpg',
          imgGrande: '/assets/img-grande/venom 2 small.jpg',
          sinopsis: 'Eddie Brock intenta relanzar su carrera entrevistando al asesino en serie Cletus Kasady, que se convierte en el huésped del simbionte Carnage y escapa de la cárcel tras una ejecución fallida.',
          genero: [accion, superheroes],
          tipo: pelicula
     },

     {
          nombre: 'Viejos',
          imgMini: '/assets/img-mini/viejos small.jpg',
          imgGrande: '/assets/img-grande/viejos small.jpg',
          sinopsis: 'Una familia de vacaciones descubre que la playa donde se están relajando por unas horas de alguna manera está causando que todos sus miembros envejezcan rápidamente.',
          genero: [suspenso],
          tipo: pelicula
     },

     {
          nombre: 'Vivo',
          imgMini: '/assets/img-mini/vivo small.jpg',
          imgGrande: '/assets/img-grande/vivo small.jpg',
          sinopsis: 'Aventura musical animada que narra las andanzas de Vivo, un kinkajú dotado de un brillante talento musical que emprende la aventura de su vida para entregarle una canción al antiguo amor de su adorado dueño.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Wonder',
          imgMini: '/assets/img-mini/wonder small.jpg',
          imgGrande: '/assets/img-grande/wonder small.jpg',
          sinopsis: 'Cuenta la historia de Auggie Pullman, un niño con una deformidad facial que entra en el quinto grado, asistiendo a una escuela primaria convencional por primera vez.',
          genero: [drama],
          tipo: pelicula
     },

     {
          nombre: 'Xtremo',
          imgMini: '/assets/img-mini/xtremo small.jpg',
          imgGrande: '/assets/img-grande/xtremo small.jpg',
          sinopsis: 'Dos años después de los asesinatos de su hijo y de su padre, un asesino a sueldo jubilado pone en marcha su plan de venganza, compuesto cuidadosamente, contra el asesino: su propio hermano.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Yaksha',
          imgMini: '/assets/img-mini/yaksha small.jpg',
          imgGrande: '/assets/img-grande/yaksha small.jpg',
          sinopsis: 'Apodado en honor a un espíritu devorador de humanos, el despiadado líder de un equipo de operaciones encubiertas en el extranjero emprende una peligrosa misión en una ciudad plagada de espías.',
          genero: [accion],
          tipo: pelicula
     },

     {
          nombre: 'Yo Antes De Ti',
          imgMini: '/assets/img-mini/yo antes de ti small.jpg',
          imgGrande: '/assets/img-grande/yo antes de ti small.jpg',
          sinopsis: 'Una chica de un pequeño pueblo forma un vínculo improbable con un hombre, que acaba de quedarse paralítico, al que cuida.',
          genero: [drama, romance],
          tipo: pelicula
     },

     {
          nombre: 'Zapatos Rojos',
          imgMini: '/assets/img-mini/zapatos rojos small.jpg',
          imgGrande: '/assets/img-grande/zapatos rojos small.jpg',
          sinopsis: 'Príncipes que han sido convertidos en enanos buscan el zapato rojo de una chica para poder romper el hechizo, que suena más fácil de lo que es. Una parodia con un giro.',
          genero: [animacion, infantil],
          tipo: pelicula
     },

     {
          nombre: 'Zona De Riesgo',
          imgMini: '/assets/img-mini/zona de riesgo small.jpg',
          imgGrande: '/assets/img-grande/zona de riesgo small.jpg',
          sinopsis: 'En un mundo futuro, el piloto de drones Harp es enviado a una peligrosa zona militarizada, donde tendrá que trabajar a las órdenes de Leo, un androide encargado de encontrar un dispositivo apocalíptico antes que los insurgentes.',
          genero: [accion, ciencia],
          tipo: pelicula
     },

     {
          nombre: 'Zootopia',
          imgMini: '/assets/img-mini/zootopia small.jpg',
          imgGrande: '/assets/img-grande/zootopia small.jpg',
          sinopsis: 'La metrópoli Zootopía es una ciudad de mamíferos, donde muchos animales viven y se desarrollan. Allí, la optimista agente Judy Hopps se convierte en la primera conejita de un cuerpo policial compuesto por animales duros y enormes. Judy está decidida a demostrar su valentía y se mete en un caso con Nick Wilde, un zorro parlanchín y estafador.',
          genero: [animacion, infantil],
          tipo: pelicula
     },
]