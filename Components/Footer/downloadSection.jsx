import GetStartedBtn from "Components/GetStartedBtn";
import { AppleBlackIcon } from "Components/icons/AppleIBlackcon";
import { AppleWhiteIcon } from "Components/icons/AppleWhiteIcon";
import { AppStore } from "Components/icons/AppStore";
import { PlayStore } from "Components/icons/PlayStore";
import { PlayStoreBlackIcon } from "Components/icons/PlayStoreBlackcon";
import { PlayWhiteIcon } from "Components/icons/PlayWhiteIcon";
import Modal from "Components/Modal";

import Image from "next/image";
import Link from "next/link";
import { Zoom } from "pages";
import { useState } from "react";
import Qrcode from "react-qr-code";

const DownloadSection = ({ description }) => {
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
  const downloadFnc = () => {
    const typeOfDevice = deviceType();
    if (typeOfDevice === "mobile" || typeOfDevice === "tablet") {
      if (typeof window !== "undefined") {
        window.open("https://bumpa.app", "_blank");
      }
    } else {
      setOpenModal(true);
    }
  };
  return (
    <div className="pd_download_section">
      <div className="text_box">
        <p className="title">Get started with Bumpa</p>
        <p className="description">
          {description
            ? description
            : "Turn your phone into a mobile store instantly. Start selling online and managing your business for free."}
        </p>
        <div className="link_flex">
          {description ? (
            <>
              {" "}
              <PlayStoreBlackIcon
                handleClick={() => {
                  downloadFnc();
                }}
              />{" "}
              <AppleBlackIcon
                handleClick={() => {
                  downloadFnc();
                }}
              />{" "}
            </>
          ) : (
            <>
              {" "}
              <PlayStore
                handleClick={() => {
                  downloadFnc();
                }}
              />
              <AppStore
                handleClick={() => {
                  downloadFnc();
                }}
              />{" "}
            </>
          )}
        </div>
      </div>

      <Image
        width={547}
        height={272}
        src="/images/getillustration.png"
        alt="phone app"
      />
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
            <AppleWhiteIcon />
            <PlayWhiteIcon />
          </div>
          <p className="last_text">
            Bumpa is currently only available as a mobile app. <br /> Desktop
            version is coming soon.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default DownloadSection;
