import React from 'react'
import './topBrands.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick/lib/slider';

const topBrandsList=[
    {
     id:1,
     title:'Empire Restaurant',
     cover:'https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png',
     time:'26 min'
    },
    {
     id:2,
     title:'Burger King',
     cover:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png',
     time:'34 min'
    },
    {
     id:3,
     title:"McDonald's",
     cover:'https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png',
     time:'25 min'
    },
    {
     id:4,
     title:'Subway',
     cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520725.png',
     time:'23 min'
    },
    {
     id:5,
     title:'KFC',
     cover:'https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png',
     time:'27 min'
    },
    {
     id:6,
     title:"Leon's Burgers and Wings",
     cover:'https://b.zmtcdn.com/data/brand_creatives/logos/7e91871a40c877332641a411e7dea18b_1668319552.png',
     time:'31 min'
    },
    {
     id:7,
     title:'Nandhana Palace',
     cover:'https://b.zmtcdn.com/data/brand_creatives/logos/f7e21286435d82037d62392994ea0104_1638685800.png',
     time:'37 min'
    }

];

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };





const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top Brands For You</div>
        <Slider {...settings}>
            {topBrandsList.map((brand)=>{
              return (
              <div>
                <div className='top-brands-cover'>
         <img 
        src={brand.cover}
          alt={brand.time}
           className='top-brands-image'/>
              </div>
              </div>
              );
            })}
        </Slider>
    </div>
  )
}

export default TopBrands