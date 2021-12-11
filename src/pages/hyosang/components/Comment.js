
function Comment(props) {
    let Id = props.text.myID;
    let comment = props.text.myContent;
    
    return(
      <li className = "commentList">

        <span className="userID">{Id}</span>
        <span className="userInput">{comment}</span>
      </li>
    );
}

export default Comment; 