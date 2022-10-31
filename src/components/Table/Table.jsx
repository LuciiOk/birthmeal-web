import React from "react";
import "./Table.scss";

const Table = ({ data, head, onDelete }) => {

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
            {head.map((field) => (
              <td key={field.key}>{item[field.key]}</td>
            ))}
            <td>
              <button className="btn__edit">Editar</button>
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
