import React from "react";
import Modal from "../modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <>
      <div className="ui button negative">Delete</div>
      <div className="ui button">Cancel</div>
    </>
  );
  return (
    <div>
      StreamDelete
      <Modal
        onDismiss={() => history.push("/")}
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
