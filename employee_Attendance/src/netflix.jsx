import React from 'react';
import { Bell, Search } from 'lucide-react';

const NetflixClone = () => {
  const popularContent = [
    { id: 1, title: "Boss Baby", image: "https://picsum.photos/200/300?random=1" },
    { id: 2, title: "Arrested Development", image: "https://picsum.photos/200/300?random=2" },
    { id: 3, title: "Riverdale", image: "https://picsum.photos/200/300?random=3" },
    { id: 4, title: "Explained", image: "https://picsum.photos/200/300?random=4" },
  ];
  
  const trendingContent = [
    { id: 5, title: "13 Reasons Why", image: "https://picsum.photos/200/300?random=5" },
    { id: 6, title: "Unbreakable Kimmy Schmidt", image: "https://picsum.photos/200/300?random=6" },
    { id: 7, title: "The Toys That Made Us", image: "https://picsum.photos/200/300?random=7" },
    { id: 8, title: "Ibiza", image: "https://picsum.photos/200/300?random=8" },
  ];
  
  const watchlistContent = [
    { id: 9, title: "Sherlock", image: "https://picsum.photos/200/300?random=9" },
    { id: 10, title: "The Office", image: "https://picsum.photos/200/300?random=10" },
    { id: 11, title: "Dexter", image: "https://picsum.photos/200/300?random=11" },
  ];
  
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="https://picsum.photos/100/50?random=4" alt="Netflix" className="h-8" />
          <nav>
            <ul className="flex space-x-4">
              <li>Browse</li>
              {/* Add more nav items here */}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5" />
          <Bell className="h-5 w-5" />
          <img src="https://picsum.photos/32/32?random=4" alt="User" className="h-8 w-8 rounded" />
        </div>
      </header>

      <main className="p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular on Netflix</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {popularContent.map((item) => (
              <div key={item.id} className="flex-none w-40">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                <p className="mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {trendingContent.map((item) => (
              <div key={item.id} className="flex-none w-40">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                <p className="mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Watchlist for James</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {watchlistContent.map((item) => (
              <div key={item.id} className="flex-none w-40">
                <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                <p className="mt-2">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NetflixClone;