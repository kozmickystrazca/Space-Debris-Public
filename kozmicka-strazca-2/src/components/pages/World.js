import React, { useState, useEffect, useRef } from "react";
import Virtualization from "../Virtualization";
import * as satellite from "satellite.js";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "../pages/World.css";
import { dataFilter, orbitParamGenerator } from "../../util/filter.js";
import Slider from "../Slider";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ReadmoreModal from "../ReadmoreModal";
import FrameTicker from "frame-ticker";
import MenuDrawer from "../MenuDrawer";
import Controlers from "../Controlers";
import ObjectCounter from "../ObjectCounter";
import AboutObjectModal from "../AboutObjectModal";
import OptimalizationModal from "../OptimalizationModal";
import Distance from "../Distance";

export default function World() {
  const [open, setOpen] = useState(false);
  const [isSlowModal, setIsSlowModal] = useState(false);
  const [isSlow, setIsSlow] = useState(false);
  const [openLoadingBackdrop, setOpenLoadingBackdrop] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpenModalSatInfo, setIsOpenModalSatInfo] = useState(false);
  const handleOpenModalSatInfo = () => setIsOpenModalSatInfo(true);
  const handleCloseModalSatInfo = () => {
    const just = satData.map((x) => {
      if (x.ID === objectInfoOnClick.object.ID) {
        return { ...x, color: objectInfoOnClick.object.color };
      }
      return x;
    });
    setSatData(just);
    setIsOpenModalSatInfo(false);
    satObjectInfoOnClick({
      fetch: "",
      object: "",
    });
  };
  const [time, setTime] = useState(new Date());
  const EARTH_RADIUS_KM = 6371; // km
  const TIME_STEP = 8000;
  const [objectInfoOnClick, satObjectInfoOnClick] = useState({
    fetch: "",
    object: "",
  });
  const [wakeUpZoom, satWakeUpZoom] = useState();
  const globeEl = useRef();
  const [satData, setSatData] = useState();
  const [year, setYear] = useState(1970);
  const [isCheckedFilter, setIsCheckedFilter] = useState({
    satellite: "SAT",
    garbage: "JUNK",
    LOW: true,
    MID: true,
    STA: true,
    less: false,
    anima:
      JSON.parse(sessionStorage.getItem("filters")) === null
        ? false
        : JSON.parse(sessionStorage.getItem("filters")).anima,
  });
  const [countObjects, setCountObjects] = useState(0);
  const [countJunk, setJunkCount] = useState(0);

  useEffect(() => {
    if (isOpenModalSatInfo) return;

    if (globeEl.current.controls().getDistance() * 42 < 11000)
      satWakeUpZoom("1");
    if (
      globeEl.current.controls().getDistance() * 42 > 11000 &&
      globeEl.current.controls().getDistance() * 42 < 28000
    )
      satWakeUpZoom("2");
    if (globeEl.current.controls().getDistance() * 42 > 28000)
      satWakeUpZoom("3");
  }, [
    globeEl.current !== undefined && globeEl.current.controls().getDistance(),
  ]);

  useEffect(() => {
    if (isOpenModalSatInfo) return;
    const timewait = setTimeout(() => {
      const sessionView = globeEl.current.pointOfView();
      sessionStorage.setItem("pointOfView", JSON.stringify(sessionView));
    }, 500);
    return () => clearTimeout(timewait);
  }, [
    globeEl.current !== undefined &&
      globeEl.current.pointOfView().lng.toFixed(2),
    globeEl.current !== undefined && globeEl.current.pointOfView().altitude,
    globeEl.current !== undefined &&
      globeEl.current.pointOfView().lat.toFixed(2),
  ]);

  async function fetching(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        let result = await response.json();
        let orbit = "";
        let filter = "";
        if (globeEl.current.controls().getDistance() * 42 < 11000)
          orbit = orbitParamGenerator(isCheckedFilter.LOW, false, false);
        if (
          globeEl.current.controls().getDistance() * 42 > 11000 &&
          globeEl.current.controls().getDistance() * 42 < 28000
        )
          orbit = orbitParamGenerator(
            isCheckedFilter.LOW,
            isCheckedFilter.MID,
            false
          );
        if (globeEl.current.controls().getDistance() * 42 > 28000)
          orbit = orbitParamGenerator(
            isCheckedFilter.LOW,
            isCheckedFilter.MID,
            isCheckedFilter.STA
          );

        let filterCount = "";
        let orbitByUser = orbitParamGenerator(
          isCheckedFilter.LOW,
          isCheckedFilter.MID,
          isCheckedFilter.STA
        );

        if (
          isCheckedFilter.satellite === "SAT" &&
          isCheckedFilter.garbage === "JUNK"
        ) {
          filter = dataFilter(year, "ALL", orbit, result, isCheckedFilter.less);
          filterCount = dataFilter(
            year,
            "ALL",
            orbitByUser,
            result,
            isCheckedFilter.less
          );
        }
        if (
          isCheckedFilter.satellite === "SAT" &&
          isCheckedFilter.garbage === ""
        ) {
          filter = dataFilter(
            year,
            isCheckedFilter.satellite,
            orbit,
            result,
            isCheckedFilter.less
          );
          filterCount = dataFilter(
            year,
            isCheckedFilter.satellite,
            orbitByUser,
            result,
            isCheckedFilter.less
          );
        }
        if (
          isCheckedFilter.garbage === "JUNK" &&
          isCheckedFilter.satellite === ""
        ) {
          filter = dataFilter(
            year,
            isCheckedFilter.garbage,
            orbit,
            result,
            isCheckedFilter.less
          );
          filterCount = dataFilter(
            year,
            isCheckedFilter.garbage,
            orbitByUser,
            result,
            isCheckedFilter.less
          );
        }
        let array = [];
        let count = 0;
        let junk = 0;
        let tempSatrec = "";
        let tempPropagate = "";
        let color = "";
        for (let i = 1; i < filter.length; i++) {
          tempSatrec = satellite.twoline2satrec(
            filter[i].line1,
            filter[i].line2
          );
          tempPropagate = satellite.propagate(tempSatrec, new Date()).position;
          if (tempPropagate === undefined || isNaN(tempPropagate.x)) continue;
          if (filter[i].satellite === true) color = "green";
          else color = "red";

          array.push({
            satrec: tempSatrec,
            name: filter[i].name,
            color: color,
            ID: filter[i].id,
          });
        }
        for (let i = 1; i < filterCount.length; i++) {
          if (filterCount[i].satellite === true) count += 1;
          else junk += 1;
        }
        setCountObjects(count);
        setJunkCount(junk);
        if (objectInfoOnClick.object !== "") {
          const just = array.map((x) => {
            if (x.ID === objectInfoOnClick.object.ID) {
              return { ...x, color: "yellow" };
            }
            return x;
          });
          setSatData(just);
        } else setSatData(array);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    if (isCheckedFilter.anima === false) {
      let looper = new FrameTicker(30, 15);
      let now;
      let before = Date.now();
      let fps = 0;
      let slow = false;
      looper.onTick.add(() => {
        now = Date.now();
        fps = Math.round(1000 / (now - before));
        before = now;
        setTimeout(function () {
          const sessionOpti = sessionStorage.getItem("optimalization");
          if (
            fps < 9 &&
            slow === false &&
            (sessionOpti === null || sessionOpti === false)
          ) {
            sessionStorage.setItem("optimalization", true);
            slow = true;
            setIsSlow(true);
            setIsSlowModal(true);
          }
        }, 500);
      });
    }
  }, []);
  const detectSize = () => {
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  useEffect(() => {
    const sessionFilters = JSON.parse(sessionStorage.getItem("filters"));
    const sessionView = JSON.parse(sessionStorage.getItem("pointOfView"));

    if (sessionFilters !== null) {
      setIsCheckedFilter({
        ...isCheckedFilter,
        less: sessionFilters.less,
        satellite: sessionFilters.satellite,
        garbage: sessionFilters.garbage,
        LOW: sessionFilters.LOW,
        MID: sessionFilters.MID,
        STA: sessionFilters.STA,
        anima: sessionFilters.anima,
      });
      setYear(sessionFilters.year);
    }
    if (sessionView !== null) {
      globeEl.current.pointOfView(sessionView);
    }
  }, []);

  useEffect(() => {
    const sessionFilters = {
      less: isCheckedFilter.less,
      satellite: isCheckedFilter.satellite,
      garbage: isCheckedFilter.garbage,
      LOW: isCheckedFilter.LOW,
      MID: isCheckedFilter.MID,
      STA: isCheckedFilter.STA,
      year: year,
      anima: isCheckedFilter.anima,
    };
    sessionStorage.setItem("filters", JSON.stringify(sessionFilters));
  }, [isCheckedFilter, year]);

  useEffect(() => {
    (function frameTicker() {
      if (isCheckedFilter.anima === false) {
        setTimeout(function () {
          requestAnimationFrame(frameTicker);
          setTime((time) => new Date(+time + TIME_STEP));
        }, 2000);
      }
    })();
  }, []);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetching("https://www.kozmickystrazca.sk/api/data/animation");
      setOpenLoadingBackdrop(true);
    }, 1000);

    const timeout2 = setTimeout(() => {
      setOpenLoadingBackdrop(false);
    }, 3000);

    return () => clearTimeout(timeout, timeout2);
  }, [year, isCheckedFilter, wakeUpZoom]);

  return (
    <>
      <div className="body-world">
        <Virtualization
          no={globeEl}
          isOpenModalSatInfo={isOpenModalSatInfo}
          objectInfoOnClick={objectInfoOnClick}
          satObjectInfoOnClick={satObjectInfoOnClick}
          handleOpenModalSatInfo={handleOpenModalSatInfo}
          satData={satData}
          setSatData={setSatData}
          earthRadiusKm={EARTH_RADIUS_KM}
          time={time}
        />

        <Distance globeEl={globeEl} />
        <MenuDrawer
          isCheckedFilter={isCheckedFilter}
          setIsCheckedFilter={setIsCheckedFilter}
          handleOpen={handleOpen}
        />

        <div className="range">
          <Slider setYear={setYear} />
          <Controlers globeEl={globeEl} />
        </div>

        <ObjectCounter
          countObjects={countObjects}
          countJunk={countJunk}
          isCheckedFilter={isCheckedFilter}
        />

        <AboutObjectModal
          isOpenModalSatInfo={isOpenModalSatInfo}
          handleCloseModalSatInfo={handleCloseModalSatInfo}
          objectInfoOnClick={objectInfoOnClick}
        />

        <ReadmoreModal open={open} onClose={handleClose} />

        <OptimalizationModal
          setIsSlowModal={setIsSlowModal}
          isSlow={isSlow}
          isSlowModal={isSlowModal}
          setIsCheckedFilter={setIsCheckedFilter}
          isCheckedFilter={isCheckedFilter}
        />
        <Backdrop
          sx={{ color: "#fff", zIndex: 1000 }}
          open={openLoadingBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
}
