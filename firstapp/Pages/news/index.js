export default function News() {
  return (
    <div>
      <h1>News</h1>
    </div>
  )
}

const API_KEY = "9hUv0qGGdnCBvGKg4EB3L7mGdBC8hKKJ"

export async function getStaticProps() {
  const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}