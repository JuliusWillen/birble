import { RoundButton } from '@/elements/button';
import { Card } from '@/elements/card';
import { useQuote, Quote, useUnsplashImage, UnsplashImage } from '@/hooks';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Home() {
  const [image, setImage] = useState<UnsplashImage | null>();
  const [quote, setQuote] = useState<Quote | null>();

  const { next: nextImage, isLoading: loadingImage, error: imageError } = useUnsplashImage('bird');
  const { next: nextQuote, isLoading: loadingQuote, error: quoteError } = useQuote();

  const reload = () => {
    try {
      const imageResult = nextImage();
      const quoteResult = nextQuote();

      if (imageResult) {
        setImage(imageResult);
      }

      if (quoteResult) {
        setQuote(quoteResult);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col justify-between items-center h-full gap-5'>
      <ImageContent image={image?.url} quote={quote?.quote} />
      <RoundButton
        onClick={reload}
        className='size-24'
        icon={faRotate}
        isLoading={loadingImage || loadingQuote}
      />
    </div>
  );
}

const ImageContent = ({ image, quote }: { image?: string | null; quote?: string | null }) => {
  return (
    <Card>
      {quote && <p className='p-4 text-center text-sm'>{`"${quote}"`}</p>}
      {image && <img src={image} alt='Birble' />}
    </Card>
  );
};
