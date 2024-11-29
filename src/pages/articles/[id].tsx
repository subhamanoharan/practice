import ArticlesRepo, {Article as IArticle} from '@/repositories/articlesRepo'

interface ArticleProps {
  article: IArticle
}
//Static Site Generated with dynamic routes
function Article ({article}: ArticleProps) {
  return (
    <>
      <h2 className="text-center underline">{`Article`}</h2>
      <p>{`${article.id+1}. ${article.name}`}</p>
    </>
  )
}

export async function getStaticProps (context: {params: {id: string}, revalidateReason: string}) {
  const {params: {id}, revalidateReason} = context
  console.log('revalidateReason', revalidateReason)
  const article = await ArticlesRepo.get(id)
  return { props: { article: {id: article.id, name: article.name} }}
}

// Called only during build
export async function getStaticPaths() {
  const articles = await ArticlesRepo.getLimit(10)
  const paths = articles.map((a) => ({ params: { id: a.id.toString() } }))
  console.log(paths)
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}
export default Article
