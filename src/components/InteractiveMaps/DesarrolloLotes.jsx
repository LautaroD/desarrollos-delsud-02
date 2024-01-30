"use client";

import { MapContainer, TileLayer, ImageOverlay, Polygon, Popup } from "react-leaflet";
import React, { useEffect, useState, useRef } from "react";
import L, { CRS } from "leaflet";

import style from "./DesarrolloLotes.module.scss";
import { PopupLoteDesarrollo } from "./PopupLoteDesarrollo";

const DesarrolloLotes = ({ imageFile, lotes, loteHref, containerHeight = 230 }) => {
    const mapRef = useRef(null);
    const [imageBounds, setImageBounds] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(null);

    // Dimensiones container padre
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [forceKeyUpdate, setForceKeyUpdate] = useState(0);
    const [center, setCenter] = useState([0, 0]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = imageFile;

        image.onload = function () {
            const imageWidth = image.width;
            const imageHeight = image.height;

            const southWest = mapRef.current.unproject([0, imageHeight], mapRef.current.getMaxZoom());
            const northEast = mapRef.current.unproject([imageWidth, 0], mapRef.current.getMaxZoom());

            const centerLat = (southWest.lat + northEast.lat) / 2;
            const centerLng = (southWest.lng + northEast.lng) / 2;

            setImageBounds(L.latLngBounds(southWest, northEast));
            setCenter([centerLat, centerLng]);

            setBackgroundImage(image);
            setForceKeyUpdate((prevKey) => prevKey + 1);
        };

        return () => {
            image.onload = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (backgroundImage === null) return;
        const imageWidth = backgroundImage.width;
        const imageHeight = backgroundImage.height;

        setWidth(imageWidth + 150);
        setHeight(imageHeight + containerHeight);

        setForceKeyUpdate((prevKey) => prevKey + 1);

        setTimeout(() => {
            setLoad(true);
        }, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [backgroundImage]);

    return (
        <>
            <span style={{ display: "flex", justifyContent: "center" }}>
                <MapContainer
                    key={forceKeyUpdate}
                    ref={mapRef}
                    center={center}
                    zoom={25}
                    scrollWheelZoom={false}
                    dragging={false}
                    doubleClickZoom={false}
                    zoomControl={false}
                    tap={false}
                    keyboardPanDelta={false}
                    crs={CRS.Simple}
                    className={style.map}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                    }}
                >
                    <TileLayer url='https://api.mapbox.com/styles/v1/lautarod/clq5gu8i401bh01pgeec1c0tq.html?title=view&access_token=pk.eyJ1IjoibGF1dGFyb2QiLCJhIjoiY2xndXdpdnMyMGsyMTNmbnVjdXdmNmJ5ayJ9.qGFpVJUPZM3EbLEeJitP4A' />
                    {imageBounds && <ImageOverlay url={backgroundImage.src} bounds={imageBounds} />}
                    {lotes.map((e, i) => {
                        if (e.coordinates === null) return null;
                        else {
                            let coordinates = JSON.parse(e.coordinates).flat(1);
                            if (mapRef.current === null) return null;

                            return (
                                <Polygon
                                    stroke={0}
                                    key={i}
                                    positions={coordinates.map(([x, y]) => {
                                        if (mapRef.current === null) return null;
                                        return mapRef.current.unproject([x, y]);
                                    })}
                                    pathOptions={
                                        e.selled === "Disponible"
                                            ? { color: "#B8D368", strokeWidth: "0px" }
                                            : { color: "#FC7032", strokeWidth: "0px" }
                                    }
                                    className='.container_lote'
                                >
                                    <Popup autoPan={false}>
                                        <PopupLoteDesarrollo loteHref={loteHref} lote={e} />
                                    </Popup>
                                </Polygon>
                            );
                        }
                    })}
                </MapContainer>
            </span>
        </>
    );
};

export default DesarrolloLotes;
