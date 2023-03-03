import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const ContactBox = () => {
    
    const { register, handleSubmit } = useForm()

    const onSubmit = formData => {
        window.location.href = `mailto:denis.kosogov@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    <div className="container grid grid-cols-3 items-center h-[800px] mx-auto text-white relative">
        {/* Heading */}
        <div className="flex flex-col justify-between h-full absolute text-center w-full mx-auto">
            <h3 className="text-center uppercase text-4xl font-oswald tracking-[8px] mt-28">Get <span className="text-theme">In Touch</span></h3>
        </div>
        {/* Left */}
        <div className="space-y-4 z-10">
            <p className="text-lg text-white/50">123-456-7890</p>
            <p className="text-lg text-white/50">email@here.com</p>
            <p className="text-lg text-white/50">email@here.com</p>
            <p className="text-lg text-white/50">USA, New York, 57 Quigley Bridge</p>
        </div>
        {/* Right */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 col-span-2 mt-16 z-10">
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2 float-left">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                    <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                </div>
                <textarea {...register('message')} placeholder="Message" className="contactInput -ml-3" />
            </div>
            <button type="submit" className="float-right text-lgl text-white bg-theme font-mont font-bold py-3 px-8 rounded-full uppercase tracking-widest">Send &#8594;</button>
        </form>
    </div>
  )
}

export default ContactBox