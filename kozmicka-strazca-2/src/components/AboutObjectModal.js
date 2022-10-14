import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AboutObjectModal.css";

export default function AboutObjectModal(props) {
  const { isOpenModalSatInfo, handleCloseModalSatInfo, objectInfoOnClick } =
    props;
  const { t } = useTranslation();

  return (
    <div>
      <Modal
        open={isOpenModalSatInfo}
        onClose={handleCloseModalSatInfo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
      >
        <Box className="box-aboutObject">
          <Box className="close-aboutObject" onClick={handleCloseModalSatInfo}>
            <FontAwesomeIcon className="icona" icon="fa-solid fa-x" />
          </Box>
          <div className="box-content-title">
            {!objectInfoOnClick.object ? (
              ""
            ) : objectInfoOnClick.object.color === "green" ? (
              <img
                alt="sattelite"
                className="debris-modal"
                src="/kozmickyodpad/images/active.png"
              />
            ) : (
              <img
                alt="debris"
                className="debris-modal"
                src="/kozmickyodpad/images/debris.png"
              />
            )}
            {!objectInfoOnClick.fetch
              ? ""
              : objectInfoOnClick.fetch.info.OBJECT_NAME}
          </div>
          <Box className="box-content">
            <div>
              {t("APOGEUM")}:{" "}
              {!objectInfoOnClick.fetch
                ? ""
                : objectInfoOnClick.fetch.info.APOGEE}{" "}
              KM
            </div>
            <div>
              {t("PERIGEUM")}:{" "}
              {!objectInfoOnClick.fetch
                ? ""
                : objectInfoOnClick.fetch.info.PERIGEE}{" "}
              KM
            </div>
            <div>
              {t("VLASTNÍK")}:{" "}
              {!objectInfoOnClick.fetch
                ? ""
                : objectInfoOnClick.fetch.info.OWNER}
            </div>
            <div>
              {t("ZEMEPISNÁ ŠÍRKA")}:{" "}
              {!objectInfoOnClick.lat ? "" : objectInfoOnClick.lat.toFixed(1)}°
            </div>
            <div>
              {t("ZEMEPISNÁ DĹŽKA")}:{" "}
              {!objectInfoOnClick.lng ? "" : objectInfoOnClick.lng.toFixed(1)}°
            </div>
            <div style={{ display: "flex", whiteSpace: "pre" }}>
              {t("TYP")}:{" "}
              {!objectInfoOnClick.object ? (
                ""
              ) : objectInfoOnClick.object.color === "red" ? (
                <div style={{ color: "red" }}>{t("ODPAD")}</div>
              ) : (
                <div style={{ color: "palegreen" }}>{t("SATELIT")}</div>
              )}
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
