interface IConfig {
  baseURL: string;
  appBaseURL: string;
}

interface ITinyMceConfig {
  tiny_mce_api_key: string;
}

interface IDateTimeFormatConfig {
  dateViewFormat: string;
  fullDateViewFormat: string;
  yearAndMonthFormat: string;
  calendarFormatWithTime: string;
  timeOnlyView: string;
  emailListDateFormatView: string;
  emailListDateFormatViewWithYear: string;
  yearMonthDateFormat: string;
}

interface IPaymentConfig {
  card_connect_iframe_url_live: string;
  card_connect_iframe_url_test: string;
}

interface IMaskFormatConfig {
  date: string;
  phone: string;
  zip: string;
  last4SSN: string;
  npi: string;
  ein: string;
  taxId: string;
}

interface IDefaultConfig {
  port: number;
}

interface IMode {
  LOCAL: IConfig;
  DEV: IConfig;
  QA: IConfig;
  UAT: IConfig;
  PROD: IConfig;
}

const mode: IMode = {
  LOCAL: {
    baseURL: 'http://localhost:3000/api',
    appBaseURL: 'http://localhost:4200',
  },
  DEV: {
    baseURL: 'https://dev-api-v3.vitafyhealth.com/api',
    appBaseURL: 'https://dev-app.vitafyhealth.com',
  },
  QA: {
    baseURL: 'https://qa-api-v3.vitafyhealth.com/api',
    appBaseURL: 'https://qa-app.vitafyhealth.com',
  },
  UAT: {
    baseURL: 'https://uat-api-v3.vitafyhealth.com/api',
    appBaseURL: 'https://uat-app.vitafyhealth.com',
  },
  PROD: {
    baseURL: 'https://api-v3.vitafyhealth.com/api',
    appBaseURL: 'https://app.vitafyhealth.com',
  },
};

const paymentConfig: IPaymentConfig = {
  card_connect_iframe_url_live: 'https://fts.cardconnect.com',
  card_connect_iframe_url_test: 'https://fts-uat.cardconnect.com',
};

const tinyMceConfig: ITinyMceConfig = {
  tiny_mce_api_key: 'jlopzuc4kn609sk6bluav0owywoe1p7rza9sgxwygb1gg20s',
};

const dateTimeFormatConfig: IDateTimeFormatConfig = {
  dateViewFormat: 'MM/DD/YYYY',
  fullDateViewFormat: 'MM/DD/YYYY hh:mm A',
  yearAndMonthFormat: 'YYYY-MM',
  calendarFormatWithTime: 'LLL',
  timeOnlyView: 'LT',
  emailListDateFormatView: 'MMM D',
  emailListDateFormatViewWithYear: 'll',
  yearMonthDateFormat: 'YYYY-MM-DD',
};

const maskFormatConfig: IMaskFormatConfig = {
  date: '##/##/####',
  phone: '(###) ###-####',
  zip: '#####',
  last4SSN: '####',
  npi: '##########',
  ein: '#########',
  taxId: '#########',
};

const defaultConfig: IDefaultConfig = {
  port: 4200,
};

const modeConfig =
  mode[(process.env.REACT_APP_ENVIRONMENT as keyof IMode) || 'DEV'];

const config: IConfig &
  IDefaultConfig &
  IDateTimeFormatConfig &
  IPaymentConfig &
  IMaskFormatConfig &
  ITinyMceConfig = {
  ...defaultConfig,
  ...modeConfig,
  ...dateTimeFormatConfig,
  ...maskFormatConfig,
  ...paymentConfig,
  ...tinyMceConfig,
};

export default config;
