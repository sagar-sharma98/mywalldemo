export const getInfluencer = /* GraphQL */ `
  query GetInfluencer($id: ID!) {
    getInfluencer(id: $id) {
      id
      name
      slug
      location
      username
      bio
      email
      isEmailVerified
      phone
      gender
      dob
      city
      isActive
      planType
      isPremium
      address {
        street
        city
        state
        country
        postalCode
      }
      dataByInfluencer {
        niche
        city
        gender
        state
        country
        postalCode
      }
      tags
      themeColor
      ctaButton {
        id
        text
        link
        isActive
        type
      }
      profilePictureWithBg
      profilePictureWithoutBg
      referralCode
      isReferralCTA
      socialLinks {
        instagram
        youtube
        twitter
        tiktok
        snapchat
        vimeo
        linkedIn
        facebook
        pinterest
        telegram
        other
      }
      createdAt
      updatedAt
      isAnalyticsEnabled
      isDarkThemeEnabled
      allowInstagramSkip
      instagramDetails {
        followersCount
        followsCount
        mediaCount
        username
      }
      instagramInsights {
        engagementRate
        avgViews
        avgLikes
        avgComments
      }
      youtubeDetails {
        title
        description
        subscriberCount
        videoCount
        viewCount
      }
      instagramToken {
        accessToken
        refreshToken
        fbUserId
        igUserId
        expiresAt
        createdAt
        updatedAt
      }
      youtubeToken {
        accessToken
        refreshToken
        createdAt
        updatedAt
      }
      profileStatusCode
      isWallLive
      isSubscriptionActive
      freeTrialExpiresAt
      influencerRateCard {
        instagramRates {
          category
          rate
          references
          isNotifyEnabled
        }
        youtubeRates {
          category
          rate
          references
          isNotifyEnabled
        }
      }
    }
  }
`;