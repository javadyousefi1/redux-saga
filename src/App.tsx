import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { fetchCharactersRequest } from './redux/characterSlice';

const App: React.FC = () => {

  const [refetch, setRefetch] = useState(false)

  const dispatch = useDispatch<AppDispatch>();
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharactersRequest()); // Fetch characters when component mounts
  }, [dispatch, refetch]);

  return (
    <div>
      <button onClick={() => setRefetch(p => !p)}>refetch</button>
      <h1>Rick and Morty Characters</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map((char) => (
          <div key={char.id} style={{ margin: '10px', textAlign: 'center' }}>
            <img src={char.image} alt={char.name} width={100} />
            <p>{char.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
