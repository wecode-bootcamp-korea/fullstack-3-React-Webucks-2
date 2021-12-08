import React from "react";

function Comment(props){

    return(
        <div className="reple">
            <span style="font-wieght:bold;">{props.user ? props.user : (sessionStorage.getItem("id"))}</span> : {props.text}
        </div>
    )
}

export default Comment;