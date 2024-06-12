import { useEffect } from "react";

const useOutsideClick = (ref, handleClickOutside) => {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref?.current && !ref?.current.contains(e.target)) {
        handleClickOutside();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);
};

export default useOutsideClick;
