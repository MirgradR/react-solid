// Принцип разделения интерфейса (Interface Segregation Principle, ISP)
const SubscriberActions = () => {
  const handleCommentClick = () => {
    console.log("Adding comment");
  };

  return (
    <div>
      <button onClick={handleCommentClick}>Add Comment</button>
    </div>
  );
};

export default SubscriberActions;
