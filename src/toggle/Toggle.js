import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleMessage } from "./actions";

const Toggle = ({ messageVisibility, toggleMessage }) => {
    return (
        <div>
            {messageVisibility && <p>Toggled!</p>}
            <button onClick={toggleMessage}>Toggle Me</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ toggleMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
