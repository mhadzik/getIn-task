import { API } from "../api.config";

export const getAllPosts = async () => {
  const response = await fetch(API.URL + "/posts", {
    method: "GET",
  });
  const data = await response.json();

  if (!data) {
    return "Something went wrong";
  }
  return data;
};

export const getPostById = async (id: string | string[] | undefined) => {
  const response = await fetch(API.URL + `/posts/${id}`, {
    method: "GET",
  });
  const data = await response.json();

  if (!data) {
    return "Something went wrong";
  }

  return data;
};
