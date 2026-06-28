/**
 * Internationalization translations for Woorkeasy
 * Default language: English (en)
 * Supports: English, Spanish, French, German, Portuguese, Chinese, Japanese, Hindi, Arabic
 */

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const translations = {
  en: {
    // Header / Nav
    'nav.imageTools': 'Image Tools',
    'nav.pdfTools': 'PDF Tools',
    'nav.finance': 'Finance',
    'nav.devTools': 'Dev Tools',
    'nav.utility': 'Utility',
    'nav.requestTool': 'Request a Tool',

    // Hero
    'hero.badge': 'No signup • No upload • 100% free',
    'hero.title': 'Free Online Tools for Work & Finance',
    'hero.subtitle': 'Convert, calculate & automate your tasks instantly — no signup, no upload, no limits.',
    'hero.browseTools': 'Browse All Tools',
    'hero.requestTool': 'Request a Tool',

    // Trust strip
    'trust.privacy': 'Files never leave your browser',
    'trust.instant': 'Instant processing',
    'trust.noLimits': 'No file limits',
    'trust.mobile': 'Works on mobile',

    // Tools section
    'tools.eyebrow': 'All Tools',
    'tools.heading': 'Pick a tool, get it done.',

    // Privacy section
    'privacy.eyebrow': 'Privacy First',
    'privacy.heading': 'Your files stay with you.',
    'privacy.text': 'Every tool runs entirely in your browser. Your files are never uploaded to any server. No accounts, no tracking, no data collection.',

    // Contact section
    'contact.eyebrow': 'Need Something Else?',
    'contact.heading': 'Request a tool.',
    'contact.text': 'We build tools on request. Need a converter, optimizer, or formatter? Let us know.',

    // Common tool UI
    'tool.upload': 'Drag & drop file here, or',
    'tool.browse': 'browse',
    'tool.download': 'Download',
    'tool.processing': 'Processing...',
    'tool.reset': 'Reset',
    'tool.preview': 'Preview',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  },

  es: {
    'nav.imageTools': 'Herramientas de Imagen',
    'nav.pdfTools': 'Herramientas PDF',
    'nav.finance': 'Finanzas',
    'nav.devTools': 'Herramientas Dev',
    'nav.utility': 'Utilidades',
    'nav.requestTool': 'Solicitar herramienta',

    'hero.badge': '100% Gratis • Sin registro • En el navegador',
    'hero.title': 'Todas las herramientas, sin complicaciones.',
    'hero.subtitle': 'Herramientas en línea gratuitas para imágenes, PDFs y finanzas. Incluso añadimos herramientas a pedido.',
    'hero.browseTools': 'Ver herramientas',
    'hero.requestTool': 'Solicitar herramienta',

    'trust.privacy': 'Los archivos nunca salen de tu navegador',
    'trust.instant': 'Procesamiento instantáneo',
    'trust.noLimits': 'Sin límites de archivo',
    'trust.mobile': 'Funciona en móvil',

    'tools.eyebrow': 'Todas las herramientas',
    'tools.heading': 'Elige una herramienta, hazlo.',

    'privacy.eyebrow': 'Privacidad Primero',
    'privacy.heading': 'Tus archivos se quedan contigo.',
    'privacy.text': 'Cada herramienta se ejecuta completamente en tu navegador. Tus archivos nunca se suben a ningún servidor. Sin cuentas, sin rastreo, sin recopilación de datos.',

    'contact.eyebrow': '¿Necesitas algo más?',
    'contact.heading': 'Solicita una herramienta.',
    'contact.text': 'Creamos herramientas a pedido. ¿Necesitas un convertidor, optimizador o formateador? Avísanos.',

    'tool.upload': 'Arrastra y suelta el archivo aquí, o',
    'tool.browse': 'explora',
    'tool.download': 'Descargar',
    'tool.processing': 'Procesando...',
    'tool.reset': 'Reiniciar',
    'tool.preview': 'Vista previa',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
  },

  fr: {
    'nav.imageTools': 'Outils Image',
    'nav.pdfTools': 'Outils PDF',
    'nav.finance': 'Finance',
    'nav.devTools': 'Outils Dev',
    'nav.utility': 'Utilitaires',
    'nav.requestTool': 'Demander un outil',

    'hero.badge': '100% Gratuit • Sans inscription • Dans le navigateur',
    'hero.title': 'Tous les outils, sans tracas.',
    'hero.subtitle': 'Outils en ligne gratuits pour les images, PDFs et finances. Nous ajoutons même des outils sur demande.',
    'hero.browseTools': 'Parcourir les outils',
    'hero.requestTool': 'Demander un outil',

    'trust.privacy': 'Les fichiers ne quittent jamais votre navigateur',
    'trust.instant': 'Traitement instantané',
    'trust.noLimits': 'Aucune limite de fichier',
    'trust.mobile': 'Fonctionne sur mobile',

    'tools.eyebrow': 'Tous les outils',
    'tools.heading': 'Choisissez un outil, c\'est fait.',

    'privacy.eyebrow': 'Confidentialité d\'abord',
    'privacy.heading': 'Vos fichiers restent avec vous.',
    'privacy.text': 'Chaque outil fonctionne entièrement dans votre navigateur. Vos fichiers ne sont jamais téléchargés sur un serveur. Pas de comptes, pas de suivi, pas de collecte de données.',

    'contact.eyebrow': 'Besoin d\'autre chose ?',
    'contact.heading': 'Demandez un outil.',
    'contact.text': 'Nous créons des outils sur demande. Besoin d\'un convertisseur, optimiseur ou formateur ? Dites-le nous.',

    'tool.upload': 'Glissez-déposez le fichier ici, ou',
    'tool.browse': 'parcourir',
    'tool.download': 'Télécharger',
    'tool.processing': 'Traitement...',
    'tool.reset': 'Réinitialiser',
    'tool.preview': 'Aperçu',

    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Confidentialité',
    'footer.terms': 'Conditions',
  },

  de: {
    'nav.imageTools': 'Bild-Werkzeuge',
    'nav.pdfTools': 'PDF-Werkzeuge',
    'nav.finance': 'Finanzen',
    'nav.devTools': 'Entwickler-Tools',
    'nav.utility': 'Dienstprogramme',
    'nav.requestTool': 'Tool anfragen',

    'hero.badge': '100% Kostenlos • Keine Anmeldung • Browserbasiert',
    'hero.title': 'Alle Werkzeuge, null Aufwand.',
    'hero.subtitle': 'Kostenlose Online-Tools für Bilder, PDFs und Finanzen. Wir fügen sogar Tools auf Anfrage hinzu.',
    'hero.browseTools': 'Tools durchsuchen',
    'hero.requestTool': 'Tool anfragen',

    'trust.privacy': 'Dateien verlassen nie Ihren Browser',
    'trust.instant': 'Sofortige Verarbeitung',
    'trust.noLimits': 'Keine Dateilimits',
    'trust.mobile': 'Funktioniert auf Mobilgeräten',

    'tools.eyebrow': 'Alle Werkzeuge',
    'tools.heading': 'Wählen Sie ein Tool, erledigt.',

    'privacy.eyebrow': 'Datenschutz zuerst',
    'privacy.heading': 'Ihre Dateien bleiben bei Ihnen.',
    'privacy.text': 'Jedes Tool läuft vollständig in Ihrem Browser. Ihre Dateien werden niemals auf einen Server hochgeladen. Keine Konten, kein Tracking, keine Datenerfassung.',

    'contact.eyebrow': 'Brauchen Sie etwas anderes?',
    'contact.heading': 'Fordern Sie ein Tool an.',
    'contact.text': 'Wir erstellen Tools auf Anfrage. Benötigen Sie einen Konverter, Optimierer oder Formatierer? Lassen Sie es uns wissen.',

    'tool.upload': 'Datei hier ablegen, oder',
    'tool.browse': 'durchsuchen',
    'tool.download': 'Herunterladen',
    'tool.processing': 'Verarbeitung...',
    'tool.reset': 'Zurücksetzen',
    'tool.preview': 'Vorschau',

    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'Nutzungsbedingungen',
  },

  pt: {
    'nav.imageTools': 'Ferramentas de Imagem',
    'nav.pdfTools': 'Ferramentas PDF',
    'nav.finance': 'Finanças',
    'nav.devTools': 'Ferramentas Dev',
    'nav.utility': 'Utilitários',
    'nav.requestTool': 'Solicitar ferramenta',

    'hero.badge': '100% Gratuito • Sem cadastro • No navegador',
    'hero.title': 'Todas as ferramentas, sem complicação.',
    'hero.subtitle': 'Ferramentas online gratuitas para imagens, PDFs e finanças. Até adicionamos ferramentas sob demanda.',
    'hero.browseTools': 'Ver ferramentas',
    'hero.requestTool': 'Solicitar ferramenta',

    'trust.privacy': 'Arquivos nunca saem do seu navegador',
    'trust.instant': 'Processamento instantâneo',
    'trust.noLimits': 'Sem limites de arquivo',
    'trust.mobile': 'Funciona no celular',

    'tools.eyebrow': 'Todas as ferramentas',
    'tools.heading': 'Escolha uma ferramenta, pronto.',

    'privacy.eyebrow': 'Privacidade Primeiro',
    'privacy.heading': 'Seus arquivos ficam com você.',
    'privacy.text': 'Cada ferramenta roda inteiramente no seu navegador. Seus arquivos nunca são enviados para nenhum servidor. Sem contas, sem rastreamento, sem coleta de dados.',

    'contact.eyebrow': 'Precisa de algo mais?',
    'contact.heading': 'Solicite uma ferramenta.',
    'contact.text': 'Criamos ferramentas sob demanda. Precisa de um conversor, otimizador ou formatador? Nos avise.',

    'tool.upload': 'Arraste e solte o arquivo aqui, ou',
    'tool.browse': 'procurar',
    'tool.download': 'Baixar',
    'tool.processing': 'Processando...',
    'tool.reset': 'Redefinir',
    'tool.preview': 'Pré-visualização',

    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Privacidade',
    'footer.terms': 'Termos',
  },

  zh: {
    'nav.imageTools': '图片工具',
    'nav.pdfTools': 'PDF工具',
    'nav.finance': '财务',
    'nav.devTools': '开发工具',
    'nav.utility': '实用工具',
    'nav.requestTool': '请求工具',

    'hero.badge': '100%免费 • 无需注册 • 基于浏览器',
    'hero.title': '所有工具，零麻烦。',
    'hero.subtitle': '免费在线图片、PDF和财务工具。我们还根据您的请求添加工具。',
    'hero.browseTools': '浏览工具',
    'hero.requestTool': '请求工具',

    'trust.privacy': '文件永远不会离开您的浏览器',
    'trust.instant': '即时处理',
    'trust.noLimits': '无文件限制',
    'trust.mobile': '支持手机使用',

    'tools.eyebrow': '所有工具',
    'tools.heading': '选择工具，完成任务。',

    'privacy.eyebrow': '隐私优先',
    'privacy.heading': '您的文件留在您身边。',
    'privacy.text': '每个工具完全在您的浏览器中运行。您的文件永远不会上传到任何服务器。无账户、无追踪、无数据收集。',

    'contact.eyebrow': '需要其他东西？',
    'contact.heading': '请求一个工具。',
    'contact.text': '我们根据请求构建工具。需要转换器、优化器或格式化器？告诉我们。',

    'tool.upload': '将文件拖放到此处，或',
    'tool.browse': '浏览',
    'tool.download': '下载',
    'tool.processing': '处理中...',
    'tool.reset': '重置',
    'tool.preview': '预览',

    'footer.rights': '版权所有。',
    'footer.privacy': '隐私',
    'footer.terms': '条款',
  },

  ja: {
    'nav.imageTools': '画像ツール',
    'nav.pdfTools': 'PDFツール',
    'nav.finance': 'ファイナンス',
    'nav.devTools': '開発ツール',
    'nav.utility': 'ユーティリティ',
    'nav.requestTool': 'ツールをリクエスト',

    'hero.badge': '100%無料 • 登録不要 • ブラウザベース',
    'hero.title': 'すべてのツール、手間ゼロ。',
    'hero.subtitle': '画像、PDF、ファイナンスのための無料オンラインツール。リクエストに応じてツールも追加します。',
    'hero.browseTools': 'ツールを見る',
    'hero.requestTool': 'ツールをリクエスト',

    'trust.privacy': 'ファイルはブラウザから出ません',
    'trust.instant': '即座に処理',
    'trust.noLimits': 'ファイル制限なし',
    'trust.mobile': 'モバイル対応',

    'tools.eyebrow': 'すべてのツール',
    'tools.heading': 'ツールを選んで、完了。',

    'privacy.eyebrow': 'プライバシー最優先',
    'privacy.heading': 'ファイルはあなたの手元に。',
    'privacy.text': 'すべてのツールはブラウザ内で完全に動作します。ファイルはサーバーにアップロードされません。アカウント不要、追跡なし、データ収集なし。',

    'contact.eyebrow': '他に必要なものは？',
    'contact.heading': 'ツールをリクエスト。',
    'contact.text': 'リクエストに応じてツールを作成します。コンバーター、オプティマイザー、フォーマッターが必要ですか？お知らせください。',

    'tool.upload': 'ファイルをここにドラッグ＆ドロップ、または',
    'tool.browse': '参照',
    'tool.download': 'ダウンロード',
    'tool.processing': '処理中...',
    'tool.reset': 'リセット',
    'tool.preview': 'プレビュー',

    'footer.rights': '全著作権所有。',
    'footer.privacy': 'プライバシー',
    'footer.terms': '利用規約',
  },

  hi: {
    'nav.imageTools': 'इमेज टूल्स',
    'nav.pdfTools': 'PDF टूल्स',
    'nav.finance': 'वित्त',
    'nav.devTools': 'डेव टूल्स',
    'nav.utility': 'यूटिलिटी',
    'nav.requestTool': 'टूल अनुरोध करें',

    'hero.badge': '100% मुफ़्त • कोई साइन-अप नहीं • ब्राउज़र-आधारित',
    'hero.title': 'सभी टूल्स, बिना किसी परेशानी के।',
    'hero.subtitle': 'इमेज, PDF और वित्त के लिए मुफ़्त ऑनलाइन टूल्स। हम आपके अनुरोध पर टूल्स भी जोड़ते हैं।',
    'hero.browseTools': 'टूल्स देखें',
    'hero.requestTool': 'टूल अनुरोध करें',

    'trust.privacy': 'फ़ाइलें कभी आपके ब्राउज़र से बाहर नहीं जातीं',
    'trust.instant': 'तुरंत प्रोसेसिंग',
    'trust.noLimits': 'कोई फ़ाइल सीमा नहीं',
    'trust.mobile': 'मोबाइल पर काम करता है',

    'tools.eyebrow': 'सभी टूल्स',
    'tools.heading': 'एक टूल चुनें, काम हो गया।',

    'privacy.eyebrow': 'गोपनीयता पहले',
    'privacy.heading': 'आपकी फ़ाइलें आपके पास रहती हैं।',
    'privacy.text': 'हर टूल पूरी तरह से आपके ब्राउज़र में चलता है। आपकी फ़ाइलें कभी किसी सर्वर पर अपलोड नहीं होतीं। कोई अकाउंट नहीं, कोई ट्रैकिंग नहीं, कोई डेटा संग्रह नहीं।',

    'contact.eyebrow': 'कुछ और चाहिए?',
    'contact.heading': 'एक टूल का अनुरोध करें।',
    'contact.text': 'हम अनुरोध पर टूल बनाते हैं। कनवर्टर, ऑप्टिमाइज़र या फ़ॉर्मेटर चाहिए? हमें बताएं।',

    'tool.upload': 'फ़ाइल यहाँ ड्रैग और ड्रॉप करें, या',
    'tool.browse': 'ब्राउज़ करें',
    'tool.download': 'डाउनलोड',
    'tool.processing': 'प्रोसेसिंग...',
    'tool.reset': 'रीसेट',
    'tool.preview': 'पूर्वावलोकन',

    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'footer.privacy': 'गोपनीयता',
    'footer.terms': 'शर्तें',
  },

  ar: {
    'nav.imageTools': 'أدوات الصور',
    'nav.pdfTools': 'أدوات PDF',
    'nav.finance': 'المالية',
    'nav.devTools': 'أدوات المطورين',
    'nav.utility': 'الأدوات المساعدة',
    'nav.requestTool': 'طلب أداة',

    'hero.badge': 'مجاني 100% • بدون تسجيل • في المتصفح',
    'hero.title': 'جميع الأدوات، بدون عناء.',
    'hero.subtitle': 'أدوات مجانية عبر الإنترنت للصور وملفات PDF والمالية. نضيف أدوات حسب طلبك أيضاً.',
    'hero.browseTools': 'تصفح الأدوات',
    'hero.requestTool': 'طلب أداة',

    'trust.privacy': 'الملفات لا تغادر متصفحك أبداً',
    'trust.instant': 'معالجة فورية',
    'trust.noLimits': 'بدون حدود للملفات',
    'trust.mobile': 'يعمل على الهاتف',

    'tools.eyebrow': 'جميع الأدوات',
    'tools.heading': 'اختر أداة، أنجز المهمة.',

    'privacy.eyebrow': 'الخصوصية أولاً',
    'privacy.heading': 'ملفاتك تبقى معك.',
    'privacy.text': 'كل أداة تعمل بالكامل في متصفحك. لا يتم تحميل ملفاتك أبداً إلى أي خادم. بدون حسابات، بدون تتبع، بدون جمع بيانات.',

    'contact.eyebrow': 'تحتاج شيئاً آخر؟',
    'contact.heading': 'اطلب أداة.',
    'contact.text': 'نبني أدوات حسب الطلب. تحتاج محوّل أو محسّن أو منسّق؟ أخبرنا.',

    'tool.upload': 'اسحب وأفلت الملف هنا، أو',
    'tool.browse': 'تصفح',
    'tool.download': 'تحميل',
    'tool.processing': 'جاري المعالجة...',
    'tool.reset': 'إعادة تعيين',
    'tool.preview': 'معاينة',

    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
  },
};
