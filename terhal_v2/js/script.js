/* ═══════════════════════════════════════════════
   TERHAL — script.js
═══════════════════════════════════════════════ */

/* ── TRANSLATIONS ─────────────────────────────── */
const T = {
    ar: {
        /* Logo */
        logo_main: 'تر',
        logo_accent: 'حال',
        /* Navbar */
        nav_home: 'الرئيسية',
        nav_trips: 'رحلاتنا',
        nav_features: 'مميزاتنا',
        nav_testi: 'آراء العملاء',
        nav_contact: 'تواصل معنا',
        nav_cta: 'احجز الآن',
        /* Hero */
        hero_badge: 'منصة السفر والمغامرة',
        hero_h1: 'اكتشف جمال بلدك\nوعِش مغامرتك <em>القادمة</em>',
        hero_sub: 'منصتك الأولى لحجز أفضل الرحلات المحلية، وتجارب السفاري، والأنشطة الترفيهية بأسعار حصرية.',
        hero_btn1: 'استكشف الرحلات الآن',
        hero_btn2: 'شاهد الفيديو',
        s_dest_lbl: 'الوجهة',
        s_dest_ph: 'إلى أين؟',
        s_date_lbl: 'التاريخ',
        s_type_lbl: 'نوع الرحلة',
        s_type_op1: 'سفاري',
        s_type_op2: 'بحرية',
        s_type_op3: 'جبلية',
        s_type_op4: 'ثقافية',
        s_btn: 'ابحث',
        scroll_hint: 'اكتشف أكثر',
        /* Stats */
        stat1_n: '+5,000',
        stat1_l: 'رحلة منجزة',
        stat2_n: '+200',
        stat2_l: 'وجهة سياحية',
        stat3_n: '+98%',
        stat3_l: 'رضا العملاء',
        stat4_n: '+150',
        stat4_l: 'مرشد متخصص',
        /* Features */
        sec_feat_ey: 'لماذا ترحال؟',
        sec_feat_title: 'مميزات تجعل رحلتك لا تُنسى',
        sec_feat_sub: 'نوفر لك كل ما تحتاجه لتجربة سفر استثنائية من البداية حتى العودة.',
        f1_title: 'حجز آمن وسريع',
        f1_desc: 'تأكيد فوري لرحلتك بضغطة زر واحدة مع ضمان استرداد كامل.',
        f2_title: 'مرشدين محترفين',
        f2_desc: 'نخبة من الأدلاء السياحيين المحليين لضمان متعتك وأمانك.',
        f3_title: 'أفضل الأسعار',
        f3_desc: 'عروض حصرية وباقات تناسب الميزانيات المختلفة بجودة لا تتنازل.',
        /* Trips */
        sec_trips_ey: 'رحلاتنا المميزة',
        sec_trips_title: 'اختر مغامرتك',
        sec_trips_sub: 'رحلات مصممة بعناية لتمنحك تجربة سفر حقيقية لا تُنسى.',
        trip1_badge: 'الأكثر طلباً',
        trip1_title: 'سفاري الواحات الغروب',
        trip1_t1: '🚙 سيارات دفع رباعي',
        trip1_t2: '🏕️ مخيم بدوي',
        trip1_t3: '🌟 رصد النجوم',
        trip2_badge: 'حصري',
        trip2_title: 'رحلة بحرية لجزيرة المرجان',
        trip2_t1: '⛵ يخت فاخر',
        trip2_t2: '🤿 أدوات غوص',
        trip2_t3: '🍽️ وجبة غداء بحرية',
        btn_book: 'احجز الآن',
        /* Testimonials */
        sec_testi_ey: 'آراء عملائنا',
        sec_testi_title: 'ماذا يقولون عنّا؟',
        sec_testi_sub: 'آلاف المسافرين وثقوا بترحال — هذه بعض تجاربهم.',
        rs_count: 'بناءً على +1,200 تقييم',
        testi_text: 'كانت تجربة رحلة السفاري مع ترحال استثنائية، التنظيم دقيق جداً والخدمة فوق الممتازة.',
        testi_name: 'أحمد المنصوري',
        testi_role: 'مسافر متكرر',
        rev2_name: 'سارة الخالدي',
        rev2_role: 'مصوّرة سفر',
        rev2_text: 'رحلة جزيرة المرجان كانت حلم! اليخت فخم والمرشد كان محترف جداً. بالتأكيد سأكرر التجربة.',
        rev3_name: 'محمد العتيبي',
        rev3_role: 'رحّالة شغوف',
        rev3_text: 'من أفضل المنصات اللي تعاملت معها. الحجز سهل، والدعم سريع، والرحلة تجاوزت كل توقعاتي.',
        rev4_name: 'نورة القحطاني',
        rev4_role: 'مدوّنة سياحية',
        rev4_text: 'تجربة لا تُنسى مع عائلتي. الأطفال كانوا سعداء جداً بمشاهدة النجوم في المخيم البدوي.',
        rev5_name: 'فيصل الدوسري',
        rev5_role: 'رجل أعمال',
        rev5_text: 'حجزت رحلة بحرية لفريق العمل، الخدمة كانت استثنائية من البداية للنهاية. شكراً ترحال!',
        /* Contact */
        sec_contact_ey: 'تواصل معنا',
        sec_contact_title: 'نحن هنا لمساعدتك',
        sec_contact_sub: 'هل لديك استفسار أو تريد حجز رحلة مخصصة؟ فريقنا جاهز لخدمتك.',
        c_email_lbl: 'البريد الإلكتروني',
        c_phone_lbl: 'الهاتف',
        c_addr_lbl: 'العنوان',
        c_email_val: 'info@terhal.com',
        c_phone_val: '+966 50 000 0000',
        c_addr_val: 'الرياض، المملكة العربية السعودية',
        form_name_lbl: 'الاسم الكامل',
        form_name_ph: 'اسمك',
        form_email_lbl: 'البريد الإلكتروني',
        form_email_ph: 'بريدك@مثال.com',
        form_trip_lbl: 'الرحلة المطلوبة',
        form_trip_ph: 'اختر رحلة…',
        form_msg_lbl: 'رسالتك',
        form_msg_ph: 'أخبرنا عن رحلتك المثالية…',
        form_btn: 'أرسل الرسالة ✈️',
        /* Footer */
        ft_desc: 'منصتك الأولى لاستكشاف الرحلات المحلية والمغامرات السياحية.',
        ft_nav_t: 'روابط سريعة',
        ft_contact_t: 'تواصل',
        ft_copy: '© 2026 جميع الحقوق محفوظة لمنصة ترحال.',
        /* Toast */
        toast_ok: 'تم الإرسال! سنتواصل معك قريباً.',
        toast_err: 'من فضلك أدخل اسمك وبريدك الإلكتروني.',
    },
    en: {
        logo_main: 'Ter',
        logo_accent: 'hal',
        nav_home: 'Home',
        nav_trips: 'Our Trips',
        nav_features: 'Features',
        nav_testi: 'Testimonials',
        nav_contact: 'Contact Us',
        nav_cta: 'Book Now',
        hero_badge: 'Travel & Adventure Platform',
        hero_h1: 'Discover Your Country\nLive Your Next <em>Adventure</em>',
        hero_sub: 'Your #1 platform for booking the best local trips, safari experiences, and entertainment activities at exclusive prices.',
        hero_btn1: 'Explore Trips Now',
        hero_btn2: 'Watch Video',
        s_dest_lbl: 'Destination',
        s_dest_ph: 'Where to?',
        s_date_lbl: 'Date',
        s_type_lbl: 'Trip Type',
        s_type_op1: 'Safari',
        s_type_op2: 'Sea Trip',
        s_type_op3: 'Mountain',
        s_type_op4: 'Cultural',
        s_btn: 'Search',
        scroll_hint: 'Discover more',
        stat1_n: '+5,000',
        stat1_l: 'Completed Trips',
        stat2_n: '+200',
        stat2_l: 'Destinations',
        stat3_n: '+98%',
        stat3_l: 'Happy Clients',
        stat4_n: '+150',
        stat4_l: 'Expert Guides',
        sec_feat_ey: 'Why Terhal?',
        sec_feat_title: 'Features That Make Your Trip Unforgettable',
        sec_feat_sub: 'Everything you need for an exceptional travel experience, from start to finish.',
        f1_title: 'Fast & Secure Booking',
        f1_desc: 'Instant trip confirmation with a single click and full refund guarantee.',
        f2_title: 'Professional Guides',
        f2_desc: 'Elite local tour guides ensuring your enjoyment and safety every step.',
        f3_title: 'Best Prices',
        f3_desc: 'Exclusive deals and packages that fit any budget without compromising quality.',
        sec_trips_ey: 'Featured Trips',
        sec_trips_title: 'Choose Your Adventure',
        sec_trips_sub: 'Carefully crafted trips designed to give you an unforgettable real travel experience.',
        trip1_badge: 'Most Popular',
        trip1_title: 'Oasis Sunset Safari',
        trip1_t1: '🚙 4x4 Vehicles',
        trip1_t2: '🏕️ Bedouin Camp',
        trip1_t3: '🌟 Stargazing',
        trip2_badge: 'Exclusive',
        trip2_title: 'Coral Island Sea Trip',
        trip2_t1: '⛵ Luxury Yacht',
        trip2_t2: '🤿 Diving Gear',
        trip2_t3: '🍽️ Seafood Lunch',
        btn_book: 'Book Now',
        sec_testi_ey: 'Customer Reviews',
        sec_testi_title: 'What They Say About Us',
        sec_testi_sub: 'Thousands of travelers trust Terhal — here are some of their stories.',
        rs_count: 'Based on +1,200 reviews',
        testi_text: 'The safari trip experience with Terhal was exceptional. The organization was precise and the service was beyond excellent.',
        testi_name: 'Ahmed Al-Mansouri',
        testi_role: 'Frequent Traveler',
        rev2_name: 'Sara Al-Khalidi',
        rev2_role: 'Travel Photographer',
        rev2_text: 'The Coral Island trip was a dream! The yacht was luxurious and the guide was very professional. I will definitely repeat the experience.',
        rev3_name: 'Mohammed Al-Otaibi',
        rev3_role: 'Passionate Explorer',
        rev3_text: 'One of the best platforms I have ever dealt with. Easy booking, fast support, and the trip exceeded all my expectations.',
        rev4_name: 'Noura Al-Qahtani',
        rev4_role: 'Travel Blogger',
        rev4_text: 'An unforgettable experience with my family. The kids were so happy watching the stars at the Bedouin camp.',
        rev5_name: 'Faisal Al-Dosari',
        rev5_role: 'Businessman',
        rev5_text: 'I booked a sea trip for our work team — the service was exceptional from start to finish. Thank you Terhal!',
        sec_contact_ey: 'Contact Us',
        sec_contact_title: "We're Here to Help",
        sec_contact_sub: 'Have a question or want to book a custom trip? Our team is ready to serve you.',
        c_email_lbl: 'Email',
        c_phone_lbl: 'Phone',
        c_addr_lbl: 'Address',
        c_email_val: 'info@terhal.com',
        c_phone_val: '+966 50 000 0000',
        c_addr_val: 'Riyadh, Saudi Arabia',
        form_name_lbl: 'Full Name',
        form_name_ph: 'Your name',
        form_email_lbl: 'Email Address',
        form_email_ph: 'you@example.com',
        form_trip_lbl: 'Desired Trip',
        form_trip_ph: 'Choose a trip…',
        form_msg_lbl: 'Message',
        form_msg_ph: 'Tell us about your ideal trip…',
        form_btn: 'Send Message ✈️',
        ft_desc: 'Your #1 platform for discovering local trips and travel adventures.',
        ft_nav_t: 'Quick Links',
        ft_contact_t: 'Contact',
        ft_copy: '© 2026 All rights reserved — Terhal Platform.',
        toast_ok: 'Message sent! We\'ll be in touch soon.',
        toast_err: 'Please fill in your name and email.',
    }
};

/* ── CURRENT LANG ─────────────────────────────── */
let lang = 'ar';

function applyLang(l) {
    lang = l;
    const t = T[l];
    document.documentElement.lang = l;
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('en', l === 'en');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (!t[key] && t[key] !== '') return;
        const val = t[key];
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = val;
        } else if (el.tagName === 'OPTION' && el.value === '') {
            el.textContent = val;
        } else {
            el.innerHTML = val.replace(/\n/g, '<br>');
        }
    });

    document.querySelectorAll('.lang-sw button').forEach(b => {
        b.classList.toggle('on', b.dataset.lang === l);
    });

    try { localStorage.setItem('terhal_lang', l); } catch (e) {}
}

/* ── DOM READY ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

    /* Preloader */
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2000);

    /* Load saved lang */
    let saved = 'ar';
    try { saved = localStorage.getItem('terhal_lang') || 'ar'; } catch (e) {}
    applyLang(saved);

    /* Lang buttons */
    document.querySelectorAll('.lang-sw button').forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    /* Navbar scroll */
    const navbar = document.getElementById('navbar');
    const backTop = document.getElementById('back-top');
    window.addEventListener('scroll', () => {
        const s = window.scrollY > 80;
        navbar.classList.toggle('solid', s);
        backTop.classList.toggle('show', s);
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* Hamburger */
    const ham = document.getElementById('hamburger');
    const drawer = document.getElementById('mob-menu');
    ham.addEventListener('click', () => {
        const open = drawer.classList.toggle('open');
        ham.classList.toggle('open', open);
    });
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        drawer.classList.remove('open');
        ham.classList.remove('open');
    }));

    /* Scroll reveal */
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => io.observe(el));

    /* Stats counter */
    const statsEl = document.querySelector('.stats-bar');
    if (statsEl) {
        const cio = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                document.querySelectorAll('.num[data-target]').forEach(runCounter);
                cio.disconnect();
            }
        }, { threshold: 0.5 });
        cio.observe(statsEl);
    }

    function runCounter(el) {
        const raw = el.dataset.target;
        const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
        const prefix = raw.match(/^[+]/) ? '+' : '';
        const suffix = raw.match(/%$/) ? '%' : raw.match(/,/) ? ',000' : '';
        const isFloat = raw.includes('.');
        let cur = 0;
        const step = Math.max(0.01, num / 60);
        const id = setInterval(() => {
            cur = Math.min(cur + step, num);
            const display = isFloat ? cur.toFixed(1) : Math.floor(cur);
            el.textContent = prefix + display + (suffix || '');
            if (cur >= num) {
                el.textContent = raw;
                clearInterval(id);
            }
        }, 22);
    }

    /* Form submit */
    const formBtn = document.getElementById('form-btn');
    if (formBtn) {
        formBtn.addEventListener('click', () => {
            const name = document.getElementById('f-name').value.trim();
            const email = document.getElementById('f-email').value.trim();
            if (!name || !email) {
                showToast(T[lang].toast_err, 'error');
                return;
            }
            showToast(T[lang].toast_ok, 'success');
            ['f-name', 'f-email', 'f-trip', 'f-msg'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
        });
    }

    function showToast(msg, type = 'success') {
        const el = document.getElementById('toast');
        const icon = document.getElementById('toast-icon');
        const msgEl = document.getElementById('toast-msg');
        msgEl.textContent = msg;
        icon.innerHTML = type === 'success' ?
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' :
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
        el.className = 'toast show toast-' + type;
        setTimeout(() => { el.className = 'toast'; }, 3800);
    }

    /* Video Modal */
    const watchBtn = document.getElementById('watch-video-btn');
    const modal = document.getElementById('video-modal');
    const modalClose = document.getElementById('modal-close');
    const iframe = document.getElementById('modal-iframe');

    function openModal() {
        // Load video only when modal opens
        if (iframe && !iframe.src) {
            iframe.src = iframe.dataset.src;
        }
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        // Stop video by clearing src
        if (iframe) { iframe.src = ''; }
    }

    if (watchBtn) watchBtn.addEventListener('click', openModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal(); });

    /* Rating bars animation */
    const rsBars = document.querySelectorAll('.rs-fill');
    if (rsBars.length) {
        const barIO = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                rsBars.forEach(b => {
                    b.style.setProperty('--w', b.style.width);
                    b.style.width = '0';
                    requestAnimationFrame(() => b.classList.add('animated'));
                });
                barIO.disconnect();
            }
        }, { threshold: 0.4 });
        barIO.observe(document.querySelector('.reviews-summary'));
    }

    /* Reviews carousel (mobile) */
    const carousel = document.getElementById('reviews-carousel');
    const dotsWrap = document.getElementById('rev-dots');
    const prevBtn = document.getElementById('rev-prev');
    const nextBtn = document.getElementById('rev-next');

    if (carousel) {
        const cards = carousel.querySelectorAll('.rev-card');
        let current = 0;

        // Build dots
        cards.forEach((_, i) => {
            const d = document.createElement('button');
            d.className = 'rev-dot' + (i === 0 ? ' on' : '');
            d.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(d);
        });

        function goTo(idx) {
            current = (idx + cards.length) % cards.length;
            // Only scroll on mobile (flex mode)
            if (window.innerWidth <= 700) {
                const cardW = carousel.offsetWidth;
                // RTL-aware scroll
                const isRTL = document.documentElement.dir === 'rtl';
                carousel.scrollTo({ left: isRTL ? -current * cardW : current * cardW, behavior: 'smooth' });
            }
            dotsWrap.querySelectorAll('.rev-dot').forEach((d, i) => d.classList.toggle('on', i === current));
        }

        if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
        if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

        // Auto-advance every 5s on mobile
        setInterval(() => { if (window.innerWidth <= 700) goTo(current + 1); }, 5000);
    }

    /* Parallax hero bg */
    window.addEventListener('scroll', () => {
        const heroEl = document.querySelector('.hero-bg');
        if (heroEl && window.scrollY < window.innerHeight) {
            heroEl.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.12)`;
        }
    }, { passive: true });

});