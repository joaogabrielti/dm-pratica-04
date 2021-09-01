import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../StatusList/styles'

class StatusList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.picture} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                            <Text style={styles.plus}>+</Text>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Meu status</Text>
                            <Text style={styles.greyText}>Toque para atualizar o status</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.divider}>
                        <Text style={styles.greyText}>Atualizações recentes</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.statusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.statusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.statusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.statusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.divider}>
                        <Text style={styles.greyText}>Atualizações vistas</Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.seenStatusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.seenStatusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.seenStatusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.seenStatusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxLeft}>
                            <Image style={styles.seenStatusPic} source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
                        </View>
                        <View style={styles.boxRight}>
                            <Text style={styles.boldText}>Rafael</Text>
                            <Text style={styles.greyText}>há 8 minutos</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default StatusList