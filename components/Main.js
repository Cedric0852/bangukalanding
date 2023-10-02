export default function Main() {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            We are helping local shops to go digital.
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
          We aim to revolutionize the retail industry by making shopping more efficient and convenient for our users, 
          and by providing a platform for businesses to connect with customers and grow their sales
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="https://github.com/r1/nine4-2/"
            >
              <span className="justify-center">Find out more</span>
            </a>
          </div>
        </div>
        <div className="mx-4 md:mx-0 xl:mr-44 sm:mb-28 mb-4 lg:mb-0 md:pl-10 relative p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <video 
                autoPlay
                loop
                muted
                controls
                className="w-full h-auto sm:h-48 md:h-64 lg:h-80 xl:h-96 rounded-lg"
                src="./images/scrennrecord.mp4"
            ></video>
        </div>




      </div>
      <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
              Trusted by top-tier product companies
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/images/Google-Logo.webp"
                alt="Google Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Shopify-Logo.svg"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
          The easy way to shop.

          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
            Meet Phoebe, a busy working mother of two who loves to shop online and offline.
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
              <video 
                  controls
                  className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
                  poster="./images/placeholder.png"  // Path to your cover image
                  src="./images/videotobeopenedfullscreen.mp4"
              ></video>
          </div>
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              Join waitlist.
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              It's Free, You are a small business that want to go online 
            </h1>
            <input
              placeholder="+250788008800"
              name="phone"
              type="phone"
              autoComplete="phone"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Join</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
