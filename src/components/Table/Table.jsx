import React from "react";
import "./Table.scss";

const Table = ({ data, head, onDelete, onEdit }) => {
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
        {data.map((item, index) => (
          <tr key={index}>
            {head.map((field) =>
              field.key === "color" ? (
                <td
                  key={field.key}
                  style={{ color: item[field.key] }}
                >{item[field.key]}</td>
              ) : (field.key2) ? (
                <td key={field.key}>{item[field.key][field.key2]}</td>
              ) : (
                <td key={field.key}>{item[field.key]}</td>
              )
            )}
            <td>
              <button className="btn__edit" onClick={() => onEdit(item.id)}>Editar</button>
              <button className="btn__delete" onClick={() => onDelete(item.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
