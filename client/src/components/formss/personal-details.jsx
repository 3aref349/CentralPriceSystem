import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormAutoComplete, FormRadioGroup,
    FormTextArea
} from './form-components.jsx';

import {
    nameValidator, requiredValidator
} from './validators.jsx'

import {
    countries, genders
} from './data.jsx'

export const PersonalDetails = (
    <div>
        <Field
            key={'fullName'}
            id={'fullName'}
            name={'fullName'}
            label={'Full Name'}
            component={FormInput}
            validator={nameValidator}
        />
        <Field
            key={'countryselected'}
            id={'countryselected'}
            name={'countryselected'}
            label={'Country'}
            hint={'Hint: Only Eroupean countries'}
            component={FormAutoComplete}
            data={countries}
            validator={requiredValidator}
        />
        <Field
            key={'gender'}
            id={'gender'}
            name={'gender'}
            label={'Gender'}
            layout={'horizontal'}
            component={FormRadioGroup}
            data={genders}
            validator={requiredValidator}
        />
        <Field
            key={'about'}
            id={'about'}
            name={'about'}
            label={'About'}
            optional={true}
            component={FormTextArea}
        />
    </div>
);