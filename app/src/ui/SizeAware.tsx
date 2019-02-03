import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';
import { Size } from '../util/Spatial';
import { Omit } from '../util/Utils';

export function SizeAware<T extends { size: Size }>(
  Comp: React.ComponentType<T>,
  style?: StyleProp<ViewStyle>
): React.ComponentType<Omit<T, 'size'>> {
  @observer
  class SA extends React.Component<Omit<T, 'size'>> {
    @observable
    size: Size | null = null;

    render() {
      return (
        <View onLayout={this.onLayout} style={style}>
          {this.size !== null ? <Comp {...this.propsWithSize} /> : null}
        </View>
      );
    }

    get propsWithSize(): T {
      return { ...this.props, size: this.size! } as T;
    }

    onLayout = (e: LayoutChangeEvent) => (this.size = e.nativeEvent.layout);
  }
  return observer(SA);
}
