import React from 'react';
import '../styles/FormList.scss';

interface Form {
  id: number;
  title: string;
  createdDate: string;
}

interface FormListProps {
  forms: Form[];
}

const FormList: React.FC<FormListProps> = ({ forms }) => {
  return (
    <ul className="form-list">
      {forms.map((form) => (
        <li key={form.id} className="form-list__item">
          <h3>{form.title}</h3>
          <p>Opprettet: {new Date(form.createdDate).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default FormList;
