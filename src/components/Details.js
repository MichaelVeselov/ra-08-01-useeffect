import { useEffect, useState } from 'react';

function Details(props) {
  const { url, info } = props;

  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (info) {
      setLoading(true);
      setError(false);
      fetch(`${url}${info.id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [url, info]);

  return (
    <div style={{ width: '300px' }}>
      {error && <div>Loading error. Please reload the app.</div>}
      {loading && <div>Loading...Please wait.</div>}
      {!loading && userData && (
        <div className='border border-info border-2'>
          <img
            className='d-block w-100'
            src={`${userData.avatar.slice(0, -1) + (userData.id - 1)}`}
            alt={userData.name}
          />

          <div className='p-3 border-info border-bottom'>
            Name: {userData.name}
          </div>
          <div className='p-3 border-info border-bottom'>
            City: {userData.details.city}
          </div>
          <div className='p-3 border-info border-bottom'>
            Company: {userData.details.company}
          </div>
          <div className='p-3 border-info'>
            Position: {userData.details.position}
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
