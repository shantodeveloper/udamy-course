import React from 'react';
import pic from '../../image/dijango.jpg'
import './Courses.css'
const Courses = (props) => {
    
    console.log(props)
   
    return (
       <div className="row">
        <div className="col-md-4">
        <div className='coures-div'>
           <img src={pic} alt="" />
           <h2>{props.cou.name}</h2>
           <h3>instructor: {props.cou.instructor}</h3>
           <h3>Price ${props.cou.price}</h3>
           <button className='btn btn-primary' onClick={()=>props.buton(props.cou)}>Enrol Now</button>
        </div>
        </div>
        <div className="col-md-4">
        <div className='coures-div'>
           <img src={pic} alt="" />
           <h2>{props.cou.name}</h2>
           <h3>instructor: {props.cou.instructor}</h3>
           <h3>Price ${props.cou.price}</h3>
           <button className='btn btn-primary' onClick={()=>props.buton(props.cou)}>Enrol Now</button>
        </div>
        </div>
        <div className="col-md-4">
        <div className='coures-div'>
           <img src={pic} alt="" />
           <h2>{props.cou.name}</h2>
           <h3>instructor: {props.cou.instructor}</h3>
           <h3>Price ${props.cou.price}</h3>
           <button className='btn btn-primary' onClick={()=>props.buton(props.cou)}>Enrol Now</button>
        </div>
        </div>
       </div>
    );
};

export default Courses;