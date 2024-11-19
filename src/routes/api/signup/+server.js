import { getBackendClient } from '$lib/server/client';
import { json } from '@sveltejs/kit';

/* 
Ideally creates a new user.
Not sure if this should be implement here or in the user.js.
*/
export async function POST ({ request }) {
    const { email, password, fullname, phone_number, address, school, groups, graduation_year } = await request.json();
    console.log(email);
    
    // const client = await getBackendClient();
    // const query = `mutation createUser {
    //     createUser(
    //         email: "${email}",
    //         password: "${password}",
    //         fullname: "${fullname}",
    //         phone_number: "${phone_number}",
    //         address: "${address}",
    //         school: "${school}",
    //         groups: "${groups}",
    //         graduation_year: "${graduation_year}"
    //     )
    // }`;

    // let result
    // try {
    // result = await client.query(query)
    // } catch (err) {
    // throw new Error(`Failed to create user: ${err}`)
    // }
    return json({ email});
}