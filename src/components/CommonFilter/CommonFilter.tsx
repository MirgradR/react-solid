import React, { useState } from "react";

interface FilterProps<T> {
  data: T[];
  filters: {
    [key: string]: (item: T) => boolean;
  };
  renderItem: (item: T) => React.ReactNode;
}
// Open/Closed Principle (Принцип открытости/закрытости)
const CommonFilter = <T,>({ data, filters, renderItem }: FilterProps<T>) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredData = data.filter(filters[activeFilter]);

  return (
    <div>
      <select
        value={activeFilter}
        onChange={(e) => setActiveFilter(e.target.value)}
      >
        {Object.keys(filters).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <ul>{filteredData.map(renderItem)}</ul>
    </div>
  );
};

export default CommonFilter;
