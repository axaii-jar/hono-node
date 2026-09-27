export const MOCK_HELP_VIDEOS = [
  {
    title: 'How to save gold daily',
    media: {
      url: 'https://example.com/videos/daily-savings.mp4',
      type: 'VIDEO',
    },
  },
  {
    title: 'Understanding digital gold',
    media: {
      url: 'https://example.com/videos/digital-gold.mp4',
      type: 'VIDEO',
    },
  },
];

export const MOCK_SECTIONS = [
  {
    key: 'BROWSE_HELP',
    value: 'Browse Help',
    iconUrl: 'https://example.com/icons/browse-help.svg',
  },
  {
    key: 'BROWSE_PRODUCTS',
    value: 'Browse Products',
    iconUrl: 'https://example.com/icons/browse-products.svg',
  },
  {
    key: 'NEED_HELP',
    value: 'Need Help',
    iconUrl: 'https://example.com/icons/need-help.svg',
  },
  {
    key: 'HELP_VIDEOS',
    value: 'Help Videos',
    iconUrl: 'https://example.com/icons/help-videos.svg',
  },
];

export const MOCK_CATEGORIES = [
  {
    key: 'GENERAL',
    value: 'General',
    iconUrl: 'https://example.com/icons/general.svg',
  },
  {
    key: 'GOLD_SILVER_SAVINGS',
    value: 'Gold & Silver Savings',
    iconUrl: 'https://example.com/icons/gold-silver.svg',
  },
  {
    key: 'TRANSACTION_ISSUES',
    value: 'Transaction Issues',
    iconUrl: 'https://example.com/icons/transaction.svg',
  },
  {
    key: 'UPI_ID',
    value: 'UPI ID',
    iconUrl: 'https://example.com/icons/upi.svg',
  },
  {
    key: 'ID_VERIFICATION',
    value: 'ID Verification',
    iconUrl: 'https://example.com/icons/id-verification.svg',
  },
  {
    key: 'PROFILE',
    value: 'Profile',
    iconUrl: 'https://example.com/icons/profile.svg',
  },
  {
    key: 'WITHDRAWALS',
    value: 'Withdrawals',
    iconUrl: 'https://example.com/icons/withdrawals.svg',
  },
];

export const MOCK_SUB_CATEGORIES = [
  {
    key: 'DAILY_SAVINGS',
    value: 'Daily Savings',
    iconUrl: 'https://example.com/icons/daily-savings.svg',
  },
  {
    key: 'WEEKLY_SAVINGS',
    value: 'Weekly Savings',
    iconUrl: 'https://example.com/icons/weekly-savings.svg',
  },
  {
    key: 'MONTHLY_SAVINGS',
    value: 'Monthly Savings',
    iconUrl: 'https://example.com/icons/monthly-savings.svg',
  },
  {
    key: 'ABOUT_JAR',
    value: 'About Jar',
    iconUrl: 'https://example.com/icons/about-jar.svg',
  },
  {
    key: 'DIGITAL_GOLD_AND_SILVER_BASICS',
    value: 'Digital Gold & Silver Basics',
    iconUrl: 'https://example.com/icons/gold-basics.svg',
  },
];

export const MOCK_QUESTIONS = [
  {
    questionKey: 'WHAT_IS_JAR',
    language: 'ENGLISH',
    question: 'What is Jar app?',
  },
  {
    questionKey: 'HOW_TO_SAVE_GOLD',
    language: 'ENGLISH',
    question: 'How do I start saving gold on Jar?',
  },
  {
    questionKey: 'WITHDRAWAL_PROCESS',
    language: 'ENGLISH',
    question: 'How do I withdraw my gold savings?',
  },
  {
    questionKey: 'IS_JAR_SAFE',
    language: 'ENGLISH',
    question: 'Is Jar safe and secure?',
  },
];

export const MOCK_ANSWERS: Record<string, any> = {
  WHAT_IS_JAR: {
    question: 'What is Jar app?',
    answer:
      'Jar is a micro-savings platform that helps you save money in digital gold automatically. Every time you spend, Jar rounds off the amount and invests the difference in gold.',
    language: 'ENGLISH',
    nextStepCTA: {
      text: 'Start saving now',
      deeplink: 'jar://savings/start',
      iconUrl: 'https://example.com/icons/start-saving.svg',
    },
    footer: {
      message: 'Was this helpful?',
      btnTexts: ['Yes', 'No'],
    },
  },
  HOW_TO_SAVE_GOLD: {
    question: 'How do I start saving gold on Jar?',
    answer:
      'You can start saving gold by enabling daily savings, where we round off your daily transactions and invest the spare change in gold. You can also make one-time purchases or set up recurring savings.',
    language: 'ENGLISH',
    audioMedia: {
      url: 'https://example.com/audio/how-to-save.mp3',
      type: 'AUDIO',
    },
    nextStepCTA: {
      text: 'Enable daily savings',
      deeplink: 'jar://settings/daily-savings',
      iconUrl: 'https://example.com/icons/enable.svg',
    },
  },
  WITHDRAWAL_PROCESS: {
    question: 'How do I withdraw my gold savings?',
    answer:
      'To withdraw your gold savings, go to the Withdraw section in the app. You can choose to sell your gold and receive the money in your bank account, or request physical delivery of gold coins.',
    language: 'ENGLISH',
    nextStepCTA: {
      text: 'Withdraw now',
      deeplink: 'jar://withdraw',
      iconUrl: 'https://example.com/icons/withdraw.svg',
    },
  },
  IS_JAR_SAFE: {
    question: 'Is Jar safe and secure?',
    answer:
      'Yes, Jar is completely safe. Your gold is stored with MMTC-PAMP, a government-backed entity. All transactions are secured with bank-grade encryption, and your gold is insured against theft or loss.',
    language: 'ENGLISH',
    footer: {
      message: 'Need more help?',
      btnTexts: ['Contact Support', 'View Safety Details'],
    },
  },
};

export const MOCK_FEEDBACK_HELPFUL = {
  message: 'Great! Glad we could help.',
  iconUrl: 'https://example.com/icons/happy.svg',
  nextStepCTA: {
    text: 'Continue exploring',
    deeplink: 'jar://faq',
    iconUrl: 'https://example.com/icons/continue.svg',
  },
};

export const MOCK_FEEDBACK_NOT_HELPFUL = {
  message: 'Sorry to hear that. Would you like to contact support?',
  iconUrl: 'https://example.com/icons/sad.svg',
  nextStepCTA: {
    text: 'Contact Support',
    deeplink: 'jar://support',
    iconUrl: 'https://example.com/icons/support.svg',
  },
};

export const MOCK_SEARCH_RESPONSES = [
  {
    text: 'You can start saving gold by enabling daily savings in the app settings.',
    media: {
      url: 'https://example.com/images/gold-savings.png',
      type: 'IMAGE',
    },
    nextActionCta: {
      text: 'Enable savings',
      deeplink: 'jar://settings/savings',
      iconUrl: 'https://example.com/icons/enable.svg',
    },
  },
  {
    text: 'Your gold is stored securely with MMTC-PAMP and is fully insured.',
    media: {
      url: 'https://example.com/images/security.png',
      type: 'IMAGE',
    },
  },
];
