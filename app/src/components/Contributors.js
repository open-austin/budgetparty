import React from 'react';

export default ({contributors}) => {
  return <ul className="bubble-list">
    {contributors.map(c =>
      <Contributor
        key={c.id}
        avatar={c.avatar_url}
        href={c.html_url}
        dimensions="100"/>)}
  </ul>
};

const Contributor = ({avatar, href, dimensions}) => {
  return (
    <li className="bubble">
      <a className="bubble-link" href={href}>
        <img src={avatar} height={dimensions} width={dimensions} alt="Lovely contributor"/>
      </a>
    </li>
  );
};
