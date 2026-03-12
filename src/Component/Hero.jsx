import React from 'react'
import "./Hero.css"
import { lists } from './dummyHero'
import { useState } from 'react'
import { call } from './dummyHero'

const Hero = () => {
    const [num, setNum] = useState(0);
    const [img , setImg] = useState([
        "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
        "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
        "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/712x384_1.png",
        "https://ng.jumia.is/cms/0-5-TechWeek/2026/CPR/explosion-day/Teasing/Artboard-1.jpg",
        "https://ng.jumia.is/cms/0-5-TechWeek/2026/Initiatives/Guessproduct-main/Live/Artboard-1-1.gif"
    ])
    const AddNum =()=>{
        setNum(num + 1);

    }

    const SubNum =()=>{
        if (num  > 0) {
            setNum(num -1);
        } else {
            setNum(0);
        }
    }
  return (
    <div className='hero_container'>
        <div className ="first_section">
            <ul className='jumia_items'>
                {lists.map((item) =>(
                    <li key={item.id}>{item.object}</li>
                 ))}   
            </ul>
        </div>

        <div className="second_section">
           <button onClick={SubNum}>&lt;</button>
           <img src={img[num % img.length]} alt ="picture"/>
           <button onClick={AddNum}>&gt;</button>

        </div>

        <div className="third_section">
            <section className='section_one'>
                <ul className='call'>
                    {call.map((item) =>(
                        <li key={item.id}>{item.object}</li>
                    ))}   
                </ul>
            </section>

            <section className='section_two'>
                <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif" />
            </section>
        </div>
      
    </div>
  )
}

export default Hero
