import { NativeModules } from 'react-native';
import { Passenger, GetPaymentNonceResponse, BookTripResponse } from '.'

const { KarhooSdk } = NativeModules;

export default {
    initialize: (identifier, referer, organisationId) => KarhooSdk.initialize(identifier, referer, organisationId),
    getPaymentNonce: (organisationId, currency) => KarhooSdk.getPaymentNonce(organisationId, currency),
    bookTrip: (passenger, quoteId, paymentNonce) => KarhooSdk.bookTrip(passenger, quoteId, paymentNonce),
};

export {
    Passenger,
    GetPaymentNonceResponse,
    BookTripResponse
}