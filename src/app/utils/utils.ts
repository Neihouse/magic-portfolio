import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from 'next/navigation';

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

// Add caching
const postCache = new Map();

async function getMDXFiles(dir: string) {
  try {
    const files = await fs.readdir(dir);
    return files.filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    notFound();
  }
}

async function readMDXFile(filePath: string) {
  try {
    const rawContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const metadata: Metadata = {
      title: data.title || "",
      publishedAt: data.publishedAt,
      summary: data.summary || "",
      image: data.image || "",
      images: data.images || [],
      tag: data.tag || [],
      team: data.team || [],
      link: data.link || "",
    };

    return { metadata, content };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    notFound();
  }
}

async function getMDXData(dir: string) {
  const mdxFiles = await getMDXFiles(dir);
  
  const postsPromises = mdxFiles.map(async (file) => {
    const filePath = path.join(dir, file);
    const { metadata, content } = await readMDXFile(filePath);
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });

  return Promise.all(postsPromises);
}

export async function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  
  // Check cache first
  const cacheKey = postsDir;
  if (postCache.has(cacheKey)) {
    return postCache.get(cacheKey);
  }

  try {
    const posts = await getMDXData(postsDir);
    
    // Store in cache
    postCache.set(cacheKey, posts);
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
    return [];
  }
}
