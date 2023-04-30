import React from 'react';

const MemberCard = (props) => {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={props.team.pic} alt="" />
      </div>
      <div className="content">
        <h2>{props.team.name}</h2>
        <p>{props.team.pos}</p>
      </div>
    </div>
  );
};

export default MemberCard;
