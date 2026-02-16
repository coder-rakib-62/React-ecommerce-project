import React, { Children } from "react";

const Container = ({ children , className }) => {
  return <div className={`${className} conatainer`}>{children}</div>;
};

export default Container;
