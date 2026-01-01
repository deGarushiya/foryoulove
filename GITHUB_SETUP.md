# GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Enter repository name (e.g., "surprise-website")
3. Choose **Public** (required for free GitHub Pages) or Private
4. **DO NOT** check "Initialize with README" - we already have files
5. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands (replace YOUR_USERNAME and REPOSITORY_NAME):

```bash
cd ~/Desktop/surprise-website

# Add the remote repository (replace with your actual GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Branch: main** and **Folder: / (root)**
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

## Important Notes

- The repository will be **public** by default (if you chose public)
- All your images and videos will be publicly accessible
- GitHub Pages may take a few minutes to deploy
- After enabling Pages, wait 1-2 minutes, then refresh to see your site

## Future Updates

To update your website after making changes:

```bash
cd ~/Desktop/surprise-website
git add .
git commit -m "Your update message"
git push
```

GitHub Pages will automatically rebuild your site after each push.
