#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(KarhooSdk, NSObject)
    RCT_EXTERN_METHOD(initialize:(NSString *)identifier referer:(NSString *)referer organisationId:(NSString *)organisationId)
    RCT_EXTERN_METHOD(getPaymentNonce:(NSString *)organisationId currency:(NSString *)currency)
@end

