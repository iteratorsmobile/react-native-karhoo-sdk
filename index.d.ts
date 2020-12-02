export interface PaymentNonce {
    nonce: string;
}

export interface TripInfo {
    tripId: string;
    followCode: string;
}

export interface TripCancelledInfo {
    tripCancelled: true;
}

export interface PaymentData {
    currency: string;
    amount: string;
}

export interface Passenger {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    locale: string;
}

export default {
    initialize: (identifier: string, referer: string, organisationId: string): void => {},
    getPaymentNonce: (organisationId: string, paymentData: PaymentData): Promise<PaymentNonce | any> => {},
    bookTrip: (passenger: Passenger, quoteId: string, paymentNonce: string): Promise<TripInfo | any> => {},
    cancelTrip: (tripId: string): Promise<TripCancelledInfo | any> => {}
}