import { generateClient } from "aws-amplify/api";
import { getInfluencer } from "./api";
import { filterCampaign } from "./api";

const client = generateClient();

export const getInfluencerByIdAPI = async (id) => {
  try {
    const response = await client.graphql({
      query: getInfluencer,
      variables: {
        id,
      },
      authMode: "userPool",
    });
    return response?.data?.getInfluencer;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const filterCampaignAPI = async (input) => {
  try {
    // debug: ensure query and input are defined
    console.log('handleApi.filterCampaignAPI - filterCampaign type:', typeof filterCampaign);
    console.log('handleApi.filterCampaignAPI - input:', input);

    if (!filterCampaign) {
      throw new Error('filterCampaign query is undefined. Check import from api.js');
    }

    if (typeof input === 'undefined') {
      throw new Error('filterCampaignAPI called without input (undefined)');
    }

    const response = await client.graphql({
      query: filterCampaign,
      variables: {
        input,
      },
      authMode: "userPool",
    });

    console.log("filterCampaignAPI response:", response);
    return response?.data?.filterCampaign;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
