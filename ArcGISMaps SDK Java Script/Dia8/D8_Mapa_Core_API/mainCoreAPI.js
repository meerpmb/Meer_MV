// Importamos las librerías

const Map = await $arcgis.import("@arcgis/core/Map.js");
const MapView = await $arcgis.import("@arcgis/core/views/MapView.js");

const miMapa = new Map({
    // lo convertimos ne objeto al ponerle llaves, a continuación ponemos el valor del mapa base
    basemap: 'topo-vector'
})

    // creamos la ventana como tal, que es el map view
const vistaMapa = new MapView({
    // el contenedor será el div que hemos creado antes
    container:'viewDiv',
    map: miMapa
})