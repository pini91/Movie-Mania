# Genre Tags Component - Documentation

A modern, pill-style genre selector component with light/dark theme support, smooth animations, and responsive behavior.

## Features

✨ **Modern Pill Design**
- Rounded pill shape with full border radius
- Subtle gradient backgrounds
- Soft inner glow effects
- Smooth hover and active states

🎨 **Theme Support**
- Fully theme-aware (light & dark modes)
- Gradient backgrounds adapt to theme
- Color-coded active states
- Optimized contrast and readability

📱 **Responsive Behavior**
- **Mobile (< 640px)**: 32px height, horizontal scroll
- **Small (≥ 640px)**: 34px height
- **Medium (≥ 768px)**: 36px height
- **Large (≥ 1024px)**: 38px height
- **XL (≥ 1280px)**: 40px height

🎯 **Interactive States**
- Default: Subtle gradient and border
- Hover: Scale up (1.02x) with color change
- Active: Primary orange gradient with bold font
- Focus: Accessible outline for keyboard navigation

## Component Structure

```tsx
interface Genre {
  id: number;
  name: string;
}

interface Props {
  genres: Genre[];
  mode: boolean; // false = light, true = dark
}
```

## Usage Example

```tsx
import Genres from './Genres';

function App() {
  const [mode, setMode] = useState(false);
  const [genres, setGenres] = useState([
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Thriller' }
  ]);

  return (
    <Genres genres={genres} mode={mode} />
  );
}
```

## Visual Design

### Light Mode

**Default State:**
- Background: Linear gradient `#FFFFFF` → `#F5F7FF`
- Border: `#E5E7EB` (gray-200)
- Text: `#374151` (gray-700)
- Shadow: Subtle outer + inner glow

**Hover State:**
- Background: Linear gradient `#FFFFFF` → `#EEF2FF`
- Border: `#818CF8` (secondary-400)
- Text: `#111827` (gray-900)
- Transform: Scale 1.02
- Shadow: Enhanced with secondary color

**Active State:**
- Background: Linear gradient `#FF8A47` → `#FF7A2F` (primary)
- Border: `#FF7A2F` (primary-500)
- Text: `#FFFFFF` (white)
- Font Weight: 600 (bold)
- Transform: Scale 1.02
- Shadow: Strong glow with primary color

### Dark Mode

**Default State:**
- Background: Linear gradient `#1C1E34` → `#121324`
- Border: `#2A2C44` (dark gray)
- Text: `#E5E7EB` (gray-200)
- Shadow: Stronger outer + subtle inner

**Hover State:**
- Background: Linear gradient `#222446` → `#161830`
- Border: `#6366F1` (secondary-500)
- Text: `#FFFFFF` (white)
- Transform: Scale 1.02
- Shadow: Enhanced with secondary glow

**Active State:**
- Background: Linear gradient `#FF7A2F` → `#F06624`
- Border: `#FF7A2F` (primary-500)
- Text: `#FFFFFF` (white)
- Font Weight: 600 (bold)
- Transform: Scale 1.02
- Shadow: Strong glow with primary color

## Color System

### Primary Palette (Orange)
- `50`: `#FFF5EC`
- `100`: `#FFE5D2`
- `200`: `#FFC8A6`
- `300`: `#FFA873`
- `400`: `#FF8A47`
- `500`: `#FF7A2F` ← Main active color
- `600`: `#F06624`
- `700`: `#C8531D`
- `800`: `#9E4017`
- `900`: `#7A3212`

### Secondary Palette (Indigo)
- `400`: `#818CF8` ← Light hover border
- `500`: `#6366F1` ← Dark hover border
- `600`: `#4F46E5`

### Grays
- `200`: `#E5E7EB` ← Light border default
- `700`: `#374151` ← Light text default
- `800`: `#1F2937`
- `900`: `#0F172A`

## Typography

| Property        | Value            |
|-----------------|------------------|
| Font Size (base)| 13px             |
| Font Size (md)  | 14px             |
| Font Size (xl)  | 15px             |
| Font Weight     | 500 (medium)     |
| Font Weight (active) | 600 (semibold) |
| Letter Spacing  | 0.2px            |
| Line Height     | 1                |
| Font Family     | system-ui        |

## Spacing & Sizing

### Tag Dimensions

| Breakpoint | Height | Padding X | Font Size |
|------------|--------|-----------|-----------|
| base       | 32px   | 12px      | 13px      |
| sm (640px) | 34px   | 14px      | 13px      |
| md (768px) | 36px   | 16px      | 14px      |
| lg (1024px)| 38px   | 18px      | 14px      |
| xl (1280px)| 40px   | 20px      | 15px      |

### Container Spacing
- Gap between tags: `8px`
- Row gap: `12px` (if multi-row)
- Container padding: `4px`

## Animations & Transitions

| Property          | Duration | Easing |
|-------------------|----------|--------|
| All properties    | 150ms    | ease   |
| Hover scale       | 150ms    | ease   |
| Active transition | 120ms    | ease   |
| Shadow            | 150ms    | ease   |

### Transform States
- Default: `scale(1)`
- Hover: `scale(1.02)`
- Active: `scale(1.02)`
- Press: `scale(0.98)`

## Responsive Behavior

### Desktop (≥ 768px)
```css
.genres-tag-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
```
Tags wrap to multiple rows as needed.

### Mobile (< 640px)
```css
.genres-tag-wrapper {
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```
Tags scroll horizontally with smooth touch scrolling.

## Accessibility

✅ **WCAG AA Compliant**
- Minimum tap target: 36px height
- Sufficient color contrast (4.5:1 for text)
- Focus states with visible outlines
- Keyboard navigation support
- ARIA attributes (`aria-pressed` for active state)

### Keyboard Navigation
- `Tab`: Navigate between tags
- `Enter/Space`: Select/deselect tag
- Focus indicator shows current selection

### Screen Reader Support
- Each tag is a button with proper role
- Active state communicated via `aria-pressed`
- Genre names are clear and descriptive

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Supports smooth scrolling on touch devices

## Customization

### Change Active Color

Edit `Genres.css`:

```css
/* Light mode active */
.genres-light .genre-tag.active {
  background: linear-gradient(135deg, YOUR_COLOR_1, YOUR_COLOR_2);
  border-color: YOUR_COLOR;
}

/* Dark mode active */
.genres-dark .genre-tag.active {
  background: linear-gradient(135deg, YOUR_COLOR_1, YOUR_COLOR_2);
  border-color: YOUR_COLOR;
}
```

### Adjust Tag Sizing

```css
.genre-tag {
  height: YOUR_HEIGHT;
  padding: YOUR_PADDING_Y YOUR_PADDING_X;
  font-size: YOUR_FONT_SIZE;
}
```

### Change Border Radius

```css
.genre-tag {
  border-radius: 12px; /* Instead of 9999px for less rounded */
}
```

## Component State Management

The component maintains its own `activeGenre` state:

```tsx
const [activeGenre, setActiveGenre] = useState<number | null>(null);
```

- Click a tag → Sets as active
- Click again → Deselects (sets to null)
- Only one genre can be active at a time

### Multiple Selection (Optional)

To allow multiple active genres:

```tsx
const [activeGenres, setActiveGenres] = useState<number[]>([]);

const handleGenreClick = (genreId: number) => {
  setActiveGenres(prev => 
    prev.includes(genreId) 
      ? prev.filter(id => id !== genreId)
      : [...prev, genreId]
  );
};

// Update className check:
className={`genre-tag ${activeGenres.includes(genre.id) ? 'active' : ''}`}
```

## Integration with Filtering

Example of using genre selection for filtering:

```tsx
function App() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [movies, setMovies] = useState([]);
  
  const filteredMovies = selectedGenre
    ? movies.filter(movie => movie.genreId === selectedGenre)
    : movies;
    
  return (
    <>
      <Genres 
        genres={genres} 
        mode={mode}
        onGenreSelect={setSelectedGenre}
      />
      <MovieList movies={filteredMovies} />
    </>
  );
}
```

## Performance Optimization

- Uses CSS transforms (GPU-accelerated)
- Minimal re-renders with proper React hooks
- Efficient gradient rendering
- Smooth scrolling optimized for mobile

## Future Enhancements

- [ ] Icon support (prepend icons to genre names)
- [ ] Badge counts (show number of movies per genre)
- [ ] Drag to reorder genres
- [ ] Genre color coding (unique color per genre)
- [ ] Animation entrance effects
- [ ] Favorites/pinned genres
- [ ] Search/filter within genres

## Files Structure

```
src/
├── Genres.tsx       # Main component
├── Genres.css       # Styling with theme support
└── App.tsx          # Integration example
```

## Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x"
}
```

No additional dependencies required! Uses vanilla CSS and React hooks.

## Credits

Design inspired by modern streaming platforms (Netflix, Disney+, HBO Max) with a focus on:
- Minimal, clean aesthetic
- Smooth micro-interactions
- Mobile-first responsive design
- Accessibility standards
