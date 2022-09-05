import React, { useState } from "react";
import { CloseIcon } from "../../../icon";
import Modal from "../Modal/Modal";
import "./ImageModal.css";

function ImageModal({ src, alt, className }) {
  const [imageModal, setShowImageModal] = useState(false);
  return (
    <>
      <img
        className={className}
        src={src}
        alt={alt}
        onClick={(e) => {
          setShowImageModal(true);
        }}
      />
      {imageModal && (
        <Modal>
          <span
            className="text-md flex-row font-bold close pointer"
            onClick={() => setShowImageModal(false)}
          >
            <CloseIcon size="large" style={{ fontSize: "2.5rem" }} />
            Close
          </span>
          <img src={src} alt={alt} className="image-modal" />
        </Modal>
      )}
    </>
  );
}

export default ImageModal;
