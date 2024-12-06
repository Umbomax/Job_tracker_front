import React, { useState } from 'react';
import styles from './JobForm.module.scss';

const JobForm: React.FC = () => {
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        salaryFrom: '',
        salaryTo: '',
        status: '',
        notes: '',
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Преобразуем и валидируем данные
        const salaryFrom = formData.salaryFrom ? parseInt(formData.salaryFrom) : 0;
        const salaryTo = formData.salaryTo ? parseInt(formData.salaryTo) : salaryFrom;

        if (salaryFrom > salaryTo) {
            alert('"Salary From" cannot be greater than "Salary To"');
            return;
        }

        // Отправляем данные на сервер
        const jobData = {
            ...formData,
            salaryFrom,
            salaryTo,
        };

        console.log('Submitted Job:', jobData);
        
    };

    return (
        <form onSubmit={handleSubmit}>
    <input
        type="text"
        id="company"
        name="company"
        placeholder="Компания"
        value={formData.company}
        onChange={handleChange}
        required
    />
    <input
        type="text"
        id="position"
        name="position"
        placeholder="Вакансия"
        value={formData.position}
        onChange={handleChange}
        required
    />
    <input
        type="number"
        id="salaryFrom"
        name="salaryFrom"
        placeholder="Зарплата от"
        value={formData.salaryFrom}
        onChange={handleChange}
    />
    <input
        type="number"
        id="salaryTo"
        name="salaryTo"
        placeholder="Зарплата до"
        value={formData.salaryTo}
        onChange={handleChange}
    />
    <textarea
        id="notes"
        name="notes"
        placeholder="Заметки"
        value={formData.notes}
        onChange={handleChange}
    ></textarea>
    <button type="submit">Добавить</button>
</form>
    );
};

export default JobForm;
