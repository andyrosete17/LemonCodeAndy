const config = {
    API_BASE: import.meta.env.VITE_API_BASE,
    IS_FEATURE_A_ENABLED: import.meta.env.VITE_IS_FEATURE_A_ENABLED === 'true',
  } as const;
  
  export default config;