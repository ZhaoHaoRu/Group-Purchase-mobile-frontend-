import React, {Component} from 'react';
import {
  Box,
  Text,
  Link,
  Button,
  Icon,
  HStack,
  Image,
  Center,
  Pressable,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';

// 获得屏幕的宽度和高度，便于确定元素的大小，适配不同大小的屏幕
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function PurchaseFooter() {
  const [selected, setSelected] = React.useState(1);
  console.log('selected:', selected);
  return (
    <Box
      // flex={1}
      width="100%"
      height="10%"
      position="absolute"
      bottom="0"
      alignSelf="center"
      borderColor="gray.100"
      borderTopWidth="3">
      <Center flex={1} />
      <HStack
        alignItems="center"
        safeAreaBottom
        shadow={6}
        space={3}
        padding={3}>
        <Center>
          <Icon
            as={AntDesign}
            name="shoppingcart"
            size="lg"
            color="danger.400"
            _dark={{
              color: 'danger.300',
            }}
          />
          <Text color="light.800" fontSize="12">
            购物车
          </Text>
        </Center>
        <Center>
          <Button
            size="sm"
            variant="subtle"
            colorScheme="danger"
            ml={0.21 * w}
            // ml={0.1 * w}
            // mt={0.005 * h}
            color="danger.800">
            加入购物车
          </Button>
        </Center>
        <Center>
          <Button
            size="sm"
            colorScheme="danger"
            // ml={0.1 * w}
            // mt={0.005 * h}
            // color="danger.800"
          >
            一键开团
          </Button>
        </Center>
      </HStack>
    </Box>
  );
}
