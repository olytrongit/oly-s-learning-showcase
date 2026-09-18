export const site = {
  name: "Oly Balmokune",
  role: "Senior Instructional Designer",
  location: "Calgary, Alberta",
  tagline: "Keep your knowledge. Refresh your delivery.",
  email: "tobalmokune@olytron.com",
  linkedin: "https://www.linkedin.com/in/olytron",
  resume: "[CONFIRM: résumé PDF]",
  availability: "[CONFIRM: remote / hybrid / relocation line]",
  philosophy:
    "I begin with the learner, the context, and the challenge the experience needs to solve. From there, I choose the appropriate format for the job: video, structured onboarding, scenario-based learning, simulation, or modular educational content.",
} as const;

export const skillGroups = [
  {
    title: "Learning design",
    items: ["Needs analysis", "Scenario-based learning", "Micro-learning", "Curriculum design", "Rubric design", "SME review cycles", "xAPI"],
  },
  { title: "Authoring", items: ["Articulate Storyline 360", "Rive", "Figma"] },
  {
    title: "Media",
    items: ["After Effects", "Premiere Pro", "Character Animator", "Toon Boom Harmony", "Blender", "Cinema 4D", "Houdini"],
  },
  {
    title: "Immersive",
    items: ["Unity / C#", "Unreal Engine / Blueprints", "Meta Quest", "HoloLens 2", "360° video", "TouchDesigner"],
  },
  {
    title: "AI-assisted workflow",
    items: ["NotebookLM", "ChatGPT", "Veo", "ElevenLabs", "HeyGen", "Whisk / Flow"],
  },
  { title: "Code", items: ["JavaScript", "HTML / CSS", "C#", "C++", "Python", "SQL"] },
] as const;

export const supportingWork = [
  { title: "Dewey Water Works", type: "Video & motion", proof: "A mixed-media campaign of four educational videos and 24+ short learning clips makes technical processes approachable." },
  { title: "Our Time", type: "Video & motion", proof: "A Getty Images corporate film later used for employee onboarding demonstrates narrative pacing with a practical learning afterlife." },
  { title: "Recruitment", type: "Video & motion", proof: "Wordless vector animation carries recruitment messaging across languages without costly localization." },
  { title: "At the Doctor’s", type: "Video & motion", proof: "A stock-footage commercial translated into a dozen languages demonstrates efficient, localization-ready production." },
  { title: "Yoga Legends", type: "Video & motion", proof: "A children’s mindfulness tool combines vector animation, puppetry, keying, and compositing to model movement clearly." },
  { title: "Windsage", type: "Video & motion", proof: "A Rosie Award-nominated animated short demonstrates sustained visual storytelling and emotional pacing." },
  { title: "Windsor Tunnel", type: "Video & motion", proof: "A 15-second, mobile-first infographic makes infrastructure information quickly understandable." },
  { title: "Industrial XR", type: "Mixed reality", proof: "Unity prototypes for HoloLens 2 and Meta Quest connect instruction to action in space." },
  { title: "Starjourn", type: "Mixed reality", proof: "An Unreal Engine narrative explores how participant agency can coexist with cinematic pacing." },
  { title: "Stole My Heart", type: "Mixed reality", proof: "An early VR character study explores presence, interaction, and narrative response." },
  { title: "Digital Winnifred", type: "AI experiment", proof: "Combined visual and textual anchors improve identity consistency in generated video." },
] as const;

export const confirmItems = [
  "Institution, course name, and terms taught for Immersive Storytelling Curriculum",
  "Degree titles, institutions, timeline years, and role titles",
  "Remote, hybrid, and relocation preferences",
  "Résumé PDF file",
  "LinkedIn URL (currently using the likely /in/olytron profile)",
] as const;