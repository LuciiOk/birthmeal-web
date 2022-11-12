import React from "react";
import { toast } from "react-hot-toast";
import AxiosInstance from "../../utils/AxiosIntance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import GoogleAutocomplete from "../GoogleAutocomplete/GoogleAutocomplete";

const LocationsStep = ({ name = "starbucks", locations, setLocations }) => {
  const getLocations = async () => {
    try {
      if (!name) {
        toast.error("Por favor ingrese el nombre de la empresa");
        return;
      }
      const { data } = await AxiosInstance.get(`google-maps/${name}`);

      if (data.length === 0) {
        toast.error("No se encontraron resultados");
        return;
      }

      // if theres locations already, only add the new ones
      if (locations.length > 0) {
        const newLocations = data.filter(
          (location) =>
            !locations.some((loc) => loc.place_id === location.place_id)
        );
        setLocations([...locations, ...newLocations]);
        return;
      }

      setLocations(data);
    } catch (error) {
      console.log(error);
      toast.error("Error al obtener las ubicaciones");
    }
  };

  const onDeletelocation = (id) => {
    const newLocations = locations.filter((item) => item.place_id !== id);
    setLocations(newLocations);
  };

  const onAddLocation = (location) => {
    // Check if location already exists with place_id
    const locationExists = locations.some(
      (item) => item.place_id === location.place_id
    );

    if (locationExists) {
      toast.error("La ubicación ya existe");
      return;
    }

    const newLocations = [...locations, location];
    setLocations(newLocations);
  };

  return (
    <div className="locations__list">
      <div className="locations__list__search">
        <button
          className="btn__getLocations"
          type="button"
          onClick={getLocations}
        >
          Obtener ubicaciones {name}
        </button>
        <GoogleAutocomplete onPlaceChanged={onAddLocation} />
      </div>
      <ul className="locations__list__items">
        {locations.length === 0 && (
          <>
            <li className="locations__list__item">
              <span className="locations__list__item__name">
                No hay ubicaciones
              </span>
            </li>
          </>
        )}
        {locations.map((item) => (
          <LocationItem
            key={item.place_id}
            {...item}
            onDelete={onDeletelocation}
          />
        ))}
      </ul>
    </div>
  );
};

const LocationItem = ({ name, address, onDelete, place_id }) => {
  return (
    <li className="locations__list__item">
      <span className="locations__list__item__name">{name}</span>
      <span className="locations__list__item__address">{address}</span>
      <button
        className="locations__list__item__delete"
        type="button"
        onClick={() => onDelete(place_id)}
      >
        <FontAwesomeIcon icon={faTimes} color="#bf616a" />
      </button>
    </li>
  );
};

export default LocationsStep;
