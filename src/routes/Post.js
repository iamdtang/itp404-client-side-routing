import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { isLinkActive } from "../utils";

export default function Post() {
  const post = useLoaderData();

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <h4>By {post.user.name}</h4>

      <p>{post.body}</p>

      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <NavLink
            to={`/posts/${post.id}/comments`}
            className={isLinkActive}
            end
          >
            Comments ({post.comments.length})
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/posts/${post.id}/comments/new`}
            className={isLinkActive}
          >
            Leave a Comment
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
