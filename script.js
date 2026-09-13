const links=[
  ['◉','GitHub','https://github.com/korawit-tae'],
  ['◎','Instagram','https://www.instagram.com/_krwisemipro/'],
  ['f','Facebook','https://www.facebook.com/kr.wichy.chu.leuxn'],
  ['▶','YouTube','https://www.youtube.com/@Kayami_Akina'],
  ['◌','Discord · kayami_akina','https://discord.com/users/kayami_akina'],
  ['✉','taaytay99924@gmail.com','mailto:taaytay99924@gmail.com']
];
const list=document.querySelector('.links');
list.innerHTML=links.map(([icon,label,url])=>`<a class="link" href="${url}" target="_blank"><span class="icon" data-icon="${icon}" aria-hidden="true"></span>${label}</a>`).join('');
const music=document.querySelector('.music'),toggle=document.querySelector('.music-toggle');
const play=()=>music.play().then(()=>toggle.textContent='ปิดเพลง').catch(()=>{});
const stop=()=>{music.pause();toggle.textContent='เปิดเพลง'};
play();
document.addEventListener('pointerdown',play,{once:true});
toggle.onclick=()=>music.paused?play():stop();