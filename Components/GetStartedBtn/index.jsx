import Button from "@mui/material/Button";
import { AppleWhiteIcon } from "Components/icons/AppleWhiteIcon";
import { PlayWhiteIcon } from "Components/icons/PlayWhiteIcon";
import Modal from "Components/Modal";
import Image from "next/image";
import { useState } from "react";
import Qrcode from "react-qr-code";

const GetStartedBtn = ({
  text,
  className,
  start,
  end,
  variant = "contained",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
  return (
    <>
      <Button
        variant={variant}
        startIcon={start}
        endIcon={end}
        onClick={() => {
          const typeOfDevice = deviceType();
          if (typeOfDevice === "mobile" || typeOfDevice === "tablet") {
            if (typeof window !== "undefined") {
              window.open("https://bumpa.app", "_blank");
            }
          } else {
            setOpenModal(true);
          }
        }}
        className={className}
      >
        {text}
      </Button>
      <Modal
        otherClasses="image-modal"
        openModal={openModal}
        hideCancelBtn={true}
        closeModal={() => setOpenModal(!openModal)}
      >
        <div className="qr_code_container">
          <p className="scan">Scan to Download the Bumpa app and get started</p>
          <Qrcode size={200} value={"https://bumpa.app"} />
          <div className="btn_icon_box">
            <AppleWhiteIcon
              handleClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://apps.apple.com/ng/app/bumpa/id1497638594",
                    "_blank"
                  );
                }
              }}
            />
            <PlayWhiteIcon
              handleClick={() => {
                if (typeof window !== "undefined") {
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.salescabal.app",
                    "_blank"
                  );
                }
              }}
            />
          </div>
          <p className="last_text">
            Bumpa is currently only available as a mobile app. <br /> Desktop
            version is coming soon.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default GetStartedBtn;
