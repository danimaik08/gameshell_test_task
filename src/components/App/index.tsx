import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import api from '~/api';

const App = observer(() => {
  const { data } = api;

  useEffect(() => {
    api.getResponseAction();
  }, []);

  return (
    <div data-testid="App" className="p-5">
      {data?.state === 'pending' && 'loading...'}
      {data?.state === 'fulfilled' && (
        <>
          <div className="flex justify-between items-center h-10">
            <div>Название</div>
            <div>Курс</div>
          </div>
          {Object.entries(data.value.Valute).map((entry) => {
            const [key, value] = entry;

            return (
              <div key={key} className="flex justify-between items-center h-10">
                <div>{value.Name}</div>
                <div>{value.Value}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
});

export default App;
