export default async function  ArticlesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='m-12'>
      <nav></nav>
      {children}
    </section>
  )
}
