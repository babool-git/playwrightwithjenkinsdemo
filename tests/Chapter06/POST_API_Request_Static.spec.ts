import { test, expect } from '@playwright/test';

import postAPIRequest from '../../test-data/api_requests/POST_API_Request.json';
test.use({

    baseURL: process.env.BASE_API_URL,
})

test('Create POST api request using Static File', async ({ request }) => {

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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('Kittu');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('Patra');

 
  });


  
  
  
  
  
