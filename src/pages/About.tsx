import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Eye, 
  Target, 
  Heart, 
  Award, 
  Users, 
  BookOpen, 
  Lightbulb,
  MapPin,
  Calendar,
  TrendingUp,
  Info
} from 'lucide-react';

const About = () => {
  const coreValues = [
    { icon: Heart, title: 'Faith and Moral Integrity', description: 'Grounded in Christian values and ethical principles that guide our educational approach' },
    { icon: Award, title: 'Excellence in Education', description: 'Committed to the highest standards of academic achievement and professional development' },
    { icon: Users, title: 'Compassion', description: 'Caring for children and communities with love, understanding, and empathy' },
    { icon: BookOpen, title: 'Lifelong Learning', description: 'Fostering continuous growth, curiosity, and professional development in our educators' },
    { icon: Heart, title: 'Community and Service', description: 'Building strong partnerships and serving our communities with dedication' },
    { icon: Lightbulb, title: 'Creativity and Innovation', description: 'Encouraging creative approaches and innovative solutions in early childhood education' }
  ];

  const objectives = [
    'To foster pedagogical knowledge and skills in aspiring nursery teachers',
    'To promote understanding of child development and psychology',
    'To emphasize practical training and field experiences',
    'To instill professionalism, ethical values, and commitment to child well-being',
    'To develop strong partnerships with government, schools, and community organizations'
  ];

  const milestones = [
    { year: '2019', event: 'Concept Development', description: 'Mr. Omara Richard Raphael conceived the idea for the college' },
    { year: '2020', event: 'College Establishment', description: 'Christ the King Nursery Teachers\' College was officially established' },
    { year: '2020', event: 'First Intake', description: '43 students enrolled in our inaugural academic year' },
    { year: '2021', event: 'Ndejje University Affiliation', description: 'Became an official affiliate of Ndejje University' },
    { year: '2024', event: 'Growth Milestone', description: 'Reached 121 students across all programs' }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="About Our College"
        subtitle="Established in 2020, we are committed to training exceptional nursery school teachers grounded in Christian values and academic excellence."
        backgroundImage="/471118833_1109661280544820_2760270409712801570_n.jpg"
        icon={<Info className="h-10 w-10 text-white" />}
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-indigo-800 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Christ the King Nursery Teacher's College was established to address a critical gap in Uganda's 
                  education system. Despite government plans to introduce nursery sections in all primary schools, 
                  there was no corresponding plan to train qualified nursery teachers.
                </p>
                <p>
                  Located 8 km from Lira City Centre in Ngetta, Anyangapuc Ward, our college provides rigorous 
                  academic programs with a strong emphasis on practical training. Students gain invaluable 
                  hands-on experience through teaching practice in various nursery schools across the country.
                </p>
                <p>
                  As an affiliate of Ndejje University, our programs are accredited by the National Council 
                  for Higher Education, ensuring our graduates receive recognized qualifications that prepare 
                  them for successful careers in early childhood education.
                </p>
              </div>
              
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <MapPin className="h-8 w-8 text-indigo-800 mb-3" />
                  <h3 className="font-bold text-indigo-800 mb-2">Location</h3>
                  <p className="text-gray-700">Ngetta, Anyangapuc Ward, Lira City East Division</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <Calendar className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-indigo-800 mb-2">Established</h3>
                  <p className="text-gray-700">2020 - 5 years of excellence</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg"
                alt="College Campus"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-amber-500 text-indigo-900 p-6 rounded-xl shadow-lg">
                <TrendingUp className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">121</div>
                <div className="text-sm font-medium">Current Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-800 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-indigo-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading center of excellence in early childhood teacher education, empowering 
                educators with the knowledge, skills, and moral foundation to inspire and transform 
                the lives of young children in their communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-indigo-900" />
                </div>
                <h2 className="text-3xl font-bold text-indigo-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide holistic education and professional training for nursery school teachers, 
                grounded in Christian values, fostering lifelong learning, ethical leadership, and 
                a commitment to nurturing young minds with love, integrity, and excellence.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-indigo-800 to-amber-500 text-white p-8 rounded-2xl shadow-lg inline-block">
              <h3 className="text-2xl font-bold mb-2">Our Motto</h3>
              <p className="text-xl italic">"Your Future Is Our Vision"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our educational excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-indigo-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-indigo-800 mb-8">Our Objectives</h2>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-amber-500 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg"
                alt="Students in Training"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our college's development</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-indigo-800 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;