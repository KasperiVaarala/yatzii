import React from 'react';
import { Text, View} from 'react-native';
import styles from '../style/styles.js';


export default Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.title}>
                author: Kasperi Vaarala
            </Text>
        </View>
    )
}