// Importamos las librerías

const Map = await $arcgis.import("@arcgis/core/Map.js");
const MapView = await $arcgis.import("@arcgis/core/views/MapView.js");
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");

const mapa = new Map({
    // lo convertimos ne objeto al ponerle llaves, a continuación ponemos el valor del mapa base
    basemap: 'topo-vector'
})

    // creamos la ventana como tal, que es el map view
const vistaMapa = new MapView({
    // el contenedor será el div que hemos creado antes
    container:'viewDiv',
    map: mapa
})

// Create featurelayer from feature service -- HOSPITALES
const hospitalesFL = new FeatureLayer({
  // URL to the service
  url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer"
});

const hospitalesPortalItemFL = new FeatureLayer({
    portalItem: {
        id: '68745a7fb7a348b6b0d722c8517790af'
    }
})

// añadir la capa al mapa

mapa.add(hospitalesPortalItemFL)
