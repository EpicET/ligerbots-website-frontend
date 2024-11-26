// import getSiteConfig from '$lib/server/site'

// export async function load ({ fetch }) {
//   let site
//   try {
//     site = await getSiteConfig()
//   } catch (error) {
//     console.error('failed to retrieve site config:', error)
//   }

//   return { site }
// }



export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();
        const results = data.values();

        for (const result of results) {
            console.log(result);
        }

        const allResults = Array.from(data.values());
        console.log(allResults);

        }
};