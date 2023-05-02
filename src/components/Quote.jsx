import React from 'react';
import '../styles/quote.scss';

function Quote() {
  const url = 'https://quote-garden.onrender.com/api/v3/quotes';

  const [data, setData] = React.useState('loading quote...');
  const [author, setAuthor] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const apiCall = async () => {
      try {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data.data[0].quoteText);
            setAuthor(data.data[0].quoteAuthor);
          });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    apiCall();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="quote">
      <h1 className="quote__h1">Quote: </h1>
      <p className="quote__p">
        &quot;
        {data}
        &quot;
      </p>
      <p>
        Author :
        {' '}
        <span>{author}</span>
      </p>
    </div>
  );
}

export default Quote;
