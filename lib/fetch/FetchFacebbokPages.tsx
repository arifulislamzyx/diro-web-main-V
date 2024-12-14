// export const fetchFacebookPages = async (accessToken: string) => {
//   try {
//     const response = await fetch(`https://graph.facebook.com/v16.0/me/accounts?access_token=${accessToken}`);
//     if (!response.ok) throw new Error('Failed to fetch pages');
//     const data = await response.json();
//     return data?.data || [];
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

export const fetchFacebookPages = async (accessToken: string) => {
  const url = 'https://graph.facebook.com/v16.0/me/accounts';

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Facebook pages');
  }

  const data = await response.json();
  return data.data; // Contains the list of pages
};
