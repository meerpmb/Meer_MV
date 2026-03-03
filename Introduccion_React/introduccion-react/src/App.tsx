import "./App.css";
import AplicacionArcGIS from "./components/AplicacionArcGIS/AplicacionArcGIS";

function App() {
  return (
    <>
      <AplicacionArcGIS
        titulo={"Experience Builder"}
        descripcion={"Descripcion de Experience Builder"}
        enlace={"Enlace a Experience Builder"}
        direccionEnlace={"https://developers.arcgis.com/javascript/latest/get-started/#use-arcgiscreate"}
      ></AplicacionArcGIS>
            <AplicacionArcGIS
        titulo={"Story Maps"}
        descripcion={"Descripcion de Story Maps"}
        enlace={"Enlace a Story Maps"}
        direccionEnlace={"https://developers.arcgis.com/javascript/latest/get-started/#use-arcgiscreate"}
      ></AplicacionArcGIS>
    </>
  );
}

export default App;
