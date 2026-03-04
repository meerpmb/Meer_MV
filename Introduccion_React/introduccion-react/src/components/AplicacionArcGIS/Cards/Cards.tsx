import "./Cards.css";
// import Imagen from '../../../../public/vite.svg

interface TarjetaEjemploProps {
  urlImagen: string | undefined; 
//   | es or, te cogería ambos tipos
  titulo: string;
  contenido: string;
  enlace: string;
}

function TarjetaEjemplo(props: TarjetaEjemploProps) {
  return (
    <div className="ejemplo-1">
      <img
    //   !! el prop.urlImagen debes meterlo en src, ya que así lo coge bien
        className="imagen-ejemplo"
        src={props.urlImagen}
      /> 
      <h2>{props.titulo}</h2>
      <p>{props.contenido}</p>
      <a className="enlaces" href={props.enlace}> Enlace </a>
    </div>
  );
}

export default TarjetaEjemplo;

// Primero hemos creado el html para ver la pinta que tendría en la app,
// luego lo hemos convertido en funcion

// <div className="ejemplos-aplicacion">
//   <div className="ejemplo-1">
//     <img
//       className="imagen-ejemplo"
//       src="https://static.wikia.nocookie.net/path-of-titans/images/3/3d/SergiMod1.jpg.jpg/revision/latest?cb=20241101192933"
//     />
//     <h2>Ejemplo 1</h2>
//     <p>Descripción ejemplo 1</p>
//     <a href="">Enlace del Ejemplo</a>
//   </div>

//   <div className="ejemplo-1">
//     <img
//       className="imagen-ejemplo"
//       src="https://cdn.create.vista.com/api/media/small/108667340/stock-photo-triceratops-dinosaur-3d-render"
//     />
//     <h2>Ejemplo 2</h2>
//     <p>Descripción ejemplo 2</p>
//     <a href="">Enlace del Ejemplo</a>
//   </div>

//   <div className="ejemplo-1">
//     <img
//       className="imagen-ejemplo"
//       src="https://t4.ftcdn.net/jpg/05/41/15/07/360_F_541150755_w777mYwvLCGl5yhD0n4NP2NEwREO1hVi.jpg"
//     />
//     <h2>Ejemplo 3</h2>
//     <p>Descripción ejemplo 3</p>
//     <a href="">Enlace del Ejemplo</a>
//   </div>
// </div>;