import { WorkData } from "./source/works";

export interface ErroData {
    title: string;
    company: string;
    started: string;
    ended: string;
}

export const onTitleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    form: WorkData,
    setForm: React.Dispatch<React.SetStateAction<WorkData>>,
    errors: ErroData,
    setErrors: React.Dispatch<React.SetStateAction<ErroData>>
) => {
    const titleValue = event.target.value;
    setForm({
        ...form,
        title: titleValue,
    });
    if (titleValue.trim() === '' || titleValue.length > 50) {
        setErrors({
            ...errors,
            title: 'Job title harus diisi dan tidak lebih dari 50 karakter',
        });
    } else {
        setErrors({
            ...errors,
            title: '',
        });
    }
};

export const onCompanyChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    form: WorkData,
    setForm: React.Dispatch<React.SetStateAction<WorkData>>,
    errors: ErroData,
    setErrors: React.Dispatch<React.SetStateAction<ErroData>>
) => {
    const companyValue = event.target.value;
    setForm({
        ...form,
        company: companyValue,
    });
    if (companyValue.trim() === '') {
        setErrors({
            ...errors,
            company: 'Nama perusahaan harus diisi',
        });
    } else {
        setErrors({
            ...errors,
            company: '',
        });
    }
};

export const onDescriptionChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    form: WorkData,
    setForm: React.Dispatch<React.SetStateAction<WorkData>>,
) => {
    const descriptionValue = event.target.value;
    setForm({
        ...form,
        description: descriptionValue,
    });
};

export const onStartedMonthChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    form: WorkData,
    setForm: React.Dispatch<React.SetStateAction<WorkData>>,
) => {
    const value = event.target.value;
    const monthValue = form.started.split(' ')[1];
    const updatedDate = `${value} ${monthValue}`;
    setForm({
        ...form,
        started: updatedDate,
    });
};

export const onStartedYearChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
    form: WorkData,
    setForm: React.Dispatch<React.SetStateAction<WorkData>>,
) => {
    const value = event.target.value;
    const yearValue = form.started.split(' ')[0];
    const updatedDate = `${yearValue} ${value}`;
    setForm({
        ...form,
        started: updatedDate,
    });
};



