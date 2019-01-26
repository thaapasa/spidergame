import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';
import { Size } from '../util/Spatial';

export function SizeAware<P, T extends P>(
  Comp: React.ComponentType<T & { size: Size }>,
  style?: StyleProp<ViewStyle>
) {
  @observer
  class SA extends React.Component<T> {
    @observable
    size: Size | null = null;

    render() {
      return (
        <View onLayout={this.onLayout} style={style}>
          {this.size !== null ? (
            <Comp {...this.props} size={this.size} />
          ) : null}
        </View>
      );
    }

    onLayout = (e: LayoutChangeEvent) => (this.size = e.nativeEvent.layout);
  }
  return observer(SA);
}
