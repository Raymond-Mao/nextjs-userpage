import React from "react";
import {
  $header_h4,
  $text_normal_bold,
  $text_normal,
  white_off_600,
  shadow_dark_medium,
} from "../../asset/style/styleVariable";
import { UserInfo } from "../../types";

interface UserCardProps {
  data: UserInfo;
}

export const UserCard = ({ data: { name, email, website } }: UserCardProps) => {
  return (
    <div className="page__wrapper">
      <div className="card__container">
        <div className="card__header">User Details:</div>
        <div className="card">
          <div className="card__section">
            <span className="card__title">Name:</span>
            <span className="card__desc" data-testid="card-text">
              {name}
            </span>
          </div>
          <div className="card__section">
            <span className="card__title">Email:</span>
            <span className="card__desc">{email}</span>
          </div>
          <div className="card__section">
            <span className="card__title">Website:</span>
            <span className="card__desc">{website}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page__wrapper {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card__container {
        }
        .card__header {
          margin-bottom: 2rem;
          ${$header_h4};
        }
        .card {
          cursor: pointer;
          background-color: ${white_off_600};
          padding: 2rem;
          box-shadow: 0 1px 2px ${shadow_dark_medium};
          transition: all 0.2s;
        }
        .card :hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 7px ${shadow_dark_medium};
        }
        .card__section {
          margin: 2rem;
          display: flex;
        }
        .card__title {
          ${$text_normal_bold};
        }
        .card__desc {
          ${$text_normal};
        }

        @media (max-width: 599px) {
          .card__container {
            width: 20rem;
            margin: 0 2rem;
          }
          .card__section {
            flex-direction: column;
          }
        }
        @media only screen and (min-width: 600px) {
          .card__container {
            width: 30rem;
          }
          .card__title {
            flex: 1.5;
          }
          .card__desc {
            flex: 2;
          }
        }
      `}</style>
    </div>
  );
};
