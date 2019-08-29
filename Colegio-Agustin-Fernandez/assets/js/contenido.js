function Inicio() {
    return `
        <div class="botones right">
            <button onClick="imprimirContenido('1998')">1998 - 2005</button>
        </div>

        <div class="main">
        <div id="titulo" style="width: 100%;">
            <h1 class="fs-40" style="text-align: center;">Colegio Agustín Fernández</h1>
        </div>

        <div id="contenido" style="width: 100%;">
            <p class="fs-30">Hoy 28 de Agosto del año 2019 el Colegio Agustín Fernández cumple 90 años</p>
            <p class="fs-30">Y 30 años de la jornada nocturna</p>
            <br>
            <p class="fs-30">90 años de esfuerzo para generar un grandioso futuro para nosotros sus estudiantes</p>
            <br>
            <p class="fs-25">Esta página tiene como objetivo presentar una linea temporal de el colegio</p>
            <p class="fs-30"><strong>Agustín Fernández</strong></p>
        </div>

    </div>
    `
}

function años1998_2005() {
    return `
        <div class="botones space">
            <button onClick="imprimirContenido('Inicio')">Inicio</button>
            <button onClick="imprimirContenido('2006')">2006 - 2010</button>
        </div>

        <div class="bloqueContenido">
            <div class="contenido">
                <div class="contenedor">
                    <h1 class="center fs-40">1998</h1>
                    <p class="center fs-20">Iniciación de la jornada nocturna con base en el Decreto 3011 de 1997 del 19 de diciembre de 1997.</p>
                </div>
            </div>

            <div class="contenido">
                <div class="contenedor">
                    <h1 class="center fs-40">2002</h1>
                    <p class="center fs-20 noMarginB">Programa Nacional de Alfabetización y Educación Básica y Media de Jóvenes y Adultos propuesto por el MEN</p>
                    <p class="center fs-20 noMarginT">Primera Promoción Bachilleres jornada Nocturna</p>
                </div>
            </div>

            <div class="contenido">
                <div class="contenedor">

                    <h1 class="center fs-40">2003</h1>
                    <p class="center fs-20">Proyecto de caminatas ecológicas con el grupo 'SALSIPUEDES' Conferencias sobre salud e Higiene</p>
                </div>
            </div>

            <div class="contenido">
                <div class="contenedor">
                    <h1 class="center fs-40">2004</h1>
                    <p class="center fs-20">Iniciación Festival de Talentos, participan las tres sedes y colegios invitados.</p>
                    <div class="imagen">
                        <img onclick="popup('assets/images/2004.png')" src="assets/images/2004.png" alt="">
                    </div>
                </div>
            </div>

            <div class="contenido">
                <div class="contenedor">
                    <h1 class="center fs-40">2005</h1>
                    <p class="center fs-20">Asistencia e implementación del curso de capacitación de emprendimiento empresarial.</p>
                </div>
            </div>
    </div>
    `
}

function años2006_2010() {
    return `
        <div class="botones space">
            <button onClick="imprimirContenido('1998')">1998 - 2005</button>
            <button onClick="imprimirContenido('2011')">2011 - 2015</button>
        </div>

        <div class="bloqueContenido">
        <div class="contenido">
            <div class="contenedor2">
                <h1 class="center fs-40">2006</h1>
                <p class="center fs-20 noMarginB">Desarrollo del proyecto emprendimiento empresarial en las sedes B y C con los estudiantes de último grado en cumplimiento de las horas de servicio social.</p>
                <p class="center fs-20 noMargin">Implementación de la catedra de Emprendimiento
                <p class="center fs-20 noMarginT">Muestra empresarial de propuestas de emprendimiento Integración de la jornada nocturna por ciclos hasta ciclo 4</p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor2">
                <h1 class="center fs-40">2007</h1>
                <p class="center fs-20 noMarginB">Elección de personero estudiantil de la jornada nocturna</p>
                <p class="center fs-20 noMarginT">Creación de la asignatura Lúdica, como intensificación del interés de los estudiantes.</p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor2">
                <h1 class="center fs-40">2008</h1>
                <p class="center fs-20 noMarginB">Semestralización de la jornada nocturna con los ciclos uno hasta seis.</p>
                <p class="center fs-20 noMargin">Iniciación huerta escolar de la jornada nocturna y recuperación del talud de la montaña, sembrado pasto y árboles.</p>
                <p class="center fs-20 noMargin">Participación Foro Distrital con el proyecto de emprendimientoempresarial Colegio Las Esclavas.</p>
                <p class="center fs-20 noMargin">Visita al Museo de ciencia naturales de la UNAL, proyecto ciudadescuela</p>
                <p class="center fs-20 noMarginT">Elección de contralor de la jornada nocturna</p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor2">
                <h1 class="center fs-40">2009</h1>
                <p class="center fs-20 noMarginB">Asistencia a capacitación del SENA para la creación de microempresas</p>
                <p class="center fs-20 noMargin">Visita a la exposición de BODY</p>
                <p class="center fs-20 noMarginT">Iniciación de las jornadas de la ciencia y muestra de laboresrealizadas en la asignatura de artes.</p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor2">
                <h1 class="center fs-40">2010</h1>
                <p class="center fs-20 noMarginB">Salida ecológica a la sabana de Bogotá, Tabio (aguas termales Tenjo y Rio Bogotá.</p>
                <p class="center fs-20 noMargin">Complemento a la asignatura de Educación ambiental.</p>
                <p class="center fs-20 noMargin">Presentación de etnias indígenas con el representante del cabildo deSuba</p>
                <p class="center fs-20 noMarginT">Participación en la carrera atlética de fundación de Bogotá.</p>
            </div>
        </div>
    </div>
    `
}

function años2011_2015() {
    return `
        <div class="botones space">
            <button onClick="imprimirContenido('2006')">2006 - 2010</button>
            <button onClick="imprimirContenido('2016')">2016 - 2019</button>
        </div>
    
        <div id="contenedorPopup" class="oculto">
        <div id="imagenPopup">

        </div>
    </div>

    <div class="bloqueContenido">
        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2011</h1>
                <p class="center fs-20 noMarginB">Visita al Jardín Botánico José Celestino Mutis</p>
                <p class="center fs-20 noMargin">Festival de Talentos, con la participan las tres sedes y colegios
                    invitados.</p>
                <p class="center fs-20 noMarginT">Jornada por la paz</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2011.png')" src="assets/images/2011.png" alt="">
                </div>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2012</h1>
                <p class="center fs-20 noMarginB">Participación en el premio Calidad de la Educación: Modelo de Excelencia para la Gestión Escolar</p>
                <p class="center fs-20 noMargin">Propuesta de implementar el Modelo Didáctico Interestructurante.</p>
                <p class="center fs-20 noMarginT">Revisión del PEI del Colegio Agustín Fernández</p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2013</h1>
                <p class="center fs-20 noMarginT">Salida pedagógica al aula ambiental y ecológica de Soratama y al parque mirador de los nevados en suba, con acompañamiento de la Secretaría del Medio Ambiente.</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2013 Salida pedagogica.png')" src="assets/images/2013 Salida pedagogica.png" alt="">
                </div>
                <p class="center fs-20 noMargin">Realización pruebas tipo ICFES, con simulacro</p>
                <p class="center fs-20 noMargin">Iniciación del programa de refrigerio para la jornada nocturna</p>
                <p class="center fs-20 noMargin">Participación en Evento de música clásica con canon de la jornada
                    nocturna en Paipa</p>
                <p class="center fs-20 noMargin">Boyacá y Belencito</p>
                <p class="center fs-20 noMarginT">Feria de emprendimiento</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2013 Feria de emprendimiento.jpg')" src="assets/images/2013 Feria de emprendimiento.jpg" alt="">
                </div>
                <p class="center fs-20">Salida a termales de Tabio</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2013 termales 1.JPG')" src="assets/images/2013 termales 1.JPG" alt="">
                    <img onclick="popup('assets/images/2013 termales 2.JPG')" src="assets/images/2013 termales 2.JPG" alt="">
                </div>
                <p class="center fs-20">Aula ambiental en Soratama</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2013 Aula ambiental Soratama.JPG')" src="assets/images/2013 Aula ambiental Soratama.JPG" alt="">
                    <img onclick="popup('assets/images/2013 Aula ambiental Soratama 2.JPG')" src="assets/images/2013 Aula ambiental Soratama 2.JPG" alt="">
                </div>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2014</h1>
                <p class="center fs-20 noMarginB">Encuesta de caracterización de los estudiantes jornada nocturna</p>
                <p class="center fs-20 noMargin">Conferencias sobre Mi proyecto de vida</p>
                <p class="center fs-20 noMargin">Participaciones docentes en proyecto LEO de la UNAL</p>
                <p class="center fs-20 noMargin">Implementación de planes de mejoramiento</p>
                <p class="center fs-20 noMargin">Se terminó servicio de orientación y biblioteca para la jornada
                    nocturna</p>
                <p class="center fs-20 noMarginT">Olimpiadas deportivas por mundial de futbol en Brasil</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2014 Olimpiadas.png')" src="assets/images/2014 Olimpiadas.png" alt="">
                </div>
                <p class="center fs-20 noMarginB">Se retira la orientadora Luz Alba Espitia</p>
                <p class="center fs-20 noMarginT">Participación en Carrera Atlética CAF</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2014 Carrera atlética.png')" src="assets/images/2014 Carrera atlética.png" alt="">
                    <img onclick="popup('assets/images/2014 Carrera atlética 2.JPG')" src="assets/images/2014 Carrera atlética 2.JPG" alt="">
                </div>
                <p class="center fs-20">Festival de la risa</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2014 Festival de la risa.JPG')" src="assets/images/2014 Festival de la risa.JPG" alt="">
                </div>
                <p class="center fs-20">Festival de talentos</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2014 Festival de talentos.JPG')" src="assets/images/2014 Festival de talentos.JPG" alt="">
                </div>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2015</h1>
                <p class="center fs-20 noMarginB">Inicio de reforma de flexibilización curricular con 9 asignaturas,
                    establecimiento de tres bloques de clase cada uno de 70 minutos</p>
                <p class="center fs-20 noMargin">Primera semana del Buen Trato</p>
                <p class="center fs-20 noMarginT">Emisión Periódico el Búho</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2015 Buho.png')" src="assets/images/2015 Buho.png" alt="">
                </div>
                <p class="center fs-20 noMarginB">Diseño del Edublog para la Jornada nocturna: <a target="_blank" href="https://ticagustinfernandez.blogspot.com">Link a la información</a></p>
                <p class="center fs-20 noMargin">Diseño de la página Web para la Jornada Nocturna: <a target="_blank" href="https://glagarbe.wixsite.com/agustinfernandezjn">Link a la información</a>
                </p>
                <p class="center fs-20 noMargin">Feria de la Ciencia y la Tecnología</p>
                <p class="center fs-20 noMargin">Actualización docente en el manejo educativo de Tablet por la SED.</p>
                <p class="center fs-20 noMarginT">Recorrido navideño con los estudiantes parque Usaquén, Nacional y
                    Plaza de Bolivar.</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2015 recorrido navideño.png')" src="assets/images/2015 recorrido navideño.png" alt="">
                </div>
            </div>
        </div>
    </div>
    `
}

function años2016_2019() {
    return `
        <div class="botones space">
            <button onClick="imprimirContenido('2011')">2011 - 2015</button>
            <button onClick="imprimirContenido('Inicio')">Inicio</button>
        </div>

        <div id="contenedorPopup" class="oculto">
        <div id="imagenPopup">

        </div>
    </div>

    <div class="bloqueContenido">
        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2016</h1>
                <p class="center fs-20 noMarginB">Continuación de reforma curricular, integración de asignaturas y áreas, con 4 materias, reorganización de las asignaturas.</p>
                <p class="center fs-20 noMargin">Jornada de Integración de todos los docentes del CAF en Parque Simón Bolívar</p>
                <p class="center fs-20 noMargin">Participación en el Dia E propuesto por el MEN</p>
                <p class="center fs-20 noMargin">Salida al centro histórico de Bogotá</p>
                <p class="center fs-20 noMargin">Segunda semana del buen trato.</p>
                <p class="center fs-20 noMargin">Continuación de reforma curricular, integración de asignaturas y áreas, con 4 materias,</p>
                <p class="center fs-20 noMargin">reorganización de las asignaturas.</p>
                <p class="center fs-20 noMargin">Gran Jornada de Integración de los docentes del CAF en Parque Simón Bolívar</p>
                <p class="center fs-20 noMargin">Segunda semana del buen trato.</p>
                <p class="center fs-20 noMargin">Proyecto Interdisciplinar: “Estudio químico, físico, ecológico y social de Artefactos de uso cotidiano.”</p>
                <p class="center fs-20 noMargin">Celebración día de la Tierra y día del Idioma.</p>
                <p class="center fs-20">Celebración día de la Ciencia y la Tecnología:</p>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/nBa3OAb5W5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="center fs-20">La Jornada Nocturna Comparte su experiencia con el uso de tecnología con expertos Coreanos. Invitación Ministerio de Educación Nacional.</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2016 expertos coreanos.png')" src="assets/images/2016 expertos coreanos.png" alt="">
                </div>
                <p class="center fs-20">Presentación estudiantil: “Gran encuentro Folclórico cultural de las regiones de Colombia” <a href="https://ticagustinfernandez.blogspot.com/2016/10/encuentro-folclorico-cultural-de-las.html" target="_blank">Link a la información</a></p>
                <p class="center fs-20">Exposición de arte Jornada Nocturna:</p>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/NiQmYqjs2Uw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p class="center fs-20"><a href="https://ticagustinfernandez.blogspot.com/2016/11/el-periodico-escolar-fernandista_2.html" target="_blank">Periódico Digital Fernandista</a></p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2017</h1>
                <p class="center fs-20 noMarginB">Evaluación de las reformas de flexibilización curricular</p>
                <p class="center fs-20 noMargin">Tercera semana del buen trato</p>
                <p class="center fs-20 noMargin">Diseño del Blog de la Institución educativa: <a href="http://rectoriagustinfernandez.blogspot.com/" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMargin">Proyecto Interdisciplinar: “Un viaje fascinante al interior de los alimentos”: <a href="https://ticagustinfernandez.blogspot.com/2017/02/proyecto-interdisciplinario.html" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMargin">Jornada Nocturna presente en Virtual Educa Colombia 2017: <a href="https://ticagustinfernandez.blogspot.com/2017/07/colegio-agustin-fernandez-presenteen_" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMargin">Aula Virtual con la Universidad Autónoma de México para el fortalecimiento de la Ciencia en la Jornada Nocturna: <a href="https://agustinfernandezied.blogspot.com/p/blog-page.html" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMargin">Gran feria del Conocimiento: <a href="https://ticagustinfernandez.blogspot.com/2017/05/la-feria-del-conocimiento-un-espacio.html" target="_blank">Link a la info</a></p>
                <p class="center fs-20 noMarginT">Manual de convivencia para la jornada nocturna</p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2018</h1>
                <p class="center fs-20 noMargin">Segunda Reforma curricular, reintegración de materias y asignaturas, campos de pensamiento, 5 materias.</p>
                <p class="center fs-20 noMargin">Cuarta semana del buen trato</p>
                <p class="center fs-20 noMargin">Segundo manual de convivencia exclusivo para la jornada nocturna.</p>
                <p class="center fs-20 noMargin">Proyecto Interdisciplinar: “Bogotá Mi Ciudad” Practicas Inclusivas con Realidad Aumentada: <a href="https://agustinfernandezied.blogspot.com/2018/10/proyecto-interdisciplinar-bogota-mi.html" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMargin">Segunda Feria del Conocimiento Fernandista: <a href="https://galeriagustinfernandez.blogspot.com/2018/10/ii-feria-del-conocimientofernandista.html" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMargin">Docentes Fernandistas presentes en EdukaTIC Cali: <a href="https://ticagustinfernandez.blogspot.com/2018/06/docentes-fernandistas-presentes-ene.html" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMargin">Proyecto seleccionado por SED Bogotá como experiencia exitosa: <a href="https://agustinfernandezied.blogspot.com/2018/11/proyecto-seleccionado-por-critertecy.html" target="_blank">Link a la información</a></p>
                <p class="center fs-20 noMarginT">Invitación a presentar el proyecto en el evento Maestros en Travesía un Viaje heroico: <a href="https://agustinfernandezied.blogspot.com/2018/11/maestros-en-travesia-un-viajeheroico.html" target="_blank">Link a la información</a></p>
            </div>
        </div>

        <div class="contenido">
            <div class="contenedor">
                <h1 class="center fs-40">2019</h1>
                <p class="center fs-20">Celebración del Bicentenario</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2019 Celebración del Bicentenario.png')" src="assets/images/2019 Celebración del Bicentenario.png" alt="">
                </div>
                <p class="center fs-20">Participación Día Olímpico</p>
                <div class="imagen">
                    <img onclick="popup('assets/images/2019 Día olimpico.png')" src="assets/images/2019 Día olimpico.png" alt="">
                </div>
            </div>
        </div>
    </div>
    `
}
