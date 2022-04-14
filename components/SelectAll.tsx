import React, { Fragment } from "react";

type Props = {
  id: number;
  isChecked: boolean;
  handleChange: (event: any) => void;
};

const SelectAll = (props: Props) => {
  const { id, handleChange, isChecked } = props;
  return (
    <Fragment>
      <input
        type="checkbox"
        id={`${id}`}
        name={`post-${id}`}
        onChange={handleChange}
        checked={isChecked}
      />
    </Fragment>
  );
};

export default SelectAll;
