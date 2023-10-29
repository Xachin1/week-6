import React from 'react';

const categoriesData = [
  { id: 1, name: 'Action', desc: 'actioned packed movies' },
  { id: 2, name: 'Comedy', desc: 'Funny movies' },
  { id: 3, name: 'Drama', desc: 'emotional family movies' },
  { id: 4, name: 'SciFi', desc: 'science and fiction' },
  { id: 5, name: 'Horror', desc: 'dont get scared' },
];

const Categories = () => {
  return (
    <>
      {/* <div className='container'>
        <div className='categoriees__row'> */}
      <h1 className='categories'>Categories:</h1>
      <div className='card'>
        {categoriesData.map((category) => (
          <div className='category__card' key={category.id}>
            <h2>{category.name}</h2>
            <p>{category.desc}</p>
          </div>
        ))}
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default Categories;
