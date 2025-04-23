'use client';
import { useRef, useEffect } from 'react';

interface Project {
  name: string;
  description: string;
  stack: string;
}

interface ExperienceCardProps {
  company: string;
  title: string;
  start: string;
  end: string;
  icon: string;
  description: string;
  location: string;
  projects?: Project[];
  index: number;
}

const ExperienceCard = ({
  company,
  title,
  start,
  end,
  icon,
  description,
  location,
  projects,
  index
}: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on mouse position
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-[#1F2937] rounded-xl p-6 mb-8 lg:mb-16
        transform transition-all duration-500 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]
        ${index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto'} lg:w-[90%]
        hover:bg-[#374151] cursor-pointer`}
      style={{
        opacity: 0,
        animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#60A5FA] to-[#93C5FD] opacity-0 
        group-hover:opacity-10 transition-opacity duration-500" />

      {/* Company Logo */}
      <div className="absolute -left-4 lg:-left-6 top-6 w-12 h-12 lg:w-16 lg:h-16 
        rounded-full bg-[#60A5FA] p-2 border-4 border-[#1F2937] 
        transform transition-all duration-300 group-hover:scale-110 z-10">
        <img
          src={icon}
          alt={company}
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Content */}
      <div className="ml-10 lg:ml-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <h3 className="text-white text-xl lg:text-2xl font-bold">
            {company}
          </h3>
          <span className="text-[#93C5FD] text-sm mt-1 lg:mt-0">
            {start} - {end}
          </span>
        </div>

        <h4 className="text-[#93C5FD] text-lg mb-2">
          {title}, {location}
        </h4>

        <p className="text-[#CBD5E1] leading-relaxed">
          {description}
        </p>

        {/* Project tags */}
        {projects && projects.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {projects.map((project, pIndex) => (
              <span
                key={pIndex}
                className="px-3 py-1 text-xs text-[#CBD5E1] bg-[#111827] rounded-full
                  hover:bg-[#60A5FA] hover:text-white transition-colors duration-300"
              >
                {project.name}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Connecting line */}
      <div className="absolute left-[20px] lg:left-[24px] top-24 bottom-0 w-[2px] 
        bg-gradient-to-b from-[#60A5FA] to-transparent h-full" />
    </div>
  );
};

export default ExperienceCard; 