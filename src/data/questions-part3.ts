// NHSPC Quiz Questions - Part 3: Networking, Internet & Cybersecurity
import { Question } from './questions-part1';

export const networkingQuestions: Question[] = [
  {
    id: 201,
    questionBn: "ইন্টারনেট কী?",
    questionEn: "What is Internet?",
    options: [
      { bn: "একটি কম্পিউটার", en: "A computer" },
      { bn: "বিশ্বব্যাপী নেটওয়ার্কের নেটওয়ার্ক", en: "Network of networks worldwide" },
      { bn: "একটি সফটওয়্যার", en: "A software" },
      { bn: "একটি ওয়েবসাইট", en: "A website" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 202,
    questionBn: "WWW এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of WWW?",
    options: [
      { bn: "ওয়ার্ল্ড ওয়াইড ওয়েব", en: "World Wide Web" },
      { bn: "ওয়ার্ল্ড ওয়াইড ওয়ার্ক", en: "World Wide Work" },
      { bn: "ওয়ার্ল্ড ওয়েব ওয়ার্ক", en: "World Web Work" },
      { bn: "ওয়াইড ওয়ার্ল্ড ওয়েব", en: "Wide World Web" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 203,
    questionBn: "WWW এর উদ্ভাবক কে?",
    questionEn: "Who invented WWW?",
    options: [
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "টিম বার্নার্স-লি", en: "Tim Berners-Lee" },
      { bn: "স্টিভ জবস", en: "Steve Jobs" },
      { bn: "মার্ক জুকারবার্গ", en: "Mark Zuckerberg" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 204,
    questionBn: "HTTP এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of HTTP?",
    options: [
      { bn: "হাইপার টেক্সট ট্রান্সফার প্রোটোকল", en: "Hyper Text Transfer Protocol" },
      { bn: "হাই টেক্সট ট্রান্সফার প্রোটোকল", en: "High Text Transfer Protocol" },
      { bn: "হাইপার টেক্সট ট্রান্সমিশন প্রোটোকল", en: "Hyper Text Transmission Protocol" },
      { bn: "হাইপার টেকনিক্যাল ট্রান্সফার প্রোটোকল", en: "Hyper Technical Transfer Protocol" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 205,
    questionBn: "HTTPS এ S এর অর্থ কী?",
    questionEn: "What does S stand for in HTTPS?",
    options: [
      { bn: "সিকিউর", en: "Secure" },
      { bn: "সিস্টেম", en: "System" },
      { bn: "সার্ভার", en: "Server" },
      { bn: "সার্ভিস", en: "Service" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 206,
    questionBn: "URL এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of URL?",
    options: [
      { bn: "ইউনিফর্ম রিসোর্স লোকেটর", en: "Uniform Resource Locator" },
      { bn: "ইউনিভার্সাল রিসোর্স লোকেটর", en: "Universal Resource Locator" },
      { bn: "ইউনিক রিসোর্স লোকেটর", en: "Unique Resource Locator" },
      { bn: "ইউনিফর্ম রিমোট লোকেটর", en: "Uniform Remote Locator" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 207,
    questionBn: "IP এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of IP?",
    options: [
      { bn: "ইন্টারনেট প্রোটোকল", en: "Internet Protocol" },
      { bn: "ইন্টারনাল প্রোটোকল", en: "Internal Protocol" },
      { bn: "ইন্টারনেট প্রোগ্রাম", en: "Internet Program" },
      { bn: "ইন্টেলিজেন্ট প্রোটোকল", en: "Intelligent Protocol" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 208,
    questionBn: "IPv4 এড্রেস কত বিটের?",
    questionEn: "How many bits are in IPv4 address?",
    options: [
      { bn: "১৬ বিট", en: "16 bits" },
      { bn: "৩২ বিট", en: "32 bits" },
      { bn: "৬৪ বিট", en: "64 bits" },
      { bn: "১২৮ বিট", en: "128 bits" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 209,
    questionBn: "IPv6 এড্রেস কত বিটের?",
    questionEn: "How many bits are in IPv6 address?",
    options: [
      { bn: "৩২ বিট", en: "32 bits" },
      { bn: "৬৪ বিট", en: "64 bits" },
      { bn: "১২৮ বিট", en: "128 bits" },
      { bn: "২৫৬ বিট", en: "256 bits" }
    ],
    correctAnswer: 2,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 210,
    questionBn: "LAN এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of LAN?",
    options: [
      { bn: "লোকাল এরিয়া নেটওয়ার্ক", en: "Local Area Network" },
      { bn: "লার্জ এরিয়া নেটওয়ার্ক", en: "Large Area Network" },
      { bn: "লং এরিয়া নেটওয়ার্ক", en: "Long Area Network" },
      { bn: "লিমিটেড এরিয়া নেটওয়ার্ক", en: "Limited Area Network" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 211,
    questionBn: "WAN এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of WAN?",
    options: [
      { bn: "ওয়াইড এরিয়া নেটওয়ার্ক", en: "Wide Area Network" },
      { bn: "ওয়ার্ল্ড এরিয়া নেটওয়ার্ক", en: "World Area Network" },
      { bn: "ওয়্যারলেস এরিয়া নেটওয়ার্ক", en: "Wireless Area Network" },
      { bn: "ওয়েব এরিয়া নেটওয়ার্ক", en: "Web Area Network" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 212,
    questionBn: "MAN এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of MAN?",
    options: [
      { bn: "মেট্রোপলিটন এরিয়া নেটওয়ার্ক", en: "Metropolitan Area Network" },
      { bn: "মেইন এরিয়া নেটওয়ার্ক", en: "Main Area Network" },
      { bn: "মাল্টি এরিয়া নেটওয়ার্ক", en: "Multi Area Network" },
      { bn: "ম্যাক্সিমাম এরিয়া নেটওয়ার্ক", en: "Maximum Area Network" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 213,
    questionBn: "Wi-Fi এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of Wi-Fi?",
    options: [
      { bn: "ওয়্যারলেস ফিডেলিটি", en: "Wireless Fidelity" },
      { bn: "ওয়্যারড ফিডেলিটি", en: "Wired Fidelity" },
      { bn: "ওয়াইড ফিডেলিটি", en: "Wide Fidelity" },
      { bn: "কোনো পূর্ণরূপ নেই", en: "No full form" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 214,
    questionBn: "DNS এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of DNS?",
    options: [
      { bn: "ডোমেইন নেম সিস্টেম", en: "Domain Name System" },
      { bn: "ডোমেইন নেটওয়ার্ক সিস্টেম", en: "Domain Network System" },
      { bn: "ডায়নামিক নেম সিস্টেম", en: "Dynamic Name System" },
      { bn: "ডাটা নেম সিস্টেম", en: "Data Name System" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 215,
    questionBn: "DNS এর কাজ কী?",
    questionEn: "What is the function of DNS?",
    options: [
      { bn: "ইমেইল পাঠানো", en: "Sending emails" },
      { bn: "ডোমেইন নামকে IP এড্রেসে রূপান্তর", en: "Converting domain name to IP address" },
      { bn: "ফাইল শেয়ারিং", en: "File sharing" },
      { bn: "ভাইরাস স্ক্যান", en: "Virus scanning" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 216,
    questionBn: "FTP এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of FTP?",
    options: [
      { bn: "ফাইল ট্রান্সফার প্রোটোকল", en: "File Transfer Protocol" },
      { bn: "ফাস্ট ট্রান্সফার প্রোটোকল", en: "Fast Transfer Protocol" },
      { bn: "ফাইল ট্রান্সমিশন প্রোটোকল", en: "File Transmission Protocol" },
      { bn: "ফার ট্রান্সফার প্রোটোকল", en: "Far Transfer Protocol" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 217,
    questionBn: "TCP/IP এ TCP এর অর্থ কী?",
    questionEn: "What does TCP stand for in TCP/IP?",
    options: [
      { bn: "ট্রান্সমিশন কন্ট্রোল প্রোটোকল", en: "Transmission Control Protocol" },
      { bn: "টেকনিক্যাল কন্ট্রোল প্রোটোকল", en: "Technical Control Protocol" },
      { bn: "ট্রান্সফার কন্ট্রোল প্রোটোকল", en: "Transfer Control Protocol" },
      { bn: "টোটাল কন্ট্রোল প্রোটোকল", en: "Total Control Protocol" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 218,
    questionBn: "রাউটার কী কাজ করে?",
    questionEn: "What does a router do?",
    options: [
      { bn: "ডেটা স্টোর করে", en: "Stores data" },
      { bn: "বিভিন্ন নেটওয়ার্কের মধ্যে ডেটা রাউট করে", en: "Routes data between networks" },
      { bn: "প্রিন্ট করে", en: "Prints" },
      { bn: "ভাইরাস স্ক্যান করে", en: "Scans viruses" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 219,
    questionBn: "মডেম এর কাজ কী?",
    questionEn: "What is the function of a modem?",
    options: [
      { bn: "ডেটা স্টোর করা", en: "Store data" },
      { bn: "এনালগ ও ডিজিটাল সিগন্যাল রূপান্তর", en: "Convert analog and digital signals" },
      { bn: "ভাইরাস স্ক্যান করা", en: "Scan viruses" },
      { bn: "প্রিন্ট করা", en: "Print" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 220,
    questionBn: "ইমেইল পাঠানোর জন্য কোন প্রোটোকল ব্যবহৃত হয়?",
    questionEn: "Which protocol is used for sending emails?",
    options: [
      { bn: "HTTP", en: "HTTP" },
      { bn: "SMTP", en: "SMTP" },
      { bn: "FTP", en: "FTP" },
      { bn: "DHCP", en: "DHCP" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 221,
    questionBn: "SMTP এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of SMTP?",
    options: [
      { bn: "সিম্পল মেইল ট্রান্সফার প্রোটোকল", en: "Simple Mail Transfer Protocol" },
      { bn: "সেন্ড মেইল ট্রান্সফার প্রোটোকল", en: "Send Mail Transfer Protocol" },
      { bn: "সিকিউর মেইল ট্রান্সফার প্রোটোকল", en: "Secure Mail Transfer Protocol" },
      { bn: "স্ট্যান্ডার্ড মেইল ট্রান্সফার প্রোটোকল", en: "Standard Mail Transfer Protocol" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 222,
    questionBn: "POP3 কী?",
    questionEn: "What is POP3?",
    options: [
      { bn: "ইমেইল পাঠানোর প্রোটোকল", en: "Email sending protocol" },
      { bn: "ইমেইল রিসিভ করার প্রোটোকল", en: "Email receiving protocol" },
      { bn: "ফাইল ট্রান্সফার প্রোটোকল", en: "File transfer protocol" },
      { bn: "ওয়েব ব্রাউজিং প্রোটোকল", en: "Web browsing protocol" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "medium"
  },
  {
    id: 223,
    questionBn: "ফায়ারওয়াল কী?",
    questionEn: "What is a firewall?",
    options: [
      { bn: "একটি ভাইরাস", en: "A virus" },
      { bn: "নেটওয়ার্ক নিরাপত্তা ব্যবস্থা", en: "Network security system" },
      { bn: "একটি ব্রাউজার", en: "A browser" },
      { bn: "একটি সার্চ ইঞ্জিন", en: "A search engine" }
    ],
    correctAnswer: 1,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 224,
    questionBn: "VPN এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of VPN?",
    options: [
      { bn: "ভার্চুয়াল প্রাইভেট নেটওয়ার্ক", en: "Virtual Private Network" },
      { bn: "ভেরি প্রাইভেট নেটওয়ার্ক", en: "Very Private Network" },
      { bn: "ভিজ্যুয়াল প্রাইভেট নেটওয়ার্ক", en: "Visual Private Network" },
      { bn: "ভার্চুয়াল পাবলিক নেটওয়ার্ক", en: "Virtual Public Network" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  },
  {
    id: 225,
    questionBn: "ISP এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of ISP?",
    options: [
      { bn: "ইন্টারনেট সার্ভিস প্রোভাইডার", en: "Internet Service Provider" },
      { bn: "ইন্টারনেট সিস্টেম প্রোভাইডার", en: "Internet System Provider" },
      { bn: "ইন্টারনাল সার্ভিস প্রোভাইডার", en: "Internal Service Provider" },
      { bn: "ইন্টারনেট সফটওয়্যার প্রোভাইডার", en: "Internet Software Provider" }
    ],
    correctAnswer: 0,
    category: "Networking",
    difficulty: "easy"
  }
];

export const cybersecurityQuestions: Question[] = [
  {
    id: 251,
    questionBn: "কম্পিউটার ভাইরাস কী?",
    questionEn: "What is a computer virus?",
    options: [
      { bn: "একটি হার্ডওয়্যার", en: "A hardware" },
      { bn: "ক্ষতিকর প্রোগ্রাম", en: "Malicious program" },
      { bn: "একটি ব্রাউজার", en: "A browser" },
      { bn: "একটি অপারেটিং সিস্টেম", en: "An operating system" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 252,
    questionBn: "প্রথম কম্পিউটার ভাইরাসের নাম কী?",
    questionEn: "What is the name of the first computer virus?",
    options: [
      { bn: "Brain", en: "Brain" },
      { bn: "Creeper", en: "Creeper" },
      { bn: "Morris", en: "Morris" },
      { bn: "ILOVEYOU", en: "ILOVEYOU" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "hard",
    explanation: {
      bn: "Creeper ১৯৭১ সালে তৈরি প্রথম কম্পিউটার ভাইরাস।",
      en: "Creeper was the first computer virus created in 1971."
    }
  },
  {
    id: 253,
    questionBn: "ফিশিং কী?",
    questionEn: "What is phishing?",
    options: [
      { bn: "মাছ ধরা", en: "Fishing" },
      { bn: "প্রতারণামূলক তথ্য চুরি", en: "Fraudulent data theft" },
      { bn: "সফটওয়্যার ইনস্টল", en: "Software installation" },
      { bn: "নেটওয়ার্ক সেটআপ", en: "Network setup" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy",
    explanation: {
      bn: "ফিশিং হলো প্রতারণামূলকভাবে ব্যবহারকারীদের ব্যক্তিগত তথ্য চুরি করা।",
      en: "Phishing is fraudulently stealing personal information from users."
    }
  },
  {
    id: 254,
    questionBn: "ম্যালওয়্যার কী?",
    questionEn: "What is malware?",
    options: [
      { bn: "ভালো সফটওয়্যার", en: "Good software" },
      { bn: "ক্ষতিকর সফটওয়্যার", en: "Malicious software" },
      { bn: "হার্ডওয়্যার", en: "Hardware" },
      { bn: "অপারেটিং সিস্টেম", en: "Operating system" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 255,
    questionBn: "র‍্যানসমওয়্যার কী করে?",
    questionEn: "What does ransomware do?",
    options: [
      { bn: "ডেটা এনক্রিপ্ট করে মুক্তিপণ দাবি করে", en: "Encrypts data and demands ransom" },
      { bn: "ফ্রি সফটওয়্যার দেয়", en: "Gives free software" },
      { bn: "কম্পিউটার দ্রুত করে", en: "Makes computer faster" },
      { bn: "ইন্টারনেট স্পিড বাড়ায়", en: "Increases internet speed" }
    ],
    correctAnswer: 0,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 256,
    questionBn: "ট্রোজান হর্স কী?",
    questionEn: "What is a Trojan horse?",
    options: [
      { bn: "একটি খেলা", en: "A game" },
      { bn: "ছদ্মবেশী ক্ষতিকর প্রোগ্রাম", en: "Disguised malicious program" },
      { bn: "একটি ব্রাউজার", en: "A browser" },
      { bn: "একটি সার্চ ইঞ্জিন", en: "A search engine" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 257,
    questionBn: "স্পাইওয়্যার কী করে?",
    questionEn: "What does spyware do?",
    options: [
      { bn: "ডেটা এনক্রিপ্ট করে", en: "Encrypts data" },
      { bn: "গোপনে ব্যবহারকারীর তথ্য সংগ্রহ করে", en: "Secretly collects user information" },
      { bn: "ফাইল ডিলিট করে", en: "Deletes files" },
      { bn: "কম্পিউটার বন্ধ করে", en: "Shuts down computer" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 258,
    questionBn: "অ্যান্টিভাইরাস সফটওয়্যার কী করে?",
    questionEn: "What does antivirus software do?",
    options: [
      { bn: "ভাইরাস তৈরি করে", en: "Creates viruses" },
      { bn: "ভাইরাস সনাক্ত ও রিমুভ করে", en: "Detects and removes viruses" },
      { bn: "ইন্টারনেট স্পিড বাড়ায়", en: "Increases internet speed" },
      { bn: "গেম খেলতে সাহায্য করে", en: "Helps play games" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 259,
    questionBn: "শক্তিশালী পাসওয়ার্ডে কী থাকা উচিত?",
    questionEn: "What should a strong password contain?",
    options: [
      { bn: "শুধু সংখ্যা", en: "Only numbers" },
      { bn: "শুধু অক্ষর", en: "Only letters" },
      { bn: "অক্ষর, সংখ্যা ও বিশেষ চিহ্ন", en: "Letters, numbers and special characters" },
      { bn: "শুধু নাম", en: "Only name" }
    ],
    correctAnswer: 2,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 260,
    questionBn: "Two-factor authentication কী?",
    questionEn: "What is two-factor authentication?",
    options: [
      { bn: "দুইটি পাসওয়ার্ড", en: "Two passwords" },
      { bn: "দুই ধাপের নিরাপত্তা যাচাই", en: "Two-step security verification" },
      { bn: "দুইটি ইমেইল", en: "Two emails" },
      { bn: "দুইটি ফোন নম্বর", en: "Two phone numbers" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 261,
    questionBn: "সাইবার অপরাধ কী?",
    questionEn: "What is cybercrime?",
    options: [
      { bn: "সাধারণ অপরাধ", en: "Normal crime" },
      { bn: "ইন্টারনেট/কম্পিউটার ব্যবহার করে অপরাধ", en: "Crime using internet/computer" },
      { bn: "ট্রাফিক লঙ্ঘন", en: "Traffic violation" },
      { bn: "কোনোটিই নয়", en: "None of the above" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 262,
    questionBn: "হ্যাকিং কী?",
    questionEn: "What is hacking?",
    options: [
      { bn: "সফটওয়্যার তৈরি", en: "Software development" },
      { bn: "অননুমোদিত সিস্টেম অ্যাক্সেস", en: "Unauthorized system access" },
      { bn: "ওয়েব ডিজাইন", en: "Web design" },
      { bn: "নেটওয়ার্ক সেটআপ", en: "Network setup" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 263,
    questionBn: "এথিক্যাল হ্যাকিং কী?",
    questionEn: "What is ethical hacking?",
    options: [
      { bn: "অবৈধ হ্যাকিং", en: "Illegal hacking" },
      { bn: "অনুমতি নিয়ে নিরাপত্তা পরীক্ষা", en: "Security testing with permission" },
      { bn: "ভাইরাস তৈরি", en: "Creating viruses" },
      { bn: "ডেটা চুরি", en: "Data theft" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 264,
    questionBn: "DDoS আক্রমণ কী?",
    questionEn: "What is a DDoS attack?",
    options: [
      { bn: "ডিস্ট্রিবিউটেড ডিনায়াল অফ সার্ভিস", en: "Distributed Denial of Service" },
      { bn: "ডেটা ডাউনলোড সার্ভিস", en: "Data Download Service" },
      { bn: "ডিজিটাল ডিফেন্স সার্ভিস", en: "Digital Defense Service" },
      { bn: "ডায়নামিক ডেটা সার্ভিস", en: "Dynamic Data Service" }
    ],
    correctAnswer: 0,
    category: "Cybersecurity",
    difficulty: "hard"
  },
  {
    id: 265,
    questionBn: "পাইরেসি কী?",
    questionEn: "What is piracy?",
    options: [
      { bn: "সমুদ্র দস্যুতা", en: "Sea robbery" },
      { bn: "অবৈধ সফটওয়্যার/কন্টেন্ট কপি", en: "Illegal software/content copying" },
      { bn: "আইনি ডাউনলোড", en: "Legal download" },
      { bn: "সফটওয়্যার ক্রয়", en: "Software purchase" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 266,
    questionBn: "কপিরাইট কী?",
    questionEn: "What is copyright?",
    options: [
      { bn: "অনুলিপি করার অধিকার", en: "Right to copy" },
      { bn: "বুদ্ধিবৃত্তিক সম্পত্তির আইনি সুরক্ষা", en: "Legal protection of intellectual property" },
      { bn: "ফ্রি সফটওয়্যার", en: "Free software" },
      { bn: "ওপেন সোর্স", en: "Open source" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 267,
    questionBn: "ওয়ার্ম ভাইরাস কীভাবে ছড়ায়?",
    questionEn: "How does a worm virus spread?",
    options: [
      { bn: "ইউএসবি দিয়ে", en: "Through USB" },
      { bn: "স্বয়ংক্রিয়ভাবে নেটওয়ার্কে", en: "Automatically through network" },
      { bn: "ইমেইল দিয়ে শুধু", en: "Only through email" },
      { bn: "ছড়ায় না", en: "Does not spread" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 268,
    questionBn: "সোশ্যাল ইঞ্জিনিয়ারিং কী?",
    questionEn: "What is social engineering?",
    options: [
      { bn: "সফটওয়্যার ইঞ্জিনিয়ারিং", en: "Software engineering" },
      { bn: "মানুষকে প্রতারিত করে তথ্য নেওয়া", en: "Manipulating people to get information" },
      { bn: "সোশ্যাল মিডিয়া ব্যবহার", en: "Using social media" },
      { bn: "নেটওয়ার্ক ইঞ্জিনিয়ারিং", en: "Network engineering" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "hard"
  },
  {
    id: 269,
    questionBn: "SSL এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of SSL?",
    options: [
      { bn: "সিকিউর সকেট লেয়ার", en: "Secure Socket Layer" },
      { bn: "সিকিউর সিস্টেম লেয়ার", en: "Secure System Layer" },
      { bn: "স্ট্যান্ডার্ড সকেট লেয়ার", en: "Standard Socket Layer" },
      { bn: "সিম্পল সকেট লেয়ার", en: "Simple Socket Layer" }
    ],
    correctAnswer: 0,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 270,
    questionBn: "এনক্রিপশন কী?",
    questionEn: "What is encryption?",
    options: [
      { bn: "ডেটা ডিলিট করা", en: "Deleting data" },
      { bn: "ডেটাকে অপাঠযোগ্য কোডে রূপান্তর", en: "Converting data to unreadable code" },
      { bn: "ডেটা কপি করা", en: "Copying data" },
      { bn: "ডেটা প্রিন্ট করা", en: "Printing data" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 271,
    questionBn: "ব্যাকআপ কেন প্রয়োজন?",
    questionEn: "Why is backup necessary?",
    options: [
      { bn: "কম্পিউটার দ্রুত করতে", en: "To speed up computer" },
      { bn: "ডেটা হারানো প্রতিরোধে", en: "To prevent data loss" },
      { bn: "ইন্টারনেট দ্রুত করতে", en: "To speed up internet" },
      { bn: "গেম খেলতে", en: "To play games" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 272,
    questionBn: "স্প্যাম কী?",
    questionEn: "What is spam?",
    options: [
      { bn: "গুরুত্বপূর্ণ ইমেইল", en: "Important email" },
      { bn: "অবাঞ্ছিত বাল্ক ইমেইল", en: "Unwanted bulk email" },
      { bn: "ভিডিও ফাইল", en: "Video file" },
      { bn: "অডিও ফাইল", en: "Audio file" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "easy"
  },
  {
    id: 273,
    questionBn: "কী-লগার কী?",
    questionEn: "What is a keylogger?",
    options: [
      { bn: "কীবোর্ড পরিষ্কারক", en: "Keyboard cleaner" },
      { bn: "কীস্ট্রোক রেকর্ড করার প্রোগ্রাম", en: "Program that records keystrokes" },
      { bn: "কীবোর্ড ড্রাইভার", en: "Keyboard driver" },
      { bn: "টাইপিং গেম", en: "Typing game" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 274,
    questionBn: "ফায়ারওয়াল কোথায় স্থাপিত হয়?",
    questionEn: "Where is a firewall placed?",
    options: [
      { bn: "কম্পিউটারের ভেতরে", en: "Inside computer" },
      { bn: "নেটওয়ার্ক ও ইন্টারনেটের মাঝে", en: "Between network and internet" },
      { bn: "মনিটরে", en: "In monitor" },
      { bn: "প্রিন্টারে", en: "In printer" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  },
  {
    id: 275,
    questionBn: "ডিজিটাল স্বাক্ষর কী?",
    questionEn: "What is a digital signature?",
    options: [
      { bn: "হাতের স্বাক্ষর", en: "Handwritten signature" },
      { bn: "ইলেকট্রনিক নিরাপত্তা স্বাক্ষর", en: "Electronic security signature" },
      { bn: "ছবি", en: "Picture" },
      { bn: "ইমোজি", en: "Emoji" }
    ],
    correctAnswer: 1,
    category: "Cybersecurity",
    difficulty: "medium"
  }
];
