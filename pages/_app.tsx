import { useState } from "react";
import { AppProps } from "next/app";

import { PostsContext } from "../context/posts-context";

import ThemeProvider from "../components/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [posts, setPosts] = useState<
    Array<{ id: number; title: string; body: string }>
  >([]);

  return (
    <>
      <ThemeProvider>
        <PostsContext.Provider value={{ posts, setPosts }}>
          <Component {...pageProps} />
        </PostsContext.Provider>
      </ThemeProvider>
    </>
  );
}
