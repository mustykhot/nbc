import HeaderSection from "Components/HeaderSection";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "pages";
import { useEffect } from "react";
import { useState } from "react";
import { client } from "utils/utils";
import Marquee from "react-fast-marquee";

const PressSection = () => {
  const [pressList, setPressList] = useState([]);
  useEffect(() => {
    const fetchPress = async () => {
      const res = await client.getEntries({ content_type: "press" });
      const newList = res.items.map((item) => {
        const { link, name, logo } = item.fields;
        return {
          link: link,
          name: name,
          logo: logo,
        };
      });
      setPressList(newList);
    };
    fetchPress();
  }, []);
  return pressList && pressList.length ? (
    <div className="pd_press_section">
      <HeaderSection
        title={"Bumpa in the press"}
        description={
          "The media recognises what we are doing for small businesses in Africa."
        }
        placement="center"
        color={"black"}
        small={"small"}
      />
      <Marquee className="logo_flex" speed={30}>
        {pressList.map((item, i) => {
          const { logo, link, name } = item;
          return (
            <Link key={i} href={link}>
              <a target={"_blank"}>
                <Image
                  width={logo.fields.file.details.image.width}
                  height={logo.fields.file.details.image.height}
                  src={"https:" + logo.fields.file.url}
                  alt={name}
                />
              </a>
            </Link>
          );
        })}
      </Marquee>
      <div className="logo_flex">
        {/* <Image
         width={240}
         height={52}
         src="/images/techcabal.png"
         alt="techcabal"
       />
       <Image
         width={240}
         height={58}
         src="/images/techpoint.png"
         alt="techpoint"
       />
       <Image
         width={180}
         height={120}
         src="/images/disrupt.png"
         alt="disrupt"
       />
       <Image
         width={240}
         height={38}
         src="/images/technext.png"
         alt="technext"
       /> */}
      </div>
      {/* <div className="logo_flex_mobile">
       <div className="row">
         <Image
           width={160}
           height={35}
           src="/images/techcabalmobile.png"
           alt="techcabal"
         />
         <Image
           width={140}
           height={35}
           src="/images/techpointmobile.png"
           alt="techpoint"
         />
       </div>
       <div className="row_two">
         <Image
           width={114}
           height={76}
           src="/images/disruptmobile.png"
           alt="disrupt"
         />
         <Image
           width={134}
           height={21}
           src="/images/technexmobile.png"
           alt="technext"
         />
       </div>
     </div> */}
    </div>
  ) : (
    ""
  );
};

export default PressSection;
