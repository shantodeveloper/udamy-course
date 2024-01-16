
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import './Course.css'

const Course = () => {
    const course =[
        {
            imgs: '../../image/content.jpg',
            name: 'online content creator make a perfect',
            instructor: 'tawhid ahmed',
            price: 15.99
        },

         {
            imgs: '../../image/css.jpg',
            name: 'online css web make  a perfect',
            instructor: 'tawhid ahmed',
            price: 20.99
         },

         {
            imgs: '../../image/dijango.jpg',
            name: 'online dijango make a perfect',
            instructor: 'tawhid ahmed',
            price: 25.99
         },

         {
            imgs: '../../image/english.jpg',
            name: 'online english learn make a perfect',
            instructor: 'tawhid ahmed',
            price: 10.99
         },

         {
            imgs: '../../image/images.jpg',
            name: 'online content creator make a perfect',
            instructor: 'tawhid ahmed',
            price: 13.99
         },

         {
            imgs: '../../image/online.jpg',
            name: 'online content creator make a perfect',
            instructor: 'tawhid ahmed',
            price: 11.99
         },

         {
            imgs: '../../image/python.jpg',
            name: 'online pythone course make a perfect',
            instructor: 'tawhid ahmed',
            price: 70.99
         },

         {
            imgs: '../../image/thumnbail.jpg',
            name: 'online thmbnail make a perfect',
            instructor: 'tawhid ahmed',
            price: 8.99
         },

         {
            imgs: '../../image/vedio edit.jpg',
            name: 'online content creator make a perfect',
            instructor: 'tawhid ahmed',
            price: 30.99
         },

         {
            imgs: '../../image/website.jpg',
            name: 'online website make a perfect',
            instructor: 'tawhid ahmed',
            price: 50.99
         }
    ]

   
    const [cart , setcart] = useState([])
    function carthandle(cors) {
        console.log('hi mis asslamu' ,cors)

        const newadd= [...cart , cors]
        setcart(newadd)
    }





    return (
        <div className='course'>
           
           <div className="course-content">
          
            
            {
                course.map(clas=>  <Courses buton={carthandle} cou={clas}></Courses>)
            }
           
           
           </div>
           <div className="div">
             <Cart cartname={cart}></Cart>
           </div>
        </div>
    );
};

export default Course;