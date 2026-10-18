(function () {
  // The campaign runs in its own document; the host owns authentication,
  // validation, registration, and navigation to the existing payment page.
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;
    var url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin && url.origin !== 'https://www.hamsterhub.co') return;
    if (url.pathname !== '/allforone/register') return;
    if (window.parent === window) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    var groupPrefill = null;
    if (link.matches('[data-crew-register]')) {
      var card = link.closest('[data-crew]');
      var fullNameInput = card && card.querySelector('#crew-fullname');
      var nicknameInput = card && card.querySelector('#crew-nick');
      var fullName = fullNameInput && fullNameInput.value.trim();
      var sizeButton = card && card.querySelector('[data-crew-size][aria-pressed="true"]');
      var size = sizeButton && Number(sizeButton.dataset.crewSize);
      var slots = card && card.querySelectorAll('[data-crew-slot]');
      if (!fullName) {
        var status = card && card.querySelector('[data-crew-status]');
        if (status) status.textContent = 'กรุณากรอกชื่อจริงก่อนสมัคร';
        if (fullNameInput) fullNameInput.focus();
        return;
      }
      if ((size !== 2 && size !== 3) || !slots || slots.length < size - 1 ||
          !Array.prototype.every.call(Array.prototype.slice.call(slots, 0, size - 1), function (slot) {
            return slot.classList.contains('is-filled');
          })) return;
      groupPrefill = {
        size: size,
        fullName: fullName.slice(0, 60),
        nickname: nicknameInput ? nicknameInput.value.trim().slice(0, 20) : '',
      };
    }
    var sheet = document.getElementById('sheet');
    if (sheet && sheet.open && sheet.close) sheet.close();
    window.parent.postMessage({
      type: 'hh-allforone:register',
      mode: link.dataset.registerMode === 'single' ? 'single' : null,
      groupPrefill: groupPrefill,
    }, window.location.origin);
  }, true);
})();
