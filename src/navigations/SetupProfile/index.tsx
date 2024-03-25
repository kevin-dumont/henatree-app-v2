import React from 'react';

import FormBuilder from '@components/organisms/FormBuilder';
import { useFormBuilder } from '@components/organisms/FormBuilder/hooks/useFormBuilder';

type FormInputs = {
  favoriteHangouts: string;
  goal: string;
};

const SetupProfile = () => {
  const { register } = useFormBuilder<FormInputs>();

  return (
    <FormBuilder>
      <FormBuilder.Choice
        title="Choisi ton pseudo"
        choices={[
          { value: 'test', layout: 'square', label: 'Toto', id: 'test' },
          { value: 'test1', layout: 'square', label: 'Toto1', id: 'test1' },
        ]}
        helperText="Ce pseudo sera ton nom d’utilisateur unique sur henatree."
        {...register('favoriteHangouts')}
      />

      <FormBuilder.Choice
        title="Choisi ton pseudo"
        choices={[
          { value: 'test', layout: 'square', label: 'Toto', id: 'test' },
          { value: 'test1', layout: 'square', label: 'Toto1', id: 'test1' },
        ]}
        helperText="Ce pseudo sera ton nom d’utilisateur unique sur henatree."
        {...register('goal')}
      />
    </FormBuilder>
  );
};

export default SetupProfile;
