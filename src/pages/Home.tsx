import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Users, 
  Award, 
  GraduationCap, 
  Heart,
  BookOpen,
  Target,
  Eye,
  Star,
  ArrowRight,
  ChevronLeft,
  Play,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const slides = [
    {
      image: '/471118833_1109661280544820_2760270409712801570_n.jpg',
      title: 'Shaping Tomorrow\'s Early Childhood Educators',
      subtitle: 'Excellence in Education',
      description: 'Join our community of dedicated educators and make a lasting impact on young minds through quality early childhood education.',
      cta: 'Explore Programs',
      ctaLink: '/programs'
    },
    {
      image: '/472578312_1120525676125047_4605457454840032170_n.jpg',
      title: 'Christian Values Meet Academic Excellence',
      subtitle: 'Faith-Based Learning',
      description: 'Experience holistic education grounded in Christian principles, preparing you for a meaningful career in early childhood development.',
      cta: 'Learn About Us',
      ctaLink: '/about'
    },
    {
      image: '/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg',
      title: 'Practical Training for Real-World Success',
      subtitle: 'Hands-On Experience',
      description: 'Gain valuable practical experience through our comprehensive teaching practice programs in nursery schools across Uganda.',
      cta: 'Apply Now',
      ctaLink: '/admissions'
    }
  ];

  const stats = [
    { number: '121', label: 'Current Students', icon: Users, color: 'from-blue-500 to-purple-600' },
    { number: '5+', label: 'Years of Excellence', icon: Award, color: 'from-amber-500 to-orange-600' },
    { number: '3', label: 'Academic Programs', icon: GraduationCap, color: 'from-green-500 to-teal-600' },
    { number: '15+', label: 'Faculty & Staff', icon: Users, color: 'from-pink-500 to-rose-600' },
  ];

  const highlights = [
    {
      icon: Heart,
      title: 'Christian Values',
      description: 'Education grounded in faith and moral integrity',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Ndejje University Affiliate',
      description: 'Accredited programs with recognized qualifications',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Practical Training',
      description: 'Hands-on experience in real nursery school environments',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Target,
      title: 'Career Ready',
      description: 'Graduates prepared for immediate employment',
      color: 'from-amber-500 to-yellow-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden slider-container">
        <div 
          className="slider-track h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(55, 48, 163, 0.7), rgba(30, 27, 75, 0.8)), url('${slide.image}')`
                }}
              />
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-4xl">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium">
                        <Sparkles className="mr-2 h-4 w-4" />
                        {slide.subtitle}
                      </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 === 1 ? 'text-amber-400' : ''}>
                          {word}{' '}
                        </span>
                      ))}
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-100 mb-8 opacity-90 leading-relaxed max-w-3xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={slide.ctaLink}
                        className="group bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
                      >
                        {slide.cta}
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        to="/gallery"
                        className="group glass-effect hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button onClick={prevSlide} className="slider-nav prev">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button onClick={nextSlide} className="slider-nav next">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-10 floating-animation">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400/30 to-purple-500/30 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-1/4 left-10 floating-animation" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
                data-animate
                id={`stat-${index}`}
              >
                <div className={`glass-effect w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 ${
                  isVisible[`stat-${index}`] ? 'animate-bounce' : ''
                }`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-indigo-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate id="about-content" className={isVisible['about-content'] ? 'slide-in-left' : 'opacity-0'}>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium">
                  <Star className="mr-2 h-4 w-4" />
                  About Our College
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6 leading-tight">
                Excellence in Early Childhood 
                <span className="gradient-text block">Education</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Established in 2020, Christ the King Nursery Teachers' College addresses the critical 
                need for qualified nursery teachers in Uganda. We provide rigorous academic programs 
                with strong emphasis on practical training and Christian values.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 card-hover">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-indigo-800 mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-700">
                    To be a leading center of excellence in early childhood teacher education.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 card-hover">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-indigo-800 mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-700">
                    Providing holistic education grounded in Christian values and excellence.
                  </p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-indigo-700 font-semibold hover:text-indigo-800 transition-colors group text-lg"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div data-animate id="about-image" className={`relative ${isVisible['about-image'] ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <img
                  src="/472578312_1120525676125047_4605457454840032170_n.jpg"
                  alt="Students at Christ the King College"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-amber-500 to-amber-400 text-indigo-900 p-8 rounded-2xl shadow-2xl pulse-glow">
                <TrendingUp className="h-10 w-10 mb-3" />
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-indigo-500/30 rounded-full blur-xl floating-animation"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate id="highlights-header">
            <div className={isVisible['highlights-header'] ? 'fade-in-up' : 'opacity-0'}>
              <span className="inline-flex items-center px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
                Why Choose 
                <span className="gradient-text"> Christ the King?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes our college the premier choice for early childhood education training
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group"
                data-animate 
                id={`highlight-${index}`}
              >
                <div className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover h-full ${
                  isVisible[`highlight-${index}`] ? 'fade-in-up' : 'opacity-0'
                }`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`bg-gradient-to-br ${highlight.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-800 mb-4 group-hover:text-indigo-900 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-animate id="cta-content" className={isVisible['cta-content'] ? 'fade-in-up' : 'opacity-0'}>
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
              Ready to Start Your 
              <span className="block">Teaching Journey?</span>
            </h2>
            <p className="text-xl text-indigo-800 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our community of dedicated educators and make a difference in early childhood education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admissions"
                className="group bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Apply Now
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/programs"
                className="group bg-white/20 backdrop-blur-sm border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;