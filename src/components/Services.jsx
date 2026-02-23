import React from 'react'

const Services = () => {
  return (
    <div class="bg-gray-100">
      <section class="relative overflow-hidden py-20">
        <div class="absolute inset-0">
          <div class="absolute top-0 w-full h-full bg-green-100 rounded-[100px]"></div>
        </div>

  <div class="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    <div class="grid sm:grid-cols-2 gap-8">
      <div class="bg-white/70 hover:bg-green-400 backdrop-blur rounded-2xl p-8 shadow-sm">
        <div class="text-green-500 text-4xl mb-4">💻</div>
        <h3 class="text-lg font-semibold mb-3">Web Development</h3>
        <p class="text-gray-500 text-sm">
          Web development is the art of creating engaging and visually appealing websites
        </p>
      </div>
      <div class="bg-white/70 hover:bg-green-400 rounded-2xl p-8 shadow-md">
        <div class="text-4xl mb-4">🎨</div>
        <h3 class="text-lg font-semibold mb-3">UI/UX Analysis</h3>
        <p class="text-sm text-gray-500 opacity-90">
          Web development is the art of creating engaging and visually appealing websites
        </p>
      </div>
      <div class="bg-white/70 hover:bg-green-400 backdrop-blur rounded-2xl p-8 shadow-sm">
        <div class="text-green-500 text-4xl mb-4">📈</div>
        <h3 class="text-lg font-semibold mb-3">SEO Marketing</h3>
        <p class="text-gray-500 text-sm">
          Web development is the art of creating engaging and visually appealing websites
        </p>
      </div>
      <div class="bg-white/70 hover:bg-green-400 backdrop-blur rounded-2xl p-8 shadow-sm">
        <div class="text-green-500 text-4xl mb-4">✏️</div>
        <h3 class="text-lg font-semibold mb-3">Graphic Design</h3>
        <p class="text-gray-500 text-sm">
          Web development is the art of creating engaging and visually appealing websites
        </p>
      </div>

    </div>
    <div>
      <h2 class="text-4xl font-semibold text-gray-800 leading-snug mb-6">
        We Offer A Variety Of <br/> Services Such As
      </h2>

      <p class="text-gray-500 mb-8 leading-relaxed">
        At our company, we pride ourselves on offering a variety of services to meet 
        the diverse needs of our clients. Whether you're looking for marketing 
        assistance, website design, or IT support, we've got you covered
      </p>

      <button class="bg-green-200 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-300 transition">
        All Services
      </button>
    </div>

  </div>

</section>
    </div>
  )
}

export default Services
