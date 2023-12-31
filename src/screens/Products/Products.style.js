import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    listContainer: {
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 15,
        backgroundColor: 'black',
    },
    item: {
        color: colors.secondary,
        fontFamily: 'PoppinsMediumItalic',
        fontSize: 20,
    },
  })