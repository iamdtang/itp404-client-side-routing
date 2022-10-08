import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Index from "./routes/Index";
import Contact from "./routes/Contact";
import Root from "./routes/Root";
import {
  fetchCommentsForPost,
  fetchPost,
  fetchPosts,
  saveComment,
} from "./api";
import Post from "./routes/Post";
import Comments from "./routes/Post/Comments";
import LeaveComment from "./routes/Post/LeaveComment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetchPosts();
        },
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/posts/:id",
        loader({ params }) {
          return fetchPost(params.id);
        },
        element: <Post />,
        children: [
          {
            path: "/posts/:id",
            element: <p>Make some new friends 💬</p>,
          },
          {
            path: "/posts/:id/comments",
            element: <Comments />,
            loader({ params }) {
              return fetchCommentsForPost(params.id);
            },
          },
          {
            path: "/posts/:id/comments/new",
            element: <LeaveComment />,
            action({ request, params }) {
              return request.formData().then((formData) => {
                return saveComment(formData.get("comment"), params.id).then(
                  () => {
                    return redirect(`/posts/${params.id}/comments`);
                  }
                );
              });
            },
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
