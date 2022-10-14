import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "../components/ObjectCounter.css";

export default function ObjectCounter(props) {
  const { countObjects, countJunk, isCheckedFilter } = props;
  const { t } = useTranslation();

  return (
    <div>
      <div className="display-count-objects">
        {isCheckedFilter.less && (
          <FontAwesomeIcon
            icon="fa-solid fa-filter"
            style={{ color: "yellow" }}
            title={t("Filter: 25% nízka orbita, 50% ostatné")}
          />
        )}

        <div title={t("Satelity")}>
          <img
            alt="sattelite"
            className="debris"
            src="/kozmickyodpad/images/active.png"
          />
        </div>
        <div title={t("Satelity")} style={{ color: "palegreen" }}>
          {" "}
          : {countObjects}
        </div>
        <div title={t("Odpad")}>
          <img
            alt="debris"
            className="debris"
            src="/kozmickyodpad/images/debris.png"
          />
        </div>
        <div title={t("Odpad")} style={{ color: "red" }}>
          : {countJunk}
        </div>
      </div>
    </div>
  );
}
