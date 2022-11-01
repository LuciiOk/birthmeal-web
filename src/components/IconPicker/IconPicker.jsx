import React, { useState } from "react";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./IconPicker.scss";

const IconPicker = ({ color = "#ccefde", onChange, iconName }) => {
  const [icon, setIcon] = useState({
    name: iconName,
    icon: Icons[iconName],
  });
  const [icons, setIcons] = useState(Object.keys(Icons));
  const [showIcons, setShowIcons] = useState(false);

  const handleIcon = (name, icon) => {
    setIcon({ name, icon });
    onChange(name);
    setShowIcons(false);
  };

  const onSearch = (e) => {
    const search = e.target.value;
    const filteredIcons = Object.keys(Icons).filter((icon) =>
      icon.toLowerCase().includes(search.toLowerCase())
    );
    setIcons(filteredIcons);
  };

  return (
    <div className="iconPicker">
      <button
        type="button"
        className="iconPicker__btn"
        onClick={() => setShowIcons(!showIcons)}
      >
        <FontAwesomeIcon icon={icon.icon} color={color} />
      </button>
      {showIcons && (
        <div className="iconPicker">
          <div className="iconPicker__icons__search">
            <input
              type="text"
              placeholder="Buscar icono"
              className="iconPicker__icons__search__input"
              onChange={onSearch}
            />
          </div>
          <div className="iconPicker__icons">
            {icons.map((icon) => {
              const Icon = Icons[icon];
              if (icon.includes("fa") || icon !== "fas") {
                return (
                  <button
                    type="button"
                    key={icon}
                    className="iconPicker__icons__icon"
                    onClick={() => handleIcon(icon, Icon)}
                  >
                    <FontAwesomeIcon icon={Icon} />
                  </button>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default IconPicker;
