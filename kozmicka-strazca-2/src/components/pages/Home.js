import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";
import backgroundVideo from "../Videos/Background.mp4";
import ReadmoreModal from "../ReadmoreModal";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("key");
      setLanguage("EN");
    } else {
      i18n.changeLanguage("en");
      setLanguage("SK");
    }
  };

  useEffect(() => {
    if (i18n.language === "en") setLanguage("SK");
    else setLanguage("EN");
  }, []);

  return (
    <>
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        disablePictureInPicture
      />
      <div className="home-body">
        <div className="home-name-section">
          <span className="nad">{t("KOZMICKÝ STRÁŽCA")}</span>
          <span className="pod">{t("Monitorovanie kozmického odpadu")}</span>
        </div>
        <div className="home-button-section">
          <div className="home-button-background">
            <Link to="/app" style={{ textDecoration: "none" }}>
              <div className="home-button">{t("SPUSTIŤ")}</div>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <div className="home-button" onClick={handleOpen}>
                {t("ČÍTAJ VIAC")}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-logos">
        <img
          alt="Univerzita Komenskeho v Bratislave"
          src="/kozmickyodpad/images/UK_Logo_s_textom_TP_horizontal.png"
        />
        <img
          alt="SpaceLab"
          className="space"
          src="/kozmickyodpad/images/SPACE-LAB_logotyp.png"
        />
        <img
          alt="T logo"
          src="/kozmickyodpad/images/T_logo_carrier_surface_rgb_n.png"
        />
        <img
          alt="innovlab"
          className="innovlab"
          src="/kozmickyodpad/images/output-onlinepngtools.png"
        />
        <img
          alt="Noc vyskumnikov"
          src="/kozmickyodpad/images/NV22_Logo_SK.png"
        />
      </div>
      <ReadmoreModal open={open} onClose={handleClose} />
      <div className="language-bar">
        <div className="language-button" onClick={handleLanguage}>
          {language}
        </div>
      </div>
    </>
  );
}
