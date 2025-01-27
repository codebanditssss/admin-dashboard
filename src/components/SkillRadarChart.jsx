import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const SkillRadarChart = ({ skills }) => {
  const data = Object.entries(skills).map(([skill, score]) => ({
    skill,
    score,
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <Radar
          name="Skills"
          dataKey="score"
          stroke="#3B82F6"
          fill="#3B82F6"
          fillOpacity={0.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadarChart;