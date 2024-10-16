import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'

import { AuthContext } from '../../Contexts/auth'

import UserRow from './UserRow/index'

export default function UsersList() {

  const { users } = useContext(AuthContext)

  return (
    <View style={{flex: 1, backgroundColor: "#202020"}}>
      <FlatList
        data={users}
        keyExtractor={(item, index) => item.uid}
        renderItem={({ item, index }) => (
          <UserRow user={item}/>
        )}
      />
    </View>
  )
}