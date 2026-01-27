import {
  AWS_APPSYNC_API_KEY,
  AWS_APPSYNC_GRAPHQL_ENDPOINT,
  AWS_COGNITO_IDENTITY_POOL_ID,
  AWS_COGNITO_REGION,
  AWS_PROJECT_REGION,
  AWS_USER_FILES_S3_BUCKET,
  AWS_USER_FILES_S3_BUCKET_REGION,
  AWS_USER_POOLS_ID,
  AWS_USER_POOLS_WEB_CLIENT_ID,
} from "./envConfig";

// const awsmobile = {
//   aws_project_region: AWS_PROJECT_REGION,
//   aws_appsync_graphqlEndpoint: AWS_APPSYNC_GRAPHQL_ENDPOINT,
//   aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
//   aws_appsync_apiKey: AWS_APPSYNC_API_KEY,
//   aws_cognito_identity_pool_id: AWS_COGNITO_IDENTITY_POOL_ID,
//   aws_cognito_region: AWS_COGNITO_REGION,
//   aws_user_pools_id: AWS_USER_POOLS_ID,
//   aws_user_pools_web_client_id: AWS_USER_POOLS_WEB_CLIENT_ID,
//   aws_user_files_s3_bucket: AWS_USER_FILES_S3_BUCKET,
//   aws_user_files_s3_bucket_region: AWS_USER_FILES_S3_BUCKET_REGION,
// };

// const awsmobile = {
//   aws_project_region: process.env.EXPO_PUBLIC_AWS_PROJECT_REGION,
//   aws_appsync_graphqlEndpoint: process.env.EXPO_PUBLIC_AWS_APPSYNC_GRAPHQL_ENDPOINT,
//   aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
//   aws_appsync_apiKey: process.env.EXPO_PUBLIC_AWS_APPSYNC_API_KEY,
//   aws_cognito_identity_pool_id: process.env.EXPO_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
//   aws_cognito_region: process.env.EXPO_PUBLIC_AWS_COGNITO_REGION,
//   aws_user_pools_id: process.env.EXPO_PUBLIC_AWS_USER_POOLS_ID,
//   aws_user_pools_web_client_id: process.env.EXPO_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
//   aws_user_files_s3_bucket:process.env.EXPO_PUBLIC_AWS_USER_FILES_S3_BUCKET,
//   aws_user_files_s3_bucket_region: process.env.EXPO_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION,
// };

const awsmobile = {
  aws_project_region: "ap-south-1",
  aws_cognito_region: "ap-south-1",
  aws_user_pools_id: "ap-south-1_9qMWzDMav",
  aws_user_pools_web_client_id: "4vgkgcs15h7nirfmtm061fmuck",
  aws_appsync_graphqlEndpoint:"https://zb3w6hhhtndczhgq3gz7bhzuyq.appsync-api.ap-south-1.amazonaws.com/graphql",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_appsync_apiKey: "da2-cesulm5ebbdm5b3aas2x4wrozy",
  aws_cognito_identity_pool_id: "ap-south-1:285074f4-a7a6-41a9-9919-f54d8cc7eb0f",
  aws_user_files_s3_bucket: "mywbrands-master-bucket",
  aws_user_files_s3_bucket_region: "ap-south-1",
};

export default awsmobile;
