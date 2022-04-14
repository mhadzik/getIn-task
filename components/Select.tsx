import React, { Fragment, useState } from "react";

type Props = {
  id: number;
  isChecked: boolean;
  onChange: (event: any) => void;
};

const Select = (props: Props) => {
  const { id, isChecked, onChange } = props;

  return (
    <Fragment>
      <input
        type="checkbox"
        id={`${id}`}
        name={`post-${id}`}
        checked={isChecked}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default Select;
