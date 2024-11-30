import React from 'react';
import contactimg from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const inpsty =
    '`bg-white/10 col-span-2 text-white placeholder:text-white px-4 py-5 rounded-[7px] mb-[8px] mr-[8px] border border-white/50 ease-in-out duration-300 focus:outline-none  focus:bg-white focus:text-black focus:placeholder:text-black/50`';
  const sendEmail = (e) => {
    e.preventDefault();
    toast
      .promise(
        emailjs.sendForm(
         process.env.REACT_APP_ServiceKey,
          process.env.REACT_APP_TemplateKey,
          e.target,
          process.env.REACT_APP_SecretKey
        ),
        {
          pending: 'Sending Mail....',
          success: 'Mail Sent 👌',
          error: 'Mail Not Sent 🤯',
        }
      )
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      });
  };
  return (
    <section
      id="Contact"
      className="relative contact-main py-14 rounded-t-lg"
      style={{
        background: 'linear-gradient(90.21deg,#aa367c -5.91%,#4a2fbd 111.58%)',
      }}
    >
      <div className="grid grid-cols-2 gap-4  msx:grid-cols-1 mx-32 xlx:mx-20 lgx:mx-10 mdx:7 msx:mx-7">
        <img
          alt=""
          className="flex items-center justify-center h-96 animate-updn"
          src={contactimg}
        />
        <div className="form-holder text-white">
          <h1 className="text-5xl font-centra font-bold mb-5">
            Get In Touch{' '}
            <span className="text-sm font-thin text-white/50 whitespace-nowrap">
              ( Powered by EmailJS )
            </span>
          </h1>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <form
            className="grid grid-cols-4 text-black font-medium tracking-wide font-poppins"
            onSubmit={sendEmail}
          >
            <input
              type={'text'}
              placeholder={'First Name'}
              required
              name="fname"
              minLength={3}
              className={
                `bg-white/10 ` + inpsty + ' focus:placeholder:text-black/50'
              }
            ></input>
            <input
              type={'text'}
              placeholder={'Last Name'}
              minLength={3}
              required
              name='lname'
              className={
                'bg-white/10 ' + inpsty + ' focus:placeholder:text-black/50'
              }
            ></input>
            <input
              type={'email'}
              placeholder={'Email Address'}
              name="email"
              pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2, 4}$'}
              required
              className={
                'bg-white/10 ' + inpsty + ' focus:placeholder:text-black/50'
              }
            ></input>
            <input
              type={'number'}
              placeholder={'Phone Number'}
              name="phone"
              pattern="[0-9]{10}"
              className={
                'bg-white/10 ' + inpsty + ' focus:placeholder:text-black/50'
              }
            ></input>
            <textarea
              placeholder={'Message'}
              name="message"
              className={
                'col-span-4 focus:outline-none bg-white/10 msx:col-span-2' +
                inpsty +
                ' focus:placeholder:text-black/50'
              }
            ></textarea>
            <button
              className={
                'col-start-2 col-end-4 justify-center  border border-none rounded font-poppins text-lg text-black bg-white font-semibold py-4 mt-4 mx-4 whitespace-nowrap ease-in-out duration-300 hover:bg-[#1da1f2] hover:text-white mdx:mx-2'
              }
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
