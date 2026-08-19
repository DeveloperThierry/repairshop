import Link from 'next/link'
import React from 'react'

export const Home = () => {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Thierry&apos;s computer<br/> Repair Shop</h1>
          <address>
          55555 Gatorway 8th Street, Miami, FL 55555
          </address>
          <p>
            Open Daily: 9 am to 5 pm
          </p>
          <Link href="tel:5555555555" className="hover:underline">555-555-5555</Link>
        </div>
      </main>
    </div>
  )
}

export default Home