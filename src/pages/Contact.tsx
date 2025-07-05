import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  User,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: [
        'Ngetta, Anyangapuc Ward',
        'Lira City East Division',
        '8 km from Lira City Centre',
        'P.O Box 22, Lira Uganda'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '0772037994',
        '0785321628'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'christthekingntc@gmail.com'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 8:00 AM - 12:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const departments = [
    {
      name: 'Admissions Office',
      contact: '0772037994',
      email: 'admissions@christthekingntc.com',
      description: 'For application inquiries and enrollment information'
    },
    {
      name: 'Academic Affairs',
      contact: '0785321628',
      email: 'academics@christthekingntc.com',
      description: 'For curriculum and academic program questions'
    },
    {
      name: 'Student Services',
      contact: '0772037994',
      email: 'students@christthekingntc.com',
      description: 'For student support and campus life inquiries'
    },
    {
      name: 'Finance Office',
      contact: '0785321628',
      email: 'finance@christthekingntc.com',
      description: 'For fee payments and financial assistance'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Admissions Information',
    'Program Details',
    'Fee Structure',
    'Campus Visit',
    'Partnership Opportunities',
    'Other'
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us to learn more about our programs or to start your journey in early childhood education"
        backgroundImage="/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg"
        icon={<MessageCircle className="h-10 w-10 text-white" />}
      />

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help you with any questions or inquiries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="bg-indigo-800 p-3 rounded-lg mr-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-indigo-800">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="inline h-4 w-4 mr-1" />
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-800 hover:bg-indigo-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Campus Image and Info */}
            <div className="space-y-8">
              <div className="relative">
                <img
                  src="/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg"
                  alt="Christ the King College Campus"
                  className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-amber-500 text-indigo-900 p-6 rounded-xl shadow-lg">
                  <MapPin className="h-8 w-8 mb-2" />
                  <div className="text-lg font-bold">8 km</div>
                  <div className="text-sm font-medium">from Lira City</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-indigo-800 mb-6">Visit Our Campus</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We welcome prospective students and their families to visit our beautiful campus in Ngetta. 
                  Experience our facilities, meet our faculty, and see why Christ the King is the right choice 
                  for your early childhood education career.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-indigo-800" />
                    <span>Campus tours available Monday - Saturday</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-3 text-indigo-800" />
                    <span>Call ahead to schedule your visit</span>
                  </div>
                </div>

                <button className="mt-6 bg-amber-500 hover:bg-amber-600 text-indigo-900 px-6 py-3 rounded-lg font-bold transition-colors">
                  Schedule Campus Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Contact by Department</h2>
            <p className="text-xl text-gray-600">Reach out to the right department for faster assistance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-indigo-800 mb-3">{dept.name}</h3>
                <p className="text-gray-700 mb-4 text-sm">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{dept.contact}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl mb-8 opacity-90">
            Follow us on social media for the latest updates and news
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <Facebook className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <Twitter className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 group">
              <Instagram className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-2">Our Motto</h3>
            <p className="text-xl italic text-amber-400">"Your Future Is Our Vision"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;