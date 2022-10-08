import { useFormik } from 'formik';
import * as Yup from 'yup';
import vector from '../../images/vector.png';
import { Section } from './Form.Styled';

export const Form = () => {
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
      row: '',
      column: '',
      range: '',
    },
    /* validationSchema, */
    onSubmit: async (values, actions) => {
      /* console.log(values); */
      actions.resetForm({
        values: {
          row: '',
          column: '',
          range: '',
        },
      });
    },
  });

  return (
    <Section>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="border-container">
          <button className="button" type="button" /* onClick={onLoginClick} */>
            Приход +
          </button>
        </div>
        <button className="buttonTwo" type="button" /* onClick={onLoginClick} */>
          Дублировать приход
        </button>
        <div className="container">
          <button className="buttonTwo buttonThree" type="button" /* onClick={onLoginClick} */>
            Провести
          </button>
          <button className="buttonTwo buttonThree" type="button" /* onClick={onLoginClick} */>
            На удаление
          </button>
        </div>
        <div className="container">
          <button className="buttonTwo buttonFour" type="button" /* onClick={onLoginClick} */>
            В списание
          </button>
          <button className="buttonTwo buttonFour" type="button" /* onClick={onLoginClick} */>
            В перемещение
          </button>
        </div>
        <button className="buttonTwo" type="button" /* onClick={onLoginClick} */>
          Возвраты поставщику по приходу
        </button>

        <div className="container-buttons">
          <div className="border-containerTwo">
            <button className=" button buttonFive" type="button" /* onClick={onLoginClick} */>
              Импорт
            </button>
          </div>
          <div className="border-containerTwo">
            <button className="button buttonFive" type="button" /* onClick={onLoginClick} */>
              Экспорт
            </button>
          </div>
          <div className="border-containerTwo">
            <button className="button buttonFive" type="button" /* onClick={onLoginClick} */>
              Печать
            </button>
          </div>
        </div>
        <div className="container-input">
          <input
            label="first name"
            name="row"
            className="form-input"
            placeholder="Номер документа, название товара..."
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('row')}
            value={formik.values.row}
          />
          <img src={vector} className="image-input" alt="Dandruff" width={'12px'} height={'12px'} />
        </div>
        {/*     <div className="container-input">
          <label className="label-input">
            <input
              name="column"
              className="form-input"
              placeholder="К-сть Колонок *"
              type="number"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('column')}
              value={formik.values.column}
            />
          </label>
        </div>

        <div className="container-input">
          <label className="label-input">
            <input
              name="range"
              className="form-input"
              placeholder="Х - діапазон *"
              type="number"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur('range')}
              value={formik.values.range}
            />
          </label>
        </div> */}
        {/*  <div className="buttons">
          <button className="button" type="submit" onClick={onLoginClick}>
            Створити матрицю
          </button>
        </div> */}
      </form>
    </Section>
  );
};
