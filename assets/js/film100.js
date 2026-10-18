(function(){
 'use strict';
 var trigger=document.querySelector('[data-film-open]'),dialog=document.getElementById('afo-film-dialog');if(!trigger||!dialog)return;
 var video=dialog.querySelector('video'),close=dialog.querySelector('[data-film-close]');
 function stop(){video.pause();if(dialog.open)dialog.close();document.documentElement.classList.remove('project-film-open');}
 trigger.addEventListener('click',function(){dialog.showModal();document.documentElement.classList.add('project-film-open');close.focus();video.play().catch(function(){});});
 close.addEventListener('click',stop);
 dialog.addEventListener('cancel',function(e){e.preventDefault();stop();});
 dialog.addEventListener('click',function(e){if(e.target===dialog)stop();});
 dialog.addEventListener('close',function(){video.pause();document.documentElement.classList.remove('project-film-open');});
 document.addEventListener('visibilitychange',function(){if(document.hidden)video.pause();});
})();
