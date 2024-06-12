import { Fade } from "pages";

const HeaderSection = ({ title, description, placement, color, small }) => {
  return (
    <Fade bottom>
      <div className={`pd_header_section ${placement} ${color} ${small}`}>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </Fade>
  );
};

export default HeaderSection;
