import styles from "./Tooltip.module.scss";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as TooltipComponent } from "react-tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";

export const Tooltip = ({ id, text }) => {
  return (
    <>
      <AiFillQuestionCircle data-tooltip-id={id} data-tooltip-content={text} />
      <TooltipComponent id={id} style={{maxWidth: '400px'}}/>
    </>
  );
};
