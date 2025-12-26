import { Header } from '@/components/Header';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="grid gap-12">
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </main>
  );
}