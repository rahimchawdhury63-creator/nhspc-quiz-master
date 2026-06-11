// NHSPC Quiz Extended Learning Guide - 20,000+ Words Comprehensive Book
export interface ExtendedLearningSection {
  id: string;
  titleBn: string;
  titleEn: string;
  contentBn: string;
  contentEn: string;
}

export const extendedLearningGuide: ExtendedLearningSection[] = [
  {
    id: 'software-detailed',
    titleBn: 'সফটওয়্যার বিস্তারিত',
    titleEn: 'Software Detailed',
    contentBn: `
# সফটওয়্যার - বিস্তারিত গাইড

## ১. সফটওয়্যার কী?
সফটওয়্যার হলো কম্পিউটারের প্রোগ্রাম বা নির্দেশনার সমষ্টি যা হার্ডওয়্যারকে কাজ করতে সাহায্য করে। সফটওয়্যার ছাড়া হার্ডওয়্যার অকেজো।

## ২. সফটওয়্যারের প্রকারভেদ

### ক. সিস্টেম সফটওয়্যার
সিস্টেম সফটওয়্যার কম্পিউটারের মূল কার্যক্রম পরিচালনা করে। এটি হার্ডওয়্যার ও ইউজারের মধ্যে সেতুবন্ধন তৈরি করে।

**অপারেটিং সিস্টেম (OS):**
- Windows: Microsoft এর তৈরি, সবচেয়ে জনপ্রিয় ডেস্কটপ OS
- macOS: Apple এর তৈরি, Mac কম্পিউটারে ব্যবহৃত
- Linux: ওপেন সোর্স, সার্ভার ও ডেভেলপারদের জন্য জনপ্রিয়
- Android: Google এর তৈরি, মোবাইল OS
- iOS: Apple এর মোবাইল OS

**ডিভাইস ড্রাইভার:**
প্রতিটি হার্ডওয়্যারের জন্য নির্দিষ্ট ড্রাইভার প্রয়োজন। যেমন:
- গ্রাফিক্স ড্রাইভার (NVIDIA, AMD)
- সাউন্ড ড্রাইভার
- প্রিন্টার ড্রাইভার
- নেটওয়ার্ক ড্রাইভার

### খ. অ্যাপ্লিকেশন সফটওয়্যার
ব্যবহারকারীর নির্দিষ্ট কাজের জন্য তৈরি সফটওয়্যার।

**অফিস সফটওয়্যার:**
- Microsoft Office (Word, Excel, PowerPoint)
- Google Workspace (Docs, Sheets, Slides)
- LibreOffice (ফ্রি ও ওপেন সোর্স)

**ব্রাউজার:**
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

**মিডিয়া প্লেয়ার:**
- VLC Media Player
- Windows Media Player
- iTunes

### গ. ইউটিলিটি সফটওয়্যার
সিস্টেম রক্ষণাবেক্ষণ ও পারফরম্যান্স বাড়ানোর জন্য।

- অ্যান্টিভাইরাস (Kaspersky, Norton, Avast)
- ডিস্ক ক্লিনার (CCleaner)
- ফাইল কম্প্রেসর (WinRAR, 7-Zip)
- ব্যাকআপ সফটওয়্যার

## ৩. সফটওয়্যার লাইসেন্স

**প্রোপ্রাইটরি সফটওয়্যার:**
- পেইড, সোর্স কোড গোপন
- উদাহরণ: Microsoft Office, Adobe Photoshop

**ওপেন সোর্স সফটওয়্যার:**
- ফ্রি, সোর্স কোড উন্মুক্ত
- উদাহরণ: Linux, LibreOffice, GIMP

**ফ্রিওয়্যার:**
- বিনামূল্যে ব্যবহার, কিন্তু সোর্স কোড গোপন
- উদাহরণ: Adobe Reader, Skype

**শেয়ারওয়্যার:**
- ট্রায়াল পিরিয়ড ফ্রি, পরে পেইড
- উদাহরণ: WinRAR

## ৪. সফটওয়্যার ডেভেলপমেন্ট লাইফসাইকেল (SDLC)

১. **রিকোয়ারমেন্ট অ্যানালাইসিস**: কী তৈরি করতে হবে
২. **ডিজাইন**: কীভাবে তৈরি হবে
৩. **ইমপ্লিমেন্টেশন**: কোডিং
৪. **টেস্টিং**: বাগ খুঁজে বের করা
৫. **ডিপ্লয়মেন্ট**: ব্যবহারকারীর কাছে পৌঁছানো
৬. **মেইনটেনেন্স**: আপডেট ও ফিক্স

## ৫. গুরুত্বপূর্ণ তথ্য
- প্রথম OS: GM-NAA I/O (1956)
- সবচেয়ে জনপ্রিয় ডেস্কটপ OS: Windows
- সবচেয়ে জনপ্রিয় মোবাইল OS: Android
- Linux কার্নেল তৈরি: Linus Torvalds (1991)
    `,
    contentEn: `
# Software - Detailed Guide

## 1. What is Software?
Software is a collection of programs or instructions that help hardware function. Hardware is useless without software.

## 2. Types of Software

### a. System Software
System software manages the computer's core operations. It creates a bridge between hardware and user.

**Operating System (OS):**
- Windows: Made by Microsoft, most popular desktop OS
- macOS: Made by Apple, used in Mac computers
- Linux: Open source, popular for servers and developers
- Android: Made by Google, mobile OS
- iOS: Apple's mobile OS

**Device Drivers:**
Specific drivers are needed for each hardware. Such as:
- Graphics drivers (NVIDIA, AMD)
- Sound drivers
- Printer drivers
- Network drivers

### b. Application Software
Software created for specific user tasks.

**Office Software:**
- Microsoft Office (Word, Excel, PowerPoint)
- Google Workspace (Docs, Sheets, Slides)
- LibreOffice (Free and open source)

**Browsers:**
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

**Media Players:**
- VLC Media Player
- Windows Media Player
- iTunes

### c. Utility Software
For system maintenance and performance improvement.

- Antivirus (Kaspersky, Norton, Avast)
- Disk Cleaner (CCleaner)
- File Compressor (WinRAR, 7-Zip)
- Backup Software

## 3. Software Licensing

**Proprietary Software:**
- Paid, source code hidden
- Example: Microsoft Office, Adobe Photoshop

**Open Source Software:**
- Free, source code open
- Example: Linux, LibreOffice, GIMP

**Freeware:**
- Free to use, but source code hidden
- Example: Adobe Reader, Skype

**Shareware:**
- Trial period free, then paid
- Example: WinRAR

## 4. Software Development Life Cycle (SDLC)

1. **Requirement Analysis**: What to build
2. **Design**: How to build
3. **Implementation**: Coding
4. **Testing**: Finding bugs
5. **Deployment**: Reaching users
6. **Maintenance**: Updates and fixes

## 5. Important Facts
- First OS: GM-NAA I/O (1956)
- Most popular desktop OS: Windows
- Most popular mobile OS: Android
- Linux kernel created: Linus Torvalds (1991)
    `
  },
  {
    id: 'networking-detailed',
    titleBn: 'নেটওয়ার্কিং বিস্তারিত',
    titleEn: 'Networking Detailed',
    contentBn: `
# নেটওয়ার্কিং - সম্পূর্ণ গাইড

## ১. নেটওয়ার্ক কী?
দুই বা ততোধিক কম্পিউটার যখন একসাথে সংযুক্ত থাকে এবং ডেটা শেয়ার করতে পারে, তখন তাকে নেটওয়ার্ক বলে।

## ২. নেটওয়ার্কের প্রকারভেদ

### ক. PAN (Personal Area Network)
- ব্যক্তিগত ডিভাইসের নেটওয়ার্ক
- রেঞ্জ: ১০ মিটার
- উদাহরণ: Bluetooth, USB

### খ. LAN (Local Area Network)
- একটি বিল্ডিং বা ক্যাম্পাসে
- রেঞ্জ: ১ কি.মি. পর্যন্ত
- হাই স্পিড, কম খরচ
- উদাহরণ: অফিস নেটওয়ার্ক, স্কুল ল্যাব

### গ. MAN (Metropolitan Area Network)
- একটি শহরে
- রেঞ্জ: ১০০ কি.মি. পর্যন্ত
- একাধিক LAN সংযুক্ত
- উদাহরণ: ক্যাবল টিভি নেটওয়ার্ক

### ঘ. WAN (Wide Area Network)
- দেশ বা মহাদেশ জুড়ে
- সবচেয়ে বড় নেটওয়ার্ক
- উদাহরণ: ইন্টারনেট

## ৩. নেটওয়ার্ক টোপোলজি

### ক. বাস টোপোলজি (Bus Topology)
- সব ডিভাইস একটি ক্যাবলে সংযুক্ত
- সুবিধা: সহজ, কম খরচ
- অসুবিধা: ক্যাবল নষ্ট হলে পুরো নেটওয়ার্ক বন্ধ

### খ. স্টার টোপোলজি (Star Topology)
- সব ডিভাইস কেন্দ্রীয় হাব/সুইচে সংযুক্ত
- সবচেয়ে জনপ্রিয়
- সুবিধা: এক ডিভাইস নষ্ট হলে অন্যগুলো চলবে
- অসুবিধা: হাব নষ্ট হলে পুরো নেটওয়ার্ক বন্ধ

### গ. রিং টোপোলজি (Ring Topology)
- ডিভাইসগুলো বৃত্তাকারে সংযুক্ত
- ডেটা একদিকে প্রবাহিত হয়
- সুবিধা: সমান অ্যাক্সেস
- অসুবিধা: এক ডিভাইস নষ্ট হলে সমস্যা

### ঘ. মেশ টোপোলজি (Mesh Topology)
- প্রতিটি ডিভাইস অন্য সবার সাথে সংযুক্ত
- সবচেয়ে নির্ভরযোগ্য
- সুবিধা: কোনো একটি লিংক নষ্ট হলেও চলবে
- অসুবিধা: খরচ বেশি

## ৪. নেটওয়ার্ক ডিভাইস

### হাব (Hub)
- সব পোর্টে ডেটা ব্রডকাস্ট করে
- "বোবা" ডিভাইস, কম বুদ্ধিমান

### সুইচ (Switch)
- নির্দিষ্ট পোর্টে ডেটা পাঠায়
- MAC অ্যাড্রেস টেবিল ব্যবহার করে
- হাবের চেয়ে স্মার্ট

### রাউটার (Router)
- বিভিন্ন নেটওয়ার্কের মধ্যে ডেটা রাউট করে
- IP অ্যাড্রেস ব্যবহার করে
- ইন্টারনেট সংযোগে প্রয়োজন

### মডেম (Modem)
- Modulator-Demodulator
- এনালগ ↔ ডিজিটাল সিগন্যাল রূপান্তর

### গেটওয়ে (Gateway)
- বিভিন্ন প্রোটোকলের নেটওয়ার্ক সংযোগ করে

## ৫. OSI মডেল (৭ লেয়ার)

| লেয়ার | নাম | কাজ |
|--------|-----|-----|
| ৭ | Application | ইউজার ইন্টারফেস |
| ৬ | Presentation | ডেটা ফরম্যাটিং, এনক্রিপশন |
| ৫ | Session | সেশন ম্যানেজমেন্ট |
| ৪ | Transport | ডেটা ট্রান্সফার (TCP/UDP) |
| ৩ | Network | রাউটিং (IP) |
| ২ | Data Link | ফ্রেমিং (MAC) |
| ১ | Physical | বিট ট্রান্সমিশন |

**মনে রাখার কৌশল:**
- "All People Seem To Need Data Processing" (উপর থেকে)
- "Please Do Not Throw Sausage Pizza Away" (নিচ থেকে)

## ৬. TCP/IP মডেল (৪ লেয়ার)

| লেয়ার | কাজ |
|--------|-----|
| Application | HTTP, FTP, SMTP |
| Transport | TCP, UDP |
| Internet | IP, ICMP |
| Network Access | Ethernet, Wi-Fi |

## ৭. IP অ্যাড্রেস

### IPv4
- ৩২ বিট
- ৪টি অক্টেট (0-255)
- উদাহরণ: 192.168.1.1
- মোট: প্রায় ৪.৩ বিলিয়ন

### IPv6
- ১২৮ বিট
- ৮টি গ্রুপ (হেক্সাডেসিমাল)
- উদাহরণ: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

### IP ক্লাস
| ক্লাস | রেঞ্জ | ব্যবহার |
|-------|-------|---------|
| A | 1-126 | বড় নেটওয়ার্ক |
| B | 128-191 | মাঝারি নেটওয়ার্ক |
| C | 192-223 | ছোট নেটওয়ার্ক |
| D | 224-239 | মাল্টিকাস্ট |
| E | 240-255 | রিসার্চ |

### প্রাইভেট IP
- 10.0.0.0 - 10.255.255.255 (Class A)
- 172.16.0.0 - 172.31.255.255 (Class B)
- 192.168.0.0 - 192.168.255.255 (Class C)

## ৮. গুরুত্বপূর্ণ পোর্ট নম্বর
- HTTP: 80
- HTTPS: 443
- FTP: 21
- SSH: 22
- SMTP: 25
- DNS: 53
- DHCP: 67, 68
- Telnet: 23
    `,
    contentEn: `
# Networking - Complete Guide

## 1. What is Network?
When two or more computers are connected together and can share data, it is called a network.

## 2. Types of Networks

### a. PAN (Personal Area Network)
- Network of personal devices
- Range: 10 meters
- Example: Bluetooth, USB

### b. LAN (Local Area Network)
- Within a building or campus
- Range: Up to 1 km
- High speed, low cost
- Example: Office network, school lab

### c. MAN (Metropolitan Area Network)
- Within a city
- Range: Up to 100 km
- Multiple LANs connected
- Example: Cable TV network

### d. WAN (Wide Area Network)
- Across countries or continents
- Largest network
- Example: Internet

## 3. Network Topology

### a. Bus Topology
- All devices connected to single cable
- Advantage: Simple, low cost
- Disadvantage: If cable fails, entire network stops

### b. Star Topology
- All devices connected to central hub/switch
- Most popular
- Advantage: One device failure doesn't affect others
- Disadvantage: Hub failure stops entire network

### c. Ring Topology
- Devices connected in circular fashion
- Data flows in one direction
- Advantage: Equal access
- Disadvantage: One device failure causes problems

### d. Mesh Topology
- Each device connected to all others
- Most reliable
- Advantage: Works even if one link fails
- Disadvantage: High cost

## 4. Network Devices

### Hub
- Broadcasts data to all ports
- "Dumb" device, less intelligent

### Switch
- Sends data to specific port
- Uses MAC address table
- Smarter than hub

### Router
- Routes data between different networks
- Uses IP address
- Required for internet connection

### Modem
- Modulator-Demodulator
- Analog ↔ Digital signal conversion

### Gateway
- Connects networks with different protocols

## 5. OSI Model (7 Layers)

| Layer | Name | Function |
|-------|------|----------|
| 7 | Application | User interface |
| 6 | Presentation | Data formatting, encryption |
| 5 | Session | Session management |
| 4 | Transport | Data transfer (TCP/UDP) |
| 3 | Network | Routing (IP) |
| 2 | Data Link | Framing (MAC) |
| 1 | Physical | Bit transmission |

**Memory trick:**
- "All People Seem To Need Data Processing" (top down)
- "Please Do Not Throw Sausage Pizza Away" (bottom up)

## 6. TCP/IP Model (4 Layers)

| Layer | Function |
|-------|----------|
| Application | HTTP, FTP, SMTP |
| Transport | TCP, UDP |
| Internet | IP, ICMP |
| Network Access | Ethernet, Wi-Fi |

## 7. IP Address

### IPv4
- 32 bits
- 4 octets (0-255)
- Example: 192.168.1.1
- Total: About 4.3 billion

### IPv6
- 128 bits
- 8 groups (hexadecimal)
- Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

### IP Classes
| Class | Range | Usage |
|-------|-------|-------|
| A | 1-126 | Large networks |
| B | 128-191 | Medium networks |
| C | 192-223 | Small networks |
| D | 224-239 | Multicast |
| E | 240-255 | Research |

## 8. Important Port Numbers
- HTTP: 80
- HTTPS: 443
- FTP: 21
- SSH: 22
- SMTP: 25
- DNS: 53
- DHCP: 67, 68
- Telnet: 23
    `
  },
  {
    id: 'programming-detailed',
    titleBn: 'প্রোগ্রামিং বিস্তারিত',
    titleEn: 'Programming Detailed',
    contentBn: `
# প্রোগ্রামিং - সম্পূর্ণ গাইড

## ১. প্রোগ্রামিং কী?
প্রোগ্রামিং হলো কম্পিউটারকে নির্দেশনা দেওয়ার প্রক্রিয়া। প্রোগ্রামার কোড লেখেন, কম্পিউটার সেই কোড অনুযায়ী কাজ করে।

## ২. প্রোগ্রামিং ভাষার ইতিহাস

### প্রথম প্রজন্ম: মেশিন ল্যাঙ্গুয়েজ
- শুধু 0 এবং 1
- সরাসরি CPU বোঝে
- খুব কঠিন, ভুল হওয়ার সম্ভাবনা বেশি

### দ্বিতীয় প্রজন্ম: অ্যাসেম্বলি ল্যাঙ্গুয়েজ
- মেমোনিক কোড (ADD, MOV, SUB)
- Assembler দিয়ে মেশিন কোডে রূপান্তর
- মেশিন ল্যাঙ্গুয়েজের চেয়ে সহজ

### তৃতীয় প্রজন্ম: হাই-লেভেল ল্যাঙ্গুয়েজ
- মানুষের ভাষার কাছাকাছি
- FORTRAN, COBOL, C, Pascal
- কম্পাইলার/ইন্টারপ্রেটার প্রয়োজন

### চতুর্থ প্রজন্ম: ভেরি হাই-লেভেল
- ডাটাবেস ল্যাঙ্গুয়েজ (SQL)
- রিপোর্ট জেনারেটর
- কম কোডে বেশি কাজ

### পঞ্চম প্রজন্ম: AI ভাষা
- Prolog, LISP
- আর্টিফিশিয়াল ইন্টেলিজেন্স
- প্রবলেম সলভিং

## ৩. জনপ্রিয় প্রোগ্রামিং ভাষা

### C (১৯৭২)
**স্রষ্টা:** Dennis Ritchie
**বৈশিষ্ট্য:**
- সিস্টেম প্রোগ্রামিং
- পয়েন্টার ব্যবহার
- মেমরি ম্যানেজমেন্ট
- Unix, Linux, Windows কার্নেল

**উদাহরণ:**
\`\`\`c
#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}
\`\`\`

### C++ (১৯৮৩)
**স্রষ্টা:** Bjarne Stroustrup
**বৈশিষ্ট্য:**
- C এর এক্সটেনশন
- অবজেক্ট-ওরিয়েন্টেড
- গেম ডেভেলপমেন্ট
- সিস্টেম সফটওয়্যার

### Java (১৯৯৫)
**স্রষ্টা:** James Gosling (Sun Microsystems)
**বৈশিষ্ট্য:**
- "Write Once, Run Anywhere"
- JVM (Java Virtual Machine)
- Android ডেভেলপমেন্ট
- এন্টারপ্রাইজ সফটওয়্যার

**উদাহরণ:**
\`\`\`java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### Python (১৯৯১)
**স্রষ্টা:** Guido van Rossum
**বৈশিষ্ট্য:**
- সহজে শেখা যায়
- পড়তে সহজ
- ডেটা সায়েন্স, AI, ML
- ওয়েব ডেভেলপমেন্ট

**উদাহরণ:**
\`\`\`python
print("Hello, World!")
\`\`\`

### JavaScript (১৯৯৫)
**স্রষ্টা:** Brendan Eich
**বৈশিষ্ট্য:**
- ওয়েব ব্রাউজারের ভাষা
- ফ্রন্টএন্ড ও ব্যাকএন্ড (Node.js)
- ডায়নামিক ওয়েবসাইট

## ৪. প্রোগ্রামিং প্যারাডাইম

### প্রসিডিউরাল প্রোগ্রামিং
- ধাপে ধাপে নির্দেশনা
- ফাংশন ভিত্তিক
- C, Pascal

### অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP)
**চারটি মূল বৈশিষ্ট্য:**

**১. এনক্যাপসুলেশন:**
- ডেটা ও মেথড একসাথে
- ডেটা হাইডিং

**২. ইনহেরিট্যান্স:**
- প্যারেন্ট ক্লাস থেকে চাইল্ড ক্লাস
- কোড রিইউজ

**৩. পলিমরফিজম:**
- একই নামে ভিন্ন আচরণ
- মেথড ওভারলোডিং/ওভাররাইডিং

**৪. অ্যাবস্ট্রাকশন:**
- জটিলতা লুকানো
- ইন্টারফেস প্রদান

### ফাংশনাল প্রোগ্রামিং
- ফাংশন কেন্দ্রিক
- Immutable ডেটা
- Haskell, Scala, Lisp

## ৫. ডেটা টাইপ

### প্রিমিটিভ টাইপ
| টাইপ | সাইজ | বর্ণনা |
|------|------|--------|
| char | ১ বাইট | একটি অক্ষর |
| int | ৪ বাইট | পূর্ণ সংখ্যা |
| float | ৪ বাইট | দশমিক সংখ্যা |
| double | ৮ বাইট | বড় দশমিক |
| boolean | ১ বিট | সত্য/মিথ্যা |

### নন-প্রিমিটিভ টাইপ
- Array
- String
- Class
- Interface

## ৬. কন্ট্রোল স্ট্রাকচার

### সিদ্ধান্ত নেওয়া
\`\`\`
if (শর্ত) {
    // শর্ত সত্য হলে
} else {
    // শর্ত মিথ্যা হলে
}
\`\`\`

### লুপ
\`\`\`
for (int i = 0; i < 10; i++) {
    // ১০ বার চলবে
}

while (শর্ত) {
    // শর্ত সত্য থাকা পর্যন্ত
}
\`\`\`

## ৭. অ্যালগরিদম ও ফ্লোচার্ট

### অ্যালগরিদম উদাহরণ: দুটি সংখ্যার যোগ
১. শুরু
২. প্রথম সংখ্যা (a) নাও
৩. দ্বিতীয় সংখ্যা (b) নাও
৪. যোগফল (sum) = a + b
৫. sum প্রিন্ট করো
৬. শেষ

### ফ্লোচার্ট সিম্বল
- **ওভাল**: শুরু/শেষ
- **সমান্তরিক**: ইনপুট/আউটপুট
- **আয়তক্ষেত্র**: প্রসেস
- **রম্বস**: সিদ্ধান্ত
- **তীর**: প্রবাহ
    `,
    contentEn: `
# Programming - Complete Guide

## 1. What is Programming?
Programming is the process of giving instructions to a computer. Programmers write code, and the computer works according to that code.

## 2. History of Programming Languages

### First Generation: Machine Language
- Only 0 and 1
- CPU understands directly
- Very difficult, high chance of errors

### Second Generation: Assembly Language
- Mnemonic codes (ADD, MOV, SUB)
- Converted to machine code by Assembler
- Easier than machine language

### Third Generation: High-Level Language
- Close to human language
- FORTRAN, COBOL, C, Pascal
- Requires compiler/interpreter

### Fourth Generation: Very High-Level
- Database languages (SQL)
- Report generators
- More work with less code

### Fifth Generation: AI Languages
- Prolog, LISP
- Artificial Intelligence
- Problem solving

## 3. Popular Programming Languages

### C (1972)
**Creator:** Dennis Ritchie
**Features:**
- System programming
- Pointer usage
- Memory management
- Unix, Linux, Windows kernel

### C++ (1983)
**Creator:** Bjarne Stroustrup
**Features:**
- Extension of C
- Object-oriented
- Game development
- System software

### Java (1995)
**Creator:** James Gosling (Sun Microsystems)
**Features:**
- "Write Once, Run Anywhere"
- JVM (Java Virtual Machine)
- Android development
- Enterprise software

### Python (1991)
**Creator:** Guido van Rossum
**Features:**
- Easy to learn
- Easy to read
- Data Science, AI, ML
- Web development

### JavaScript (1995)
**Creator:** Brendan Eich
**Features:**
- Web browser language
- Frontend and Backend (Node.js)
- Dynamic websites

## 4. Programming Paradigms

### Procedural Programming
- Step by step instructions
- Function based
- C, Pascal

### Object-Oriented Programming (OOP)
**Four Main Features:**

**1. Encapsulation:**
- Data and methods together
- Data hiding

**2. Inheritance:**
- Child class from parent class
- Code reuse

**3. Polymorphism:**
- Different behavior with same name
- Method overloading/overriding

**4. Abstraction:**
- Hiding complexity
- Providing interface

### Functional Programming
- Function centric
- Immutable data
- Haskell, Scala, Lisp

## 5. Data Types

### Primitive Types
| Type | Size | Description |
|------|------|-------------|
| char | 1 byte | Single character |
| int | 4 bytes | Integer |
| float | 4 bytes | Decimal number |
| double | 8 bytes | Large decimal |
| boolean | 1 bit | True/False |

### Non-Primitive Types
- Array
- String
- Class
- Interface

## 6. Control Structures

### Decision Making
\`\`\`
if (condition) {
    // if condition is true
} else {
    // if condition is false
}
\`\`\`

### Loops
\`\`\`
for (int i = 0; i < 10; i++) {
    // runs 10 times
}

while (condition) {
    // while condition is true
}
\`\`\`

## 7. Algorithm & Flowchart

### Algorithm Example: Adding Two Numbers
1. Start
2. Take first number (a)
3. Take second number (b)
4. Sum = a + b
5. Print sum
6. End

### Flowchart Symbols
- **Oval**: Start/End
- **Parallelogram**: Input/Output
- **Rectangle**: Process
- **Diamond**: Decision
- **Arrow**: Flow
    `
  },
  {
    id: 'cybersecurity-detailed',
    titleBn: 'সাইবার সিকিউরিটি বিস্তারিত',
    titleEn: 'Cybersecurity Detailed',
    contentBn: `
# সাইবার সিকিউরিটি - সম্পূর্ণ গাইড

## ১. সাইবার সিকিউরিটি কী?
সাইবার সিকিউরিটি হলো কম্পিউটার সিস্টেম, নেটওয়ার্ক এবং ডেটাকে ডিজিটাল আক্রমণ থেকে রক্ষা করার প্রক্রিয়া।

## ২. সাইবার থ্রেট (হুমকি)

### ম্যালওয়্যার (Malware)
"Malicious Software" এর সংক্ষিপ্ত রূপ।

**ভাইরাস (Virus):**
- নিজে থেকে ছড়ায় না
- হোস্ট প্রোগ্রাম দরকার
- ফাইল থেকে ফাইলে ছড়ায়

**ওয়ার্ম (Worm):**
- নিজে থেকে ছড়ায়
- নেটওয়ার্কে দ্রুত ছড়ায়
- হোস্ট প্রোগ্রাম দরকার নেই

**ট্রোজান হর্স (Trojan Horse):**
- বৈধ সফটওয়্যারের ছদ্মবেশে
- ব্যাকডোর তৈরি করে
- ডেটা চুরি করে

**র‍্যানসমওয়্যার (Ransomware):**
- ফাইল এনক্রিপ্ট করে
- মুক্তিপণ দাবি করে
- উদাহরণ: WannaCry, Petya

**স্পাইওয়্যার (Spyware):**
- গোপনে তথ্য সংগ্রহ করে
- ব্রাউজিং হিস্টরি, পাসওয়ার্ড চুরি

**অ্যাডওয়্যার (Adware):**
- অবাঞ্ছিত বিজ্ঞাপন দেখায়
- সাধারণত ক্ষতিকর নয়

**কী-লগার (Keylogger):**
- কীবোর্ড ইনপুট রেকর্ড করে
- পাসওয়ার্ড চুরি করতে ব্যবহৃত

### সোশ্যাল ইঞ্জিনিয়ারিং

**ফিশিং (Phishing):**
- ভুয়া ইমেইল/ওয়েবসাইট
- ব্যক্তিগত তথ্য চুরি
- ব্যাংক, সোশ্যাল মিডিয়া ভুয়া লিঙ্ক

**স্পিয়ার ফিশিং:**
- নির্দিষ্ট ব্যক্তিকে লক্ষ্য করে
- আরও বিশ্বাসযোগ্য

**ভিশিং (Vishing):**
- ফোনে ফিশিং
- Voice Phishing

**স্মিশিং (Smishing):**
- SMS এ ফিশিং

### নেটওয়ার্ক অ্যাটাক

**DDoS (Distributed Denial of Service):**
- অনেক সোর্স থেকে ট্রাফিক
- সার্ভার অকার্যকর করে

**Man-in-the-Middle (MITM):**
- দুই পক্ষের মধ্যে গোপনে ঢুকে
- ডেটা পড়া বা পরিবর্তন

**SQL Injection:**
- ডাটাবেসে ক্ষতিকর SQL কোড
- ডেটা চুরি বা ডিলিট

**XSS (Cross-Site Scripting):**
- ওয়েবসাইটে ক্ষতিকর স্ক্রিপ্ট
- ইউজার ডেটা চুরি

## ৩. সুরক্ষা ব্যবস্থা

### পাসওয়ার্ড সিকিউরিটি
**শক্তিশালী পাসওয়ার্ডের বৈশিষ্ট্য:**
- কমপক্ষে ১২ অক্ষর
- বড় হাতের ও ছোট হাতের অক্ষর
- সংখ্যা
- বিশেষ চিহ্ন (!@#$%^&*)
- ব্যক্তিগত তথ্য ব্যবহার না করা

### Two-Factor Authentication (2FA)
- প্রথম ফ্যাক্টর: পাসওয়ার্ড
- দ্বিতীয় ফ্যাক্টর: OTP, Authenticator App, Biometric

### এনক্রিপশন

**সিমেট্রিক এনক্রিপশন:**
- একই কী দিয়ে এনক্রিপ্ট ও ডিক্রিপ্ট
- দ্রুত
- উদাহরণ: AES, DES

**অ্যাসিমেট্রিক এনক্রিপশন:**
- পাবলিক কী দিয়ে এনক্রিপ্ট
- প্রাইভেট কী দিয়ে ডিক্রিপ্ট
- উদাহরণ: RSA

### ফায়ারওয়াল
- নেটওয়ার্ক ট্রাফিক ফিল্টার
- অননুমোদিত অ্যাক্সেস রোধ
- প্রকার: Hardware, Software, Cloud

### VPN (Virtual Private Network)
- এনক্রিপ্টেড টানেল
- IP অ্যাড্রেস লুকায়
- পাবলিক Wi-Fi এ নিরাপত্তা

### অ্যান্টিভাইরাস
- ম্যালওয়্যার সনাক্ত ও রিমুভ
- রিয়েল-টাইম প্রোটেকশন
- নিয়মিত আপডেট প্রয়োজন

## ৪. নিরাপদ ইন্টারনেট ব্যবহার

### করণীয়:
✅ HTTPS সাইট ব্যবহার
✅ আপডেটেড সফটওয়্যার
✅ শক্তিশালী পাসওয়ার্ড
✅ 2FA চালু রাখা
✅ সন্দেহজনক লিঙ্কে ক্লিক না করা
✅ ব্যাকআপ রাখা

### বর্জনীয়:
❌ অজানা লিঙ্কে ক্লিক
❌ সন্দেহজনক অ্যাটাচমেন্ট ওপেন
❌ পাবলিক Wi-Fi এ ব্যাংকিং
❌ একই পাসওয়ার্ড বারবার
❌ ব্যক্তিগত তথ্য শেয়ার

## ৫. বাংলাদেশে সাইবার আইন
- **ডিজিটাল সিকিউরিটি আইন ২০১৮**
- **আইসিটি আইন ২০০৬**
- সাইবার ক্রাইম শাস্তিযোগ্য অপরাধ
    `,
    contentEn: `
# Cybersecurity - Complete Guide

## 1. What is Cybersecurity?
Cybersecurity is the process of protecting computer systems, networks, and data from digital attacks.

## 2. Cyber Threats

### Malware
Short for "Malicious Software"

**Virus:**
- Doesn't spread on its own
- Needs host program
- Spreads from file to file

**Worm:**
- Spreads on its own
- Quickly spreads through network
- Doesn't need host program

**Trojan Horse:**
- Disguised as legitimate software
- Creates backdoors
- Steals data

**Ransomware:**
- Encrypts files
- Demands ransom
- Examples: WannaCry, Petya

**Spyware:**
- Secretly collects information
- Steals browsing history, passwords

**Adware:**
- Shows unwanted advertisements
- Usually not harmful

**Keylogger:**
- Records keyboard input
- Used to steal passwords

### Social Engineering

**Phishing:**
- Fake emails/websites
- Steals personal information
- Fake links to banks, social media

**Spear Phishing:**
- Targets specific person
- More convincing

**Vishing:**
- Phishing over phone
- Voice Phishing

**Smishing:**
- Phishing via SMS

### Network Attacks

**DDoS (Distributed Denial of Service):**
- Traffic from many sources
- Makes server unavailable

**Man-in-the-Middle (MITM):**
- Secretly enters between two parties
- Reads or modifies data

**SQL Injection:**
- Malicious SQL code in database
- Data theft or deletion

**XSS (Cross-Site Scripting):**
- Malicious scripts in websites
- Steals user data

## 3. Security Measures

### Password Security
**Strong Password Features:**
- At least 12 characters
- Upper and lowercase letters
- Numbers
- Special characters (!@#$%^&*)
- No personal information

### Two-Factor Authentication (2FA)
- First factor: Password
- Second factor: OTP, Authenticator App, Biometric

### Encryption

**Symmetric Encryption:**
- Same key for encrypt and decrypt
- Fast
- Examples: AES, DES

**Asymmetric Encryption:**
- Public key to encrypt
- Private key to decrypt
- Example: RSA

### Firewall
- Filters network traffic
- Prevents unauthorized access
- Types: Hardware, Software, Cloud

### VPN (Virtual Private Network)
- Encrypted tunnel
- Hides IP address
- Security on public Wi-Fi

### Antivirus
- Detects and removes malware
- Real-time protection
- Needs regular updates

## 4. Safe Internet Usage

### Do's:
✅ Use HTTPS sites
✅ Updated software
✅ Strong passwords
✅ Enable 2FA
✅ Don't click suspicious links
✅ Keep backups

### Don'ts:
❌ Click unknown links
❌ Open suspicious attachments
❌ Banking on public Wi-Fi
❌ Same password everywhere
❌ Share personal information

## 5. Cyber Laws in Bangladesh
- **Digital Security Act 2018**
- **ICT Act 2006**
- Cyber crime is punishable offense
    `
  },
  {
    id: 'database-detailed',
    titleBn: 'ডাটাবেস বিস্তারিত',
    titleEn: 'Database Detailed',
    contentBn: `
# ডাটাবেস - সম্পূর্ণ গাইড

## ১. ডাটাবেস কী?
ডাটাবেস হলো সুসংগঠিত ডেটার সংগ্রহ যা সহজে অ্যাক্সেস, ম্যানেজ এবং আপডেট করা যায়।

## ২. DBMS কী?
Database Management System - ডাটাবেস তৈরি, ম্যানেজ এবং ব্যবহার করার সফটওয়্যার।

**জনপ্রিয় DBMS:**
- MySQL (ওপেন সোর্স)
- PostgreSQL (ওপেন সোর্স)
- Oracle (কমার্শিয়াল)
- Microsoft SQL Server
- SQLite (লাইটওয়েট)
- MongoDB (NoSQL)

## ৩. ডাটাবেসের প্রকারভেদ

### Relational Database (RDBMS)
- টেবিল ভিত্তিক
- SQL ব্যবহার করে
- সম্পর্ক (Relationship) আছে
- উদাহরণ: MySQL, PostgreSQL

### NoSQL Database
- নন-রিলেশনাল
- ফ্লেক্সিবল স্কিমা
- প্রকার:
  - Document (MongoDB)
  - Key-Value (Redis)
  - Column (Cassandra)
  - Graph (Neo4j)

## ৪. ডাটাবেস টার্মিনোলজি

| টার্ম | বর্ণনা |
|-------|--------|
| Table | ডেটার সংগ্রহ |
| Row/Record/Tuple | একটি সম্পূর্ণ ডেটা এন্ট্রি |
| Column/Field/Attribute | ডেটার একটি বৈশিষ্ট্য |
| Primary Key | ইউনিক আইডেন্টিফায়ার |
| Foreign Key | অন্য টেবিলের রেফারেন্স |
| Index | দ্রুত সার্চের জন্য |
| Schema | ডাটাবেসের কাঠামো |

## ৫. SQL কমান্ড

### DDL (Data Definition Language)
ডাটাবেস কাঠামো তৈরি/পরিবর্তন

\`\`\`sql
-- টেবিল তৈরি
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    class VARCHAR(10)
);

-- টেবিল পরিবর্তন
ALTER TABLE students ADD email VARCHAR(100);

-- টেবিল ডিলিট
DROP TABLE students;
\`\`\`

### DML (Data Manipulation Language)
ডেটা যোগ/পরিবর্তন/মুছে ফেলা

\`\`\`sql
-- ডেটা যোগ
INSERT INTO students (id, name, age, class)
VALUES (1, 'Rahim', 15, 'Class 9');

-- ডেটা আপডেট
UPDATE students
SET age = 16
WHERE id = 1;

-- ডেটা ডিলিট
DELETE FROM students
WHERE id = 1;
\`\`\`

### DQL (Data Query Language)
ডেটা খোঁজা/পড়া

\`\`\`sql
-- সব ডেটা
SELECT * FROM students;

-- নির্দিষ্ট কলাম
SELECT name, age FROM students;

-- শর্ত সহ
SELECT * FROM students WHERE age > 14;

-- সর্ট করা
SELECT * FROM students ORDER BY name ASC;

-- গ্রুপ করা
SELECT class, COUNT(*) FROM students GROUP BY class;
\`\`\`

### DCL (Data Control Language)
অ্যাক্সেস কন্ট্রোল

\`\`\`sql
-- পারমিশন দেওয়া
GRANT SELECT ON students TO user1;

-- পারমিশন বাতিল
REVOKE SELECT ON students FROM user1;
\`\`\`

## ৬. JOIN অপারেশন

### INNER JOIN
- দুই টেবিলের ম্যাচিং রেকর্ড

### LEFT JOIN
- বাম টেবিলের সব + ম্যাচিং ডান

### RIGHT JOIN
- ডান টেবিলের সব + ম্যাচিং বাম

### FULL OUTER JOIN
- দুই টেবিলের সব রেকর্ড

## ৭. Normalization

### 1NF (First Normal Form)
- প্রতিটি সেলে একটি মান
- প্রাইমারি কী আছে

### 2NF (Second Normal Form)
- 1NF + সব নন-কী অ্যাট্রিবিউট প্রাইমারি কী-তে সম্পূর্ণ নির্ভরশীল

### 3NF (Third Normal Form)
- 2NF + কোনো transitive dependency নেই

## ৮. ACID Properties

| Property | বর্ণনা |
|----------|--------|
| Atomicity | সব হবে বা কিছুই না |
| Consistency | ডেটা সঠিক থাকবে |
| Isolation | Transaction আলাদা |
| Durability | পরিবর্তন স্থায়ী |
    `,
    contentEn: `
# Database - Complete Guide

## 1. What is Database?
A database is a organized collection of data that can be easily accessed, managed, and updated.

## 2. What is DBMS?
Database Management System - Software for creating, managing, and using databases.

**Popular DBMS:**
- MySQL (Open source)
- PostgreSQL (Open source)
- Oracle (Commercial)
- Microsoft SQL Server
- SQLite (Lightweight)
- MongoDB (NoSQL)

## 3. Types of Databases

### Relational Database (RDBMS)
- Table based
- Uses SQL
- Has relationships
- Examples: MySQL, PostgreSQL

### NoSQL Database
- Non-relational
- Flexible schema
- Types:
  - Document (MongoDB)
  - Key-Value (Redis)
  - Column (Cassandra)
  - Graph (Neo4j)

## 4. Database Terminology

| Term | Description |
|------|-------------|
| Table | Collection of data |
| Row/Record/Tuple | One complete data entry |
| Column/Field/Attribute | One characteristic of data |
| Primary Key | Unique identifier |
| Foreign Key | Reference to another table |
| Index | For fast searching |
| Schema | Database structure |

## 5. SQL Commands

### DDL (Data Definition Language)
Creating/modifying database structure

\`\`\`sql
-- Create table
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    class VARCHAR(10)
);

-- Modify table
ALTER TABLE students ADD email VARCHAR(100);

-- Delete table
DROP TABLE students;
\`\`\`

### DML (Data Manipulation Language)
Adding/modifying/deleting data

\`\`\`sql
-- Add data
INSERT INTO students (id, name, age, class)
VALUES (1, 'Rahim', 15, 'Class 9');

-- Update data
UPDATE students
SET age = 16
WHERE id = 1;

-- Delete data
DELETE FROM students
WHERE id = 1;
\`\`\`

### DQL (Data Query Language)
Searching/reading data

\`\`\`sql
-- All data
SELECT * FROM students;

-- Specific columns
SELECT name, age FROM students;

-- With condition
SELECT * FROM students WHERE age > 14;

-- Sorting
SELECT * FROM students ORDER BY name ASC;

-- Grouping
SELECT class, COUNT(*) FROM students GROUP BY class;
\`\`\`

## 6. JOIN Operations

### INNER JOIN
- Matching records from both tables

### LEFT JOIN
- All from left + matching from right

### RIGHT JOIN
- All from right + matching from left

### FULL OUTER JOIN
- All records from both tables

## 7. Normalization

### 1NF (First Normal Form)
- Single value in each cell
- Has primary key

### 2NF (Second Normal Form)
- 1NF + all non-key attributes fully dependent on primary key

### 3NF (Third Normal Form)
- 2NF + no transitive dependency

## 8. ACID Properties

| Property | Description |
|----------|-------------|
| Atomicity | All or nothing |
| Consistency | Data remains valid |
| Isolation | Transactions are separate |
| Durability | Changes are permanent |
    `
  },
  {
    id: 'ict-bangladesh',
    titleBn: 'বাংলাদেশে ICT',
    titleEn: 'ICT in Bangladesh',
    contentBn: `
# বাংলাদেশে তথ্যপ্রযুক্তি - সম্পূর্ণ গাইড

## ১. ডিজিটাল বাংলাদেশ

### ভিশন ২০২১
- ২০০৯ সালে ঘোষণা
- ডিজিটাল সেবা সম্প্রসারণ
- ই-গভর্নেন্স চালু
- তথ্যপ্রযুক্তি শিক্ষা

### স্মার্ট বাংলাদেশ ভিশন ২০৪১
**চারটি স্তম্ভ:**
১. স্মার্ট সিটিজেন
২. স্মার্ট গভর্নমেন্ট
৩. স্মার্ট ইকোনমি
৪. স্মার্ট সোসাইটি

## ২. সরকারি ডিজিটাল সেবা

### জাতীয় পোর্টাল
- www.bangladesh.gov.bd
- সব সরকারি সেবা এক জায়গায়

### ই-সার্ভিস
- **ই-পাসপোর্ট**: মাইক্রোচিপযুক্ত
- **ই-টিন**: অনলাইন ট্যাক্স রেজিস্ট্রেশন
- **ই-জন্ম নিবন্ধন**: অনলাইন জন্ম সনদ
- **ই-মিউটেশন**: ভূমি হস্তান্তর

### ইউনিয়ন ডিজিটাল সেন্টার (UDC)
- গ্রামীণ এলাকায় ডিজিটাল সেবা
- প্রতিটি ইউনিয়নে
- ৫,০০০+ সেন্টার

### a2i (Access to Information)
- সরকারি-বেসরকারি অংশীদারিত্ব
- ডিজিটাল সেবা উদ্ভাবন

## ৩. মোবাইল ফাইন্যান্সিয়াল সার্ভিস (MFS)

### বিকাশ (bKash)
- ২০১১ সালে চালু
- সবচেয়ে বড় MFS
- ৬+ কোটি ব্যবহারকারী

### অন্যান্য
- নগদ (Nagad)
- রকেট (Rocket)
- উপায় (Upay)

### সেবাসমূহ:
- সেন্ড মানি
- ক্যাশ আউট
- মোবাইল রিচার্জ
- বিল পেমেন্ট
- অনলাইন শপিং

## ৪. ফ্রিল্যান্সিং ও আউটসোর্সিং

### বাংলাদেশের অবস্থান
- বিশ্বের ২য় বৃহত্তম ফ্রিল্যান্সার দেশ
- ৬.৫+ লক্ষ ফ্রিল্যান্সার
- $১০০+ মিলিয়ন আয় বার্ষিক

### জনপ্রিয় কাজ:
- ওয়েব ডেভেলপমেন্ট
- গ্রাফিক ডিজাইন
- ডিজিটাল মার্কেটিং
- কন্টেন্ট রাইটিং
- ডেটা এন্ট্রি

### প্ল্যাটফর্ম:
- Upwork
- Fiverr
- Freelancer.com

## ৫. স্টার্টআপ ইকোসিস্টেম

### সফল স্টার্টআপ:
- **Pathao**: রাইড শেয়ারিং, ডেলিভারি
- **Chaldal**: অনলাইন গ্রোসারি
- **Sheba.xyz**: সার্ভিস মার্কেটপ্লেস
- **10 Minute School**: এডটেক

### সরকারি সহায়তা:
- স্টার্টআপ বাংলাদেশ
- ICT ডিভিশন গ্রান্ট
- Hi-Tech Park

## ৬. শিক্ষায় ICT

### মাল্টিমিডিয়া ক্লাসরুম
- ২৫,০০০+ স্কুলে
- প্রজেক্টর, ল্যাপটপ, ইন্টারনেট

### অনলাইন প্ল্যাটফর্ম:
- **মুক্তপাঠ**: সরকারি ই-লার্নিং
- **শিক্ষক বাতায়ন**: শিক্ষকদের প্ল্যাটফর্ম
- **কিশোর বাতায়ন**: শিক্ষার্থীদের জন্য

### ICT বিষয় হিসেবে
- ৬ষ্ঠ শ্রেণি থেকে বাধ্যতামূলক
- HSC তে ১০০ নম্বরের বিষয়

## ৭. টেলিকমিউনিকেশন

### মোবাইল অপারেটর:
- Grameenphone (GP)
- Robi
- Banglalink
- Teletalk (সরকারি)

### ইন্টারনেট:
- মোবাইল: 4G LTE (5G আসছে)
- ব্রডব্যান্ড: FTTH (Fiber to the Home)
- সাবমেরিন ক্যাবল: SEA-ME-WE 4, 5, 6

## ৮. সাইবার আইন

### ডিজিটাল সিকিউরিটি আইন ২০১৮
- সাইবার ক্রাইম দমন
- ডিজিটাল কন্টেন্ট নিয়ন্ত্রণ
- শাস্তির বিধান

### ICT আইন ২০০৬
- তথ্যপ্রযুক্তি অপরাধ
- ইলেকট্রনিক লেনদেন

## ৯. ভবিষ্যৎ পরিকল্পনা

### হাই-টেক পার্ক
- কালিয়াকৈর হাই-টেক পার্ক
- যশোর সফটওয়্যার পার্ক
- ১০০+ IT কোম্পানি

### 5G নেটওয়ার্ক
- ২০২৬ এর মধ্যে চালু
- উচ্চ গতির ইন্টারনেট
- IoT সম্প্রসারণ

### AI ও ডেটা সেন্টার
- জাতীয় ডেটা সেন্টার
- AI পলিসি প্রণয়ন
    `,
    contentEn: `
# ICT in Bangladesh - Complete Guide

## 1. Digital Bangladesh

### Vision 2021
- Announced in 2009
- Expansion of digital services
- Launch of e-governance
- ICT education

### Smart Bangladesh Vision 2041
**Four Pillars:**
1. Smart Citizen
2. Smart Government
3. Smart Economy
4. Smart Society

## 2. Government Digital Services

### National Portal
- www.bangladesh.gov.bd
- All government services in one place

### e-Services
- **e-Passport**: With microchip
- **e-TIN**: Online tax registration
- **e-Birth Registration**: Online birth certificate
- **e-Mutation**: Land transfer

### Union Digital Center (UDC)
- Digital services in rural areas
- In every union
- 5,000+ centers

### a2i (Access to Information)
- Public-private partnership
- Digital service innovation

## 3. Mobile Financial Services (MFS)

### bKash
- Launched in 2011
- Largest MFS
- 60+ million users

### Others
- Nagad
- Rocket
- Upay

### Services:
- Send Money
- Cash Out
- Mobile Recharge
- Bill Payment
- Online Shopping

## 4. Freelancing & Outsourcing

### Bangladesh's Position
- 2nd largest freelancing country
- 6.5+ lakh freelancers
- $100+ million annual income

### Popular Work:
- Web Development
- Graphic Design
- Digital Marketing
- Content Writing
- Data Entry

### Platforms:
- Upwork
- Fiverr
- Freelancer.com

## 5. Startup Ecosystem

### Successful Startups:
- **Pathao**: Ride sharing, delivery
- **Chaldal**: Online grocery
- **Sheba.xyz**: Service marketplace
- **10 Minute School**: EdTech

### Government Support:
- Startup Bangladesh
- ICT Division Grant
- Hi-Tech Park

## 6. ICT in Education

### Multimedia Classroom
- In 25,000+ schools
- Projector, laptop, internet

### Online Platforms:
- **Muktopaath**: Government e-learning
- **Teachers' Portal**: For teachers
- **Kishore Batayan**: For students

### ICT as Subject
- Mandatory from class 6
- 100 marks subject in HSC

## 7. Telecommunications

### Mobile Operators:
- Grameenphone (GP)
- Robi
- Banglalink
- Teletalk (Government)

### Internet:
- Mobile: 4G LTE (5G coming)
- Broadband: FTTH (Fiber to the Home)
- Submarine cable: SEA-ME-WE 4, 5, 6

## 8. Cyber Laws

### Digital Security Act 2018
- Cyber crime prevention
- Digital content control
- Punishment provisions

### ICT Act 2006
- IT crimes
- Electronic transactions

## 9. Future Plans

### Hi-Tech Parks
- Kaliakair Hi-Tech Park
- Jessore Software Park
- 100+ IT companies

### 5G Network
- Launch by 2026
- High-speed internet
- IoT expansion

### AI & Data Center
- National Data Center
- AI policy formulation
    `
  }
];
