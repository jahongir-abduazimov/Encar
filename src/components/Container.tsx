import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full max-w-[1250px] px-4 mx-auto">{children}</div>;
};

export default Container;
