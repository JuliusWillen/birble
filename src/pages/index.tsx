import { RoundButton } from '@/elements/button';
import { Card } from '@/elements/card';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(
    'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg'
  );
  const [quote, setQuote] = useState('You are very cool');
  const [isLoading, setIsLoading] = useState(false);

  const reload = async () => {
    setIsLoading(true);
    try {
      const imageResult = await fetch('https://source.unsplash.com/random');
      const quoteResult = await fetch('https://api.kanye.rest');

      if (quoteResult.ok) {
        const data = await quoteResult.json();
        setQuote(data.quote);
      }
      if (imageResult.ok) {
        setImage(imageResult.url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-between items-center h-full gap-5'>
      <ImageContent image={image} quote={quote} />
      <RoundButton onClick={reload} className='size-24' icon={faRotate} isLoading={isLoading} />
    </div>
  );
}

const ImageContent = ({ image, quote }: { image: string; quote: string }) => {
  return (
    <Card>
      <p className='p-4 text-center text-sm'>{`"${quote}"`}</p>
      <img src={image} alt='Birble' />
    </Card>
  );
};
