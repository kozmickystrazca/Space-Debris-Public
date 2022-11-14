import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../components/OptimalizationModal.css";

export default function OptimalizationModal(props) {
  const {
    isSlow,
    isSlowModal,
    setIsSlowModal,
    setIsCheckedFilter,
    isCheckedFilter,
  } = props;
  const optimalization = () => {
    setIsCheckedFilter({ ...isCheckedFilter, less: true, anima: true });
    setIsSlowModal(false);
    window.location.reload();
  };

  return (
    <div>
      <Modal
        open={isSlow === true && isSlowModal === true ? true : false}
        onClose={() => {
          setIsSlowModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
      >
        <Box className="box-slow">
          <div className="optimalization">
            <div className="optimalization-title">
              Bol zaznamenaný nižší výkon!
            </div>
            <div className="optimalization-buttons">
              <div
                className="menu-button"
                id="button-optimalization"
                onClick={optimalization}
              >
                OPTIMALIZOVAŤ
              </div>
              <div
                className="menu-button"
                onClick={() => setIsSlowModal(false)}
                id="button-continue"
              >
                POKRAČOVAŤ
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
