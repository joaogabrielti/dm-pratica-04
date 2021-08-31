import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'

function Header() {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topLeft}>
                    <Text style={styles.textWhats}>WhatsApp</Text>
                </View>
                <View style={styles.topRight}>
                    <Image style={{width: 24, height: 24, marginRight: 25}}
                        source={require('../../assets/search.png')}
                    />
                    <Image style={{width: 4, height: 16}}
                        source={require('../../assets/menu.png')}
                    />
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomLeft}>
                    <Image style={{width: 21, height: 16, opacity: 0.7}}
                        source={require('../../assets/cam.png')}
                    />
                </TouchableOpacity>
                <View style={styles.bottomRight}>
                    <TouchableOpacity>
                        <Text style={styles.textMenu}>CONVERSAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selected}>
                        <Text style={styles.textMenu}>STATUS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textMenu}>CHAMADAS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header