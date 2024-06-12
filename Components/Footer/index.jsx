import DownloadSection from "./downloadSection";
import PressSection from "./pressSection";
import LinkSection from "./linkSection";

const Footer = ({ displaypress = true, displayDownload = true }) => {
  return (
    <div className="pd_footer">
      {displaypress && <PressSection />}
      {displayDownload && <DownloadSection />}
      <LinkSection />
    </div>
  );
};

export default Footer;
