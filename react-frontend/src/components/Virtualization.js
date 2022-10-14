import React, { useMemo } from "react";
import Globe from "react-globe.gl";
import * as satellite from "satellite.js";
import * as THREE from "three";

const Geometry = new THREE.OctahedronGeometry(1, 0);
const MaterialSatellite = new THREE.MeshBasicMaterial({
  color: "palegreen",
  opacity: 1,
  transparent: true,
});

const MaterialDebris = new THREE.MeshBasicMaterial({
  color: "red",
  opacity: 1,
  transparent: true,
});
const MaterialSelected = new THREE.MeshBasicMaterial({
  color: "yellow",
});

export default function Virtualization(props) {
  const {
    satData,
    setSatData,
    no,
    isOpenModalSatInfo,
    objectInfoOnClick,
    satObjectInfoOnClick,
    handleOpenModalSatInfo,
    time,
    earthRadiusKm,
  } = props;

  const objectsData = useMemo(() => {
    if (!satData) return [];
    const gmst = satellite.gstime(time);
    const data = satData.map((d) => {
      const eci = satellite.propagate(d.satrec, time);
      if (eci.position) {
        const gdPos = satellite.eciToGeodetic(eci.position, gmst);
        const lat = satellite.radiansToDegrees(gdPos.latitude);
        const lng = satellite.radiansToDegrees(gdPos.longitude);
        const alt = gdPos.height / earthRadiusKm;
        return { ...d, lat, lng, alt };
      }
      return d;
    });

    if (isOpenModalSatInfo && objectInfoOnClick) {
      const position = data.filter((x) => x.ID === objectInfoOnClick.object.ID);
      if (position.length === 1) {
        no.current.pointOfView(
          {
            lat: position[0].lat,
            lng: position[0].lng,
            altitude: position[0].alt + 1,
          },
          30
        );
        satObjectInfoOnClick({
          ...objectInfoOnClick,
          lng: position[0].lng,
          lat: position[0].lat,
        });
      }
    }
    return data;
  }, [satData, time]);

  async function fetchInfoOnClick(apiUrl, obj) {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        let result = await response.json();
        satObjectInfoOnClick({ object: obj, fetch: result });
        const just = satData.map((x) => {
          if (x.ID === obj.ID) {
            return { ...x, color: "yellow" };
          }
          return x;
        });
        setSatData(just);
        handleOpenModalSatInfo();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Globe
      ref={no}
      globeImageUrl="/kozmickyodpad/images/earth.jpg"
      rendererConfig={{}}
      objectsData={objectsData}
      onObjectClick={(obj) => {
        fetchInfoOnClick(
          "https://www.kozmickystrazca.sk/api/data/id/" + obj.ID,
          obj
        );
      }}
      objectLabel="name"
      objectLat="lat"
      objectLng="lng"
      objectAltitude="alt"
      objectThreeObject={(d) => {
        if (d.color === "green")
          return new THREE.Mesh(Geometry, MaterialSatellite);
        if (d.color === "red") return new THREE.Mesh(Geometry, MaterialDebris);
        if (d.color === "yellow")
          return new THREE.Mesh(Geometry, MaterialSelected);
      }}
      backgroundImageUrl="/kozmickyodpad/images/sky.png"
    />
  );
}
