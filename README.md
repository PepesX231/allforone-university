# All for One University — เว็บการแข่งขัน (Hamster Hub)

เว็บสแตติก ออกแบบมาให้ดูบนมือถือเป็นหลัก ไม่ใช้ framework และไม่ต้อง build ก่อนนำขึ้นเว็บ


## Desktop, mobile and explainer video

Screens up to 760px open the dedicated `allforone-mobile/` page automatically. Desktop keeps the original layout. Both versions include the All for One introduction clip after the hero; video starts with a user click and pauses when closed. Shared media is stored in `assets/media/`. The official application site remains Hamster Hub.

The mobile folder README documents its source files. `python build.py` regenerates the local preview and copies mobile/media dependencies; GitHub Pages serves the repository root directly.

## โครงสร้าง
```
index.html            โครงหน้า + SEO (meta, Open Graph, JSON-LD Event)
assets/css/style.css  สไตล์ทั้งหมด แบ่งเป็นหมวด 1–11 ตามสารบัญบนสุดของไฟล์
assets/js/data.js     ⭐ ข้อมูลที่แก้บ่อย: ลิงก์สมัคร, วันเปิด/ปิดรับ, 3 สาย, สิ่งที่ได้รับ
assets/js/main.js     การทำงานทั้งหมด (นับถอยหลัง, หน้ารายละเอียด, ไทม์ไลน์ ฯลฯ)
assets/js/tracks3d.js โมเดล 3D ของ 3 สาย (three.js) — สร้างจากรูปทรงในโค้ด ไม่มีไฟล์โมเดล
assets/img/           มาสคอต Hamster Hub + โลโก้ EDUverse / IoTE (พื้นโปร่งใส)
build.py              รวมทุกไฟล์เป็น HTML ไฟล์เดียว → dist/index.html
```

## ขึ้นเว็บ (GitHub Pages)
อัปทั้งโฟลเดอร์ขึ้น repo แล้วเปิด Pages ได้เลย ถ้าจะทดสอบในเครื่อง: `python3 -m http.server` แล้วเปิด http://localhost:8000

## เทคนิคที่ใช้
- **Progressive enhancement:** เนื้อหาทั้งหมดอยู่ใน HTML เปิดได้แม้ JS ไม่ทำงาน
- **Scroll-driven animations** (`animation-timeline`) สำหรับ reveal และการ์ดสายที่เอียงเข้ามาแบบ 3D ทำงานนอก main thread บน Chrome/Android รุ่นใหม่ ถ้าเบราว์เซอร์ไม่รองรับจะใช้ IntersectionObserver แทน
- **โลโก้ ALL FOR ONE UNIVERSITY** เป็น SVG (symbol `#afo-logo` ใน index.html) ใช้ฟอนต์ Luckiest Guy จาก Google Fonts โหลดเฉพาะตัวอักษรที่ใช้ (`&text=`) จึงเบามาก
- **3 TRACKS** (ส่วนสายการแข่งขัน) แบบหน้าโชว์สินค้า: โมเดล 3D ของสายที่เลือกลอยใหญ่กลางจอ (ไม่มีกรอบการ์ด) บนพื้นหลังเรืองแสงตามสีสาย มีชื่อสายตัวใหญ่จางๆ ด้านหลัง ข้อมูลสายอยู่ซ้าย (มือถืออยู่ใต้โมเดล) เปลี่ยนสายด้วยลูกศร / รูปย่อ 3 สาย / ปัด / ปุ่มลูกศรบนคีย์บอร์ด; แตะโมเดลหรือปุ่ม "ดูรายละเอียดสายนี้" หน้ารายละเอียดจะขยายออกมาจากโมเดล; รูปย่อใช้ภาพนิ่งที่เรนเดอร์จากโมเดลจริง
- **หน้ารายละเอียดสาย** จัดแบบ editorial (แนวเว็บ HEAL): หัวข้อตัวใหญ่ Anton, โมเดล 3D, แถวหัวข้อมีเลข 01 / – 04 / (เหมาะกับใคร, ไอเดียตัวอย่าง, ได้อะไรกลับไป, เส้นทาง) ปิดท้ายด้วยคำขวัญของสาย
- **WHAT YOU GET.** (สมัครแล้วได้อะไรบ้าง?) พื้นสว่างมีเส้นกริด ราคา 190 ตัวใหญ่ + สติกเกอร์เอียง, แถบข้อความวิ่ง, และการ์ดสิ่งที่ได้รับ 7 ใบที่ซ้อนกันตอนเลื่อน (position: sticky)
- **โลโก้บนแถบเมนู** เป็นหมวกรับปริญญาอย่างเดียว (symbol `#afo-cap`)
- **โลโก้** ดาวหน้ายิ้มใส่หมวกรับปริญญา มีวงโคจร 3 จุด (3 สาย) + ตัวอักษร ALL FOR ONE / UNIVERSITY (symbol `#afo-logo`)
- **TIMELINE** ถนนคดเคี้ยวเรืองแสง 4 จุด แต่ละจุดเป็นเกาะ 3D (CSS isometric) มีภาพประกอบ SVG; มือถือเป็นงูลงแนวตั้งพอดี 1 จอ, คอมเป็นคลื่นซ้ายไปขวา เส้นถูกวาดถึงช่วงปัจจุบัน (วัดความยาวบนจอด้วย JS)
- **โมเดล 3D ของแต่ละสาย** (จอยเกม+จอ, แล็ปท็อป+มือถือ, หุ่นยนต์ IoT) เรนเดอร์สดด้วย three.js ทั้งในหน้าแรก (3 โมเดลเรียงบนวงแหวน) การ์ดสาย และหน้ารายละเอียด; โหลดหลังหน้าแรกแสดงแล้ว, วาดเฉพาะการ์ดที่อยู่บนจอ, ปรับคุณภาพเองตามความเร็วเครื่องจริง (เต็ม → 30fps/ความละเอียดต่ำ → ภาพนิ่ง 3D) ถ้าเครื่องไม่รองรับ WebGL หรือเน็ตโหลด three.js ไม่ได้ จะแสดงไอคอนสีของสายแทน
- แก้ลิงก์ three.js ได้ที่ `threeUrl` ใน data.js
- **ดาวน่ารัก** (SVG ดาว 4 แฉก + ดาวหน้ายิ้ม + ดาวตก) ใช้ซ้ำในหน้าแรก ส่วนราคา ส่วนสมัคร และหน้ารายละเอียด (transform/opacity อย่างเดียว)
- **ไอเดียตัวอย่าง** ของแต่ละสายอยู่ใน `ideas` ใน data.js (เป็นตัวอย่าง ไม่ใช่โจทย์จริง)
- **`<dialog>` แบบ modal** สำหรับหน้ารายละเอียดสาย จัดการ focus, Esc และปุ่มย้อนกลับของ Android ให้ + `history.pushState` สำหรับเบราว์เซอร์รุ่นเก่า และลิงก์ตรง `#track-game` / `#track-software` / `#track-iot`
- **ลื่นบนมือถือ:** แอนิเมชันขยับแค่ transform/opacity, ไม่มี backdrop-filter, ลูปหยุดเมื่อพ้นจอ, เนื้อหาหน้ารายละเอียดสร้างไว้ล่วงหน้าตอนเครื่องว่าง, ลดเอฟเฟกต์อัตโนมัติบนเครื่องสเปกต่ำหรือเมื่อเปิด "ลดการเคลื่อนไหว"
- **Accessibility:** skip link, landmark, focus ring, aria-current บนเมนู, ปุ่มกดด้วยคีย์บอร์ดได้

## ควรทำก่อนใช้จริง
- ดาวน์โหลดโปสเตอร์มาไว้ `assets/img/posters/` แล้วแก้ลิงก์ในส่วน POSTERS (ตอนนี้ดึงจาก media.mediaquest.uk ถ้าโหลดไม่ได้ ส่วนนี้จะซ่อนตัวเอง)
- ตรวจยืนยันราคา 190 บาท ขนาดทีม คุณสมบัติ วันปิดรับ เงื่อนไขชำระ/คืนเงิน และลิงก์สมัครกับผู้จัดก่อนเผยแพร่ ข้อมูลส่วนนี้คงจาก repository เดิม
- ตารางอบรมเป็นกำหนดการเบื้องต้น ไม่แสดงชื่อวิทยากรจนกว่าจะยืนยัน ห้ามเพิ่มรางวัลหรือผลการรับเข้ามหาวิทยาลัยเป็นคำรับประกัน
- ดีไซน์อิงเว็บหลัก hamsterhub.co: ฟอนต์ Noto Sans Thai, สลับ section มืด #0a0a0f / สว่าง #f6f6f4, ปุ่ม navy + ส้ม #ff6000

## Registration behavior
When `CFG.regEndpoint` is empty (the current configuration), all registration CTAs remain native links to the official Hamster Hub registration page. The site does not collect applicant data or claim that an application/payment has succeeded. `#apply` scrolls to the registration explanation. Configure and validate the backend separately before enabling the optional local form.

## Content and validation
See [CHANGELOG.md](CHANGELOG.md) for the implemented changes, source boundaries, and validation results.

## Competition rules page
`rules.html` is the standalone, draft-labelled rules reading page. The home page links to it from its rules preview and registration section. `python build.py` now produces both `dist/index.html` and `dist/rules.html`, with styles, fonts and images inlined.


## Separate desktop and mobile presentations
- `index.html` and `assets/css/style.css` contain the desktop presentation. The retired mobile chapters, track cards, closing poster and bottom bar have been removed from this page.
- At widths up to 760px the entry page redirects to `allforone-mobile/index.html`, the only mobile presentation. Query parameters and section links are preserved; `?view=desktop` explicitly opens the desktop presentation.
- Mobile styling stays in `allforone-mobile/site-theme.css`. Desktop styling, including the explainer section in `assets/css/film100.css`, uses the original dark palette, orange actions and rounded surfaces.
- Both presentations share the explainer video file; their visual themes remain independent.

Direct links to `allforone-mobile/index.html` also return desktop screens to the desktop entry. Both entry pages listen for viewport changes, preserve queries, and map equivalent section anchors. `?view=desktop` remains an explicit desktop override.
