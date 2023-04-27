import React from 'react';

function Quote() {
  const url = 'https://api.api-ninjas.com/v1/quotes?category=';
  const category = 'knowledge';
  const apiKey = 'iSOePepz25QMz4H2176HwA==Ys7JZLwntIHsSbKO';

  const [data, setData] = React.useState('loadng quote...');

  React.useEffect(() => {
    const apiCall = async () => {
      await fetch(url + category, {
        headers: {
          'X-Api-Key': apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data[0].quote))
        .catch((error) => console.log(error));
    };
    apiCall();
  }, []);

  return (
    <div className="quote">
      <h1 className="quote__h1">Quote: </h1>
      <p className="quote__p">{data}</p>
    </div>
  );
}

export default Quote;
