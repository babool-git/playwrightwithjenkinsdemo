import { test, expect } from '@playwright/test';

import {formatAPIRequest} from '../../src/utils/APIHelper';
import path from 'path';
import fs from 'fs';

test.use({

    baseURL: process.env.BASE_API_URL,
})

test('Create POST api request using dynamic File', async ({ request }) => {

    const filepath =path.join(__dirname,'../../test-data/api_requests/Dynamic_POST_API_Request.json');
    const jsonTemplate =fs.readFileSync(filepath, 'utf-8');
    const values = ['kittu','patra',1000];



    const postAPIRequest = await formatAPIRequest(jsonTemplate, values);
    const postAPIResponse =await request.post('/booking', { data : JSON.parse(postAPIRequest) });
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
    console.log('Actual firstname:', jsonPOSTAPIResponse.booking.firstname);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('kittu');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('patra');

 
  });


  
  
  
  
  
