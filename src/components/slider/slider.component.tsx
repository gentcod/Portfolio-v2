import { SliderContainer, SliderImage } from "./slider.style";

type SliderImageProp = {
   id: number;
   imgSrc: string;
}[]

const sliderData: SliderImageProp = [
   {
      id: 0,
      imgSrc: 'https://i.ibb.co/6g72ZMR/asset-1.png'
   },
   {
      id: 1,
      imgSrc: 'https://i.ibb.co/Jqnx760/asset-2.png'
   },
   {
      id: 2,
      imgSrc: 'https://i.ibb.co/xsDsX1G/asset-3.png'
   },
   {
      id: 3,
      imgSrc: 'https://i.ibb.co/8sJ54G1/asset-4.png'
   },
   {
      id: 4,
      imgSrc: 'https://i.ibb.co/0YfhD1G/asset-5.png'
   },
   {
      id: 5,
      imgSrc: 'https://i.ibb.co/pLBJwNk/irewolede-asooke.png'
   },
   {
      id: 6,
      imgSrc: 'https://i.ibb.co/Qr6W87m/flyer.png'
   },
   {
      id: 7,
      imgSrc: 'https://i.ibb.co/7y3cfpC/dog-art.jpg'
   },
   {
      id: 8,
      imgSrc: 'https://i.ibb.co/x5yYhnP/shoe-illustration.jpg'
   },
   {
      id: 9,
      imgSrc: 'https://i.ibb.co/7XD84Fx/penguin.jpg'
   },
]

const Slider = () => {
   return (
      <SliderContainer>
         {
            sliderData.map(el => (
               <SliderImage key={el.id} src={el.imgSrc}/>
            ))
         }
      </SliderContainer>
   )
};

export default Slider;