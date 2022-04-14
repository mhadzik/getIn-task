import { useEffect } from "react";
import { GetStaticProps } from "next";

import { usePostsContext } from "../context/posts-context";

import { getAllPosts } from "../helpers/api-service";

import Table from "../components/Table";
import Section from "../components/Section";

type Props = {
  postsToDisplay: Array<{
    id: number;
    title: string;
    body: string;
  }>;
};

const Home = (props: Props) => {
  const { postsToDisplay } = props;
  const { posts, setPosts } = usePostsContext();

  useEffect(() => {
    if (postsToDisplay.length > 0) setPosts(postsToDisplay);
  }, []);

  return <Section>{posts ? <Table posts={posts} /> : null}</Section>;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const postsToDisplay: Array<{
    id: number;
    title: string;
    body: string;
  }> = [];

  posts.forEach(
    (post: { id: number; title: string; body: string }, index: number) => {
      if (index <= 19) {
        postsToDisplay.push(post);
      }
    }
  );

  return {
    props: { postsToDisplay },
    revalidate: 600,
  };
};
