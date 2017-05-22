import React from 'react';
import dateFormat from 'dateformat';

const PollListItem = (poll) => {
  const pollCreator = poll.poll.initiator.name;
  const pollTitle = poll.poll.title;
  const participantsCount = poll.poll.participantsCount;
  const date = dateFormat(poll.poll.initiated, "mmmm dd, yyyy");
  const praticipants = (poll.poll.participants).length;
  {console.log(praticipants)}
  return (
    <li className = "list-group-item">
      <div className="poll_list media">
          <div className="rightSide">
              <div className="date">{date}</div>
          </div>
          <div className="LeftSide">
            <div className="media-heading">{pollTitle}</div>
            <div className="media-heading">By {pollCreator}</div>
          </div>
          <div>
            <div className="participantsCount">{participantsCount}</div>
            <div className="participantsCommentsCount">{praticipants}</div>
          </div>
      </div>
    </li>
  );
};

export default PollListItem;
