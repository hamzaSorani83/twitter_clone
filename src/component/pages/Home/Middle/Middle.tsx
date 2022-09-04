import { Header, TweetBox, ShowTweets, Tweet, ModeToggler, Spinner } from '../../..'


const Middle = () => {
  return (
    <div className='Middle'>
      <Header />
      <TweetBox />
      <ShowTweets />
      <Tweet />
      <ModeToggler />
      <Spinner />
    </div>
  )
}

export default Middle