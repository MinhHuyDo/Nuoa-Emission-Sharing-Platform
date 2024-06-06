// src/aws-exports.js
const awsConfig = {
  Auth: {
    mandatorySignIn: true,
    region: 'ap-southeast-1', // e.g., 'us-east-1'
    userPoolId: 'ap-southeast-1_3avL54B3X', // e.g., 'us-east-1_abcdefghi'
    userPoolWebClientId: '314198iqtj75k20dp788uquu91', // e.g., 'abcdefghij123456789'
  },
};

export default awsConfig;
