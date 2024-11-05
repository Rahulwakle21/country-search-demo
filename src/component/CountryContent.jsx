import React, { useEffect, useState } from "react";
import countryData from "../countryData";
import Cards from "./crad/Cards";

const CountryContent = ({ search }) => {
  const [countList, setCountList] = useState(countryData);

  useEffect(() => {
    setCountList(countList);
  }, [countList]);

  return (
    <div>
      {countList
        .filter((country) => country.name.common.toLowerCase().includes(search))
        .map((data) => {
          return (
            <Cards
              name={data.name.common}
              flag={data.flags.svg}
              population={data.population}
              region={data.region}
              capital={data.capital}
            />
          );
        })}
    </div>
  );
};

export default CountryContent;
