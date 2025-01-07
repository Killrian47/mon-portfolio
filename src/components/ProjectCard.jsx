const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
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
      <div className="px-6 pt-4 pb-2">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600 transition-colors"
        >
          Voir le projet
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
