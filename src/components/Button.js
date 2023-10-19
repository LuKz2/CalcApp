import React from "react"
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native"

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight style={styles.container}onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#080404'
    },
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#383434',
        color:'#fcfcfc',
        textAlign: "center",
        borderWidth: 8,
        borderRadius:60,
        borderColor: '#080404'
    },
    operationButton: {
        color: '#fcfcfc',
        backgroundColor: '#ec9c2c'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4 * 2)
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4 * 3)
    }
})
