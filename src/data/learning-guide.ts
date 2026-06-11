// NHSPC Quiz Learning Guide - Complete Roadmap & Resources
export interface LearningSection {
  id: string;
  titleBn: string;
  titleEn: string;
  contentBn: string;
  contentEn: string;
  resources?: { name: string; url?: string; type: string }[];
}

export const learningGuide: LearningSection[] = [
  {
    id: 'introduction',
    titleBn: 'ভূমিকা ও পরিচিতি',
    titleEn: 'Introduction',
    contentBn: `
# NHSPC কুইজ প্রতিযোগিতা ২০২৬ - সম্পূর্ণ প্রস্তুতি গাইড

## কুইজ প্রতিযোগিতা কী?
National High School Programming Contest (NHSPC) কুইজ প্রতিযোগিতা হলো বাংলাদেশের সবচেয়ে মর্যাদাপূর্ণ ICT জ্ঞান ভিত্তিক প্রতিযোগিতা। এটি মূল প্রোগ্রামিং প্রতিযোগিতা থেকে ভিন্ন এবং এখানে তথ্যপ্রযুক্তি, কম্পিউটার বিজ্ঞান, লজিক্যাল রিজনিং এবং গণিত সম্পর্কিত MCQ প্রশ্ন থাকে।

## ক্যাটাগরি
- **জুনিয়র ক্যাটাগরি**: ৬ষ্ঠ - ৮ম শ্রেণি
- **সেকেন্ডারি ক্যাটাগরি**: ৯ম - ১০ম শ্রেণি

## কেন এই গাইড?
এই গাইড আপনাকে শূন্য থেকে শুরু করে জাতীয় পর্যায়ে ১ম স্থান অর্জনের জন্য সম্পূর্ণ প্রস্তুতি দেবে। প্রতিটি টপিক বিস্তারিতভাবে কভার করা হয়েছে এবং ১০০০+ প্রশ্ন দিয়ে অনুশীলন করতে পারবেন।

## প্রতিযোগিতার কাঠামো
- প্রতিটি প্রশ্নে ৪টি অপশন থাকে
- প্রতিটি সঠিক উত্তরে ধনাত্মক নম্বর
- ভুল উত্তরে ঋণাত্মক নম্বর থাকতে পারে (নেগেটিভ মার্কিং)
- সময় সীমিত থাকে
- বাংলা ও ইংরেজি উভয় ভাষায় প্রশ্ন হতে পারে
    `,
    contentEn: `
# NHSPC Quiz Competition 2026 - Complete Preparation Guide

## What is the Quiz Competition?
The National High School Programming Contest (NHSPC) Quiz Competition is Bangladesh's most prestigious ICT knowledge-based competition. Unlike the main programming contest, this focuses on MCQ questions about information technology, computer science, logical reasoning, and mathematics.

## Categories
- **Junior Category**: Class 6-8
- **Secondary Category**: Class 9-10

## Why This Guide?
This guide will help you prepare from zero to achieving 1st place at the national level. Every topic is covered in detail and you can practice with 1000+ questions.

## Competition Structure
- Each question has 4 options
- Correct answers earn positive marks
- Wrong answers may have negative marking
- Time is limited
- Questions may be in both Bangla and English
    `
  },
  {
    id: 'roadmap',
    titleBn: 'রোডম্যাপ ও পরিকল্পনা',
    titleEn: 'Roadmap & Planning',
    contentBn: `
# ৩০ দিনের সম্পূর্ণ প্রস্তুতি রোডম্যাপ

## সপ্তাহ ১ (দিন ১-৭): মৌলিক ধারণা

### দিন ১-২: কম্পিউটার ফান্ডামেন্টালস
- কম্পিউটারের ইতিহাস ও প্রজন্ম
- হার্ডওয়্যার: CPU, RAM, ROM, Storage
- ইনপুট/আউটপুট ডিভাইস
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ৩-৪: সফটওয়্যার ও অপারেটিং সিস্টেম
- সিস্টেম ও অ্যাপ্লিকেশন সফটওয়্যার
- Windows, Linux, Android, iOS
- ইউটিলিটি সফটওয়্যার
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ৫-৭: সংখ্যা পদ্ধতি
- বাইনারি, ডেসিমাল, অক্টাল, হেক্সাডেসিমাল
- রূপান্তর অনুশীলন
- ASCII, BCD কোড
- প্রতিদিন ৫০টি MCQ অনুশীলন

## সপ্তাহ ২ (দিন ৮-১৪): প্রোগ্রামিং ও লজিক

### দিন ৮-১০: প্রোগ্রামিং বেসিক
- অ্যালগরিদম ও ফ্লোচার্ট
- প্রোগ্রামিং ভাষার ইতিহাস
- C, Python, Java বেসিক
- Variable, Loop, Condition
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ১১-১২: লজিক গেট
- AND, OR, NOT, NAND, NOR, XOR
- ট্রুথ টেবিল
- বুলিয়ান অ্যালজেব্রা
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ১৩-১৪: ডেটা স্ট্রাকচার
- Array, Stack, Queue
- Linked List বেসিক
- Sorting ও Searching
- প্রতিদিন ৫০টি MCQ অনুশীলন

## সপ্তাহ ৩ (দিন ১৫-২১): নেটওয়ার্কিং ও সিকিউরিটি

### দিন ১৫-১৭: নেটওয়ার্কিং
- Internet, WWW, HTTP/HTTPS
- IP Address, DNS, URL
- LAN, WAN, MAN
- TCP/IP, Router, Modem
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ১৮-১৯: সাইবার সিকিউরিটি
- Virus, Malware, Phishing
- Firewall, Antivirus
- Password Security
- Encryption বেসিক
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ২০-২১: ডাটাবেস ও ক্লাউড
- Database বেসিক, SQL
- Cloud Computing (SaaS, PaaS, IaaS)
- AWS, Azure, Google Cloud পরিচিতি
- প্রতিদিন ৫০টি MCQ অনুশীলন

## সপ্তাহ ৪ (দিন ২২-৩০): ICT ও চূড়ান্ত প্রস্তুতি

### দিন ২২-২৪: NCTB ICT Syllabus
- ই-কমার্স, ই-গভর্নেন্স, ই-লার্নিং
- AI, IoT, Robotics
- Digital Bangladesh
- MS Office বিশেষত Excel
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ২৫-২৭: কম্পিউটার ইতিহাস
- পায়োনিয়ার: Babbage, Turing, Ada Lovelace
- কম্পিউটার প্রজন্ম
- ইন্টারনেট ও WWW ইতিহাস
- বিখ্যাত কোম্পানি ও প্রতিষ্ঠাতা
- প্রতিদিন ৫০টি MCQ অনুশীলন

### দিন ২৮-৩০: ফাইনাল রিভিশন
- সব টপিক রিভিশন
- মক টেস্ট (পূর্ণ সময়ে)
- দুর্বল টপিক চিহ্নিত করে অতিরিক্ত অনুশীলন
- প্রতিদিন ১০০+ MCQ অনুশীলন
    `,
    contentEn: `
# 30-Day Complete Preparation Roadmap

## Week 1 (Days 1-7): Fundamental Concepts

### Days 1-2: Computer Fundamentals
- Computer history and generations
- Hardware: CPU, RAM, ROM, Storage
- Input/Output devices
- Practice 50 MCQs daily

### Days 3-4: Software & Operating Systems
- System and Application software
- Windows, Linux, Android, iOS
- Utility software
- Practice 50 MCQs daily

### Days 5-7: Number Systems
- Binary, Decimal, Octal, Hexadecimal
- Conversion practice
- ASCII, BCD codes
- Practice 50 MCQs daily

## Week 2 (Days 8-14): Programming & Logic

### Days 8-10: Programming Basics
- Algorithms and Flowcharts
- Programming language history
- C, Python, Java basics
- Variable, Loop, Condition
- Practice 50 MCQs daily

### Days 11-12: Logic Gates
- AND, OR, NOT, NAND, NOR, XOR
- Truth tables
- Boolean algebra
- Practice 50 MCQs daily

### Days 13-14: Data Structures
- Array, Stack, Queue
- Linked List basics
- Sorting and Searching
- Practice 50 MCQs daily

## Week 3 (Days 15-21): Networking & Security

### Days 15-17: Networking
- Internet, WWW, HTTP/HTTPS
- IP Address, DNS, URL
- LAN, WAN, MAN
- TCP/IP, Router, Modem
- Practice 50 MCQs daily

### Days 18-19: Cyber Security
- Virus, Malware, Phishing
- Firewall, Antivirus
- Password Security
- Encryption basics
- Practice 50 MCQs daily

### Days 20-21: Database & Cloud
- Database basics, SQL
- Cloud Computing (SaaS, PaaS, IaaS)
- AWS, Azure, Google Cloud introduction
- Practice 50 MCQs daily

## Week 4 (Days 22-30): ICT & Final Preparation

### Days 22-24: NCTB ICT Syllabus
- E-commerce, E-governance, E-learning
- AI, IoT, Robotics
- Digital Bangladesh
- MS Office especially Excel
- Practice 50 MCQs daily

### Days 25-27: Computer History
- Pioneers: Babbage, Turing, Ada Lovelace
- Computer generations
- Internet and WWW history
- Famous companies and founders
- Practice 50 MCQs daily

### Days 28-30: Final Revision
- Revise all topics
- Mock tests (full time)
- Identify and work on weak areas
- Practice 100+ MCQs daily
    `
  },
  {
    id: 'computer-fundamentals',
    titleBn: 'কম্পিউটার ফান্ডামেন্টালস',
    titleEn: 'Computer Fundamentals',
    contentBn: `
# কম্পিউটার ফান্ডামেন্টালস - বিস্তারিত গাইড

## ১. কম্পিউটার কী?
কম্পিউটার হলো একটি ইলেকট্রনিক ডিভাইস যা ডেটা ইনপুট নেয়, প্রসেস করে এবং আউটপুট প্রদান করে।

**IPO Cycle**: Input → Process → Output

## ২. কম্পিউটারের শ্রেণিবিভাগ

### আকার অনুযায়ী:
- **সুপার কম্পিউটার**: সবচেয়ে শক্তিশালী (আবহাওয়া পূর্বাভাস, গবেষণা)
- **মেইনফ্রেম**: বড় প্রতিষ্ঠানে ব্যবহৃত
- **মিনি কম্পিউটার**: মাঝারি আকারের
- **মাইক্রো কম্পিউটার**: PC, ল্যাপটপ, ট্যাবলেট

### উদ্দেশ্য অনুযায়ী:
- **General Purpose**: সাধারণ কাজ
- **Special Purpose**: নির্দিষ্ট কাজ (ATM, Robot)

## ৩. CPU (Central Processing Unit)

CPU কম্পিউটারের মস্তিষ্ক। এর তিনটি প্রধান অংশ:

### ক. ALU (Arithmetic Logic Unit)
- গাণিতিক কাজ: +, -, ×, ÷
- যৌক্তিক কাজ: AND, OR, NOT, XOR
- তুলনা: >, <, =

### খ. Control Unit (CU)
- সকল কার্যক্রম নিয়ন্ত্রণ
- নির্দেশনা ডিকোড করা
- ডেটা ফ্লো নিয়ন্ত্রণ

### গ. Registers
- অস্থায়ী ডেটা সংরক্ষণ
- দ্রুততম মেমরি

## ৪. মেমরি

### প্রাইমারি মেমরি (Main Memory)

**RAM (Random Access Memory)**:
- Volatile (বিদ্যুৎ গেলে ডেটা হারায়)
- কাজ চলাকালীন ডেটা রাখে
- প্রকার: SRAM, DRAM, SDRAM, DDR

**ROM (Read Only Memory)**:
- Non-volatile
- স্থায়ী ডেটা (BIOS)
- প্রকার: PROM, EPROM, EEPROM

**Cache Memory**:
- CPU এর কাছে দ্রুত মেমরি
- L1, L2, L3 Cache

### সেকেন্ডারি মেমরি (Storage)
- Hard Disk Drive (HDD)
- Solid State Drive (SSD)
- USB Flash Drive
- CD, DVD, Blu-ray
- Memory Card

## ৫. ইনপুট ডিভাইস
- কীবোর্ড
- মাউস
- স্ক্যানার
- ওয়েবক্যাম
- মাইক্রোফোন
- জয়স্টিক
- টাচস্ক্রিন
- বারকোড রিডার

## ৬. আউটপুট ডিভাইস
- মনিটর (CRT, LCD, LED, OLED)
- প্রিন্টার (Inkjet, Laser, Dot Matrix)
- স্পিকার
- প্রজেক্টর
- প্লটার

## ৭. ডেটা পরিমাপ
\`\`\`
1 Bit = 0 or 1
8 Bits = 1 Byte
1024 Bytes = 1 KB (Kilobyte)
1024 KB = 1 MB (Megabyte)
1024 MB = 1 GB (Gigabyte)
1024 GB = 1 TB (Terabyte)
1024 TB = 1 PB (Petabyte)
\`\`\`

## ৮. গুরুত্বপূর্ণ টিপস
- CPU = Brain of Computer
- RAM = Volatile Memory
- ROM = Non-volatile Memory
- SSD > HDD (Speed)
- Mouse invented by Douglas Engelbart (1964)
- QWERTY = Keyboard Layout
    `,
    contentEn: `
# Computer Fundamentals - Detailed Guide

## 1. What is a Computer?
A computer is an electronic device that takes data input, processes it, and provides output.

**IPO Cycle**: Input → Process → Output

## 2. Classification of Computers

### By Size:
- **Supercomputer**: Most powerful (weather forecasting, research)
- **Mainframe**: Used in large organizations
- **Minicomputer**: Medium-sized
- **Microcomputer**: PC, laptop, tablet

### By Purpose:
- **General Purpose**: General tasks
- **Special Purpose**: Specific tasks (ATM, Robot)

## 3. CPU (Central Processing Unit)

CPU is the brain of the computer. It has three main parts:

### a. ALU (Arithmetic Logic Unit)
- Arithmetic operations: +, -, ×, ÷
- Logical operations: AND, OR, NOT, XOR
- Comparisons: >, <, =

### b. Control Unit (CU)
- Controls all activities
- Decodes instructions
- Controls data flow

### c. Registers
- Temporary data storage
- Fastest memory

## 4. Memory

### Primary Memory (Main Memory)

**RAM (Random Access Memory)**:
- Volatile (data lost when power off)
- Holds data during operation
- Types: SRAM, DRAM, SDRAM, DDR

**ROM (Read Only Memory)**:
- Non-volatile
- Permanent data (BIOS)
- Types: PROM, EPROM, EEPROM

**Cache Memory**:
- Fast memory near CPU
- L1, L2, L3 Cache

### Secondary Memory (Storage)
- Hard Disk Drive (HDD)
- Solid State Drive (SSD)
- USB Flash Drive
- CD, DVD, Blu-ray
- Memory Card

## 5. Input Devices
- Keyboard
- Mouse
- Scanner
- Webcam
- Microphone
- Joystick
- Touchscreen
- Barcode Reader

## 6. Output Devices
- Monitor (CRT, LCD, LED, OLED)
- Printer (Inkjet, Laser, Dot Matrix)
- Speaker
- Projector
- Plotter

## 7. Data Measurement
\`\`\`
1 Bit = 0 or 1
8 Bits = 1 Byte
1024 Bytes = 1 KB (Kilobyte)
1024 KB = 1 MB (Megabyte)
1024 MB = 1 GB (Gigabyte)
1024 GB = 1 TB (Terabyte)
1024 TB = 1 PB (Petabyte)
\`\`\`

## 8. Important Tips
- CPU = Brain of Computer
- RAM = Volatile Memory
- ROM = Non-volatile Memory
- SSD > HDD (Speed)
- Mouse invented by Douglas Engelbart (1964)
- QWERTY = Keyboard Layout
    `
  },
  {
    id: 'number-systems',
    titleBn: 'সংখ্যা পদ্ধতি',
    titleEn: 'Number Systems',
    contentBn: `
# সংখ্যা পদ্ধতি - বিস্তারিত গাইড

## ১. সংখ্যা পদ্ধতির প্রকারভেদ

| পদ্ধতি | বেস | অঙ্ক |
|--------|-----|------|
| বাইনারি | ২ | 0, 1 |
| অক্টাল | ৮ | 0-7 |
| ডেসিমাল | ১০ | 0-9 |
| হেক্সাডেসিমাল | ১৬ | 0-9, A-F |

## ২. হেক্সাডেসিমাল মান
\`\`\`
A = 10    D = 13
B = 11    E = 14
C = 12    F = 15
\`\`\`

## ৩. রূপান্তর পদ্ধতি

### ডেসিমাল থেকে বাইনারি
ধাপ: সংখ্যাকে ২ দিয়ে ভাগ করুন, অবশিষ্ট লিখুন, নিচ থেকে উপরে পড়ুন।

**উদাহরণ: (13)₁₀ → Binary**
\`\`\`
13 ÷ 2 = 6  অবশিষ্ট 1
6 ÷ 2 = 3   অবশিষ্ট 0
3 ÷ 2 = 1   অবশিষ্ট 1
1 ÷ 2 = 0   অবশিষ্ট 1

উত্তর: 1101
\`\`\`

### বাইনারি থেকে ডেসিমাল
ধাপ: প্রতিটি বিটকে 2^n দিয়ে গুণ করে যোগ করুন (ডান থেকে শুরু, n=0)।

**উদাহরণ: (1101)₂ → Decimal**
\`\`\`
1×2³ + 1×2² + 0×2¹ + 1×2⁰
= 8 + 4 + 0 + 1
= 13
\`\`\`

### বাইনারি থেকে অক্টাল
ধাপ: ডান থেকে ৩টি করে গ্রুপ করুন, প্রতিটি গ্রুপের ডেসিমাল লিখুন।

**উদাহরণ: (11010110)₂ → Octal**
\`\`\`
011 | 010 | 110
 3  |  2  |  6
= (326)₈
\`\`\`

### বাইনারি থেকে হেক্সাডেসিমাল
ধাপ: ডান থেকে ৪টি করে গ্রুপ করুন, প্রতিটি গ্রুপের হেক্স মান লিখুন।

**উদাহরণ: (11010110)₂ → Hex**
\`\`\`
1101 | 0110
  D  |   6
= (D6)₁₆
\`\`\`

## ৪. বাইনারি যোগ
\`\`\`
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10 (0 রাখি, 1 carry)
1 + 1 + 1 = 11 (1 রাখি, 1 carry)
\`\`\`

## ৫. 1's এবং 2's Complement

**1's Complement**: সব বিট উল্টে দিন (0→1, 1→0)
**2's Complement**: 1's complement + 1

**উদাহরণ: 5 এর 4-bit 2's complement (−5 উপস্থাপন)**
\`\`\`
5 = 0101
1's complement = 1010
2's complement = 1010 + 1 = 1011
\`\`\`

## ৬. ASCII Code
\`\`\`
'A' = 65    'a' = 97
'B' = 66    'b' = 98
'0' = 48    '9' = 57
Space = 32
\`\`\`

## ৭. গুরুত্বপূর্ণ সূত্র
- 1 Nibble = 4 bits
- 1 Byte = 8 bits
- 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64, 2⁷ = 128, 2⁸ = 256, 2¹⁰ = 1024
    `,
    contentEn: `
# Number Systems - Detailed Guide

## 1. Types of Number Systems

| System | Base | Digits |
|--------|------|--------|
| Binary | 2 | 0, 1 |
| Octal | 8 | 0-7 |
| Decimal | 10 | 0-9 |
| Hexadecimal | 16 | 0-9, A-F |

## 2. Hexadecimal Values
\`\`\`
A = 10    D = 13
B = 11    E = 14
C = 12    F = 15
\`\`\`

## 3. Conversion Methods

### Decimal to Binary
Method: Divide by 2, write remainder, read bottom to top.

**Example: (13)₁₀ → Binary**
\`\`\`
13 ÷ 2 = 6  remainder 1
6 ÷ 2 = 3   remainder 0
3 ÷ 2 = 1   remainder 1
1 ÷ 2 = 0   remainder 1

Answer: 1101
\`\`\`

### Binary to Decimal
Method: Multiply each bit by 2^n and add (from right, n=0).

**Example: (1101)₂ → Decimal**
\`\`\`
1×2³ + 1×2² + 0×2¹ + 1×2⁰
= 8 + 4 + 0 + 1
= 13
\`\`\`

### Binary to Octal
Method: Group 3 bits from right, write decimal of each group.

**Example: (11010110)₂ → Octal**
\`\`\`
011 | 010 | 110
 3  |  2  |  6
= (326)₈
\`\`\`

### Binary to Hexadecimal
Method: Group 4 bits from right, write hex value of each group.

**Example: (11010110)₂ → Hex**
\`\`\`
1101 | 0110
  D  |   6
= (D6)₁₆
\`\`\`

## 4. Binary Addition
\`\`\`
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10 (write 0, carry 1)
1 + 1 + 1 = 11 (write 1, carry 1)
\`\`\`

## 5. 1's and 2's Complement

**1's Complement**: Invert all bits (0→1, 1→0)
**2's Complement**: 1's complement + 1

**Example: 4-bit 2's complement of 5 (representing −5)**
\`\`\`
5 = 0101
1's complement = 1010
2's complement = 1010 + 1 = 1011
\`\`\`

## 6. ASCII Code
\`\`\`
'A' = 65    'a' = 97
'B' = 66    'b' = 98
'0' = 48    '9' = 57
Space = 32
\`\`\`

## 7. Important Formulas
- 1 Nibble = 4 bits
- 1 Byte = 8 bits
- 2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64, 2⁷ = 128, 2⁸ = 256, 2¹⁰ = 1024
    `
  },
  {
    id: 'tips-tricks',
    titleBn: 'টিপস এবং ট্রিকস',
    titleEn: 'Tips and Tricks',
    contentBn: `
# NHSPC কুইজে সাফল্যের টিপস

## ১. পরীক্ষার আগে
- পর্যাপ্ত ঘুম (৭-৮ ঘণ্টা)
- সকালে হালকা নাস্তা
- পরীক্ষার স্থানে আগে পৌঁছান
- প্রয়োজনীয় জিনিস সাথে রাখুন

## ২. পরীক্ষার সময়
- প্রথমে সহজ প্রশ্নগুলো উত্তর দিন
- কঠিন প্রশ্ন মার্ক করে রাখুন
- সময় ব্যবস্থাপনা করুন
- নেগেটিভ মার্কিং থাকলে অনিশ্চিত উত্তর এড়িয়ে চলুন

## ৩. দ্রুত রূপান্তরের টেকনিক

### 2 এর পাওয়ার মনে রাখুন:
\`\`\`
2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32
2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024
\`\`\`

### সাধারণ বাইনারি মান:
\`\`\`
(10)₁₀ = 1010₂
(15)₁₀ = 1111₂
(16)₁₀ = 10000₂
(32)₁₀ = 100000₂
(255)₁₀ = 11111111₂ = FF₁₆
\`\`\`

## ৪. মনে রাখার সহজ উপায়

### Full Forms মনে রাখুন:
- **CPU**: Central Processing Unit
- **RAM**: Random Access Memory
- **ROM**: Read Only Memory
- **USB**: Universal Serial Bus
- **HTML**: HyperText Markup Language
- **HTTP**: HyperText Transfer Protocol
- **WWW**: World Wide Web
- **DNS**: Domain Name System
- **IP**: Internet Protocol
- **LAN**: Local Area Network

### কম্পিউটার প্রজন্ম:
\`\`\`
1st = Vacuum Tube (ENIAC)
2nd = Transistor
3rd = IC (Integrated Circuit)
4th = Microprocessor (VLSI)
5th = AI
\`\`\`

## ৫. বিখ্যাত ব্যক্তিত্ব

| নাম | অবদান |
|-----|--------|
| Charles Babbage | Father of Computer, Analytical Engine |
| Ada Lovelace | First Programmer |
| Alan Turing | Turing Machine, AI Foundation |
| Tim Berners-Lee | WWW Inventor |
| Bill Gates | Microsoft Founder |
| Steve Jobs | Apple Founder |
| Dennis Ritchie | C Language Creator |
| Linus Torvalds | Linux Creator |

## ৬. গুরুত্বপূর্ণ সাল

| সাল | ঘটনা |
|-----|-------|
| 1971 | First Microprocessor (Intel 4004) |
| 1981 | IBM PC |
| 1983 | Internet (TCP/IP) |
| 1989 | WWW |
| 1991 | Linux |
| 1998 | Google |
| 2004 | Facebook |
| 2007 | iPhone |

## ৭. শেষ মুহূর্তের চেকলিস্ট
✅ সকল Full Form
✅ Number System রূপান্তর
✅ Logic Gate Truth Table
✅ Computer Generations
✅ Famous Personalities
✅ Important Dates
✅ NCTB ICT Syllabus Topics
    `,
    contentEn: `
# Tips for Success in NHSPC Quiz

## 1. Before the Exam
- Get adequate sleep (7-8 hours)
- Have a light breakfast
- Arrive early at the exam venue
- Keep necessary items with you

## 2. During the Exam
- Answer easy questions first
- Mark difficult questions for later
- Manage your time
- Avoid uncertain answers if negative marking applies

## 3. Quick Conversion Techniques

### Remember powers of 2:
\`\`\`
2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32
2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024
\`\`\`

### Common binary values:
\`\`\`
(10)₁₀ = 1010₂
(15)₁₀ = 1111₂
(16)₁₀ = 10000₂
(32)₁₀ = 100000₂
(255)₁₀ = 11111111₂ = FF₁₆
\`\`\`

## 4. Easy Memorization

### Remember Full Forms:
- **CPU**: Central Processing Unit
- **RAM**: Random Access Memory
- **ROM**: Read Only Memory
- **USB**: Universal Serial Bus
- **HTML**: HyperText Markup Language
- **HTTP**: HyperText Transfer Protocol
- **WWW**: World Wide Web
- **DNS**: Domain Name System
- **IP**: Internet Protocol
- **LAN**: Local Area Network

### Computer Generations:
\`\`\`
1st = Vacuum Tube (ENIAC)
2nd = Transistor
3rd = IC (Integrated Circuit)
4th = Microprocessor (VLSI)
5th = AI
\`\`\`

## 5. Famous Personalities

| Name | Contribution |
|------|--------------|
| Charles Babbage | Father of Computer, Analytical Engine |
| Ada Lovelace | First Programmer |
| Alan Turing | Turing Machine, AI Foundation |
| Tim Berners-Lee | WWW Inventor |
| Bill Gates | Microsoft Founder |
| Steve Jobs | Apple Founder |
| Dennis Ritchie | C Language Creator |
| Linus Torvalds | Linux Creator |

## 6. Important Years

| Year | Event |
|------|-------|
| 1971 | First Microprocessor (Intel 4004) |
| 1981 | IBM PC |
| 1983 | Internet (TCP/IP) |
| 1989 | WWW |
| 1991 | Linux |
| 1998 | Google |
| 2004 | Facebook |
| 2007 | iPhone |

## 7. Last Minute Checklist
✅ All Full Forms
✅ Number System Conversions
✅ Logic Gate Truth Tables
✅ Computer Generations
✅ Famous Personalities
✅ Important Dates
✅ NCTB ICT Syllabus Topics
    `
  }
];

import { extendedLearningGuide } from './learning-guide-extended';

// Combine all learning sections
export const allLearningSections = [...learningGuide, ...extendedLearningGuide];

export const getLearningSection = (id: string) => {
  return allLearningSections.find(section => section.id === id);
};
