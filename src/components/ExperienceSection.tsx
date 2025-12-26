import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 pb-2 mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        Professional Experience
      </h2>
      
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend Developer</h3>
            <div className="text-blue-600 dark:text-blue-400 font-medium">Infuse Co., Ltd.</div>
          </div>
          <div className="text-slate-500 dark:text-slate-400 text-sm mt-1 sm:mt-0 font-medium">
            2023 - Present
          </div>
        </div>
        
        <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 dark:text-slate-300">
          <li>
            Developed and maintained an interactive web using <strong>TypeScript</strong> with <strong>Next.js</strong> framework, <strong>Tailwind CSS</strong>, Material UI and other libraries.
          </li>
          <li>
            Developed a <strong>LINE LIFF</strong> (LINE Front-end Framework) e-commerce experience using Next.js, with realtime chat in the application.
          </li>
          <li>
            Designed and developed an integrated third-party APIs page to facilitate seamless data access and enhance user experience while debugging using <strong>Vue.js</strong>.
          </li>
          <li>
            Built responsive web and mobile user interfaces, ensuring cross-platform compatibility.
          </li>
          <li>
            Designed software system flow and database structures to improve development processes.
          </li>
          <li>
            Implemented <strong>Supabase Edge Functions</strong> as a type-safe Backend for Frontend (BFF), delivering optimized, schema-defined API responses to frontend needs for improved security, performance, and maintainability.
          </li>
          <li>
            Collaborated in a Scrum-based Agile team to improve the efficiency of application development.
          </li>
          <li>
            Collaborated with the backend developers team on any potential client issues and with UX/UI designers to enhance user experience.
          </li>
        </ul>
      </div>
    </section>
  );
}
