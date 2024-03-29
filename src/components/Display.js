import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        paddingTop:180,
        paddingRight:30,
        justifyContent: 'center',
        backgroundColor: '#080404',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

