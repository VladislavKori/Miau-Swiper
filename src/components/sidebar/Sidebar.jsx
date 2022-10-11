import React from "react";
import "./sidebar.scss";

import Tag from "../tag/Tag";

import { tags } from "../../configs/tags";

import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import UserAvatar from "../useravatar/UserAvatar";

function Sidebar() {
  // need delete
  const link =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJcSqgPOCILzq4SGOHxKr6Iv7S9FwELMDJujbyfQXLSF_1NJ03WH4X7crOnJevYEoIvco&usqp=CAU";

  return (
    <div className="sidebar">
      <main className="sidebar__main">
        <h1 className="sidebar__title">Tags</h1>
        <ul className="sidebar__list">
          {tags.map((item, index) => (
            <li className="sidebar__item" key={index}>
              <Tag title={item} />
            </li>
          ))}
        </ul>
      </main>

      <footer className="sidebar__footer">
        <a className="sidebar__footer-user" href="https://github.com/vladislavkori">
          <div className="sidebar__footer-user-avatar">
            <UserAvatar img={link} />
          </div>
          <h1 className="sidebar__footer-user-name">Vladislav Kori</h1>
        </a>
        <SettingsIcon className="sidebar__settings-icon" />
      </footer>
    </div>
  );
}

export default Sidebar;
