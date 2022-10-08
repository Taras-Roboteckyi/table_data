import DatePicker /* , { registerLocale } */ from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useState } from 'react';

import calendarIcon from '../../images/calendar-icon.svg';
import bookmark from '../../images/bookmark-fill.svg';

import {
  CalendarContainer,
  Container,
  Title,
  CalendarStyles,
  Img,
  Input,
  InputTwo,
  InputThree,
  InputFour,
  DivContainer,
  DivContainerButtons,
  ContainerButton,
  Button,
  ButtonSubmit,
  ButtonIcon,
  ImgIcon,
} from './FilterForm.styled';

export default function FilterForm() {
  const [date, setDate] = useState(false);
  const [dateNext, setDateNext] = useState(false);

  /* const validationSchema = Yup.object({
    row: Yup.number()
      .integer('Must be more than 0')
      .max(100, 'Максимальне допустиме число 100!')
      .min(1, 'Мінімальне допустиме число 1!')
      .required("Це поле обов'язкове!"),

    column: Yup.number()
      .positive()
      .min(1, 'Мінімальне допустиме число 1!')
      .max(100, 'Максимальне допустиме число 100!')
      .required("Це поле обов'язкове!"),

    range: Yup.number()
      .positive()
      .min(1, 'Мінімальне допустиме число 1!')
      .max(100, 'Максимальне допустиме число 100!')
      .required("Це поле обов'язкове!"),
  }); */

  const formik = useFormik({
    initialValues: {
      number: '',
      provider: '',
      company: '',
      sum: '',
      quantity: '',
      stock: '',
      returns: '',
      document: '',
      status: '',
      responsible: '',
      comment: '',
    },
    /* validationSchema, */
    onSubmit: async (values, actions) => {
      /* console.log(values); */
      actions.resetForm({
        values: {
          number: '',
          provider: '',
          company: '',
          sum: '',
          quantity: '',
          stock: '',
          returns: '',
          document: '',
          status: '',
          responsible: '',
          comment: '',
        },
      });
    },
  });

  return (
    <Container>
      <Title>Фильтры</Title>
      <form onSubmit={formik.handleSubmit}>
        <CalendarContainer>
          <CalendarStyles>
            <DatePicker
              locale="uk"
              dateFormat="dd.MM.yyyy"
              selected={date}
              onChange={setDate}
              maxDate={new Date()}
              className={'calendar'}
              placeholderText={'C'}
            />
            <Img src={calendarIcon} className="calendarIcon" alt="Calendar Icon" />
          </CalendarStyles>
          <CalendarStyles>
            <DatePicker
              locale="uk"
              dateFormat="dd.MM.yyyy"
              selected={dateNext}
              onChange={setDateNext}
              minDate={date}
              className={'calendar'}
              placeholderText={'По'}
            />
            <Img src={calendarIcon} className="calendarIcon" alt="Calendar Icon" />
          </CalendarStyles>
        </CalendarContainer>

        <DivContainer>
          <Input
            label="Order number"
            name="number"
            placeholder="Номер заказа"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('number')}
            value={formik.values.number}
          />

          <Input
            label="provider"
            name="provider"
            placeholder="Поставщик"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('provider')}
            value={formik.values.provider}
          />
        </DivContainer>
        <InputTwo
          label="company"
          name="company"
          placeholder="Компания"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('company')}
          value={formik.values.company}
        />

        <DivContainer>
          <InputThree
            label="Sum"
            name="sum"
            placeholder="Сумма"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('sum')}
            value={formik.values.sum}
          />

          <InputThree
            label="Quantity of goods"
            name="quantity"
            placeholder="Кол-во товара"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('quantity')}
            value={formik.values.quantity}
          />
        </DivContainer>

        <DivContainer>
          <InputThree
            label="Stock"
            name="stock"
            placeholder="Склад"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('stock')}
            value={formik.values.stock}
          />

          <InputThree
            label="Returns to supplier"
            name="returns"
            placeholder="Возвраты поставщику"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('returns')}
            value={formik.values.returns}
          />
        </DivContainer>

        <DivContainer>
          <InputThree
            label="Document Number"
            name="document"
            placeholder="Номер документа"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('document')}
            value={formik.values.document}
          />

          <InputThree
            label="Document Status"
            name="status"
            placeholder="Статус документа"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('status')}
            value={formik.values.status}
          />
        </DivContainer>
        <DivContainer>
          <InputFour
            label="Responsible"
            name="responsible"
            placeholder="Ответственный"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('responsible')}
            value={formik.values.responsible}
          />
        </DivContainer>

        <InputTwo
          label="Comment"
          name="comment"
          placeholder="Комментарий"
          type="text"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('comment')}
          value={formik.values.comment}
        />
        <DivContainerButtons>
          <ContainerButton>
            <ButtonSubmit type="submit">Применить</ButtonSubmit>
          </ContainerButton>
          <ContainerButton>
            <Button type="button">Очистить</Button>
          </ContainerButton>
          <ContainerButton>
            <ButtonIcon type="button">
              <ImgIcon src={bookmark} alt="Bookmark Icon" />
            </ButtonIcon>
          </ContainerButton>
        </DivContainerButtons>
      </form>
    </Container>
  );
}
