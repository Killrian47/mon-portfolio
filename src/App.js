import './App.css';
import AboutSection from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';

const projects = [
  {
    title: 'Portfolio',
    description: 'Mon portfolio personnel développé avec React.js et Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/400x200',
    projectUrl: ''
  },
  {
    title: 'E-commerce',
    description: 'Un site e-commerce pour vendre des produits en ligne.',
    imageUrl: 'https://via.placeholder.com/400x200',
    projectUrl: ''
  },
  {
    title: 'E-commerce',
    description: 'Un site e-commerce pour vendre des produits en ligne.',
    imageUrl: 'https://via.placeholder.com/400x200',
    projectUrl: ''
  },
  {
    title: 'E-commerce',
    description: 'Un site e-commerce pour vendre des produits en ligne.',
    imageUrl: 'https://via.placeholder.com/400x200',
    projectUrl: ''
  },
  {
    title: 'E-commerce',
    description: 'Un site e-commerce pour vendre des produits en ligne.',
    imageUrl: 'https://via.placeholder.com/400x200',
    projectUrl: ''
  },
  {
    title: 'E-commerce',
    description: 'Un site e-commerce pour vendre des produits en ligne.',
    imageUrl: 'https://via.placeholder.com/400x200',
    projectUrl: ''
  },
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
