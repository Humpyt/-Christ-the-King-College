import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { X, ChevronLeft, ChevronRight, Camera, Users, Award, BookOpen, Image } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: '/471118833_1109661280544820_2760270409712801570_n.jpg',
      title: 'Student Group Photo',
      description: 'Our dedicated students in their college uniforms, representing the future of early childhood education',
      category: 'Students'
    },
    {
      src: '/472578312_1120525676125047_4605457454840032170_n.jpg',
      title: 'Morning Assembly',
      description: 'Students gathering for morning assembly on the college grounds',
      category: 'Campus Life'
    },
    {
      src: '/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg',
      title: 'College Campus',
      description: 'Beautiful view of our college buildings and facilities in Ngetta',
      category: 'Campus'
    },
    {
      src: '/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg',
      title: 'Community Event',
      description: 'Students and faculty participating in a community outreach program',
      category: 'Events'
    }
  ];

  const categories = ['All', 'Students', 'Campus Life', 'Campus', 'Events'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const highlights = [
    {
      icon: Users,
      title: 'Student Life',
      description: 'Vibrant campus community with diverse learning experiences'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Modern facilities supporting quality education delivery'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Celebrating milestones and student accomplishments'
    },
    {
      icon: Camera,
      title: 'Campus Events',
      description: 'Regular activities fostering community and learning'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="Gallery"
        subtitle="Explore life at Christ the King Nursery Teachers' College through our photo gallery"
        backgroundImage="/472578312_1120525676125047_4605457454840032170_n.jpg"
        icon={<Image className="h-10 w-10 text-white" />}
      />

      {/* Gallery Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Campus Life Highlights</h2>
            <p className="text-xl text-gray-600">Discover what makes our college community special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-indigo-800 mb-8">Photo Gallery</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-indigo-800 text-white'
                      : 'bg-white text-indigo-800 border border-indigo-800 hover:bg-indigo-800 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <Camera className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-500 text-indigo-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-indigo-800 mb-2">{image.title}</h3>
                  <p className="text-gray-700 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-6 rounded-b-lg">
              <h3 className="text-xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-300">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-indigo-900 mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-indigo-800 mb-8 max-w-2xl mx-auto">
            Visit our campus in person to experience the vibrant learning environment and meet our dedicated faculty and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              Schedule Campus Visit
            </button>
            <button className="bg-transparent border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;