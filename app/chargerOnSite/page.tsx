import React from "react";
import ChargerNavbar from "../components/chargerOnSite/ChargerNavbar";
import ChargerPlug from "../components/chargerOnSite/ChargerPlug";


type Props = {};

const ChargerOnSite = (props: Props) => {
  return (
    <div>
      <ChargerNavbar />
      <ChargerPlug />
    </div>
  );
};

export default ChargerOnSite;
