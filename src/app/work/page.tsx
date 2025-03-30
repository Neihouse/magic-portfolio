import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";

export async function generateMetadata() {
  const title = work.title;
  const description = work.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/work/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Generate JSON-LD script for the page
async function GenerateJsonLd() {
  const allProjects = await getPosts(["src", "app", "work", "projects"]);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: work.title,
    description: work.description,
    url: `https://${baseURL}/projects`,
    image: `${baseURL}/og?title=Design%20Projects`,
    author: {
      "@type": "Person",
      name: person.name,
    },
    hasPart: allProjects.map((project) => ({
      "@type": "CreativeWork",
      headline: project.metadata.title,
      description: project.metadata.summary,
      url: `https://${baseURL}/projects/${project.slug}`,
      image: `${baseURL}/${project.metadata.image}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

export default async function Work() {
  return (
    <Column maxWidth="m">
      {/* @ts-expect-error Server Component */}
      <GenerateJsonLd />
      <Projects />
    </Column>
  );
}
