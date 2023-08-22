import style from '../styles/style.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'
import ImageSlider from './components/Slider'




export default function Home() {
  const emailAddress = 'umeriftikhar2526@gmail.com';
  const heading = "</ TecQasr >"
  const coder = "</>"


    return (
      <>
        <Navbar />

        

        <div className={style.banner}>
      <video autoPlay loop muted className={style.bannerVideo}>
        <source src="bg4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
       
    
        {/* <img className={style.image} src="/bg4.jpg" alt="background" />
        <img className={style.image2} src="/bg3.jpg" alt="background" /> */}
        <section className="text-gray-600 body-font">

          {/* //Welcome to Our Application Development Services */}



          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-cyan-600 tracking-widest font-medium title-font mb-2">{heading}</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to Our Application Development Services</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to our TecQasr, where innovation meets technology! We specialize in creating dynamic and responsive websites and cutting-edge applications that cater to a wide range of needs. The experienced  developer is proficient in web, Android, and iOS application development, ensuring your ideas come to life in the digital world.</p>
            </div>
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Why Choose Us for Application Development?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At TecQasr, we're committed to delivering  exceptional application development services that stand out in terms of quality, functionality, and user experience. Here's why you should choose us.</p>
            </div>
            <div className="flex flex-wrap">
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Expert Development</h2>
                <p className="leading-relaxed text-base mb-4">Our skilled developers are experts in their respective fields, whether it's crafting responsive web apps, feature-rich Android apps, or sleek iOS applications.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Innovative Solutions</h2>
                <p className="leading-relaxed text-base mb-4">We pride ourselves on staying up-to-date with the latest industry trends and technologies, allowing us to provide innovative solutions that give your applications a competitive edge.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">User-Centric Design</h2>
                <p className="leading-relaxed text-base mb-4">A user-friendly design is at the core of every successful application. Our design approach focuses on delivering an intuitive user experience that keeps your users engaged and satisfied.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Cross-Platform Compatibility</h2>
                <p className="leading-relaxed text-base mb-4"> In an increasingly diverse device landscape, cross-platform compatibility is crucial. Our development practices ensure your applications work seamlessly across various devices and operating systems..</p>

              </div>
            </div>

          </div>

          {/* Our Services */}
          {/* Web Application Development */}

          <div className="container px-5 py-20 mx-auto ">
            <div className="flex flex-col text-center w-full mb-10">

              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-600">Our Services</h1>
              <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Web Application Development</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">In today's digital age, a robust web presence is non-negotiable. Our web application development services bring your ideas to life on the web, offering scalability, accessibility, and dynamic functionality. Our services include.</p>
            </div>
            <div className="flex flex-col text-center w-full mb-20">

            </div>
            <div className="flex flex-wrap">
              <div className="shadow-sm mb-5 hover:shadow-lg  xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Custom Web Applications</h2>
                <p className="leading-relaxed text-base mb-4">Tailored to your specific business needs, we create custom web applications that streamline processes and enhance user engagement.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Responsive Design</h2>
                <p className="leading-relaxed text-base mb-4">We develop web applications that look and perform flawlessly across different screen sizes, providing an optimal user experience on desktops, tablets, and smartphones.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">E-Commerce Solutions</h2>
                <p className="leading-relaxed text-base mb-4">From building online stores to integrating secure payment gateways, we create e-commerce solutions that facilitate seamless online transactions.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Cross-Platform Compatibility</h2>
                <p className="leading-relaxed text-base mb-4"> In an increasingly diverse device landscape, cross-platform compatibility is crucial. Our development practices ensure your applications work seamlessly across various devices and operating systems..</p>

              </div>
            </div>

          </div>

          {/* Android Application Development */}

          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">

              <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Android/IOS Application Development</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Experience the future at your fingertips. Our expert team brings your ideas to life with cutting-edge Android and iOS app development. Elevate your brand, engage users, and stay ahead of the curve in today's mobile-driven landscape.</p>
            </div>

            <div className="flex flex-wrap">
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Android/IOS Apps</h2>
                <p className="leading-relaxed text-base mb-4">Empowering Your Mobile World. Explore boundless opportunities with our user-friendly Android and iOS apps.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">UI/UX Excellence</h2>
                <p className="leading-relaxed text-base mb-4">Our design team ensures that your Android app is not only visually appealing but also offers a seamless and intuitive user experience.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">App Testing and Optimization</h2>
                <p className="leading-relaxed text-base mb-4">We rigorously test and optimize your Android app to ensure it performs flawlessly across different devices and screen sizes, providing a consistent experience to all users.</p>

              </div>
              <div className="shadow-sm mb-5 hover:shadow-lg xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl font-medium title-font mb-2 text-cyan-600">Bug Fixes and Updates</h2>
                <p className="leading-relaxed text-base mb-4"> We are dedicated to promptly addressing any bugs or issues that may arise, ensuring a smooth and glitch-free experience for your app users.</p>

              </div>
            </div>
          </div>
          <div className='container px-7 py-20 mx-auto'>
            <ImageSlider/>

          </div>

          

        
          {/* <div className=' container px-5 py-20 mx-auto'>
          <div className='flex flex-col text-center w-full mb-10'>
            <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-cyan-600">Tech Stack</h1>
            <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <img src="/flutter-icon.png" alt="flutter" />
              <img src="/apple-icon.png" alt="apple" />
              <img src="/android-icon.png" alt="android" />
              <img src="/react-js-icon.png" alt="react" />
              <img src="/nextjs-icon.png" alt="nextjs" />
            </div>
          </div>

        </div> */}


          <div className='container px-5 py-20 mx-auto bg-slate-50'>
            <div className='flex flex-col text-center w-full mb-10'>
              <h1 className="sm:text-2xl text-2xl font-medium title-font mb-6 text-cyan-600">Tech Stack</h1>
              <div className="lg:w-2/3 mx-auto leading-relaxed text-base flex flex-wrap items-center justify-center md:space-x-8 space-x-1">
                <img src="/flutter-icon.png" alt="flutter" className="mb-4 ml-0 text-center rounded-full border shadow-md md:max-h-12 max-h-8" />
                <img src="/apple-icon.png" alt="apple" className="mb-4 ml-0 text-center rounded-full border shadow-md md:max-h-12 max-h-8" />
                <img src="/andriod-icon.png" alt="android" className="mb-4 ml-0 text-center rounded-full border shadow-md md:max-h-12 max-h-8" />
                <img src="/laravel-icon.png" alt="android" className="mb-4 ml-0 text-center rounded-full border shadow-md md:max-h-12 max-h-8" />
                <img src="/php-icon.png" alt="android" className="mb-4 ml-0 text-center rounded-full border shadow-md md:max-h-12 max-h-8" />
                <img src="/reactjs-icon.png" alt="react" className="mb-4 ml-0 text-center rounded-full border shadow-md md:max-h-12 max-h-8" />
                <img src="/nextjs-icon.png" alt="nextjs" className="mb-4 ml-0 text-center rounded-full border shadow-md md:max-h-12 max-h-8" />
              </div>
            </div>
          </div>

          <div className='container px-5 py-20 mx-auto'>
            <div className="flex flex-col text-center w-full mb-10">

              <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-cyan-600">Let's Turn Ideas into Reality!</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whether you're a startup looking to make a mark or an established business seeking to expand your digital presence, our application development services are here to turn your ideas into reality. We thrive on challenges and are dedicated to delivering solutions that exceed your expectations. Get in touch with us today to embark on a journey of innovation and success </p>
            </div>
          </div>

          <div className='container px-5 py-20 mx-auto'>
            <div className="flex flex-col text-center w-full mb-10">

              <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-cyan-600">Contact Us</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">To take the first step towards bringing your app idea to life, feel free to get in touch with us. You can contact us via email, where we'll be glad to discuss your requirements and answer any questions you might have. Don't hesitate to reach out, and let's embark on your development journey today.</p>
              <Link className='text-cyan-600 underline' href={`mailto:${emailAddress}`}>umeriftikhar2526@gmail.com</Link>
              <Link className='text-cyan-600 underline' href={'tel:+923402093883'}>+923402093883</Link>

            </div>
          </div>

        </section>

        <Footer></Footer>
      </>
    )
  }

// +923402093883