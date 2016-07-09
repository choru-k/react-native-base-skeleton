#react-native-base-skeleton
make skeleton in your react-native.<br/>
This component is based on [native-base](https://github.com/GeekyAnts/NativeBase)

##Install
`npm install react-native-base-skeleton`

##Why use this
native-base has same component. But components are restrictions(ex: header has always 3 components, all components are NBComponent). If you want to use native-base's structure, this module is good.

##Container
  * All the components should be included within the Container.
  * Container takes mainly four components: `<Header>`, `<Content>`, `<Footer>`, and `<Overlay>`

##Header
  * There can be only a single Header component into your Container
  * Header can have custom style.

##Footer
  * There can be only a single Footer component into your Container
  * Footer can have custom style.

##Content
  * There can be only a single Content component into your Container
  * Content can have custom style, contentContainerStyle.
  * Content is based on ScrollView

##Overlay
  * There can be only a single Overlay component into your Container
  * Overlay can have custom style(default flex:0).
  * This component has highest z-index.

##Example
```js
import React, {
  Component
} from 'react'

import {
  Text,
} from 'react-native'

import {
  Container,
  Header,
  Content,
  Footer,
  Overlay
} from 'react-native-base-skeleton'

class example extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>header</Text>
        </Header>
        <Content></Content>
        <Footer>
          <Text>footer</Text>
        </Footer>
        <Overlay></Overlay>
      </Container>
    )
  }
}
```
If you want to use custom component, just add attribute. header, content, footer, overlay.

```js
class example extends Component {
  render() {
    return (
      <Container>
        <CustomHeader header={true}>
          <Text>header</Text>
        </CustomHeader>
        <CustomContent contnet={true}></CustomContent>
        <CustomFooter footer={true}>
          <Text>footer</Text>
        </CustomFooter>
        <CustomOverlay overlay={true}></CustomOverlay>
      </Container>
    )
  }
```

##styles
###default Header Style
```js
{
  backgroundColor: '#0AA',
  justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 15,
  paddingTop: (Platform.OS === 'ios' ) ? 15 : 0,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.1,
  shadowRadius: 1.5,
  height: (Platform.OS === 'ios' ) ? 70 : 55,
  elevation: 2
}
```
###default Footer Style
```js
{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    height: 55,
    flexDirection: 'row'
}
```

###default content Style
```js
let defaulContentContainerStyle= {
  padding: 10,
}
let defaultStyle = {
  flex : 1,
  backgroundColor: '#fff'
}
```

###default Overlay Style
```js
{
  flex: 0
}
```
