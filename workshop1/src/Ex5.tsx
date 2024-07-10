import { useState, useEffect } from 'react';

interface CatImageData {
  id: string;
  url: string;
}

const CatImages = () => {
  const [catImages, setCatImages] = useState<CatImageData[]>([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await fetch('http://localhost:3001/cat-images');
        const data: CatImageData[] = await response.json();
        setCatImages(data);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div>
      <p>Imagini cu pisici - Ex 5</p>
      {catImages.map(cat => (
        <div key={cat.id} style={{ marginBottom: '20px' }}>
          <img src={cat.url} alt="Cat" />
        </div>
      ))}
    </div>
  );
};

export default CatImages;
