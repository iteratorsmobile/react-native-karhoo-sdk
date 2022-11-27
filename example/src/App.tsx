import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator';
import store from './store';

const App = () => {
    useEffect(() => {
        console.log(
            'xxx',
            Config.KARHOO_IDENTIFIER,
            Config.KARHOO_ORGANISATION_ID,
            Config.KARHOO_REFERER_ID,
        );
        // KarhooSdk.initialize();
    }, []);

    return (
        <Provider store={store}>
            <SafeAreaView style={StyleSheet.absoluteFill}>
                <Navigator />
            </SafeAreaView>
        </Provider>
    );
};

export default App;