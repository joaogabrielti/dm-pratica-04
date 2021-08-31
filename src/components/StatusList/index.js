import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../StatusList/styles'

class StatusList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.box}>
                    <View style={styles.boxLeft}>
                        <Image style={styles.picture} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        <Text style={styles.plus}>+</Text>
                    </View>
                    <View style={styles.boxRight}>
                        <Text style={styles.boldText}>Meu status</Text>
                        <Text>Toque para atualizar o status</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default StatusList