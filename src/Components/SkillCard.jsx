import React from "react";

// Composant SkillCard réutilisable
export const SkillCard = ({ skill, index }) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Gradient Background Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon or Image */}
        {skill.logo ? (
          <div className="h-16 w-16 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`}
              className="w-full h-full object-contain filter group-hover:drop-shadow-lg"
            />
          </div>
        ) : (
          <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {skill.icon}
          </div>
        )}
        
        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {skill.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm mb-3">
          {skill.description}
        </p>
        
        {/* Level Badge */}
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500`}
              style={{
                width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "80%" : "60%"
              }}
            ></div>
          </div>
          <span className="text-xs text-cyan-400 font-semibold">
            {skill.level}
          </span>
        </div>

        {/* Tags optionnels */}
        {skill.tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skill.tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:animate-shine"></div>
      </div>

      {/* Corner Badge for Level */}
      <div className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
};

