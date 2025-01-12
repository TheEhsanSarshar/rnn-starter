import React from 'react';
import { ScrollView } from 'react-native';
import { View, Button, Text } from 'react-native-ui-lib';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist';
import { observer } from 'mobx-react';

import { useServices } from '../services';
import { useStores } from '../stores';

import { Section } from '../components/section';
import { Reanimated2 } from '../components/reanimated2';

export const Main: NavigationFunctionComponent = observer(({ componentId }) => {
  const { nav, t } = useServices();
  const { counter, ui } = useStores();

  useNavigationButtonPress(counter.inc, componentId, 'inc');
  useNavigationButtonPress(counter.dec, componentId, 'dec');

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View padding-m>
          <Section title={t.do('section.navigation.title')}>
            <Button
              marginV-xs
              label={t.do('section.navigation.button.push')}
              onPress={() => nav.push(componentId, 'Example')}
            />
            <Button
              marginV-xs
              label={t.do('section.navigation.button.show')}
              onPress={() => nav.show('Example')}
            />
          </Section>

          <Section title="MobX">
            <View centerV>
              <Text marginB-s text60R textColor>
                App launches: {ui.appLaunches}
              </Text>
              <Text marginB-s text60R textColor>
                Counter: {counter.value}
              </Text>
              <Button margin-xs label="-" onPress={counter.dec} />
              <Button margin-xs label="+" onPress={counter.inc} />
              <Button margin-xs label="reset" onPress={counter.reset} link />
            </View>
          </Section>

          <Section title="Reanimated 2">
            <Reanimated2 />
          </Section>
        </View>
      </ScrollView>
    </View>
  );
});
