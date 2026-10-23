 document.addEventListener('DOMContentLoaded', function () {
  
  // صورة احتياطية راقية لأبراج استثمارية
  var fallbackImageUrl = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80';

  // 1. مكتبة صور عقارية وهندسية مخصصة ومطابقة لكل خيار
  var detailsDatabase = {
    
    // --- قطاعات الأعمال والخدمات ---
    'service-dev': {
      title: 'التطوير العقاري الشامل',
      tag: 'قطاع التطوير والتنفيذ',
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?auto=format&fit=crop&w=1000&q=80', // رافعات وأبراج قيد التطوير الهندسي
      desc: 'إدارة وتطوير المشاريع العقارية الكبرى من المخططات الأولية وحتى التسليم النهائي وفق كود البناء السعودي وأعلى معايير الجودة والسلامة.',
      bullets: [
        'تطوير مجتمعات ومخططات سكنية وتجارية متكاملة',
        'مراكز تسوق وأسواق تجارية مفتوحة',
        'حوكمة تنفيذية وإشراف هندسي صارم'
      ]
    },
    'service-assets': {
      title: 'إدارة وتنمية الأصول العقارية',
      tag: 'إدارة الاستثمار',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80', // ناطحات سحاب زجاجية للمقرات والشركات
      desc: 'تعظيم العوائد الاستثمارية والقيمة السوقية للأبراج والمحافظ العقارية عبر أفضل الممارسات التشغيلية والتأجيرية.',
      bullets: [
        'إدارة وتأجير الأبراج والمقرات الإدارية',
        'عقود صيانة وتشغيل مستدامة تطيل عمر الأصل',
        'تقارير مالية دورية وشفافة للمستثمرين'
      ]
    },
    'service-arch': {
      title: 'الهندسة والتصميم المعماري',
      tag: 'الابتكار والتصميم',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80', // مهندس معماري ومخططات بناء حديثة
      desc: 'طراز معماري عصري مستوحى من الهوية المحلية، يدمج تقنيات المنزل الذكي والتهوية والإضاءة الطبيعية لتقليل استهلاك الطاقة.',
      bullets: [
        'تصاميم واجهات معمارية مميزة ومستدامة',
        'استغلال ذكي للمساحات الداخلية يضمن الراحة والخصوصية',
        'دمج حلول الأبنية الخضراء الصديقة للبيئة'
      ]
    },
    'service-consult': {
      title: 'الاستشارات ودراسات الجدوى',
      tag: 'الاستشارات الاستثمارية',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80', // دراسات جدوى واجتماع مستثمرين
      desc: 'دراسات جدوى معمقة وتحليلات سوقية تسهم في توجيه قرارات الاستثمار والاستحواذ العقاري نحو الفرص الأكثر ربحية.',
      bullets: [
        'دراسات أعلى وأفضل استخدام للأراضي (Highest & Best Use)',
        'تقييم عقاري وتحليل لمخاطر السوق',
        'توجيه المحافظ الاستثمارية نحو النمو المستدام'
      ]
    },

    // --- مؤشرات الأرقام والحقائق ---
    'stat-projects': {
      title: 'أكثر من 18 مشروعاً منجزاً',
      tag: 'سجل الإنجاز والتسليم',
      img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80', // فلل سكنية فخمة مكتملة التسليم
      desc: 'محفظة غنية بالمشاريع المكتملة والمسلمة للملاك مع الالتزام التام بالجدول الزمني وضمانات الهيكل الإنشائي.',
      bullets: [
        'تسليم كافة الوحدات بصكوك ملكية مفروزة وجاهزة',
        'ضمانات شاملة تصل إلى 10 سنوات على الهيكل الإنشائي',
        'إشراف كامل على خدمات ما بعد البيع'
      ]
    },
    'stat-area': {
      title: '450,000+ م² مساحة مطورة',
      tag: 'النطاق العمراني',
      img: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1000&q=80', // مساحات عمرانية واسعة ومخططات كبرى
      desc: 'مساحات مطورة شملت البنية التحتية، شبكات الطرق والإنارة، المسطحات الخضراء، والمرافق الترفيهية والسكنية.',
      bullets: [
        'بنية تحتية متطورة تلبي أعلى المقاييس',
        'ممرات مشاة ومسارات دراجات آمنة داخل الأحياء',
        'توزيع متوازن بين المسطحات المبنية والمساحات المفتوحة'
      ]
    },
    'stat-val': {
      title: '1.4 مليار ريال القيمة الاستثمارية',
 tag: 'المحفظة المالية',
      img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80', // أبراج المركز المالي والاستثماري
      desc: 'قاعدة أصول قوية واستثمارات استراتيجية متنوعة تدار بكفاءة لضمان عوائد مجزية ومستقرة لشركائنا ومستثمرينا.',
      bullets: [
        'صناديق استثمار عقارية مدروسة المخاطر',
        'شراكات نوعية مع كبرى الجهات التمويلية',
        'حوكمة مالية وإدارية مدققة'
      ]
    },
    'stat-satisfaction': {
      title: '98% نسبة رضا العملاء',
      tag: 'ثقة الملاك والمستثمرين',
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80', // تسليم مفتاح المنزل والمصافحة العقارية
      desc: 'ثقة بنيت عبر الشفافية، جودة المواد المستخدمة، والمتابعة المستمرة لمتطلبات الملاك حتى بعد استلام العقار.',
      bullets: [
        'فريق متخصص لخدمة العملاء وطلبات الضمان',
        'استبيانات قياس رضا دورية لتطوير الخدمات',
        'تطبيق مخصص للملاك لإدارة خدمات وصيانة العقار'
      ]
    },

    // --- المشاريع الرائدة ---
    'project-residence': {
      title: 'مجمع ليدار ريزيدنس',
      tag: 'سكني فاخر',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80', // كمباوند وفلل عصرية فخمة مع مسبح وحدائق
      desc: 'مجتمع سكني متكامل ومغلق يضم فلل وتاون هاوس مستقلة بتشطيبات فندقية فاخرة وحدائق خاصة تحقق أقصى درجات الخصوصية.',
      bullets: [
        'موقع حيوي بالقرب من الطرق والمحاور الرئيسية',
        'مسابح ومراكز لياقة بدنية وحدائق مخصصة للسكان',
        'أنظمة دخول ذكية وحراسة أمنية على مدار الساعة'
      ]
    },
    'project-business': {
      title: 'ليدار بزنس أفينيو',
      tag: 'أبراج ومكاتب ذكية',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80', // مقرات ومكاتب أعمال ذكية وفخمة
      desc: 'وجهة أعمال متطورة توفر مساحات مكتبية مرنة تستوعب مقرات الشركات الكبرى ورواد الأعمال وفق أحدث المعايير التقنية.',
      bullets: [
        'واجهات زجاجية عازلة للحرارة وموفرة للطاقة',
        'مواقف سيارات سفلية ذكية متعددة المستويات',
        'قاعات اجتماعات مشتركة ومرافق خدمية ومقاهٍ راقية'
      ]
    },
    'project-oasis': {
      title: 'واحة ليدار سنتر',
      tag: 'وجهة تسوق وترفيه مفتوحة',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80', // بوليفارد وممشى خارجي تجاري ومطاعم مفتوحة
      desc: 'مجمع تجاري وممشى خارجي حديث يجمع بين التسوق العصري، المطاعم والمقاهي العالمية، والمسطحات المائية في أجواء حيوية.',
      bullets: [
        'مساحات تجارية وتأجيرية واسعة ومصممة بعناية',
        'جلسات خارجية ومسطحات مائية مستمرة',
        'طاقة استيعابية للمواقف تخدم أكثر من 1200 مركبة'
      ]
    },

    // --- الفروع والانتشار الجغرافي ---
    'branch-riyadh': {
      title: 'فرع الرياض (المقر الرئيسي)',
      tag: 'العاصمة - نجد',
      img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80', // أبراج عصرية في بيئة العاصمة
      desc: 'المقر الرئيسي للشركة في قلب العاصمة، حيث تقاد العمليات المركزية ومشاريع التطوير الاستراتيجية الكبرى في منطقة نجد.',
      bullets: [
        'الموقع: طريق الملك فهد - حي العليا',
        'مركز كبار المستثمرين والاستشارات العقارية',
        'إدارة التخطيط والدراسات الهندسية والتطوير'
      ]
    },
    'branch-jeddah': {
      title: 'فرع جدة (عروس البحر الأحمر)',
      tag: 'المنطقة الغربية',
      img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80', // ساحل بحري وواجهة بحرية وأبراج سياحية
      desc: 'يقود مشاريع التطوير الساحلية الفاخرة والمجمعات متعددة الاستخدامات المتناغمة مع الواجهة البحرية وحركة السياحة السريعة.',
      bullets: [
        'الموقع: طريق الملك عبد العزيز - حي الشاطئ',
        'إدارة المشاريع السكنية والتجارية الساحلية',
 'فريق استشارات استثمارية للمنطقة الغربية'
      ]
    },
    'branch-khobar': {
      title: 'فرع الخبر والمنطقة الشرقية',
      tag: 'المنطقة الشرقية',
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80', // عمارة ومباني حضرية متطورة
      desc: 'تلبية الطلب المتنامي للمجمعات السكنية والمقرات التجارية الذكية لكبرى الشركات والمؤسسات في مدن الخبر والدمام والظهران.',
      bullets: [
        'الموقع: طريق الأمير فيصل بن فهد',
        'تطوير وتأجير المجمعات السكنية والمكتبية',
        'خدمة عملاء ومستثمري المنطقة الشرقية'
      ]
    },
    'branch-makkah': {
      title: 'فرع مكة المكرمة',
      tag: 'مشاريع الضيافة المركزية',
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80', // فندق ضيافة فاخر وأبراج إيواء كبرى
      desc: 'متخصص في تطوير الفنادق الفاخرة والشقق الفندقية المخدومة ومشاريع الاستثمار الوقفي والتجاري لخدمة زوار العاصمة المقدسة.',
      bullets: [
        'الموقع: طريق الدائري الثالث',
        'تطوير وإدارة أبراج الضيافة والإيواء الفندقي',
        'صياغة حلول استثمارية نوعية للأصول القريبة من الحرم'
      ]
    }
  };

  // 2. منطق التنقل بين الشرائح
  var slides = document.querySelectorAll('.slide');
  var totalSlides = slides.length;
  var currentIndex = 0;

  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var slideCounter = document.getElementById('slideCounter');
  var progressBar = document.getElementById('progressBar');
  var dotsContainer = document.getElementById('dotsContainer');
  var fullscreenBtn = document.getElementById('fullscreenBtn');

  // عناصر النافذة المنبثقة (Modal)
  var detailsModal = document.getElementById('detailsModal');
  var modalCloseBtn = document.getElementById('modalCloseBtn');
  var modalImg = document.getElementById('modalImg');
  var modalTag = document.getElementById('modalTag');
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var modalList = document.getElementById('modalList');

  var isModalOpen = false;

  // منع ظهور أي صورة مكسورة
  if (modalImg) {
    modalImg.onerror = function () {
      this.src = fallbackImageUrl;
    };
  }

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    slides.forEach(function (_, idx) {
      var dot = document.createElement('div');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', function () {
        goToSlide(idx);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlideView() {
    slides.forEach(function (slide, idx) {
      slide.classList.toggle('active', idx === currentIndex);
    });

    var dots = document.querySelectorAll('.dot');
    dots.forEach(function (dot, idx) {
      dot.classList.toggle('active', idx === currentIndex);
    });

    var currentNum = (currentIndex + 1 < 10 ? '0' : '') + (currentIndex + 1);
    var totalNum = (totalSlides < 10 ? '0' : '') + totalSlides;
    if (slideCounter) {
      slideCounter.textContent = currentNum + ' / ' + totalNum;
    }

    if (progressBar) {
      var progressPercent = ((currentIndex + 1) / totalSlides) * 100;
      progressBar.style.width = progressPercent + '%';
    }

    if (prevBtn) prevBtn.disabled = (currentIndex === 0);
    if (nextBtn) nextBtn.disabled = (currentIndex === totalSlides - 1);
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentIndex = index;
      updateSlideView();
    }
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlideView();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlideView();
    }
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
 // 3. فتح وإغلاق النافذة المنبثقة
  function openModal(id) {
    var data = detailsDatabase[id];
    if (!data) return;

    modalImg.src = data.img;
    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    modalList.innerHTML = '';
    data.bullets.forEach(function (point) {
      var li = document.createElement('li');
      li.textContent = point;
      modalList.appendChild(li);
    });

    detailsModal.classList.add('open');
    isModalOpen = true;
  }

  function closeModal() {
    detailsModal.classList.remove('open');
    isModalOpen = false;
  }

  var clickableCards = document.querySelectorAll('.clickable-card');
  clickableCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var detailsId = card.getAttribute('data-details-id');
      if (detailsId) {
        openModal(detailsId);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (detailsModal) {
    detailsModal.addEventListener('click', function (e) {
      if (e.target === detailsModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal();
      return;
    }

    if (isModalOpen) return;

    if (e.key === 'ArrowLeft' || e.key === ' ') {
      nextSlide();
    } else if (e.key === 'ArrowRight') {
      prevSlide();
    }
  });

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function () {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(function (err) {
          console.error(err);
        });
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        }
      }
    });
  }

  createDots();
  updateSlideView();
});