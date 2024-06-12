import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DropDownWrapper = ({ action, children, className }) => {
  const [showDropDown, setshowDropDown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setshowDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showDropDown]);

  return (
    <div
      onMouseOver={() => setshowDropDown(true)}
      onMouseLeave={() => setshowDropDown(false)}
      ref={ref}
      className={`drop-down-wrapper ${className || ""}`}
    >
      <div className="drop-down-action">{action}</div>
      <AnimatePresence>
        {showDropDown && (
          <div className="wrapper_container">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="arrow"
            ></motion.span>
            <div
              // initial={{ height: 0 }}
              // animate={{ height: "auto" }}
              // exit={{ height: 0 }}
              // transition={{ type: "just", duration: 0.5 }}
              className={`drop-down-content`}
            >
              {/* ${
            showDropDown ? "show-drop-down" : ""
           */}
              {children}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownWrapper;
