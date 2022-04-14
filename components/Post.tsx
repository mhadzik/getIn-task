import React from "react";

import { usePostsContext } from "../context/posts-context";

import Button from "./Button";
import Select from "./Select";

type Props = {
  title: string;
  id: number;
  isChecked: boolean;
  onChange: (event: any) => void;
};

const Post = (props: Props) => {
  const { id, title, isChecked, onChange } = props;
  const { posts, setPosts } = usePostsContext();

  const handleRemoveButton = () => {
    const filteredPosts = [...posts].filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  return (
    <tr>
      <td style={{ width: "25%" }}>
        <Select id={id} isChecked={isChecked} onChange={onChange} />
      </td>
      <td style={{ width: "50%" }}>{title}</td>
      <td style={{ width: "25%" }}>
        <Button link={`/cards/${id}`} handleButton={() => {}}>
          Show
        </Button>
        <Button handleButton={handleRemoveButton} link="">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Post;
