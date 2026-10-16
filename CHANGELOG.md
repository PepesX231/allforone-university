# Homepage, event details, and registration improvements

Based on repository main at c6768fe9df7d6f0ca56d0e60068d144eb0bcd1c8.

## Implemented
- Homepage copy now addresses participants who already have technical foundations. Added a responsive three-column/stacked overview of the challenge, track outputs, user testing, and portfolio process.
- Retained original hero, mascots, 3D track chooser, cutscenes, fonts, navy/orange colors, and alternating dark/light sections.
- Corrected Software scope to Web/App rather than an unconfirmed business/tourism restriction. Updated all three track detail dialogs and prerequisites. IoT online output is a Proof of Concept; physical hardware is not required in this round.
- Restored the missing #perks destination. Added six expandable workshop details and desktop/mobile navigation. These are sections within the existing single-page site; no separate course enrollment is claimed.
- Corrected the preliminary schedule to the supplied times, including check-in and opening. Removed unconfirmed speaker names and affiliations from schedule rows. Marked workshops and speakers as pending confirmation.
- Added online Discord channel, Thai timezone, date range, onsite progression, and a note distinguishing the advertised 72-hour format from the overall event hours. Exact submission deadline remains for the organizer to announce.
- Added organizer/contact and pre-registration information. Replaced unspecified award promises with pending-announcement wording and made clear that portfolio work does not guarantee university admission.
- With the current empty registration endpoint, CTAs now open the official registration site directly instead of collecting personal data through an unconnected local form. Added a visible explanation of the handoff and made #apply lead to that section.
- Hardened the optional local form for future backend configuration: two-person teams supported, maximum three members, exact ten-digit phone validation, and HTML escaping of displayed names. This optional backend flow is not enabled or end-to-end verified.
- Corrected Event structured-data dates/timezone and online attendance location, and removed admissions-oriented social title copy.
- Updated README and rebuilt dist/index.html.

## Sources and remaining confirmation
Event content comes from the user-supplied details in the referenced conversation (22–25 October 2026, onsite 14 November 2026, three tracks, six tentative workshops, user testing and follow-on guidance). Speaker identities were explicitly tentative and are not presented as confirmed. Eduverse and IoTE are described as partners named in those supplied details; no additional affiliations were added.

The existing repository's 190 THB price, team size, school audience, signup window, and official registration/contact URLs were retained. These and payment/refund rules should be confirmed by the organizer before publication. No new awards, testimonials, alumni outcomes, or admissions guarantees were invented.

## Validation
- JavaScript syntax checks passed for main.js and data.js.
- Python build.py completed and regenerated the bundled HTML.
- Chrome browser checks passed at 360, 390, 768, and 1440 px: no horizontal page overflow, no page JavaScript errors, all local anchor destinations resolve, workshop disclosure opens, each track deep link opens and dismisses, and registration opens an external tab without the unconnected form.
- Static workshop content and official registration link were verified with JavaScript disabled.
- Mobile and desktop screenshots were visually inspected.
- External payment, submission, and actual event attendance were not performed. The backend is not configured. The changes are saved locally; no GitHub push or production deployment has been performed.

## Copy and layout revision after user review
- Rewrote the hero as “รวมทีมสร้างผลงาน ท้าทายฝีมือใน 72 ชั่วโมง / พร้อมอบรม ทดสอบ และนำเสนอผลงานจริง”.
- Audience now reads “นักเรียนมัธยมทั่วประเทศ” with “ที่มีความสามารถด้านเทคโนโลยี”.
- Replaced the dense three-card overview with a dark editorial section: participant-owned work, peer testing, and a portfolio story. Retained the existing mascot and theme palette.
- Moved the long pre-registration/portfolio limitations into relevant FAQ disclosures. Track-specific hardware information remains in the IoT details.
- Rebuilt workshops around “เสริมทักษะ ระหว่างสร้างผลงาน”, with six concise Thai headings, English topic names, and expandable descriptions. Kept the pending-confirmation notice.
- Browser checks on local files passed at 360, 390, 768 and 1440 px: no horizontal overflow, no page errors, and workshop disclosure interaction. External requests were blocked for this revision's checks. Desktop and mobile layouts were visually inspected.
- Rebuilt dist/index.html.

## White-section redesign from the supplied 16 October files
- Read both supplied text files. Used the meeting transcript as context for clear hierarchy and progressive detail; used message (2).txt as the activity content source. No transcript instructions were treated as authorization to contact people or start other work.
- Joined the audience statement into one sentence without a forced break. It fits one line at tested 1100/1440 px; narrow screens wrap naturally for readability. Kept team/solo information beneath it.
- Renamed the value section “4 วันได้อะไรบ้าง?” and rebuilt it on white: a project-paper illustration using the existing mascot, three supporting outcomes, and a post-event guidance strip. Included the IoT online PoC exception.
- Redesigned workshops on a white dotted canvas with six numbered lessons, preliminary dates from the supplied schedule, existing SVG icons, and native keyboard-accessible disclosures. No unconfirmed speakers were named.
- Applied Sites presentation-led design guidance to the established local checkout. No new hosted Site was created.
- Rechecked organizer/CAMPHUB information; earlier team-size and Software-scope differences remain documented in RESEARCH.md. No additional affiliations or admissions guarantees were added.
- Chrome file-based checks passed at 360/390/768/1440 px with external requests blocked: no horizontal overflow, no page errors, six workshop disclosures and open/close interactions. Audience bounds were also checked at 390/1100/1440 px. Desktop and mobile screenshots were inspected.
- Rebuilt dist/index.html.

## Typography, viewport, and benefit refinement
- Rebalanced the hero facts into aligned columns on desktop, a full-width audience row on tablet, and stacked facts on narrow phones. Removed the separate “สำหรับนักเรียนมัธยมทั่วประเทศ” story badge requested in screenshot 3.
- Removed all numeric/English eyebrow labels from the four-day benefit block and added a subtle square-grid white background. Benefits now cover work under limited time, teamwork/development, planned university/instructor workshops, and confidence through presentation practice. Kept pending-speaker wording and no admissions guarantee.
- Changed Top 5 copy to “ได้ไปแข่งรอบชิง” and increased the Grand Final date/venue line.
- Downloaded the licensed Google Fonts Noto Sans Thai variable font and OFL text into assets/fonts; use a local font face and embed it into the bundled HTML. Preserved the original mascot and consistent SVG icons.
- Fixed the short landscape hero: its content now has sufficient vertical space rather than overflowing the first scene. Confirmed at 844×390; also checked 360×740 and 390×844.
- Passed runtime, overflow, local anchors, course disclosure, track details, registration-link and no-JavaScript checks at 360/390/768/1440 px. Additional font, four-benefit, badge-removal, fact-overlap and Escape checks passed at 360/768/1440/1920 px. Verified the bundled HTML loads its embedded font with external requests blocked.
- Visually inspected desktop, phone, and final-round sections; refreshed screenshots. No applications or payments submitted.

## Concise copy, light timetable, and mobile interaction revision
- Shortened the gray supporting text in the four-day benefits, project note, follow-on guidance, and workshop overview/disclosures. Preserved qualifications about pending speakers and IoT PoC.
- Moved the timetable out of the dark timeline into a full-width white #schedule section. Added navy text, restrained alternating row colors, a highlighted final presentation, and a single preliminary-schedule note instead of repeating it per row. The dark timeline and FAQ now frame the light timetable/workshops.
- Removed lesson numbers 01–06 while retaining useful dates. Updated the timetable anchor.
- Increased mobile disclosure/FAQ/close-control touch targets; added safe-area spacing and contained scrolling for detail sheets.
- Chrome checks passed at 360/390/768/1440 px. Touch-profile checks passed for iPhone SE, iPhone 13, Pixel 7, and iPhone landscape using Chromium: no horizontal overflow or page errors, nine timetable rows, no lesson numbers, disclosure tapping, track-tab tapping, visible modal footer, dismissal and restored page scrolling.
- Native Safari and physical iOS/Android devices were not tested. WebKit installation was attempted but failed during extraction with Windows EPERM; no WebKit result is claimed.
- Rebuilt dist/index.html and refreshed previews.

## Timeline breathing room and connected light background
- Removed the requested timezone/pending-schedule line and workshop-intro description. The separate workshop confirmation notice remains.
- Matched timetable and workshop background color, dot pattern, and section spacing to make the light area continuous.
- Extended the dark timeline section below its labels and adjusted top alignment so the illustration has more room before the white section.
- Checked 390/844/1440 px: matched background styles, all nine schedule rows, removed text, no horizontal overflow/page errors, and working disclosure. Timeline last label has over 250 px of dark background beneath it at those sizes.
- Rebuilt the bundle and updated previews.

## Project copy and mobile viewport refinement
- Updated project supporting text to “สร้างผลงานในเวลาจำกัด แสดงฝีมือต่ออาจารย์ พร้อมทดสอบผลงานจริง”.
- Kept Thai line wrapping readable and refreshed the script/style cache keys.
- Coalesced hero parallax resize recalculation to once per animation frame. This avoids redundant scene measurements during bursts of mobile viewport resize events while using the latest dimensions. No fixed frame-rate improvement is claimed.
- JavaScript syntax and diff whitespace checks passed. Rebuilt dist/index.html.
- Touch checks passed for iPhone SE, iPhone 13, Pixel 7, and iPhone landscape profiles in Chromium. Normal-motion checks also passed through height changes and portrait/landscape transitions: no horizontal overflow or page errors, hero content fits, and new copy remains visible. Physical devices and native Safari were not tested.
