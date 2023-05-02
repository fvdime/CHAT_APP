const MyMessage = ({ message }) => {
    //if our message is a text msg or an img
// this is gonna render our message if our messega is img


    if (message.attachments && message.attachments.length > 0) {
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
  
    //rendering text msg
    return (
      <div 
      className="message" 
      style={{ float: 'right', 
      marginRight: '18px', 
      color: 'white', 
      backgroundColor: '#3B2A50' }}>
        {message.text}
      </div>
    );
  };
  
  export default MyMessage;