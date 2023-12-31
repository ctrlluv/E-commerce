import { StyleSheet } from "react-native";
import { colors } from '../../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        marginTop: 10,
    },
    name: {
        fontSize: 25,
        color: colors.secondary,
        fontFamily: 'PoppinsThinItalic',
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cantidad: {
        color: colors.secondary,
        fontFamily: 'PoppinsMediumItalic',
        fontSize: 20,
    },
    price: {
        color: colors.secondary,
        fontFamily: 'PoppinsMediumItalic',
        fontSize: 20,
    },
    image: {
        
    }
})