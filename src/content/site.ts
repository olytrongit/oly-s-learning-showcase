import doctorPoster from "@/assets/doctor.jpg.asset.json";
import deweyPoster from "@/assets/dewey.jpg.asset.json";
import heartPoster from "@/assets/heart_stole.jpg.asset.json";
import joyPoster from "@/assets/joy.jpg.asset.json";
import ourTimePoster from "@/assets/ourtime.jpg.asset.json";
import recruitmentPoster from "@/assets/recruitment.jpg.asset.json";
import starjournPoster from "@/assets/starjourn.jpg.asset.json";
import tunnelPoster from "@/assets/tunnel.png.asset.json";
import windsagePoster from "@/assets/windsage_2.jpg.asset.json";
import winniePoster from "@/assets/winnie.png.asset.json";
import yogaPoster from "@/assets/yoga_5.jpg.asset.json";

export const site = {
  name: "Olivier Balmokune",
  role: "Senior Instructional Designer",
  location: "Calgary, Alberta",
  tagline: "Keep your knowledge. Refresh your delivery.",
  email: "tobalmokune@olytron.com",
  linkedin: "https://www.linkedin.com/in/olytron/",
  resume: "/Olivier-Balmokune-Resume.pdf",
  availability: "Open to remote roles or opportunities in Calgary, with relocation also considered.",
  philosophy:
    "I begin with the learner, the context, and the challenge the experience needs to solve. From there, I choose the appropriate format for the job: video, structured onboarding, scenario-based learning, simulation, or modular educational content.",
} as const;

export const skillGroups = [
  {
    title: "Learning design",
    items: ["Needs analysis", "Scenario-based learning", "Micro-learning", "Curriculum design", "Rubric design", "SME review cycles", "SCORM / xAPI", "LMS familiarity (Brightspace, Blackboard, SharePoint)"],
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

export type SupportingItem = {
  id: string;
  title: string;
  type: string;
  proof: string;
  /** YouTube video id. */
  youtubeId: string;
  /** Optional thumbnail shown before the video is played. */
  poster?: string;
};

export const supportingWork: readonly SupportingItem[] = [
  { id: "dewey-water-works", title: "Dewey Water Works", type: "Video & motion", proof: "A mixed-media campaign of four educational videos and 20+ short learning clips makes technical processes approachable.", youtubeId: "swhlCsuwOuE", poster: deweyPoster.url },
  { id: "our-time", title: "Our Time", type: "Video & motion", proof: "A Getty Images corporate film later used for employee onboarding demonstrates narrative pacing with a practical learning afterlife.", youtubeId: "BJlq7TpMXPA", poster: ourTimePoster.url },
  { id: "recruitment", title: "Recruitment", type: "Video & motion", proof: "Wordless vector animation carries recruitment messaging across languages without costly localization.", youtubeId: "rzeZO8LZHwA", poster: recruitmentPoster.url },
  { id: "at-the-doctors", title: "At the Doctor’s", type: "Video & motion", proof: "A stock-footage commercial translated into a dozen languages demonstrates efficient, localization-ready production.", youtubeId: "J7Y3UHyWva4", poster: doctorPoster.url },
  { id: "yoga-legends", title: "Yoga Legends", type: "Video & motion", proof: "A children’s mindfulness tool combines vector animation, puppetry, keying, and compositing to model movement clearly.", youtubeId: "jcTjrFRFlbo", poster: yogaPoster.url },
  { id: "windsage", title: "Windsage", type: "Video & motion", proof: "A Rosie Award-nominated animated short demonstrates sustained visual storytelling and emotional pacing.", youtubeId: "Aac8a5E9MVk", poster: windsagePoster.url },
  { id: "windsor-tunnel", title: "Windsor Tunnel", type: "Video & motion", proof: "A 15-second, mobile-first infographic makes infrastructure information quickly understandable.", youtubeId: "MZqqmi-3GeU", poster: tunnelPoster.url },
  { id: "find-the-joy", title: "Find the Joy", type: "Video & motion", proof: "A focused wellness micro-learning video turns report findings into a short, practical message for busy employees.", youtubeId: "y6UeWovMjDU", poster: joyPoster.url },
  { id: "starjourn", title: "Starjourn", type: "Mixed reality", proof: "An Unreal Engine narrative explores how participant agency can coexist with cinematic pacing.", youtubeId: "adrgTI84dlI", poster: starjournPoster.url },
  { id: "stole-my-heart", title: "Stole My Heart", type: "Mixed reality", proof: "An early VR character study explores presence, interaction, and narrative response.", youtubeId: "gxC6UPSYjIw", poster: heartPoster.url },
  { id: "digital-winnifred", title: "Digital Winnifred", type: "AI experiment", proof: "Combined visual and textual anchors improve identity consistency in generated video.", youtubeId: "Wp_gxKbP-VI", poster: winniePoster.url },
] as const;