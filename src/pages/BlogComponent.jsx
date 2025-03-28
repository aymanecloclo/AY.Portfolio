import React, { useState, useMemo } from 'react';
import { 
  FaCode, 
  FaCalendarAlt, 
  FaTags, 
  FaSearch, 
  FaShareAlt,
  FaRegBookmark,
  FaRegComments,
  FaTimes
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const BlogComponent = () => {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [searchQuery, setSearchQuery] = useState('');

  // Catégories de blog
  const categories = [
    { id: 'tous', name: 'Tous les articles' },
    { id: 'clean-code', name: 'Clean Code' },
    { id: 'evenements', name: 'Événements' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'developpement', name: 'Développement' }
  ];

  // Articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "Les 10 principes du Clean Code que tout développeur devrait connaître",
      excerpt: "Découvrez comment écrire du code plus lisible, maintenable et efficace avec ces principes éprouvés.",
      category: 'clean-code',
      date: '15 Mars 2023',
      readTime: '8 min',
      tags: ['Best Practices', 'JavaScript', 'Productivité'],
      image: '/blog-images/clean-code-principles.jpg',
      featured: true,
      event: null
    },
    {
      id: 2,
      title: "Retour sur l'événement Orange ODC 2023",
      excerpt: "Mon expérience en tant que speaker lors du grand rendez-vous annuel des développeurs Orange.",
      category: 'evenements',
      date: '5 Avril 2023',
      readTime: '5 min',
      tags: ['Conférence', 'Réseautage', 'Technologie'],
      image: '/blog-images/orange-odc-event.jpg',
      featured: false,
      event: {
        name: "Orange ODC 2023",
        location: "Paris, France",
        date: "30-31 Mars 2023",
        role: "Speaker"
      }
    },
    {
      id: 3,
      title: "L'importance de l'accessibilité en Web Design",
      excerpt: "Comment créer des interfaces inclusives qui profitent à tous les utilisateurs.",
      category: 'web-design',
      date: '22 Février 2023',
      readTime: '6 min',
      tags: ['Accessibilité', 'UI/UX', 'Inclusion'],
      image: '/blog-images/web-accessibility.jpg',
      featured: true,
      event: null
    },
    {
      id: 4,
      title: "Optimisation des performances front-end en 2023",
      excerpt: "Les techniques avancées pour des applications web ultra-rapides.",
      category: 'developpement',
      date: '10 Janvier 2023',
      readTime: '10 min',
      tags: ['Performance', 'React', 'Optimisation'],
      image: '/blog-images/frontend-performance.jpg',
      featured: false,
      event: null
    }
  ];

  // Fonction de recherche optimisée
  const filteredPosts = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'tous' || post.category === activeCategory;
      
      const matchesSearch = 
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchLower) || 
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, activeCategory, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('tous');
  };

  return (
     <section id="hero" className=" py-36 relative   top-0   text-white pb-24">
 

      
        <div className="relative top-12 left-0 w-full h-full pointer-events-none z-40">
          <div className="shape circle-1"></div>
          <div className="shape circle-2"></div>
          <div className="shape circle-3"></div>
          <div className="shape square-1"></div>
        </div>


      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mon Blog Technique
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Partages d'expertise sur le Clean Code, Web Design et Développement
          </motion.p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            {/* Barre de recherche */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher articles, tags..."
                className="w-full pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Catégories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Affichage des filtres actifs */}
          {(searchQuery || activeCategory !== "tous") && (
            <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300 mt-4">
              <span>Filtres actifs :</span>
              {activeCategory !== "tous" && (
                <span className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full flex items-center gap-1">
                  {categories.find((c) => c.id === activeCategory)?.name}
                  <button
                    onClick={() => setActiveCategory("tous")}
                    className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full flex items-center gap-1">
                  "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-indigo-600 dark:text-indigo-400 hover:underline ml-2"
              >
                Tout effacer
              </button>
            </div>
          )}
        </div>

        {/* Articles en vedette */}
        {/* Articles en vedette */}
        {activeCategory === "tous" && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Articles Vedettes
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter(
                  (post) =>
                    post.featured &&
                    (searchQuery === "" ||
                      post.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      post.excerpt
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      post.tags.some((tag) =>
                        tag.toLowerCase().includes(searchQuery.toLowerCase())
                      ))
                )
                .map((post) => (
                  <FeaturedPostCard key={post.id} post={post} />
                ))}
            </div>
          </div>
        )}
        {/* Tous les articles */}
        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {activeCategory === "tous"
            ? "Tous les Articles"
            : categories.find((c) => c.id === activeCategory)?.name}

          {filteredPosts.length > 0 && (
            <span className="text-base font-normal text-gray-500 dark:text-gray-400 ml-2">
              ({filteredPosts.length}{" "}
              {filteredPosts.length > 1 ? "articles" : "article"})
            </span>
          )}
        </h3>

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Aucun article trouvé pour ces critères de recherche.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// Composant Carte d'article vedette
const FeaturedPostCard = ({ post }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
      {post.event && (
        <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {post.event.name}
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <FaCalendarAlt />
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime} de lecture</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          Lire l'article
        </button>
        <div className="flex gap-3 text-gray-400">
          <button className="hover:text-indigo-600 dark:hover:text-indigo-400">
            <FaRegBookmark />
          </button>
          <button className="hover:text-indigo-600 dark:hover:text-indigo-400">
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

// Composant Carte d'article standard
const PostCard = ({ post }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
  >
    <div className="relative h-40 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
        <FaCalendarAlt className="text-xs" />
        <span>{post.date}</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{post.excerpt}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.slice(0, 2).map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs">
            {tag}
          </span>
        ))}
        {post.tags.length > 2 && (
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs">
            +{post.tags.length - 2}
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
          Lire plus
        </button>
        <div className="flex gap-2 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <FaRegComments className="text-xs" /> 12
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default BlogComponent;