import { test, expect } from '@playwright/test';

import {formatAPIRequest, getPOSTAPIRequestBody} from '../../src/utils/APIHelper';
import path from 'path';
import fs from 'fs';
import { faker } from '@faker-js/faker';

test.use({

    baseURL: process.env.BASE_API_URL,
})

test('Create POST api request using dynamic values', async ({ request }) => {

    const filepath =path.join(__dirname,'../../test-data/api_requests/Dynamic_POST_API_Request.json');
    const jsonTemplate =fs.readFileSync(filepath, 'utf-8');

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const totalPrice = faker.number.int({min:1000,max:1000});

const postAPIRequest = await getPOSTAPIRequestBody(firstname, lastname, 
   totalPrice, true, " breakfast ", "2025 - 01 -25", "2025 - 01 - 27")


    const postAPIResponse =await request.post('/booking', { data : postAPIRequest });
    const jsonPOSTAPIResponse = await postAPIResponse.json();
    console.log('Post api Response : '+JSON.stringify(jsonPOSTAPIResponse,null,2));

    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    console.log('Generated firstname:', firstname);
console.log('Generated lastname:', lastname);

console.log('Response firstname:', jsonPOSTAPIResponse.booking.firstname);
console.log('Response lastname:', jsonPOSTAPIResponse.booking.lastname);

    console.log('Actual firstname:', jsonPOSTAPIResponse.booking.firstname);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstname);
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastname);

 
  });


  
  
  
  
  
