import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";

import { getAllPosts, getPostById } from "../../helpers/api-service";

import Card from "../../components/Card";
import Section from "../../components/Section";

type Props = {
  post: {
    id: number;
    title: string;
    body: string;
  };
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

const PostDetailPage = (props: Props) => {
  const { post } = props;
  return (
    <Section>
      <Wrapper>
        <Card title={post.title} body={post.body} />
      </Wrapper>
    </Section>
  );
};

export default PostDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const cardId = context?.params?.cardId;
  const post = await getPostById(cardId);

  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(
    (post: { id: number; title: string; body: string }) => ({
      params: { cardId: `${post.id}` },
    })
  );

  return {
    paths: paths,
    fallback: false,
  };
};
