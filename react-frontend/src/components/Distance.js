import React from "react";
import { useTranslation } from "react-i18next";
import "../components/Distance.css";

export default function Distance(props) {
  const { globeEl } = props;
  const { t } = useTranslation();

  return (
    <div>
      <div className="distance">
        <div> {t("Vzdialenosť")}:</div>
        {globeEl.current === undefined ? (
          ""
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-0.5em",
            }}
          >
            {" "}
            <div style={{ fontSize: "1.5rem" }}>~</div>
            <div>
              {(globeEl.current.controls().getDistance() * 42 - 4242).toFixed(
                0
              )}
            </div>
            km
          </div>
        )}
      </div>
    </div>
  );
}
