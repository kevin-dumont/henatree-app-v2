import React, { Children } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import type { FormBuilderProps } from '@/components/UI/organisms/FormBuilder/types/types';
import { Step } from '@/components/UI/organisms/FormBuilder/components/Step';
import TextField from '@/components/UI/organisms/FormBuilder/FormFields/TextField';
import Date from '@/components/UI/organisms/FormBuilder/FormFields/Date';
import Custom from '@/components/UI/organisms/FormBuilder/FormFields/Custom';
import Choice from '@/components/UI/organisms/FormBuilder/FormFields/Choice';
import { COLORS } from '@/constants/theme';

const Stack = createStackNavigator();

const FormBuilder = <K extends string, V>({
  children,
}: FormBuilderProps<K, V>) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: COLORS.neutral.white },
        headerShown: false,
      }}>
      {Children.map(children, (child, i: number) => (
        <Stack.Screen name={child.props.name} key={child.props.name}>
          {() => (
            <Step
              {...child.props}
              key={child.props.name}
              index={i + 1}
              stepCount={Children.count(children)}
              prevStep={children[i - 1]?.props?.name || undefined}
              nextStep={children[i + 1]?.props?.name || undefined}>
              {child}
            </Step>
          )}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

FormBuilder.TextField = TextField;
FormBuilder.Date = Date;
FormBuilder.Custom = Custom;
FormBuilder.Choice = Choice;

export default FormBuilder;
