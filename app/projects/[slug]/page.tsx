import { getPageContent, getPageBySlug, notionClient } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Post } from "@/components/shared/posts";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(params.slug);

  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  console.log("Post: ", post);

  return (
    <Post
      title={(post.properties.Title as any).title[0].plain_text}
      projectUrl={(post.properties.ProjectUrl as any).url}
      githubUrl={(post.properties.GithubUrl as any).url}
      content={html}
      slug={params.slug}
    />
  );
}
