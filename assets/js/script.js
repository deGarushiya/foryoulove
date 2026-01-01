// ============================================
// Global Variables
// ============================================
let currentPage = 'welcome-page';
let currentImages = [];
let currentImageIndex = 0;
let currentAlbum = null;
let albumsData = {}; // Will be populated from generate-image-list.js

// Surprise messages for clickable hearts/stars
const surpriseMessages = [
    "You're beautiful 💕",
    "You make me happy 🌟",
    "I'm lucky to have you 💖",
    "You're amazing ✨",
    "I love your smile 😊",
    "You're special to me 💝",
    "Thank you for being you 🌸",
    "You're perfect just as you are 💗"
];

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    loadAlbums();
    setupLightbox();
    
    // Ensure Enter button works with fallback listener
    const enterBtn = document.querySelector('.enter-btn');
    if (enterBtn) {
        enterBtn.addEventListener('click', function(e) {
            if (typeof goToHome === 'function') {
                goToHome();
            }
        });
    }
});

// ============================================
// Floating Hearts Background
// ============================================
function createFloatingHearts() {
    const heartsBg = document.querySelector('.floating-hearts-bg');
    if (!heartsBg) return;
    
    const hearts = ['💕', '💖', '💗', '💓', '💝', '💞'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heartsBg.appendChild(heart);
    }
}

// ============================================
// Page Navigation
// ============================================
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        setTimeout(() => {
            targetPage.classList.add('active');
        }, 50);
        currentPage = pageId;
    }
}

function goToHome() {
    showPage('home-page');
}

// Ensure goToHome is in global scope for onclick handlers
window.goToHome = goToHome;

function goToMessages() {
    showPage('messages-page');
}

function goToSurprise() {
    showPage('surprise-page');
    createClickableHearts();
}

function showEnvelope() {
    const envelopeContainer = document.getElementById('envelope-container');
    if (envelopeContainer) {
        envelopeContainer.classList.remove('hidden');
        envelopeContainer.classList.add('active');
    }
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const envelopeFlap = document.getElementById('envelope-flap');
    const envelopeLetter = document.getElementById('envelope-letter');
    const envelopeContainer = document.getElementById('envelope-container');
    
    if (!envelope || !envelopeFlap || !envelopeLetter) return;
    
    // Prevent multiple clicks
    envelope.style.pointerEvents = 'none';
    envelope.style.animation = 'none';
    envelope.classList.add('opening');
    
    // Letter pops up from inside - envelope stays intact
    requestAnimationFrame(() => {
        envelopeLetter.style.transform = 'translateY(-400px) scale(1.8)';
        envelopeLetter.style.opacity = '0';
        envelopeLetter.style.zIndex = '100';
    });
    
    // Show the letter page after letter pops up
    setTimeout(() => {
        if (envelopeContainer) {
            envelopeContainer.classList.remove('active');
            setTimeout(() => {
                envelopeContainer.classList.add('hidden');
                // Reset envelope for next time
                envelope.classList.remove('opening');
                envelopeLetter.style.transform = '';
                envelopeLetter.style.opacity = '1';
                envelopeLetter.style.zIndex = '2';
                envelope.style.animation = 'envelopeBounce 1.2s ease-in-out infinite';
                envelope.style.pointerEvents = 'auto';
            }, 300);
        }
        showPage('letter-page');
    }, 1500);
}

function goToLetter() {
    showPage('letter-page');
}

function goToFinal() {
    showPage('final-page');
}

// ============================================
// Video Player
// ============================================
function playVideo(videoName) {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    
    if (!videoModal || !videoPlayer) return;
    
    // Try common video extensions (mp4 is most common, so try it first)
    const extensions = ['mp4', 'mov', 'webm', 'mkv', 'avi'];
    const videoPath = `assets/video/${videoName}`;
    
    // Default to mp4 (most common format)
    const videoSrc = `${videoPath}.mp4`;
    
    videoPlayer.src = videoSrc;
    if (videoTitle) {
        videoTitle.textContent = videoName;
    }
    
    // Show modal
    videoModal.classList.remove('hidden');
    setTimeout(() => {
        videoModal.classList.add('active');
        videoPlayer.play().catch(err => {
            console.log('Video autoplay prevented:', err);
            // If autoplay fails, user can click play manually
        });
    }, 50);
}

function closeVideoModal() {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    
    if (videoModal && videoPlayer) {
        videoModal.classList.remove('active');
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        setTimeout(() => {
            videoModal.classList.add('hidden');
        }, 300);
    }
}

// ============================================
// Card Interactions
// ============================================
function openCard(cardType) {
    switch(cardType) {
        case 'click-me':
            showModal('click-me-modal');
            break;
        case 'secret':
            showModal('secret-modal');
            break;
        case 'us':
            showModal('us-modal');
            loadAlbums(); // Load pictures when "Together" is clicked
            break;
    }
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.add('active');
        }, 50);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// ============================================
// Surprise Page - Clickable Hearts/Stars
// ============================================
function createClickableHearts() {
    const clickableArea = document.getElementById('clickable-area');
    if (!clickableArea) return;
    
    clickableArea.innerHTML = '';
    
    // Create clickable hearts and stars
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = Math.random() > 0.5 ? 'clickable-heart' : 'clickable-star';
        element.textContent = element.className === 'clickable-heart' ? '💕' : '⭐';
        element.style.left = Math.random() * 80 + 10 + '%';
        element.style.top = Math.random() * 80 + 10 + '%';
        element.style.animationDelay = Math.random() * 3 + 's';
        element.onclick = () => revealSurpriseMessage(element);
        clickableArea.appendChild(element);
    }
}

function revealSurpriseMessage(element) {
    const messagesContainer = document.getElementById('surprise-messages');
    if (!messagesContainer) return;
    
    // Get random message
    const message = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = 'surprise-message';
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    
    // Create confetti effect
    createConfetti(element);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(-20px)';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
    
    // Animate clicked element
    element.style.transform = 'scale(1.5) rotate(360deg)';
    element.style.opacity = '0.5';
    setTimeout(() => {
        element.style.transform = '';
        element.style.opacity = '1';
    }, 500);
}

function createConfetti(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = centerX + 'px';
        confetti.style.top = centerY + 'px';
        
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 50 + Math.random() * 50;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        confetti.style.setProperty('--x', x + 'px');
        confetti.style.setProperty('--y', y + 'px');
        confetti.style.backgroundColor = ['#FFB6C1', '#E6E6FA', '#B0E0E6', '#FFC0CB'][Math.floor(Math.random() * 4)];
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 2000);
    }
}

// ============================================
// Albums Loading
// ============================================
function loadAlbums() {
    const albumsContainer = document.getElementById('albums-container');
    if (!albumsContainer) return;
    
    const albumNames = Object.keys(albumsData);
    if (albumNames.length === 0) {
        albumsContainer.innerHTML = '<p style="text-align: center; color: var(--text-light);">No albums yet. Run generate-image-list.js to create albums.</p>';
        return;
    }
    
    albumsContainer.innerHTML = '';
    
    albumNames.forEach((albumName, index) => {
        const albumCard = createAlbumCard(albumName, albumsData[albumName], index);
        albumsContainer.appendChild(albumCard);
    });
}

function createAlbumCard(albumName, images, index) {
    const albumCard = document.createElement('div');
    albumCard.className = 'album-card';
    albumCard.onclick = () => showAlbumPhotos(albumName);
    
    const albumCover = document.createElement('div');
    albumCover.className = 'album-cover';
    
    if (images.length > 0) {
        const img = document.createElement('img');
        img.src = `assets/images/${albumName}/${images[0]}`;
        img.alt = albumName;
        img.onerror = function() {
            albumCover.innerHTML = '<div style="font-size: 3rem;">📁</div>';
        };
        albumCover.appendChild(img);
    } else {
        albumCover.innerHTML = '<div style="font-size: 3rem;">📁</div>';
    }
    
    const albumInfo = document.createElement('div');
    albumInfo.className = 'album-info';
    
    const albumTitle = document.createElement('div');
    albumTitle.className = 'album-title';
    albumTitle.textContent = albumName;
    
    const albumCount = document.createElement('div');
    albumCount.className = 'album-count';
    albumCount.textContent = `${images.length} ${images.length === 1 ? 'photo' : 'photos'}`;
    
    albumInfo.appendChild(albumTitle);
    albumInfo.appendChild(albumCount);
    
    albumCard.appendChild(albumCover);
    albumCard.appendChild(albumInfo);
    
    return albumCard;
}

function showAlbumPhotos(albumName) {
    closeModal('us-modal');
    
    const images = albumsData[albumName] || [];
    currentAlbum = albumName;
    currentImages = images.map(img => `${albumName}/${img}`);
    
    const galleryGrid = document.getElementById('album-gallery-grid');
    const albumTitle = document.getElementById('album-modal-title');
    
    if (galleryGrid && albumTitle) {
        albumTitle.textContent = albumName;
        galleryGrid.innerHTML = '';
        
        images.forEach((filename, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.onclick = () => openLightbox(index);
            
            const img = document.createElement('img');
            img.src = `assets/images/${albumName}/${filename}`;
            img.alt = `${albumName} - ${index + 1}`;
            img.loading = 'lazy';
            
            img.onerror = function() {
                galleryItem.style.display = 'none';
            };
            
            galleryItem.appendChild(img);
            galleryGrid.appendChild(galleryItem);
        });
        
        showModal('album-photos-modal');
    }
}

function showAlbumsView() {
    closeModal('album-photos-modal');
    setTimeout(() => {
        showModal('us-modal');
    }, 300);
}

function closeAlbumPhotos() {
    closeModal('album-photos-modal');
}

// ============================================
// Lightbox
// ============================================
function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            showPreviousImage();
        });
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', function(e) {
            e.stopPropagation();
            showNextImage();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
}

function openLightbox(index) {
    if (currentImages.length === 0) return;
    
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    if (!lightbox || !lightboxImage) return;
    
    lightboxImage.src = `assets/images/${currentImages[currentImageIndex]}`;
    lightbox.classList.remove('hidden');
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 50);
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
}

function showPreviousImage() {
    if (currentImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage) {
        lightboxImage.src = `assets/images/${currentImages[currentImageIndex]}`;
    }
}

function showNextImage() {
    if (currentImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    const lightboxImage = document.getElementById('lightbox-image');
    if (lightboxImage) {
        lightboxImage.src = `assets/images/${currentImages[currentImageIndex]}`;
    }
}
