import React from "react";
import { motion } from "framer-motion";

const Modal = ({ img, setImg }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={(e) => {
        if (e.target.classList.contains("backdrop")) setImg(null);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={img}
        alt="Big pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
