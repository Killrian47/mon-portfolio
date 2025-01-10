import './App.css';
import AboutSection from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';

const projects = [
  {
    id: 1,
    title: 'Portfolio V1',
    description: 'Mon premier portfolio qui a été fait en HTML5, CSS3 et Bootstrap. Celui-ci m\'a servi à mettre en avant mes projets réalisés.',
    imageUrl: '/images/portfolio.png',
    projectUrl: 'https://github.com/Killrian47/portfolio',
    websiteUrl: 'https://killianportierportfolio.netlify.app/',
  },
  {
    id: 2,
    title: 'CV en ligne de Superman',
    description: 'Ce projet est le premier projet réalisé durant ma formation à la Wild Code School. Celui-ci consistait de faire un CV d\'un personnage fictif.',
    imageUrl: '/images/projet1_wcs.png',
    projectUrl: 'https://github.com/Killrian47/Projet1_WCS',
    websiteUrl: 'https://projet-1-wcs.herokuapp.com/'
  },
  {
    id: 3,
    title: 'Uberspace',
    description: 'Ce projet est une plateforme de mise en relation de client et de particulier pour de la location de vaisseaux spatiaux.',
    imageUrl: '/images/uberspace.png',
    projectUrl: 'https://github.com/Killrian47/uber-space',
    websiteUrl: 'https://uberspace-1996c56d7f47.herokuapp.com/'
  },
  {
    id: 4,
    title: 'VideoClub',
    description: 'Ce projet est une plateforme pour rechercher des films grâce à notre IA préféré ChatGPT. Il se basera sur vos films likés.',
    imageUrl: '/images/videoclub.png',
    projectUrl: 'https://github.com/Killrian47/videoclub',
    websiteUrl: 'https://videoclub-18700c63dcb2.herokuapp.com',
  },
  {
    id: 5,
    title: 'Site intranet QSA Conseil',
    description: 'Projet fait durant mon stage à QSA Conseil. Il consistait à faire une plateforme pour recevoir leurs échantillons de manière homogène',
    imageUrl: '/images/qsa-project.png',
    projectUrl: 'https://github.com/Killrian47/Projet-QSA',
    websiteUrl: ''
  },
  {
    id: 6,
    title: 'Projet MakeSense',
    description: 'Plateforme de prise de décisions et d\'idéation. Dernier projet fait durant ma formation à la Wild Code School.',
    imageUrl: '/images/makesense-project.png',
    projectUrl: '',
    websiteUrl: ''
  }
]

function App() {
  return (
    <>
      <head>
        <title>Mon Portfolio</title>
        <link rel="icon" href="/logo.png" />
      </head>
      <Header />
      <AboutSection />
      <SkillsSection />
      <main className="container mx-auto px-4 py-12 mb-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Mes Projets</h2>
        <div className="flex flex-wrap justify-center lg:justify-center gap-20 lg:px-20 xl:px-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
