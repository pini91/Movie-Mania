# Sidebar Navigation - Movie Browsing App

A modern, responsive sidebar navigation component with light/dark theme support, built with React, TypeScript, Bootstrap, and custom CSS.

## Features

✨ **Modern Design**
- Gradient backgrounds (light & dark themes)
- Smooth animations and transitions
- Active state indicators with glow effects
- Minimalistic iconography using FontAwesome

🎨 **Theme Support**
- Fully theme-aware with light and dark modes
- Seamless color transitions
- Optimized contrast for accessibility

📱 **Responsive Behavior**
- **Mobile (< 640px)**: Icon-only collapsed sidebar (72px)
- **Small (≥ 640px)**: Labels appear (240px)
- **Medium (≥ 768px)**: Comfortable spacing (260px)
- **Large (≥ 1024px)**: Full width with expanded padding (280px)

🎯 **Navigation Sections**
- **Menu**: Home, Discover, Coming soon
- **Library**: Watch later, History, Liked, Top rated
- **General**: Settings, Help center
- **Action**: Logout (bottom-aligned)

## File Structure

```
src/
├── Menu.tsx              # Main sidebar component
├── Menu.css              # Comprehensive styling
├── data/
│   └── menuData.ts       # Navigation data configuration
└── App.tsx               # Integration example
```

## Component Usage

### Basic Implementation

```tsx
import Menu from './Menu';

function App() {
  const [mode, setMode] = useState(false); // false = light, true = dark
  
  return (
    <>
      <Menu mode={mode} />
      {/* Other components */}
    </>
  );
}
```

### Props

| Prop   | Type      | Required | Description                          |
|--------|-----------|----------|--------------------------------------|
| `mode` | `boolean` | Yes      | Theme mode: `false` for light, `true` for dark |

## Styling Details

### Color System

**Light Mode:**
- Background: Linear gradient from `#FFFFFF` to `#F7F8FB`
- Text (default): `#6B7280`
- Text (hover): `#374151`
- Text (active): `#FF7A2F` (primary orange)
- Active indicator: `#FF7A2F` with glow

**Dark Mode:**
- Background: Linear gradient from `#141526` to `#0D0E1A`
- Text (default): `#9CA3AF`
- Text (hover): `#E5E7EB`
- Text (active): `#FFA873` (lighter orange)
- Active indicator: `#FFA873` with glow

### Spacing & Sizing

- **Section gap**: 20px
- **Item gap**: 6px
- **Icon-text gap**: 14px
- **Item height**: 44px (minimum tap target)
- **Icon size**: 20px
- **Border radius**: 10px (items), 24px (sidebar corners)

### Animations

- **Hover transition**: 150ms ease
- **Active indicator**: Slide-in 180ms ease
- **Icon/text color**: 120ms ease
- **Sidebar width**: 300ms ease (responsive transitions)

## Customization

### Adding New Menu Items

Edit `src/data/menuData.ts`:

```typescript
import { faYourIcon } from '@fortawesome/free-solid-svg-icons';

export const menuData: MenuSection[] = [
  {
    label: 'Your Section',
    items: [
      { 
        name: 'Your Item', 
        icon: faYourIcon, 
        path: '/your-path' 
      }
    ]
  }
];
```

### Changing Colors

Edit `src/Menu.css` to modify theme colors:

```css
/* Light mode active state */
.sidebar-light .sidebar-item.active {
  color: #YOUR_COLOR;
}

/* Dark mode active state */
.sidebar-dark .sidebar-item.active {
  color: #YOUR_COLOR;
}
```

### Adjusting Responsive Breakpoints

Modify breakpoints in `Menu.css`:

```css
@media (min-width: YOUR_BREAKPOINT) {
  .sidebar {
    width: YOUR_WIDTH;
  }
}
```

Also update `App.css` to match sidebar widths.

## Accessibility

✅ **WCAG AA Compliant**
- Minimum tap target: 44px
- Sufficient color contrast in both themes
- Focus states with visible outlines
- Keyboard navigation support

### Keyboard Navigation

- `Tab`: Navigate through menu items
- `Enter/Space`: Activate menu item
- Focus indicators show current selection

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "@fortawesome/react-fontawesome": "^0.x",
  "@fortawesome/free-solid-svg-icons": "^6.x",
  "bootstrap": "^5.x"
}
```

## Integration Notes

1. **Layout Adjustment**: The sidebar is fixed-positioned. Main content has left margin applied via `App.css`
2. **Z-Index**: Sidebar uses `z-index: 1000` to stay above content
3. **Scrolling**: Sidebar content scrolls independently with custom scrollbar styling
4. **Active State**: Component maintains its own active state. Can be lifted to parent if needed.

## Performance

- Uses CSS transitions (GPU-accelerated)
- Minimal re-renders with proper React hooks
- Optimized icon rendering with FontAwesome
- No heavy dependencies or libraries

## Future Enhancements

- [ ] Add route integration (React Router)
- [x] Collapsible sections
- [x] Search functionality
- [ ] User profile section at top
- [ ] Notification badges


## Credits

Design inspired by modern streaming platforms with a focus on:
- Clean, minimal aesthetic
- Smooth micro-interactions
- Accessibility-first approach
- Mobile-responsive design patterns
