import { Icon } from 'native-base'
import React from 'react'
//import { useSelector } from '@reduxjs/toolkit';
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { COLORS } from '../Color'
import { FONTS } from '../Font'

const HomeHeader = () => {
    //const {userData}=useSelector(state=>state.User)
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',
        padding:10,paddingHorizontal:15,backgroundColor:COLORS.white,elevation:2,paddingVertical:15}}>
            <Text style={styles.logo}>CHAT BUZZ</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Icon 
                 name="notifications"
                 type="Ionicons"   
                 style={{color:COLORS.theme,marginRight:7}}
                />
                <Avatar 
                  source={require('../imgSrc/ChatBuzzLogo.png')} 
                  rounded
                  size="small" />
            </View>
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    logo: {
        fontFamily: FONTS.Bold,
        color: COLORS.theme,
        fontSize: 22,
      },
})