import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 pb-2 mb-6 flex items-center gap-2">
        <GraduationCap className="w-6 h-6" />
        Education
      </h2>
      
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sirindhorn International Institute of Technology (SIIT)</h3>
          <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">08/2019 – 05/2023</div>
        </div>
        <div className="text-lg text-slate-700 dark:text-slate-300 mb-2">Thammasat University</div>
        <div className="text-slate-700 dark:text-slate-300 font-medium">Bachelor’s in Computer Engineering (CPE)</div>
        <div className="mt-4 inline-block bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
          Full Scholarship (2019, 2020, 2021, 2022)
        </div>
      </div>
    </section>
  );
}
