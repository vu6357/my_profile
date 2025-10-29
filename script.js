document.addEventListener('DOMContentLoaded', () => {
    
    const music = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle-btn');
    const toggleBtnIcon = toggleBtn.querySelector('i');

    const playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.warn("Autoplay bị chặn, cần người dùng tương tác.");
            toggleBtnIcon.classList.remove('fa-pause');
            toggleBtnIcon.classList.add('fa-play');
        });
    }

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

    const emailInput = document.getElementById('email-input');
    if (emailInput) {
        emailInput.addEventListener('click', () => {
            const email = emailInput.value;
            const originalValue = emailInput.value;

            navigator.clipboard.writeText(email).then(() => {
                emailInput.value = "Đã sao chép!";
                setTimeout(() => {
                    emailInput.value = originalValue;
                }, 2000);
            }).catch(err => {
                console.error('Không thể sao chép: ', err);
                emailInput.value = "Lỗi sao chép!";
                setTimeout(() => {
                    emailInput.value = originalValue;
                }, 2000);
            });
        });
    }


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