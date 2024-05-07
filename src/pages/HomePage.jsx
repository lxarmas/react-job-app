import Hero from '../components/Hero'
import AllCards from '../components/AllCards';
import JobLists from '../components/JobsLists';
import ButtonAllJobs from '../components/ButtonAllJobs';

const HomePage = () => {
  return (
      <>
          <Hero/>   
          <AllCards/>
          <JobLists isHome={true} />
          <ButtonAllJobs/>
      </>
  )
}

export default HomePage