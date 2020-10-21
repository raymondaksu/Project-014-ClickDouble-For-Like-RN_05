import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {productStyle} from '../style/myStyle';
import DoubleClick from 'react-native-double-click';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ProductItem = ({product}) => {
  const [heart, setHeart] = React.useState(true);
  const [opacityHeart, setOpacityHeart] = React.useState(0);
  const [thirdBoxPosition, setThirdBoxPosition] = React.useState('left');

  const toggleThirdBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setThirdBoxPosition(thirdBoxPosition === 'left' ? 'right' : 'left');
  };

  const HandleClick = () => {
    {
      setHeart(!heart);
      if (heart) {
        setOpacityHeart(0.8);
      }
      toggleThirdBox();
    }
  };

  React.useEffect(() => {
    const delay = setTimeout(() => {
      setOpacityHeart(0);
    }, 400);
    return () => delay;
  }, [opacityHeart]);

  return (
    <View style={productStyle.frame}>
      <DoubleClick onClick={HandleClick}>
        <Image style={productStyle.image} source={{uri: product.img}} />
        <Image
          style={[
            productStyle.image2,
            thirdBoxPosition === 'left' ? null : productStyle.image2_anime,
            {opacity: opacityHeart},
          ]}
          source={require('../style/images/heart3x.png')}
        />
      </DoubleClick>
      <View style={productStyle.titleContainer}>
        <Text style={productStyle.title}>{product.userName.toUpperCase()}</Text>
        <Text style={productStyle.emoji}>{heart ? '🖤' : '💖'}</Text>
      </View>
      <Text style={productStyle.desc}>{product.description}</Text>
    </View>
  );
};

export default ProductItem;

{
  /* <TouchableWithoutFeedback
    style={{ position: 'absolute', left: 0, padding: 20, backgroundColor:'green' }}
    onPress={() => {
        this.backCount++
        if (this.backCount == 2) {
            clearTimeout(this.backTimer)
            console.warn("Clicked twice")
        } else {
            this.backTimer = setTimeout(() => {
            this.backCount = 0
            }, 3000) #mention here the time for clearing the counter in ms
        }

    }}
>
</TouchableWithoutFeedback> */
}
