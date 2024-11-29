import ArticlesRepo from '@/repositories/articlesRepo'

export default async function Articles () {
  //Fetch data for Server Side components
  // 1) Data fetched during build
  // 2) Not fetched after
  const articles = await ArticlesRepo.getAll()
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
