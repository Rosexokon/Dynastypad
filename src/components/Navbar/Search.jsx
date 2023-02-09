import React, { useState } from 'react';

const CollectionFilter = ({ collection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCollection, setFilteredCollection] = useState(collection);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setFilteredCollection(
      collection.filter(item =>
        item.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="mb-4">
      <input
        className="bg-gray-200 p-2 rounded-full w-64"
        type="text"
        placeholder="Search collection"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="list-reset mt-2">
        {filteredCollection.map(item => (
          <li key={item} className="p-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionFilter;
