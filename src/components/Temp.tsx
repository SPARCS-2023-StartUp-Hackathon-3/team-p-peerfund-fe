import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Temp = () => {
  const [items, setItems] = useState(Array.from({ length: 30 }));

  const fetchData = () => {
    console.log(1);

    setTimeout(() => {
      let temp = items;
      temp.concat(Array.from({ length: 50 }));
      setItems(temp);
    }, 500);
  };

  useEffect(() => {
    console.log(items);
  }, [items]);
  // https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png

  return (
    <InfiniteScroll dataLength={items.length} next={fetchData} hasMore={true} loader={<h4>Loading...</h4>}>
      {items.map((item, index) => (
        <div key={index}>div - #{index}</div>
      ))}
    </InfiniteScroll>
  );
};

export default Temp;
