import React, { useEffect, useState } from 'react';
import { getForms } from '../../services/formService';
import { Form } from '../../types/types';
import FormList from '../../components/FormList';

const Forms: React.FC = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const formList = await getForms();
        setForms(formList);
      } catch (err) {
        setError('Feil ved henting av skjemaer');
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  return (
    <div>
      <h2>Liste over skjemaer</h2>
      {loading && <p>Laster skjemaer...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <FormList forms={forms} />}
    </div>
  );
};

export default Forms;