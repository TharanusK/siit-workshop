import { Code2, Database, Wrench, Users } from 'lucide-react';

export function SkillsSection() {
  const skillGroups = [
    {
      title: 'Languages',
      icon: <Code2 className="w-4 h-4 text-blue-500" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Code2 className="w-4 h-4 text-blue-500" />,
      skills: ['React', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Databases',
      icon: <Database className="w-4 h-4 text-blue-500" />,
      skills: ['SQL', 'Supabase (Postgres)']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-4 h-4 text-blue-500" />,
      skills: ['Git', 'Figma', 'Insomnia']
    },
    {
      title: 'Team Collaboration',
      icon: <Users className="w-4 h-4 text-blue-500" />,
      skills: ['Jira', 'Microsoft Teams', 'ClickUp'],
      fullWidth: true
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 pb-2 mb-6 flex items-center gap-2">
        <Code2 className="w-6 h-6" />
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div 
            key={group.title} 
            className={`bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 ${group.fullWidth ? 'sm:col-span-2' : ''}`}
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
              {group.icon} {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm text-slate-700 dark:text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
