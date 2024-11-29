import ArticlesRepo from '@/repositories/articlesRepo'

export async function GET() {
  // console.log('Getting from /api/routes')
  const articles = await ArticlesRepo.getAll()
  return Response.json({ articles })
}
