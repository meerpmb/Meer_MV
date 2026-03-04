import { useState } from "react";
import "./AplicacionArcGIS.css";
import TarjetaEjemplo from "./Cards/cards.tsx";

interface AplicacionArcGISProps {
  // el renderizador condicional usaría este titulo para discernir que aplicación es y mostrar la que le toca
  //  donde le toca. Hemos puesto que el titulo solo sea Experience Builder | Story Maps
  titulo: "Experience Builder" | "Story Maps";
  descripcion: string;
  enlace: string;
  direccionEnlace: string;
}
// props puede realmente llamarse de cualquier cosa
function AplicacionArcGIS(props: AplicacionArcGISProps) {
  // Aquí entre la función y el return codificamos JS para meter el renderizador

  // Función de estado (pone sola el import)
  let [estadoBoton, setEstadoBoton] = useState(false)


  let ejemplosRenderizados;
  // necesito el botón con un estado T/F si está clikado y tal, creo la variable feura de la función porque esto 
  // el if lo tiene que escuchar para ver que cuando es Exp. Builder y botón true muestre las tarjetas correctas 


  // solo con && estadoBoton lo entiende como true
  if (props.titulo === "Experience Builder" && estadoBoton) {
    ejemplosRenderizados = (
      // !!! ES NECESARIO METERLO EN UN DIV VACÍO DE ESOS, PORQUE LA FUNCIÓN SE LLAMA ABAJO, Y SI NO LO METES EN UN 
      // DIV, LLAMARÍA 3 ELEMENTOS DIFERENTES Y NO 1 COMO LE GUSTA A TYPESCRIPT
      <>
        <TarjetaEjemplo
          urlImagen={
            "https://static.wikia.nocookie.net/path-of-titans/images/3/3d/SergiMod1.jpg.jpg/revision/latest?cb=20241101192933"
          }
          titulo={"Parasaurolophus - Experience Builder"}
          contenido={
            "Los Parasaurolophus son dinosaurios hervivoros que caminaban tanto de manera bípeda como cuadrúpeda, vivieron en el Cretacico Superior, muy reconocibles por su cresta nasal"
          }
          enlace={"https://es.wikipedia.org/wiki/Parasaurolophus"}
        ></TarjetaEjemplo>
        <TarjetaEjemplo
          urlImagen={
            "https://cdn.create.vista.com/api/media/small/108667340/stock-photo-triceratops-dinosaur-3d-render"
          }
          titulo={"Triceratops - Experience Builder"}
          contenido={
            "Los Triceratops son dinosaurios hervivoros de finales del Cretacico, muy reconocible gracias a sus tres cuernos"
          }
          enlace={"https://es.wikipedia.org/wiki/Triceratops"}
        ></TarjetaEjemplo>
        <TarjetaEjemplo
          urlImagen={
            "https://t4.ftcdn.net/jpg/05/41/15/07/360_F_541150755_w777mYwvLCGl5yhD0n4NP2NEwREO1hVi.jpg"
          }
          titulo={"Ankylosaurus - Experience Builder"}
          contenido={
            "Los Ankylosaurus son dinosaurios hervivoros que caminaban de manera cuadrúpeda, vivieron durante el Cretacico, muy reconocibles por su pesada armadura y un gran mazo caudal"
          }
          enlace={"https://en.wikipedia.org/wiki/Ankylosaurus"}
        ></TarjetaEjemplo>
      </>
    );
  }

    if (props.titulo === "Story Maps" && estadoBoton) {
    ejemplosRenderizados = (
      <>
        <TarjetaEjemplo
          urlImagen={
            "https://redhistoria.com/wp-content/uploads/2018/08/Batrachotomus-periodo-triasico.jpg"
          }
          titulo={"Triásico - Story Maps"}
          contenido={
            "El Triásico (del griego τριάς, triás, 'tres') es el primer sistema y período del Mesozoico en la escala temporal geológica. Sucede al Pérmico (último periodo del Paleozoico) y precede al Jurásico."
          }
          enlace={"https://es.wikipedia.org/wiki/Triásico"}
        ></TarjetaEjemplo>
        <TarjetaEjemplo
          urlImagen={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Europasaurus_holgeri_Scene_2.jpg/500px-Europasaurus_holgeri_Scene_2.jpg"
          }
          titulo={"Jurásico - Story Maps"}
          contenido={
            "El Jurásico es el segundo sistema y período del Mesozoico en la escala temporal geológica. Sucede al Triásico y precede al Cretácico."
          }
          enlace={"https://es.wikipedia.org/wiki/Jurásico"}
        ></TarjetaEjemplo>
        <TarjetaEjemplo
          urlImagen={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Daspletosaurus_hunting.jpg/500px-Daspletosaurus_hunting.jpg"
          }
          titulo={"Cretacico - Story Maps"}
          contenido={
            "El Cretácico es el tercer y último período y sistema de la Era Mesozoica en la escala temporal geológica. Sucede al Jurásico y precede al Paleógeno (primer período de la Era Cenozoica)."
          }
          enlace={"https://es.wikipedia.org/wiki/Cretácico"}
        ></TarjetaEjemplo>
      </>
    );
  }

function buttonHandler (eventoClick: any){
  // hacemos que cuando le damos al botón que ponga lo contrario
// estadoBoton = !estadoBoton 
if(estadoBoton){
  setEstadoBoton(false)
}
if (estadoBoton == false){
  setEstadoBoton(true)
}
}

  return (
    <div className="aplicacion-arcgis">
      <div className="informacion-aplicacion">
        <img
          className="logo"
          src="https://www.freepnglogos.com/uploads/jurassic-park-png-logo/jurassic-park-logo-clipart-png-2.png"
        />
        <div className="texto-botones-aplicacion">
          <div className="  ">
            <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
            <a className="enlaces" href={props.direccionEnlace}>{props.enlace}</a>
          </div>
          <div className="botones-aplicacion">
            <button>Página del Producto</button>
            {/* si ponemos el evento directamente en el botón, te saltas el addEventListener */}
            <button onClick={buttonHandler}>
              Ver Ejemplos</button>
          </div>
        </div>
      </div>
      <div className="ejemplos-aplicacion">
        {/* quité los props y metí la constante LET que creamos arriba */}
        {ejemplosRenderizados}
      </div>
    </div>
  );
}

// MUY IMPORTANTE EXPORTAR, SI NO NO PUEDES IMPORTAR EN LA APP
export default AplicacionArcGIS;
