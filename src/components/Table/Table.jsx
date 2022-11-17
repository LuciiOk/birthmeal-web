import React from "react";
import "./Table.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const Table = ({ data, head, onDelete, onEdit }) => {
  const removeProtocol = (url) => {
    if (url) {
      // Remove protocol from url (http://, https://) and www. and /
      return url
        .replace(/(^\w+:|^)\/\//, "")
        .replace("www.", "")
        .replace("/", "");
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          {head.map((item) => (
            <th key={item.key}>{item.name}</th>
          ))}
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((item, index) => (
          <tr key={index}>
            {head.map((field) =>
              field.key === "color" ? (
                <td key={field.key} style={{ color: item[field.key] }}>
                  {item[field.key]}
                </td>
              ) : field.key2 ? (
                <td key={field.key}>
                  {item[field.key][field.key2]
                    ? item[field.key][field.key2]
                    : "Sin asignar"}
                </td>
              ) : field.key === "icon" ? (
                <td key={field.key}>
                  <FontAwesomeIcon
                    icon={Icons[item[field.key]]}
                    color={item.color}
                  />
                </td>
              ) : field.key === "webUrl" ? (
                <td key={field.key}>
                  <a href={item[field.key]} target="_blank">
                    {removeProtocol(item[field.key])}
                  </a>
                </td>
              ) : (
                <td key={field.key}>
                  {item[field.key] !== null ? item[field.key] : "Sin definir"}
                </td>
              )
            )}
            <td>
              <button className="btn__edit" onClick={() => onEdit(item.id)}>
                Editar
              </button>
              <button className="btn__delete" onClick={() => onDelete(item.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
        {data.length === 0 && (
          <tr>
            <td colSpan={head.length + 1}>No hay datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
