import {useQuery} from '@tanstack/react-query';
import React, {useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ActivityIndicator, TextInput} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  getPokemonNamesWithId,
  getPokemonsByIds,
} from '../../../actions/pokemons';
import {globalTheme} from '../../../config/theme/global-theme';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');
  const {debouncedValue} = useDebouncedValue(term);
  const {isLoading, data: pokemonNamesList = []} = useQuery({
    queryKey: ['pokemon', 'all'],
    queryFn: () => getPokemonNamesWithId(),
  });

  const pokemonNameIdList = useMemo(() => {
    // Es un numero
    if (!isNaN(Number(debouncedValue))) {
      const pokemon = pokemonNamesList.find(
        x => x.id === Number(debouncedValue),
      );
      return pokemon ? [pokemon] : [];
    }

    if (debouncedValue.length === 0) return [];

    if (debouncedValue.length < 3) return [];

    return pokemonNamesList.filter(x =>
      x.name.toLowerCase().includes(debouncedValue.toLowerCase()),
    );
  }, [debouncedValue]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemons', 'by', pokemonNameIdList],
    queryFn: () => getPokemonsByIds(pokemonNameIdList.map(x => x.id)),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Buscar pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{paddingTop: top + 20}}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 100}} />}
      />
      {isLoadingPokemons && <ActivityIndicator style={{paddingTop: 20}} />}
    </View>
  );
};
