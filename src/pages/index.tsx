import { Card } from '@/elements/card';
import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState('https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg');
  const [quote, setQuote] = useState('You are very cool');

  const regenerate = async () => {
    const [imageResult, quoteResult] = await Promise.all([fetch('https://source.unsplash.com/random'), fetch('https://api.kanye.rest')]);

    if (imageResult.ok) {
      setImage(imageResult.url);
    } else {
      setImage('https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg');
    }

    if (quoteResult.ok) {
      const data = await quoteResult.json();
      setQuote(data.quote);
    } else {
      setQuote('You are very cool');
    }
  };

  return (
    <div className='flex flex-col space-y-5 items-center justify-center'>
      <button className='rounded-md bg-teal-700 w-fit py-2 px-5 shadow-lg text-white' onClick={regenerate}>
        Reload
      </button>
      <Card>
        <div className='flex flex-col space-y-5 text-center max-w-96 mb-5'>
          <img src={image} alt='Birdle' className='max-h-96' />
          <p className='p-5'>{quote}</p>
        </div>
      </Card>
    </div>
  );
}
