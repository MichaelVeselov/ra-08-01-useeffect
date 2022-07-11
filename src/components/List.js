import { useEffect, useState } from 'react';

function List(props) {
  const { url, info, handleClick } = props;

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`${url}users.json`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const listItemClassName = 'list-group-item p-3 border-info';

  const elements = list.map((item) => (
    <li
      className={
        info && item.id === info.id
          ? `${listItemClassName} active`
          : listItemClassName
      }
      style={{ width: '300px', cursor: 'pointer' }}
      key={item.id}
      onClick={() => handleClick(item)}
    >
      {item.name}
    </li>
  ));

  return (
    <div style={{ width: '300px' }}>
      {error && <div>Loading error. Please reload the app.</div>}
      {loading && <div>Loading...Please wait.</div>}
      <ul className='list-group list-unstyled border border-info border-2'>
        {elements}
      </ul>
    </div>
  );
}

export default List;
