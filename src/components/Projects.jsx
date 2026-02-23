import React from 'react'

const Projects = () => {
  return (
    <div>
      <section class="py-16">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-10">
        <h2 class="text-4xl font-semibold text-gray-800">Our Latest Project</h2>
        <div class="mt-6 flex justify-center gap-8 text-gray-500 font-medium">
          <button class="hover:text-green-500">Mobile App</button>
          <button class="hover:text-green-500">Web Development</button>
          <button class="text-green-500 border-b-2 border-green-500 pb-2">
            UI/UX Design
          </button>
          <button class="hover:text-green-500">Graphic Design</button>
          <button class="hover:text-green-500">Motion Graphic</button>
        </div>

        <div class="border-b mt-10"></div>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img src="src/assets/Rectangle-1.png"
               alt="Portfolio"
               class="w-full h-64 object-cover"/>
          <div class="p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-800">
              Portfolio Landing Page
            </h3>
            <p class="text-gray-500 mt-3 text-sm">
              Web development is the art of creating engaging
              and visually appealing websites
            </p>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img src="src/assets/Rectangle-1.png"
               alt="Plant"
               class="w-full h-64 object-cover"/>
          <div class="p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-800">
              Plant Landing Page
            </h3>
            <p class="text-gray-500 mt-3 text-sm">
              Web development is the art of creating engaging
              and visually appealing websites
            </p>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
          <img src="src/assets/Rectangle-1.png"
               alt="Real Estate"
               class="w-full h-64 object-cover"/>
          <div class="p-6 text-center">
            <h3 class="text-xl font-semibold text-gray-800">
              Real Estate Landing Page
            </h3>
            <p class="text-gray-500 mt-3 text-sm">
              Web development is the art of creating engaging
              and visually appealing websites
            </p>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300">
          View All Projects
        </button>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Projects
 