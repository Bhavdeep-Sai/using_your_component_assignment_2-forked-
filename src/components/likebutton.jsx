const LikeButton = ({ isLiked, onToggleLike }) => {
  return (
    <button
      onClick={onToggleLike}
      style={{
        backgroundColor: isLiked ? '#f87171' : '#d1d5db',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
