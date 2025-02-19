import { uniqBy } from "lodash";
import UserCommentAvatar from "./UserCommentAvatar";
import { Comment } from "@/types/comment";

type UserCommentAvatarListProps = {
  commentsList: Comment[];
};
const UserCommentAvatarList: React.FC<UserCommentAvatarListProps> = ({
  commentsList,
}) => {
  const uniqueCommentsList = uniqBy(commentsList, "created_by");
  const maxCount = 3;

  const remainingCount = Math.max(uniqueCommentsList.length - maxCount, 0);

  return (
    <div className="flex shrink-0">
      {uniqueCommentsList.slice(0, maxCount).map((comment) => (
        <UserCommentAvatar
          key={comment.id}
          username={comment.created_by}
          size="sm"
          className="-ml-1 first:ml-0"
        />
      ))}
      {Boolean(remainingCount) && (
        <UserCommentAvatar.Counter
          count={remainingCount}
          size="sm"
          className="-ml-1"
        />
      )}
    </div>
  );
};

export default UserCommentAvatarList;
