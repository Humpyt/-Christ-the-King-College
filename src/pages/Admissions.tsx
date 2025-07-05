import React from 'react';
import PageHeader from '../components/PageHeader';
import { 
  Calendar, 
  DollarSign, 
  FileText, 
  CheckCircle, 
  Clock,
  CreditCard,
  BookOpen,
  Users,
  Award,
  Download,
  UserPlus
} from 'lucide-react';

const Admissions = () => {
  const feeStructure = [
    { item: 'Tuition Fee/Term', amount: '300,000', description: 'Per academic term' },
    { item: 'Hostel Fee/Term', amount: '160,000', description: 'Accommodation per term' },
    { item: 'Development Fund', amount: '30,000', description: 'One-time payment' },
    { item: 'Registration/Exams Fee', amount: '230,000', description: 'Annual payment to Ndejje University' },
    { item: 'Medical Fee', amount: '20,000', description: 'Annual health services' },
    { item: 'Guild Contribution', amount: '10,000', description: 'Student activities' },
    { item: 'Utilities Per Term', amount: '20,000', description: 'Water, electricity, etc.' }
  ];

  const admissionRequirements = [
    'Uganda Certificate of Education (UCE) or equivalent',
    'Uganda Advanced Certificate of Education (UACE) for Diploma programs',
    'Completed application form',
    'Academic transcripts and certificates',
    'Two passport-size photographs',
    'Copy of national ID or passport',
    'Medical certificate of fitness',
    'Character reference letter'
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete and submit the application form with required documents',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Review',
      description: 'Our admissions team reviews your application and supporting documents',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Interview',
      description: 'Attend an interview to assess your suitability for the program',
      icon: Users
    },
    {
      step: 4,
      title: 'Admission Decision',
      description: 'Receive your admission decision and enrollment instructions',
      icon: Award
    }
  ];

  const academicCalendar = [
    {
      program: 'Holiday/In-service Programs',
      admission: 'December',
      terms: ['January', 'May', 'August/September'],
      exams: 'August & December',
      color: 'indigo'
    },
    {
      program: 'Pre-service Programs',
      admission: 'December - February/May',
      terms: ['February - April', 'June - August', 'September - November'],
      exams: 'August & December',
      color: 'amber'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <PageHeader
        title="Admissions"
        subtitle="Join our community of dedicated educators and start your journey in early childhood education"
        backgroundImage="/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg"
        icon={<UserPlus className="h-10 w-10 text-white" />}
      />

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to begin your educational journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-indigo-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Academic Calendar 2025</h2>
            <p className="text-xl text-gray-600">Plan your academic year with our flexible schedules</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {academicCalendar.map((calendar, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg mr-4 ${calendar.color === 'indigo' ? 'bg-indigo-800' : 'bg-amber-500'}`}>
                    <Calendar className={`h-8 w-8 ${calendar.color === 'indigo' ? 'text-white' : 'text-indigo-900'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-800">{calendar.program}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-800 mr-3" />
                    <span className="text-gray-700"><strong>Admission:</strong> {calendar.admission}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 text-indigo-800 mr-3" />
                      <span className="text-gray-700 font-semibold">Academic Terms:</span>
                    </div>
                    <div className="ml-8 space-y-1">
                      {calendar.terms.map((term, termIndex) => (
                        <div key={termIndex} className="text-gray-600">• {term}</div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-indigo-800 mr-3" />
                    <span className="text-gray-700"><strong>Exams:</strong> {calendar.exams}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Fee Structure 2025</h2>
            <p className="text-xl text-gray-600">Transparent and affordable education costs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                <div className="bg-indigo-800 text-white p-6">
                  <h3 className="text-2xl font-bold">Annual Fee Breakdown</h3>
                  <p className="opacity-90">All amounts in Uganda Shillings (UGX)</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {feeStructure.map((fee, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <div>
                          <div className="font-semibold text-gray-900">{fee.item}</div>
                          <div className="text-sm text-gray-600">{fee.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-indigo-800">UGX {fee.amount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-8 w-8 text-amber-600 mr-3" />
                  <h3 className="text-xl font-bold text-indigo-800">Payment Information</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-indigo-800">Bank:</strong><br />
                    Bank of Africa, Lira Branch
                  </div>
                  <div>
                    <strong className="text-indigo-800">Account Number:</strong><br />
                    04678390007
                  </div>
                  <div>
                    <strong className="text-indigo-800">Account Name:</strong><br />
                    Christ the King Nursery Teachers' College
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Payment Options</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Termly payments accepted
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bank transfer or cash deposit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Payment plans available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scholarships for qualified students
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-indigo-800 mb-8">Admission Requirements</h2>
              <div className="space-y-4">
                {admissionRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-amber-100 rounded-lg border border-amber-200">
                <h3 className="font-bold text-indigo-800 mb-2">Important Note</h3>
                <p className="text-gray-700 text-sm">
                  All documents must be original or certified copies. International students may need 
                  additional documentation for visa and residence permit applications.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg"
                alt="Students at Graduation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-indigo-800 text-white p-6 rounded-xl shadow-lg">
                <Users className="h-8 w-8 mb-2" />
                <div className="text-2xl font-bold">121</div>
                <div className="text-sm">Current Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards becoming a qualified early childhood educator. 
            Our admissions team is here to help you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Download Application Form
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Contact Admissions Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;