# Coastal Guard Platform

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://coastal-guard-essths-sdc.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)

A real-time marine monitoring system designed for coastal surveillance and environmental protection. This platform provides comprehensive tools for monitoring marine activities, detecting illegal fishing, and tracking environmental conditions.

![Coastal Guard Platform](public/placeholder-logo.svg)

## Features

### 🚢 Real-time Marine Monitoring
- Live tracking of marine vessels and activities
- Interactive map interface with real-time updates
- Drone unit status monitoring and control

### 🚨 Alert System
- Instant notifications for detected threats
- Illegal fishing activity detection
- Trap detection alerts
- Environmental condition warnings

### 📊 Environmental Tracking
- Water temperature monitoring
- Environmental statistics and analytics
- Real-time environmental data visualization

### 📋 Reporting System
- Comprehensive report generation
- Historical data analysis
- Archive management

## Tech Stack

- **Frontend Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom UI components
- **Authentication**: Custom auth system with role-based access control
- **State Management**: React Context API
- **UI Components**: Custom component library with shadcn/ui

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/ka7loun/CoastalGuard.git
cd CoastalGuard
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                # Next.js app directory
├── components/         # React components
│   ├── alerts/        # Alert system components
│   ├── control/       # Control interface components
│   ├── dashboard/     # Dashboard components
│   ├── environmental/ # Environmental monitoring
│   └── ui/           # Reusable UI components
├── lib/               # Utilities and contexts
├── public/            # Static assets
└── styles/            # Global styles
```

## Deployment

The platform is deployed on Vercel. Visit the live demo at [https://coastal-guard-essths-sdc.vercel.app/](https://coastal-guard-essths-sdc.vercel.app/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.