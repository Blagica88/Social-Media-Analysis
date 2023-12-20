// socialMediaData.js

const getRandomPercentage = () => Math.round(Math.random() * 100 * 10) / 10;

export const socialMediaData = {
  usageStatistics: {
    globalPopulation: "More than half",
    totalUsers: 4.9e9,
    usUsers: 308e6,
    averageDailyUsage: "2 hours and 31 minutes",
    mobileUsagePercentage: 83,
  },
  advertisingStatistics: {
    usSpending2023: 68e9,
    globalSpending2023: 207e9,
    advertisingPercentage2022: 33,
    averageCTRQ2_2023: 1.36,
  },
  facebookStatistics: {
    monthlyUsers: 3e9,
    usAdultUsersPercentage: 74.2,
    dailyUsage: 30.9,
    ageDemographics: {
      "18-34": 51.4,
      "35+": 43.9,
    },
    genderDemographics: {
      male: 56,
    },
    socialCommerceBuyers2023: 65.7e6,
    adRevenuePercentage: 60,
    engagementRates: {
      statusPosts: 0.18,
      videos: 0.17,
    },
  },
  youtubeStatistics: {
    monthlyUsers: 2.5e9,
    dailyUsage: 48.7,
    ageDemographics: {
      "18-34": 35.7,
      "35+": 46.4,
    },
    genderDemographics: {
      male: 54.4,
    },
    adRevenue2022: 30e9,
    productDiscoveryPercentage: 24,
  },
  instagramStatistics: {
    monthlyUsers: 2e9,
    usUsers: 115e6,
    dailyUsage: 33.1,
    ageDemographics: {
      "18-34": 60,
      "35+": 31,
    },
    genderDemographics: {
      male: 51,
    },
    socialCommerceBuyers2023: 43e6,
    adRevenue2022: 43e9,
    engagementRates: {
      reels: 1.23,
    },
  },
  twitterStatistics: {
    usUsers: 64.9e6,
    monthlyUsers: 368e6,
    dailyUsage: 34.1,
    ageDemographics: {
      "18-34": 55.6,
      "35+": 37.8,
    },
    genderDemographics: {
      male: 63,
    },
    contentPreference: {
      informative: 55,
      funny: 34,
    },
    adRevenue2022: 4.73e9,
    adRevenue2027: 2.7e9,
  },
  tiktokStatistics: {
    monthlyUsers: 1e9,
    usAdultUsersPercentage: 47,
    dailyUsage: 53.8,
    ageDemographics: {
      "18-34": 70.9,
      "35+": 29.1,
    },
    genderDemographics: {
      female: 55.3,
    },
    socialCommerceBuyers2024: 35.8e6,
    adRevenue2022: 9.9e9,
    contentPreference: "Entertaining",
  },
  // Additional platforms with random data
  snapchatStatistics: {
    monthlyUsers: 2.5e8,
    usAdultUsersPercentage: getRandomPercentage(),
    dailyUsage: 25.5,
    ageDemographics: {
      "18-34": getRandomPercentage(),
      "35+": getRandomPercentage(),
    },
    genderDemographics: {
      female: getRandomPercentage(),
    },
    socialCommerceBuyers2023: 15e6,
    adRevenue2022: 10e9,
    engagementRates: {
      stories: 0.15,
    },
  },
  pinterestStatistics: {
    monthlyUsers: 4e8,
    usAdultUsersPercentage: getRandomPercentage(),
    dailyUsage: 21.8,
    ageDemographics: {
      "18-34": getRandomPercentage(),
      "35+": getRandomPercentage(),
    },
    genderDemographics: {
      female: getRandomPercentage(),
    },
    socialCommerceBuyers2023: 20e6,
    adRevenue2022: 8e9,
    engagementRates: {
      pins: 0.12,
    },
  },
};

export default socialMediaData;
