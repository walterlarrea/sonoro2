import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './equalizer.style.css'

const LoadingEqualizer = () => {
  const { t } = useTranslation();

  let intervalHolder = null;
  let speed = 500;

  useEffect(() => {
    const bars = document.querySelectorAll(".bar > span");
    intervalHolder = setInterval(() => {
      for (const bar of bars) {
        const height = (Math.random() * 100).toFixed(2) + "%";
        bar.style.transform = `translate3d(0, -${height}, 0)`;
        bar.style.transitionDuration = `${speed}ms`;
      }
    }, speed + 50);
  }, [])

  return (
    <div className="
      flex 
      flex-col 
      max-h-full 
      h-screen 
      justify-center 
      items-center 
      flex-wrap 
      gap-4 
      p-8">
      <div className="
        grid 
        grid-cols-5 
        gap-1 
        w-40 
        h-28 ">
        <div className="bar"><span className='bg-[#090909] h-[80%]' /></div>
        <div className="bar"><span className='bg-[#090909] h-[63%]' /></div>
        <div className="bar"><span className='bg-[#090909] h-[11%]' /></div>
        <div className="bar"><span className='bg-[#090909] h-[32%]' /></div>
        <div className="bar"><span className='bg-[#090909] h-[51%]' /></div>
      </div>
      <div className='text-3xl'>
        {t('loader.loading')}
      </div>
    </div>
  )
}

export default LoadingEqualizer