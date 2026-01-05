"use client";

import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import Hero from "@/components/Hero";
import VoiceSection from "@/components/VoiceSection";
import SocialSection from "@/components/SocialSection";
import VideoGallery from "@/components/VideoGallery";
import ClosingSection from "@/components/ClosingSection";
import contentData from "@/src/data/content.json";

type Language = "en" | "am";

export default function Home() {
  const [lang, setLang] = useState<Language>("am");
  const content = contentData[lang];

  return (
    <main className={`min-h-screen text-white bg-brand-secondary transition-colors duration-500`} lang={lang}>
      <LanguageToggle currentLang={lang} setLang={setLang} />

      <Hero content={content.hero} lang={lang} channelUrl={content.videos.channelUrl} />

      <VoiceSection
        content={content.voice}
        header={content.voice_header}
        lang={lang}
      />

      <SocialSection content={content.socials} lang={lang} />

      <VideoGallery
        badge={content.videos.badge}
        title={content.videos.title}
        description={content.videos.description}
        cta={content.videos.cta}
        channelUrl={content.videos.channelUrl}
        items={content.videos.items}
      />

      <ClosingSection content={content.closing} channelUrl={content.videos.channelUrl} socials={content.socials} />
    </main>
  );
}
