export interface Program {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: "Education" | "Mentorship" | "Skills" | "Community";
  status: "Active" | "Planned" | "Community Initiative";
  objective: string;
  whoItServes: string;
  locations: string[];
  outputs: { label: string; value: string }[];
}

export const programs: Program[] = [
  {
    id: "p1",
    title: "Islah Learning Support Programme",
    slug: "education",
    summary: "Academic support and learning access shaped around local needs.",
    category: "Education",
    status: "Active",
    objective: "To reduce educational barriers by providing after-school academic support and essential learning resources to underserved students.",
    whoItServes: "Students from grades 5 to 10 in Kishanganj who lack access to quality supplementary education.",
    locations: ["Chandergaon", "Bahadurganj"],
    outputs: [
      { label: "Students Supported", value: "120+" },
      { label: "Learning Sessions", value: "450" }
    ]
  },
  {
    id: "p2",
    title: "Student Mentorship Initiative",
    slug: "mentorship",
    summary: "Patient guidance that helps young people build confidence and direction.",
    category: "Mentorship",
    status: "Active",
    objective: "To provide one-on-one and group mentoring for students navigating academic choices and personal development.",
    whoItServes: "High school students and recent graduates.",
    locations: ["Kishanganj District"],
    outputs: [
      { label: "Mentoring Hours", value: "300+" },
      { label: "Active Mentors", value: "15" }
    ]
  },
  {
    id: "p3",
    title: "Digital Literacy & Skills",
    slug: "skills",
    summary: "Practical digital and career-readiness foundations for a changing world.",
    category: "Skills",
    status: "Planned",
    objective: "To equip youth with foundational digital skills, computer literacy, and basic professional communication.",
    whoItServes: "Youth and young adults seeking employment or higher education.",
    locations: ["Planned for Bahadurganj"],
    outputs: []
  },
  {
    id: "p4",
    title: "Community Development",
    slug: "community",
    summary: "Community-led wellbeing, awareness and responsible service.",
    category: "Community",
    status: "Active",
    objective: "To foster community-led wellbeing, environmental awareness, and responsible service through collaborative initiatives.",
    whoItServes: "Local residents, families, and community members in Kishanganj.",
    locations: ["Kishanganj District"],
    outputs: [
      { label: "Community Events", value: "15+" },
      { label: "Families Engaged", value: "250+" }
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
  { id: "stat1", value: 120, unit: "+", description: "Students Supported", isVisible: true },
  { id: "stat2", value: 450, unit: "", description: "Learning Sessions Conducted", isVisible: true },
  { id: "stat3", value: 300, unit: "+", description: "Books & Kits Distributed", isVisible: true },
  { id: "stat4", value: 15, unit: "", description: "Active Volunteers", isVisible: true },
];

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: "b1",
    name: "Md. Niyaz Asghar",
    role: "Founder, Settlor, Managing Trustee & President",
    bio: "Driving the vision and strategic direction of Islah Foundation with a focus on educational equity and community empowerment."
  },
  {
    id: "b2",
    name: "Md. Mashkoor Zaidi",
    role: "Secretary",
    bio: "Managing organizational operations, community outreach, and the daily administration of educational programs."
  },
  {
    id: "b3",
    name: "Mrs. Chameli Begum",
    role: "Treasurer",
    bio: "Ensuring transparent financial governance and responsible allocation of resources across all initiatives."
  },
  {
    id: "b4",
    name: "Md. Asadulla Wakil",
    role: "Trustee",
    bio: "Providing guidance on educational standards and community relations."
  },
  {
    id: "b5",
    name: "Karim Iqbal Saquib",
    role: "Trustee",
    bio: "Supporting youth mentorship and skills development programs."
  }
];

export interface Story {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
}

export const stories: Story[] = [
  {
    id: "s1",
    title: "Building confidence through consistent mentoring",
    summary: "How weekly guidance helped a high school student discover their academic potential.",
    category: "Mentorship",
    date: "12 Oct 2025",
    slug: "building-confidence-mentoring"
  },
  {
    id: "s2",
    title: "The impact of essential learning kits",
    summary: "Distributing books and stationary to reduce the financial burden on families in Chandergaon.",
    category: "Education Support",
    date: "04 Sep 2025",
    slug: "impact-learning-kits"
  },
  {
    id: "s3",
    title: "First steps towards digital literacy",
    summary: "Introducing foundational computer skills to eager learners in our community pilot.",
    category: "Skills Development",
    date: "22 Aug 2025",
    slug: "digital-literacy-pilot"
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
