import React from 'react';
import {useState} from "react";
import {Spin} from "antd";

export type Props = {
  src: string,
  className?: string,
  onClick?: () => void,
};

const Image = ({src, onClick}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onLoad = () => {
    setIsLoading(false)
  }

  return (
    <Spin spinning={isLoading}>
      <div style={{overflow: "hidden", width: '200px', height: '200px'}} onClick={onClick}>
        <img
          width="100%"
          alt=""
          src={src}
          onLoad={onLoad}
        />
      </div>
    </Spin>
  );
}

export default Image;
