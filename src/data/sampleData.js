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

// Detailed dispatch data for distributors (last 30 days)
export const distributorDispatchData = {
  1: [ // ABC Cement Distributors
    { date: '2024-01-01', trucks: 3, challanNo: 'CH-2401-001', vehicleNo: 'JK01-AB-1234', quantity: 45, driver: 'Rajesh Kumar' },
    { date: '2024-01-02', trucks: 4, challanNo: 'CH-2401-002', vehicleNo: 'JK01-CD-5678', quantity: 60, driver: 'Amit Singh' },
    { date: '2024-01-03', trucks: 2, challanNo: 'CH-2401-003', vehicleNo: 'JK01-EF-9012', quantity: 30, driver: 'Vijay Sharma' },
    { date: '2024-01-04', trucks: 5, challanNo: 'CH-2401-004', vehicleNo: 'JK01-GH-3456', quantity: 75, driver: 'Suresh Patel' },
    { date: '2024-01-05', trucks: 3, challanNo: 'CH-2401-005', vehicleNo: 'JK01-IJ-7890', quantity: 45, driver: 'Ravi Verma' },
    { date: '2024-01-06', trucks: 4, challanNo: 'CH-2401-006', vehicleNo: 'JK01-KL-2345', quantity: 60, driver: 'Manoj Yadav' },
    { date: '2024-01-07', trucks: 3, challanNo: 'CH-2401-007', vehicleNo: 'JK01-MN-6789', quantity: 45, driver: 'Anil Kumar' },
    { date: '2024-01-08', trucks: 6, challanNo: 'CH-2401-008', vehicleNo: 'JK01-OP-0123', quantity: 90, driver: 'Deepak Gupta' },
    { date: '2024-01-09', trucks: 2, challanNo: 'CH-2401-009', vehicleNo: 'JK01-QR-4567', quantity: 30, driver: 'Sanjay Joshi' },
    { date: '2024-01-10', trucks: 4, challanNo: 'CH-2401-010', vehicleNo: 'JK01-ST-8901', quantity: 60, driver: 'Rahul Mehta' },
  ],
  2: [ // XYZ Building Materials
    { date: '2024-01-01', trucks: 5, challanNo: 'CH-2401-011', vehicleNo: 'JK02-AB-1111', quantity: 75, driver: 'Mohan Lal' },
    { date: '2024-01-02', trucks: 4, challanNo: 'CH-2401-012', vehicleNo: 'JK02-CD-2222', quantity: 60, driver: 'Ashok Rana' },
    { date: '2024-01-03', trucks: 6, challanNo: 'CH-2401-013', vehicleNo: 'JK02-EF-3333', quantity: 90, driver: 'Ramesh Bhat' },
    { date: '2024-01-04', trucks: 3, challanNo: 'CH-2401-014', vehicleNo: 'JK02-GH-4444', quantity: 45, driver: 'Kishore Das' },
    { date: '2024-01-05', trucks: 5, challanNo: 'CH-2401-015', vehicleNo: 'JK02-IJ-5555', quantity: 75, driver: 'Naveen Shah' },
    { date: '2024-01-06', trucks: 4, challanNo: 'CH-2401-016', vehicleNo: 'JK02-KL-6666', quantity: 60, driver: 'Dinesh Kaul' },
    { date: '2024-01-07', trucks: 3, challanNo: 'CH-2401-017', vehicleNo: 'JK02-MN-7777', quantity: 45, driver: 'Prakash Wani' },
    { date: '2024-01-08', trucks: 5, challanNo: 'CH-2401-018', vehicleNo: 'JK02-OP-8888', quantity: 75, driver: 'Subhash Mir' },
    { date: '2024-01-09', trucks: 4, challanNo: 'CH-2401-019', vehicleNo: 'JK02-QR-9999', quantity: 60, driver: 'Farooq Ahmad' },
    { date: '2024-01-10', trucks: 6, challanNo: 'CH-2401-020', vehicleNo: 'JK02-ST-0000', quantity: 90, driver: 'Imran Khan' },
  ],
  3: [ // Metro Construction Supply
    { date: '2024-01-01', trucks: 3, challanNo: 'CH-2401-021', vehicleNo: 'JK03-AB-1212', quantity: 45, driver: 'Tariq Bhat' },
    { date: '2024-01-02', trucks: 2, challanNo: 'CH-2401-022', vehicleNo: 'JK03-CD-3434', quantity: 30, driver: 'Wasim Shah' },
    { date: '2024-01-03', trucks: 4, challanNo: 'CH-2401-023', vehicleNo: 'JK03-EF-5656', quantity: 60, driver: 'Zahoor Lone' },
    { date: '2024-01-04', trucks: 3, challanNo: 'CH-2401-024', vehicleNo: 'JK03-GH-7878', quantity: 45, driver: 'Shakeel Dar' },
    { date: '2024-01-05', trucks: 5, challanNo: 'CH-2401-025', vehicleNo: 'JK03-IJ-9090', quantity: 75, driver: 'Aamir Wani' },
    { date: '2024-01-06', trucks: 2, challanNo: 'CH-2401-026', vehicleNo: 'JK03-KL-1122', quantity: 30, driver: 'Bilal Ahmad' },
    { date: '2024-01-07', trucks: 4, challanNo: 'CH-2401-027', vehicleNo: 'JK03-MN-3344', quantity: 60, driver: 'Salman Khan' },
    { date: '2024-01-08', trucks: 3, challanNo: 'CH-2401-028', vehicleNo: 'JK03-OP-5566', quantity: 45, driver: 'Irfan Mir' },
    { date: '2024-01-09', trucks: 5, challanNo: 'CH-2401-029', vehicleNo: 'JK03-QR-7788', quantity: 75, driver: 'Adil Shah' },
    { date: '2024-01-10', trucks: 4, challanNo: 'CH-2401-030', vehicleNo: 'JK03-ST-9900', quantity: 60, driver: 'Riyaz Bhat' },
  ],
  4: [ // Prime Cement Trading Co.
    { date: '2024-01-01', trucks: 4, challanNo: 'CH-2401-031', vehicleNo: 'JK04-AB-2020', quantity: 60, driver: 'Yogesh Koul' },
    { date: '2024-01-02', trucks: 3, challanNo: 'CH-2401-032', vehicleNo: 'JK04-CD-4040', quantity: 45, driver: 'Vishal Dhar' },
    { date: '2024-01-03', trucks: 5, challanNo: 'CH-2401-033', vehicleNo: 'JK04-EF-6060', quantity: 75, driver: 'Nitin Raina' },
    { date: '2024-01-04', trucks: 4, challanNo: 'CH-2401-034', vehicleNo: 'JK04-GH-8080', quantity: 60, driver: 'Sandeep Kaw' },
    { date: '2024-01-05', trucks: 6, challanNo: 'CH-2401-035', vehicleNo: 'JK04-IJ-1010', quantity: 90, driver: 'Ajay Tickoo' },
    { date: '2024-01-06', trucks: 3, challanNo: 'CH-2401-036', vehicleNo: 'JK04-KL-3030', quantity: 45, driver: 'Rohit Bhat' },
    { date: '2024-01-07', trucks: 5, challanNo: 'CH-2401-037', vehicleNo: 'JK04-MN-5050', quantity: 75, driver: 'Ankur Shah' },
    { date: '2024-01-08', trucks: 4, challanNo: 'CH-2401-038', vehicleNo: 'JK04-OP-7070', quantity: 60, driver: 'Varun Pandit' },
    { date: '2024-01-09', trucks: 3, challanNo: 'CH-2401-039', vehicleNo: 'JK04-QR-9090', quantity: 45, driver: 'Karan Razdan' },
    { date: '2024-01-10', trucks: 5, challanNo: 'CH-2401-040', vehicleNo: 'JK04-ST-1212', quantity: 75, driver: 'Arjun Watal' },
  ],
  5: [ // Elite Building Solutions
    { date: '2024-01-01', trucks: 3, challanNo: 'CH-2401-041', vehicleNo: 'JK05-AB-3030', quantity: 45, driver: 'Sushil Koul' },
    { date: '2024-01-02', trucks: 4, challanNo: 'CH-2401-042', vehicleNo: 'JK05-CD-6060', quantity: 60, driver: 'Pankaj Dhar' },
    { date: '2024-01-03', trucks: 2, challanNo: 'CH-2401-043', vehicleNo: 'JK05-EF-9090', quantity: 30, driver: 'Gaurav Raina' },
    { date: '2024-01-04', trucks: 5, challanNo: 'CH-2401-044', vehicleNo: 'JK05-GH-1212', quantity: 75, driver: 'Sachin Kaw' },
    { date: '2024-01-05', trucks: 3, challanNo: 'CH-2401-045', vehicleNo: 'JK05-IJ-4545', quantity: 45, driver: 'Tarun Bhat' },
    { date: '2024-01-06', trucks: 4, challanNo: 'CH-2401-046', vehicleNo: 'JK05-KL-7878', quantity: 60, driver: 'Sumit Pandit' },
    { date: '2024-01-07', trucks: 3, challanNo: 'CH-2401-047', vehicleNo: 'JK05-MN-0101', quantity: 45, driver: 'Vivek Shah' },
    { date: '2024-01-08', trucks: 5, challanNo: 'CH-2401-048', vehicleNo: 'JK05-OP-2323', quantity: 75, driver: 'Akash Tickoo' },
    { date: '2024-01-09', trucks: 4, challanNo: 'CH-2401-049', vehicleNo: 'JK05-QR-4545', quantity: 60, driver: 'Nikhil Watal' },
    { date: '2024-01-10', trucks: 2, challanNo: 'CH-2401-050', vehicleNo: 'JK05-ST-6767', quantity: 30, driver: 'Mohit Razdan' },
  ],
};



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

// Raw Materials Stock Data
export const rawMaterialsStock = [
  {
    id: 'limestone',
    name: 'Limestone',
    stock: 25000,
    minLevel: 10000,
    unit: 'MT',
    icon: 'Mountain',
  },
  {
    id: 'clay',
    name: 'Clay',
    stock: 5000,
    minLevel: 6000,
    unit: 'MT',
    icon: 'Layers',
  },
  {
    id: 'silica',
    name: 'Silica',
    stock: 8500,
    minLevel: 5000,
    unit: 'MT',
    icon: 'Gem',
  },
  {
    id: 'iron-ore',
    name: 'Iron Ore',
    stock: 3200,
    minLevel: 2000,
    unit: 'MT',
    icon: 'Hammer',
  },
  {
    id: 'gypsum',
    name: 'Gypsum',
    stock: 4500,
    minLevel: 3000,
    unit: 'MT',
    icon: 'Boxes',
  },
  {
    id: 'coal',
    name: 'Coal',
    stock: 12000,
    minLevel: 8000,
    unit: 'MT',
    icon: 'Flame',
  },
  {
    id: 'raw-mix',
    name: 'Raw Mix',
    stock: 18000,
    minLevel: 15000,
    unit: 'MT',
    icon: 'Blend',
  },
  {
    id: 'clinker',
    name: 'Clinker',
    stock: 22000,
    minLevel: 20000,
    unit: 'MT',
    icon: 'Package',
  },
];

// Daily Received Raw Materials (Last 7 days)
export const dailyReceivedData = [
  { day: 'Day 1', limestone: 1500, clay: 300, silica: 400, ironOre: 150, gypsum: 200, coal: 800, rawMix: 1200, clinker: 1400 },
  { day: 'Day 2', limestone: 1800, clay: 350, silica: 450, ironOre: 180, gypsum: 250, coal: 900, rawMix: 1300, clinker: 1500 },
  { day: 'Day 3', limestone: 1600, clay: 280, silica: 420, ironOre: 160, gypsum: 220, coal: 850, rawMix: 1250, clinker: 1450 },
  { day: 'Day 4', limestone: 2000, clay: 400, silica: 500, ironOre: 200, gypsum: 280, coal: 1000, rawMix: 1400, clinker: 1600 },
  { day: 'Day 5', limestone: 1700, clay: 320, silica: 430, ironOre: 170, gypsum: 240, coal: 880, rawMix: 1280, clinker: 1480 },
  { day: 'Day 6', limestone: 1900, clay: 360, silica: 470, ironOre: 190, gypsum: 260, coal: 950, rawMix: 1350, clinker: 1550 },
  { day: 'Day 7', limestone: 1750, clay: 330, silica: 440, ironOre: 175, gypsum: 245, coal: 900, rawMix: 1300, clinker: 1500 },
];

// Daily Consumption Raw Materials (Last 7 days)
export const dailyConsumptionData = [
  { day: 'Day 1', limestone: 1200, clay: 250, silica: 350, ironOre: 120, gypsum: 180, coal: 700, rawMix: 1100, clinker: 1300 },
  { day: 'Day 2', limestone: 1300, clay: 280, silica: 380, ironOre: 140, gypsum: 200, coal: 750, rawMix: 1150, clinker: 1350 },
  { day: 'Day 3', limestone: 1250, clay: 270, silica: 360, ironOre: 130, gypsum: 190, coal: 720, rawMix: 1120, clinker: 1320 },
  { day: 'Day 4', limestone: 1400, clay: 300, silica: 400, ironOre: 150, gypsum: 220, coal: 800, rawMix: 1200, clinker: 1400 },
  { day: 'Day 5', limestone: 1280, clay: 260, silica: 370, ironOre: 135, gypsum: 195, coal: 730, rawMix: 1130, clinker: 1330 },
  { day: 'Day 6', limestone: 1350, clay: 290, silica: 390, ironOre: 145, gypsum: 210, coal: 780, rawMix: 1180, clinker: 1380 },
  { day: 'Day 7', limestone: 1320, clay: 275, silica: 375, ironOre: 138, gypsum: 205, coal: 760, rawMix: 1160, clinker: 1360 },
];

// Stock Level Trends (Last 10 days)
export const stockLevelTrends = [
  { day: 'Day 1', limestone: 24000, clay: 5800, silica: 8200, ironOre: 3100, gypsum: 4300, coal: 11500, rawMix: 17500, clinker: 21500 },
  { day: 'Day 2', limestone: 24300, clay: 5650, silica: 8350, ironOre: 3120, gypsum: 4350, coal: 11700, rawMix: 17700, clinker: 21700 },
  { day: 'Day 3', limestone: 24500, clay: 5500, silica: 8400, ironOre: 3150, gypsum: 4400, coal: 11900, rawMix: 17900, clinker: 21900 },
  { day: 'Day 4', limestone: 24700, clay: 5350, silica: 8450, ironOre: 3180, gypsum: 4450, coal: 12100, rawMix: 18100, clinker: 22100 },
  { day: 'Day 5', limestone: 24900, clay: 5200, silica: 8500, ironOre: 3200, gypsum: 4480, coal: 12200, rawMix: 18200, clinker: 22200 },
  { day: 'Day 6', limestone: 25100, clay: 5100, silica: 8520, ironOre: 3210, gypsum: 4500, coal: 12150, rawMix: 18150, clinker: 22150 },
  { day: 'Day 7', limestone: 25000, clay: 5050, silica: 8510, ironOre: 3200, gypsum: 4500, coal: 12050, rawMix: 18050, clinker: 22050 },
  { day: 'Day 8', limestone: 25050, clay: 5020, silica: 8505, ironOre: 3195, gypsum: 4510, coal: 12080, rawMix: 18080, clinker: 22080 },
  { day: 'Day 9', limestone: 25000, clay: 5010, silica: 8500, ironOre: 3200, gypsum: 4505, coal: 12050, rawMix: 18050, clinker: 22050 },
  { day: 'Day 10', limestone: 25000, clay: 5000, silica: 8500, ironOre: 3200, gypsum: 4500, coal: 12000, rawMix: 18000, clinker: 22000 },
];