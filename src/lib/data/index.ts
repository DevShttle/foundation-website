export interface Program {
  id: string;
  image: string;
  title: string;
  slug: string;
  summary: string;
  category: "Education" | "Mentorship" | "Skills" | "Community" | "Scholarships";
  status: "Active" | "Planned" | "Community Initiative";
  objective: string;
  whoItServes: string;
  locations: string[];
  outputs: { label: string; value: string }[];
  gallery: string[];
}

export const programs: Program[] = [
  {
    id: "p1",
    image: "/images/programmes/card-education.jpeg",
    title: "Islah Academy",
    slug: "education",
    summary:
      "A structured full-day learning environment providing education, guidance and Tarbiyah closer to home.",
    category: "Education",
    status: "Active",

    objective:
      "To provide students with an affordable and structured learning environment close to home, combining academic education, supervised self-study, regular monitoring, Tarbiyah, mentoring and guidance.",

    whoItServes:
      "School students from nearby village communities who need stronger academic support, regular study supervision, guidance and a better daily learning environment.",

    locations: [
      "Masum Complex, New Hat Laucha",
      "Bahadurganj, Kishanganj"
    ],

    outputs: [
      { label: "Current Students", value: "Around 45" },
      { label: "Teachers", value: "4" }
    ],

    gallery: [
      "/images/programmes/edu-gal-02.PNG",
      "/images/programmes/card-education.png",
      "/images/programmes/edu-gal-01.png",
      "/images/programmes/edu-gal-03.png"
    ]
  },

  {
    id: "p2",
    image: "/images/programmes/card-mentoring.png",
    title: "Student Mentorship Initiative",
    slug: "mentorship",

    summary:
      "Helping students learn from teachers, professionals and mentors beyond the classroom.",

    category: "Mentorship",
    status: "Active",

    objective:
      "To connect students with teachers, professionals, alumni and mentors who can guide them in academics, board-exam preparation, study habits, career awareness and personal development.",

    whoItServes:
      "School students who can benefit from academic guidance, career awareness, mentoring and exposure to wider educational opportunities.",

    locations: [
      "Islah Academy, Bahadurganj",
      "Online"
    ],

    outputs: [
      { label: "Mode", value: "Online & Offline" },
      { label: "Focus", value: "Student Guidance" }
    ],

    gallery: [
      "/images/programmes/card-mentoring.png",
      "/images/programmes/featured.jpeg",
      "/images/programmes/card-community.png"
    ]
  },

  {
    id: "p3",
    image: "/images/programmes/card-resources.jpeg",
    title: "Digital Literacy & Skills",
    slug: "skills",

    summary:
      "Gradually building practical skills that can support students in education and future opportunities.",

    category: "Skills",
    status: "Planned",

    objective:
      "To progressively introduce practical learning opportunities in areas such as basic computer skills, digital literacy, spoken English, communication, study skills and career awareness as suitable resources and mentors become available.",

    whoItServes:
      "Students and young people who can benefit from practical skills alongside their academic education.",

    locations: [
      "Planned through Islah Academy, Bahadurganj"
    ],

    outputs: [
      { label: "Current Status", value: "Planned" },
      { label: "Approach", value: "Skill Development" }
    ],

    gallery: [
      "/images/programmes/card-resources.jpeg",
      "/images/programmes/card-community.png",
      "/images/programmes/featured.jpeg"
    ]
  },

  {
    id: "p4",
    image: "/images/programmes/card-community.png",
    title: "Community Development",
    slug: "community",

    summary:
      "Encouraging community participation in education, student development and responsible service.",

    category: "Community",
    status: "Community Initiative",

    objective:
      "To involve parents, teachers, professionals, volunteers and well-wishers in creating a stronger educational environment for students and supporting meaningful community-based initiatives.",

    whoItServes:
      "Students, families and community members connected with Islah Foundation and its educational activities.",

    locations: [
      "Bahadurganj",
      "Kishanganj District"
    ],

    outputs: [
      { label: "Main Focus", value: "Education" },
      { label: "Approach", value: "Community Participation" }
    ],

    gallery: [
      "/images/programmes/card-community.png",
      "/images/programmes/featured.jpeg",
      "/images/programmes/card-mentoring.png"
    ]
  },

  {
    id: "p5",
    image: "/images/programmes/card-resources.jpeg",
    title: "Scholarships & Learning Resources",
    slug: "scholarships",

    summary:
      "Supporting students with learning resources and educational assistance according to need and available support.",

    category: "Scholarships",
    status: "Community Initiative",

    objective:
      "To help reduce financial barriers to education by supporting students with books, study materials, academic resources and other educational assistance where possible.",

    whoItServes:
      "Students who may need additional educational support because of financial or resource limitations.",

    locations: [
      "Kishanganj District"
    ],

    outputs: [
      { label: "Support Type", value: "Need-Based" },
      { label: "Focus", value: "Educational Resources" }
    ],

    gallery: [
      "/images/programmes/card-resources.jpeg",
      "/images/programmes/featured.jpeg",
      "/images/programmes/card-community.png"
    ]
  }
];

export interface ImpactStat {
  id: string;
  value: number;
  unit: string;
  description: string;
  isVisible: boolean;
}

export const impactStats: ImpactStat[] = [
  { id: "stat1", value: 60, unit: "+", description: "Students Supported", isVisible: true },
  { id: "stat2", value: 3000, unit: "+", description: "Learning Sessions Conducted", isVisible: true },
  { id: "stat3", value: 200, unit: "+", description: "Books Distributed", isVisible: true },
  { id: "stat4", value: 8, unit: "", description: "Active Volunteers", isVisible: true },
];

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: "b1",
    name: "Md. Niyaz Asghar",
    role: "Founder, Settlor, Managing Trustee & President",
    bio: "Driving the vision and strategic direction of Islah Foundation with a focus on educational equity and community empowerment.",
    image: "/images/team/trustee-1.png"
  },
  {
    id: "b2",
    name: "Md. Mashkoor Zaidi",
    role: "Secretary",
    bio: "Managing organizational operations, community outreach, and the daily administration of educational programs.",
    image: "/images/team/trustee-2.jpg"
  },
  {
    id: "b3",
    name: "Ms. Chameli Begum",
    role: "Treasurer",
    bio: "Ensuring transparent financial governance and responsible allocation of resources across all initiatives.",
    image: "/images/team/trustee-3.png"
  },
  {
    id: "b4",
    name: "Md. Asadulla Wakil",
    role: "Trustee",
    bio: "Providing guidance on educational standards and community relations.",
    image: "/images/team/trustee-5.jpg"
  },
  {
    id: "b5",
    name: "Karim Iqbal Saquib",
    role: "Trustee",
    bio: "Supporting youth mentorship and skills development programs.",
    image: "/images/team/trustee-5.png"
  }
];

export interface Story {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  image: string;
  context?: string;
  intervention?: string;
  outcome?: string;
}

export const stories: Story[] = [
  {
    id: "s1",
    title: "Building confidence through consistent mentoring",
    summary: "How weekly guidance helped a high school student discover their academic potential.",
    category: "Mentorship",
    date: "12 Oct 2025",
    slug: "building-confidence-mentoring",
    image: "/images/stories/story-1.png"
  },
  {
    id: "s2",
    title: "Building foundational skills for board exam success",
    summary: "Intensive classes to bridge learning gaps and prepare 9th and 10th graders for their upcoming board exams.",
    category: "Education Support",
    date: "04 Sep 2025",
    slug: "impact-learning-kits",
    image: "/images/stories/story-2.png",
    context: "Many students in the 8th and 9th grades were severely lagging behind, lacking basic reading and writing skills. Many had never taken professional classes or were unaware of the syllabus requirements from as early as 4th or 5th grade. Additionally, many struggled to speak proper Hindi, creating a significant barrier to their formal education.",
    intervention: "We enrolled these students in extra, intensive classes to bridge their learning gaps. Our approach focused on completing basic foundational concepts and providing them with a structured, supportive learning environment tailored to their specific needs.",
    outcome: "These students are now successfully studying in the 9th and 10th standards. Thanks to the supportive environment and intensive foundational work, they are now prepared to attempt their board exams this academic session."
  },
  {
    id: "s3",
    title: "First steps towards digital literacy",
    summary: "Introducing foundational computer skills to eager learners in our community pilot.",
    category: "Skills Development",
    date: "22 Aug 2025",
    slug: "digital-literacy-pilot",
    image: "/images/stories/story-3.jpg"
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Local Teacher",
    role: "Community Partner",
    quote: "The academic support has brought a noticeable difference in the students' enthusiasm. They feel supported and heard."
  },
  {
    id: "t2",
    name: "Parent of Student",
    role: "Chandergaon",
    quote: "Having mentors guide my child has given our whole family hope. We are seeing real progress."
  },
  {
    id: "t3",
    name: "Volunteer Educator",
    role: "Islah Foundation",
    quote: "Seeing the students build confidence week by week is incredibly rewarding. This is community-led change at its best."
  }
];

export interface Update {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  location: string;
  slug: string;
  image: string;
}

export const updates: Update[] = [
  {
    id: "u8",
    title: "Shifted to New Location",
    summary: "We successfully relocated to a new, expanded facility to better accommodate our growing student base.",
    category: "Notices",
    date: "15 Jul 2026",
    location: "Kishanganj",
    slug: "shifted-to-new-location",
    image: "/images/news/news-6.jpg"
  },
  {
    id: "u2",
    title: "Trust registration formally approved",
    summary: "Islah Foundation is now officially a registered public charitable trust.",
    category: "Notices",
    date: "14 Jul 2026",
    location: "Kishanganj",
    slug: "trust-registration-approved",
    image: "/images/news/news-5.png"
  },
  {
    id: "u7",
    title: "Second Foundation Day Celebration",
    summary: "Recognizing another year of impactful community service and honoring the continuous dedication of our volunteers.",
    category: "Events",
    date: "31 May 2026",
    location: "Chandergaon",
    slug: "foundation-day-2026",
    image: "/images/news/news-4.jpg"
  },
  {
    id: "u6",
    title: "Children's Day Celebration",
    summary: "A special event dedicated entirely to our students, celebrating their potential and creativity.",
    category: "Events",
    date: "14 Nov 2025",
    location: "Chandergaon",
    slug: "childrens-day-2025",
    image: "/images/news/news-3.png"
  },
  {
    id: "u5",
    title: "Foundation Day Celebration",
    summary: "Celebrating our progress after a year of operations, having expanded to support 50 students.",
    category: "Events",
    date: "04 Apr 2025",
    location: "Chandergaon",
    slug: "foundation-day-2025",
    image: "/images/news/news-2.png"
  },
  {
    id: "u4",
    title: "First Day of Islah Foundation",
    summary: "The initiative officially began with just 10 students, sparking a journey of community-led education.",
    category: "Events",
    date: "01 Jan 2024",
    location: "Chandergaon",
    slug: "first-day-islah",
    image: "/images/news/news-1.png"
  }
];
