import "./AplicacionArcGIS.css";

interface AplicacionArcGISProps {
  titulo: string;
  descripcion: string;
  enlace: string;
  direccionEnlace: string;
}
// props puede realmente llamarse de cualquier cosa
function AplicacionArcGIS(props: AplicacionArcGISProps) {
  return (
    <div className="aplicacion-arcgis">
      <img className="logo" src="https://placehold.co/100x100" />
      <div className="aplicacion">
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        <a href={props.direccionEnlace}>{props.enlace}</a>
      </div>
    </div>
  );
}

// MUY IMPORTANTE EXPORTAR, SI NO NO PUEDES IMPORTAR EN LA APP
export default AplicacionArcGIS;
