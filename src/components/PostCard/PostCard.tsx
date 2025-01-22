import { Post } from "../../types/types";
import Card from "../../ui/CommonCard/CommonCard";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <Card renderHeader={() => post.title} renderBody={() => post.body} />
);

export default PostCard;
