import "./PersonCard.scss";
import cx from "classnames";
import { ELIMINATED } from "./utils";

const PersonCard = ({ person, onClick }) => {
  const Element = onClick ? "button" : "div";
  return (
    <Element
      className={cx("PersonCard", {
        "PersonCard--eliminated": person?.status === ELIMINATED
      })}
      onClick={onClick}
    >
      <img alt="" src={person?.imgSrc} />
      <p className="PersonCard-name">{person?.name}</p>
    </Element>
  );
};

export default PersonCard;
