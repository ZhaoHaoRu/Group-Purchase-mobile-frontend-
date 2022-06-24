import React, {Component} from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Button,
  Pressable,
} from 'native-base';
import {Dimensions} from 'react-native';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
import {Link} from '@react-navigation/native';
import DetailScreen from '../screens/DetailScreen';

const HomeCard = () => {
  const screen = {Detail: <DetailScreen />};
  return (
    <Box
      alignItems="center"
      // height={0.25 * h}
      backgroundColor={'white'}
      marginBottom={0.02 * w}
      borderRadius="lg">
      <Box maxW="90%" rounded="lg" overflow="hidden">
        <Box>
          <AspectRatio w="100%" ratio={16 / 7} borderRadius="lg">
            <Image
              source={{
                uri: 'https://img.zcool.cn/community/01dec05680a3f26ac7251bb6972995.jpg@1280w_1l_2o_100sh.jpg',
              }}
              alt="image"
              borderRadius="lg"
            />
          </AspectRatio>
        </Box>
        <Stack height={0.1 * h}>
          <Stack height={0.1 * h}>
            <HStack height={0.05 * h}>
              <Link to={{screen: 'Detail', initial: false}}>
                <Heading size="md" ml="0" mt={0.02 * h} color="#52525b">
                  团购名称
                </Heading>
              </Link>
              <Box width={0.4 * w}>
                <Text size="sm" ml={0.05 * w} mt={0.01 * h} color="gray.700">
                  团购商家名称
                </Text>
              </Box>
              <Button
                size="xs"
                variant="subtle"
                colorScheme="danger"
                ml={0.1 * w}
                mt={0.005 * h}
                color="danger.800">
                订阅
              </Button>
            </HStack>
            <Text
              fontSize="sm"
              color="danger.600"
              // fontWeight="500"
              thin>
              商品价格XXXXXXX
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeCard;
