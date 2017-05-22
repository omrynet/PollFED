import React from 'react';
import PollListItem from './poll_list_item';

const PollList = (props) => {
  const pollItems = props.Polls.map((poll) => {
    return (
      <PollListItem
        key={poll.id}
        poll ={poll} />

    );
  });

  return(
    <ul className="col-md-10 list-group">
      {pollItems}
    </ul>
  );
};

export default PollList;
