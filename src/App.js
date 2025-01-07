import './App.css';
import AboutSection from './components/About';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

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
]

function App() {
  return (
    <>
      <Header />
      <AboutSection />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Mes Projets</h2>
        <div className="flex justify-around">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
