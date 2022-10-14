import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import samplePDFSK from "./PDF/kozmicky-strazcaSK.pdf";
import samplePDFUA from "./PDF/kozmicky-strazcaUA.pdf";
import { useTranslation } from "react-i18next";
import "./ReadmoreModal.css";

export default function ReadmoreModal(props) {
  const { open, onClose } = props;
  const { i18n } = useTranslation();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="box-readmore">
        <Box className="close-more" onClick={onClose}>
          <FontAwesomeIcon className="icona-x-more" icon="fa-solid fa-x" />
        </Box>
        {i18n.language === "en" ? (
          <Box className="only-debris">
            <h1>Space debris</h1>
            The role of the cosmic guardian is to protect our Earth and space
            technology from damage. Satellites in Earth's orbit can be hit by
            parts of malfunctioning satellites - space debris. When your
            grandparents were your age, the space guardian didn't have much to
            do because there were only a few functional satellites orbiting the
            Earth. Today there are around 5,000 of them. But the problem is that
            there are also more than 30,000 pieces of hazardous space debris. It
            is necessary to monitor this waste and subsequently adjust the
            positions of active satellites in order to avoid unwanted
            collisions.
            <div style={{ marginTop: "0.5em" }}>
              <h3>What is space debris?</h3>
            </div>
            <ul>
              <li>malfunctioning satellites,</li>
              <li>rocket bodies,</li>
              <li>Fragments of cosmic objects.</li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3> Why is it dangerous?</h3>
            </div>
            <ul>
              <li>
                the speed of space debris is ~ 28,000 km/h. Imagine a collision
                at that speed.
              </li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3> How much debris is there in the cosmos?</h3>
            </div>
            <ul>
              <li>more than 36,000 objects with a diameter of {">"}10 cm</li>
              <li>more than 1,000,000 objects with a diameter of 1-10 cm</li>
              <li>
                more than 130,000,000 objects with a diameter of 0.1 - 1 cm
              </li>
              <li>
                the total weight of space debris is estimated at 10,100 tons.
                For example, that's how much the Eiffel Tower in Paris weighs.
              </li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3>Does it need to be monitored?</h3>
            </div>
            <ul>
              <li>
                Yes. It is currently the only way to prevent collisions. If we
                know where hazardous space debris is located, we will be able to
                command a functioning satellite to perform an evasive maneuver.
              </li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3> How to get rid of space debris?</h3>
            </div>
            <ul>
              <li>
                As with waste, especially everyone should try not to produce it.
              </li>
              <li>
                In the next few years, space missions are planned that will
                actively remove space debris.
              </li>
            </ul>
            <div>
              {" "}
              Experts in Slovakia are also dedicated to monitoring space debris.
              Astronomers at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.matfyzjein.sk/"
              >
                MatFyz
              </a>
              (Faculty of Mathematics, Physics and Informatics, Comenius
              University in Bratislava) observe cosmic debris using their
              telescopes. Thanks to these measurements, satellites that you use
              every day (navigation, weather forecast, maps, satellite
              television ...), operate more safely and for a longer period of
              time.
            </div>
            <br />
            <div>You can learn more about space debris in the lectures:</div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=hiQ3AtAEM8A&ab_channel=SPACE%3A%3ALAB"
            >
              SPACE::TALK #06 - Space debris and its research in Slovakia
            </a>
            <div>
              The opposite of space debris are functional devices, thanks to
              which we can better understand the universe. Did you know that
              more than 20 such scientific instruments for space satellites have
              already been manufactured in Košice? During their construction in{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.space-lab.sk/"
              >
                SPACE::LAB
              </a>{" "}
              (at the Department of Cosmic Physics, Institute of Experimental
              Physics SAS, in. in. i.) high standards and precision had to be
              observed testing. Repairing instruments in space is usually no
              longer possible.{" "}
            </div>
            <h1>Space Guardian - Space Debris PDF version</h1>
            <lu>
              <li>
                <a href={samplePDFSK} target="_blank" rel="noreferrer">
                  Brochure to download (SK version)
                </a>
              </li>
              <li>
                <a href={samplePDFUA} target="_blank" rel="noreferrer">
                  Brochure to download (UA version)
                </a>
              </li>
            </lu>
            <div style={{ marginTop: "0.5em" }}>
              <h1>Useful links:</h1>
            </div>
            <ul>
              <li>
                ESA - space debris:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.esa.int/Space_Safety/Space_Debris/"
                >
                  https://www.esa.int/Space_Safety/Space_Debris/
                </a>
              </li>
              <li>
                Cosmic Environment Statistics:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://sdup.esoc.esa.int/discosweb/statistics/ "
                >
                  https://sdup.esoc.esa.int/discosweb/statistics/
                </a>
              </li>
            </ul>
            <h1>Credits</h1>
            <div className="readmore-logos">
              <img
                alt="Univerzita Komenskeho v Bratislave"
                src="/kozmickyodpad/images/UK_Logo_s_textom_TP_horizontal.png"
              />
              <img
                alt="Space Lab"
                className="space"
                src="/kozmickyodpad/images/SPACE-LAB_logotyp.png"
              />
              <img
                alt="T Logo"
                src="/kozmickyodpad/images/T_logo_carrier_surface_rgb_n.png"
              />
              <img
                alt="innovlab"
                className="innovlab"
                src="/kozmickyodpad/images/steam.png"
              />
              <img
                alt="Noc vyskumnikov"
                src="/kozmickyodpad/images/NV22_Logo_SK.png"
              />
            </div>
            <h1>Copyright</h1>
            <div className="credits">
              <img
                alt="T logo"
                style={{ height: "1.5em", marginRight: "0.5em" }}
                src="/kozmickyodpad/images/T_logo_carrier_surface_rgb_n.png"
              />
              © Deutsche Telekom Systems Solutions, Slovakia 2022
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.deutschetelekomitsolutions.sk/"
            >
              https://www.deutschetelekomitsolutions.sk/
            </a>
            <h1>License</h1>
            <div style={{}}>
              Unless otherwise noted, the contents of this document, app
              andsource code are licensed under a license{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International {"("}CC BY-NC-SA 4.0{")"}
              </a>
              <img
                alt="credits"
                style={{
                  display: "flex",
                  maxHeight: "5em",
                  marginLeft: "-1.5em",
                }}
                src="/kozmickyodpad/images/license.png"
              />
            </div>
          </Box>
        ) : (
          <Box className="only-debris">
            <h1>Vesmírny odpad</h1>
            Úlohou kozmického strážcu je chrániť našu Zem a vesmírne technológie
            pred ich poškodením. Satelity na obežnej dráhe Zeme môžu byť
            zasiahnuté časťami nefunkčných satelitov - kozmickým odpadom. Keď
            boli tvoji starí rodičia v tvojom veku, kozmický strážca by nemal
            veľa práce, pretože okolo Zeme obiehalo len niekoľko funkčných
            satelitov. Dnes ich je okolo 5 000. Problémom však je, že je tam
            tiež viac ako 30 000 kusov nebezpečného kozmického odpadu. Tento
            odpad je potrebné monitorovať a následne upravovať pozície aktívnych
            satelitov, aby sa predišlo nežiadúcim kolíziam.
            <div style={{ marginTop: "0.5em" }}>
              <h3> Čo je kozmický odpad?</h3>
            </div>
            <ul>
              <li>nefunkčné satelity,</li>
              <li>nosné rakety,</li>
              <li>úlomky kozmických objektov.</li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3> Prečo je nebezpečný?</h3>
            </div>
            <ul>
              <li>
                rýchlosť kozmického odpadu je ~ 28 000 km/h. Predstav si zrážku
                v tejto rýchlosti.
              </li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3> Koľko odpadu je v kozme?</h3>
            </div>
            <ul>
              <li>viac ako 36 000 objektov s priemerom {">"}10 cm</li>
              <li>viac ako 1 000 000 objektov s priemerom 1-10 cm</li>
              <li>viac ako 130 000 000 objektov s priemerom 0.1 - 1 cm </li>
              <li>
                celková váha kozmického odpadu sa odhaduje na 10 100 ton. Toľko
                váži napríklad Eiffelova veža v Paríži.
              </li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3> Je potrebné ho monitorovať?</h3>
            </div>
            <ul>
              <li>
                Áno. Je to zatiaľ jediná možnosť ako predísť zrážke. Ak budeme
                vedieť, kde sa nebezpečný kozmický odpad nachádza, budeme môcť
                dať povel funkčnému satelitu, aby vykonal uhýbací manéver.
              </li>
            </ul>
            <div style={{ marginTop: "0.5em" }}>
              <h3> Ako sa zbaviť kozmického odpadu?</h3>
            </div>
            <ul>
              <li>Ako pri každom odpade, najmä sa ho snažiť nevyrábať.</li>
              <li>
                V najbližších rokoch sa chystajú vesmírne misie, ktoré budú
                kozmický odpad aktívne odstraňovať.
              </li>
            </ul>
            <div>
              {" "}
              Monitorovaniu kozmického odpadu sa venujú experti aj na Slovensku.
              Astronómovia na{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.matfyzjein.sk/"
              >
                MatFyz
              </a>
              e (Fakulte matematiky, fyziky a informatiky, Univerzity Komenského
              v Bratislave) pozorujú kozmický odpad pomocou svojich
              ďalekohľadov. Aj vďaka týmto meraniam môžu satelity, ktoré
              používaš každý deň (navigácia, predpoveď počasia, mapy, satelitná
              televízia …), fungovať bezpečnejšie a dlhodobejšie.
            </div>
            <div>Viac o kozmickom odpade sa dozvieš v prednáškach:</div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=hiQ3AtAEM8A&ab_channel=SPACE%3A%3ALAB"
            >
              SPACE::TALK #06 - Kozmický odpad a jeho výskum na Slovensku
            </a>
            <div>
              Opakom kozmického odpadu sú funkčné prístroje, vďaka ktorým môžeme
              lepšie rozumieť vesmíru. Vedel si, že v Košiciach bolo vyrobených
              už viac ako 20 takýchto vedeckých prístrojov pre vesmírne
              satelity? Pri ich konštrukcii v{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="http://www.space-lab.sk/"
              >
                SPACE::LAB
              </a>
              e (na Oddelení kozmickej fyziky, Ústav experimentálnej fyziky SAV,
              v. v. i.) museli byť dodržané vysoké štandardy a precízne
              testovanie. Oprava prístrojov vo vesmíre totiž zvyčajne už nie je
              možná.{" "}
            </div>
            <h1>Kozmický Strážca - Kozmický odpad PDF verzia</h1>
            <lu>
              <li>
                <a href={samplePDFSK} target="_blank" rel="noreferrer">
                  Brožúra na stiahnutie (SK verzia)
                </a>
              </li>
              <li>
                <a href={samplePDFUA} target="_blank" rel="noreferrer">
                  Brožúra na stiahnutie (UA verzia)
                </a>
              </li>
            </lu>
            <div style={{ marginTop: "0.5em" }}>
              <h1>Užitočné odkazy:</h1>
            </div>
            <ul>
              <li>
                ESA - kozmicky odpad:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.esa.int/Space_Safety/Space_Debris/"
                  className="links"
                >
                  https://www.esa.int/Space_Safety/Space_Debris/
                </a>
              </li>
              <li>
                Štatistiky kozmického prostredia:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://sdup.esoc.esa.int/discosweb/statistics/ "
                  className="links"
                >
                  https://sdup.esoc.esa.int/discosweb/statistics/
                </a>
              </li>
            </ul>
            <h1>Credits</h1>
            <div className="readmore-logos">
              <img
                alt="Univerzita Komenskeho v Bratislave"
                src="/kozmickyodpad/images/UK_Logo_s_textom_TP_horizontal.png"
              />
              <img
                alt="Space Lab"
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
                src="/kozmickyodpad/images/steam.png"
              />
              <img
                alt="Noc vyskumnikov"
                src="/kozmickyodpad/images/NV22_Logo_SK.png"
              />
            </div>
            <h1>Autorské práva</h1>
            <div className="credits">
              <img
                alt="T logo"
                style={{ height: "1.5em", marginRight: "0.5em" }}
                src="/kozmickyodpad/images/T_logo_carrier_surface_rgb_n.png"
              />
              © Deutsche Telekom Systems Solutions, Slovakia 2022
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.deutschetelekomitsolutions.sk/"
              className="links"
            >
              https://www.deutschetelekomitsolutions.sk/
            </a>
            <h1>Licencia</h1>
            <div style={{}}>
              Ak nie je uvedené inak, na obsah tohto dokumentu, aplikácie a
              zdrojového kódu sa vzťahuje licencia{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International {"("}CC BY-NC-SA 4.0{")"}
              </a>
              <img
                alt="license"
                style={{
                  display: "flex",
                  maxHeight: "5em",
                  marginLeft: "-1.5em",
                }}
                src="/kozmickyodpad/images/license.png"
              />
            </div>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
