import React, {useState} from "react";
import ReactDateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import "./DateTimePicker.css"
import {Field, FieldError, FieldHint, FieldLabel, Flex} from "@strapi/design-system";
import {useIntl} from 'react-intl';

const DateTimePicker = (props) => {
  const {formatMessage} = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const {attribute, description, error, intlLabel, labelAction, name, onChange, required, value} = props;

  const handleChange = (value) => {
    onChange({
      target: {
        name, value: new Date(value).toISOString(), type: attribute.type,
      },
    });
  }

  const toggleCalenderOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Field
        name={name}
        as="fieldset"
        error={error}
        required={required}
      >
        <Flex as="span" direction="column" alignItems="stretch" gap={1}>
          <FieldLabel
            as="legend"
            action={labelAction}
            onClick={() => toggleCalenderOpen()}
          >
            {formatMessage(intlLabel)}
          </FieldLabel>

          <div className="DateTimePicker">
            <Flex flex="1" gap={1}>
              <ReactDateTimePicker
                className={"DateTimePicker__input"}
                disableClock={true}
                onChange={handleChange}
                value={value}
                isCalendarOpen={isOpen}
              />
            </Flex>
          </div>

          <FieldHint hint={description}/>
          <FieldError/>
        </Flex>
      </Field>
    </>
  )
}

export default DateTimePicker
