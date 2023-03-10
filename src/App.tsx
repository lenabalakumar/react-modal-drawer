import React, { useState } from "react";
import cn from "classnames";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClose = () => {
    setShowDrawer(false);
  };

  const onModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="container">
        <button onClick={() => setShowDrawer(!showDrawer)} className="button">Show drawer</button>
        <button onClick={() => setShowModal(!showModal)} className="button">Show modal</button>
      </div>
      {/* <div className="check">
        <p>Hello</p>
      </div> */}
      {/* {showDrawer && (
        <div className="drawer-backdrop" onClick={() => setShowDrawer(false)}>
          <div className={cn("drawer")}>This is a drawer</div>
        </div>
      )} */}
      <Drawer shouldOpen={showDrawer} onClose={onClose} />
      <Modal shouldModalOpen={showModal} onModalClose={onModalClose} />
    </>
  );
}

type DrawerProps = {
  shouldOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Drawer = (props: DrawerProps) => {
  const { shouldOpen, children, onClose } = props;
  return (
    <React.Fragment>
      {shouldOpen && (
        <>
          <div className={cn("drawer", { open: shouldOpen })}>
            <p>Un fucking believable</p>
          </div>
          <div className="drawer-backdrop" onClick={onClose}></div>
        </>
      )}
    </React.Fragment>
  );
};

type ModalProps = {
  shouldModalOpen: boolean;
  onModalClose: () => void;
  children?: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  const { shouldModalOpen, onModalClose, children } = props;

  return (
    <React.Fragment>
      {shouldModalOpen && (
        <>
          <div className={cn("modal", { open: shouldModalOpen })}>
            <p>This is a modal</p>
          </div>
          <div onClick={onModalClose} className="modal-backdrop"></div>
        </>
      )}
    </React.Fragment>
  );
};

export default App;
