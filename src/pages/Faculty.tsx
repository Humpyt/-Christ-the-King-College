import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Users, 
  Award, 
  BookOpen, 
  GraduationCap,
  Mail,
  Star,
  Heart,
  Target
} from 'lucide-react';

const Faculty = () => {
  const leadership = [
    {
      name: 'Omara Richard',
      title: 'Director',
      qualification: 'MA Educational Leadership & School Improvement - University of Manchester, BA (SPEDUC) - MUK',
      email: 'richardomara2@gmail.com',
      description: 'Visionary leader with extensive experience in educational leadership and special education.',
      image: '/471118833_1109661280544820_2760270409712801570_n.jpg'
    },
    {
      name: 'Olyec Nelson Ogom',
      title: 'Principal',
      qualification: 'Bachelor Teacher Education, MA',
      description: 'Dedicated educator committed to academic excellence and student development.',
      image: '/472578312_1120525676125047_4605457454840032170_n.jpg'
    },
    {
      name: 'Oduca Moses',
      title: 'Deputy Principal Academics',
      qualification: 'Bachelor in Early Childhood Development Education',
      description: 'Specialist in early childhood education with focus on curriculum development.',
      image: '/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg'
    },
    {
      name: 'Ogwang Boniface',
      title: 'Director of Studies',
      qualification: 'Bachelor in Education',
      description: 'Experienced academic administrator ensuring quality educational delivery.',
      image: '/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg'
    }
  ];

  const teachingStaff = [
    { name: 'Edep Tito', qualification: 'Bachelor Teacher Education', gender: 'Male' },
    { name: 'Ebong Tonny', qualification: 'Bachelor Teacher Education', gender: 'Male' },
    { name: 'Olila Richard', qualification: 'Diploma in Teacher Education', gender: 'Male' },
    { name: 'Ms Koli Grace', qualification: 'Bachelor Teacher Education', gender: 'Female' },
    { name: 'Ms Apio Kolleta', qualification: 'Diploma in Nursery Education', gender: 'Female' },
    { name: 'Akiro Nancy', qualification: 'Diploma in Nursery Education', gender: 'Female' },
    { name: 'Obote Joe', qualification: 'BA Psychology', gender: 'Male' }
  ];

  const nonTeachingStaff = [
    { name: 'Ms Akullu Brenda', position: 'Administrative Assistant', qualification: 'Certificate' },
    { name: 'Akello Monica', position: 'Store Manager', qualification: 'Certificate' },
    { name: 'Ms Judith Achiro', position: 'Nurse', qualification: 'Certificate' },
    { name: 'Ms Dina Akello', position: 'Cook', qualification: 'Certificate' },
    { name: 'Ameto Gabriel', position: 'Cook', qualification: 'Certificate' },
    { name: 'Ocen Morris', position: 'Security Officer', qualification: 'Certificate' },
    { name: 'Omara Dennis', position: 'Security Officer', qualification: 'Certificate' }
  ];

  const boardMembers = [
    {
      name: 'Omara Richard',
      qualification: 'MA Educational Leadership & School Improvement – University of Manchester, BA (SPEDUC), MUK',
      email: 'richardomara2@gmail.com'
    },
    {
      name: 'Omara Godfrey Innocent',
      qualification: 'MA Education – Gulu University, BA (SPEDUC), MUK'
    },
    {
      name: 'Okii Alex',
      qualification: 'Postgraduate Education, MUK, Philosophy Education'
    }
  ];

  const managementCommittee = [
    { name: 'Judith Adilo', position: 'Chairperson' },
    { name: 'Okii Alex', position: 'Vice Chairperson' },
    { name: 'Akullu Brenda', position: 'Secretary' },
    { name: 'Odiko Peterson', position: 'Member' },
    { name: 'Opio George', position: 'LC Representative' },
    { name: 'Simpo Ogwang (Mrs)', position: 'Parent Representative' },
    { name: 'Erene Omara (Mrs)', position: 'Member' },
    { name: 'Ecun Tonny', position: 'Government Representative' },
    { name: 'Olyec Nelson', position: 'Teachers\' Representative' },
    { name: 'Apio Winny', position: 'OG/OBs Representative' }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="Our Faculty & Staff"
        subtitle="Meet our dedicated team of educators and professionals committed to excellence in early childhood education"
        backgroundImage="/WhatsApp Image 2025-07-04 at 6.31.00 PM.jpeg"
        icon={<Users className="h-10 w-10 text-white" />}
      />

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced leaders guiding our educational mission</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-800 p-2 rounded-lg mr-3">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-indigo-800">{leader.name}</h3>
                        <p className="text-amber-600 font-semibold">{leader.title}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{leader.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-indigo-800 mb-2">Qualifications:</h4>
                      <p className="text-gray-600 text-sm">{leader.qualification}</p>
                    </div>

                    {leader.email && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{leader.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Teaching Staff</h2>
            <p className="text-xl text-gray-600">Qualified educators dedicated to student success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingStaff.map((staff, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-800 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-800">{staff.name}</h3>
                    <p className="text-sm text-gray-600">{staff.gender}</p>
                  </div>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">{staff.qualification}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-amber-100 p-6 rounded-xl inline-block">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-amber-600 mr-3" />
                <span className="text-2xl font-bold text-indigo-800">7</span>
              </div>
              <p className="text-indigo-800 font-semibold">Qualified Tutors</p>
              <p className="text-gray-600 text-sm">3 Male • 4 Female</p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Teaching Staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Support Staff</h2>
            <p className="text-xl text-gray-600">Essential team members ensuring smooth operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTeachingStaff.map((staff, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-indigo-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-800">{staff.name}</h3>
                    <p className="text-sm text-amber-600 font-medium">{staff.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{staff.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600">Strategic leadership and governance</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-800 p-3 rounded-lg mr-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-800">{member.name}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-indigo-800 mb-2">Qualifications:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{member.qualification}</p>
                </div>

                {member.email && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{member.email}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Committee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">School Management Committee 2024/25</h2>
            <p className="text-xl text-gray-600">Community representatives ensuring quality education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementCommittee.map((member, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-800">{member.name}</h3>
                    <p className="text-sm text-amber-600 font-medium">{member.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Team by Numbers</h2>
            <p className="text-xl opacity-90">Dedicated professionals serving our educational mission</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-indigo-200">Leadership Team</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-10 w-10 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">7</div>
              <div className="text-indigo-200">Teaching Staff</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">7</div>
              <div className="text-indigo-200">Support Staff</div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-amber-400" />
              </div>
              <div className="text-3xl font-bold mb-2">10</div>
              <div className="text-indigo-200">Management Committee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;