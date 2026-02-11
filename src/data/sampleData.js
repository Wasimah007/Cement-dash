// Acceptable ranges for cement parameters
export const acceptableRanges = {
  SM: { min: 2.2, max: 2.6 },    // Silica Modulus
  AM: { min: 1.4, max: 1.8 },    // Alumina Modulus
  LSF: { min: 0.88, max: 0.96 }  // Lime Saturation Factor
};

// 24-hour hourly Q&C data
export const qcData = [
  { hour: '00:00', SM: 2.45, AM: 1.62, LSF: 0.92 },
  { hour: '01:00', SM: 2.42, AM: 1.65, LSF: 0.91 },
  { hour: '02:00', SM: 2.48, AM: 1.58, LSF: 0.93 },
  { hour: '03:00', SM: 2.51, AM: 1.61, LSF: 0.94 },
  { hour: '04:00', SM: 2.38, AM: 1.67, LSF: 0.90 },
  { hour: '05:00', SM: 2.44, AM: 1.63, LSF: 0.92 },
  { hour: '06:00', SM: 2.47, AM: 1.59, LSF: 0.93 },
  { hour: '07:00', SM: 2.53, AM: 1.56, LSF: 0.95 },
  { hour: '08:00', SM: 2.41, AM: 1.64, LSF: 0.91 },
  { hour: '09:00', SM: 2.46, AM: 1.60, LSF: 0.92 },
  { hour: '10:00', SM: 2.49, AM: 1.62, LSF: 0.94 },
  { hour: '11:00', SM: 2.65, AM: 1.55, LSF: 0.97 }, // SM & LSF out of range
  { hour: '12:00', SM: 2.44, AM: 1.63, LSF: 0.92 },
  { hour: '13:00', SM: 2.48, AM: 1.61, LSF: 0.93 },
  { hour: '14:00', SM: 2.52, AM: 1.58, LSF: 0.95 },
  { hour: '15:00', SM: 2.18, AM: 1.82, LSF: 0.89 }, // SM & AM out of range
  { hour: '16:00', SM: 2.46, AM: 1.64, LSF: 0.92 },
  { hour: '17:00', SM: 2.43, AM: 1.66, LSF: 0.91 },
  { hour: '18:00', SM: 2.50, AM: 1.59, LSF: 0.94 },
  { hour: '19:00', SM: 2.47, AM: 1.61, LSF: 0.93 },
  { hour: '20:00', SM: 2.45, AM: 1.63, LSF: 0.92 },
  { hour: '21:00', SM: 2.42, AM: 1.65, LSF: 0.91 },
  { hour: '22:00', SM: 2.48, AM: 1.60, LSF: 0.93 },
  { hour: '23:00', SM: 2.44, AM: 1.62, LSF: 0.92 },
];


export const regionData = [
  { name: 'Srinagar', value: 28, color: '#00f5ff' },
  { name: 'Jammu', value: 32, color: '#ff00ea' },
  { name: 'Anantnag', value: 18, color: '#ffaa00' },
  { name: 'Baramulla', value: 14, color: '#00ff88' },
  { name: 'Udhampur', value: 8, color: '#ff3366' },
];



// Clinker Production Data for 1500 TPD Plant
// Target: 1500 tons/day × 7 days = 10,500 tons/week
export const clinkerProductionData = [
  { week: 'Week 1', target: 10500, actual: 10200 },
  { week: 'Week 2', target: 10500, actual: 10650 },
  { week: 'Week 3', target: 10500, actual: 9800 },
  { week: 'Week 4', target: 10500, actual: 10800 },
  { week: 'Week 5', target: 10500, actual: 10450 },
  { week: 'Week 6', target: 10500, actual: 10700 },
];



export const topDistributors = [
  { id: 1, name: 'ABC Cement Distributors', sales: 2845, revenue: 1424500, trend: '+18%', status: 'up' },
  { id: 2, name: 'XYZ Building Materials', sales: 2387, revenue: 1896100, trend: '+12%', status: 'up' },
  { id: 3, name: 'Metro Construction Supply', sales: 2156, revenue: 1685600, trend: '-5%', status: 'down' },
  { id: 4, name: 'Prime Cement Trading Co.', sales: 1954, revenue: 1532700, trend: '+22%', status: 'up' },
  { id: 5, name: 'Elite Building Solutions', sales: 1743, revenue: 1327150, trend: '+9%', status: 'up' },
];



export const userActivity = [
  { hour: '00:00', users: 120 },
  { hour: '03:00', users: 80 },
  { hour: '06:00', users: 150 },
  { hour: '09:00', users: 380 },
  { hour: '12:00', users: 520 },
  { hour: '15:00', users: 450 },
  { hour: '18:00', users: 620 },
  { hour: '21:00', users: 380 },
];

export const regionalSales = [
  { region: 'North America', sales: 45000, growth: 12.5 },
  { region: 'Europe', sales: 38000, growth: 8.3 },
  { region: 'Asia Pacific', sales: 52000, growth: 15.7 },
  { region: 'Latin America', sales: 23000, growth: 10.2 },
  { region: 'Middle East', sales: 18000, growth: 6.8 },
];

export const kpiMetrics = [
  {
    id: 'silica-modulus',
    title: 'Silica Modulus',
    value: '2.45',
    change: '+0.05',
    trend: 'up',
    icon: 'Layers',
  },
  {
    id: 'alumina-modulus',
    title: 'Alumina Modulus',
    value: '1.62',
    change: '-0.02',
    trend: 'down',
    icon: 'Box',
  },
  {
    id: 'lime-saturation',
    title: 'Lime Saturation Factor',
    value: '0.92',
    change: '+0.01',
    trend: 'up',
    icon: 'Droplet',
  },
  {
    id: 'cement-production',
    title: 'Cement Production',
    value: '4,850T',
    change: '+12.3%',
    trend: 'up',
    icon: 'Factory',
  },
];