import ProjectCard from "./ProjectCard"

const projects = [
  {
    id: 1,

    title: 'CV en ligne de Superman',
    description: 'Ce projet est le premier projet réalisé durant ma formation à la Wild Code School. Celui-ci consistait de faire un CV d\'un personnage fictif, ici Superman.',
    imageUrl: '/images/projet1_wcs.png',
    projectUrl: 'https://github.com/Killrian47/Projet1_WCS',
    websiteUrl: 'https://projet-1-wcs.herokuapp.com/'
  },
  {
    id: 2,
    title: 'Martine part en voyage',
    description: 'Ce projet a été réalisé durant un hackathon pendant ma formation à la Wild Code School. Il consistait à faire un site décalé par rapport à une vieille série de livre.',
    imageUrl: '/images/martine-part-en-voyage.png',
    projectUrl: '',
    websiteUrl: ''
  },
  {
    id: 3,
    title: 'Be Green, Be Clean',
    description: 'Ce projet a été réalisé durant un hackathon pendant ma formation à la Wild Code School. Il consistait à faire une plateforme pour mettre en relation des particuliers.',
    imageUrl: '/images/amazon-renting.png',
    projectUrl: '',
    websiteUrl: '',
  },
  {
    id: 4,
    title: 'Projet MakeSense',
    description: 'Plateforme de prise de décisions et d\'idéation. Dernier projet fait durant ma formation à la Wild Code School.',
    imageUrl: '/images/makesense-project.png',
    projectUrl: '',
    websiteUrl: ''
  },
  {
    id: 5,
    title: 'Portfolio V1',
    description: 'Mon premier portfolio qui a été fait en HTML5, CSS3 et Bootstrap. Celui-ci m\'a servi à mettre en avant mes projets réalisés.',
    imageUrl: '/images/portfolio.png',
    projectUrl: 'https://github.com/Killrian47/portfolio',
    websiteUrl: 'https://killianportierportfolio.netlify.app/',
  },
  {
    id: 6,
    title: 'Site intranet QSA Conseil',
    description: 'Projet fait durant mon stage à QSA Conseil. Il consistait à faire une plateforme pour recevoir leurs échantillons de manière homogène',
    imageUrl: '/images/qsa-project.png',
    projectUrl: 'https://github.com/Killrian47/Projet-QSA',
    websiteUrl: ''
  },
  {
    id: 7,
    title: 'Uberspace',
    description: 'Ce projet est une plateforme de mise en relation de client et de particulier pour de la location de vaisseaux spatiaux.',
    imageUrl: '/images/uberspace.png',
    projectUrl: 'https://github.com/Killrian47/uber-space',
    websiteUrl: 'https://uberspace-1996c56d7f47.herokuapp.com/'
  },
  {
    id: 8,
    title: 'VideoClub',
    description: 'Ce projet est une plateforme pour rechercher des films grâce à notre IA préféré ChatGPT. Il se basera sur vos films likés.',
    imageUrl: '/images/videoclub.png',
    projectUrl: 'https://github.com/Killrian47/videoclub',
    websiteUrl: 'https://videoclub-18700c63dcb2.herokuapp.com',
  },
  {
    id: 9,
    title: 'Portfolio V2',
    description: 'Mon second portfolio qui a été fait en React. Celui-ci m\'a servi à mettre en avant mes projets réalisés.',
    imageUrl: '/images/portfolio-v2.png',
    projectUrl: 'https://github.com/Killrian47/mon-portfolio',
    websiteUrl: 'https://killianportfolio-cc3a846c7f83.herokuapp.com/',
  }
]

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center lg:justify-center gap-20 lg:px-20 xl:px-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default Projects