# MovieModal Component

## Overview
A fully responsive, theme-aware modal component for displaying movie details. Built with Bootstrap 5 utility classes and custom CSS for seamless light/dark mode transitions.

## Features

### 🎨 Theme Support
- **Light Mode**: Clean white background with dark text
- **Dark Mode**: Dark gray background (#1F2937) with light text
- Smooth transitions between themes
- Backdrop blur effect for both modes

### 📱 Responsive Design
- **Mobile (< 576px)**: 95% width, stacked layout
- **Tablet (768px)**: 80% width, optimized spacing
- **Desktop (1024px+)**: Fixed 640px width, centered

### ✨ User Experience
- **Keyboard Support**: Close with ESC key
- **Click Outside**: Close by clicking backdrop
- **Smooth Animations**: Fade-in with scale effect (0.95 → 1)
- **Body Scroll Lock**: Prevents background scrolling when modal is open
- **Focus Management**: Accessible focus states on interactive elements

## Component Structure

```tsx
<MovieModal 
  movie={movieObject}
  onClose={() => setIsModalOpen(false)}
  mode={isDarkMode}
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `movie` | `any` | Yes | Movie object from TMDB API |
| `onClose` | `() => void` | Yes | Callback function to close modal |
| `mode` | `boolean` | Yes | Theme mode (false = light, true = dark) |

### Movie Object Structure

```typescript
{
  title: string;           // Movie title
  name?: string;          // Alternative title
  poster_path: string;    // Poster image path
  overview: string;       // Movie description
  vote_average: number;   // Rating (0-10)
  vote_count: number;     // Number of votes
  release_date: string;   // Release date (YYYY-MM-DD)
  popularity: number;     // Popularity score
  original_language: string; // Language code
}
```

## Bootstrap Classes Used

### Layout
- `.modal-backdrop`: Fixed positioning overlay
- `.modal-dialog`: Centered dialog container
- `.modal-dialog-centered`: Vertical centering
- `.modal-dialog-scrollable`: Scrollable content
- `.modal-content`: Main content container
- `.modal-header`, `.modal-body`, `.modal-footer`: Section containers

### Spacing
- `.p-4`: Padding (1.5rem)
- `.mb-3`, `.mb-4`: Margin bottom
- `.gap-2`, `.gap-3`: Flexbox gap
- `.px-4`, `.py-2`: Horizontal/vertical padding

### Typography
- `.fw-semibold`: Font weight 600
- `.fw-medium`: Font weight 500
- `.fs-5`, `.fs-6`: Font sizes
- `.small`: Small text
- `.text-light`, `.text-dark`: Text colors
- `.text-muted`, `.text-secondary`: Muted colors

### Components
- `.btn`, `.btn-primary`, `.btn-outline-*`: Button variants
- `.btn-close`: Close button
- `.btn-close-white`: White close button for dark mode
- `.img-fluid`: Responsive image
- `.rounded-3`, `.rounded-4`: Border radius utilities
- `.shadow`, `.shadow-lg`: Box shadows

### Grid
- `.row`: Bootstrap grid row
- `.col-sm-6`: 6 columns on small screens
- `.g-3`: Gutter spacing

### Background & Colors
- `.bg-light`: Light background
- `.bg-dark`: Dark background
- `.bg-secondary`: Secondary color
- `.bg-opacity-10`: 10% opacity

## Custom CSS Classes

### Backdrop
```css
.modal-backdrop-light  /* Light mode backdrop with blur */
.modal-backdrop-dark   /* Dark mode backdrop with blur */
```

### Content
```css
.modal-content-light   /* Light theme content wrapper */
.modal-content-dark    /* Dark theme content wrapper */
```

### Animation
```css
@keyframes modalFadeIn /* Fade and scale animation */
```

## Color Palette

### Primary Colors
- **Primary Orange**: `#FF7A2F` (buttons, accents)
- **Primary Orange Hover**: `#FFA873`

### Light Mode
- **Background**: `#ffffff`
- **Text**: `#111827`
- **Backdrop**: `rgba(0, 0, 0, 0.4)`

### Dark Mode
- **Background**: `#1F2937`
- **Text**: `#F9FAFB`
- **Backdrop**: `rgba(0, 0, 0, 0.6)`

## Usage Example

```tsx
import { useState } from 'react';
import MovieModal from './MovieModal';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Movie grid or list */}
      <div onClick={() => handleMovieClick(movieData)}>
        Click to view movie
      </div>

      {/* Modal */}
      {isModalOpen && selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setIsModalOpen(false)}
          mode={darkMode}
        />
      )}
    </>
  );
}
```

## Accessibility

- ✅ Keyboard navigation (ESC to close)
- ✅ Focus management with visible outlines
- ✅ ARIA labels on close button
- ✅ Semantic HTML structure
- ✅ Color contrast ratios meet WCAG standards

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- React 18+
- Bootstrap 5.2+
- No additional third-party dependencies required

## Future Enhancements

- [ ] Add trailer video player integration
- [ ] Cast and crew information
- [ ] Similar movies section
- [ ] Watchlist/favorites functionality
- [ ] Share movie functionality
- [ ] Print-friendly layout
