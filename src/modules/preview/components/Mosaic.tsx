import * as React from 'react';
import { Mosaic } from '../../../types';

export type Props = {
  mosaic: Mosaic,
  mosaicDimensions: {
    width: number,
    height: number,
  },
};

const size = 16;

export default ({ mosaic, mosaicDimensions }: Props) => {
  if (!mosaic) {
    return null;
  }
  return (
    <svg width={mosaicDimensions.width} height={mosaicDimensions.height}>
      {mosaic.map((mosaicRow, row) => (
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
