import React, { Fragment } from "react";
import { rem } from "polished";
import styled from "styled-components";

type Props = {
  children: any;
};

const StyledSection = styled.section`
  width: 100%;
  padding: ${rem(40)} ${rem(16)};
`;

const Section = (props: Props) => {
  return (
    <Fragment>
      <StyledSection>{props.children}</StyledSection>
    </Fragment>
  );
};

export default Section;
