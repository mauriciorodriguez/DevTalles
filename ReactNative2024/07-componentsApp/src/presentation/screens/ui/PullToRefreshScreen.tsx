import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { ThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {

  const [isRefreshing, setIsRefreshing] = useState(false)

  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }

  const { colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            onRefresh={onRefresh}
            colors={[colors.primary, "red", "orange", "green"]}
          />
        }
      >
        <Title text='Pull to refresh' safe />
      </ScrollView>
    </CustomView>
  )
}
