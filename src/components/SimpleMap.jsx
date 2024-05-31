import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const geoUrl =
//  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function SimpleMap() {
  return (
    <ComposableMap>
      <Geographies geography="../../public/custom.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
