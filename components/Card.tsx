import React from "react";
import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  body: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  background: white;
`;

const StyledImage = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
`;

const WrapperCardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h5 {
    font-size: 1.5rem;
    font-weight: 500;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const WrapperCardFooter = styled.div`
  display: flex;
  padding: 1rem;
  margin-top: auto;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Card = (props: Props) => {
  const { title, body } = props;
  return (
    <Wrapper>
      <StyledImage>
        <Image
          src={"https://picsum.photos/600/400"}
          width={600}
          height={400}
          alt="card_photo"
        />
      </StyledImage>

      <WrapperCardBody>
        <h5>{title}</h5>

        <p>{body}</p>
      </WrapperCardBody>
      <WrapperCardFooter>
        <Link href="/">Go to Homepage</Link>
      </WrapperCardFooter>
    </Wrapper>
  );
};

export default Card;
