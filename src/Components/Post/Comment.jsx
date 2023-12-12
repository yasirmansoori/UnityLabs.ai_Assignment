function Comment({ comment }) {
  return (
    // This is the comment component which is used to display the comments
    <div className="card my-2 mx-2" id="Comment">
      <div className="card-header">By - {comment.author}</div>
      <div className="card-body">
        <p className="m-0">
          {comment.text.length > 200
            ? comment.text.slice(0, 200) + " ........"
            : comment.text}
        </p>
      </div>
      {/*  This is the recursive part: use to get the nested comments, for the time I have not used it*/}
      {/* {comment.children && (
        <ul>
          {comment.children.map((nestedComment, index) => (
            <Comment key={index} comment={nestedComment} />
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default Comment;
