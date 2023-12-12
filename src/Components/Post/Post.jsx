import { useNavigate } from "react-router-dom";

function Post({
  title = "No title available",
  author = "No author available",
  created_at = "No date available",
  itemID,
}) {
  const navigate = useNavigate();
  // Helper function to convert the date from the API to a more readable format
  function OriginalDate(created_at) {
    const timestamp = created_at * 1000;
    const date = new Date(timestamp);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based, so we add 1
    const year = date.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  // Naviagting to the post content page
  const navigateToPostContent = (itemID) => {
    navigate(`/post/${itemID}`);
  };
  return (
    <div className="col-sm-6">
      <div className="card" id="postCards">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small>
              <em>by - {author}</em>
            </small>
          </p>

          <button
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
            onClick={() => navigateToPostContent(itemID)}
          >
            Continue Reading
          </button>
        </div>
        <div className="card-footer ">{OriginalDate(created_at)}</div>
      </div>
    </div>
  );
}

export default Post;
