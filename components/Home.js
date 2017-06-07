import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
    ToolbarAndroid,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image,
    Animated
} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import { FisrtView, SecondView, ThirdView } from './Views'
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager'

var styles = StyleSheet.create({
    indicatorContainer: {
        backgroundColor: 0x00000020,
        height: 48
    },
    indicatorText: {
        fontSize: 14,
        color: 0xFFFFFF99
    },
    indicatorSelectedText: {
        fontSize: 14,
        color: 0xFFFFFFFF
    },
    selectedBorderStyle: {
        height: 3,
        backgroundColor: 'white'
    },
    statusBar: {
        height: 24,
        backgroundColor: 0x00000044
    },
    toolbarContainer: {
        height: 56,
        backgroundColor: 0x00000020,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    backImg: {
        width: 16,
        height: 17
    },
    titleTxt: {
        marginLeft: 36,
        color: 'white',
        fontSize: 20
    },
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
});


class Home extends React.Component {
    constructor(props) {
		super(props);
        ToastAndroid.show(props.title, ToastAndroid.SHORT)
	}
    state = {
        bgColor: new Animated.Value(0)
    }
    _setBgColor = Animated.event([{bgColor: this.state.bgColor}])

    _renderTitleIndicator () {
        return (
            <PagerTitleIndicator
                style={styles.indicatorContainer}
                itemTextStyle={styles.indicatorText}
                selectedItemTextStyle={styles.indicatorSelectedText}
                selectedBorderStyle={styles.selectedBorderStyle}
                titles={['FIRST', 'SECOND', 'THIRD']}
            />
        )
    }

    _onPageScroll (scrollData) {
        let {offset, position} = scrollData
        if (position < 0 || position >= 2) return
        this._setBgColor({bgColor: offset + position})
    }

    render(){
        let bgColor = this.state.bgColor.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ['hsl(187, 74%, 47%)', 'hsl(89, 47%, 54%)', 'hsl(12, 97%, 59%)']
        })
        return (
            <Animated.View style={{flex: 1, backgroundColor: bgColor}} >
                <View >
                    {Platform.OS === 'ios' && <View style={styles.statusBar} />}
                    <View style={styles.toolbarContainer} >
                        <TouchableOpacity onPress={() => this.props.navigator.pop()} >
                            <Image style={styles.backImg} source={require('../imgs/back_arrow.png')} />
                        </TouchableOpacity>
                        <Text style={styles.titleTxt} >TITLE</Text>
                    </View>
                </View>
                <IndicatorViewPager
                    style={{flex: 1, flexDirection: 'column-reverse'}}
                    indicator={this._renderTitleIndicator()}
                    onPageScroll={this._onPageScroll.bind(this)}
                >
                    {<View style={styles.pageContainer} >
                        <View style={[styles.shapeBase, styles.square]} />
                        <View style={styles.mainRec} />
                        <View style={styles.subRec} />
                        <View style={styles.subRec} />
                    </View>}
                    {<View style={styles.pageContainer} >
                        <View style={[styles.shapeBase, styles.triangle]} />
                        <View style={styles.mainRec} />
                        <View style={styles.subRec} />
                        <View style={styles.subRec} />
                    </View>}
                    {<View style={styles.pageContainer} >
                        <View style={[styles.shapeBase, styles.circle]} />
                        <View style={styles.mainRec} />
                        <View style={styles.subRec} />
                        <View style={styles.subRec} />
                    </View>}
                </IndicatorViewPager>
            </Animated.View>
        );
    }
}

module.exports = Home;