import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { FadeInImage } from '../../components/ui/FadeInImage'
import { ThemeContext } from '../../context/ThemeContext'

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
    setNumbers([...numbers, ...newArray]);
  }

  const { colors } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: "black" }}>
      <FlatList
        data={numbers}
        renderItem={({ item }) =>
          <ListItem number={item} />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        keyExtractor={(item) => item.toString()}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  )
}

interface ListItemProps {
  number: number;
}

const ListItem = ({
  number,
}: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: "100%",
      }}
    />
  );
}