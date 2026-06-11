import React from 'react';

interface AboutPageProps {
  language: 'bn' | 'en';
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            R
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Rizwan Rahim Chowdhury
          </h1>
          <p className="text-purple-600 font-medium text-lg mb-4">
            {language === 'bn' ? 'প্রতিষ্ঠাতা ও ডেভেলপার' : 'Founder & Developer'}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'bn'
              ? 'NHSPC Quiz Master একটি সম্পূর্ণ বিনামূল্যের প্ল্যাটফর্ম যা বাংলাদেশের শিক্ষার্থীদের জন্য তৈরি করা হয়েছে। এই প্ল্যাটফর্মের মাধ্যমে আপনি NHSPC কুইজ প্রতিযোগিতার জন্য নিজেকে সম্পূর্ণরূপে প্রস্তুত করতে পারবেন।'
              : 'NHSPC Quiz Master is a completely free platform created for students of Bangladesh. Through this platform, you can fully prepare yourself for the NHSPC Quiz Competition.'}
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🎯 {language === 'bn' ? 'আমাদের লক্ষ্য' : 'Our Mission'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {language === 'bn'
              ? 'আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি শিক্ষার্থীকে তথ্যপ্রযুক্তি ও কম্পিউটার বিজ্ঞানে দক্ষ করে তোলা। NHSPC কুইজ প্রতিযোগিতায় অংশগ্রহণের মাধ্যমে শিক্ষার্থীরা তাদের জ্ঞান যাচাই করতে পারে এবং জাতীয় পর্যায়ে প্রতিযোগিতা করতে পারে। আমরা চাই প্রতিটি শিক্ষার্থী এই প্রতিযোগিতায় সাফল্য অর্জন করুক।'
              : 'Our mission is to make every student in Bangladesh skilled in information technology and computer science. Through participating in the NHSPC Quiz Competition, students can test their knowledge and compete at the national level. We want every student to achieve success in this competition.'}
          </p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            ✨ {language === 'bn' ? 'বৈশিষ্ট্যসমূহ' : 'Features'}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📚', textBn: '১০০০+ MCQ প্রশ্ন', textEn: '1000+ MCQ Questions' },
              { icon: '🌐', textBn: 'বাংলা ও ইংরেজি ভাষা', textEn: 'Bangla & English Languages' },
              { icon: '📖', textBn: 'বিস্তারিত শিক্ষণ গাইড', textEn: 'Detailed Learning Guide' },
              { icon: '🎯', textBn: 'ক্যাটাগরি ভিত্তিক প্রশ্ন', textEn: 'Category-wise Questions' },
              { icon: '⏱️', textBn: 'টাইমড কুইজ মোড', textEn: 'Timed Quiz Mode' },
              { icon: '💡', textBn: 'ব্যাখ্যা সহ উত্তর', textEn: 'Answers with Explanations' },
              { icon: '📱', textBn: 'মোবাইল ফ্রেন্ডলি', textEn: 'Mobile Friendly' },
              { icon: '🆓', textBn: '১০০% বিনামূল্যে', textEn: '100% Free' },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-gray-700 font-medium">
                  {language === 'bn' ? feature.textBn : feature.textEn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NHSPC Info */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 md:p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🏆 {language === 'bn' ? 'NHSPC সম্পর্কে' : 'About NHSPC'}
          </h2>
          <p className="text-white/90 leading-relaxed mb-4">
            {language === 'bn'
              ? 'National High School Programming Contest (NHSPC) হলো বাংলাদেশের হাইস্কুল পর্যায়ের সবচেয়ে বড় প্রোগ্রামিং প্রতিযোগিতা। এটি শিক্ষার্থীদের প্রোগ্রামিং ও আইসিটি দক্ষতা মূল্যায়ন করে। কুইজ প্রতিযোগিতা হলো এর একটি গুরুত্বপূর্ণ অংশ যেখানে MCQ প্রশ্নের মাধ্যমে শিক্ষার্থীদের জ্ঞান যাচাই করা হয়।'
              : 'National High School Programming Contest (NHSPC) is the biggest programming competition at the high school level in Bangladesh. It evaluates students programming and ICT skills. The quiz competition is an important part where students knowledge is assessed through MCQ questions.'}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">
                {language === 'bn' ? 'জুনিয়র ক্যাটাগরি' : 'Junior Category'}
              </h3>
              <p className="text-sm text-white/80">
                {language === 'bn' ? '৬ষ্ঠ - ৮ম শ্রেণি' : 'Class 6-8'}
              </p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">
                {language === 'bn' ? 'সেকেন্ডারি ক্যাটাগরি' : 'Secondary Category'}
              </h3>
              <p className="text-sm text-white/80">
                {language === 'bn' ? '৯ম - ১০ম শ্রেণি' : 'Class 9-10'}
              </p>
            </div>
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            🙏 {language === 'bn' ? 'কৃতজ্ঞতা' : 'Acknowledgment'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {language === 'bn'
              ? 'এই প্ল্যাটফর্ম তৈরিতে NCTB ICT পাঠ্যপুস্তক, বিভিন্ন অনলাইন রিসোর্স এবং পূর্ববর্তী NHSPC কুইজ প্রশ্নপত্র থেকে সাহায্য নেওয়া হয়েছে। সকল শিক্ষক, অভিভাবক এবং শিক্ষার্থীদের প্রতি কৃতজ্ঞতা যারা এই প্ল্যাটফর্মকে সমর্থন করছেন।'
              : 'This platform was created with help from NCTB ICT textbooks, various online resources, and previous NHSPC quiz question papers. Gratitude to all teachers, parents, and students who are supporting this platform.'}
          </p>
        </div>

        {/* Contact */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            {language === 'bn' ? 'কোনো প্রশ্ন বা পরামর্শ থাকলে যোগাযোগ করুন' : 'Contact us for any questions or suggestions'}
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2026 NHSPC Quiz Master. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</p>
          <p className="mt-1">
            {language === 'bn' 
              ? 'Rizwan Rahim Chowdhury দ্বারা ❤️ দিয়ে তৈরি'
              : 'Made with ❤️ by Rizwan Rahim Chowdhury'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
