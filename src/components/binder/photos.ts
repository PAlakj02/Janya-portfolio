import janyaPortrait from "@/assets/photos/janya-portrait.jpg";
import aboutPortrait1 from "@/assets/photos/about-portrait-1.jpg";
import aboutPortrait2 from "@/assets/photos/about-portrait-2.jpg";
import livlitBecoming1 from "@/assets/photos/livlit-becoming-1.jpg";
import livlitBecomingPanel from "@/assets/photos/livlit-becoming-panel.jpg";
import livlitBecomingSpeakers from "@/assets/photos/livlit-becoming-speakers.jpg";
import livlitBecomingBouquet from "@/assets/photos/livlit-becoming-bouquet.jpg";
import livlitBecomingGroup from "@/assets/photos/livlit-becoming-group.jpg";
import livlitBecomingAudience from "@/assets/photos/livlit-becoming-audience.jpg";
import livlitSchoolTalk1 from "@/assets/photos/livlit-school-talk-1.jpg";
import livlitSchoolTalk2 from "@/assets/photos/livlit-school-talk-2.jpg";
import livlitWellbeingTalk1 from "@/assets/photos/livlit-wellbeing-talk-1.jpg";
import livlitWellbeingTalk2 from "@/assets/photos/livlit-wellbeing-talk-2.jpg";
import livlitWellbeingTalk3 from "@/assets/photos/livlit-wellbeing-talk-3.jpg";
import irreplaceable1 from "@/assets/photos/irreplaceable-1.jpg";
import irreplaceable2 from "@/assets/photos/irreplaceable-2.jpg";
import irreplaceable3 from "@/assets/photos/irreplaceable-3.jpg";
import tokado1 from "@/assets/photos/tokado-1.jpg";
import tokado2 from "@/assets/photos/tokado-2.jpg";
import danceTalk1 from "@/assets/photos/dance-talk-1.jpg";
import danceTalk2 from "@/assets/photos/dance-talk-2.jpg";

export type Photo = { src: string; alt: string };

export const HERO_PHOTO: Photo = { src: janyaPortrait, alt: "Portrait of Janya" };

export const PHOTOS = {
  about: [
    { src: aboutPortrait1, alt: "Janya smiling with arms crossed" },
    { src: aboutPortrait2, alt: "Portrait of Janya in a pink cardigan" },
  ],
  livlit: [
    { src: livlitBecoming1, alt: "Janya speaking as Founder of LivLit at Becoming Irreplaceable" },
    { src: livlitBecomingPanel, alt: "Panel discussion at Becoming Irreplaceable" },
    { src: livlitBecomingSpeakers, alt: "Speakers on stage at Becoming Irreplaceable" },
    { src: livlitBecomingBouquet, alt: "Janya receiving flowers after her talk" },
    { src: livlitBecomingGroup, alt: "Group photo of attendees at Becoming Irreplaceable" },
    { src: livlitBecomingAudience, alt: "Audience applauding at Becoming Irreplaceable" },
    { src: livlitWellbeingTalk1, alt: "Janya giving a wellbeing talk on stage" },
    { src: livlitWellbeingTalk2, alt: "Janya speaking about wellbeing" },
    { src: livlitWellbeingTalk3, alt: "Janya presenting key terms on digital wellbeing" },
    { src: livlitSchoolTalk1, alt: "Janya addressing students in a school auditorium" },
    { src: livlitSchoolTalk2, alt: "Janya presenting a talk on social media" },
  ],
  irreplaceable: [
    { src: irreplaceable2, alt: "Janya leading the Are You Irreplaceable? workshop" },
    { src: irreplaceable1, alt: "Janya presenting Why Irreplaceable?" },
    { src: irreplaceable3, alt: "Workshop audience at Are You Irreplaceable?" },
  ],
  tokado: [
    { src: tokado1, alt: "Janya presenting Tokado on stage" },
    { src: tokado2, alt: "Janya demoing Tokado's prompt routing" },
  ],
  dance: [
    { src: danceTalk2, alt: "Janya speaking about her dance journey" },
    { src: danceTalk1, alt: "Janya presenting her dance story" },
  ],
} satisfies Record<string, Photo[]>;
