'use strict'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

function generateShapePagerView (shapeStyle) {
    return () => {
        return (
            <View style={styles.pageContainer} >
                <View style={[styles.shapeBase, shapeStyle]} />
                <View style={styles.mainRec} />
                <View style={styles.subRec} />
                <View style={styles.subRec} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainRec: {
        backgroundColor: '#FFFFFFAA',
        width: 256,
        height: 48,
        marginBottom: 10,
        marginTop: 156
    },
    subRec: {
        backgroundColor: '#FFFFFF55',
        width: 256,
        height: 30,
        marginTop: 10
    },
    shapeBase: {
        width: 128,
        height: 128,
        backgroundColor: 'white'
    },
    square: {},
    circle: {
        borderRadius: 64
    },
    triangle: {
        borderTopWidth: 0,
        borderRightWidth: 70,
        borderBottomWidth: 128,
        borderLeftWidth: 70,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'white',
        backgroundColor: 'transparent',
        width: 140
    }
})

export const FirstView = generateShapePagerView(styles.square)
export const SecondView = generateShapePagerView(styles.triangle)
export const ThirdView = generateShapePagerView(styles.circle)