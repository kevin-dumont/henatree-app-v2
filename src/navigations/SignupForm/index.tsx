import React from 'react';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import { Asset } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

import FormBuilder from '@components/organisms/FormBuilder';
import { useFormBuilder } from '@components/organisms/FormBuilder/useFormBuilder';
import AvatarFormField from '@blocks/AvatarFormField';
import LegalFormStep, { LegalConsent } from '@blocks/LegalFormStep';

type FormInputs = {
  pseudo: string;
  email: string;
  birthdate: Date;
  password: string;
  avatar: Asset;
  legalConsent: LegalConsent;
};

const SignupForm = () => {
  const { register } = useFormBuilder<FormInputs>({
    defaultValues: {
      legalConsent: {
        conditions: false,
        gdpr: false,
      },
    },
  });

  const navigation = useNavigation();

  return (
    <FormBuilder>
      <FormBuilder.TextField
        title="Choisi ton pseudo"
        helperText="Ce pseudo sera ton nom d’utilisateur unique sur henatree."
        placeholder="Indique ton pseudo"
        {...register('pseudo', {
          rules: { required: true },
          messages: 'Merci de choisir ton pseudo',
        })}
      />

      <FormBuilder.Date
        title="Quelle est ta date de naissance ?"
        helperText="Nous l’utiliserons pour te mettre en relation avec des personnes de ton âge."
        placeholder="Indique nous ta date de naissance"
        {...register('birthdate', {
          rules: { required: true },
          messages: "Merci d'indiquer ta date de naissance",
        })}
      />

      <FormBuilder.TextField
        keyboardType="email-address"
        title="Quelle est ton adresse mail ?"
        helperText="Cette adresse mail servira lors de ta connexion"
        placeholder="Indique ton email"
        {...register('email', {
          rules: {
            required: true,
            validate: isEmail,
          },
          messages: {
            required: 'Merci de reseigner un email',
            validate: 'Merci de reseigner un email valide',
          },
        })}
      />

      <FormBuilder.TextField
        secureTextEntry
        title="Crée ton mot de passe"
        helperText="Choisi toi un mot de passe d'au moins 8 caractères : 1 chiffre, 1 majuscule, 1 minuscule, et 1 caractère spécial"
        placeholder="Indique ton mot de passe"
        {...register('password', {
          rules: {
            required: true,
            validate: isStrongPassword,
          },
        })}
      />

      <FormBuilder.Custom
        title="As-tu une photo a ajouter ?"
        helperText="Nous avons besoin de quelques informations afin de compléter ton profil."
        component={AvatarFormField}
        {...register('avatar')}
      />

      <FormBuilder.Custom
        title="Conditions d'utilisation et confidentialité"
        helperText="Nous avons besoin de quelques informations afin de compléter ton profil."
        component={LegalFormStep}
        {...register('legalConsent', {
          rules: {
            validate: ({ conditions, gdpr }) => conditions && gdpr,
          },
          messages: {
            validate:
              "Vous devez accetper nos conditions d'utilisation et notre politique de protection des données pour continuer",
          },
        })}
        onNextStepClick={() => navigation.navigate('SignupLoader')}
      />
    </FormBuilder>
  );
};

export default SignupForm;
