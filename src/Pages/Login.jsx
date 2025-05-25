import { LogIn } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Spinner } from "flowbite-react"
import { AppContext } from '../utils/AppContext'
import { Formik } from 'formik'
import { loginSchema } from '../utils/schema'

const Login = () => {
  const {
    setName
  } = useContext(AppContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      const storedName = localStorage.getItem('name');
      if (storedName) {
        setName(JSON.parse(storedName));
        navigate(`/${JSON.parse(storedName)}`);
      }
    }, []);
  return (
    <div className='bg-gradient-to-br from-[#001133] via-[#002255] to-[#001144] text-white min-h-screen flex items-center justify-center select-none'
    >

    <Formik
    initialValues={{
      name : ''
    }}
    validationSchema={loginSchema}
    onSubmit={({name}, {resetForm}) => {
      setIsLoading(prev => !prev)
      setTimeout(() => {
          setIsLoading(prev => !prev)
          setName(prev => prev = name)
          localStorage.setItem('name', JSON.stringify(name));
          navigate(`/${name}`)
      }, 2000)
      resetForm()}}>

    {
      props => (
        <form
    className="bg-[#131949] p-6 rounded-2xl space-y-4 w-full max-w-md border border-blue-800"
    onSubmit={props.handleSubmit}>
      <label className="block text-gray-200 uppercase"
      htmlFor='name'
      >Enter your name</label>
      <input
        type="text"
        id='name'
        {...props.getFieldProps('name')}
        placeholder='e.g Israel'
        className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {
        props.touched.name && props.errors.name && <div className='text-red-600 text-sm'>{props.errors.name}</div>
      }

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-5 mt-4 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-2xl transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {
         isLoading ? <span className="loader" ></span> : <p className='flex items-center justify-center gap-3'>Login <LogIn /></p>
        }
      </button>
    </form>
      )
    }

    </Formik>

</div>
  )
}

export default Login
