import waterworksHero from "@/assets/waterworks_kids.jpg.asset.json";
import xrSafetyHero from "@/assets/XR_Safety_2.jpg.asset.json";
import wellnessHero from "@/assets/lifespeak_2.jpg.asset.json";
import curriculumHero from "@/assets/immersive_1.jpg.asset.json";
import storylineHero from "@/assets/storyline_3.png.asset.json";

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  kicker: string;
  promise: string;
  learner: string;
  challenge: string;
  decisions: string[];
  built: string[];
  outcome: string;
  tools: string[];
  accent: "sky" | "coral" | "leaf" | "plum" | "sun";
  image: string;
  imageAlt: string;
  videos?: { title: string; youtubeId: string; poster: string }[];
  demos?: { title: string; purpose: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "water-works-for-kids",
    number: "01",
    title: "Water Works for Kids",
    shortTitle: "Water Works",
    kicker: "Micro-learning · Character-driven explanation",
    promise: "Dense water-treatment science, made clear without taking the science out.",
    learner: "Elementary and middle-school students on municipal water-treatment facility tours and outreach programs.",
    challenge: "Dense engineering material had to be simplified without losing scientific accuracy—for a young, restless audience.",
    decisions: ["Break the documentation into small learning segments.", "Turn invisible and technical processes into visual explanations.", "Create Dewey, a recurring animated guide who makes the journey coherent.", "Review every segment with facility experts."],
    built: ["4 educational videos", "20+ micro-learning clips", "Motion-graphic concept cards", "The Dewey character"],
    outcome: "The work demonstrates how animation, short-form learning, and character-driven storytelling can make public infrastructure understandable without removing the science.",
    tools: ["Instructional design", "Motion design", "Character animation", "SME review"],
    accent: "sky",
    image: waterworksHero.url,
    imageAlt: "Dewey the water drop teaching in a science lab",
  },
  {
    slug: "xr-safety-simulation",
    number: "02",
    title: "XR Safety Simulation",
    shortTitle: "XR Safety",
    kicker: "Experiential learning · Mixed reality",
    promise: "Facing convincing hazards before the risk is real.",
    learner: "New employees and trainees in oil and gas, manufacturing, and large industrial facilities.",
    challenge: "Conventional safety training depends on costly physical mockups and on-site supervision, yet workers can still feel unprepared when they first enter a real facility.",
    decisions: ["Choose experiential learning over lecture.", "Let trainees explore, identify hazards, and practise procedures in context.", "Ground realism in actual facility layouts and subject-matter-expert input.", "Build modular environments so scenarios can recombine."],
    built: ["Portable mixed-reality prototype in Unity / C#", "Meta Quest simulated facilities", "Hazard-identification and emergency-evacuation drills", "Interactive equipment, AI dialogue avatars, and spatial audio", "SketchUp and Blender assets"],
    outcome: "The prototype demonstrates how immersive training can reduce dependence on physical mockups and support off-site onboarding by tying instruction directly to action and spatial decision-making.",
    tools: ["Unity", "C#", "Meta Quest", "SketchUp", "Blender", "Spatial audio"],
    accent: "plum",
    image: xrSafetyHero.url,
    imageAlt: "A scene from the Hitachi XR Safety experience",
  },
  {
    slug: "wellness-micro-learning",
    number: "03",
    title: "Wellness Micro-learning",
    shortTitle: "Wellness",
    kicker: "AI-assisted · Human-directed",
    promise: "Lengthy wellness report, transformed into two brief videos.",
    learner: "Corporate employees and managers on a digital workplace learning platform—busy people unlikely to read a long report.",
    challenge: "A 2025 workplace wellness report contained useful findings, but the report format itself was the barrier.",
    decisions: ["Transform the material rather than merely summarize it.", "Give each video one clear idea.", "Aim the two videos at different engagement stages.", "Design scripts, visuals, voiceover, and on-screen text to deliver one message.", "Keep human editorial control over every AI-assisted step."],
    built: ["Two short-form learning videos", "NotebookLM insight extraction", "ChatGPT script drafts", "Veo 3 generated visuals", "ElevenLabs voiceover and HeyGen presenter", "Premiere Pro / After Effects final cut"],
    outcome: "The project shows that AI can accelerate learning-content production without replacing human review, design judgment, or message control.",
    tools: ["NotebookLM", "ChatGPT", "Veo 3", "ElevenLabs", "HeyGen", "Premiere Pro", "After Effects"],
    accent: "leaf",
    image: wellnessHero.url,
    imageAlt: "An AI-generated wellness video still showing two children playing with a dog while their mother looks on",
    videos: [
      { title: "Workplace wellness learning video", youtubeId: "0ugmiUneh_M", poster: "/media/wellness-video-1.jpg" },
      { title: "Workplace wellness learning video", youtubeId: "y6UeWovMjDU", poster: "/media/wellness.png" },
    ],
  },
  {
    slug: "immersive-storytelling-curriculum",
    number: "04",
    title: "Immersive Storytelling Curriculum",
    shortTitle: "Immersive Curriculum",
    kicker: "Curriculum design · Post-secondary",
    promise: "From first headset to finished story.",
    learner: "Roughly 40 post-secondary students per term with no prior immersive-media background.",
    challenge: "Teach students to plan, produce, and critique AR, VR, and 360° video stories about their own communities.",
    decisions: ["Scaffold the curriculum from concept through production.", "Use group projects to make collaboration part of the learning.", "Align rubrics directly to learning outcomes.", "Build in milestone feedback to catch quality issues early.", "Introduce AI-assisted workflows alongside explicit ethics discussion."],
    built: ["Taught: Intro to Design, Layout and Immersive Storytelling", "Full course design: Intro to Animation with Social Media Integration", "Assignments, assessments, and outcome-aligned rubrics", "Lecture presentations and seminar discussions on emerging media", "Hands-on training in immersive software and hardware", "Guided group AR, VR, and 360° journalism projects", "Delivered at St. Clair College, Aug 2023 – May 2024"],
    outcome: "Students shipped community-focused immersive journalism projects while developing technical skill, collaboration habits, and critical awareness of emerging tools.",
    tools: ["Curriculum design", "Rubric design", "AR / VR", "360° video", "AI ethics"],
    accent: "coral",
    image: curriculumHero.url,
    imageAlt: "A tester playing a virtual immersive experience beside a computer displaying the experience",
  },
  {
    slug: "storyline-360-interactives",
    number: "05",
    title: "Storyline 360 Interactives",
    shortTitle: "Storyline 360",
    kicker: "Authoring · Interactive demonstration",
    promise: "Four compact interactions show assessment, review, recall, and onboarding range.",
    learner: "Learners who need short, purposeful interactions rather than a single long course format.",
    challenge: "Demonstrate breadth in Articulate Storyline 360 across different learning goals and interaction patterns.",
    decisions: ["Match each interaction pattern to a distinct learning purpose.", "Keep instructions and feedback immediately visible.", "Use game mechanics only where they reinforce retrieval and practice.", "Keep each demo short, focused, and self-explanatory."],
    built: ["NDA Drag & Drop—interactive assessment", "Waterworks Jeopardy—gamified review", "Metal Memory Match—game-based recall", "Intro to Nimble 2e—onboarding-style introduction"],
    outcome: "The suite demonstrates practical Storyline range while keeping the learning purpose of each interaction visible.",
    tools: ["Articulate Storyline 360", "xAPI fundamentals", "Assessment design", "Game-based recall"],
    accent: "sun",
    image: storylineHero.url,
    imageAlt: "Metal Memory Match game built in Articulate Storyline 360",
    demos: [
      { title: "NDA Drag & Drop", purpose: "Interactive assessment", href: "/demos/nda/story.html" },
      { title: "Waterworks Jeopardy", purpose: "Gamified review", href: "/demos/jeopardy/story.html" },
      { title: "Metal Memory Match", purpose: "Game-based recall", href: "/demos/memory/story.html" },
      { title: "Intro to Nimble 2e", purpose: "Onboarding introduction", href: "/demos/nimble/story.html" },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);