import React, { useRef, useEffect } from "react";
import "./GoogleAutocomplete.scss";

const GoogleAutocomplete = ({ onPlaceChanged }) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const options = {
    types: ["establishment"],
    componentRestrictions: { country: "cl" },
    fields: [
      "name",
      "geometry",
      "formatted_address",
      "place_id",
      "address_components",
    ],
    strictBounds: false,
  };

  useEffect(() => {
    const autoComplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autoCompleteRef.current = autoComplete;
  }, []);

  const handlePlaceChanged = () => {
    const { name, geometry: geo, formatted_address, place_id, address_components } =
      autoCompleteRef.current.getPlace();

    if (geo) {
      const { lat, lng } = geo.location;
      const geometry = {
        coordinates: [lng(), lat()],
      };

      const address = formatted_address;
      const commune = address_components[2].long_name;

      const placeData = {
        address,
        commune,
        geometry,
        place_id,
        name,
      };
      console.log(placeData);
      onPlaceChanged(placeData);
    }
  };

  return (
    <div className="google-autocomplete">
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar establecimiento"
      />
      <button
        type="button"
        onClick={() => {
          handlePlaceChanged();
        }}
      >
        +
      </button>
    </div>
  );
};

export default GoogleAutocomplete;
