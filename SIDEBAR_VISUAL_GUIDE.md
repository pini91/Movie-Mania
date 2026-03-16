# Sidebar Navigation - Visual Guide

## Component Structure

```
┌─────────────────────────────┐
│                             │
│  [Menu Section]             │
│  🏠 Home            ━━━     │  ← Active item with indicator
│  🧭 Discover                │
│  📦 Coming soon             │
│                             │
│  [Library Section]          │
│  📦 Watch later             │
│  🕐 History                 │
│  ❤️  Liked                  │
│  🏆 Top rated               │
│                             │
│  [General Section]          │
│  ⚙️  Settings               │
│  🎧 Help center             │
│                             │
│                             │  ← Spacer (flex-grow)
│                             │
│  🚪 Logout                  │
│                             │
└─────────────────────────────┘
```

## Responsive Behavior

### Mobile (< 640px) - Icon Only
```
┌──────┐
│      │
│  🏠  │
│  🧭  │
│  📦  │
│      │
│  📦  │
│  🕐  │
│  ❤️   │
│  🏆  │
│      │
│  ⚙️   │
│  🎧  │
│      │
│      │
│      │
│  🚪  │
│      │
└──────┘
72px wide
```

### Tablet+ (≥ 640px) - Full Labels
```
┌─────────────────────┐
│                     │
│  🏠  Home       ━━━ │
│  🧭  Discover       │
│  📦  Coming soon    │
│                     │
│  📦  Watch later    │
│  🕐  History        │
│  ❤️   Liked         │
│  🏆  Top rated      │
│                     │
│  ⚙️   Settings      │
│  🎧  Help center    │
│                     │
│                     │
│                     │
│  🚪  Logout         │
│                     │
└─────────────────────┘
240px - 280px wide
```

## Theme Comparison

### Light Mode
- Background: White → Light Gray gradient
- Text: Gray (default) → Orange (active)
- Subtle shadows and hover states
- Professional, clean appearance

### Dark Mode
- Background: Dark Navy → Black gradient
- Text: Light Gray (default) → Light Orange (active)
- Stronger glow effects
- Modern, cinematic feel

## Active State Indicators

```
┌─────────────────────────┐
│  🏠  Home          ━━━  │  ← Vertical pill on right
│                         │     - 3px wide
│  🧭  Discover           │     - 18px tall
│                         │     - Rounded ends
└─────────────────────────┘     - Glowing effect
```

## Interaction States

1. **Default**: Gray icon and text
2. **Hover**: Slight background tint, darker text
3. **Active**: Orange color, background tint, indicator pill
4. **Focus**: Outline for keyboard navigation

## Color Palette

### Light Mode
- Primary Active: `#FF7A2F` (Orange)
- Text Default: `#6B7280` (Gray)
- Text Hover: `#374151` (Dark Gray)
- Background: `#FFFFFF` → `#F7F8FB`

### Dark Mode
- Primary Active: `#FFA873` (Light Orange)
- Text Default: `#9CA3AF` (Light Gray)
- Text Hover: `#E5E7EB` (Lighter Gray)
- Background: `#141526` → `#0D0E1A`

## Animation Details

- **Hover**: 150ms smooth transition
- **Active Indicator**: 180ms slide-in from left
- **Colors**: 120ms fade transition
- **Mobile tap**: Subtle scale down (0.98)

## Spacing System

```
Padding:
├─ Sidebar: 24px top/bottom, 20px left/right
├─ Items: 10px horizontal
└─ Icon-Text gap: 14px

Gaps:
├─ Between items: 6px
└─ Between sections: 20px
```

## Typography

```
Section Labels:
- Size: 12px
- Weight: 500
- Tracking: 0.5px
- Transform: Uppercase
- Opacity: 70%

Item Labels:
- Size: 14px
- Weight: 500
- Tracking: 0.2px
```
