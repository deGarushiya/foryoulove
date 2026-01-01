// ============================================
// Global Variables
// ============================================
let currentPage = 'welcome-page';
let currentImages = [];
let currentImageIndex = 0;
let currentAlbum = null;
// Albums data - permanently hardcoded (no need to run generate-image-list.js)
let albumsData = {
    "ALAMINOS": [
        "IMG_20250809_151736_819.jpg",
        "IMG_20250809_151736_996.jpg",
        "IMG_20250809_151737_011.jpg",
        "IMG_20250809_151737_046.jpg",
        "IMG_20250809_151737_191.jpg",
        "IMG_20250809_151737_201.jpg",
        "IMG_20250809_151737_250.jpg",
        "IMG_20250809_151737_356.jpg",
        "IMG_20250809_151737_649.jpg",
        "IMG_20250809_151737_740.jpg",
        "IMG_20250809_151747_030.jpg",
        "IMG_20250809_151747_084.jpg",
        "IMG_20250809_151747_097.jpg",
        "IMG_20250809_151747_597.jpg",
        "IMG_20250809_151747_778.jpg",
        "IMG_20250809_151747_832.jpg",
        "IMG_20250809_151747_985.jpg",
        "IMG_20250917_154025_455.jpg",
        "IMG_20250917_154026_033.jpg",
        "IMG_20250917_154026_149.jpg",
        "IMG_20250917_154026_201.jpg",
        "IMG_20250917_154033_746.jpg",
        "IMG_20250917_154033_756.jpg",
        "IMG_20250917_154033_767.jpg",
        "IMG_20250917_154034_350.jpg",
        "IMG_20251118_020949_163.jpg",
        "IMG_20251118_020949_205.jpg",
        "IMG_20251118_020949_244.jpg",
        "IMG_20251118_020949_507.jpg",
        "IMG_20251118_020949_531.jpg",
        "IMG_20251118_020949_778.jpg",
        "IMG_20251118_020949_859.jpg"
    ],
    "BAGUIO WITH YOU": [
        "IMG_20250615_213738_669.jpg",
        "IMG_20250615_213738_846.jpg",
        "IMG_20250615_213750_616.jpg",
        "IMG_20250615_213800_621.jpg",
        "IMG_20250615_213800_749.jpg",
        "IMG_20250615_213800_838.jpg",
        "IMG_20250615_213800_866.jpg",
        "IMG_20250615_213801_160.jpg",
        "IMG_20250615_213821_078.jpg",
        "IMG_20250615_213821_688.jpg",
        "IMG_20250615_213821_703.jpg",
        "IMG_20250929_211738_644.jpg",
        "IMG_20250929_211738_825.jpg",
        "IMG_20250929_211813_371.jpg",
        "IMG_20250929_211813_375.jpg",
        "IMG_20250929_211813_457.jpg",
        "IMG_20250929_211813_504.jpg",
        "IMG_20250929_211813_671.jpg",
        "IMG_20250929_211813_802.jpg",
        "IMG_20250929_211813_827.jpg",
        "IMG_20250929_211813_997.jpg",
        "IMG_20250929_211814_222.jpg",
        "IMG_20250929_211829_788.jpg",
        "IMG_20250929_211829_980.jpg",
        "IMG_20250929_211829_992.jpg",
        "IMG_20250929_211830_130.jpg",
        "IMG_20250929_211830_485.jpg",
        "IMG_20250929_211830_540.jpg",
        "IMG_20250929_211830_567.jpg",
        "IMG_20250929_211914_621.jpg",
        "IMG_20250929_211914_756.jpg",
        "IMG_20250929_211914_820.jpg",
        "IMG_20250929_211914_958.jpg",
        "IMG_20250929_211915_145.jpg",
        "IMG_20250929_211932_986.jpg",
        "IMG_20250929_211933_194.jpg",
        "IMG_20250929_211933_257.jpg",
        "IMG_20250929_211933_403.jpg"
    ],
    "BERGAMO": [
        "IMG_20251207_191442_466.jpg",
        "IMG_20251207_191442_514.jpg",
        "IMG_20251207_191443_033.jpg",
        "IMG_20251207_191504_209.jpg",
        "IMG_20251207_191522_402.jpg",
        "IMG_20251207_191528_555.jpg",
        "IMG_20251207_191535_715.jpg",
        "IMG_20251207_191559_187.jpg",
        "IMG_20251207_191559_519.jpg",
        "IMG_20251207_191600_024.jpg",
        "Messenger_creation_7A99AE54-D694-40FE-8A1A-34114E5368FE.jpeg",
        "Messenger_creation_C5EA6CA1-4C10-4799-A4FE-8FE4B655A0D3.jpeg"
    ],
    "BURGOS": [
        "20251011_072138.jpg",
        "IMG_20251029_213702_098.jpg",
        "IMG_20251029_213702_502.jpg",
        "IMG_20251029_213702_528.jpg",
        "IMG_20251029_213711_932.jpg",
        "IMG_20251029_213711_996.jpg",
        "IMG_20251029_213712_058.jpg",
        "IMG_20251029_213712_104.jpg",
        "IMG_20251029_213712_176.jpg",
        "IMG_20251029_213712_335.jpg",
        "IMG_20251029_213712_384.jpg",
        "IMG_20251029_213712_583.jpg",
        "IMG_20251029_213712_610.jpg",
        "IMG_20251029_213712_643.jpg",
        "Messenger_creation_1859E720-0FB7-4ADA-ADFA-F37724818573.jpeg",
        "Messenger_creation_5A0767DA-F16F-426B-962B-4AF310097080.jpeg",
        "Messenger_creation_5FDB6CE9-FC76-4273-AA8F-6A8829EDCFD2.jpeg",
        "Messenger_creation_644A5EC8-E28B-4BE7-A64E-77FA2A3BF9AB.jpeg"
    ],
    "DAGUPAN": [
        "Messenger_creation_11B7F97E-5116-4F9B-AEF5-B70CB47CC202.jpeg",
        "Messenger_creation_197E10DF-C341-41AB-B0F8-492C4955709E.jpeg",
        "Messenger_creation_2FE9327C-C29E-40C2-8893-A510539B78BC.jpeg",
        "Messenger_creation_3DCE1D96-53F8-489B-8298-4EC845B56FF9.jpeg",
        "Messenger_creation_48FB8218-8E68-4CCD-903E-3D384AEDBF84.jpeg",
        "Messenger_creation_5BD0BE36-9FA9-4448-B486-19072A74BAF9.jpeg",
        "Messenger_creation_5F3C9672-5714-4B4E-9201-A5A8B1E5E66A.jpeg",
        "Messenger_creation_775B8F8F-C94A-46F1-BE79-DAC8759197DD.jpeg",
        "Messenger_creation_7A8E242B-42C5-4CA0-8D23-E32C88B6E4A6.jpeg",
        "Messenger_creation_A9C4214C-FE22-40D0-9418-FFFE8A598850.jpeg",
        "Messenger_creation_B880FF86-297E-4174-9232-1336BA9CC1CF.jpeg",
        "Messenger_creation_B9610223-B6A1-41C9-BF34-4CFEBF0B3800.jpeg",
        "Messenger_creation_C0D36B45-B6DF-4C17-BE35-D62A8FCE233A.jpeg",
        "Messenger_creation_CD7898A3-49C4-4868-A641-8200CF1094C6.jpeg",
        "Messenger_creation_EF760590-F644-46C8-919C-795116AE51DF.jpeg",
        "Messenger_creation_FFDEFA6E-4D5B-4ABA-BDDF-021CFBD1E87C.jpeg"
    ],
    "DASOL": [
        "20250720_142016.jpg",
        "20250720_142020.jpg",
        "Messenger_creation_235A631E-219F-4B99-8074-636A34C1B0BD.jpeg",
        "Messenger_creation_55742B0C-49D4-4E14-AE5F-5283E953E886.jpeg"
    ],
    "HAPPY BIRTHDAY LOVE": [
        "Messenger_creation_1335196401248598.jpeg",
        "Messenger_creation_1915231222760174.jpeg",
        "Messenger_creation_855483023936645.jpeg",
        "Messenger_creation_8BF59A51-9DEF-497C-8B39-47BED564883C.jpeg",
        "Messenger_creation_976B8EFA-42CD-43B8-B890-26A887B31896.jpeg",
        "Messenger_creation_E9FDD589-DB5A-48BC-B1ED-E54D52AB40CB.jpeg",
        "received_1491865752041151.jpeg",
        "received_2014380529360131.jpeg",
        "received_2327163707716901.jpeg"
    ],
    "LINGAYEN": [
        "20251205_192821.jpg",
        "20251205_192825.jpg",
        "20251205_192827.jpg",
        "20251205_192828.jpg",
        "20251205_192829.jpg",
        "20251205_192830.jpg",
        "20251205_192831.jpg",
        "20251205_192835.jpg",
        "IMG_20251207_191442_368.jpg",
        "IMG_20251207_191442_703.jpg",
        "IMG_20251207_191442_865.jpg"
    ],
    "MANKAPE": [
        "1765011245880_100.JPG",
        "IMG_20251207_191536_177.jpg",
        "IMG_20251207_191545_051.jpg",
        "IMG_20251207_191550_172.jpg",
        "IMG_20251207_191553_597.jpg"
    ],
    "SUAL": [
        "Messenger_creation_54381FA1-BF3F-489E-AEB2-1E0FDA1A4CF2.jpeg",
        "Messenger_creation_6120B176-82F9-4B14-86FA-09F322DDB831.jpeg",
        "Messenger_creation_6CF30C14-F878-4760-AA31-17DDA826A72C.jpeg",
        "Messenger_creation_AE8F45C5-EAF6-422C-BF7F-DF964A3C6B44.jpeg",
        "Messenger_creation_B1A91C61-6CE3-4FE6-A355-3912E8E74C11.jpeg",
        "Messenger_creation_C7204F72-FAF9-418F-BD5E-223D8C53BDB5.jpeg",
        "Messenger_creation_FE9C087C-1B40-4D81-9533-78D38FC87267.jpeg"
    ],
    "WITH MY MOANA": [
        "IMG_20251215_192847_962.jpg",
        "IMG_20251215_192847_979.jpg",
        "IMG_20251215_192848_149.jpg",
        "IMG_20251215_192848_378.jpg"
    ]
};
    } else {
        console.error('[DEBUG] Enter button not found in DOM!');
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
    console.log('[DEBUG] showPage() called with pageId:', pageId);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/24446d4c-7fb2-495e-9f95-0f7742d3fd9a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:64',message:'showPage called',data:{pageId:pageId},timestamp:Date.now(),sessionId:'debug-session',runId:'enter-button-issue',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    console.log('[DEBUG] Target page found:', !!targetPage, 'for pageId:', pageId);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/24446d4c-7fb2-495e-9f95-0f7742d3fd9a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:75',message:'targetPage check',data:{pageId:pageId,found:!!targetPage},timestamp:Date.now(),sessionId:'debug-session',runId:'enter-button-issue',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    
    if (targetPage) {
        targetPage.classList.remove('hidden');
        setTimeout(() => {
            targetPage.classList.add('active');
            console.log('[DEBUG] Page activated:', pageId);
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/24446d4c-7fb2-495e-9f95-0f7742d3fd9a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:81',message:'page activated',data:{pageId:pageId},timestamp:Date.now(),sessionId:'debug-session',runId:'enter-button-issue',hypothesisId:'D'})}).catch(()=>{});
            // #endregion
        }, 50);
        currentPage = pageId;
    } else {
        console.error('[DEBUG] Target page not found:', pageId);
    }
}

function goToHome() {
    console.log('[DEBUG] goToHome() function called');
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/24446d4c-7fb2-495e-9f95-0f7742d3fd9a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:83',message:'goToHome called',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'enter-button-issue',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    showPage('home-page');
}

// Ensure goToHome is in global scope for onclick handlers
window.goToHome = goToHome;
// #region agent log
fetch('http://127.0.0.1:7242/ingest/24446d4c-7fb2-495e-9f95-0f7742d3fd9a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:88',message:'goToHome assigned to window',data:{windowGoToHomeDefined:typeof window.goToHome==='function'},timestamp:Date.now(),sessionId:'debug-session',runId:'enter-button-issue',hypothesisId:'A'})}).catch(()=>{});
// #endregion

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
// Video configuration - Update this based on your chosen solution
const videoConfig = {
    // Option 1: Local file (default)
    useLocalFile: true,
    localPath: 'assets/video/2025 with you.mp4',  // Using 'video' (singular) folder - matches GitHub
    
    // Option 2: YouTube embed (uncomment and add video ID)
    // useYouTube: true,
    // youtubeId: 'YOUR_YOUTUBE_VIDEO_ID',
    
    // Option 3: Vimeo embed (uncomment and add video ID)
    // useVimeo: true,
    // vimeoId: 'YOUR_VIMEO_VIDEO_ID',
    
    // Option 4: Direct URL (for Google Drive, Dropbox, etc.)
    // useDirectUrl: true,
    // directUrl: 'https://your-direct-video-link.com/video.mp4'
};

function playVideo(videoName) {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoContainer = document.querySelector('.video-container');
    const videoTitle = document.getElementById('video-title');
    
    if (!videoModal) return;
    
    // Update title
    if (videoTitle) {
        videoTitle.textContent = videoName;
    }
    
    // Check video source type
    if (videoConfig.useYouTube && videoConfig.youtubeId) {
        // YouTube embed
        videoContainer.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${videoConfig.youtubeId}?autoplay=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
            </iframe>
        `;
    } else if (videoConfig.useVimeo && videoConfig.vimeoId) {
        // Vimeo embed
        videoContainer.innerHTML = `
            <iframe 
                src="https://player.vimeo.com/video/${videoConfig.vimeoId}?autoplay=1" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
            </iframe>
        `;
    } else if (videoConfig.useDirectUrl && videoConfig.directUrl) {
        // Direct URL (Google Drive, Dropbox, etc.)
        if (videoPlayer) {
            videoPlayer.src = videoConfig.directUrl;
            videoPlayer.style.display = 'block';
        }
    } else {
        // Local file (default)
        if (videoContainer) {
            // Clear container and create fresh video element
            videoContainer.innerHTML = '';
            
            const newVideo = document.createElement('video');
            newVideo.id = 'video-player';
            newVideo.controls = true;
            newVideo.preload = 'metadata';
            newVideo.style.width = '100%';
            newVideo.style.height = 'auto';
            newVideo.style.display = 'block';
            
            const source = document.createElement('source');
            source.src = videoConfig.localPath;
            source.type = 'video/mp4';
            newVideo.appendChild(source);
            
            newVideo.appendChild(document.createTextNode('Your browser does not support the video tag.'));
            
            // Error handling
            newVideo.addEventListener('error', function(e) {
                console.error('Video error:', newVideo.error);
                console.error('Video path:', videoConfig.localPath);
                const errorMsg = document.createElement('p');
                errorMsg.style.cssText = 'color: #ff6b6b; padding: 2rem; text-align: center;';
                errorMsg.textContent = 'Video could not load. Please check the file or try refreshing the page.';
                videoContainer.appendChild(errorMsg);
            });
            
            newVideo.addEventListener('loadedmetadata', function() {
                console.log('Video loaded:', videoConfig.localPath);
            });
            
            videoContainer.appendChild(newVideo);
        }
    }
    
    // Show modal
    videoModal.classList.remove('hidden');
    setTimeout(() => {
        videoModal.classList.add('active');
        // Try to autoplay for local files (may be blocked by browser policy)
        const finalVideoPlayer = document.getElementById('video-player');
        if (finalVideoPlayer && videoConfig.useLocalFile && !videoConfig.useDirectUrl) {
            finalVideoPlayer.play().catch(err => {
                console.log('Video autoplay prevented (user interaction required):', err);
                // User will need to click play button - this is normal browser behavior
            });
        }
    }, 200); // Longer delay to ensure video element is ready
}

function closeVideoModal() {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoContainer = document.querySelector('.video-container');
    
    if (videoModal) {
        videoModal.classList.remove('active');
        
        // Stop video if using local file
        if (videoPlayer && videoPlayer.tagName === 'VIDEO') {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
        
        // Reset iframe content if using YouTube/Vimeo
        if (videoContainer && videoContainer.querySelector('iframe')) {
            const iframe = videoContainer.querySelector('iframe');
            const src = iframe.src;
            iframe.src = ''; // Stop playback
            iframe.src = src; // Restore for next time
        }
        
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
