var coordenadas = {
    "lote1": {"lat": -34.496001, "lng": -59.119050},
    "lote2": {"lat": -34.495865, "lng": -59.118580},
    // ... coordenadas de otros lotes ...
  };
// Ubicación del centro del mapa
var latLng = {lat: -34.55174111370413, lng: -59.03949006345494};

function buscarLote(lote, mapType) {
    //var lote = document.getElementById("lote").value;
    fetch("coordenadas.json")
      .then(response => response.json())
      .then(data => {
        latLng = data[lote];
        if (latLng) {
          
            openMaps(latLng, mapType);
        } else {
          alert("No se encontraron coordenadas para el lote especificado.");
        }
      });
  }

  function buscarServicio(servicio, mapType) {
    //var lote = document.getElementById("lote").value;
    fetch("coordServiciosComunes.json")
      .then(response => response.json())
      .then(data => {
        latLng = data[servicio];
        if (latLng) {
          
            openMaps(latLng, mapType);
        } else {
          alert("No se encontraron coordenadas para el servicio especificado.");
        }
      });
  }  



function openMaps(latLng, mapType) {
    // Obtiene las coordenadas del lote desde el archivo JSON
    var latitud = latLng.lat;
    var longitud = latLng.lng;
    
    // Crea una URL para abrir Google Maps centrado en las coordenadas del lote
    if (mapType == "waze") {
      var url = "https://www.waze.com/ul?ll=" + latitud + "," + longitud + "&navigate=yes";
    } else {
      var url = "https://www.google.com/maps/search/?api=1&query=" + latitud + "," + longitud + "&travelmode=driving";
    }
    
    // Abre una nueva ventana con Google Maps
    window.open(url);
}
  