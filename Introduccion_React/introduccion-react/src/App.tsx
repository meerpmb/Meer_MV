import "./App.css";
import AplicacionArcGIS from "./components/AplicacionArcGIS/AplicacionArcGIS";

function App() {
  return (
    <>
      <AplicacionArcGIS
        titulo={"Experience Builder"}
        descripcion={"Aquí vas a poder ver mucha información sobre dinosaurios!!"}
        enlace={"Enlace a Experience Builder"}
        direccionEnlace={
          "https://developers.arcgis.com/javascript/latest/get-started/#use-arcgiscreate"
        }
      ></AplicacionArcGIS>
      <AplicacionArcGIS
        titulo={"Story Maps"}
        descripcion={"En el podrás encontrar la historia de los dinosaurios"}
        enlace={"Enlace a Story Maps"}
        direccionEnlace={
          "https://developers.arcgis.com/javascript/latest/get-started/#use-arcgiscreate"
        }
      ></AplicacionArcGIS>
    </>
  );
}

export default App;
