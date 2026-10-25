const $=id=>document.getElementById(id),items=[...document.querySelectorAll('.it')],lb=$('lb');
$('mb').onclick=()=>{const o=$('mn').classList.toggle('open');$('mb').setAttribute('aria-expanded',o)};
document.querySelectorAll('#mn a').forEach(a=>a.onclick=()=>$('mn').classList.remove('open'));
document.querySelectorAll('.fil button').forEach(b=>b.onclick=()=>{
document.querySelectorAll('.fil button').forEach(x=>x.setAttribute('aria-pressed',x===b));
items.forEach(i=>i.hidden=!(b.dataset.f==='all'||i.dataset.c===b.dataset.f))});
let cur=0;const vis=()=>items.filter(i=>!i.hidden);
function show(i){const v=vis();cur=(i+v.length)%v.length;const it=v[cur];
$('lbp').style.backgroundImage=getComputedStyle(it.querySelector('.ph')).backgroundImage;$('lbt').textContent=it.dataset.t}
items.forEach(it=>it.onclick=()=>{show(vis().indexOf(it));lb.showModal()});
$('pv').onclick=()=>show(cur-1);$('nx').onclick=()=>show(cur+1);$('cl').onclick=()=>lb.close();
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
$('pl').onclick=()=>{$('rv').classList.add('on');$('vd').play().catch(()=>{})};
$('f').addEventListener('submit',e=>{e.preventDefault();
const t='Hola! Soy '+$('n').value+'. Quiero consultar por '+$('te').value+($('d').value?' para el '+$('d').value:'')+'. '+$('m').value;
window.open('https://wa.me/541159384727?text='+encodeURIComponent(t),'_blank')});
