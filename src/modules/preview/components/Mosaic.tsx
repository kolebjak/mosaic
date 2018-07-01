import * as React from 'react';
import { Mosaic } from '../../../types';

export type Props = {
  mosaic: Mosaic,
};

const size = 16;

export default ({ mosaic }: Props) => {
  if (!mosaic) {
    return null;
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={mosaic.width} height={mosaic.height}>
      {mosaic.data.map((mosaicRow, row) => (
        mosaicRow.map((mosaicCol, col) => (
          <circle
            key={`${row}${col}`}
            cx={col * size + (size / 2)}
            cy={row * size + (size / 2)}
            r={size / 2}
            fill={`rgb(${mosaicCol.red / (size * size)}, ${mosaicCol.green / (size * size)}, ${mosaicCol.blue / (size * size)})`}
          />
        ))
      ))}
    </svg>
  );
};
