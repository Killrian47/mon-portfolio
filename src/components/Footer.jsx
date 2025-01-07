const Footer = () => {
  return (
    <footer class="bg-gray-100">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="flex align-center mb-6 md:mb-0">
            <img src="/logo.png" class="h-8 me-3 rounded-full" alt="Killian Logo" />
            <span class=" text-2xl font-semibold whitespace-nowrap">Killian Portier</span>
          </div>
          <div class="md:flex md:justify-between">
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                <ul class="text-gray-600 font-medium">
                  <li class="mb-4">
                    <a href="https://fr.react.dev/" class="hover:underline" target="blank">React</a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" class="hover:underline" target="blank">Tailwind CSS</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Suivez moi</h2>
                <ul class="text-gray-600 font-medium">
                  <li class="mb-4">
                    <a href="https://github.com/Killrian47" class="hover:underline " target="blank">Github</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/killian-portier47/" class="hover:underline" target="blank">LindkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;