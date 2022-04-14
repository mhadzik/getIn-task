import React, { useState } from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { rem } from "polished";
import styled from "styled-components";

import { usePostsContext } from "../context/posts-context";

import Post from "./Post";
import SelectAll from "./SelectAll";
import Button from "./Button";

type Props = {
  posts: Array<{
    id: number;
    title: string;
    body: string;
  }>;
};

const StyledTable = styled.table`
  max-width: 100%;
  width: ${rem(780)};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-collapse: collapse;

  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    text-align: center;
  }

  button {
    @media ${({ theme }) => theme.devices.mobile} {
      margin-top: 1rem;
    }
    @media (min-width: 563px) and (max-width: 605px) {
      margin-left: 0.1rem;
    }
    @media (min-width: 606px) {
      margin-left: 0.8rem;
    }
  }

  th {
    input {
      margin-right: 1rem;
    }
  }

  input[type="checkbox"] {
    cursor: pointer;
    width: ${rem(16)};
    height: ${rem(16)};
  }
`;

const StyledIcon = styled.span`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const WrapperButton = styled.div`
  margin-top: 3rem;
`;

const Table = (props: Props) => {
  const { posts } = props;
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkedPosts, setCheckedPosts] = useState<number[]>([]);
  const { setPosts } = usePostsContext();

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setCheckedPosts(posts.map((post) => post.id));
    if (isCheckAll) {
      setCheckedPosts([]);
    }
  };

  const handleSingleSelect = (event: any) => {
    const selectedId = +event.target.id;

    if (!checkedPosts.includes(selectedId)) {
      setCheckedPosts([...checkedPosts, selectedId]);
    } else {
      const newIsCheck = checkedPosts.filter((id) => selectedId !== id);
      setCheckedPosts(newIsCheck);
    }
  };

  const sortTable = (ascending: boolean) => {
    if (ascending) {
      posts.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      posts.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
    setLoading(true);
    if (loading) {
      setPosts(posts);
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <SelectAll
                id={0}
                handleChange={handleSelectAll}
                isChecked={isCheckAll}
              />
              <span>Select</span>
            </th>
            <th>
              <span>Post Title</span>
              <StyledIcon onClick={() => sortTable(false)}>
                <BiDownArrowAlt />
              </StyledIcon>
              <StyledIcon onClick={() => sortTable(true)}>
                <BiUpArrowAlt />
              </StyledIcon>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <Post
                title={post.title}
                key={post.id}
                id={post.id}
                isChecked={checkedPosts.includes(post.id)}
                onChange={handleSingleSelect}
              />
            );
          })}
        </tbody>
      </StyledTable>
      <WrapperButton>
        <Button
          handleButton={() => {}}
          link={
            checkedPosts.length > 0 ? `/cards/?id=${checkedPosts}` : `/cards`
          }
        >
          Show selected posts
        </Button>
      </WrapperButton>
    </Wrapper>
  );
};

export default Table;
