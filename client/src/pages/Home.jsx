import React from 'react'
import GarrisonLoginForm from '../components/GarrisonLoginForm'
import HopeLoginForm from '../components/HopeLoginForm'
import AdmedLoginForm from '../components/AdmedLoginForm'
import PeculiarLoginForm from '../components/PeculiarLoginForm'
import NobleLoginForm from '../components/NobleLoginForm'
import MajidLoginForm from '../components/MajidLoginForm'
import LoginForm from '../components/issaLoginForm'


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Login Page</h1>
      <div className="flex space-x-8">
        <MajidLoginForm />
        <GarrisonLoginForm />
        <HopeLoginForm />
        <AdmedLoginForm />
        <PeculiarLoginForm />
        <NobleLoginForm/>
        <LoginForm />

      </div>
    </div>
  )
}

export default Home