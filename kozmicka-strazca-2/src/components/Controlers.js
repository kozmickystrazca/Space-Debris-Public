import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Controlers.css";

export default function Controlers(props) {
  const { globeEl } = props;
  const controls = useRef();

  const handleShowControls = () => {
    if (controls.current.style.display === "none")
      controls.current.style.display = "flex";
    else controls.current.style.display = "none";
  };
  const clickControler = (e) => {
    let control = e.currentTarget.id;
    switch (control) {
      case "zoomIn":
        globeEl.current.controls().object.translateZ(-50);
        break;
      case "zoomOut":
        globeEl.current.controls().object.translateZ(50);
        break;
      case "left":
        globeEl.current.controls().object.translateX(-50);
        break;
      case "right":
        globeEl.current.controls().object.translateX(50);
        break;
      case "up":
        globeEl.current.controls().object.translateY(50);
        break;
      case "down":
        globeEl.current.controls().object.translateY(-50);
        break;
      default:
        console.log("Error Controls");
        break;
    }
  };
  return (
    <div>
      <div className="controls-background2">
        <div>
          <button id="zoomIn" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-plus" />
          </button>
        </div>
        <div>
          <button id="zoomOut" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-minus" />
          </button>
        </div>
        <div>
          <button id="left" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-left" />
          </button>
        </div>
        <div className="flex">
          <div>
            <button id="up" className="zoomButtons" onClick={clickControler}>
              <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-up" />
            </button>
          </div>
          <div>
            <button id="down" className="zoomButtons" onClick={clickControler}>
              <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-down" />
            </button>
          </div>
        </div>

        <div>
          <button id="right" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
      <div id="button-controls">
        <div
          className="menu-button"
          style={{ padding: "0.5em 1em" }}
          onClick={handleShowControls}
        >
          <FontAwesomeIcon className="up" icon="fa-solid fa-gamepad" />
        </div>
      </div>
      <div
        className="controls-background"
        ref={controls}
        style={{ display: "none" }}
      >
        <div>
          <button id="zoomIn" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-plus" />
          </button>
        </div>
        <div>
          <button id="zoomOut" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-minus" />
          </button>
        </div>
        <div>
          <button id="left" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-left" />
          </button>
        </div>
        <div className="flex">
          <div>
            <button id="up" className="zoomButtons" onClick={clickControler}>
              <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-up" />
            </button>
          </div>
          <div>
            <button id="down" className="zoomButtons" onClick={clickControler}>
              <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-down" />
            </button>
          </div>
        </div>

        <div>
          <button id="right" className="zoomButtons" onClick={clickControler}>
            <FontAwesomeIcon className="up" icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
