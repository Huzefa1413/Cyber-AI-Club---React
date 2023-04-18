import React from 'react';
const MemberCard = (props) => {
  return (
    <div class="card">
      <div class="imgBx">
        <img src={props.team.pic} alt="" />
      </div>
      <div class="content">
        <h2>{props.team.name}</h2>
        <p>{props.team.pos}</p>
      </div>
    </div>
  );
};

export default MemberCard;
