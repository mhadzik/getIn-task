import React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";

import { getAllPosts } from "../../helpers/api-service";

import Section from "../../components/Section";
import Card from "../../components/Card";

type Props = {
  postsToDisplay: Array<{
    id: number;
    title: string;
    body: string;
  }>;
};

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  justify-items: center;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${({ theme }) => theme.devices.laptop} {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 1rem;
  }

  @media ${({ theme }) => theme.devices.site} {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 1rem;
  }
  @media ${({ theme }) => theme.devices.wide} {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 1rem;
  }
`;

const Cards = (props: Props) => {
  const { postsToDisplay } = props;

  return (
    <Section>
      <Wrapper>
        {postsToDisplay
          ? postsToDisplay.map((post) => (
              <Card title={post.title} body={post.body} key={post.id} />
            ))
          : null}
      </Wrapper>
    </Section>
  );
};

export default Cards;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryParams = context?.query;
  const posts = await getAllPosts();
  const postsToDisplay: Array<{
    id: number;
    title: string;
    body: string;
  }> = [];

  if (!posts) {
    return {
      notFound: true,
    };
  }
  if (Object.keys(queryParams).length !== 0) {
    const ids = queryParams.id?.toString().split(",");

    ids?.forEach((id) => {
      posts.forEach((post: { id: number; title: string; body: string }) => {
        if (post.id === +id) postsToDisplay.push(post);
      });
    });

    return {
      props: { postsToDisplay },
    };
  }
  posts.forEach(
    (post: { id: number; title: string; body: string }, index: number) => {
      if (index <= 19) {
        postsToDisplay.push(post);
      }
    }
  );

  return {
    props: { postsToDisplay },
  };
};
