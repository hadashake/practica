import React from 'react';
import './index.css';

import leftImage from './images/Dots.svg'; 
import rightImage from './images/Dots (1).svg'; 
import logo from './images/Logo.svg'; 
import backgroundImage from './images/background.png'; 
import arrowIcon from './images/ArrowUpRight.svg'; 
import logo1 from './images/BI.svg';  
import logo2 from './images/FB.svg';  
import logo3 from './images/HB.svg';  
import logo4 from './images/KF.svg'; 
import logo5 from './images/Numero.svg';
import leftArrow from './images/ArrowLeft.svg';  
import rightArrow from './images/ArrowRight.svg'; 
import leftProductImage from './images/Frame 3579.svg'; 
import rightProductImage from './images/image 1.svg'; 
import leftBlockImage from './images/left.svg'; // Левое изображение для нового блока
import leftPhoto from './images/image 2.svg'; 
import rightPhoto from './images/image 3.svg';
import BlackArrow from './images/Vector.svg'




function App() {
  return (
    <div className="bg-black text-black">
      {/* Строка с изображениями и текстом распродажи */}
      <div className="flex items-center justify-center bg-orange-500 py-2 relative">
        {/* Левая точка */}
        <img src={leftImage} alt="Left" className="absolute left-4 w-9 h-9" />
        
        <span className="text-lg font-bold">SUMMER SALE UP TO 50% OFF</span>
        
        {/* Правая точка */}
        <img src={rightImage} alt="Right" className="absolute right-4 w-9 h-9" />
      </div>

      {/* Блок с логотипом */}
      <div className="bg-[#E7E7E7] py-8 flex justify-center">
        <img src={logo} alt="Logo" className="w-[1216px] h-[169px]" />
      </div>

      {/* Новый блок с фоновым изображением, текстом и иконкой */}
      <div 
        className="relative bg-cover bg-center h-[500px]" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Текст слева */}
        <div className="absolute left-[112px] bottom-[80px] text-2xl font-semibold text-white">
          Spring Season
        </div>

        {/* Текст справа и иконка стрелочки */}
        <div className="absolute right-[139px] bottom-[84px] text-sm flex items-center text-white">
          <span className="mr-2">VIEW COLLECTION</span>
          <img src={arrowIcon} alt="Arrow" className="w-[20px] h-[20px]" />
        </div>
      </div>

      {/* Блок с логотипами */}
      <div className="bg-orange-500 py-4 flex justify-between items-center px-20">
        <img src={logo1} alt="Logo 1" className="w-24 h-auto" />
        <img src={logo2} alt="Logo 2" className="w-24 h-auto" />
        <img src={logo3} alt="Logo 3" className="w-24 h-auto" />
        <img src={logo4} alt="Logo 4" className="w-24 h-auto" />
        <img src={logo5} alt="Logo 5" className="w-24 h-auto" />
      </div>

      {/* Новый блок с изображением товара и стрелками */}
      <div className="flex justify-between items-center py-0 bg-[#E7E7E7]"> {/* Уменьшены отступы */}
        {/* Левая картинка товара с стрелками */}
        <div className="relative">
          <img src={leftProductImage} alt="Left Product" className="w-[720px] h-[720px]" />
          
          {/* Левая стрелочка */}
          <img 
            src={leftArrow} 
            alt="Left Arrow" 
            className="absolute top-[298px] left-0 w-[32px] h-[32px]" 
          />
          
          {/* Правая стрелочка */}
          <img 
            src={rightArrow} 
            alt="Right Arrow" 
            className="absolute top-[298px] right-0 w-[32px] h-[32px]" 
          />
          
          {/* Название товара и цена */}
          <div className="absolute bottom-[20px] left-[50%] transform -translate-x-1/2 text-[20px] font-semibold text-black text-center">
            <div>Basic Shirt</div>
            <div className="text-[28px] font-bold">€49</div> {/* Увеличен размер шрифта для цены */}
          </div>
        </div>
        
        {/* Правая картинка товара с плашкой */}
        <div className="relative">
          <img src={rightProductImage} alt="Right Product" className="w-[720px] h-[720px]" />
          
          {/* Плашка с текстом */}
          <div className="absolute bottom-[40px] left-[40px] bg-black text-white px-6 py-2 rounded-lg">
            Shop Shirts
          </div>
        </div>
      </div>

     {/* Новый блок с фоном и двумя плашками */}
     <div className="bg-[#F3F3F3] py-10 flex justify-between items-center px-20">
        {/* Правая плашка — оранжевая без изображения */}
        <div className="relative w-[596px] h-[636px] bg-orange-500 rounded-lg">
          <div className="absolute top-0 left-0 text-white px-6 py-4 w-full">
            <div className="text-[40px] font-bold">"First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase."</div>
          </div>
          <div className="absolute bottom-0 left-0 text-[20px] font-medium text-white px-6 pb-6">
            — Guera Latissa, Creative Director
          </div>
        </div>

        {/* Левая плашка */}
        <div className="relative w-[596px] h-[636px]">
          <img src={leftBlockImage} alt="Left Block" className="w-full h-full object-cover" />
          <div className="absolute bottom-[40px] left-[40px] bg-black text-white px-6 py-2 rounded-lg">
            Shop Sweaters
          </div>
        </div>
      </div>

      {/* Новый блок с двумя фотографиями */}
      <div className="bg-[#F3F3F3] py-10 flex justify-between items-center px-40">
        <div className="relative">
          <img src={rightPhoto} alt="Women" className="w-[608px] h-[640px] object-cover" />
          <div className="absolute bottom-8 left-10 text-black text-1xl font-regular flex items-center">
            WOMEN <img src={BlackArrow} alt="Arrow" className="w-3 h-3 ml-2" />
          </div>
        </div>
        <div className="relative">
          <img src={leftPhoto} alt="Men" className="w-[608px] h-[640px] object-cover" />
          <div className="absolute bottom-8 right-10 text-black text-1xl font-regular flex items-center">
            MEN <img src={BlackArrow} alt="Arrow" className="w-3 h-3 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;