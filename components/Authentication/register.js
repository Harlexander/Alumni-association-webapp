import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
      <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl space-y-8">
        <div>
          <h2 className="mt-6 text-center px-14 text-3xl md:text-6xl font-primary tracking-tight text-gray-900">
            Register as a Member.
          </h2>
        
        </div>
        <form className="mt-8 bg-yellow-400 p-5 md:p-10 m-5 md:m-0 rounded-lg space-y-6 font-montserrat" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="space-y-6 rounded-md shadow-sm">
            <div className='flex justify-between'>
            <div>
              <label htmlFor="email-address" className="">
                First Name
              </label>
              <input
                id="email-address"
                name="full name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div><div>
              <label htmlFor="email-address" className="">
                Last Name
              </label>
              <input
                id="email-address"
                name="full name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div>
            </div>
            <div>
              <label htmlFor="email-address" className="">
                Email
              </label>
              <input
                id="email-address"
                name="full name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div>
            <div>
              <label htmlFor="email-address" className="">
                Mobile
              </label>
              <input
                id="email-address"
                name="full name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div>
            <div>
              <label htmlFor="email-address" className="">
                Profession
              </label>
              <input
                id="email-address"
                name="full name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div>
            <div>
              <label htmlFor="email-address" className="">
                City / State
              </label>
              <input
                id="email-address"
                name="full name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div>
            <div>
              <label htmlFor="email-address" className="">
                Set
              </label>
              <input
                id="email-address"
                name="full name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div>
            <div>
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900"/>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center hidden md:block">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-700 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FontAwesomeIcon icon={faLock} className="h-5 w-5 text-yellow-800 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Register
            </button>
          </div>
          <hr/>
          <div className='text-center text-yellow-900 font-bold'>
            <Link href="register">
              <a>Register as a member</a>
            </Link>
          </div>
        </form>
      </div>
        </div>
  </>
  )
}

export default Register