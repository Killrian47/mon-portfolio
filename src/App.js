import './App.css';
import AboutSection from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <>
      <head>
        <title>Mon Portfolio</title>
        <link rel="icon" href="/logo.png" />
      </head>
      <Header />
      <div className="text-center py-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-2">Mon Portfolio</h1>
        <p className="text-xl text-gray-600">Killian Portier, Développeur Web Passionné</p>
      </div>
      <AboutSection />
      <SkillsSection />
      <main className="container mx-auto px-4 py-12 mb-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Mes Projets</h2>
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
