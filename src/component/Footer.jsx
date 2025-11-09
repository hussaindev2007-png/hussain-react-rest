function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12">
   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Hussain Resturent
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
             At [Your Restaurant Hussain], food isn’t just a meal — it’s an experience.
Join us and taste the passion in every bite.
            </p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>
                <a href="https://informationes.netlify.app/" className="hover:text-blue-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="https://github.com/hussaindev2007-png" className="hover:text-blue-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Stay Connected
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Subscribe to get updates on new arrivals and special offers.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-800 dark:text-gray-200"
              />
              <a href="">
              <button className="px-2 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
              </a>
            </div>

            
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

      
        <hr className="my-10 border-gray-300 dark:border-gray-700" />

        
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}<span className="font-semibold text-gray-700 dark:text-gray-200">Hussain Resturent</span>.  
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
