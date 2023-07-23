import React, { useEffect, useState } from 'react';
import { Stats } from './Stats';

const VisitorCount = () => {
  const [count, setCount] = useState(0);
  const baseLocation = window.location.origin;

  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        const response = await fetch('http://localhost:3000/increment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ baseLocation }),
        });

        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error incrementing visitor count:', error);
      }
    };

    incrementVisitorCount();
  }, [baseLocation]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="99" height="20">
        <linearGradient id="b" x2="0" y2="100%">
          <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
          <stop offset="1" stop-opacity=".1" />
        </linearGradient>
        <mask id="a">
          <rect width="99" height="20" rx="3" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <rect width="81" height="20" fill="#555" />
          <rect x="81" width="18" height="20" fill="#0e75b6" />
          <rect width="99" height="20" fill="url(#b)" />
        </g>
        <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
          <text x="41.5" y="15" fill="#010101" fill-opacity=".3">Page views</text>
          <text x="41.5" y="14">Page views</text>
          <text x="89" y="15" fill="#010101" fill-opacity=".3">{count}</text>
          <text x="89" y="14">{count}</text>
        </g>
      </svg>
      <Stats />
    </>
  );
};

export default VisitorCount;
