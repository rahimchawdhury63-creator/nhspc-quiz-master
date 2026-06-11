import React from 'react';

interface FooterProps {
  language: 'bn' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">NHSPC Quiz Master</h3>
                <p className="text-sm text-gray-400">2026</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              {language === 'bn'
                ? 'বাংলাদেশের সবচেয়ে সম্পূর্ণ NHSPC কুইজ প্রস্তুতি প্ল্যাটফর্ম। ১০০০+ প্রশ্ন, বিস্তারিত গাইড এবং সাফল্যের রোডম্যাপ।'
                : "Bangladesh's most complete NHSPC quiz preparation platform. 1000+ questions, detailed guides, and roadmap to success."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'bn' ? 'দ্রুত লিঙ্ক' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{language === 'bn' ? 'হোম' : 'Home'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{language === 'bn' ? 'কুইজ' : 'Quiz'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{language === 'bn' ? 'প্রশ্ন ব্যাংক' : 'Question Bank'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{language === 'bn' ? 'শিখুন' : 'Learn'}</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'bn' ? 'বিষয়সমূহ' : 'Categories'}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Computer Fundamentals</li>
              <li>Number Systems</li>
              <li>Programming Logic</li>
              <li>Networking</li>
              <li>Cybersecurity</li>
              <li>And more...</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 NHSPC Quiz Master. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            {language === 'bn' 
              ? 'Rizwan Rahim Chowdhury দ্বারা ❤️ দিয়ে তৈরি'
              : 'Made with ❤️ by Rizwan Rahim Chowdhury'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
