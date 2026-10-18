(function () {
  'use strict';
  var data = window.AFO;
  if (!data) return;
  var names = ['Game', 'Software (Web/App)', 'IoT & Innovation'];
  var dialog = document.createElement('dialog');
  dialog.className = 'project-modal';
  dialog.setAttribute('aria-labelledby', 'project-detail-title');
  document.body.appendChild(dialog);
  var current = 0, pushed = false, previousFocus = null, enterTimer;
  function esc(value) { return String(value).replace(/[&<>"']/g, function (s) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]; }); }
  function sticker(index, kind) { return '<span class="project-sticker ' + (kind || 'details') + ' sticker-' + index + '" aria-hidden="true"></span>'; }
  function render(index) {
    current = index;
    var t = data.TRACKS[index];
    var card = document.querySelector('[data-track-card="' + t.id + '"]');
    var picture = card && card.querySelector('picture');
    var output = t.output;
    var registrationOpen = Date.now() <= Date.parse(data.CFG.regClose);
    var actionHref = registrationOpen ? data.CFG.registerUrl : 'https://www.facebook.com/HamsterHubThailand';
    var actionLabel = registrationOpen ? 'สมัครสายนี้ · 190 บาท' : 'ติดตามการแข่งขัน';
    var benefits = [
      ['ผลงานตามสายที่เลือก', output, 0],
      ['แข่งจริง 22–25 ต.ค.', 'สร้าง ทดสอบ และนำเสนอผ่าน Discord', 1],
      ['นำเสนอต่อกรรมการ', 'Final Presentation 25 ต.ค.', 2],
      ['ทีม 2–3 คน', 'ฝึกแบ่งงานและแก้ปัญหากับเพื่อน', 3]
    ];
    dialog.innerHTML = '<div class="project-modal-head"><nav aria-label="เลือกสายแข่งขัน">' + data.TRACKS.map(function (track, i) {
      return '<button type="button" data-detail-tab="' + i + '" aria-pressed="' + (i === index) + '">' + esc(track.tab) + '</button>';
    }).join('') + '</nav><button class="project-modal-close" type="button" aria-label="ปิดรายละเอียด">×</button></div>' +
      '<div class="project-modal-scroll" tabindex="-1"><header class="project-detail-hero"><p class="project-detail-tag">' + esc(t.th) + '</p><div class="project-modal-art">' + (picture ? picture.outerHTML : '') + '</div><h2 id="project-detail-title">' + esc(names[index]) + '</h2><p>' + esc(t.desc) + '</p><p class="project-detail-output"><strong>ผลงานที่ส่ง</strong>' + esc(output) + '</p></header>' +
      '<section class="project-detail-section"><h3>เหมาะกับใคร</h3><p>' + esc(t.fit) + '</p><p>พร้อมลงมือสร้าง ทดสอบ และนำเสนอภายในเวลาที่กำหนด</p></section>' +
      '<section class="project-detail-section"><h3>ไอเดียตัวอย่าง</h3><p class="project-detail-note">โจทย์จริงประกาศ 22 ต.ค.</p><ul class="project-idea-list">' + t.ideas.map(function (idea, i) {
        return '<li>' + sticker(index * 3 + i, 'ideas') + '<strong>' + esc(idea[1]) + '</strong></li>';
      }).join('') + '</ul></section>' +
      '<section class="project-detail-section"><h3>ได้อะไรกลับไป</h3><ul class="project-benefit-list">' + benefits.map(function (b) {
        return '<li>' + sticker(b[2]) + '<div><strong>' + esc(b[0]) + '</strong><p>' + esc(b[1]) + '</p></div></li>';
      }).join('') + '</ul><div class="project-detail-prize">' + sticker(0, 'trophy') + '<h4>' + esc(data.PRIZE.title) + '</h4><p>' + esc(data.PRIZE.text) + '</p><small>' + esc(data.PRIZE.note) + '</small></div></section>' +
      '<section class="project-detail-section"><h3>เส้นทางของสายนี้</h3><ol class="project-detail-route">' + data.ROUTE.map(function (r) {
        return '<li><strong>' + esc(r.d) + '</strong><p>' + esc(r.t.replace(/\s*\(รายละเอียดรอยืนยัน\)/g, '')) + '</p></li>';
      }).join('') + '</ol></section><p class="project-detail-motto">' + esc(t.motto) + '</p></div>' +
      '<footer class="project-modal-foot"><a class="btn btn--gold" href="' + esc(actionHref) + '" target="_blank" rel="noopener">' + actionLabel + '</a><button class="btn btn--paper" data-detail-next type="button">สายถัดไป →</button></footer>';
    dialog.querySelector('.project-modal-close').addEventListener('click', closeFromUI);
    dialog.querySelectorAll('[data-detail-tab]').forEach(function (b) { b.addEventListener('click', function () { open(Number(b.dataset.detailTab), false); }); });
    dialog.querySelector('[data-detail-next]').addEventListener('click', function () { open((current + 1) % 3, false); });
    dialog.querySelector('.project-modal-scroll').scrollTop = 0;
  }
  function open(index, push) {
    if (!dialog.open) previousFocus = document.activeElement;
    render(index);
    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add('project-detail-open');
    clearTimeout(enterTimer);
    dialog.classList.remove('project-detail-enter');
    void dialog.offsetWidth;
    dialog.classList.add('project-detail-enter');
    enterTimer = setTimeout(function () { dialog.classList.remove('project-detail-enter'); }, 650);
    if (push) {
      history.pushState({projectDetail:true}, '', '#track-' + data.TRACKS[index].id);
      pushed = true;
    } else if (location.hash.indexOf('#track-') === 0) {
      history.replaceState(history.state, '', '#track-' + data.TRACKS[index].id);
    }
    dialog.querySelector('.project-modal-close').focus({preventScroll:true});
  }
  function finishClose() {
    clearTimeout(enterTimer);
    dialog.classList.remove('project-detail-enter');
    if (dialog.open) dialog.close();
    document.documentElement.classList.remove('project-detail-open');
    if (previousFocus && previousFocus.isConnected) previousFocus.focus({preventScroll:true});
  }
  function closeFromUI() {
    finishClose();
    if (pushed) { pushed = false; history.back(); }
    else if (location.hash.indexOf('#track-') === 0) history.replaceState(history.state, '', '#tracks');
  }
  dialog.addEventListener('cancel', function (e) { e.preventDefault(); closeFromUI(); });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) closeFromUI(); });
  document.querySelectorAll('[data-project-track]').forEach(function (b) { b.addEventListener('click', function () { open(Number(b.dataset.projectTrack), true); }); });
  function handleHash() {
    var key = location.hash.replace('#track-', '');
    var index = data.TRACKS.findIndex(function (t) { return t.id === key; });
    if (location.hash.indexOf('#track-') === 0 && index >= 0) open(index, false);
    else finishClose();
  }
  window.addEventListener('popstate', handleHash);
  handleHash();
  // Keep links portable under GitHub project paths and local previews.
  document.querySelectorAll('a[href="../rules.html"]').forEach(function (a) { a.target = '_self'; });
})();
