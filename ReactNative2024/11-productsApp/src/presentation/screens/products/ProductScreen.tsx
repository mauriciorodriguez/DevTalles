import {StackScreenProps} from '@react-navigation/stack';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {
  Button,
  ButtonGroup,
  Input,
  Layout,
  useTheme,
} from '@ui-kitten/components';
import {Formik} from 'formik';
import React, {useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {
  getProductById,
  updateCreateProduct,
} from '../../../actions/auth/products';
import {Gender, Product, Size} from '../../../domain/entities/product';
import {ProductImages} from '../../components/products/ProductImages';
import {MyIcon} from '../../components/ui/MyIcon';
import {MainLayout} from '../../layouts/MainLayout';
import {RootStackParams} from '../../navigation/StackNavigator';

const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl];

const genders: Gender[] = [Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex];

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
  const productIdRef = useRef(route.params.productId);
  const theme = useTheme();
  const queryClient = useQueryClient();

  const {isLoading, data: product} = useQuery({
    queryKey: ['product', productIdRef.current],
    queryFn: () => getProductById(productIdRef.current),
  });

  const mutation = useMutation({
    mutationFn: (data: Product) =>
      updateCreateProduct({...data, id: productIdRef.current}),
    onSuccess(data: Product) {
      productIdRef.current = data.id;
      queryClient.invalidateQueries({queryKey: ['products', 'infinite']});
      queryClient.invalidateQueries({queryKey: ['product', data.id]});
    },
  });

  if (!product) {
    return <MainLayout title="Cargando..."></MainLayout>;
  }

  return (
    <Formik initialValues={product} onSubmit={mutation.mutate}>
      {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
        <MainLayout title={values.title} subTitle={`Precio: ${values.price}`}>
          <ScrollView style={{flex: 1}}>
            <Layout
              style={{
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ProductImages images={values.images} />
            </Layout>
            <Layout style={{marginHorizontal: 10}}>
              <Input
                label="Titulo"
                value={values.title}
                style={{marginVertical: 5}}
                onChangeText={handleChange('title')}
              />
              <Input
                label="Slug"
                value={values.slug}
                style={{marginVertical: 5}}
                onChangeText={handleChange('slug')}
              />
              <Input
                label="Description"
                value={values.description}
                style={{marginVertical: 5}}
                multiline
                numberOfLines={5}
                onChangeText={handleChange('description')}
              />
            </Layout>
            <Layout
              style={{
                marginHorizontal: 15,
                flexDirection: 'row',
                gap: 10,
                marginVertical: 5,
              }}>
              <Input
                label="Precio"
                value={values.price.toString()}
                style={{flex: 1}}
                onChangeText={handleChange('price')}
                keyboardType="number-pad"
              />
              <Input
                label="Inventario"
                value={values.stock.toString()}
                style={{flex: 1}}
                onChangeText={handleChange('stock')}
                keyboardType="number-pad"
              />
            </Layout>
            <Layout>
              <ButtonGroup
                style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
                size="small"
                appearance="outline">
                {sizes.map(size => (
                  <Button
                    key={size}
                    style={{
                      flex: 1,
                      backgroundColor: values.sizes.includes(size)
                        ? theme['color-primary-200']
                        : undefined,
                    }}
                    onPress={() =>
                      setFieldValue(
                        'sized',
                        values.sizes.includes(size)
                          ? values.sizes.filter(s => s !== size)
                          : [...values.sizes, size],
                      )
                    }>
                    {size}
                  </Button>
                ))}
              </ButtonGroup>
              <ButtonGroup
                style={{margin: 2, marginTop: 20, marginHorizontal: 15}}
                size="small"
                appearance="outline">
                {genders.map(gender => (
                  <Button
                    key={gender}
                    style={{
                      flex: 1,
                      backgroundColor: values.gender.startsWith(gender)
                        ? theme['color-primary-200']
                        : undefined,
                    }}
                    onPress={() => setFieldValue('gender', gender)}>
                    {gender}
                  </Button>
                ))}
              </ButtonGroup>
            </Layout>
            <Button
              accessoryLeft={<MyIcon name="save-outline" white />}
              onPress={() => handleSubmit()}
              style={{margin: 15}}
              disabled={mutation.isPending}>
              Guardar
            </Button>
            <Layout style={{height: 200}} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  );
};
