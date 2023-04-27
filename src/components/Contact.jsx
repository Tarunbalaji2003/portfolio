import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs  from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

//template_zh4qh19  service_i74abc7    -QYo32_JlgAL6nmHF
const Contact = () => {

  const formRef =useRef();
    const [form, setForm] = useState({
      name:'',
      email:'',
      message:'',
    });
  const [loading, setLoading] = useState(false)
  const handelChange=(e)=>{
      const {name, value } =e.target;
      setForm({...form, [name]: value})

  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_i74abc7',
    'template_zh4qh19',
    {
      from_name: form.name,
      to_name: 'Sriharish',
      to_email: 'sriharish.cs21@bitsathy.ac.in',
      from_email: form.email,
      message:form.message,

    },
    '-QYo32_JlgAL6nmHF'
    )

    .then(() =>{
      setLoading(false);
      alert("Thank you. I will get back to you As soon As possible. ");
      setForm({
        name:'',
        email:'',
        message:'',
      })
    },
     (error) =>{
      setLoading(false)
      console.log(error);
      alert("Something went wrong.")
     }
    )

  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          GET IN TOUCH
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>
        <form
        ref={formRef}
        onSubmit={handelSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
            Your Name
            </span>
          <input
          type="text"
          name="name"
          value={form.name}
          onChange={handelChange}
          placeholder="what's your name?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none bprder-none font-medium'
          >
          </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
            Your Email
            </span>
          <input
          type="email"
          name="email"
          value={form.email}
          onChange={handelChange}
          placeholder="what's your email?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none bprder-none font-medium'
          >
          </input>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
            Your Message
            </span>
          <textarea
          rows='7'
          name="message"
          value={form.message}
          onChange={handelChange}
          placeholder="what's your Message?"
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none bprder-none font-medium'
          >
          </textarea>
          </label>
          <button
          type="submit"
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading?'Sending....':"send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl: h-auto md:h-[550px] h-[350px]'
      >
          <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")