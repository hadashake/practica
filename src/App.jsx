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
import logo6 from './images/Bloomberg.svg'
import logo7 from './images/Forbes.svg'
import logo8 from './images/Fast company.svg'
import leftCircl from './images/ArrowCirclL.svg';  // Стрелка влево
import rightCircl from './images/ArrowCirclR.svg'; // Стрелка вправо
import product1 from './images/Product 1.jpg'; // Изображение товара 1
import product2 from './images/Product 2.jpg'; // Изображение товара 2
import product3 from './images/Product 3.jpg'; // Изображение товара 3
import logo10 from './images/logo10.png';
import logo11 from './images/logo11.png';
import logo12 from './images/logo12.png';
import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import Image from './images/Photoforlas.png'; // Импорт изображения






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
      <div className="bg-[#F3F3F3] py-10 flex justify-between items-center px-40">
        {/* Правая плашка — оранжевая без изображения */}
        <div className="relative w-[596px] h-[636px] bg-orange-500 rounded-lg">
          <div className="absolute top-0 left-0 text-black px-6 py-4 w-full">
            <div className="text-[40px] font-bold">"First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase."</div>
          </div>
          <div className="absolute bottom-0 left-0 text-[20px] font-medium text-black px-6 pb-6">
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
      <div className="bg-[#F3F3F3] py-10 flex justify-between items-center px-80">
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

      {/* Новый блок с тремя карточками */}
      <div className="bg-[#F3F3F3] py-20">
        {/* Заголовок блока */}
        <h2 className="text-3xl font-semibold text-center mb-12">Our Popular Services</h2>

        {/* Контейнер с тремя карточками */}
        <div className="flex justify-between px-10">

          {/* Карточка 1 */}
          <div className="w-[40%] bg-white p-6 rounded-bl-lg rounded-tl-lg">
            <img src={logo6} alt="Logo 1" className="w-24 h-24 mx-auto mb-6" />
            <p className="text-center mb-4">“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
            <div className="text-center text-[#9B4E97] flex justify-center items-center">
              <span className="mr-2">Learn More</span>
              <img src={BlackArrow} alt="Arrow" className="w-5 h-5" />
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="w-[40%] bg-white p-6">
            <img src={logo7} alt="Logo 2" className="w-24 h-24 mx-auto mb-6" />
            <p className="text-center mb-4">“First light proves it is possible to combine great design with the finest materials available.”</p>
            <div className="text-center text-[#9B4E97] flex justify-center items-center">
              <span className="mr-2">Learn More</span>
              <img src={BlackArrow} alt="Arrow" className="w-5 h-5" />
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="w-[40%] bg-white p-6 rounded-tr-lg rounded-br-lg ">
            <img src={logo8} alt="Logo 3" className="w-24 h-24 mx-auto mb-6" />
            <p className="text-center mb-4">“Redefining excellence with premium materials and visionary robust design.”</p>
            <div className="text-center text-[#9B4E97] flex justify-center items-center">
              <span className="mr-2">Learn More</span>
              <img src={BlackArrow} alt="Arrow" className="w-5 h-5" />
            </div>
          </div>
        </div>


        <div className="relative bg-[#F3F3F3] py-20">
          {/* Стрелка влево */}
          <img
            src={leftCircl}
            alt="Left Arrow"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
          />

          {/* Стрелка вправо */}
          <img
            src={rightCircl}
            alt="Right Arrow"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
          />

          {/* Контейнер для карточек товаров */}
          <div className="flex justify-between px-39 overflow-hidden">
            {/* Карточка 1 */}
            <div className="w-[25%] text-center">
              <img src={product1} alt="Product 1" className="w-full h-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Basic Shirt</h3>
              <p className="text-lg font-bold">€49</p>
            </div>

            {/* Карточка 2 */}
            <div className="w-[25%] text-center">
              <img src={product2} alt="Product 2" className="w-full h-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beige Jumper</h3>
              <p className="text-lg font-bold">€59</p>
            </div>

            {/* Карточка 3 */}
            <div className="w-[25%] text-center">
              <img src={product3} alt="Product 3" className="w-full h-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Signature Jacket</h3>
              <p className="text-lg font-bold">€69</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F3F3] items-center justify-center">
        {/* Заголовок блока */}
        <h2 className="text-3xl font-semibold text-center mb-12">Our Popular Products</h2>

        {/* Контейнер для карточек с изображениями */}
        <div className="flex justify-center items-center">
          {/* Левая карточка с длинным изображением */}
          <div className="w-[596px] h-[600px] relative flex justify-center items-center mr-4">
            <img src={logo10} alt="Logo 1" className="w-full h-full object-cover rounded-lg" />
            {/* Черная плашка с текстом */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-center py-2 px-4 w-[80%] rounded-lg">
              <p className="text-lg">“First Light: Where great design and the finest materials unite in ultimate comfort”</p>
            </div>
          </div>

          {/* Правая колонка с двумя карточками */}
          <div className="w-[596px] h-[600px] flex flex-col gap-6 justify-center mr-4">
            {/* Карточка 2 */}
            <div className="h-[288px] relative flex flex-col justify-center items-center">
              <img src={logo11} alt="Logo 2" className="w-full h-full object-cover rounded-lg" />
              {/* Черная плашка с текстом */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-center py-2 px-4 w-[80%] rounded-lg">
                <p className="text-lg">“First light proves it is possible to combine great design with the finest materials available.”</p>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="w-[596px] h-[288px] relative flex flex-col justify-center items-center mr-4">
              <img src={logo12} alt="Logo 3" className="w-full h-full object-cover rounded-lg" />
              {/* Черная плашка с текстом */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-center py-2 px-4 w-[80%] rounded-lg">
                <p className="text-lg">“Redefining excellence with premium materials and visionary robust design.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-20 flex justify-center items-center bg-slate-100">
        {/* Контейнер для 4 иконок с текстом */}
        <div className="grid grid-cols-4 gap-10">

          {/* Иконка 1 */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white text-white flex justify-center items-center rounded-lg mr-4 shadow-xl">
              <img src={icon1} alt="Icon 1" className="w-12 h-12" />
            </div>
            <p className="text-lg font-semibold">Premium stain resistant fabrics</p>
          </div>

          {/* Иконка 2 */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white text-white flex justify-center items-center rounded-lg mr-4 shadow-xl">
              <img src={icon2} alt="Icon 2" className="w-12 h-12" />
            </div>
            <p className="text-lg font-semibold">Free Express Shipping</p>
          </div>

          {/* Иконка 3 */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white text-white flex justify-center items-center rounded-lg mr-4 shadow-xl">
              <img src={icon3} alt="Icon 3" className="w-12 h-12" />
            </div>
            <p className="text-lg font-semibold">Free returns within 30 days</p>
          </div>

          {/* Иконка 4 */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-white text-white flex justify-center items-center rounded-lg mr-4">
              <img src={icon4} alt="Icon 4" className="w-12 h-12" />
            </div>
            <p className="text-lg font-semibold">Customers rate  us 4.8 / 5.0</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 bg-white">
        {/* Левая карточка с изображением */}
        <div className="w-[50%] h-full relative">
          <img src={Image} alt="Card" className="w-full h-full object-cover rounded-l-lg" />
        </div>

        {/* Правая карточка с текстом */}
        <div className="w-[50%] h-full  text-black flex flex-col justify-start items-start p-6 rounded-r-lg">
          <h2 className="text-3xl font-semibold mb-2">Visit our popup shop</h2>  {/* Заголовок */}
          <p className="text-lg mb-4">Willemsparkweg 63 1071 GS Amsterdam The Netherlands</p>  {/* Подзаголовок */}
        </div>
      </div>


    </div>
  );
}

export default App;
