import { comments } from "../../data/comments";

const Comment = ({ comment }) => {
  return (
    <div key={comment.id}>
      {comment.id} {comment.text}
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    path: [
      { params: { commentId: 1 } },
      { params: { commentId: 2 } },
      { params: { commentId: 3 } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return {
    props: {
      comment,
    },
  };
}
