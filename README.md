# Surprise Website 💕 - Interactive App

A beautiful, interactive, app-like website to share special memories with someone special. Perfect for showcasing photos and videos in an engaging, surprise presentation with click-to-reveal cards, animations, and interactive features.

## ✨ Features

### Interactive Elements
- 🎴 **Interactive Flip Cards** - Click cards to reveal special messages and images
- 🎆 **Particle Effects** - Animated particle background with connecting lines
- 💕 **Floating Hearts** - Continuous floating heart animation on landing page
- 🎊 **Confetti Effects** - Celebration confetti on special moments
- 🎵 **Music Player** - Optional background music toggle
- 📱 **Swipe Gestures** - Swipe left/right on mobile for navigation
- ⚡ **Smooth Animations** - Scroll-triggered animations throughout

### Media Features
- 📸 **Image Gallery** - Beautiful grid layout with lightbox viewing
- 🎥 **Video Gallery** - Embedded video players with controls
- 🔍 **Lightbox Viewer** - Full-screen image viewing with keyboard navigation
- ⌨️ **Keyboard Navigation** - Arrow keys to navigate, ESC to close

### Design
- 🎨 **Modern, Romantic Design** - Purple/pink gradients with elegant typography
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🌟 **Animated Landing Page** - Starry background with entrance animation
- 💌 **Custom Message Section** - Personalizable message area with confetti button

## 🚀 Setup Instructions

### 1. Organize Your Images into Albums

**Option A: Using Folders (Recommended)**
1. Create folders inside `assets/images/` - each folder becomes an album
2. Place your images inside each folder
3. Example structure:
   ```
   assets/images/
   ├── Our First Date/
   │   ├── date1.jpg
   │   └── date2.jpg
   ├── Vacation 2024/
   │   ├── vacation1.jpg
   │   └── vacation2.jpg
   └── Special Moments/
       ├── moment1.jpg
       └── moment2.jpg
   ```
4. Run the helper script to auto-generate albums:
   ```bash
   node generate-image-list.js
   ```

**Option B: All Images in Root**
- If you place images directly in `assets/images/` (not in folders), they'll automatically be grouped into an "All Memories" album
- Run `node generate-image-list.js` to update

**Supported formats:** JPG, JPEG, PNG, GIF, WebP

### 2. Add Your Videos

1. Place your videos in the `assets/videos/` folder
2. Recommended format: MP4 (for best browser compatibility)
3. Open `assets/js/script.js`
4. Find the `videoFiles` array (around line 210)
5. Add your video filenames:

```javascript
const videoFiles = [
    'your-video-1.mp4',
    'your-video-2.mp4',
    // Add more filenames here
];
```

### 3. Customize Interactive Cards

1. Open `assets/js/script.js`
2. Find the `cardsData` array (around line 45)
3. Customize each card with:
   - `frontText`: Emoji or text to show on front
   - `backContent`: 'image', 'message', or 'both'
   - `image`: Filename from assets/images/ (optional)
   - `message`: Message to display when flipped

Example:
```javascript
const cardsData = [
    {
        frontText: '💕',
        backContent: 'image',
        image: 'special-moment.jpg',
        message: 'Our first date'
    },
    {
        frontText: '🌟',
        backContent: 'message',
        image: '',
        message: 'You make every day special!'
    }
];
```

### 4. Add Background Music (Optional)

1. Place your music file in `assets/audio/` folder
2. Recommended format: MP3
3. Open `index.html`
4. Find the `<audio>` tag (around line 45)
5. Uncomment and update the source:

```html
<audio id="backgroundMusic" loop>
    <source src="assets/audio/background.mp3" type="audio/mpeg">
</audio>
```

### 5. Customize the Message

1. Open `index.html`
2. Find the "Message Section" (around line 130)
3. Edit the message content inside the `.message-content` div
4. Personalize the text and signature

### 6. Customize Colors (Optional)

1. Open `assets/css/style.css`
2. Find the CSS variables at the top (around line 4)
3. Modify the color values:

```css
:root {
    --primary-color: #ff6b9d;      /* Main accent color */
    --secondary-color: #c44569;    /* Secondary accent */
    --accent-color: #f8b500;       /* Highlight color */
    /* ... more colors */
}
```

## 🎮 Running the Website

### Option 1: Simple HTTP Server (Recommended for development)

If you have Python installed:

```bash
# Navigate to the surprise-website folder
cd ~/Desktop/surprise-website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Option 2: PHP Server

If you have PHP installed:

```bash
cd ~/Desktop/surprise-website
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 3: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File Opening

Simply open `index.html` in your web browser (some features may be limited due to CORS restrictions).

## 📦 Deployment to GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to repository **Settings** → **Pages**
4. Select the **main branch** as source
5. Your site will be available at: `https://yourusername.github.io/repository-name`

## 📁 File Structure

```
surprise-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # All styling
│   ├── js/
│   │   ├── script.js      # Main JavaScript functionality
│   │   └── particles.js   # Particle system
│   ├── images/            # Put your images here
│   ├── videos/            # Put your videos here
│   └── audio/             # Put background music here (optional)
└── README.md              # This file
```

## 🎯 Interactive Features Guide

### Click-to-Reveal Cards
- Cards appear in the "Click to Reveal" section
- Click any card to flip and see the hidden content
- Cards can reveal images, messages, or both
- Particle burst effect plays when cards are flipped

### Music Control
- Music toggle button is in the bottom-right corner
- Click to play/pause background music
- Button shows animation when music is playing

### Confetti
- Click the 🎉 button in the message section to trigger confetti
- Confetti also appears when entering the main content

### Image Lightbox
- Click any image in the gallery to view it full-screen
- Use arrow keys or buttons to navigate between images
- Swipe left/right on mobile devices
- Press ESC or click outside to close

### Swipe Gestures (Mobile)
- Swipe left/right on images in lightbox mode to navigate
- Works on touch devices

## 💡 Tips

- **Image Optimization**: Compress your images before adding them to keep load times fast
- **Video Optimization**: Consider compressing videos or using lower resolutions for web
- **Naming**: Use descriptive filenames without spaces (use hyphens or underscores)
- **File Sizes**: Keep individual files under 5MB for best performance
- **Privacy**: Remember that if you deploy to GitHub Pages, the repository will be public by default
- **Music**: Keep audio files under 5MB for faster loading
- **Cards**: You can add as many interactive cards as you want - just add more objects to the `cardsData` array

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- The particle system runs continuously for a dynamic background
- All animations are optimized for smooth performance
- The website is fully responsive and works great on mobile devices
- Interactive cards support both images and text messages

## 📄 License

This is a personal project. Feel free to use and modify as you wish!

---

Made with ❤️ for someone special