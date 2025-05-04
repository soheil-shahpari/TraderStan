fetch('settings.json')
  .then(response => response.json())
  .then(settings => {
    // اعمال اندازه هدر
    const header = document.querySelector('header');
    if (header && settings.headerSize === 'large') {
      header.style.height = '100px';
    } else if (header) {
      header.style.height = '60px';
    }

    // اعمال تم
    if (settings.theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    // اعمال زبان
    document.documentElement.setAttribute('lang', settings.language);
  })
  .catch(error => console.error('خطا در بارگذاری تنظیمات:', error));