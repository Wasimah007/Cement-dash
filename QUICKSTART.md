# 🚀 Quick Start Guide

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: `http://localhost:3000`

## 🎯 What You'll See

- **Header**: Search bar, notifications, settings, and user profile
- **Sidebar**: Navigation menu (Dashboard, Analytics, Customers, etc.)
- **KPI Cards**: 4 key metrics with trend indicators
- **Revenue Chart**: Monthly revenue, expenses, and profit
- **Category Chart**: Sales distribution pie chart
- **Performance Chart**: Target vs actual bar chart
- **Data Table**: Top 5 products with sales data

## 📝 Next Steps

1. **Customize Data**: Edit `src/data/sampleData.js`
2. **Change Theme**: Modify CSS variables in `src/index.css`
3. **Add Features**: Create new components in `src/components/`
4. **Connect API**: Replace sample data with real API calls

## 🎨 Customization Examples

### Change Primary Color:
```css
/* In src/index.css */
--accent-primary: #00f5ff; /* Change to your color */
```

### Add New KPI:
```javascript
// In src/data/sampleData.js
{
  id: 'new-metric',
  title: 'Your Metric',
  value: '123',
  change: '+10%',
  trend: 'up',
  icon: 'YourIcon',
}
```

### Add New Chart:
```javascript
// In src/pages/Dashboard.jsx
import NewChart from '../components/NewChart';

// Add to the charts grid:
<div className="chart-half">
  <NewChart data={yourData} />
</div>
```

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## ❓ Common Issues

**Port already in use?**
```bash
# Change port in vite.config.js:
server: {
  port: 3001, // or any other port
}
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall:
rm -rf node_modules package-lock.json
npm install
```

## 🌟 Features Included

✅ Responsive Design
✅ Dark Theme
✅ Interactive Charts
✅ Smooth Animations
✅ Modern UI Components
✅ Sample Data
✅ Well-Structured Code
✅ Easy to Customize

Enjoy building your dashboard! 🎉
