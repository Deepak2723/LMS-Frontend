import HomeLayout from "../Layouts/HomeLayout";

function AboutUs(){
return(
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
            <section className="w-1/2 space-y-10">
                <h1>
                  Affordable and quality education
                </h1>
                <p>
                  Our goal is to provide the affordable and quality education to the world;   
                </p>
            </section>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;