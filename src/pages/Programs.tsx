import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  GraduationCap, 
  Clock, 
  CheckCircle, 
  Users, 
  BookOpen, 
  Award,
  Calendar,
  Target
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Diploma in Early Childhood Education',
      duration: '2 years',
      type: 'Full-Time or Holiday/In-service',
      description: 'Comprehensive training in early childhood development, teaching methodologies, and child psychology. This program prepares graduates for leadership roles in nursery education.',
      features: [
        'Advanced Child Development Theory',
        'Curriculum Design and Implementation', 
        'Educational Psychology',
        'Classroom Management',
        'Assessment and Evaluation',
        'Special Needs Education',
        'Teaching Practice Supervision',
        'Research Methods in Education'
      ],
      careerPaths: [
        'Head Teacher/Principal',
        'Senior Nursery Teacher',
        'Curriculum Developer',
        'Education Supervisor'
      ],
      image: '/471118833_1109661280544820_2760270409712801570_n.jpg'
    },
    {
      title: 'Certificate in Early Childhood Education',
      duration: '2 years',
      type: 'Full-Time or Holiday/In-service',
      description: 'Essential skills and knowledge for nursery school teaching with hands-on experience. Perfect for those starting their career in early childhood education.',
      features: [
        'Basic Child Development',
        'Teaching Methods and Techniques',
        'Learning Activities Design',
        'Professional Ethics',
        'Health and Safety',
        'Parent-Teacher Communication',
        'Practical Teaching Experience',
        'Basic Educational Technology'
      ],
      careerPaths: [
        'Nursery School Teacher',
        'Assistant Teacher',
        'Childcare Worker',
        'Education Assistant'
      ],
      image: '/472578312_1120525676125047_4605457454840032170_n.jpg'
    },
    {
      title: 'Certificate in Childcare',
      duration: '1 year',
      type: 'Full-Time',
      description: 'Specialized training in child care and early childhood development fundamentals. Ideal for those seeking to work in childcare centers and nurseries.',
      features: [
        'Child Safety and Protection',
        'Health and Nutrition',
        'Basic Child Development',
        'Care Techniques and Practices',
        'First Aid and Emergency Response',
        'Play-based Learning',
        'Communication Skills',
        'Professional Standards'
      ],
      careerPaths: [
        'Childcare Provider',
        'Nursery Assistant',
        'Daycare Worker',
        'Family Support Worker'
      ],
      image: '/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg'
    }
  ];

  const pathways = [
    {
      title: 'Pre-service (Full-Time)',
      description: 'Traditional full-time study for students who can dedicate their time entirely to education',
      schedule: 'February - April | June - August | September - November',
      admission: 'December - February/May',
      icon: BookOpen
    },
    {
      title: 'Holiday/In-service',
      description: 'Flexible learning for working professionals and those with other commitments',
      schedule: 'January | May | August/September',
      admission: 'December',
      icon: Calendar
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="Academic Programs"
        subtitle="Comprehensive training programs designed to prepare exceptional early childhood educators"
        backgroundImage="/472578312_1120525676125047_4605457454840032170_n.jpg"
        icon={<GraduationCap className="h-10 w-10 text-white" />}
      />

      {/* Academic Pathways */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Academic Pathways</h2>
            <p className="text-xl text-gray-600">Choose the learning path that fits your lifestyle</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-800 p-3 rounded-lg mr-4">
                    <pathway.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-800">{pathway.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{pathway.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-indigo-800" />
                    <span><strong>Schedule:</strong> {pathway.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-indigo-800" />
                    <span><strong>Admission:</strong> {pathway.admission}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Accredited by Ndejje University and recognized nationwide</p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-indigo-50 p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                      <div className="bg-indigo-800 p-3 rounded-lg mr-4">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-indigo-800">{program.title}</h3>
                        <div className="flex items-center text-amber-600 font-semibold mt-1">
                          <Clock className="h-4 w-4 mr-2" />
                          {program.duration} • {program.type}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-indigo-800 mb-3">Course Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-indigo-800 mb-3">Career Opportunities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.careerPaths.map((career, careerIndex) => (
                          <span key={careerIndex} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-amber-500 text-indigo-900 p-4 rounded-xl shadow-lg">
                      <Award className="h-8 w-8 mb-2" />
                      <div className="text-lg font-bold">{program.duration}</div>
                      <div className="text-sm font-medium">Duration</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Programs?</h2>
            <p className="text-xl opacity-90">Excellence in education with practical application</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accredited Programs</h3>
              <p className="opacity-90">All programs are affiliated with Ndejje University and recognized by the National Council for Higher Education.</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Training</h3>
              <p className="opacity-90">Extensive hands-on experience through teaching practice in various nursery schools across Uganda.</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Faculty</h3>
              <p className="opacity-90">Learn from experienced educators with advanced qualifications and years of practical experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;