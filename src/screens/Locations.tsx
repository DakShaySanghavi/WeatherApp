import React from 'react'
import { StyleSheet, Text, View } from "react-native"

import { resizeUI } from '../utils/Common'
import Colors from '../theme/Colors'

const Locations: React.FC = (props) => {

    const renderHeaderView = () => {
        return (
            <View style={styles.headerView}>
                <Text style={styles.titleTxt}>{"Locations"}</Text>
            </View>
        )
    }

    const renderMainView = () => {
        return (
            <View style={styles.mainView}>
                {renderHeaderView()}
            </View>
        )
    }

    return renderMainView()
}

/* StyleSheet
============================================================================= */
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.BG,
        padding: resizeUI(24)
    },
    headerView: {
        alignItems: "center"
    },
    titleTxt: {
        color: Colors.LIGHT,
        fontSize: resizeUI(20),
        fontWeight: "bold"
    },
})

export default Locations