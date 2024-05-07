import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllCards from "./components/AllCards";
import JobsLists from "./components/JobsLists";

const App = () => {


  return (
    <>
    <Navbar/>    
    <Hero/>
    <AllCards />
    <JobsLists/>  
      
  

   



    

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

    


    </>
  )
}

export default App