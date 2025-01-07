const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API",
  "HTML5", "CSS3", "Sass", "Tailwind CSS", "Git"
]

const SkillsSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Mes Compétences</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection