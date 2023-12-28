import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        appBar: {
            height: 88,
            justifyContent: "flex-end",
            backgroundColor: '#80B846',
            verticalAlign: "bottom"
        },
        appBarCenterBottom: {
            justifyContent: "flex-end",
            alignItems: "center",
            verticalAlign: "bottom",
            backgroundColor: '#80B846'
        },
        body: {
            flex: 1,
            backgroundColor: 'white',
        }
    },
    h1: {
        includeFontPadding: false,
        fontSize: 20,
        color: "white",
        lineHeight: 32,
        verticalAlign: "bottom",
    },
    h2: {
        fontSize: 32,
        color: "red",
        borderColor: "#E5E9EB",
        borderRadius: 8,
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 16,
        color: "white",
    },
    inputField: {
        borderColor: "#E5E9EB",
        borderRadius: 8,
        borderWidth: 1,
        padding: 12,
        fontSize: 16,
        marginTop: 20
    },
    button: {
        borderRadius: 8,
        backgroundColor: "#B5BDC3",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        height: 50
    }
});

export const buttonBackgroundStyle = (hasValidated) => StyleSheet.create({
    borderRadius: 8,
    backgroundColor: hasValidated ? "#E48430" : "#B5BDC3",
    alignItems: "center",
    justifyContent: "center",
    height: 50
});

export const buttonTextStyle = (hasValidated) => StyleSheet.create({
    fontSize: 16,
    color: hasValidated ? "#FFFFFF" : "#FFFFFF"
});

