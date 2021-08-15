import React, { FC } from "react";
import Link from "next/link";
import {
  $header_h2,
  white_off_600,
  dashbd_header_border,
} from "../../../asset/style/styleVariable";

interface HomeWrapperProps {
  /**
   * display Website name
   */
  title?: string;
}

export const HomeWrapper: FC<HomeWrapperProps> = ({
  children,
  title = "Vidzing",
}) => {
  return (
    <div className="home-wrapper">
      <div className="home-wrapper__header">
        <Link href="/">
          <div className="header__title" data-testid="siteName">
            {title}
          </div>
        </Link>
      </div>
      <div className="home-wrapper__body">{children}</div>

      <style jsx>{`
        .home-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .home-wrapper__header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          background-color: ${white_off_600};
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: ${dashbd_header_border};
          padding: 0 2rem;
        }
        .home-wrapper__body {
          height: 100%;
        }
        .header__title {
          cursor: pointer;
          width: 20rem;
          ${$header_h2};
        }
      `}</style>
    </div>
  );
};
