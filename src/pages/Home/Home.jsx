import AboutTrade from "./AboutTrade/AboutTrade"
import ApplicationLink from "./ApplicationLink/ApplicationLink"
import Banner from "./Banner/Banner"
import GetStarted from "./GetStarted/GetStarted"
import Investment from "./Investment/Investment"
import Partner from "./Partner/Partner"
import Questions from "./Questions/Questions"

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AboutTrade></AboutTrade>
      <Investment></Investment>
      <Partner></Partner>
      <GetStarted></GetStarted>
      <Questions></Questions>
      <ApplicationLink></ApplicationLink>
    </>
  )
}

export default Home