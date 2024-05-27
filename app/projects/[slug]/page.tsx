import { getPostBySlug } from '@/lib/mdx'

const getPageContent = async (slug:any) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

const Page = async ({ params }: { params: any }) => {
  const { content } = await getPageContent(params.slug)

  return (
    <section className=''>
      <div className='container font-incognito
      prose prose-sm sm:prose-base lg:prose-lg
      xl:prose-xl 2xl:prose-2xl prose-invert
      mx-auto
      '
      >{content}</div>
    </section>
  )
}

export default Page
