import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const categories = [
    { name: 'Films', path: '/films', description: 'Tous les films de Star Wars' },
    { name: 'Personnages', path: '/people', description: 'Tous les personnages de Star Wars' },
    { name: 'Planètes', path: '/planets', description: 'Toutes les planètes de Star Wars' },
    { name: 'Espèces', path: '/species', description: 'Toutes les espèces de Star Wars' },
    { name: 'Vaisseaux', path: '/starships', description: 'Tous les vaisseaux de Star Wars' },
    { name: 'Véhicules', path: '/vehicles', description: 'Tous les véhicules de Star Wars' },
  ];

  return (
    <div>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Star Wars Universe Explorer</h1>
        <p className="text-center mb-8">Explorez l'univers Star Wars et découvrez des informations sur les films, personnages, planètes et plus encore.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.path} 
              to={category.path}
              className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2 text-white">{category.name}</h2>
              <p className="text-gray-300">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;