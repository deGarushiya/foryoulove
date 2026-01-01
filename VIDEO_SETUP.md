# Video Setup Guide - 93MB Video File

## ✅ Code Already Updated!

I've updated your code to support **ALL video hosting options**. Just configure which one you want to use!

## How to Configure (Pick One):

### Option 1: YouTube Unlisted (RECOMMENDED) ⭐
**Best for:** Easy setup, fast loading, free, reliable

**Steps:**
1. Upload your video to YouTube as "Unlisted" (only people with link can see)
2. Get video ID from URL: `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
3. Open `assets/js/script.js`
4. Find `videoConfig` object (around line 157)
5. Update it to:
   ```javascript
   const videoConfig = {
       useLocalFile: false,
       useYouTube: true,
       youtubeId: 'YOUR_VIDEO_ID_HERE',  // ← Put your video ID here
   };
   ```

### Option 2: Vimeo
**Best for:** Better quality, more privacy, no ads

**Steps:**
1. Upload to Vimeo as "Unlisted" or "Only people with password"
2. Get video ID from URL: `https://vimeo.com/VIDEO_ID_HERE`
3. Open `assets/js/script.js`
4. Update `videoConfig` to:
   ```javascript
   const videoConfig = {
       useLocalFile: false,
       useVimeo: true,
       vimeoId: 'YOUR_VIDEO_ID_HERE',  // ← Put your video ID here
   };
   ```

### Option 3: Direct URL (Google Drive, Dropbox, etc.)
**Best for:** Using existing cloud storage

**Steps:**
1. Upload video to Google Drive or Dropbox
2. Get direct download link
3. Open `assets/js/script.js`
4. Update `videoConfig` to:
   ```javascript
   const videoConfig = {
       useLocalFile: false,
       useDirectUrl: true,
       directUrl: 'https://your-direct-link.com/video.mp4',  // ← Put your link here
   };
   ```

### Option 4: Local File (After Compression or Git LFS)
**Best for:** Keeping video in your repository

**Steps:**
1. Compress video using HandBrake (free): https://handbrake.fr/
   - Target: 20-30MB for easier upload
2. OR use Git LFS (already configured):
   ```bash
   git add assets/video/*.mp4
   git commit -m "Add video"
   git push
   ```
3. Keep default config (already set):
   ```javascript
   const videoConfig = {
       useLocalFile: true,  // ← Keep this
       localPath: 'assets/video/2025 with you.mp4',
   };
   ```

## My Recommendation:
**Use YouTube Unlisted** - It's the easiest, fastest, and most reliable option! No compression needed, no upload timeouts, and works perfectly with GitHub Pages.

## Current Configuration Location:
File: `assets/js/script.js` (around line 157-170)

The video player will automatically work with whichever option you configure!
