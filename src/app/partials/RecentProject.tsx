import Image from "next/image";

interface IGitHubUserRepoProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  svn_url: string;
  topics: Array<string>;
  language: string;
  created_at: string;
}

export default async function RecentProject({ id }: { id: string }) {
  const username = "OldemarJesus";

  let projects_from_github: IGitHubUserRepoProps[] = await fetch(
    `https://api.github.com/users/${username}/repos`
  ).then((d) => d.json());

  projects_from_github = projects_from_github.sort((project_a, project_b) => {
    return new Date(project_a.created_at).getTime() - new Date(project_b.created_at).getTime()
  });

  let lenght = 0;
  projects_from_github = projects_from_github.filter((project) => {
    lenght++;
    return lenght <= 3;
  });

  const projects_in_element = projects_from_github.map((project) => {
    const topics_element = project.topics.map((topic) => {
      return (
        <div
          key={topic}
          className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900"
        >
          {topic}
        </div>
      );
    });
    return (
      <div
        key={project.id}
        className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row"
      >
        <div className="shrink-0">
          <a href={project.svn_url} target="_blank">
            <Image
              width={100}
              height={100}
              className="h-36 w-36 hover:translate-y-1 rounded-md"
              src={`https://ui-avatars.com/api/?name=${project.name}&size=500&background=000000&color=ffffff`}
              alt={project.name}
              loading="lazy"
            />
          </a>
        </div>
        <div>
          <div className="flex flex-col items-center gap-y-2 md:flex-row">
            <a
              className="hover:text-cyan-400"
              href={project.svn_url}
              target="_blank"
            >
              <div className="text-xl font-semibold">{project.name}</div>
            </a>
            <div className="ml-3 flex gap-2">
              {topics_element}

              <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                {project.language}
              </div>
            </div>
          </div>
          <p className="mt-3 text-gray-400">{project.description}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6" id={id}>
      <div className="mb-6 text-2xl font-bold">
        Projetos{" "}
        <span className="bg-gradient-to-br from-customBlue to-cyan-400 bg-clip-text text-transparent">
          Recentes
        </span>
      </div>
      <div className="flex flex-col gap-6">{projects_in_element}</div>
    </div>
  );
}
