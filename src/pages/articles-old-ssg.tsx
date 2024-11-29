import ArticlesRepo, {Article} from '@/repositories/articlesRepo'

// Static side Generation
function Articles ({articles}: {articles: Article[]}) {
  return (
    <>
      <h2 className="text-center underline">{`Articles - ${articles.length}`}</h2>
      <ul>
        {articles.map(({id, name}) => (
          <li key={id}>
            {`${id+1}. ${name}`}
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const articles = await ArticlesRepo.getLimit(100)
  return { props: { articles: articles.map(({id, name}) => ({id, name})) }}
}
export default Articles
