import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        height: '100%',
        width: '100%',
        
    },
    imageContainer: {
       width: '100%',
       height: '40%',
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
    buttonAdd: {
        color: colors.primary,
        fontFamily: 'PoppinsMediumItalic',
        fontSize: 24,
        
    }
})