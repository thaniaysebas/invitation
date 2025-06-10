import React from 'react';

export const HeartVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  </div>
);

export const ClockVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  </div>
);

export const CalendarVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-bounce-gentle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  </div>
);

export const CameraVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  </div>
);

export const DressVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-sway" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 2v4"/>
      <path d="M16 2v4"/>
      <rect x="6" y="6" width="12" height="16" rx="2"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  </div>
);

export const GiftVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-wiggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="20,12 20,22 4,22 4,12"/>
      <rect x="2" y="7" width="20" height="5"/>
      <line x1="12" y1="22" x2="12" y2="7"/>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
    </svg>
  </div>
);

export const ShareVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-ping-gentle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  </div>
);

export const RSVPVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-envelope" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  </div>
);

export const ThankYouVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-heartbeat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      <circle cx="9" cy="9" r="1"/>
      <circle cx="15" cy="9" r="1"/>
      <path d="M8 13a4 4 0 0 0 8 0"/>
    </svg>
  </div>
);

// Vectores adicionales que no se estaban usando pero mantengo por compatibilidad
export const FlowerVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6m0 6v6"/>
      <path d="M23 12h-6m-6 0H1"/>
      <path d="M20.49 7.51l-4.24 4.24m-4.24 4.24L7.51 20.49"/>
      <path d="M20.49 16.49l-4.24-4.24m-4.24-4.24L7.51 3.51"/>
    </svg>
  </div>
);

export const RingsVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="12" r="4"/>
      <circle cx="15" cy="12" r="4"/>
    </svg>
  </div>
);

export const LeafVector = () => (
  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
    <svg className="w-12 h-12 text-[var(--color-secondary)] animate-sway" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  </div>
);