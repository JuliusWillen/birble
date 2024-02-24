import { useState, useCallback, useEffect } from 'react';

export type Quote = {
  quote: string;
  author: string;
};

export const useQuote = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = 'https://zenquotes.io/api/quotes';

  const fetchQuotes = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setQuotes(data);
      }
      setCurrentIndex(0);
    } catch (error: any) {
      console.error('Failed to fetch quotes:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [apiUrl]);

  useEffect(
    function fetchOnLoad() {
      fetchQuotes();
    },
    [fetchQuotes]
  );

  const next = () => {
    if (currentIndex < quotes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return quotes[currentIndex];
    } else {
      fetchQuotes().then(() => {
        return quotes[0];
      });
    }
  };

  return { next, isLoading, error };
};
