// NHSPC Quiz Questions - Part 5: Cloud Computing, MS Excel & History
import { Question } from './questions-part1';

export const cloudComputingQuestions: Question[] = [
  {
    id: 401,
    questionBn: "ক্লাউড কম্পিউটিং কী?",
    questionEn: "What is cloud computing?",
    options: [
      { bn: "আকাশে কম্পিউটার", en: "Computer in sky" },
      { bn: "ইন্টারনেটের মাধ্যমে কম্পিউটিং সেবা", en: "Computing services via internet" },
      { bn: "একটি সফটওয়্যার", en: "A software" },
      { bn: "একটি হার্ডওয়্যার", en: "A hardware" }
    ],
    correctAnswer: 1,
    category: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 402,
    questionBn: "SaaS এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of SaaS?",
    options: [
      { bn: "সফটওয়্যার অ্যাজ আ সার্ভিস", en: "Software as a Service" },
      { bn: "সিস্টেম অ্যাজ আ সার্ভিস", en: "System as a Service" },
      { bn: "স্টোরেজ অ্যাজ আ সার্ভিস", en: "Storage as a Service" },
      { bn: "সিকিউরিটি অ্যাজ আ সার্ভিস", en: "Security as a Service" }
    ],
    correctAnswer: 0,
    category: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 403,
    questionBn: "PaaS এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of PaaS?",
    options: [
      { bn: "প্ল্যাটফর্ম অ্যাজ আ সার্ভিস", en: "Platform as a Service" },
      { bn: "প্রোগ্রাম অ্যাজ আ সার্ভিস", en: "Program as a Service" },
      { bn: "প্রসেস অ্যাজ আ সার্ভিস", en: "Process as a Service" },
      { bn: "প্রাইভেট অ্যাজ আ সার্ভিস", en: "Private as a Service" }
    ],
    correctAnswer: 0,
    category: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 404,
    questionBn: "IaaS এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of IaaS?",
    options: [
      { bn: "ইনফ্রাস্ট্রাকচার অ্যাজ আ সার্ভিস", en: "Infrastructure as a Service" },
      { bn: "ইন্টারনেট অ্যাজ আ সার্ভিস", en: "Internet as a Service" },
      { bn: "ইনফরমেশন অ্যাজ আ সার্ভিস", en: "Information as a Service" },
      { bn: "ইন্টিগ্রেশন অ্যাজ আ সার্ভিস", en: "Integration as a Service" }
    ],
    correctAnswer: 0,
    category: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 405,
    questionBn: "Google Drive কোন ধরনের সার্ভিস?",
    questionEn: "What type of service is Google Drive?",
    options: [
      { bn: "ক্লাউড স্টোরেজ", en: "Cloud Storage" },
      { bn: "সোশ্যাল মিডিয়া", en: "Social Media" },
      { bn: "ই-কমার্স", en: "E-commerce" },
      { bn: "গেমিং", en: "Gaming" }
    ],
    correctAnswer: 0,
    category: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 406,
    questionBn: "AWS এর পূর্ণরূপ কী?",
    questionEn: "What is the full form of AWS?",
    options: [
      { bn: "অ্যামাজন ওয়েব সার্ভিসেস", en: "Amazon Web Services" },
      { bn: "অ্যাডভান্সড ওয়েব সার্ভিসেস", en: "Advanced Web Services" },
      { bn: "অ্যামেরিকান ওয়েব সার্ভিসেস", en: "American Web Services" },
      { bn: "অ্যাপ্লিকেশন ওয়েব সার্ভিসেস", en: "Application Web Services" }
    ],
    correctAnswer: 0,
    category: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 407,
    questionBn: "Microsoft এর ক্লাউড প্ল্যাটফর্মের নাম কী?",
    questionEn: "What is the name of Microsoft's cloud platform?",
    options: [
      { bn: "AWS", en: "AWS" },
      { bn: "Azure", en: "Azure" },
      { bn: "Google Cloud", en: "Google Cloud" },
      { bn: "IBM Cloud", en: "IBM Cloud" }
    ],
    correctAnswer: 1,
    category: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 408,
    questionBn: "পাবলিক ক্লাউড কী?",
    questionEn: "What is public cloud?",
    options: [
      { bn: "ব্যক্তিগত ব্যবহারের জন্য", en: "For personal use only" },
      { bn: "সবার জন্য উন্মুক্ত ক্লাউড সেবা", en: "Cloud service open to everyone" },
      { bn: "সরকারি ক্লাউড", en: "Government cloud" },
      { bn: "কোম্পানির ভেতরের ক্লাউড", en: "Company internal cloud" }
    ],
    correctAnswer: 1,
    category: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 409,
    questionBn: "প্রাইভেট ক্লাউড কী?",
    questionEn: "What is private cloud?",
    options: [
      { bn: "সবার জন্য উন্মুক্ত", en: "Open to everyone" },
      { bn: "একটি প্রতিষ্ঠানের জন্য নির্দিষ্ট", en: "Dedicated to one organization" },
      { bn: "ফ্রি সার্ভিস", en: "Free service" },
      { bn: "গেমিং ক্লাউড", en: "Gaming cloud" }
    ],
    correctAnswer: 1,
    category: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 410,
    questionBn: "হাইব্রিড ক্লাউড কী?",
    questionEn: "What is hybrid cloud?",
    options: [
      { bn: "শুধু পাবলিক ক্লাউড", en: "Only public cloud" },
      { bn: "শুধু প্রাইভেট ক্লাউড", en: "Only private cloud" },
      { bn: "পাবলিক ও প্রাইভেট ক্লাউডের সমন্বয়", en: "Combination of public and private cloud" },
      { bn: "কোনো ক্লাউড নয়", en: "No cloud" }
    ],
    correctAnswer: 2,
    category: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 411,
    questionBn: "ক্লাউড স্টোরেজের সুবিধা কী?",
    questionEn: "What is the advantage of cloud storage?",
    options: [
      { bn: "যেকোনো জায়গা থেকে অ্যাক্সেস", en: "Access from anywhere" },
      { bn: "ইন্টারনেট ছাড়া কাজ করে", en: "Works without internet" },
      { bn: "বিনামূল্যে সব সার্ভিস", en: "All services are free" },
      { bn: "কোনো সুবিধা নেই", en: "No advantage" }
    ],
    correctAnswer: 0,
    category: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 412,
    questionBn: "Dropbox কী?",
    questionEn: "What is Dropbox?",
    options: [
      { bn: "ইমেইল সার্ভিস", en: "Email service" },
      { bn: "ক্লাউড স্টোরেজ সার্ভিস", en: "Cloud storage service" },
      { bn: "সোশ্যাল মিডিয়া", en: "Social media" },
      { bn: "গেমিং প্ল্যাটফর্ম", en: "Gaming platform" }
    ],
    correctAnswer: 1,
    category: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 413,
    questionBn: "ভার্চুয়ালাইজেশন কী?",
    questionEn: "What is virtualization?",
    options: [
      { bn: "একটি হার্ডওয়্যারে একাধিক ভার্চুয়াল সিস্টেম তৈরি", en: "Creating multiple virtual systems on one hardware" },
      { bn: "গ্রাফিক্স তৈরি", en: "Creating graphics" },
      { bn: "ভিডিও এডিটিং", en: "Video editing" },
      { bn: "অডিও রেকর্ডিং", en: "Audio recording" }
    ],
    correctAnswer: 0,
    category: "Cloud Computing",
    difficulty: "medium"
  },
  {
    id: 414,
    questionBn: "ক্লাউড কম্পিউটিং এর প্রধান অসুবিধা কী?",
    questionEn: "What is the main disadvantage of cloud computing?",
    options: [
      { bn: "দ্রুত গতি", en: "Fast speed" },
      { bn: "ইন্টারনেট নির্ভরতা", en: "Internet dependency" },
      { bn: "সহজ ব্যবহার", en: "Easy to use" },
      { bn: "বেশি স্টোরেজ", en: "More storage" }
    ],
    correctAnswer: 1,
    category: "Cloud Computing",
    difficulty: "easy"
  },
  {
    id: 415,
    questionBn: "OneDrive কোন কোম্পানির?",
    questionEn: "Which company owns OneDrive?",
    options: [
      { bn: "Google", en: "Google" },
      { bn: "Apple", en: "Apple" },
      { bn: "Microsoft", en: "Microsoft" },
      { bn: "Amazon", en: "Amazon" }
    ],
    correctAnswer: 2,
    category: "Cloud Computing",
    difficulty: "easy"
  }
];

export const msExcelQuestions: Question[] = [
  {
    id: 451,
    questionBn: "MS Excel কোন ধরনের সফটওয়্যার?",
    questionEn: "What type of software is MS Excel?",
    options: [
      { bn: "ওয়ার্ড প্রসেসর", en: "Word Processor" },
      { bn: "স্প্রেডশীট", en: "Spreadsheet" },
      { bn: "প্রেজেন্টেশন", en: "Presentation" },
      { bn: "ডাটাবেস", en: "Database" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 452,
    questionBn: "Excel এ সেল অ্যাড্রেস কীভাবে লেখা হয়?",
    questionEn: "How is a cell address written in Excel?",
    options: [
      { bn: "রো নম্বর + কলাম নাম", en: "Row number + Column name" },
      { bn: "কলাম নাম + রো নম্বর", en: "Column name + Row number" },
      { bn: "শুধু কলাম নাম", en: "Only column name" },
      { bn: "শুধু রো নম্বর", en: "Only row number" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy",
    explanation: {
      bn: "উদাহরণ: A1, B5, C10 ইত্যাদি",
      en: "Example: A1, B5, C10 etc."
    }
  },
  {
    id: 453,
    questionBn: "Excel এ ফাইলের এক্সটেনশন কী?",
    questionEn: "What is the file extension in Excel?",
    options: [
      { bn: ".doc", en: ".doc" },
      { bn: ".xlsx", en: ".xlsx" },
      { bn: ".ppt", en: ".ppt" },
      { bn: ".pdf", en: ".pdf" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 454,
    questionBn: "Excel এ যোগ করার ফাংশন কোনটি?",
    questionEn: "Which function is used for addition in Excel?",
    options: [
      { bn: "=ADD()", en: "=ADD()" },
      { bn: "=SUM()", en: "=SUM()" },
      { bn: "=PLUS()", en: "=PLUS()" },
      { bn: "=TOTAL()", en: "=TOTAL()" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 455,
    questionBn: "Excel এ গড় বের করার ফাংশন কোনটি?",
    questionEn: "Which function is used for average in Excel?",
    options: [
      { bn: "=AVG()", en: "=AVG()" },
      { bn: "=AVERAGE()", en: "=AVERAGE()" },
      { bn: "=MEAN()", en: "=MEAN()" },
      { bn: "=MID()", en: "=MID()" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 456,
    questionBn: "Excel এ সর্বোচ্চ মান বের করার ফাংশন কোনটি?",
    questionEn: "Which function finds the maximum value in Excel?",
    options: [
      { bn: "=MAXIMUM()", en: "=MAXIMUM()" },
      { bn: "=MAX()", en: "=MAX()" },
      { bn: "=HIGH()", en: "=HIGH()" },
      { bn: "=TOP()", en: "=TOP()" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 457,
    questionBn: "Excel এ সর্বনিম্ন মান বের করার ফাংশন কোনটি?",
    questionEn: "Which function finds the minimum value in Excel?",
    options: [
      { bn: "=MINIMUM()", en: "=MINIMUM()" },
      { bn: "=MIN()", en: "=MIN()" },
      { bn: "=LOW()", en: "=LOW()" },
      { bn: "=BOTTOM()", en: "=BOTTOM()" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 458,
    questionBn: "Excel এ সংখ্যা গণনার ফাংশন কোনটি?",
    questionEn: "Which function counts numbers in Excel?",
    options: [
      { bn: "=COUNT()", en: "=COUNT()" },
      { bn: "=NUMBER()", en: "=NUMBER()" },
      { bn: "=TOTAL()", en: "=TOTAL()" },
      { bn: "=QUANTITY()", en: "=QUANTITY()" }
    ],
    correctAnswer: 0,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 459,
    questionBn: "Excel এ IF ফাংশন কী কাজে ব্যবহৃত হয়?",
    questionEn: "What is IF function used for in Excel?",
    options: [
      { bn: "যোগ করা", en: "Addition" },
      { bn: "শর্তমূলক লজিক", en: "Conditional logic" },
      { bn: "গড় বের করা", en: "Finding average" },
      { bn: "গুণ করা", en: "Multiplication" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "medium"
  },
  {
    id: 460,
    questionBn: "Excel এ VLOOKUP কী?",
    questionEn: "What is VLOOKUP in Excel?",
    options: [
      { bn: "ভার্টিক্যাল লুকআপ - কলামে ডেটা খোঁজা", en: "Vertical Lookup - search data in column" },
      { bn: "ভিজ্যুয়াল লুকআপ", en: "Visual Lookup" },
      { bn: "ভ্যালু লুকআপ", en: "Value Lookup" },
      { bn: "ভেরিয়েবল লুকআপ", en: "Variable Lookup" }
    ],
    correctAnswer: 0,
    category: "MS Excel",
    difficulty: "medium"
  },
  {
    id: 461,
    questionBn: "Excel এ Ctrl+C কী করে?",
    questionEn: "What does Ctrl+C do in Excel?",
    options: [
      { bn: "কাট", en: "Cut" },
      { bn: "কপি", en: "Copy" },
      { bn: "পেস্ট", en: "Paste" },
      { bn: "ক্লোজ", en: "Close" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 462,
    questionBn: "Excel এ Ctrl+V কী করে?",
    questionEn: "What does Ctrl+V do in Excel?",
    options: [
      { bn: "কাট", en: "Cut" },
      { bn: "কপি", en: "Copy" },
      { bn: "পেস্ট", en: "Paste" },
      { bn: "ভিউ", en: "View" }
    ],
    correctAnswer: 2,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 463,
    questionBn: "Excel এ Ctrl+Z কী করে?",
    questionEn: "What does Ctrl+Z do in Excel?",
    options: [
      { bn: "আনডু", en: "Undo" },
      { bn: "রিডু", en: "Redo" },
      { bn: "জুম", en: "Zoom" },
      { bn: "সেভ", en: "Save" }
    ],
    correctAnswer: 0,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 464,
    questionBn: "Excel এ একটি ওয়ার্কবুকে সর্বোচ্চ কতটি শীট থাকতে পারে?",
    questionEn: "Maximum how many sheets can be in an Excel workbook?",
    options: [
      { bn: "১০", en: "10" },
      { bn: "২৫৫", en: "255" },
      { bn: "মেমরি অনুযায়ী", en: "Depends on memory" },
      { bn: "১০০০", en: "1000" }
    ],
    correctAnswer: 2,
    category: "MS Excel",
    difficulty: "hard"
  },
  {
    id: 465,
    questionBn: "Excel এ =A1+B1 লিখলে কী হবে?",
    questionEn: "What happens when you write =A1+B1 in Excel?",
    options: [
      { bn: "A1 ও B1 সেলের মান যোগ হবে", en: "Values of A1 and B1 will be added" },
      { bn: "টেক্সট A1+B1 দেখাবে", en: "Will show text A1+B1" },
      { bn: "এরর দেখাবে", en: "Will show error" },
      { bn: "কিছুই হবে না", en: "Nothing will happen" }
    ],
    correctAnswer: 0,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 466,
    questionBn: "Excel এ ফর্মুলা সবসময় কী দিয়ে শুরু হয়?",
    questionEn: "Excel formula always starts with what?",
    options: [
      { bn: "+", en: "+" },
      { bn: "=", en: "=" },
      { bn: "-", en: "-" },
      { bn: "*", en: "*" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 467,
    questionBn: "Excel এ $ চিহ্ন কী বোঝায়?",
    questionEn: "What does $ sign mean in Excel?",
    options: [
      { bn: "ডলার", en: "Dollar" },
      { bn: "অ্যাবসলিউট রেফারেন্স", en: "Absolute reference" },
      { bn: "পার্সেন্টেজ", en: "Percentage" },
      { bn: "গুণ", en: "Multiplication" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "medium"
  },
  {
    id: 468,
    questionBn: "CONCATENATE ফাংশন কী করে?",
    questionEn: "What does CONCATENATE function do?",
    options: [
      { bn: "সংখ্যা যোগ করে", en: "Adds numbers" },
      { bn: "টেক্সট জোড়া লাগায়", en: "Joins text" },
      { bn: "সংখ্যা গুণ করে", en: "Multiplies numbers" },
      { bn: "ডেটা ডিলিট করে", en: "Deletes data" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "medium"
  },
  {
    id: 469,
    questionBn: "Excel এ চার্ট তৈরি করতে কোন মেনু ব্যবহার করতে হয়?",
    questionEn: "Which menu is used to create charts in Excel?",
    options: [
      { bn: "Home", en: "Home" },
      { bn: "Insert", en: "Insert" },
      { bn: "View", en: "View" },
      { bn: "File", en: "File" }
    ],
    correctAnswer: 1,
    category: "MS Excel",
    difficulty: "easy"
  },
  {
    id: 470,
    questionBn: "Excel এ ROUND ফাংশন কী করে?",
    questionEn: "What does ROUND function do in Excel?",
    options: [
      { bn: "সংখ্যা রাউন্ড করে", en: "Rounds numbers" },
      { bn: "সংখ্যা যোগ করে", en: "Adds numbers" },
      { bn: "সংখ্যা গুণ করে", en: "Multiplies numbers" },
      { bn: "সংখ্যা ভাগ করে", en: "Divides numbers" }
    ],
    correctAnswer: 0,
    category: "MS Excel",
    difficulty: "medium"
  }
];

export const historyQuestions: Question[] = [
  {
    id: 501,
    questionBn: "কম্পিউটারের জনক কাকে বলা হয়?",
    questionEn: "Who is called the father of computer?",
    options: [
      { bn: "চার্লস ব্যাবেজ", en: "Charles Babbage" },
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "স্টিভ জবস", en: "Steve Jobs" },
      { bn: "অ্যালান টুরিং", en: "Alan Turing" }
    ],
    correctAnswer: 0,
    category: "History",
    difficulty: "easy"
  },
  {
    id: 502,
    questionBn: "প্রথম প্রোগ্রামার কে?",
    questionEn: "Who was the first programmer?",
    options: [
      { bn: "চার্লস ব্যাবেজ", en: "Charles Babbage" },
      { bn: "এডা লাভলেস", en: "Ada Lovelace" },
      { bn: "গ্রেস হপার", en: "Grace Hopper" },
      { bn: "মার্গারেট হ্যামিল্টন", en: "Margaret Hamilton" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 503,
    questionBn: "অ্যালান টুরিং কিসের জন্য বিখ্যাত?",
    questionEn: "What is Alan Turing famous for?",
    options: [
      { bn: "প্রথম কম্পিউটার তৈরি", en: "Creating first computer" },
      { bn: "টুরিং মেশিন ও AI এর ভিত্তি", en: "Turing Machine and foundation of AI" },
      { bn: "উইন্ডোজ তৈরি", en: "Creating Windows" },
      { bn: "ইন্টারনেট আবিষ্কার", en: "Inventing internet" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 504,
    questionBn: "জন ভন নিউম্যান কিসের জন্য পরিচিত?",
    questionEn: "What is John von Neumann known for?",
    options: [
      { bn: "ভন নিউম্যান আর্কিটেকচার", en: "Von Neumann Architecture" },
      { bn: "প্রথম প্রোগ্রামিং ভাষা", en: "First programming language" },
      { bn: "ইন্টারনেট", en: "Internet" },
      { bn: "WWW", en: "WWW" }
    ],
    correctAnswer: 0,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 505,
    questionBn: "Microsoft কে প্রতিষ্ঠা করেন?",
    questionEn: "Who founded Microsoft?",
    options: [
      { bn: "স্টিভ জবস", en: "Steve Jobs" },
      { bn: "বিল গেটস ও পল অ্যালেন", en: "Bill Gates and Paul Allen" },
      { bn: "মার্ক জুকারবার্গ", en: "Mark Zuckerberg" },
      { bn: "ইলন মাস্ক", en: "Elon Musk" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "easy"
  },
  {
    id: 506,
    questionBn: "Apple কে প্রতিষ্ঠা করেন?",
    questionEn: "Who founded Apple?",
    options: [
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "স্টিভ জবস ও স্টিভ ওজনিয়াক", en: "Steve Jobs and Steve Wozniak" },
      { bn: "মার্ক জুকারবার্গ", en: "Mark Zuckerberg" },
      { bn: "জেফ বেজোস", en: "Jeff Bezos" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "easy"
  },
  {
    id: 507,
    questionBn: "Facebook কে প্রতিষ্ঠা করেন?",
    questionEn: "Who founded Facebook?",
    options: [
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "স্টিভ জবস", en: "Steve Jobs" },
      { bn: "মার্ক জুকারবার্গ", en: "Mark Zuckerberg" },
      { bn: "জেফ বেজোস", en: "Jeff Bezos" }
    ],
    correctAnswer: 2,
    category: "History",
    difficulty: "easy"
  },
  {
    id: 508,
    questionBn: "Google কবে প্রতিষ্ঠিত হয়?",
    questionEn: "When was Google founded?",
    options: [
      { bn: "১৯৯৫", en: "1995" },
      { bn: "১৯৯৮", en: "1998" },
      { bn: "২০০০", en: "2000" },
      { bn: "২০০৪", en: "2004" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 509,
    questionBn: "Google এর প্রতিষ্ঠাতা কারা?",
    questionEn: "Who are the founders of Google?",
    options: [
      { bn: "বিল গেটস ও পল অ্যালেন", en: "Bill Gates and Paul Allen" },
      { bn: "ল্যারি পেজ ও সের্গেই ব্রিন", en: "Larry Page and Sergey Brin" },
      { bn: "স্টিভ জবস ও স্টিভ ওজনিয়াক", en: "Steve Jobs and Steve Wozniak" },
      { bn: "মার্ক জুকারবার্গ ও এডুয়ার্ডো স্যাভরিন", en: "Mark Zuckerberg and Eduardo Saverin" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 510,
    questionBn: "ইন্টারনেটের পূর্বসূরি কী ছিল?",
    questionEn: "What was the predecessor of the Internet?",
    options: [
      { bn: "WWW", en: "WWW" },
      { bn: "ARPANET", en: "ARPANET" },
      { bn: "Ethernet", en: "Ethernet" },
      { bn: "Wi-Fi", en: "Wi-Fi" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 511,
    questionBn: "ARPANET কত সালে তৈরি হয়?",
    questionEn: "When was ARPANET created?",
    options: [
      { bn: "১৯৬৫", en: "1965" },
      { bn: "১৯৬৯", en: "1969" },
      { bn: "১৯৭৫", en: "1975" },
      { bn: "১৯৮০", en: "1980" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 512,
    questionBn: "WWW কত সালে তৈরি হয়?",
    questionEn: "When was WWW created?",
    options: [
      { bn: "১৯৮৫", en: "1985" },
      { bn: "১৯৮৯", en: "1989" },
      { bn: "১৯৯৫", en: "1995" },
      { bn: "২০০০", en: "2000" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 513,
    questionBn: "প্রথম ওয়েব ব্রাউজারের নাম কী?",
    questionEn: "What is the name of the first web browser?",
    options: [
      { bn: "Chrome", en: "Chrome" },
      { bn: "Internet Explorer", en: "Internet Explorer" },
      { bn: "WorldWideWeb", en: "WorldWideWeb" },
      { bn: "Firefox", en: "Firefox" }
    ],
    correctAnswer: 2,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 514,
    questionBn: "প্রথম ইমেইল কে পাঠান?",
    questionEn: "Who sent the first email?",
    options: [
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "রে টমলিনসন", en: "Ray Tomlinson" },
      { bn: "টিম বার্নার্স-লি", en: "Tim Berners-Lee" },
      { bn: "ভিন্ট সার্ফ", en: "Vint Cerf" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 515,
    questionBn: "ইমেইলে @ চিহ্ন কে প্রথম ব্যবহার করেন?",
    questionEn: "Who first used the @ symbol in email?",
    options: [
      { bn: "বিল গেটস", en: "Bill Gates" },
      { bn: "রে টমলিনসন", en: "Ray Tomlinson" },
      { bn: "স্টিভ জবস", en: "Steve Jobs" },
      { bn: "মার্ক জুকারবার্গ", en: "Mark Zuckerberg" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 516,
    questionBn: "প্রথম পার্সোনাল কম্পিউটার কোনটি?",
    questionEn: "Which is the first personal computer?",
    options: [
      { bn: "IBM PC", en: "IBM PC" },
      { bn: "Apple I", en: "Apple I" },
      { bn: "Altair 8800", en: "Altair 8800" },
      { bn: "Commodore 64", en: "Commodore 64" }
    ],
    correctAnswer: 2,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 517,
    questionBn: "IBM PC কত সালে বাজারে আসে?",
    questionEn: "When was IBM PC released?",
    options: [
      { bn: "১৯৭৫", en: "1975" },
      { bn: "১৯৮১", en: "1981" },
      { bn: "১৯৮৫", en: "1985" },
      { bn: "১৯৯০", en: "1990" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 518,
    questionBn: "প্রথম iPhone কবে বাজারে আসে?",
    questionEn: "When was the first iPhone released?",
    options: [
      { bn: "২০০৫", en: "2005" },
      { bn: "২০০৭", en: "2007" },
      { bn: "২০১০", en: "2010" },
      { bn: "২০১২", en: "2012" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  },
  {
    id: 519,
    questionBn: "TCP/IP প্রোটোকলের উদ্ভাবক কারা?",
    questionEn: "Who invented TCP/IP protocol?",
    options: [
      { bn: "বিল গেটস ও পল অ্যালেন", en: "Bill Gates and Paul Allen" },
      { bn: "ভিন্ট সার্ফ ও বব কান", en: "Vint Cerf and Bob Kahn" },
      { bn: "টিম বার্নার্স-লি", en: "Tim Berners-Lee" },
      { bn: "ল্যারি পেজ ও সের্গেই ব্রিন", en: "Larry Page and Sergey Brin" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "hard"
  },
  {
    id: 520,
    questionBn: "YouTube কত সালে প্রতিষ্ঠিত হয়?",
    questionEn: "When was YouTube founded?",
    options: [
      { bn: "২০০৩", en: "2003" },
      { bn: "২০০৫", en: "2005" },
      { bn: "২০০৭", en: "2007" },
      { bn: "২০১০", en: "2010" }
    ],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium"
  }
];
