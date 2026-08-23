import React, { useState, useMemo } from 'react';
import ShinyText from './ShinyText';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // گرفتن همه تگ‌های منحصر به فرد
  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.forEach(project => {
      project.tags?.forEach(tag => tags.add(tag));
    });
    return ['all', ...Array.from(tags)];
  }, []);

  // فیلتر کردن پروژه‌ها
  const filteredProjects = useMemo(() => {
    let filtered = projectsData;

    // فیلتر بر اساس تگ
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => 
        project.tags?.includes(activeFilter)
      );
    }

    // فیلتر بر اساس جستجو
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(project =>
        project.title.includes(search) ||
        project.description.includes(search)
      );
    }

    return filtered;
  }, [activeFilter, searchTerm]);

  return (
    <div className="mt-18" id="project_section">
      <div className="title w-full text-center">
        <ShinyText
          text="PROJECTS"
          disabled={false}
          speed={3}
          className="text-xl"
        />
        <h2 className="text-5xl font-bold">پروژه ها</h2>
      </div>

      {/* بخش فیلتر و جستجو */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
        {/* جستجو */}
        <input
          type="text"
          placeholder="جستجوی پروژه..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* دکمه‌های فیلتر */}
        <div className="flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {tag === 'all' ? 'همه' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* نمایش پروژه‌ها */}
      <div className="flex items-center justify-center flex-col gap-8 mt-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-white/50 text-xl">هیچ پروژه‌ای پیدا نشد</p>
        )}
      </div>
    </div>
  );
};

export default Projects;