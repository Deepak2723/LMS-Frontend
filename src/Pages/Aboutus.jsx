      import HomeLayout from "../Layouts/HomeLayout";

      function AboutUs(){
      return(
          <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
              <div className="flex items-center gap-5 mx-10">
                  <section className="w-1/2 space-y-10">
                      <h1 className="text-5xl text-yellow-500 font-semibold">
                        Affordable and quality education
                      </h1>
                      <p className="text-xl text-gray-200">
                        Our goal is to provide the affordable and quality education to the world.
                        We are providing the platform for the aspiring teachers and student to share
                        their skills, creativity and knowledge to each other to empower and contribute
                        in the growth and wellness of mankind.  
                      </p>
                  </section>
                  <div className="w-1/2">
                    <img 
                    id="test1"
                    style={{
                      filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                    }}
                    alt="about main image"
                    className="drop-shadow-2xl"
                    src=" "
                    />
                  </div>
              </div>
              <div className="carousel w-1/2  my-16 m-auto">
                  <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvzdfxWIfPdPMTyETObp9poOrEfyUAZdLqQ&usqp=CAU" className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                          "Education is the most powerful tool you can use to change the world."
                        </p>
                        <h3 className="text-2xl font-semibold text-yellow-300">APJ Abdul Kalam</h3>
                        <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide4" className="btn btn-circle">❮</a> 
                          <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                      </div> 
                      </div> 
                      <div id="slide2" className="carousel-item relative w-full">
                      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src= "https://pngimg.com/uploads/steve_jobs/steve_jobs_PNG33450.png" className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                          "Your time is limited, so don’t waste it living someone else’s life."
                        </p>
                        <h3 className="text-2xl font-semibold text-yellow-300">Steve Jobs</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide1" className="btn btn-circle">❮</a> 
                          <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                      </div>
                      </div> 
                      <div id="slide3" className="carousel-item relative w-full">
                      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src= "https://www.imageshine.in/uploads/gallery/PNG_Images_of_Narendra_Modi.png" className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                          "It is my absolute belief that Indians have unlimited talent. I have no doubt about our capabilities."
                        </p>
                        <h3 className="text-2xl font-semibold text-yellow-300">Narendra Modi</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide2" className="btn btn-circle">❮</a> 
                          <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                      </div>
                      </div> 
                      <div id="slide4" className="carousel-item relative w-full">
                      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src= "https://i.pinimg.com/564x/be/c0/ab/bec0ab1447aeeeb92e86a47aa1f63090.jpg" className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">
                          "Our education system must promote nationalism but should be modern and relevant to contemporary needs."
                        </p>
                        <h3 className="text-2xl font-semibold text-yellow-300">Yogi Adityanath</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                          <a href="#slide3" className="btn btn-circle">❮</a> 
                          <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                      </div>
                      </div>
                    </div>
            </div>
          </HomeLayout>
        );
      }

      export default AboutUs;