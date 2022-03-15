// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>DÍA DE PARTIDO</h1>\
        <img src='media/img/partido/inipartido.jpg' class='float_right'>\
        <p>Es hoy cuando por fin vas a poder ver un partido de tu equipo favorito, y no vas a ir solo te acompaña tu novia\
        la cual no le gusta el futbol pero va por ti(valora eso), os habeis pues de acuerdo para que quien conduzca\
        sea ella.</p>\
        \
        <p>El partido es a las 21:00H pero antes ireis al hotel saldréis a dar una vuelta y despues 'con tiempo' valorareis cual es la \
         mejor forma para ir.</br>\
         Teneis que quedar a una hora para salir de viaje y tienes dos opciones: \</p>\
         \
        <p class='sticky'><a href='./madrugar'>Madrugar y quedar a las 8:00 a.m</a></p>\
        \
        \<p class='sticky'><a href='./dormir'>Dormir y quedar a las 14:00 a.m</a></p>",
        {
            actions: {
                'madrugar': "<p>Es la mejor opción, gracias a quedar a las 8:00 podreis llegar a \
                    madrid mucho antes... <a href='sigue'>sigamos...</a></p>",
                'dormir': "<p>En tu cabeza parecia buena idea... pero al final te duermes, no habías hecho la maleta aún, te tienes que duchar,\
                    vestir, asear.... total al final salís casi a las 17:00... prácticamente has periddo el dia en Madrid y llegas muy muy justo al partido,\
                    como consecuencia de salir tarde puede ocurrir lo siguiente al llegar al estadio : </p>\
                    <p class='transient'><a href='vacio'><i>APARCAS\
                    FACIL</i></a> o... <a href='asszzz'><i> REZAS POR NO TERMINAR EN LA M50</i></a></p>",
            }
        }
    ),


    vacio: new undum.SimpleSituation(
        "<h1>ESTARÁ VACIO¿?</h1>\
        <img src='media/img/partido/lleno.jpg' class='float_right'>\
        <p>JA JA JA igual la próxima vez en uno de tus sueños.... te toca... <a href='asszzz'>¿DAR VUELTAS?</a></p>"
    ),

    aaszzz: new undum.SimpleSituation(
        "<h1>APARCARAS¿?</h1>\
        <img src='media/img/partido/corre.jpg' class='float_right'>\
        <p>EFECTIVAMENTE TERMINAS DANDO VUELTAS Al final después de 20 minutos dando vueltas encuentras un sitio a 3Km del estadio... te toca <i>!CORRER!</i> será mejor que empezemos\
        la historio desde el <a href='start'>principio...</a></p>"
    ),

    sigue: new undum.SimpleSituation(
        "<h1>DE CAMINO AL ESTADIO</h1>\
        <img src='media/img/partido/carretera.jpg' class='float_right'>\
        <p class='transient'>Se nos echa un poco la hora en cima... y está reservada una mesa para comer a las 14:30H <i>puedes decirle a tu novia que... vaya por la</i><a href='r4'> R4(peaje)</a>\
        o... que siga por la <a href='a4'>A4</a>\
        </p>"
    ),


    a4: new undum.SimpleSituation(
        "<h1 class='transient'>MALA IDEA</h1>\
        <img src='media/img/partido/entradamadrid.jpg' class='float_right transient'>\
        <p class='transient'>Al final os veis metidos en un atasco enorme ya que es viernes y hay mucho tráfico... <i>¿Que otra alternativa hay?</i><a href='r4'>HHmmm</a></p>"
    ),

    r4: new undum.SimpleSituation(
        "<h1 class='transient'>Menos mal...</h1>\
        <img src='media/img/partido/r4.jpg' class='float_right transient' width='210' height='210'>\
        <p class='transient'>Pensabas que los 5$ que cuesta el peaje no los valia no?... pues gracias a eso llegais a la hora de comer... alguien a dichoooooo <a href='comida'>COMIDA?</a></p>"
    ),

    comida: new undum.SimpleSituation(
        "<h1 class='transient'>Ahora si!!</h1>\
        <img src='media/img/partido/comida.jpg' class='float_right transient' width='210' height='210'>\
        <p class='transient'>Te ponen delante un buen entrecot al punto.. con su grasilla... pareces un crio pequeño con una gominola delante... con tu copa de vino\
        increible... pero tengo que decirte que en la comida va a ocurrir algo que decidirá lo que pase desde ese momento... es muy importante que te fijes en todo...\
        y pienses... de repente tu novia te ve palido... mareado... y no sabe si ha podido ser el <a href='no'> vino </a> o la <a href='no'> carne </a> u <a href='si'> otra cosa</a>\
        pero lo que está claro es que algo te ha sentado fatal... y no tienes más remedio que irte a la habitación</p>"
    ),

    no: new undum.SimpleSituation(
        "<h1 class='transient'>NO PUEDE SER...</h1>\
       <p class='transient'>Te encuentras muy mal pero no ha sido por esto... <a href='comida'>que sera?</a></p>"
    ),

    si: new undum.SimpleSituation(
        "<h1 class='transient'>Efectivamente...</h1>\
        <img src='media/img/partido/chili.PNG' class='float_right transient' width='210' height='210'>\
       <p class='transient'>Pues si... resulta que ha sido ese maldito chili el causante de todo, en ese moemento te acuerdas que no te sienta muy bien el picante y enfin... total que al final\
       os teneis que quedar en la habitación hasta la hora del <a href='partido'>partido</a></p>"
    ),

    partido: new undum.SimpleSituation(
        "<h1 class='transient'>EN EL PARTIDO POR FIN!!</h1>\
        <img src='media/img/partido/grada.jpg' class='float_right transient'>\
        <p class='transient'>Después de todo lo pasado parece mentira... pero estais alli habeis llegado a tiempo ya que el Hotel, siendo muy previsores\
        lo cogisteis al lado del estadio por lo que incluso el paseo que os habeis dado te ha venido bien para despejarte\
        por lo que ya solo te queda disfrutar de tu Atleti!</p>\
        \
        <p>El partido llega al descanso y te entra hambre, algo raro pero no te importa... por lo que decides ir a por <a href='comida2'> comida </a> al regresar ya casi que te lo has comido todo\
        lo tuyo más lo de tu novia, que lo único que se ha pedido te has comido tu la mitad, para vaki para!, enfin que tu sigues a lo tuyo y de buenas a primeras como era lógico \
        te entran unas ganas enormes de ir al baño.. pero es el min 80, y van 1-1 por lo que te encuentras en una situación dramática y no sabes si : </p>\
         \
        <p class='sticky'>Ir al<a href='./baoxx'> baño </a></p>\
        \
        <p class='sticky'><a href='./verf'>Aguantar</a> y ver el futbol como solo un Atlético aguantaría</p>",
        {
            actions: {
                'baoxx':
                    "<h1 class='transient'>POR LOS PELOS</h1>\
                    <p>Llegas por los pelos... pero en mitad de todo se escucha <i>¡GOOOOOOOOOOOOOOL! DEEEEEEE JOOOOOAAAAAOOOOOOOOOO FELIIIIIIIXX!!! </i> no te lo puedes creer\
                    y sales corriendo, 'sin olvidor que estabas haciendo' para <a href='finpartido'>seguir viendo</a> el partido</p>",
                'verf':
                    "<h1 class='transient'>MUY MUY MALA IDEA</h1>\
                    <p>En tu cabeza sonaba bien... pero al final no tienes más remedio que ir al<a href='./baoxx'> WC </a> y lo peor de todo es que te vas en el min 85...</p>",
            }
        }
    ),

    finpartido: new undum.SimpleSituation(
        "<h1 class='transient'>NO TE LO PODIAS CREER</h1>\
        <img src='media/img/partido/fin.jpg' class='float_right transient' width='210' height='210'>\
       <p class='transient'>Llegas y efectivamente el Atletico había ganado 2-1 y el árbitro había pitado el final del encuentro... sin palabras... te quedas con una cara que tu novia\
       no es capaz de reconocerte y solo te queda alegrarte por el equipo y irte a dormir...<a href='hotel'>zzzzzzzz</a></p>"
    ),


    hotel: new undum.SimpleSituation(
        "<h1 class='transient'>AL DIA SIGUIENTE</h1>\
        <img src='media/img/partido/hotel.jpg' class='float_right transient' width='210' height='210'>\
       <p class='transient'>Al día siguiente despues de desayunar te encuentras con el que esperas sea tu ultimo problema... y es que te has retrasado al dejar la habitación\
       incluso pidiendo el 'late checkout' y no sabes si te lo cobraran o no... en mitad del viaje de vuelta recibes una <a href='fin'>llamada</a> y no puedes creer lo que pasa...</p>"
    ),

    fin: new undum.SimpleSituation(
        "<h1 class='transient'>FIN</h1>\
        <img src='media/img/partido/casa.jpg' class='float_right transient' width='210' height='210'>\
       <p class='transient'>En mitad del viaje te llaman para decirte que finalmente no te cargarán la 2º noche de hotel y por fin respiras aliviado... al llegar a casa ni tu mismo te crees\
       lo que te ha podido pasar en un dia y medio... pero como siempre... por dentro piensas que por tu Atleti lo volverias a pasar mil y una vez más.</p>"
    ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
