import React from 'react';
import RadarChartComponent from '../component/RadarChartComp';
import CloudChartComponent from '../component/CloudChartComp';

const About = () => {
  // Political view survey data (aggregated from 119 responses)
  const aboutData = [
    {
      subject: 'Left of centre',
      A: 36,
      count: 43,
      fullMark: 100,
    },
    {
      subject: 'Right of centre',
      A: 26,
      count: 31,
      fullMark: 100,
    },
    {
      subject: 'Centre',
      A: 27,
      count: 32,
      fullMark: 100,
    },
    {
      subject: 'Apolitical',
      A: 3,
      count: 4,
      fullMark: 100,
    },
    {
      subject: 'Far left',
      A: 6,
      count: 7,
      fullMark: 100,
    },
    {
      subject: 'Far right',
      A: 2,
      count: 2,
      fullMark: 100,
    },
  ];

  // Company data from your survey
  const companyData = [
    { value: 'Tesla', count: 9 },
    { value: 'ATS', count: 3 },
    { value: 'Startup', count: 4 },
    { value: 'Microsoft', count: 1 },
    { value: 'Apple', count: 1 },
    { value: 'Netflix', count: 1 },
    { value: 'Snapchat', count: 1 },
    { value: 'Airbus', count: 1 },
    { value: 'Manulife', count: 1 },
    { value: 'Waabi', count: 1 },
    { value: 'Aecon', count: 1 },
    { value: 'Scrawlr', count: 1 },
    { value: 'Arlo Technologies', count: 1 },
    { value: 'Proline Automation', count: 1 },
    { value: 'pMatic', count: 1 },
    { value: 'Nuvation Energy', count: 1 },
    { value: 'Brock Solutions', count: 1 },
    { value: 'Mycroft Technologies', count: 1 },
    { value: 'Early Robotics', count: 1 },
    { value: 'ICSPI', count: 1 },
  ];

  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company and mission.</p>
      <div>
        <h2>Our Mission</h2>
        <p>To provide excellent service...</p>
      </div>
      <div>
        <h2>Political View Survey Results</h2>
        <p>Distribution of political views from 119 survey responses:</p>
        <RadarChartComponent
          data={aboutData}
          name="Percentage %"
          dataKey="A"
        />
        <CloudChartComponent
          data={companyData}
          title="Company Distribution"
          description="Survey results from 20 companies"
          showCounts={true}
        />
      </div>
    </div>
  );
};

export default About;