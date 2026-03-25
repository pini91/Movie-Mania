# FamilyPopcorn Component - Updates

## Overview
Updated the FamilyPopcorn component to be centered below the Genres section and to disappear when a genre is selected.

## Changes Made

### 1. State Management (App.tsx)
**Lifted state up to App component:**
```tsx
const [activeGenre, setActiveGenre] = useState<number | null>(null)
```

This allows both Genres and FamilyPopcorn components to react to genre selection.

**Props passed:**
```tsx
<Genres 
  genres={genres} 
  mode={mode}
  activeGenre={activeGenre}
  onGenreClick={setActiveGenre}
/>
<FamilyPopcorn isVisible={activeGenre === null} />
```

### 2. Genres Component (Genres.tsx)
**Updated Props Interface:**
```tsx
interface Props {
    genres: Genre[];
    mode: boolean;
    activeGenre: number | null;        // NEW
    onGenreClick: (genreId: number | null) => void;  // NEW
}
```

**Removed local state** and used props instead:
- Removed: `const [activeGenre, setActiveGenre] = useState<number | null>(null);`
- Now receives `activeGenre` and `onGenreClick` from parent

### 3. FamilyPopcorn Component (FamilyPopcorn.tsx)
**Added Props Interface:**
```tsx
interface Props {
  isVisible: boolean;
}
```

**Conditional Rendering:**
```tsx
const FamilyPopcorn = ({ isVisible }: Props) => {
  if (!isVisible) return null;  // Hide when genre is selected
  
  return (
    <div className="family-popcorn">
      {/* ... */}
    </div>
  );
};
```

### 4. CSS Updates (FamilyPopcorn.css)
**Changed from fixed positioning to centered flow:**

**Before:**
```css
.family-popcorn {
  position: fixed;
  right: 20rem;
  top: 50%;
  transform: translateY(-50%);
  max-width: 600px;
  z-index: 100;
}
```

**After:**
```css
.family-popcorn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  padding: 20px;
  max-width: 800px;
  width: 100%;
}
```

**Added responsive behavior and hover effect:**
```css
.family-image:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .family-popcorn {
    margin: 20px auto;
    padding: 10px;
  }
}
```

## Behavior

### Before:
- FamilyPopcorn was fixed-positioned on the right side
- Always visible regardless of genre selection
- Not responsive or centered

### After:
- ✅ Centered below Genres section
- ✅ Disappears when any genre is clicked
- ✅ Reappears when genre is deselected
- ✅ Responsive design (adapts to mobile)
- ✅ Smooth hover effect
- ✅ Properly integrated in document flow

## User Flow

1. **Initial State:**
   ```
   [Nav Bar]
   [Genres: Action | Comedy | Drama | ...]
   [FamilyPopcorn Image - Visible ✓]
   ```

2. **User clicks "Action" genre:**
   ```
   [Nav Bar]
   [Genres: [ACTION] | Comedy | Drama | ...]
   [FamilyPopcorn Image - Hidden ✗]
   ```

3. **User clicks "Action" again (deselect):**
   ```
   [Nav Bar]
   [Genres: Action | Comedy | Drama | ...]
   [FamilyPopcorn Image - Visible ✓]
   ```

## Layout Structure

```
┌─────────────────────────────────────┐
│ [Sidebar Menu]                      │
├─────────────────────────────────────┤
│ [Nav Bar with Search & Toggle]      │
├─────────────────────────────────────┤
│ <main>                              │
│   ┌─────────────────────────────┐   │
│   │ Genres Section              │   │
│   │ [Tag] [Tag] [Tag] [Tag]     │   │
│   └─────────────────────────────┘   │
│                                     │
│   ┌─────────────────────────────┐   │
│   │    FamilyPopcorn Image      │   │
│   │   (centered, responsive)    │   │
│   │  (hidden when genre active) │   │
│   └─────────────────────────────┘   │
│ </main>                             │
└─────────────────────────────────────┘
```

## Responsive Behavior

### Desktop (≥ 768px)
- Image max-width: 600px
- Margin: 40px auto
- Padding: 20px
- Full border radius: 16px

### Mobile (< 768px)
- Image fills container (with padding)
- Margin: 20px auto
- Padding: 10px
- Smaller border radius: 12px

## CSS Properties

### Centering Technique
```css
display: flex;
justify-content: center;
align-items: center;
margin: 40px auto;
```

### Image Styling
```css
width: 100%;
max-width: 600px;
border-radius: 16px;
box-shadow: 0 20px 40px rgba(0,0,0,0.3);
transition: opacity 0.3s ease, transform 0.3s ease;
```

### Hover Effect
```css
.family-image:hover {
  transform: scale(1.02);
}
```

## Benefits

1. **Better UX**: Image doesn't obstruct content when browsing genres
2. **Centered Layout**: Properly aligned in the content flow
3. **Responsive**: Adapts to different screen sizes
4. **Smooth Transitions**: Hover effects for better interactivity
5. **Clean Code**: State managed at the appropriate level
6. **Reusable**: Props-based visibility control

## Testing Checklist

- [x] FamilyPopcorn appears on initial load
- [x] FamilyPopcorn disappears when any genre is clicked
- [x] FamilyPopcorn reappears when genre is deselected
- [x] Image is centered horizontally
- [x] Image is positioned below Genres
- [x] Responsive on mobile devices
- [x] Hover effect works
- [x] No TypeScript errors
- [x] No console errors
- [ ] Universal title search, not only by title and genre

## Future Enhancements

- [X] Add fade-in/fade-out animation when showing/hiding
- [ ] Add loading state while image loads
- [X] Make image clickable (link to featured content)
- [ ] Add caption or title overlay
- [X] Support multiple images with carousel
- [ ] Add skeleton loader for better UX
