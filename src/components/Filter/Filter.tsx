import { useState } from "react";
import { Post, User } from "../../types/types";

interface Props {
  users?: User[];
  posts?: Post[];
  dataType: "users" | "posts";
}

// Open/Closed Principle (Принцип открытости/закрытости)
const Filter = ({ users, posts, dataType }: Props) => {
  const [filter, setFilter] = useState("all");

  const filteredData = (() => {
    if (dataType === "users") {
      return users?.filter((user) => {
        if (filter === "all") return true;
        if (filter === "hasPhone") return !!user.phone;
        if (filter === "hasWebsite") return !!user.website;
        return true;
      });
    } else if (dataType === "posts") {
      return posts?.filter((post) => {
        if (filter === "all") return true;
        if (filter === "longPosts") return post.body.length > 200;
        if (filter === "hasTitle") return !!post.title;
        return true;
      });
    }
    return [];
  })();

  return (
    <div>
      {/* Селектор фильтров */}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {dataType === "users" && (
          <>
            <option value="all">All Users</option>
            <option value="hasPhone">Users with Phone</option>
            <option value="hasWebsite">Users with Website</option>
          </>
        )}
        {dataType === "posts" && (
          <>
            <option value="all">All Posts</option>
            <option value="longPosts">Posts Longer Than 200 Characters</option>
            <option value="hasTitle">Posts with Title</option>
          </>
        )}
      </select>

      {/* Список элементов */}
      <ul>
        {filteredData?.map((item) =>
          dataType === "users" ? (
            <li key={item.id}>{(item as User).name}</li>
          ) : (
            <li key={item.id}>{(item as Post).title}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Filter;
