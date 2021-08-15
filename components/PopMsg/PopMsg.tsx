import React from "react";
import {
  shadow_dark_medium,
  waring_color,
  $header_h4,
  black_300,
} from "../../asset/style/styleVariable";

interface PopMsgProps {
  msg: string | string[] | undefined;
}

export const PopMsg = ({ msg }: PopMsgProps) => {
  return (
    <div className="popup-container">
      <div className="pc-text">
        <span data-testid="pop-text">
          {typeof msg === "string"
            ? `${msg} does not exist.`
            : "User does not exist"}
        </span>
      </div>

      <style jsx>{`
        .popup-container {
          margin: 0 auto;
          margin-top: 5rem;
          width: 60rem;
          height: 6rem;
          box-shadow: 0 4px 12px 0 ${shadow_dark_medium};
          border-radius: 0.4rem;
          background-color: ${waring_color};
          line-height: 6rem;
        }
        .pc-text {
          ${$header_h4};
          color: ${black_300};
          text-align: left;
          padding-left: 1.5rem;
        }
      `}</style>
    </div>
  );
};
