document.addEventListener('DOMContentLoaded', () => {

    const music = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle-btn');
    const toggleBtnIcon = toggleBtn.querySelector('i');
    
    const splashScreen = document.getElementById('splash-screen');
    const profileContainer = document.querySelector('.profile-container');

    const musicControls = document.querySelector('.music-controls');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeIcon = document.getElementById('volume-icon');

    const volDownBtn = document.getElementById('vol-down-btn');
    const volUpBtn = document.getElementById('vol-up-btn');
    const volStep = 0.1; 

    toggleBtnIcon.classList.remove('fa-pause');
    toggleBtnIcon.classList.add('fa-play');

    splashScreen.addEventListener('click', () => {
        music.play();
        toggleBtnIcon.classList.remove('fa-play');
        toggleBtnIcon.classList.add('fa-pause');
        splashScreen.classList.add('hidden');
        profileContainer.classList.add('visible');
        musicControls.classList.add('visible'); 
    }, { once: true }); 
    
    toggleBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggleBtnIcon.classList.remove('fa-play');
            toggleBtnIcon.classList.add('fa-pause');
        } else {
            music.pause();
            toggleBtnIcon.classList.remove('fa-pause');
            toggleBtnIcon.classList.add('fa-play');
        }
    });

    function updateVolumeUI(vol) {
        volumeSlider.value = vol;

        if (vol == 0) {
            volumeIcon.classList.remove('fa-volume-high', 'fa-volume-low');
            volumeIcon.classList.add('fa-volume-mute');
        } else if (vol < 0.5) {
            volumeIcon.classList.remove('fa-volume-high', 'fa-volume-mute');
            volumeIcon.classList.add('fa-volume-low');
        } else {
            volumeIcon.classList.remove('fa-volume-low', 'fa-volume-mute');
            volumeIcon.classList.add('fa-volume-high');
        }
    }

    music.volume = volumeSlider.value;

    volumeSlider.addEventListener('input', (e) => {
        music.volume = e.target.value;
        updateVolumeUI(e.target.value);
    });

    volDownBtn.addEventListener('click', () => {
        let newVol = music.volume - volStep;
        if (newVol < 0) newVol = 0; 
        music.volume = newVol;
        updateVolumeUI(newVol); 
    });

    volUpBtn.addEventListener('click', () => {
        let newVol = music.volume + volStep;
        if (newVol > 1) newVol = 1; 
        music.volume = newVol;
        updateVolumeUI(newVol); 
    });
    
    const socialCircles = document.querySelectorAll('.social-circle');

    socialCircles.forEach(circle => {
        circle.addEventListener('click', (event) => {
            
            const platform = event.currentTarget.getAttribute('data-platform');
            let url = '';
            
            if (platform === 'Info') {
                
                const trollText = document.createElement('div');
                trollText.id = 'troll-text';
                trollText.textContent = 'hẹ hẹ hẹ hẹ hẹ';
                document.body.appendChild(trollText);

                setTimeout(() => {
                    document.body.removeChild(trollText);
                    location.reload();
                }, 3000);
                
                return; 
            }

            switch (platform) {
                case 'Discord':
                    url = 'https://discord.gg/xsaJneqzGy'; 
                    break;
                case 'Facebook':
                    url = 'https://facebook.com/vu6357';
                    break;
                case 'TikTok':
                    url = 'https://tiktok.com/@vu6357';
                    break;
                case 'Roblox':
                    url = 'https://www.roblox.com/users/447743615/profile'; 
                    break;
                default:
                    alert(`Chưa cài đặt link cho ${platform}`);
                    return;
            }
            
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});