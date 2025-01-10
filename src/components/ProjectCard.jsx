const ProjectCard = ({ title, description, imageUrl, projectUrl, websiteUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={imageUrl}
        alt={title}
        width="400"
        height="200"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        {projectUrl ? (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
          >
            Voir le projet
          </a>
        ) : (
          <span className="text-gray-500 text-sm">Lien indisponible</span>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
          >
            Voir le site
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
