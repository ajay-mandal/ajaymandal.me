import { marked } from "marked";
import matter from "gray-matter";
import { codeToHtml } from "shiki";

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Parse markdown file with frontmatter
 * @param {string} markdownContent - Raw markdown string with frontmatter
 * @returns {Promise<Object>} Parsed frontmatter and HTML content
 */
export async function parseMarkdown(markdownContent) {
  // Parse frontmatter
  const { data, content } = matter(markdownContent);
  const frontmatter = data;

  // Convert markdown to HTML
  let htmlContent = await marked.parse(content);

  // Post-process code blocks with Shiki (multi-theme support)
  const codeBlockRegex =
    /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;
  const matches = [...htmlContent.matchAll(codeBlockRegex)];

  for (const match of matches) {
    const [fullMatch, lang, code] = match;
    try {
      // Decode HTML entities
      const decodedCode = code
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      // Render with multiple themes for light/navy/sepia modes
      const highlighted = await codeToHtml(decodedCode, {
        lang,
        themes: {
          light: "github-light",
          navy: "github-dark",
          sepia: "min-light",
        },
        defaultColor: false,
      });
      htmlContent = htmlContent.replace(fullMatch, highlighted);
    } catch (err) {
      console.error(`Shiki highlight error for ${lang}:`, err);
      // Keep original code block on error
    }
  }

  // Generate excerpt (first 200 chars of plain text)
  const plainText = content.replace(/[#*`\[\]()]/g, "").trim();
  const excerpt =
    plainText.length > 200 ? plainText.substring(0, 200) + "..." : plainText;

  return {
    frontmatter,
    content,
    htmlContent,
    excerpt,
  };
}

/**
 * Process image paths in markdown content to handle your @assets convention
 * @param {string} htmlContent - HTML content from markdown
 * @returns {string} HTML with updated image paths
 */
export function processImagePaths(htmlContent) {
  // Replace @assets/images/ paths with /images/blog/
  return htmlContent.replace(/@assets\/images\//g, "/images/blog/");
}

/**
 * Determine category from tags
 * @param {string[]} tags - Array of tags
 * @returns {"project" | "findings"}
 */
export function determineCategoryFromTags(tags) {
  const projectKeywords = [
    "nextjs",
    "reactjs",
    "typescript",
    "honojs",
    "prisma",
    "api",
  ];
  const hasProjectTag = tags.some((tag) =>
    projectKeywords.includes(tag.toLowerCase()),
  );
  return hasProjectTag ? "project" : "findings";
}
