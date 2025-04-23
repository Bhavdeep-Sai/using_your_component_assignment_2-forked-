import LikeButton from './likebutton';

const PostCard = ({ profilePicture, username, content, isLiked, onToggleLike }) => {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '20px',
        margin: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
      }}
    >
      <img
        src={profilePicture}
        alt={`${username}'s profile`}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '10px',
        }}
      />
      <h3 style={{ margin: '10px 0', color: '#374151' }}>{username}</h3>
      <p style={{ marginBottom: '10px', color: '#6b7280' }}>{content}</p>
      <LikeButton isLiked={isLiked} onToggleLike={onToggleLike} />
    </div>
  );
};

export default PostCard;
