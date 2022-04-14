import React, { Fragment, ReactNode } from "react";

import Link from "next/link";

type Props = {
  handleButton: () => void;
  children: ReactNode;
  link: string;
};

const Button = (props: Props) => {
  const { handleButton, children, link } = props;
  if (link) {
    return (
      <Fragment>
        <Link href={link}>{children}</Link>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <button type="button" onClick={handleButton}>
        {children}
      </button>
    </Fragment>
  );
};

export default Button;
