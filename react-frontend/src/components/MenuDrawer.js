import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import "../components/MenuDrawer.css";

export default function MenuDrawer(props) {
  const { isCheckedFilter, setIsCheckedFilter, handleOpen } = props;
  const [menuDrawer, setMenuDrawer] = useState(false);
  const [language, setLanguage] = useState();

  const { t, i18n } = useTranslation();
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
  }, [i18n.language]);

  const filterStatus = (e) => {
    let status = e.target.id;
    switch (status) {
      case "+":
        if (isCheckedFilter.satellite === false)
          setIsCheckedFilter({ ...isCheckedFilter, satellite: true });
        else setIsCheckedFilter({ ...isCheckedFilter, satellite: false });
        break;
      case "-":
        if (isCheckedFilter.garbage === false)
          setIsCheckedFilter({ ...isCheckedFilter, garbage: true });
        else setIsCheckedFilter({ ...isCheckedFilter, garbage: false });
        break;
      case "LOW":
        if (isCheckedFilter.LOW === false)
          setIsCheckedFilter({ ...isCheckedFilter, LOW: true });
        else setIsCheckedFilter({ ...isCheckedFilter, LOW: false });
        break;
      case "MID":
        if (isCheckedFilter.MID === false)
          setIsCheckedFilter({ ...isCheckedFilter, MID: true });
        else setIsCheckedFilter({ ...isCheckedFilter, MID: false });
        break;
      case "STA":
        if (isCheckedFilter.STA === false)
          setIsCheckedFilter({ ...isCheckedFilter, STA: true });
        else setIsCheckedFilter({ ...isCheckedFilter, STA: false });
        break;
      case "less":
        if (isCheckedFilter.less === false)
          setIsCheckedFilter({ ...isCheckedFilter, less: true });
        else setIsCheckedFilter({ ...isCheckedFilter, less: false });
        break;
      case "anima":
        if (isCheckedFilter.anima === false)
          setIsCheckedFilter({ ...isCheckedFilter, anima: true });
        else setIsCheckedFilter({ ...isCheckedFilter, anima: false });
        window.location.reload();
        break;
      default:
        console.log("Error Filter Check");
        break;
    }
  };

  return (
    <div className="menu">
      <div className="menu-button" onClick={() => setMenuDrawer(true)}>
        MENU
      </div>

      <Drawer
        id="drawer-menu"
        open={menuDrawer}
        onClose={() => setMenuDrawer(false)}
      >
        <Box
          className="drawer"
          sx={{ width: 230 }}
          role="presentation"
          onKeyDown={() => setMenuDrawer(false)}
        >
          <div className="readmore-button" onClick={handleOpen}>
            {t("ČÍTAJ VIAC")}
          </div>
          <div></div>
          <div className="filter-background">
            <div className="filter-name">
              <h5>{t("Výber objektu:")}</h5>
            </div>
            <div className="filter-option">
              <input
                id="+"
                type="checkbox"
                checked={isCheckedFilter.satellite === false ? false : true}
                onChange={filterStatus}
              />
              <div className="filter-subname">{t("Satelit")}</div>
            </div>
            <div className="filter-option">
              <input
                id="-"
                type="checkbox"
                checked={isCheckedFilter.garbage === false ? false : true}
                onChange={filterStatus}
              />
              <div className="filter-subname">{t("Odpad")}</div>
            </div>
            <div className="filter-name">
              <h5>{t("Výber orbity:")}</h5>
            </div>
            <div className="filter-option">
              <input
                id="LOW"
                type="checkbox"
                checked={isCheckedFilter.LOW === false ? false : true}
                onChange={filterStatus}
              />
              <div className="filter-subname">
                {t("Nízka")}{" "}
                <div className="orbit-distance"> (160 - 2000 km)</div>
              </div>
            </div>
            <div className="filter-option">
              <input
                id="MID"
                type="checkbox"
                checked={isCheckedFilter.MID === false ? false : true}
                onChange={filterStatus}
              />
              <div className="filter-subname">
                {t("Stredná")}
                <div className="orbit-distance"> (2000 - 35486 km)</div>
              </div>
            </div>

            <div className="filter-option">
              <input
                id="STA"
                type="checkbox"
                checked={isCheckedFilter.STA === false ? false : true}
                onChange={filterStatus}
              />
              <div className="filter-subname">
                {t("Geostacionárná")}
                <div className="orbit-distance"> (35586 - 35986 km)</div>
              </div>
            </div>
            <div className="filter-name">
              <h5>{t("Optimalizácia")}:</h5>
            </div>
            <div className="filter-option">
              <input
                id="less"
                type="checkbox"
                checked={isCheckedFilter.less === false ? false : true}
                onChange={filterStatus}
              />
              <div className="filter-subname">
                {t("Menej objektov")}
                <div className="orbit-distance">
                  {" "}
                  ({t("25% nízka orbita, 50% ostatné")})
                </div>
              </div>
            </div>
            <div className="filter-option">
              <input
                id="anima"
                type="checkbox"
                checked={isCheckedFilter.anima === false ? false : true}
                onChange={filterStatus}
              />
              <div className="filter-subname">{t("Vypnúť animáciu")}</div>
            </div>

            <div className="language-in-menu-section">
              {t("Jazyk")}:
              <div className="language-button-in-menu" onClick={handleLanguage}>
                {language}
              </div>
            </div>
          </div>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
