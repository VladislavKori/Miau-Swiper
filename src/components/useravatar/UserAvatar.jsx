import React from "react";
import "./useravatar.scss";

function UserAvatar({ img }) {
  return (
    <a className="useravatar__link" href="https://github.com/vladislavkori">
      <div
        style={{
          backgroundImage: `url('${img}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="useravatar"
      />
    </a>
  );
}

export default UserAvatar;
