// src/constants/index.js

// 1. Import your images
import ecoalityImg1 from '../assets/ecoality1.png'; 
import ecoalityImg2 from '../assets/ecoality2.png'; 
import ecoalityImg3 from '../assets/ecoality3.png'; 

import closedopenImg1 from '../assets/closedopen1.png';
import closedopenImg2 from '../assets/closedopen2.png';
import closedopenImg3 from '../assets/closedopen3.png';

export const SCHOOLS = [
  { 
    name: "Technological University of the Philippines", 
    period: "2023-Present", 
    loc: "Ermita, Manila", 
    degree: "Bachelor of Science in Information Technology" 
  },
  { 
    name: "St. Mary Magdalene School", 
    period: "2021-2023", 
    loc: "Kawit, Cavite", 
    degree: "Senior High School" 
  },
  { 
    name: "General Emilio Aguinaldo National HS", 
    period: "2017-2021", 
    loc: "Imus, Cavite", 
    degree: "Junior High School" 
  }
];

export const PROJECTS = [
  {
    title: "ECOality", 
    role: "UI/UX Designer",
    images: [
      ecoalityImg1, 
      ecoalityImg2, 
      ecoalityImg3, 
    ], 
    desc: "An eco-centric app tracking carbon emissions and rewarding actions. Developed to support UN SDGs for Climate Action and Reduced Inequalities.", 
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://www.figma.com/proto/0XxYzftWdC86WcGl4fIVoZ/ECOality?node-id=16-63&starting-point-node-id=141%3A543&t=QkApSxORFn1VQNYg-1",
  },
  {
    title: "Closed; Open",
    role: "Worst Generation Team",
    images: [
      closedopenImg1,
      closedopenImg2,
      closedopenImg3
    ], 
    desc: "A collaborative visual novel focusing on choice-based gameplay and interactive storytelling created with Ren'Py.",
    tags: ["Ren'Py", "Storytelling", "Python"],
    link: "https://sirdroffilc.itch.io/closedopen"
  }
];

// --- AWARDS DATA (Sorted Latest -> Oldest) ---

export const VISIBLE_AWARDS = [
  "UI/UX Design Core Lead - GDG on Campus (2026)", 
  "2nd Placer - THE FORGE GAMEATHON 2026 (PUP)",
  "2nd Placer - UI/UX Hawk-a-thon 2025 (TUP-Manila)",
  "President's Lister - 2nd Year, 2nd Sem (S.Y. 2024-2025)",
  "Dean's Lister - 2nd Year, 1st Sem (S.Y. 2024-2025)",
  "President's Lister - 1st Year, 2nd Sem (S.Y. 2023-2024)",
  "President's Lister - 1st Year, 1st Sem (S.Y. 2023-2024)"
];

export const HIDDEN_AWARDS = [
  "Gold Awardee Intramural Chess - Grade 12 (2022-2023)",
  "Gold Academic Awardee - Grade 11-12 (2021-2023)",
  "With High Honors - Grade 9-10 (2019-2021)",
  "With Honors - Grade 7 (2017-2018)",
  "1st Honor - Grade 7 (2017-2018)",
  "4th Honor - Grade 6 (2016-2017)",
  "2nd Place Set B Chess - Grade 5 (2015-2016)",
  "6th Honor - Grade 5 (2015-2016)",
  "1st Honor - Grade 1-4 (2011-2015)"
];

export const TECHNICAL_SKILLS = [
  "UI/UX Designing", "Wireframing & Prototyping", "PHP", "MySQL", "GitHub", "XAMPP", "Visual Studio Code"
];

export const SOFT_SKILLS = [
  "Teamwork", "Collaboration", "Problem Solving", "Adaptability", "Communication", "Time Management"
];