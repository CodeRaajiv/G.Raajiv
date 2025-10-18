// data.js
import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import ECommerce from "../assets/E-Commerce.png";
import Greenden from "../assets/Greenden.png";
import HotelBooking from "../assets/HotelBooking.png";
import MovieApp from "../assets/MovieApp.png";
import Nostra from "../assets/Nostra.png";
import Udemy from "../assets/Udemy.png";

// ===== SKILLS =====
export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "HTML", level: 95, color: "bg-orange-600" },
      { name: "Tailwind CSS", level: 90, color: "bg-sky-500" },
      { name: "JavaScript", level: 80, color: "bg-yellow-500" },
      { name: "React", level: 92, color: "bg-cyan-500" },
      { name: "Redux", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "REST APIs", level: 85, color: "bg-black" },
      { name: "Firebase", level: 80, color: "bg-yellow-600" },
      { name: "JWT Auth", level: 92, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "Mongoose", level: 85, color: "bg-blue-700" },
      { name: "Firebase", level: 78, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps & AI Tools",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Router", level: 62, color: "bg-green-500" },
      { name: "Vercel", level: 90, color: "bg-gray-500"},
      { name: "Git", level: 95, color: "bg-gray-700" },
      { name: "GitHub", level: 75, color: "bg-gray-900" },
      { name: "ChatGPT", level: 90, color: "bg-black" },
      { name: "Claude AI", level: 75, color: "bg-orange-500" },
    ],
  },
];

// ===== TECH STACK =====
export const TECH_STACK = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Git",
  "Generative AI Tools",
  "ChatGPT",
  "Claude AI",
  "Vercel",
  "Router",
  "GitHub"
];

// ===== STATS =====
export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "4 Month+", label: "Hands on Experience" },
  { number: "10+", label: "Technologies Learned" },
  { number: "100%", label: "Built Modern UI" },
];

// ===== PROJECTS =====
export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce site with filtering, payments, admin panel, and MongoDB integration.",
    image: ECommerce,
    tags: ["Tailwind CSS", "React", "Redux", "MongoDB"],
    liveUrl: "https://e-commerce-ecru-one-22.vercel.app",
    githubUrl: "https://github.com/CodeRaajiv/Raajiv",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Hotel Booking App",
    description:
      "Hotel booking app with search filters, room selection, and reservation management.",
    image: HotelBooking,
    tags: ["Tailwind CSS","React"],
    liveUrl: "https://hotel-booking-react-liard.vercel.app",
    githubUrl: "https://github.com/CodeRaajiv/HotelBooking-React",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "Movie discovery app using React and OMDb API for real-time data.",
    image: MovieApp,
    tags: ["React", "Tailwind CSS", "OMDb API"],
    liveUrl: "https://movie-web-react-drab.vercel.app",
    githubUrl: "https://github.com/CodeRaajiv/HotelBooking-React",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Greenden Plant Store",
    description: "Plant store landing page built with HTML, CSS, and JS.",
    image: Greenden,
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://coderaajiv.github.io/Greenden-project",
    githubUrl: "https://github.com/CodeRaajiv/Greenden-project",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Nostra",
    description: "Responsive e-commerce site built using vanilla JS and Tailwind CSS.",
    image: Nostra,
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://coderaajiv.github.io/Nostra-project",
    githubUrl: "https://github.com/CodeRaajiv/Nostra-project",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Udemy Clone",
    description: "Clone of Udemy website with responsive UI.",
    image: Udemy,
    tags: ["HTML", "CSS"],
    liveUrl: "https://coderaajiv.github.io/UdemyProject-clone",
    githubUrl: "https://github.com/CodeRaajiv/UdemyProject-clone",
    category: "Frontend",
  },
];

// ===== JOURNEY =====
export const JOURNEY_STEPS = [
  {
    year: "2025",
    title: "Started Coding Journey",
    company: "Error Makes Clear Course Student",
    description:
      "Completed 5-month full-stack development program, mastering MERN stack technologies.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2025",
    title: "Trainee",
    company: "Error Makes Clever",
    description: "Built multiple full-stack web applications during intensive training.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022-2025",
    title: "B.Com-CA",
    company: "CPA College, Madurai Kamarajar University",
    description:
      "Bachelor's in Commerce and Computer Applications, learning programming, databases, and software development.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2021-2022",
    title: "12th Grade - Commerce",
    company: "Z.K.M. Higher Secondary School",
    description:
      "Completed higher secondary education, building foundation in business and programming basics.",
    icon: BookOpen,
    color: "bg-orange-500",
  },
];

// ===== PASSIONS =====
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Completed 30-day JavaScript challenge on LeetCode",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

// ===== SOCIAL LINKS =====
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/CodeRaajiv",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/raajivg",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/its_me_raajiv/",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:raajivraajiv417@gmail.com",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-500/10",
  },
];

// ===== CONTACT INFO =====
export const CONTACT_INFO = [
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Mail, label: "Email", value: "raajivraajiv417@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6369902076" },
];
