import { updatedBookingData } from '../test-data/bookingData';
import { ApiClient } from './ApiClient';

export class BookingApi extends ApiClient {

async createBooking(bookingData: object) {
     const response = await this.request.post(`${this.baseUrl}/booking`, {
        data: bookingData,
     });
     return response;
}
async getBooking(bookingId: number) {
    const response = await this.request.get(`${this.baseUrl}/booking/${bookingId}`);
 
    return response;
  }


async updateBooking(
  bookingId: number,
  updatedBookingData: object,
  token: string
) {
  const response = await this.request.put(`${this.baseUrl}/booking/${bookingId}`,
    {
      data: updatedBookingData,
      headers: {
        'Cookie': `token=${token}`,
      },
    }
  );

  return response;
}


async deleteBooking(bookingId: number, token: string) {
    const response = await this.request.delete(`${this.baseUrl}/booking/${bookingId}`,
       {
      data: updatedBookingData,
      headers: {
        'Cookie': `token=${token}`,
      },
    }
        );
        return response;
}
}