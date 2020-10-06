import React from 'react';


const EditPage = (props) => {
    console.log(props.match.params)
    return (
        <div>
            This is from my edit component {props.match.params.id}
        </div>
        )
};

export default EditPage;