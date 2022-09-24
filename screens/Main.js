
import { View, StyleSheet, Text } from 'react-native';
import * as React from 'react';


export default function Main() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.card} >
                    <Text>Main</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#9f9f9f',
        marginTop: 10,
        color: "#fff"
    }

})