(function(){
 'use strict';
 var menu=document.getElementById('project-menu'),trigger=document.querySelector('.project-menu-trigger'),closer=menu.querySelector('.project-menu-close');
 function close(){menu.close();trigger.setAttribute('aria-expanded','false');document.documentElement.classList.remove('project-menu-open');}
 trigger.addEventListener('click',function(){menu.showModal();trigger.setAttribute('aria-expanded','true');document.documentElement.classList.add('project-menu-open');closer.focus();});
 closer.addEventListener('click',close);
 menu.addEventListener('cancel',function(e){e.preventDefault();close();});
 menu.addEventListener('close',function(){trigger.setAttribute('aria-expanded','false');document.documentElement.classList.remove('project-menu-open');});
 menu.addEventListener('click',function(e){if(e.target===menu)close();});
 menu.querySelectorAll('nav a').forEach(function(link){link.addEventListener('click',function(e){e.preventDefault();var target=document.querySelector(link.hash);close();if(target){if(target.tagName==='DETAILS')target.open=true;history.replaceState(history.state,'',link.hash);target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}});});
 var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){menu.querySelectorAll('nav a').forEach(function(a){if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -60% 0px',threshold:0});
 document.querySelectorAll('main>section[id]').forEach(function(s){observer.observe(s);});
})();
