import { useEffect, useState } from "react";
import RightSidebar from "../Sidebar/RightSidebar";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
function PostContent({ itemID }) {
  const [postDetails, setPostDetails] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/items/${postId}`
        );
        const data = await response.json();
        setPostDetails(data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    fetchPostDetails();
  }, [itemID]);

  return (
    <div>
      <div className="container my-2">
        <div className="row g-5">
          {/* Left SideBar */}
          <div className="col-md-8">
            <div className="card my-3" id="postContent">
              <div className="card-header">
                {postDetails
                  ? postDetails.type.toUpperCase()
                  : "Loading post type..."}
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p className="fs-2">
                    <a
                      href={
                        postDetails ? postDetails.url : "Loading post title..."
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      {postDetails
                        ? postDetails.title
                        : "Loading post title..."}
                    </a>
                  </p>
                  <footer className="blockquote-footer text-light">
                    {postDetails
                      ? postDetails.author
                      : "Loading post author..."}
                  </footer>
                </blockquote>
                <small>
                  Points:
                  {postDetails ? postDetails.points : "Loading post details..."}
                </small>
              </div>
            </div>
            {postDetails ? (
              <>
                <h4>Comments:</h4>
                <ul>
                  {/* Sliced the comments to 20, as the comments are too many */}
                  {postDetails.children &&
                    postDetails.children
                      .slice(0, 20)
                      .map((comment, index) => (
                        <Comment key={index} comment={comment} />
                      ))}
                </ul>
              </>
            ) : (
              <p>Loading post Comments...</p>
            )}
          </div>
          {/* Left SideBar end */}

          {/* Right SideBar */}
          <RightSidebar />
          {/* Right SideBar end */}
        </div>
      </div>
    </div>
  );
}

export default PostContent;
