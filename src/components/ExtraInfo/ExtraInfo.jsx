"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { Desktop, Mobile } from "@/components/ExtraInfo";

export default function Garden({
    name,
    handleClose,
    moreInfo,
    infoDesarrollo,
    logo,
    servicios,
    descripcion,
    images = [],
    imagesMobile = [],
}) {
    const windowSize = useWindowSize();

    return (
        <>
            {windowSize.width > 530 ? (
                <Desktop
                    name={name}
                    handleClose={handleClose}
                    infoDesarrollo={infoDesarrollo}
                    moreInfo={moreInfo}
                    logo={logo}
                    servicios={servicios}
                    images={images}
                    descripcion={descripcion}
                />
            ) : (
                <Mobile
                    images={imagesMobile}
                    handleClose={handleClose}
                    moreInfo={moreInfo}
                    logo={logo}
                    servicios={servicios}
                    descripcion={descripcion}
                />
            )}
        </>
    );
}
