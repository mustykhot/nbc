import InputErrorMsg from "./InputErrorMsg";
import { useFormContext } from "react-hook-form";
import { trapSpacesForRequiredFields } from "./index";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "hooks/clickoutsidehook";

const Textbox = ({
  label,
  id,
  name,
  placeholder,
  isDisabled,
  errMsg,
  notRequired,
  maxLength,
  extraClass,
  labelIcon,
  tooltip,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [valueLength, setvalueLength] = useState(0);
  const [openToolTip, setOpenToolTip] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setOpenToolTip(false);
  });

  return (
    <div className="form-group">
      {/* {label && (
        <label htmlFor={id || name}>
          {label}
          {labelIcon}
          {maxLength && (
            <span>
              {valueLength} / {maxLength}
            </span>
          )}
        </label>
      )} */}

      <div
        onClick={() => {
          tooltip && setOpenToolTip(!openToolTip);
        }}
        ref={tooltip && ref}
        className="label_box"
      >
        {label && <label htmlFor={id || name}>{label}</label>} {labelIcon}
        <AnimatePresence>
          {openToolTip && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "just" }}
              className="tooltip"
            >
              <div className="cover_tooltip">
                <p>{tooltip}</p>
              </div>
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </div>

      <div className="textarea">
        <textarea
          className={`input-icon-wrap ${errors[name] ? "is-invalid" : ""} ${
            extraClass && extraClass
          }`}
          name={name}
          maxLength={160}
          id={id || name}
          {...register(name, {
            required: notRequired ? false : true,
            validate: (value) =>
              trapSpacesForRequiredFields(value, notRequired),
            maxLength: {
              value: maxLength ? maxLength : null,
              message: "Maximum length exceeded",
            },
            onChange: (e) => {
              setvalueLength(e.target.value.length);
            },
          })}
          placeholder={placeholder}
          disabled={isDisabled}
        ></textarea>{" "}
        <p className="count">{valueLength}/160</p>
      </div>
    </div>
  );
};

export default Textbox;
