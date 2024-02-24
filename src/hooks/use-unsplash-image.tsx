import { useState, useCallback, useEffect, useRef } from 'react';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'no', //process.env.NEXT_PUBLIC_API_UNSPLASH_ACCESS_KEY as string,
});

export type UnsplashImage = {
  url: string;
  userName: string;
  userLink: string;
  description: string | null;
};

export const useUnsplashImage = (searchQuery: string) => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isFetching = useRef(false);

  const fetchImages = async () => {
    isFetching.current = true;
    setIsLoading(true);
    setError(null);

    try {
      const response = await unsplash.photos.getRandom({ query: searchQuery, count: 30 });
      if (response.errors) {
        setError(response.errors[0]);
      } else {
        const fetchedImages: UnsplashImage[] =
          (Array.isArray(response.response) &&
            response.response.map(photo => ({
              url: photo.urls.regular,
              userName: photo.user.name,
              userLink: photo.user.links.html,
              description: photo.description || photo.alt_description,
            }))) ||
          [];

        setImages(fetchedImages);
        setCurrentIndex(0);
      }
    } catch (err: any) {
      console.log('error', err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
      isFetching.current = false;
    }
  };

  const next = () => {
    console.log(currentIndex, images.length);
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      return images[newIndex];
    } else {
      fetchImages().then(() => {
        return images[0];
      });
    }
  };

  useEffect(() => {
    if (!images.length && !isFetching.current && !error) {
      fetchImages();
    }
  }, [isLoading]);

  return { next, isLoading, error };
};
