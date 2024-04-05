import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;

  // Check if 'items' is an array and has elements before mapping
  return (
    <ul className={classes.comments}>
      {Array.isArray(items) && items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
