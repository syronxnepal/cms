const commonConstants = {
  ACCEPTED_FILES: [
    '.pdf',
    '.jpg',
    '.jpeg',
    '.doc',
    '.docx',
    '.txt',
    '.PDF',
    '.JPG',
    '.JPEG',
    '.DOC',
    '.DOCX',
    '.TXT',
  ],
  ANCILLARY_OFFERING_OTHER_TYPE: 'Others',
  CASE_ID_QUERY_PARAMETER: 'caseId',
  CONTACT_US_URL: 'https://vitafyhealth.com/contact-us',
  DEFAULT_LOCATION: {
    zip: 53201,
    city: 'Milwaukee',
    state: 'WI',
    st: 'WI',
    lat: 43.0113,
    lng: -87.958,
    displayName: 'Milwaukee, WI',
  },
  DEFAULT_NETWORK: 'HPS',
  DEFAULT_TABLE_FILTER: {
    keyword: '',
    limit: 25,
    offset: 0,
  },
  DEFAULT_QUESTIONNAIRE_RESPONDENT_FILTER: {
    limit: 100,
    offset: 0,
    code: '',
  },
  DEFAULT_AUTOCOMPLETE_TABLE_FILTER: {
    keyword: '',
    limit: 10,
    offset: 0,
  },
  DEFAULT_SITE_METADATA: {
    TITLE: 'Vitafy 360',
    DESCRIPTION:
      'Vitafy Health | A free-market healthcare solution for connecting doctors and patients nationwide',
    FAVICON:
      'https://imgix.cosmicjs.com/a43a50c0-5636-11eb-8a32-4d2c44a0c2f8-favicon.ico',
  },
  DIGITAL_SIGNATURE_FONTS: ['oleo', 'bebas', 'brush', 'pacifico'],
  DEFAULT_RADIUS: 30,
  DEFAULT_AUTOCOMPLETE_RADIUS: 60,
  MEMBERSHIP_OFFERING_OTHER_TYPE: 'Others',
  NETWORK_DIRECTORY: 'NETWORK_DIRECTORY',
  PAGE_ITEM_LIMITS: [25, 50, 100, 250, 500],
  RADIUS_ITEM_LIMITS: [15, 30, 60, 90, 120, 240],
  PATIENT: 'patient',
  PAGINATION: {
    MAXIMUM_LIMIT: 999,
    MINIMUM_OFFSET: 0,
  },
  PRIVACY_POLICY: 'https://vitafyhealth.com/privacy-policy',
  TERMS_AND_CONDITION: 'https://vitafyhealth.com/terms-of-use',
  TRANSACTION_STEPS: ['Patient', 'Service', 'Checkout'], // Do not change the order of elements inside the array
  TYPE: {
    GROUP: 'Group',
    INDIVIDUAL: 'Individual',
  },
  TWO_FACTOR_AUTHENTICATION_CODE_DIGITS: 4,
  VITAFY_URL: 'https://vitafyhealth.com/',

  IS_ADVANCED_SEARCH: 'isAdvancedSearch',

  // for demo, remove this after login feature is implemented.
  DEMO_TENANT_NAME: 'Kathmandu DPC',
  DEMO_CODE: 'Direct Primary Care',
  DEMO_MERCHANT_CUSTOMER_ID: '4d5fa30c-9017-403f-9901-c1edf8e824ed',
  CLIENT: 'Client',
  TENANT: 'Tenant',
  REFERRAL_CASE: 'ReferralCase',
  // --------------------------------------------------------
  // for local storage
  OLD_TOKEN_REFERENCE: 'oldJwtToken',
  IMPERSONATED_BY: 'impersonatedBy',
  STATUS: ['Active', 'Inactive'],
  DRAWER_WIDTH: {
    SM: 100,
    MD: 240,
    LG: 300,
  },
};

export default commonConstants;
