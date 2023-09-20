import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    image: {
        height: '40%',
        width: '80%',
        marginLeft: 35,
    },
    title: {
        fontSize: 30,
        fontFamily: 'PoppinsThinItalic',
        marginVertical: 15,
        color: colors.secondary
    },
    price: {
        fontSize: 30,
        fontFamily: 'PoppinsThinItalic',
        marginVertical: 15,
        color: colors.secondary,
    },
    description: {
        color: colors.secondary,
        fontSize: 20,
        fontFamily: 'PoppinsMediumItalic',
    },
})