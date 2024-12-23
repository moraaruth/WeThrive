'use client'
import React from 'react'

export default function AboutusCard() {
  return (
    <>
      <section className="bg-blue-700 py-10 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-3xl md:text-4xl">
              About Wethrive
            </h2>
            <p className="my-4 text-xl text-white">
              Thriving Together: Advocacy, Awareness, and Action for Autism
            </p>
          </div>
        </div>
        <div>
            <h1>Our Vision</h1>
            <p>We envision a world where every individual with autism has the opportunity to live a fulfilling and meaningful life.</p>
        </div>
      </section>
    </>
  )
}
