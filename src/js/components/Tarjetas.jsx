import React from "react";

import Card from "./Card";


function Tarjetas() {

    return (
        <div className="row gy-2 gx-3">
            <div className="col">
                <Card
                titulo="Underworld:"
                subtitulo="Underworld (2003)"
                descripcion="Una Ajusticiadora vigilante llamada Selene intenta descubrir la razón por la que los Licanos quieren encontrar un misterioso hombre llamado Michael Corvin. En el proceso, ella descubre siglos de mentiras y engaños dentro de su propio Círculo, y tiene que decidir entre su obligación a los Vampiros y sus emociones mientras se enamora de Michael."
                img="https://es.web.img3.acsta.net/pictures/14/04/28/11/34/013739.jpg" urlButton="https://www.imdb.com/es/title/tt0320691/" />
            </div>
            <div className="col">
                <Card
                titulo="Underworld:"
                subtitulo="Evolution (2006)"
                descripcion="Evolution sigue Selene y Michael Corvin en su lucha contra el primer Vampiro, Marcus Corvinus, quien quiere liberar a su hermano gemelo William, un Hombre Lobo muy poderoso."
                img="https://es.web.img3.acsta.net/pictures/14/11/03/09/01/009565.jpg" urlButton="https://www.justwatch.com/es/pelicula/underworld-evolution"/>
            </div>
            <div className="col">
                <Card
                titulo="Underworld:"
                subtitulo="Rise of the Lycans (2009)"
                descripcion="Una precuela establece seis siglos antes de los acontecimientos de Underworld, Rise of the Lycans detalla el romance entre el Licano esclavo Lucian y la princesa Vampira Sonja. Su lucha lleva a una guerra entre los Vampiros y los Licanos que dura varios siglos."
                img="https://www.ecartelera.com/images/noticias/fotos/3000/3067/1.jpg" urlButton="https://cue.cuevana3.nu/peliculas-online/96713/inframundo-3-la-rebelion-de-los-lycans-online-gratis-en-cuevana/"/>
            </div>
            <div className="col">
                <Card
                titulo="Underworld:"
                subtitulo="Awakening (2012)"
                descripcion="Doce años después de haber sido capturado por soldados humanos, Selene despierta para encontrar que los seres humanos se han casi exterminado los especies Vampiro y Licano. Para detener los Licanos de usar a su hija, Eve, como un medio para mejorar la fuerza de Licanos, Selene, con la ayuda de David y Detective Sebastian destruye la poderosa corporación biotecnológica, Antigen."
                img="https://es.web.img3.acsta.net/medias/nmedia/18/86/27/42/19995177.jpg" urlButton="https://cue.cuevana3.nu/peliculas-online/97905/inframundo-4-el-despertar-online-gratis-en-cuevana/"/>
            </div>
            <div className="col">
                <Card
                titulo="Underworld:"
                subtitulo="Guerras de sangre (2016)"
                descripcion="En esta nueva historia, Selene tendrá que luchar tanto con el clan de los Lycans como contra los vampiros que la traicionaron. Con David y su padre Thomas como sus únicos aliados, deberá detener la eterna guerra entre lycans y vampiros, aunque esto signifique que tenga que hacer el último sacrifcio."
                img="https://i.redd.it/ih3mc0bhu9aa1.jpg" urlButton="https://www.peelink2.com/2017/01/5621-ver-pelicula-inframundo-5-guerras-sangre-2017.html"/>
            </div>
                
            
        </div>
    )
}

export default Tarjetas;