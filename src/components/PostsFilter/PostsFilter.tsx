import { Post } from "../../types/types";
import CommonFilter from "../CommonFilter/CommonFilter";

interface Props {
  posts: Post[];
}
// Posts
const PostsFilter = ({ posts }: Props) => {
  const postFilters = {
    all: () => true,
    hasTitle: (post: Post) => !!post.title,
    longPosts: (post: Post) => post.body.length > 50,
  };

  return (
    <CommonFilter<Post>
      data={posts}
      filters={postFilters}
      renderItem={(post: Post) => <li key={post.id}>{post.title}</li>}
    />
  );
};

export default PostsFilter;
