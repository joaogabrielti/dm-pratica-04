import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    box: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
    },
    boxLeft: {
        flex: 1,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    plus: {
        position: 'absolute',
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 24,
        bottom: 4,
        right: 6,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
        color: 'white',
        backgroundColor: 'green',
        width: 32,
        height: 32,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picture: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 36,
        margin : 3,
    },
    boxRight: {
        flex: 4,
        padding: 5,
        marginRight: 10,
        justifyContent: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
})

export default styles