import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";
import { Suspense } from "react";

interface ProjectsProps {
  range?: [number, number?];
}

// Loading component to show while data is loading
function ProjectsSkeleton() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {[1, 2, 3].map((i) => (
        <div key={i} className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
      ))}
    </Column>
  );
}

// Project list component that fetches and displays projects
async function ProjectList({ range }: ProjectsProps) {
  // Fetch projects asynchronously
  const allProjects = await getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}

// Main export that wraps the async component in Suspense
export function Projects(props: ProjectsProps) {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <ProjectList {...props} />
    </Suspense>
  );
}
