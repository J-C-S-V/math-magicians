import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import '../styles/quote.scss';

const url = 'https://api.api-ninjas.com/v1/quotes?category=';
const category = 'knowledge';
const apiKey = 'uh6hqJhDvTvyi4WRQiKDMCQKkpSxDT7pUbsP0v2J';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(url + category, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    apiCall();
  }, []);

  return (
    <div className="quote">
      {error ? <div>{error}</div> : null}
      {isLoading ? <BeatLoader /> : null}
      {quote && author ? (
        <>
          <h1 className="quote__h1">Quote:</h1>
          <p className="quote__p">
            &quot;
            {quote}
            &quot;
          </p>
          <p>
            Author :
            {' '}
            {author}
          </p>
        </>
      ) : null}
    </div>
  );
}

export default Quote;
