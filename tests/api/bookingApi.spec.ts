import { test, expect } from '../../fixtures/apiFixture';
import { bookingData, updatedBookingData } from '../../test-data/bookingData';//we import the data.


test('User can create and retrieve a booking', async ({ bookingApi }) => {
 
  //Creating the booking, Then inside BookingApi: is executed. The server creates the booking. The server responds.
  const createResponse = await bookingApi.createBooking(bookingData);
  //That response comes back here: This checks: HTTP Status = 200
  expect(createResponse).toBeOK();
  //This is where HTTP Response becomes JavaScript Object
  const createBody = await createResponse.json();
  //This is where we can see the response from the server in the console. It will show the bookingid and other details.
  console.log(createBody);
  //This checks: The server responded with a bookingid. It is defined. Extract booking ID
  const bookingId = createBody.bookingid;
  //We're checking: "Did the server actually generate a booking ID?"
  expect(bookingId).toBeDefined();
 //Retrieve the booking, Now we ask: using the ID we just received.
  const getResponse = await bookingApi.getBooking(bookingId);
 //assertion if the server responded with HTTP Status = 200
  expect(getResponse).toBeOK();
 //This is where HTTP Response becomes JavaScript Object
  const getBody = await getResponse.json();
 //This is where we can see the response from the server in the console. It will show the booking details.  
  console.log(getBody);
 //We're saying: "The server should return the same firstname and last name we sent."
  expect(getBody.firstname).toBe(bookingData.firstname);
  expect(getBody.lastname).toBe(bookingData.lastname);

  expect(getBody.totalprice).toBe(bookingData.totalprice);
  expect(getBody.depositpaid).toBe(bookingData.depositpaid);
  expect(getBody.bookingdates.checkin).toBe(bookingData.bookingdates.checkin);
  expect(getBody.bookingdates.checkout).toBe(bookingData.bookingdates.checkout);
  expect(getBody.additionalneeds).toBe(bookingData.additionalneeds);
});

test('User can update a booking', async ({ bookingApi, token }) => {
  // 1. Create a booking
  const createResponse = await bookingApi.createBooking(bookingData);
  expect(createResponse).toBeOK();

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  expect(bookingId).toBeDefined();
//update
  const updateResponse = await bookingApi.updateBooking(
  bookingId,
  updatedBookingData,
  token
);
 expect(updateResponse).toBeOK();
// 4. Retrieve the same booking again
  const getResponse = await bookingApi.getBooking(bookingId);
  expect(getResponse).toBeOK();
const getBody = await getResponse.json();
 //console.log(getBody);
// 5. Verify the updated values
  expect(getBody.firstname).toBe(updatedBookingData.firstname);
  expect(getBody.lastname).toBe(updatedBookingData.lastname);
  expect(getBody.totalprice).toBe(updatedBookingData.totalprice);
  expect(getBody.depositpaid).toBe(updatedBookingData.depositpaid);
  expect(getBody.bookingdates.checkin).toBe(
    updatedBookingData.bookingdates.checkin
  );
  expect(getBody.bookingdates.checkout).toBe(
    updatedBookingData.bookingdates.checkout
  );
  expect(getBody.additionalneeds).toBe(updatedBookingData.additionalneeds);
});

test('User can delete a booking', async ({ bookingApi, token }) => {

  // 1. Create a booking
  const createResponse = await bookingApi.createBooking(bookingData);
  expect(createResponse).toBeOK();
  const createBody = await createResponse.json();
  console.log(createBody);
  const bookingId = createBody.bookingid;
  expect(bookingId).toBeDefined();
 // 3. Delete the booking
  const deleteResponse = await bookingApi.deleteBooking(bookingId, token);
  expect(deleteResponse).toBeOK();
// 4. Try to retrieve the deleted booking
  const getResponse = await bookingApi.getBooking(bookingId);
  expect(getResponse.status()).toBe(404); // Expecting a 404 Not Found status since the booking has been deleted    
  });