import React from 'react'
import Layout from './Layout/Layout'

const Pricing = () => {
  return (
   
      <Layout>
          <div class="m-4 flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
    <div class="mb-6">
        <div class="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
                <p class="text-sm font-bold tracking-wider uppercase">Get started for</p>
                <p class="text-5xl font-extrabold">Free</p>
            </div>
            <div class="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50"><svg
                    class="w-10 h-10 text-gray-600" viewBox="0 0 24 24" stroke-linecap="round" strokeLidth="2">
                    <path
                        d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                        fill="none" stroke="currentColor"></path>
                    <path d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z" fill="none"
                        stroke="currentColor"></path>
                </svg>
            </div>
        </div>
        <div>
            <p class="mb-2 font-bold tracking-wide">Features</p>
            <ul class="space-y-2">
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-purple-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">Unlimited Text, Image, Song and TV posts</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-purple-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">1 Free Discussion Space per day</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-purple-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">5 Circles with unlimited members</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-purple-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">1 Free Page</p>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <a href="#"
            class="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">Start
            for free
        </a>
        <p class="text-sm text-gray-600">Forever free plan. Feature availablity subject to change.</p>
    </div>
</div>
      </Layout>
      
      
  )
}

export default Pricing
