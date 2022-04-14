import { createContext, useContext } from "react";

export type GlobalContent = {
  posts: Array<{
    id: number;
    title: string;
    body: string;
  }>;
  setPosts: (
    posts: Array<{
      id: number;
      title: string;
      body: string;
    }>
  ) => void;
};

export const PostsContext = createContext<GlobalContent>({
  posts: [],
  setPosts: () => {},
});

export const usePostsContext = () => useContext(PostsContext);
